#!/usr/bin/env python3
"""Regenerate js/data.js from content/.

    content/manifest.json   lesson order + review-doc list
    content/lessons/*.json  one file per lesson: id, no, title, mcq[], cards[]
    content/docs/*.md       review documents (markdown)

Run `python build.py` after editing anything under content/, then commit js/data.js.
"""
import json, pathlib, sys

root = pathlib.Path(__file__).parent
content = root / 'content'
manifest = json.loads((content / 'manifest.json').read_text(encoding='utf8'))

lessons = [json.loads((content / 'lessons' / f'{i}.json').read_text(encoding='utf8')) for i in manifest['lessons']]
docs = []
for d in manifest['docs']:
    docs.append({'id': d['id'], 'group': d['group'], 'title': d['title'],
                 'md': (content / 'docs' / d['file']).read_text(encoding='utf8'), 'lesson': d['lesson']})

# sanity checks so a bad edit fails loudly instead of breaking the quiz
ids = {l['id'] for l in lessons}
for l in lessons:
    for n, q in enumerate(l['mcq']):
        assert len(q['w']) == 3, f"{l['id']} mcq #{n}: need exactly 3 wrong answers"
        assert q['a'] not in q['w'], f"{l['id']} mcq #{n}: correct answer repeated among wrong ones"
        assert len({q['a'], *q['w']}) == 4, f"{l['id']} mcq #{n}: duplicate options"
        assert q.get('d') in ('E', 'A', 'D'), f"{l['id']} mcq #{n}: difficulty d must be E, A or D"
        assert 'x' not in q or (isinstance(q['x'], list) and len(q['x']) == 3 and all(q['x'])), f"{l['id']} mcq #{n}: x must be 3 non-empty strings (one per wrong answer)"
    for n, c in enumerate(l['cards']):
        assert c['d'] in 'EAD', f"{l['id']} card #{n}: difficulty must be E, A or D"
        assert c['q'] and c['a'], f"{l['id']} card #{n}: empty q/a"
for d in docs:
    assert d['lesson'] is None or d['lesson'] in ids, f"doc {d['id']}: unknown lesson {d['lesson']}"

out = 'window.UMAK_DATA = ' + json.dumps({'lessons': lessons, 'docs': docs}, ensure_ascii=False, separators=(',', ':')) + ';\n'
(root / 'js' / 'data.js').write_text(out, encoding='utf8', newline='\n')
print(f"js/data.js: {len(lessons)} lessons, {sum(len(l['mcq']) for l in lessons)} MCQs, "
      f"{sum(len(l['cards']) for l in lessons)} cards, {len(docs)} docs, {len(out)//1024} KB")
