# 01 · Competition Setup & Strategy
*UMAK 14th IT Olympics · IT Quiz Bee · Face-to-face · 2 contestants + 1 coach per school*
*Source: official "ITSO 2026 Quiz Bee Category" PDF + your coach's reminders. Event date: **Nov 4, 2026**.*

---

## 1. Official format (from the PDF)

### Team & eligibility
- 2 student-contestants + 1 coach (faculty) per school.
- Must be currently enrolled → bring **Certificate of Registration / Official Enrolment Form** and a **validated school ID**.
- Dress code: **official school uniform or college shirt + school ID** the whole contest.
- Be at the venue **at least 15 minutes early** (both Elimination and Final). Late = forfeit your chance to compete. Absence = possible disqualification.
- Live-streamed on Facebook and YouTube.

### Elimination round
| Item | Rule |
|---|---|
| Format | **100 items, multiple choice (4 choices)**, 1 point each |
| Time | **max 60 minutes** (≈ 36 seconds per item) |
| Ranking | **Average score of the 2 contestants** per school |
| Tie-break | The contestant who **finishes & submits fastest** is favored |
| Advance | **Top 10 schools**, announced before the Final Round |
| During exam | No questions or clarifications allowed; no coach/staff inside; bathroom first |
| Cheating | Immediate disqualification of the team |

### Final round
| Item | Rule |
|---|---|
| Score reset | All elimination scores reset to **0** |
| Format | **Identification**, 10 Easy + 10 Average + 10 Difficult = **30 questions** |
| Reading | Quizmaster reads each question **twice**; after the 2nd reading says **"Timer starts now!"** |
| Time per question | Easy **15 s** · Average **20 s** · Difficult **30 s** |
| Points | Easy **3** · Average **5** · Difficult **7** |
| Max possible score | 10×3 + 10×5 + 10×7 = **150 points** |
| Answering | **Typed on a computer** provided by the committee (laptops supplied by UMAK) |
| Complaints | None allowed once the quizmaster has read the **next** question; raise through facilitators / Board of Arbiters |
| Tie | **Clincher question** |
| Winners | Top 3 highest scorers |
| Board of Arbiters | 3 invited professors/IT practitioners; decision is **final and irrevocable** |

### Scope (as written in the PDF)
1. Basic Computer Concepts / Systems and General Information (IT)
2. Logic Formulation
3. Operating Systems
4. Software Engineering
5. Object-Oriented Programming
6. Computer Networks and Telecommunication
7. Computer Architecture **and IT Security** *(PDF lists these together)*
8. Database Management System
9. Data Science and Analytics
10. E-commerce and Web Design

> Your coach's list splits these slightly differently (DBMS + Data Science merged; IT Security separate). The review files follow **your coach's list** and cover every topic in the PDF's list.

---

## 2. ⚠️ Conflicts between the PDF and your coach's reminders

| Topic | Official PDF | Coach's note | What to do |
|---|---|---|---|
| Laptop in elims | "All participants are required to bring one (1) laptop" | **No need to bring a laptop**, paper test, **ballpen only** | Follow the coach (newer/more specific), but **confirm with the coach/organizers** and consider bringing nothing extra if told not to |
| Elim venue | UMak **Performing Arts Theatre** | **6th floor Admin Bldg** (even venue) | Confirm the exact venue on the morning; the PDF dated Sept 2026 may be outdated |
| Final laptops | Typed on committee-provided computer | Laptops provided by UMAK | ✅ consistent |
| Final timing | Not stated | 1:00–1:30 PM | Plan lunch/rest; top 10 announced before it |

**Ask your coach to double-check:** (a) paper vs laptop for elims, (b) venue, (c) whether any scratch paper/calculator is allowed, (d) whether there is negative marking (none stated in the PDF → assume **none, so never leave an item blank**).

### Checklist for the day
- [ ] Black ballpens (bring 3+) · [ ] School ID (validated) · [ ] COR / enrolment form · [ ] Uniform or college shirt
- [ ] Arrive ≥ 15 min early · [ ] Bathroom before exam · [ ] Water, light snack for the afternoon final
- [ ] Phone silent / away · [ ] Agree with your teammate who sits where and how you split a "quick submit" strategy

---

## 3. Strategy: Elimination (100 MCQ / 60 min)

**Scoring logic:** school rank = average of both scores; tie → faster finisher. So *accuracy first, then speed*.

1. **Budget:** 100 items in 60 min → aim to finish the first pass in **~45 min**, leaving 10–15 min to review flagged items.
2. **Two-pass method:** answer what you know instantly (≈ 15–20 s each); put a small mark beside doubtful items; skip items needing long tracing (code output, math) and return.
3. **Never leave blanks.** No penalty is stated. Guess using elimination.
4. **Elimination tricks for 4-choice questions**
   - Eliminate "always/never/only" absolutes unless it's a definition.
   - When two choices are near-identical, the answer is often one of them.
   - "All of the above" / "None of the above" → test each option.
   - For acronym questions, check the exact words (e.g., **Application** layer vs **Transport** layer).
5. **Code-tracing items:** write variable values in the margin; watch for off-by-one, integer division, `==` vs `=`, pre/post-increment.
6. **Math/binary items:** do them in the second pass.
7. **Handwriting:** shade/circle the letter clearly; if you change an answer, cross out cleanly.
8. **Teammate tie-break:** the one who submits first matters only for ties — **don't rush at the cost of accuracy**, but don't sit idle once you've finished a solid review.

## 4. Strategy: Final (typed identification, 30 Qs)

- **Typing speed + spelling matter.** Practice typing: `DHCP`, `polymorphism`, `normalization`, `Transmission Control Protocol`, `cross-site scripting`.
- Answer with the **standard term**. If the question asks "what does X stand for", type the full name; if it describes something and asks "what is it called", the common name/acronym is usually accepted. Unknown how strict the checking is, so **ask the facilitators before the final** whether an acronym *and* its expansion (e.g., "ARP (Address Resolution Protocol)") is accepted.
- **Easy (15 s):** immediate recall, definitions, acronyms, "who/what/which company". Don't deliberate.
- **Average (20 s):** short reasoning, comparisons, ports, commands, SQL keywords, protocols, layers.
- **Difficult (30 s):** multi-step (binary/subnet/Big-O/trace), less common concepts, AI/tech trivia, "name the pattern/principle/standard".
- **Partner protocol:** Agree who types (if shared) or who confirms. Silence after the timer = 0, a guess = chance of 3/5/7.
- **Spelling safety:** common traps — *polymorphism, encapsulation, abstraction, inheritance, referential integrity, denormalization, Heisenbug, ciphertext, phishing, vishing, smishing, hypervisor, throughput, latency*.
- Don't argue about a previous question once the next is read — rule 12.

## 5. Expected question styles
- **Definition → Term** ("The process of converting plaintext into unreadable form" → *encryption*)
- **Acronym expansion** (SQL, DDL, DHCP, SMTP, CIDR, IDE, ORM, ETL, MFA, XSS, CSRF…)
- **Who/what company** (CEO of Nvidia? Creator of Linux? Which company makes Claude?)
- **Port/protocol/layer** (HTTPS port? Layer 3 device? Protocol for email retrieval?)
- **Trace / compute** (binary → decimal, truth table, subnet size, SQL result, loop output)
- **Latest-tech trivia** (AI models, chips, standards; see the *AI & Tech Trivia* page)
