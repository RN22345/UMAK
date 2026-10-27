# 03 · Logic Formulation
*Algorithms, flowcharts, pseudocode, Boolean/propositional logic, gates, data structures & algorithms, tracing, puzzles. Heavy on **compute/trace** items — practice these on paper.*

---

## 1. Problem solving & algorithms
- **Problem-solving steps (Polya-style):** Understand problem → Plan (devise algorithm) → Carry out (code) → Review/test (debug).
- **Program development cycle:** Define problem → Design (flowchart/pseudocode) → Code → Test & debug → Document → Maintain.
- **Algorithm** = finite, ordered set of well-defined steps to solve a problem.
  - Properties: **Input, Output, Definiteness (unambiguous), Finiteness, Effectiveness**, (Generality).
  - Named after **Muhammad ibn Musa al-Khwarizmi**.
- Tools: **pseudocode**, **flowchart**, **structured English**, decision tables, IPO chart, hierarchy chart / structure chart, **Nassi–Shneiderman** diagram.
- **Software errors:** *Syntax* (breaks grammar rules, caught at compile), *Runtime* (crash while running, e.g., divide by zero), *Logic* (runs but wrong result — hardest to detect). **Debugging** = finding/fixing bugs. *Dry run / desk checking / trace table* = manually tracing.

## 2. Flowchart symbols
| Symbol | Meaning |
|---|---|
| Oval / rounded rectangle (terminator) | Start / End |
| Parallelogram | Input / Output |
| Rectangle | Process / assignment / calculation |
| Diamond | Decision (Yes/No, True/False) |
| Arrow | Flow direction |
| Circle | Connector (on-page); pentagon = off-page connector |
| Hexagon | Preparation / loop initialization (for-loop) |
| Rectangle with double side bars | Predefined process / subroutine |
| Document shape (wavy bottom) | Printed document/report |

## 3. Control structures
1. **Sequence** – steps in order.
2. **Selection** – `if`, `if-else`, `else if`, `switch/case`; ternary `cond ? a : b`.
3. **Iteration (loops)** – `for` (known count), `while` (pre-test; may run 0 times), `do-while` (post-test; runs ≥ 1 time), `repeat-until` (post-test, stops when true).
4. (Also) **Recursion** — function calls itself with a **base case**.
- `break` exits loop; `continue` skips to next iteration; `return` exits function; nested loops multiply iterations (n × m).
- **Infinite loop**: condition never becomes false.

## 4. Variables, data types, operators
- **Variable** = named memory location. **Constant** = fixed value. **Identifier rules:** no spaces, can't start with a digit, no reserved words.
- Common types: `int`, `float/double`, `char`, `string`, `boolean`. Typical sizes (C/Java): `int` 4 bytes (32-bit), `long` 8 bytes, `char` 1 byte (C) / 2 bytes (Java), `float` 4 bytes, `double` 8 bytes, `boolean` 1 bit logical.
- **Arithmetic:** `+ − * / % ` (modulus = remainder). Integer division: `7/2 = 3` (in C/Java/Python3 `//`), `7%2 = 1`, `−7 % 3` differs by language.
- **Relational:** `== != < > <= >=`. **Logical:** `&& || !` (AND, OR, NOT) – **short-circuit** evaluation.
- **Assignment:** `=` (assign) vs `==` (compare); compound `+= -= *= /= %=`. **Increment:** `i++` (post: use then add) vs `++i` (pre: add then use).
- **Bitwise:** `& | ^ ~ << >>`. `x << 1` = ×2; `x >> 1` = ÷2 (integer).
- **Operator precedence (high→low):** parentheses → unary (`! ++ --`) → `* / %` → `+ −` → relational `< >` → equality `== !=` → `&&` → `||` → assignment. (PEMDAS/BODMAS for math.)
  - Example: `2 + 3 * 4 = 14`; `(2 + 3) * 4 = 20`; `10 − 4 − 3 = 3` (left-assoc); `2^3^2` right-assoc in math = 512.
  - Example: `5 + 8 / 2 * 3 − 1` = 5 + (8/2)*3 − 1 = 5 + 12 − 1 = **16**.
  - Example: `17 % 5 + 17 / 5` (ints) = 2 + 3 = **5**.

