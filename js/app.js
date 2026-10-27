(function(){
'use strict';
const DATA = window.UMAK_DATA;
const LESSONS = DATA.lessons;
const LBY = Object.fromEntries(LESSONS.map(l=>[l.id,l]));
const EVENT_DATE = new Date(2026,10,4); // 4 Nov 2026, local

/* ---------- helpers ---------- */
const store = {
  get(k,d){ try{ const v=localStorage.getItem('umak.'+k); return v==null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem('umak.'+k,JSON.stringify(v)); }catch(e){} },
  del(k){ try{ localStorage.removeItem('umak.'+k);}catch(e){} }
};
function h(tag,attrs,...kids){
  const e=document.createElement(tag);
  for(const k in (attrs||{})){
    const v=attrs[k]; if(v==null||v===false) continue;
    if(k==='class') e.className=v;
    else if(k==='html') e.innerHTML=v;
    else if(k.slice(0,2)==='on') e.addEventListener(k.slice(2),v);
    else if(v===true) e.setAttribute(k,'');
    else e.setAttribute(k,v);
  }
  for(const c of kids.flat(Infinity)){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(String(c))); }
  return e;
}
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const fmtTime = s => { s=Math.max(0,Math.round(s)); const m=Math.floor(s/60), r=s%60; return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0'); };
const pct = (a,b) => b? Math.round(100*a/b) : 0;
const LET = ['A','B','C','D'];
let cleanups = [];
function onCleanup(fn){ cleanups.push(fn); }
function runCleanups(){ cleanups.forEach(f=>{try{f()}catch(e){}}); cleanups=[]; }
function lessonTag(id){ const l=LBY[id]; return h('span',{class:'tag'}, l.no==='+'?'Trivia':'L'+l.no); }

/* ---------- stats ---------- */
function getStats(){ return store.get('stats',{q:{},c:{}}); }
function bump(kind,id,ok){ const s=getStats(); const r=s[kind][id]||[0,0,0]; r[0]++; if(ok) r[1]++; r[2]=ok?0:1; s[kind][id]=r; store.set('stats',s); }
function addHistory(rec){ const hs=store.get('history',[]); hs.unshift(rec); store.set('history',hs.slice(0,40)); }

/* ---------- countdown ---------- */
function updateCountdown(){
  const el=document.getElementById('countdown');
  const now=new Date(); const t0=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const d=Math.round((EVENT_DATE-t0)/86400000);
  el.innerHTML = d>0 ? 'Quiz Bee · Nov 4 · <b>'+d+' day'+(d===1?'':'s')+'</b> to go' : d===0 ? '<b>Today is Quiz Bee day</b>' : 'Quiz Bee · Nov 4 · done';
}

/* ---------- router ---------- */
const view=document.getElementById('view');
const TABS=['review','quiz','cards','progress'];
function route(){
  runCleanups();
  let t=location.hash.replace('#','');
  if(!TABS.includes(t)) t=store.get('tab','review');
  store.set('tab',t);
  document.querySelectorAll('nav.tabs a').forEach(a=>{ if(a.dataset.tab===t) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  view.replaceChildren();
  ({review:viewReview,quiz:viewQuiz,cards:viewCards,progress:viewProgress})[t](view);
  window.scrollTo(0,0);
}
function go(t){ if(location.hash==='#'+t) route(); else location.hash=t; }
window.addEventListener('hashchange',route);

/* ---------- shared UI: lesson picker ---------- */
function lessonPicker(sel, key, onChange){
  const box=h('div',{class:'stack'});
  function draw(){
    const chips=LESSONS.map(l=>{
      const on=sel.has(l.id);
      return h('button',{class:'chip','aria-pressed':on?'true':'false',onclick:()=>{ on?sel.delete(l.id):sel.add(l.id); onChange(); draw(); }},
        h('span',{class:'b'}), h('span',{class:'t'}, (l.no==='+'?'':l.no+'. ')+l.title), h('span',{class:'n'}, l[key].length));
    });
    box.replaceChildren(
      h('div',{class:'row'},
        h('button',{class:'btn small',onclick:()=>{LESSONS.forEach(l=>sel.add(l.id));onChange();draw();}},'Select all'),
        h('button',{class:'btn small',onclick:()=>{sel.clear();onChange();draw();}},'Clear'),
        h('button',{class:'btn small',onclick:()=>{sel.clear();LESSONS.filter(l=>l.no!=='+').forEach(l=>sel.add(l.id));onChange();draw();}},"Coach's lessons only (no trivia)")),
      h('div',{class:'chips'},chips));
  }
  draw(); return box;
}

/* ====================================================================
   REVIEW
==================================================================== */
function viewReview(root){
  const docs=DATA.docs;
  const reviewed=store.get('reviewed',{});
  let cur=store.get('doc',docs[0].id);
  if(!docs.find(d=>d.id===cur)) cur=docs[0].id;
  const nav=h('nav',{class:'docnav','aria-label':'Documents'});
  const body=h('div',{class:'doc'});
  root.append(h('div',{class:'review'},nav,body));

  function drawNav(){
    const groups=[]; let last=null;
    docs.forEach(d=>{
      if(d.group!==last){ nav.append(); groups.push(h('div',{class:'g'},d.group)); last=d.group; }
      groups.push(h('button',{'aria-current':d.id===cur?'true':'false',onclick:()=>{cur=d.id;store.set('doc',cur);drawNav();drawDoc();window.scrollTo(0,0);}},
        h('span',{class:'ck'+(reviewed[d.id]?' on':'')}), d.title));
    });
    nav.replaceChildren(...groups);
  }
  function drawDoc(){
    const d=docs.find(x=>x.id===cur);
    const art=h('article',{class:'md'});
    if(window.marked){ art.innerHTML=marked.parse(d.md,{gfm:true,breaks:false,mangle:false,headerIds:false}); }
    else art.append(h('pre',null,d.md));
    art.querySelectorAll('table').forEach(t=>{ const w=h('div',{class:'tablewrap'}); t.replaceWith(w); w.append(t); });
    art.querySelectorAll('a').forEach(a=>{ const hr=a.getAttribute('href')||''; if(!/^https?:/.test(hr)) a.replaceWith(...a.childNodes); else {a.target='_blank';a.rel='noopener noreferrer';} });
    const heads=[...art.querySelectorAll('h2')];
    const jump=h('div',{class:'jump','aria-label':'Jump to section'}, heads.map(x=>h('button',{onclick:()=>x.scrollIntoView({behavior:'smooth',block:'start'})}, x.textContent.replace(/^\d+\.\s*/,'').slice(0,34))));
    const l=d.lesson?LBY[d.lesson]:null;
    const head=h('div',{class:'doc-head'},
      h('label',{class:'switch'},h('input',{type:'checkbox',id:'rv-'+d.id,checked:!!reviewed[d.id],onchange:e=>{ if(e.target.checked) reviewed[d.id]=1; else delete reviewed[d.id]; store.set('reviewed',reviewed); drawNav(); }}),'Mark as reviewed'),
      l ? h('div',{class:'row'},
          h('button',{class:'btn small primary',onclick:()=>{ store.set('quizSetup',Object.assign(store.get('quizSetup',{}),{sel:[l.id]})); go('quiz'); }},'Quiz this lesson ('+l.mcq.length+')'),
          h('button',{class:'btn small',onclick:()=>{ store.set('cardSetup',Object.assign(store.get('cardSetup',{}),{sel:[l.id]})); go('cards'); }},'Flashcards ('+l.cards.length+')')) : null);
    body.replaceChildren(head, heads.length>2?jump:'', art);
  }
  drawNav(); drawDoc();
}

/* ====================================================================
   MULTIPLE CHOICE
==================================================================== */
function weightedPick(items, n, wfn){
  if(n>=items.length) return items.slice();
  return items.map(it=>({it,k:-Math.log(Math.random()||1e-9)/wfn(it)})).sort((a,b)=>a.k-b.k).slice(0,n).map(x=>x.it);
}
function pickItems(pool, n, {balanced,smart}, kind){
  const st=getStats()[kind];
  const wfn = smart ? (it=>{ const r=st[it.id]; if(!r) return 3; return r[2]?5:(r[1]/r[0]>=0.8?0.5:1.5); }) : (()=>1);
  n=Math.min(n,pool.length);
  let chosen;
  if(balanced){
    const groups={}; pool.forEach(p=>{(groups[p.l]=groups[p.l]||[]).push(p);});
    const ids=Object.keys(groups); const quota={}; ids.forEach(i=>quota[i]=0);
    let left=n, open=ids.slice();
    while(left>0 && open.length){
      const share=Math.max(1,Math.floor(left/open.length)); const order=shuffle(open);
      for(const i of order){ if(left<=0) break; const give=Math.min(share,groups[i].length-quota[i],left); quota[i]+=give; left-=give; }
      open=open.filter(i=>quota[i]<groups[i].length);
    }
    chosen=ids.flatMap(i=>weightedPick(groups[i],quota[i],wfn));
  } else chosen=weightedPick(pool,n,wfn);
  return shuffle(chosen);
}
function allQuestionPool(selIds,diffs){
  const out=[]; LESSONS.forEach(l=>{ if(!selIds.has(l.id)) return; l.mcq.forEach((m,i)=>{ if(!diffs||diffs.has(m.d)) out.push({id:l.id+':m:'+i,l:l.id,m}); }); });
  return out;
}
function buildQuizItem(p){
  const m=p.m, x=m.x||[];
  const opts=shuffle([{t:m.a,x:m.e||''},...m.w.map((t,i)=>({t,x:x[i]||''}))]);
  return {id:p.id,l:p.l,q:m.q,ch:opts.map(o=>o.t),c:opts.findIndex(o=>o.t===m.a),cx:opts.map(o=>o.x),e:m.e||'',d:m.d};
}

function viewQuiz(root){
  const saved=store.get('session.quiz',null);
  const def={sel:LESSONS.map(l=>l.id),n:50,mode:'exam',smart:false,balanced:true,timer:true,diffs:['E','A','D'],qt:0,qauto:false};
  const S=Object.assign(def,store.get('quizSetup',{}));
  const diffs=()=>new Set(S.diffs);
  const sel=new Set((S.sel||[]).filter(id=>LBY[id]));
  const wrap=h('div',{class:'setup'}); root.append(wrap);
  let customEl, sumEl, startBtn, limEl;
  function avail(){ return allQuestionPool(sel,diffs()).length; }
  function eff(){ const a=avail(); return S.n==='max'?a:Math.min(+S.n||1,a); }
  function persist(){ store.set('quizSetup',Object.assign({},S,{sel:[...sel]})); }
  function refreshSummary(){
    const a=avail(), n=eff();
    sumEl.replaceChildren(h('div',null,h('b',null,n+' question'+(n===1?'':'s')),h('span',{class:'muted'},'  from '+a+' available in '+sel.size+' lesson'+(sel.size===1?'':'s'))),
      h('div',{class:'muted'}, S.mode==='exam'&&S.timer ? 'Time limit: '+Math.max(1,Math.round(n*0.6))+' min (60 min per 100)' : S.mode==='exam'?'No time limit':'Instant feedback'));
    startBtn.disabled=n<1;
  }
  function draw(){
    const presets=[10,25,50,100,200,300];
    customEl=h('input',{type:'number',min:1,max:2000,id:'q-custom',inputmode:'numeric','aria-label':'Custom number of questions',value:presets.includes(S.n)||S.n==='max'?'':S.n,placeholder:'Custom',
      oninput:e=>{ const v=parseInt(e.target.value,10); S.n=v>0?v:50; persist(); drawPresets(); refreshSummary(); }});
    const presetBox=h('div',{class:'row'});
    function drawPresets(){
      presetBox.replaceChildren(h('div',{class:'seg',role:'group','aria-label':'Number of questions'},
        presets.map(p=>h('button',{'aria-pressed':S.n===p?'true':'false',onclick:()=>{S.n=p;customEl.value='';persist();drawPresets();refreshSummary();}},String(p))),
        h('button',{'aria-pressed':S.n==='max'?'true':'false',onclick:()=>{S.n='max';customEl.value='';persist();drawPresets();refreshSummary();}},'All')),
        customEl);
    }
    drawPresets();
    sumEl=h('div',{class:'summary'});
    startBtn=h('button',{class:'btn primary',onclick:start},'Start quiz');
    const seg=(key,opts)=>h('div',{class:'seg',role:'group'},opts.map(([v,t])=>h('button',{'aria-pressed':S[key]===v?'true':'false',onclick:()=>{S[key]=v;persist();draw();}},t)));
    const sw=(key,text)=>h('label',{class:'switch'},h('input',{type:'checkbox',id:'qs-'+key,checked:!!S[key],onchange:e=>{S[key]=e.target.checked;persist();refreshSummary();}}),text);
    const picker=lessonPicker(sel,'mcq',()=>{persist();refreshSummary();});
    const dSeg=h('div',{class:'seg',role:'group','aria-label':'Difficulty'},['E','A','D'].map(d=>h('button',{'aria-pressed':S.diffs.includes(d)?'true':'false',onclick:()=>{ const s2=new Set(S.diffs); if(s2.has(d)){ if(s2.size>1) s2.delete(d);} else s2.add(d); S.diffs=[...s2]; persist(); draw(); }},DIFF[d])));
    wrap.replaceChildren(
      saved ? h('div',{class:'resume'},h('div',null,h('b',null,'Unfinished quiz: '),saved.ans.filter(x=>x!=null).length+' of '+saved.items.length+' answered'),
        h('div',{class:'row'},h('button',{class:'btn primary small',onclick:()=>{ runQuiz(root,saved); }},'Resume'),h('button',{class:'btn small',onclick:()=>{store.del('session.quiz');route();}},'Discard'))) : '',
      h('section',null,h('p',{class:'label'},'1 · Lessons'),picker),
      h('section',null,h('p',{class:'label'},'2 · How many questions'),presetBox,h('p',{class:'hint'},'Elimination round: 100 questions, 60 minutes. Questions and choices are shuffled every time.')),
      h('section',{class:'stack'},h('p',{class:'label'},'3 · Options'),
        h('div',{class:'row'},seg('mode',[['exam','Exam: results at the end'],['practice','Practice: instant feedback']]),
          S.mode==='exam'?sw('timer','Time limit'):null),
        h('div',{class:'row'},sw('balanced','Balance across lessons'),sw('smart','Favor questions I missed or have not seen')),
        h('p',{class:'label'},'Difficulty'),dSeg,
        h('p',{class:'label'},'Time per question'),
        h('div',{class:'row'},seg('qt',[[0,'Off'],[20,'20 s'],[30,'30 s'],[45,'45 s'],[60,'60 s']]),S.qt?sw('qauto','Auto-skip when time is up'):null)),
      sumEl, h('div',null,startBtn));
    refreshSummary();
  }
  function start(){
    const pool=allQuestionPool(sel,diffs()); const n=eff(); if(!n) return;
    const picked=pickItems(pool,n,S,'q');
    const s={type:'quiz',mode:S.mode,t0:Date.now(),limit:(S.mode==='exam'&&S.timer)?Math.max(1,Math.round(n*0.6))*60:0,
      qt:S.qt,qauto:S.qauto,items:picked.map(buildQuizItem),ans:new Array(n).fill(null),flag:new Array(n).fill(false),idx:0,elapsed:0,lessons:[...sel]};
    store.set('session.quiz',s); runQuiz(root,s);
  }
  draw();
}

function runQuiz(root,s){
  runCleanups();
  const N=s.items.length; const practice=s.mode==='practice';
  let tick=null, confirmSubmit=false;
  const screen=h('div',null); root.replaceChildren(screen);
  const save=()=>{ s.elapsed=(s.elapsed||0); store.set('session.quiz',s); };
  const timerEl=h('div',{class:'timer','aria-label':'Timer'});
  let started=Date.now(); const base=s.elapsed||0;
  const elapsed=()=>base+(Date.now()-started)/1000;
  function updTimer(){
    const e=elapsed();
    if(s.limit){ const r=s.limit-e; timerEl.textContent=fmtTime(r); timerEl.classList.toggle('low',r<=300); if(r<=0){ finish(true); } }
    else timerEl.textContent=fmtTime(e);
  }
  const qEl=h('div',{class:'timer qt','aria-label':'Time for this question'});
  let qStart=Date.now(), qIdx=-1, qFired=false;
  function updQ(){
    if(!s.qt) return;
    if(s.ans[s.idx]!=null){ qEl.classList.remove('low','over'); return; }
    const r=s.qt-(Date.now()-qStart)/1000;
    qEl.textContent=r>=0?fmtTime(r):'+'+fmtTime(-r);
    qEl.classList.toggle('low',r<=5&&r>=0); qEl.classList.toggle('over',r<0);
    if(r<=0&&s.qauto&&!qFired&&s.idx<N-1){ qFired=true; move(1); }
  }
  const tickAll=()=>{ updTimer(); updQ(); };
  tick=setInterval(tickAll,1000); updTimer();
  onCleanup(()=>{ clearInterval(tick); s.elapsed=elapsed(); if(!s.done) store.set('session.quiz',s); document.removeEventListener('keydown',onKey); });

  const prog=h('i'); const posEl=h('span',{class:'pos'}); const body=h('div'); const pal=h('div',{class:'pal'}); const palWrap=h('details',{class:'pals'},h('summary',null,'Question map'),pal);
  const notice=h('div');
  screen.append(
    h('div',{class:'runbar'},posEl,h('div',{class:'row'},s.qt?qEl:null,timerEl,h('button',{class:'btn small',onclick:()=>{ s.elapsed=elapsed(); store.set('session.quiz',s); go('quiz'); }},'Save & exit'))),
    h('div',{class:'progress'},prog), body, notice, palWrap);

  function answered(){ return s.ans.filter(x=>x!=null).length; }
  function drawPal(){
    pal.replaceChildren(...s.items.map((it,i)=>{
      let cls=''; if(practice && s.ans[i]!=null) cls=s.ans[i]===it.c?'ok':'no'; else if(s.ans[i]!=null) cls='ans';
      if(s.flag[i]) cls+=' fl'; if(i===s.idx) cls+=' cur';
      return h('button',{class:cls,'aria-label':'Question '+(i+1)+(s.ans[i]!=null?', answered':'')+(s.flag[i]?', flagged':''),onclick:()=>{s.idx=i;confirmSubmit=false;draw();}},String(i+1));
    }));
  }
  function draw(){
    const it=s.items[s.idx]; const a=s.ans[s.idx]; const locked=practice&&a!=null;
    if(qIdx!==s.idx){ qIdx=s.idx; qStart=Date.now(); qFired=false; }
    const hasCx=!!(it.cx&&it.cx.some((t,k)=>k!==it.c&&t));
    posEl.textContent='Q '+(s.idx+1)+' / '+N+'  ·  answered '+answered();
    prog.style.width=pct(answered(),N)+'%';
    const ch=it.ch.map((t,i)=>{
      let cls='choice'; if(locked){ if(i===it.c) cls+=' right'; else if(i===a) cls+=' wrong'; }
      return h('button',{class:cls,'aria-pressed':(!locked&&a===i)?'true':'false',disabled:locked,onclick:()=>choose(i)},
        h('span',{class:'bub'},LET[i]),h('span',{class:'tx'},t,locked&&hasCx&&it.cx[i]?h('small',{class:'cx'},it.cx[i]):null));
    });
    const last=s.idx===N-1;
    body.replaceChildren(h('div',{class:'card qcard'},
      h('div',{class:'qmeta'},lessonTag(it.l),h('span',{class:'tag'},LBY[it.l].title),it.d?h('span',{class:'tag '+it.d},DIFF[it.d]):null,s.flag[s.idx]?h('span',{class:'tag',style:'color:var(--flag);border-color:var(--gold)'},'flagged'):null),
      h('p',{class:'qtext'},it.q), h('div',{class:'choices'},ch),
      locked?h('div',{class:'feedback '+(a===it.c?'ok':'no')}, a===it.c?'Correct.':'Incorrect. Correct answer: '+LET[it.c]+'. '+it.ch[it.c]):null,
      locked&&it.e&&!hasCx?h('p',{class:'expl'},it.e):null,
      h('div',{class:'nav'},
        h('button',{class:'btn',disabled:s.idx===0,onclick:()=>move(-1)},'Previous'),
        h('div',{class:'row'},
          practice?null:h('button',{class:'btn',onclick:()=>{s.flag[s.idx]=!s.flag[s.idx];save();draw();}},s.flag[s.idx]?'Unflag':'Flag for review'),
          practice?null:(a!=null?h('button',{class:'btn',onclick:()=>{s.ans[s.idx]=null;save();draw();}},'Clear answer'):null),
          last?h('button',{class:'btn gold',onclick:()=>finish(false)},'Finish'):h('button',{class:'btn primary',onclick:()=>move(1)},'Next')))));
    if(confirmSubmit){
      const un=N-answered();
      notice.replaceChildren(h('div',{class:'notice'},h('span',null,un+' question'+(un===1?'':'s')+' still unanswered. Submit anyway?'),
        h('div',{class:'row'},h('button',{class:'btn small gold',onclick:()=>finish(true)},'Submit now'),h('button',{class:'btn small',onclick:()=>{confirmSubmit=false;draw();}},'Keep working'))));
    } else notice.replaceChildren();
    drawPal(); updQ();
  }
  function move(d){ s.idx=Math.min(N-1,Math.max(0,s.idx+d)); confirmSubmit=false; save(); draw(); window.scrollTo({top:0}); }
  function choose(i){ if(practice&&s.ans[s.idx]!=null) return; s.ans[s.idx]=i; save(); draw(); }
  function onKey(e){
    if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if(e.ctrlKey||e.metaKey||e.altKey) return;
    const k=e.key.toLowerCase(); const m={a:0,b:1,c:2,d:3,'1':0,'2':1,'3':2,'4':3};
    if(k in m){ choose(m[k]); }
    else if(e.key==='ArrowRight'||k==='n') move(1);
    else if(e.key==='ArrowLeft'||k==='p') move(-1);
    else if(k==='f'&&!practice){ s.flag[s.idx]=!s.flag[s.idx]; save(); draw(); }
  }
  document.addEventListener('keydown',onKey);

  function finish(force){
    if(!force && answered()<N){ confirmSubmit=true; draw(); notice.scrollIntoView({block:'center'}); return; }
    s.done=true; s.elapsed=elapsed(); clearInterval(tick); document.removeEventListener('keydown',onKey);
    store.del('session.quiz');
    results();
  }
  function results(){
    const per={}; let correct=0, wrongIdx=[];
    s.items.forEach((it,i)=>{
      const a=s.ans[i]; const ok=a===it.c; const r=per[it.l]=per[it.l]||{n:0,c:0};
      r.n++; if(ok){r.c++;correct++;} else wrongIdx.push(i);
      if(a!=null) bump('q',it.id,ok);
    });
    addHistory({t:Date.now(),kind:'mcq',mode:s.mode,n:N,c:correct,secs:Math.round(s.elapsed)});
    let filter='all';
    const list=h('div',{class:'stack'});
    function drawList(){
      const rows=s.items.map((it,i)=>({it,i})).filter(({it,i})=> filter==='all'||(filter==='wrong'&&s.ans[i]!==it.c&&s.ans[i]!=null)||(filter==='skipped'&&s.ans[i]==null)||(filter==='flag'&&s.flag[i]));
      list.replaceChildren(...(rows.length?rows:[{none:1}]).map(r=> r.none? h('p',{class:'muted'},'Nothing in this filter.') : (({it,i})=>{
        const a=s.ans[i]; const ok=a===it.c;
        return h('div',{class:'review-item'+(ok?'':' bad')},
          h('div',{class:'qmeta'},h('span',{class:'tag'},'Q'+(i+1)),lessonTag(it.l),h('span',{class:'tag',style:ok?'color:var(--good);border-color:var(--good)':'color:var(--bad);border-color:var(--bad)'},a==null?'skipped':ok?'correct':'wrong')),
          h('p',null,h('b',null,it.q)),
          it.ch.map((t,k)=>h('div',{class:'rline '+(k===it.c?'c':(k===a?'x':''))},h('b',null,LET[k]+(k===it.c?' ✓':(k===a?' ✗':'  '))),h('span',null,t,it.cx&&it.cx[k]?h('small',{class:'cx'},it.cx[k]):null))),
          it.e&&!(it.cx&&it.cx.some((x,k)=>k!==it.c&&x))?h('p',{class:'expl'},it.e):null);
      })(r)));
    }
    const f=(k,t)=>h('button',{class:'btn small','aria-pressed':'false',onclick:e=>{filter=k;drawList();}},t);
    const lessonsHit=Object.entries(per);
    screen.replaceChildren(h('div',{class:'stack'},
      h('div',{class:'card',style:'text-align:center'},
        h('p',{class:'label'},'Result'),
        h('div',{class:'score'},correct,h('small',null,' / '+N)),
        h('p',{class:'muted'},pct(correct,N)+'% · '+fmtTime(s.elapsed)+(s.limit?' of '+fmtTime(s.limit):'')+' · '+(practice?'practice':'exam')),
        h('div',{class:'row',style:'justify-content:center;margin-top:10px'},
          wrongIdx.length?h('button',{class:'btn primary',onclick:()=>{
              const items=wrongIdx.map(i=>{const it=s.items[i]; const opts=shuffle(it.ch.map((t,k)=>({t,k}))); return {id:it.id,l:it.l,q:it.q,ch:opts.map(o=>o.t),c:opts.findIndex(o=>o.k===it.c),cx:opts.map(o=>it.cx&&it.cx[o.k]),e:it.e,d:it.d};});
              const ns={type:'quiz',mode:s.mode,t0:Date.now(),limit:0,qt:s.qt,qauto:s.qauto,items,ans:new Array(items.length).fill(null),flag:new Array(items.length).fill(false),idx:0,elapsed:0,lessons:s.lessons};
              store.set('session.quiz',ns); runQuiz(root,ns); window.scrollTo(0,0);
            }},'Retry the '+wrongIdx.length+' missed'):null,
          h('button',{class:'btn',onclick:()=>go('quiz')},'New quiz'),
          h('button',{class:'btn',onclick:()=>go('progress')},'Progress'))),
      lessonsHit.length>1?h('section',null,h('p',{class:'label'},'By lesson'),h('div',{class:'bars'},lessonsHit.sort((a,b)=>a[1].c/a[1].n-b[1].c/b[1].n).map(([id,r])=>
        h('div',{class:'bar'},h('span',{class:'nm'},LBY[id].title),h('span',{class:'tr'},h('i',{style:'width:'+pct(r.c,r.n)+'%'})),h('span',{class:'v'},r.c+'/'+r.n))))):null,
      h('section',{class:'stack'},h('p',{class:'label'},'Review answers'),
        h('div',{class:'row'},[['all','All'],['wrong','Wrong'],['skipped','Skipped'],['flag','Flagged']].map(([k,t])=>f(k,t))), list)));
    drawList(); window.scrollTo(0,0);
  }
  draw();
}

/* ====================================================================
   FLASHCARDS
==================================================================== */
const DIFF={E:'Easy',A:'Average',D:'Difficult'};
const TLIM={E:15,A:20,D:30};
const PTS={E:3,A:5,D:7};
function cardPool(selIds,diffs){
  const out=[]; LESSONS.forEach(l=>{ if(!selIds.has(l.id)) return; l.cards.forEach((c,i)=>{ if(diffs.has(c.d)) out.push({id:l.id+':c:'+i,l:l.id,d:c.d,q:c.q,a:c.a,alt:c.alt||[]}); }); });
  return out;
}
/* answer checking */
function base(s){ return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[‐-―−]/g,'-').replace(/[’‘`]/g,"'").replace(/\s+/g,' ').trim(); }
function key(s){ let b=base(s).replace(/^(the|a|an)\s+/,''); const k=b.replace(/[^a-z0-9]/g,''); return k||b; }
function lev(a,b){ const m=a.length,n=b.length; if(Math.abs(m-n)>2) return 9; let p=Array.from({length:n+1},(_,j)=>j); for(let i=1;i<=m;i++){ const c=[i]; for(let j=1;j<=n;j++) c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1)); p=c; } return p[n]; }
function tokens(s){ return base(s).split(/\s*(?:,|;|\band\b|&)\s*/).map(key).filter(Boolean).sort().join('|'); }
function checkAnswer(user,card){
  const u=key(user); if(!u) return {ok:false};
  const targets=[card.a,...(card.alt||[])];
  for(const t of targets){ if(key(t)===u) return {ok:true}; }
  const ut=tokens(user);
  for(const t of targets){ if(/,|;|\band\b|&/.test(base(t)) && tokens(t)===ut) return {ok:true}; }
  for(const t of targets){ const k=key(t); const d=lev(u,k); if((k.length>=7&&d<=1)||(k.length>=13&&d<=2)) return {ok:true,close:true}; }
  return {ok:false};
}

function viewCards(root){
  const saved=store.get('session.cards',null);
  const def={sel:LESSONS.map(l=>l.id),n:30,mode:'flip',diffs:['E','A','D'],balanced:true,smart:false,timer:false};
  const S=Object.assign(def,store.get('cardSetup',{}));
  const sel=new Set((S.sel||[]).filter(id=>LBY[id]));
  const wrap=h('div',{class:'setup'}); root.append(wrap);
  let sumEl, startBtn, customEl;
  const diffs=()=>new Set(S.diffs);
  function eff(){ const a=cardPool(sel,diffs()).length; return S.mode==='finals'?30:(S.n==='max'?a:Math.min(+S.n||1,a)); }
  function persist(){ store.set('cardSetup',Object.assign({},S,{sel:[...sel]})); }
  function refreshSummary(){
    const a=cardPool(sel,diffs()).length, n=eff();
    const txt = S.mode==='finals' ? '30 questions: 10 Easy (15 s, 3 pts), 10 Average (20 s, 5 pts), 10 Difficult (30 s, 7 pts). Max 150 pts.' : (S.mode==='type'&&S.timer?'Timer per card: 15 / 20 / 30 s by difficulty':'');
    sumEl.replaceChildren(h('div',null,h('b',null,n+' card'+(n===1?'':'s')),h('span',{class:'muted'},'  from '+a+' available')),h('div',{class:'muted'},txt));
    startBtn.disabled=n<1 || (S.mode==='finals' && a<1);
  }
  function draw(){
    const presets=[10,20,30,50,100];
    customEl=h('input',{type:'number',min:1,max:2000,id:'c-custom',inputmode:'numeric','aria-label':'Custom number of cards',value:presets.includes(S.n)||S.n==='max'?'':S.n,placeholder:'Custom',oninput:e=>{const v=parseInt(e.target.value,10);S.n=v>0?v:30;persist();drawPresets();refreshSummary();}});
    const presetBox=h('div',{class:'row'});
    function drawPresets(){ presetBox.replaceChildren(h('div',{class:'seg',role:'group','aria-label':'Number of cards'},
      presets.map(p=>h('button',{'aria-pressed':S.n===p?'true':'false',disabled:S.mode==='finals',onclick:()=>{S.n=p;customEl.value='';persist();drawPresets();refreshSummary();}},String(p))),
      h('button',{'aria-pressed':S.n==='max'?'true':'false',disabled:S.mode==='finals',onclick:()=>{S.n='max';customEl.value='';persist();drawPresets();refreshSummary();}},'All')),customEl); customEl.disabled=S.mode==='finals'; }
    drawPresets();
    sumEl=h('div',{class:'summary'}); startBtn=h('button',{class:'btn primary',onclick:start},S.mode==='finals'?'Start finals simulation':'Start');
    const modeSeg=h('div',{class:'seg',role:'group'},[['flip','Flip and self-grade'],['type','Type the answer'],['finals','Finals simulation']].map(([v,t])=>h('button',{'aria-pressed':S.mode===v?'true':'false',onclick:()=>{S.mode=v;persist();draw();}},t)));
    const dSeg=h('div',{class:'seg',role:'group','aria-label':'Difficulty'},['E','A','D'].map(d=>h('button',{'aria-pressed':S.diffs.includes(d)?'true':'false',disabled:S.mode==='finals',onclick:()=>{ const s2=new Set(S.diffs); if(s2.has(d)){ if(s2.size>1) s2.delete(d);} else s2.add(d); S.diffs=[...s2]; persist(); draw(); }},DIFF[d])));
    const sw=(key,text)=>h('label',{class:'switch'},h('input',{type:'checkbox',id:'cs-'+key,checked:!!S[key],onchange:e=>{S[key]=e.target.checked;persist();refreshSummary();}}),text);
    const picker=lessonPicker(sel,'cards',()=>{persist();refreshSummary();});
    wrap.replaceChildren(
      saved?h('div',{class:'resume'},h('div',null,h('b',null,'Unfinished session: '),Math.min(saved.idx,saved.items.length)+' of '+saved.items.length+' done'),
        h('div',{class:'row'},h('button',{class:'btn primary small',onclick:()=>runCards(root,saved)},'Resume'),h('button',{class:'btn small',onclick:()=>{store.del('session.cards');route();}},'Discard'))):null,
      h('section',null,h('p',{class:'label'},'1 · Lessons'),picker),
      h('section',{class:'stack'},h('p',{class:'label'},'2 · Mode'),modeSeg,
        h('p',{class:'hint'},S.mode==='flip'?'Read the question, say the answer out loud, flip, then mark Got it or Missed.':S.mode==='type'?'Type the answer like you will on the committee computer. Close spellings are accepted and flagged.':'Mirrors the final round: typed answers, 15 / 20 / 30 second limits and 3 / 5 / 7 points. Lessons you picked above are the pool.')),
      h('section',{class:'stack'},h('p',{class:'label'},'3 · Difficulty and amount'),dSeg,presetBox,
        h('div',{class:'row'},sw('balanced','Balance across lessons'),sw('smart','Favor cards I missed or have not seen'),S.mode==='type'?sw('timer','Timer per card'):null)),
      sumEl,h('div',null,startBtn));
    refreshSummary();
  }
  function start(){
    let items;
    if(S.mode==='finals'){
      const pool=cardPool(sel,new Set(['E','A','D'])); const all=cardPool(new Set(LESSONS.map(l=>l.id)),new Set(['E','A','D']));
      items=[]; for(const d of ['E','A','D']){
        let p=pool.filter(x=>x.d===d); let pick=pickItems(p,10,{balanced:S.balanced,smart:S.smart},'c');
        if(pick.length<10){ const have=new Set(pick.map(x=>x.id)); pick=pick.concat(shuffle(all.filter(x=>x.d===d&&!have.has(x.id))).slice(0,10-pick.length)); }
        items.push(...pick);
      }
    } else items=pickItems(cardPool(sel,diffs()),eff(),S,'c');
    const s={type:'cards',mode:S.mode,timer:S.mode==='finals'||(S.mode==='type'&&S.timer),items,res:new Array(items.length).fill(null),idx:0,elapsed:0};
    store.set('session.cards',s); runCards(root,s);
  }
  draw();
}

function runCards(root,s){
  runCleanups();
  const N=s.items.length; const mode=s.mode; const finals=mode==='finals';
  const screen=h('div'); root.replaceChildren(screen);
  let revealed=false, verdict=null, timerId=null, tleft=0, tstart=0, bannerFor=-1;
  const started=Date.now(); const base0=s.elapsed||0;
  const save=()=>{ s.elapsed=base0+(Date.now()-started)/1000; store.set('session.cards',s); };
  onCleanup(()=>{ clearInterval(timerId); document.removeEventListener('keydown',onKey); if(!s.done) save(); });
  function score(){ let p=0,c=0; s.items.forEach((it,i)=>{ if(s.res[i]) { c++; p+=PTS[it.d]; } }); return {p,c}; }
  function draw(){
    clearInterval(timerId);
    if(s.idx>=N) return results();
    const it=s.items[s.idx];
    if(finals && (s.idx===0 || s.items[s.idx-1].d!==it.d) && bannerFor!==s.idx){
      const nth=['E','A','D'].indexOf(it.d)+1;
      screen.replaceChildren(h('div',{class:'card banner'},h('p',{class:'label'},'Round '+nth+' of 3'),h('h2',null,DIFF[it.d]),
        h('p',{class:'muted'},'10 questions · '+TLIM[it.d]+' seconds each · '+PTS[it.d]+' points each'),
        h('button',{class:'btn primary',id:'go-round',onclick:()=>{bannerFor=s.idx;draw();}},'Start round '+nth)));
      return;
    }
    revealed=false; verdict=null;
    const sc=score();
    const prog=h('i',{style:'width:'+pct(s.idx,N)+'%'});
    const head=h('div',null,
      h('div',{class:'runbar'},h('span',{class:'pos'},'Card '+(s.idx+1)+' / '+N),
        h('div',{class:'row'},finals?h('span',{class:'timer'},sc.p+' pts'):h('span',{class:'timer'},sc.c+' ✓'),h('button',{class:'btn small',onclick:()=>{save();go('cards');}},'Save & exit'))),
      h('div',{class:'progress'},prog));
    const qbox=h('div',{class:'card qcard flash'});
    const tbar=h('div',{class:'tbar'},h('i'));
    const dyn=h('div',{class:'stack'});
    qbox.append(h('div',{class:'qmeta'},lessonTag(it.l),h('span',{class:'tag '+it.d},DIFF[it.d]+(finals?' · '+PTS[it.d]+' pts':'')),h('span',{class:'tag'},LBY[it.l].title)),
      h('p',{class:'qtext',style:'margin:0'},it.q), dyn);
    screen.replaceChildren(head, s.timer?tbar:'', qbox);
    if(mode==='flip') drawFlip(dyn,it); else drawType(dyn,it,tbar);
  }
  function mark(ok){ s.res[s.idx]=ok; bump('c',s.items[s.idx].id,ok); save(); s.idx++; draw(); window.scrollTo({top:0}); }
  function drawFlip(dyn,it){
    function render(){
      if(!revealed){ dyn.replaceChildren(h('button',{class:'btn primary',id:'flip-btn',onclick:()=>{revealed=true;render();}},'Show answer'),h('p',{class:'hint'},'Space or Enter to flip')); }
      else dyn.replaceChildren(h('div',{class:'ans'},it.a),it.alt.length?h('div',{class:'alts'},'Also accepted: '+it.alt.join(' · ')):'',
        h('div',{class:'row'},h('button',{class:'btn',onclick:()=>mark(false)},'Missed it'),h('button',{class:'btn primary',onclick:()=>mark(true)},'Got it')),h('p',{class:'hint'},'Left arrow: missed · Right arrow: got it'));
    }
    s._flip=()=>{ if(!revealed){revealed=true;render();} };
    render();
  }
  function drawType(dyn,it,tbar){
    const inp=h('input',{type:'text',id:'type-in',autocomplete:'off',autocapitalize:'off',spellcheck:'false','aria-label':'Your answer',placeholder:'Type your answer'});
    function submit(auto){
      if(verdict) return; clearInterval(timerId);
      const r=checkAnswer(inp.value,it); verdict={ok:r.ok,close:r.close,auto:!!auto,typed:inp.value};
      inp.disabled=true; show();
    }
    function show(){
      const v=verdict;
      dyn.replaceChildren(
        h('div',{class:'typebox'},inp),
        h('div',{class:'feedback '+(v.ok?'ok':'no')}, v.ok?(v.close?'Accepted (check spelling).':'Correct.'):(v.auto&&!v.typed.trim()?'Time is up.':'Incorrect.')),
        h('div',null,h('p',{class:'label'},'Answer'),h('div',{class:'ans'},it.a),it.alt.length?h('div',{class:'alts'},'Also accepted: '+it.alt.join(' · ')):null),
        h('div',{class:'row'},
          !v.ok?h('button',{class:'btn',onclick:()=>{v.ok=true;v.override=true;show();}},'Count as correct'):(v.override?h('button',{class:'btn',onclick:()=>{v.ok=false;v.override=false;show();}},'Undo'):null),
          h('button',{class:'btn primary',id:'next-btn',onclick:()=>mark(!!verdict.ok)},s.idx===N-1?'Finish':'Next')));
      const nb=dyn.querySelector('#next-btn'); if(nb) nb.focus();
    }
    dyn.replaceChildren(h('div',{class:'typebox'},inp,h('button',{class:'btn primary',onclick:()=>submit(false)},'Submit')),h('p',{class:'hint'},'Press Enter to submit'));
    inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); submit(false);} });
    setTimeout(()=>inp.focus(),30);
    if(s.timer){
      tleft=TLIM[it.d]; tstart=Date.now(); const bar=tbar.firstChild;
      timerId=setInterval(()=>{ const el=(Date.now()-tstart)/1000; const r=tleft-el; bar.style.width=Math.max(0,100*r/tleft)+'%'; tbar.classList.toggle('low',r<=5); if(r<=0){ submit(true);} },100);
    }
  }
  function onKey(e){
    if(e.ctrlKey||e.metaKey||e.altKey) return;
    if(mode==='flip' && !(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) && s.idx<N){
      if(e.key===' '||e.key==='Enter'){ if(!revealed){ e.preventDefault(); s._flip&&s._flip(); } }
      else if(revealed && e.key==='ArrowRight') mark(true);
      else if(revealed && e.key==='ArrowLeft') mark(false);
    }
    if(finals && e.key==='Enter' && document.getElementById('go-round') && !(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))){ document.getElementById('go-round').click(); }
    if(mode!=='flip' && e.key==='Enter' && verdict && document.activeElement && document.activeElement.id!=='next-btn'){ const nb=document.getElementById('next-btn'); if(nb) { e.preventDefault(); nb.click(); } }
  }
  document.addEventListener('keydown',onKey);

  function results(){
    s.done=true; s.elapsed=base0+(Date.now()-started)/1000; store.del('session.cards'); document.removeEventListener('keydown',onKey);
    const sc=score(); const by={E:{n:0,c:0},A:{n:0,c:0},D:{n:0,c:0}}; const per={}; const missed=[];
    s.items.forEach((it,i)=>{ by[it.d].n++; const r=per[it.l]=per[it.l]||{n:0,c:0}; r.n++; if(s.res[i]){by[it.d].c++;r.c++;} else missed.push(it); });
    addHistory({t:Date.now(),kind:finals?'finals':'cards',mode,n:N,c:sc.c,pts:finals?sc.p:null,secs:Math.round(s.elapsed)});
    screen.replaceChildren(h('div',{class:'stack'},
      h('div',{class:'card',style:'text-align:center'},h('p',{class:'label'},finals?'Finals simulation':'Result'),
        h('div',{class:'score'},finals?sc.p:sc.c,h('small',null,finals?' / 150 pts':' / '+N)),
        h('p',{class:'muted'},sc.c+' of '+N+' correct · '+pct(sc.c,N)+'% · '+fmtTime(s.elapsed)),
        h('div',{class:'row',style:'justify-content:center;margin-top:10px'},
          missed.length?h('button',{class:'btn primary',onclick:()=>{ const ns={type:'cards',mode:mode==='finals'?'type':mode,timer:false,items:shuffle(missed),res:new Array(missed.length).fill(null),idx:0,elapsed:0}; store.set('session.cards',ns); runCards(root,ns); window.scrollTo(0,0); }},'Retry the '+missed.length+' missed'):null,
          h('button',{class:'btn',onclick:()=>go('cards')},'New session'),h('button',{class:'btn',onclick:()=>go('progress')},'Progress'))),
      h('section',null,h('p',{class:'label'},'By difficulty'),h('div',{class:'bars'},['E','A','D'].filter(d=>by[d].n).map(d=>h('div',{class:'bar'},h('span',{class:'nm'},DIFF[d]),h('span',{class:'tr'},h('i',{style:'width:'+pct(by[d].c,by[d].n)+'%'})),h('span',{class:'v'},by[d].c+'/'+by[d].n))))),
      Object.keys(per).length>1?h('section',null,h('p',{class:'label'},'By lesson'),h('div',{class:'bars'},Object.entries(per).sort((a,b)=>a[1].c/a[1].n-b[1].c/b[1].n).map(([id,r])=>h('div',{class:'bar'},h('span',{class:'nm'},LBY[id].title),h('span',{class:'tr'},h('i',{style:'width:'+pct(r.c,r.n)+'%'})),h('span',{class:'v'},r.c+'/'+r.n))))):null,
      missed.length?h('section',{class:'stack'},h('p',{class:'label'},'Missed cards'),missed.map(it=>h('div',{class:'review-item bad'},h('div',{class:'qmeta'},lessonTag(it.l),h('span',{class:'tag '+it.d},DIFF[it.d])),h('p',null,h('b',null,it.q)),h('div',{class:'rline c'},h('b',null,'A'),h('span',null,it.a+(it.alt.length?'  (also: '+it.alt.join(' · ')+')':'')))))):h('p',{class:'muted'},'No misses. Nice.')));
    window.scrollTo(0,0);
  }
  draw();
}

/* ====================================================================
   PROGRESS
==================================================================== */
function viewProgress(root){
  const st=getStats(); const reviewed=store.get('reviewed',{}); const hist=store.get('history',[]);
  let tq=0,tqs=0,tqc=0,tqa=0,tc=0,tcs=0,tcc=0,tca=0;
  const rows=LESSONS.map(l=>{
    let ms=0,ma=0,mc=0,cs=0,ca=0,cc=0;
    l.mcq.forEach((_,i)=>{ const r=st.q[l.id+':m:'+i]; if(r){ ms++; ma+=r[0]; mc+=r[1]; } });
    l.cards.forEach((_,i)=>{ const r=st.c[l.id+':c:'+i]; if(r){ cs++; ca+=r[0]; cc+=r[1]; } });
    tq+=l.mcq.length;tqs+=ms;tqc+=mc;tqa+=ma; tc+=l.cards.length;tcs+=cs;tcc+=cc;tca+=ca;
    return {l,ms,ma,mc,cs,ca,cc};
  });
  const docsRev=DATA.docs.filter(d=>reviewed[d.id]).length;
  const weak=rows.filter(r=>r.ma>=5).map(r=>({r,acc:r.mc/r.ma})).sort((a,b)=>a.acc-b.acc).slice(0,3);
  const wrap=h('div',{class:'stack'});
  wrap.append(
    h('div',{class:'tiles'},
      h('div',{class:'tile'},h('p',{class:'label'},'Docs reviewed'),h('b',null,docsRev+' / '+DATA.docs.length)),
      h('div',{class:'tile'},h('p',{class:'label'},'MCQ seen'),h('b',null,tqs+' / '+tq)),
      h('div',{class:'tile'},h('p',{class:'label'},'MCQ accuracy'),h('b',null,tqa?pct(tqc,tqa)+'%':'—')),
      h('div',{class:'tile'},h('p',{class:'label'},'Cards seen'),h('b',null,tcs+' / '+tc)),
      h('div',{class:'tile'},h('p',{class:'label'},'Card accuracy'),h('b',null,tca?pct(tcc,tca)+'%':'—'))),
    weak.length?h('div',{class:'resume'},h('div',null,h('b',null,'Focus next: '),weak.map(w=>w.r.l.title+' ('+Math.round(w.acc*100)+'%)').join(' · ')),
      h('button',{class:'btn primary small',onclick:()=>{ store.set('quizSetup',Object.assign(store.get('quizSetup',{}),{sel:weak.map(w=>w.r.l.id)})); go('quiz'); }},'Quiz these')):null,
    h('section',null,h('p',{class:'label'},'By lesson'),h('div',{class:'card scroll-x'},h('table',{class:'plain'},
      h('thead',null,h('tr',null,['Lesson','MCQ seen','MCQ accuracy','Cards seen','Card accuracy'].map(t=>h('th',null,t)))),
      h('tbody',null,rows.map(r=>h('tr',null,
        h('td',null,(r.l.no==='+'?'':r.l.no+'. ')+r.l.title),
        h('td',{class:'mono'},r.ms+'/'+r.l.mcq.length),
        h('td',null,r.ma?h('div',{class:'bar',style:'grid-template-columns:1fr 46px;min-width:130px'},h('span',{class:'tr'},h('i',{style:'width:'+pct(r.mc,r.ma)+'%'})),h('span',{class:'v'},pct(r.mc,r.ma)+'%')):h('span',{class:'muted'},'—')),
        h('td',{class:'mono'},r.cs+'/'+r.l.cards.length),
        h('td',null,r.ca?h('div',{class:'bar',style:'grid-template-columns:1fr 46px;min-width:130px'},h('span',{class:'tr'},h('i',{style:'width:'+pct(r.cc,r.ca)+'%'})),h('span',{class:'v'},pct(r.cc,r.ca)+'%')):h('span',{class:'muted'},'—')))))))),
    h('section',null,h('p',{class:'label'},'Recent sessions'),
      hist.length?h('div',{class:'card scroll-x'},h('table',{class:'plain'},h('thead',null,h('tr',null,['When','Type','Score','Time'].map(t=>h('th',null,t)))),
        h('tbody',null,hist.slice(0,12).map(x=>h('tr',null,
          h('td',null,new Date(x.t).toLocaleString(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})),
          h('td',null,x.kind==='mcq'?'MCQ · '+x.mode:x.kind==='finals'?'Finals simulation':'Cards · '+x.mode),
          h('td',{class:'mono'},x.kind==='finals'?(x.pts+' / 150 pts'):(x.c+' / '+x.n+' ('+pct(x.c,x.n)+'%)')),
          h('td',{class:'mono'},fmtTime(x.secs))))))):h('p',{class:'muted'},'No sessions yet. Take a quiz and your results show up here.')));
  const resetBox=h('div',{class:'row'});
  function drawReset(armed){
    resetBox.replaceChildren(armed?h('span',null,h('span',{class:'muted'},'Erase all progress on this device?  '),h('button',{class:'btn small',onclick:()=>{ ['stats','history','reviewed','session.quiz','session.cards'].forEach(k=>store.del(k)); route(); }},'Yes, erase'),' ',h('button',{class:'btn small',onclick:()=>drawReset(false)},'Cancel')):h('button',{class:'btn small',onclick:()=>drawReset(true)},'Reset progress'));
  }
  drawReset(false); wrap.append(resetBox,h('p',{class:'hint'},'Progress is stored only in this browser on this device.'));
  root.append(wrap);
}

updateCountdown(); setInterval(updateCountdown,3600000);
route();
})();