## 5. Number base quick drills (see also file 02)
- 1101₂ = 13; 10110₂ = 22; 0x2F = 47; 255 = 11111111₂ = 0xFF = 377₈; 64 = 1000000₂; 100₁₀ = 1100100₂ = 0x64.
- Largest unsigned n-bit = 2ⁿ − 1 (8-bit = 255; 16-bit = 65,535; 32-bit = 4,294,967,295).

## 6. Boolean algebra & logic gates

### 6.1 Gate truth tables
| A | B | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
- **NOT**: inverts (0→1, 1→0). **Buffer** passes input.
- **NAND and NOR are universal gates** (any circuit can be built from only one of them).
- XOR = 1 when inputs **differ** (odd number of 1s). XNOR = equality gate.
- **Half adder:** Sum = A XOR B; Carry = A AND B. **Full adder:** adds A, B, Cin → Sum = A⊕B⊕Cin; Cout = AB + Cin(A⊕B). Two half adders + OR gate = full adder.

### 6.2 Boolean laws
- Identity: A + 0 = A; A·1 = A. Null/Domination: A + 1 = 1; A·0 = 0.
- Idempotent: A + A = A; A·A = A. Complement: A + A' = 1; A·A' = 0. Double negation: (A')' = A.
- Commutative, Associative, Distributive: A(B + C) = AB + AC; also A + BC = (A + B)(A + C).
- **Absorption:** A + AB = A; A(A + B) = A.
- **De Morgan's:** (A·B)' = A' + B' ; (A + B)' = A'·B'.
- Consensus: AB + A'C + BC = AB + A'C.
- Representations: **SOP** (sum of products, minterms), **POS** (product of sums, maxterms), **Karnaugh map (K-map)** simplifies by grouping 1s in powers of 2 (1, 2, 4, 8…). Number of rows in a truth table = **2ⁿ** for n variables.
- Example: simplify A·B + A·B' = A(B + B') = **A**.

### 6.3 Combinational vs sequential
- Combinational: output depends only on current inputs (adders, multiplexers, decoders, encoders, comparators).
- Sequential: depends on inputs + stored state (**flip-flops: SR, D, JK, T**, latches, registers, counters).
- **MUX** (many→one, select lines), **DEMUX**, **Decoder** (n→2ⁿ), **Encoder**.
- A 4:1 MUX needs **2** select lines; an n-to-2ⁿ decoder; a 3-to-8 decoder has 3 inputs & 8 outputs.

## 7. Propositional & predicate logic (discrete math)
- **Proposition** = declarative statement that is either true or false (not questions/commands).
- Connectives: ¬ (negation), ∧ (conjunction), ∨ (disjunction), ⊕ (exclusive or), → (implication), ↔ (biconditional).
- **Implication p → q** is false **only** when p is true and q is false.
  | p | q | p→q | p↔q |
  |---|---|---|---|
  | T | T | T | T |
  | T | F | F | F |
  | F | T | T | F |
  | F | F | T | T |
- For p → q: **Converse** q → p; **Inverse** ¬p → ¬q; **Contrapositive** ¬q → ¬p (**logically equivalent to the original**). Converse ≡ Inverse.
- **Tautology** (always true), **Contradiction** (always false), **Contingency** (depends).
- **Rules of inference:** *Modus Ponens* (p→q, p ∴ q); *Modus Tollens* (p→q, ¬q ∴ ¬p); *Hypothetical Syllogism* (p→q, q→r ∴ p→r); *Disjunctive Syllogism* (p∨q, ¬p ∴ q); *Addition*; *Simplification*; *Resolution*.
- **Fallacies:** *Affirming the consequent* (q, p→q ∴ p) ✗; *Denying the antecedent* (¬p, p→q ∴ ¬q) ✗.
- **Quantifiers:** ∀ (for all, universal), ∃ (there exists). ¬∀x P(x) ≡ ∃x ¬P(x); ¬∃x P(x) ≡ ∀x ¬P(x).
- **Proof techniques:** direct, contrapositive, contradiction, induction, counterexample.
- **Sets:** union ∪, intersection ∩, complement, difference, subset ⊆, empty set ∅, power set size = 2ⁿ, Cartesian product |A×B| = |A|·|B|. Venn diagrams (John Venn). Inclusion–exclusion: |A∪B| = |A| + |B| − |A∩B|.
- **Counting:** n! ; permutations P(n,r) = n!/(n−r)! ; combinations C(n,r) = n!/(r!(n−r)!) ; C(5,2)=10 ; P(5,2)=20 ; arrangements of "LOGIC" (5 distinct) = 120; "LETTER" = 6!/(2!·2!) = 180. **Pigeonhole principle**.
- **Graph basics:** vertices & edges; degree; path/cycle; tree (connected acyclic, n−1 edges); complete graph Kₙ edges = n(n−1)/2; Euler path (each edge once) ↔ 0 or 2 odd-degree vertices; Hamiltonian path (each vertex once).

## 8. Data structures
| Structure | Rule / key facts |
|---|---|
| **Array** | contiguous, index from 0, O(1) access, fixed size |
| **Linked list** | nodes with data + pointer; O(1) insert at head; singly/doubly/circular |
| **Stack** | **LIFO**; push, pop, peek/top; uses: undo, function call stack, expression evaluation, DFS, balanced parentheses |
| **Queue** | **FIFO**; enqueue, dequeue; uses: scheduling, BFS, printers; variants: circular, **deque**, priority queue |
| **Hash table** | key→index via hash; avg O(1) lookup; collisions (chaining, open addressing) |
| **Tree** | hierarchical; root, parent, child, leaf, height, depth, level |
| **Binary tree** | ≤ 2 children; max nodes at level L = 2^L; max nodes with height h = 2^(h+1) − 1 |
| **BST** | left < node < right; inorder traversal gives sorted order |
| **Heap** | complete binary tree; min-heap/max-heap; priority queue; heapsort |
| **Graph** | vertices + edges; adjacency matrix/list; BFS (queue), DFS (stack/recursion) |
| **AVL / Red-black** | self-balancing BSTs |
| **Trie** | prefix tree for strings |

**Tree traversals** (for tree: root A, left B (children D, E), right C):
- **Preorder (NLR):** A B D E C · **Inorder (LNR):** D B E A C · **Postorder (LRN):** D E B C A · **Level order (BFS):** A B C D E.
- Expression trees: infix `A+B*C`; postfix (RPN) `A B C * +`; prefix `+ A * B C`. Postfix evaluation uses a **stack**: `5 3 + 2 *` → 8 → 16.

**Stack/Queue trace:** push 1, push 2, push 3, pop, push 4, pop → stack bottom→top: 1, 2 (popped 3 then 4) → remaining [1, 2]. Same ops on a queue (enqueue, dequeue removes oldest) → differs.

## 9. Algorithms & Big-O
| Algorithm | Best | Average | Worst | Space | Stable? |
|---|---|---|---|---|---|
| Bubble sort | O(n)* | O(n²) | O(n²) | O(1) | Yes |
| Selection sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| **Merge sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| **Quick sort** | O(n log n) | O(n log n) | **O(n²)** | O(log n) | No |
| Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Counting / Radix | O(n+k) | | | | |
\*with early-exit flag.
- **Linear search** O(n); **Binary search** O(log n) – requires **sorted** data; halves the range each step; 1,000 items ≈ 10 comparisons.
- Growth order: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!).
- Divide & conquer (merge/quick/binary search) · Greedy (Dijkstra, Prim, Kruskal, Huffman) · Dynamic programming (Fibonacci memo, knapsack) · Backtracking (N-Queens, Sudoku) · Brute force.
- **Dijkstra** shortest path (non-negative weights); **Bellman–Ford** handles negatives; **A\*** heuristic search; **Prim/Kruskal** minimum spanning tree.
- **P vs NP**: P = solvable in polynomial time; NP = verifiable in polynomial time; NP-complete (e.g., TSP decision, SAT—Cook–Levin).
- **Halting problem** (Turing) is undecidable.
- **Recursion:** factorial `n! = n·(n−1)!`, base 0! = 1; Fibonacci 0,1,1,2,3,5,8,13,21,34,55; Tower of Hanoi needs **2ⁿ − 1** moves; GCD (Euclid) `gcd(a,b)=gcd(b, a mod b)` → gcd(48,18)=6. Stack overflow if no base case.

## 10. Tracing practice (answers hidden below each)
```
Q1: x = 5; y = 3; x = x + y; y = x - y; x = x - y;  → x=?, y=?
A1: x = 3, y = 5 (a swap without temp)

Q2: sum = 0; for (i = 1; i <= 5; i++) sum += i;   → sum=?
A2: 15

Q3: count = 0; for i in 1..3: for j in 1..4: count++   → count=?
A3: 12

Q4: n = 10; while (n > 0) { n -= 3; }   → final n?
A4: −2  (10,7,4,1,−2; loop stops when n ≤ 0)

Q5: print(7 // 2, 7 % 2, 7 / 2)   (Python 3)  → ?
A5: 3 1 3.5

Q6: i = 5; j = i++; k = ++i;   → j=?, k=?, i=?
A6: j = 5 (post-increment uses old value), then i=6; k = 7 (pre-increment), i = 7

Q7: Nested ifs: if (x>5) A; else if (x>3) B; else C;  x=4 → ?
A7: B

Q8: Factorial(4) = ?   A8: 24
Q9: Fibonacci F(7) (F0=0,F1=1) = ?   A9: 13
Q10: What does string "HELLO"[1:4] give (Python)?  A10: "ELL"
```

## 11. Pseudocode & logic puzzle styles
- **Pseudocode keywords:** `INPUT/READ`, `OUTPUT/PRINT/DISPLAY`, `SET/←`, `IF-THEN-ELSE-ENDIF`, `WHILE-ENDWHILE`, `FOR-NEXT`, `REPEAT-UNTIL`, `CASE`.
- **Sequence/pattern puzzles:** arithmetic (constant difference), geometric (constant ratio), squares (1,4,9,16), cubes, primes (2,3,5,7,11,13,17,19,23), triangular (1,3,6,10,15), Fibonacci, alternating patterns, letter-position (A=1…Z=26).
- **Knights & knaves** (knight always tells truth; knave always lies): set up cases and test for contradictions.
- **Common puzzle themes:** river-crossing (fox/chicken/grain), weighing coins (3 weighings), light-bulb switches, Monty Hall (switch → 2/3), age problems, work-rate (A does job in 6 days, B in 3: together 2 days), speed-distance-time, clocks (hands angle), calendars (day-of-week via mod 7).
- **Quick math:** % change; ratio; mean/median/mode; probability = favorable / total; sum 1..n = n(n+1)/2 (1..100 = 5050); sum of odd numbers 1..(2n−1) = n²; digits sum divisibility (3, 9); a number is divisible by 4 if last two digits are; by 11 alternating digit sum.

## 12. Cross-links
Computer number systems → `02`; OOP logic → `06`; SQL logic → `09`; trees/graphs again in `08` (architecture of search) and networking routing → `07`.

---

## ✅ Flashcard seeds
- Flowchart symbol for decision? → **Diamond** · Input/Output? → **Parallelogram** · Start/End? → **Terminator (oval)**
- Loop that runs at least once? → **do-while / repeat-until**
- Error that doesn't crash but gives wrong output? → **Logic error**
- Universal gates? → **NAND and NOR**
- Gate output 1 only when inputs differ? → **XOR**
- De Morgan: (A+B)' = ? → **A'·B'**
- Contrapositive of p→q? → **¬q → ¬p**
- p→q false only when? → **p true, q false**
- Modus ponens? → **p→q, p ∴ q**
- LIFO structure? → **Stack**; FIFO → **Queue**
- Inorder traversal of BST yields? → **Sorted order**
- Worst-case of quicksort? → **O(n²)**; mergesort always? → **O(n log n)**
- Binary search requirement? → **Sorted data**
- Moves needed for 4-disk Hanoi? → **15**
- Number of rows in a 4-variable truth table? → **16**
- Full adder built from? → **2 half adders + OR**
- Postfix of A+B*C? → **ABC*+**
- Sum 1…100? → **5050**
