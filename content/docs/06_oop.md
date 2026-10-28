# 06 · Object-Oriented Programming (OOP)
*Language-agnostic concepts first, then Java / C++ / Python / C# snippets and tracing. Basics covers the elimination round; the rest suits **Average/Difficult** identification and code-output questions.*

> **How to use this page.** Start with **Basics**: that is what the elimination round tests. The sections after it
> are the deeper detail for the finals (identification, average/difficult). Tip: the pillars and the overloading/overriding pair show up everywhere, so know them cold.

---

## Basics

### Classes, objects & the four pillars
- **Class** = blueprint/template. **Object** = an **instance** of a class. Functions defined inside a class are **methods**; created with **`new`** (Java).
- The **four pillars:** **Encapsulation, Abstraction, Inheritance, Polymorphism** (compilation is *not* a pillar).
- **Encapsulation** = bundling data + methods and hiding internal state; **private variables + public getters/setters** are the classic example.
- **Abstraction** = exposing only essential features, hiding implementation details.
- **Inheritance** = new class reuses members of an existing class (**is-a**: a Dog is an Animal). Subclass gives its own version of a parent method = **overriding**.
- **Polymorphism** = same call, different behavior depending on the object. `Animal a = new Dog(); a.speak();` runs Dog's version (prints **Woof**).
- **Overloading** = same name, **different parameter lists** → **compile-time** polymorphism. **Overriding** = same signature in subclass → **run-time** polymorphism.

### Constructors & keywords
- **Constructor** = special method called when an object is created (same name as class, no return type). Python: **`__init__`**.
- **`this`** = current object (Java); **`super`** = parent class; Python **`self`** = current object (first parameter of instance methods).
- Constructor order: a subclass constructor first calls the parent's (implicit `super()`), so `new B()` where B extends A prints **A then B** ("AB").
- **`static`** members belong to the **class**, shared by all objects.
- **`extends`** = inherit a class; **`implements`** = adopt an interface. **`final`** method cannot be overridden (final class cannot be extended).
- **Abstract class** = cannot be instantiated; may contain abstract methods. **Interface** = contract only; a class can implement many.
- **Access:** **`private`** = same class only; **`protected`** = same package + subclasses, not the world; `public` = everywhere.
- **Has-a** (Car has an Engine) = **composition/aggregation**; **is-a** = inheritance.
- **Multiple inheritance** of classes is **not supported in Java** (use interfaces). Ambiguity from it = **diamond problem**.
- Good design = **high cohesion, low coupling**.

### Exceptions, strings & memory
- **`finally`** block **always executes**, exception or not. **`throw`** raises an exception.
- **Strings in Java are immutable.** `==` on object references compares **references** (addresses); **`equals()`** compares **contents**.
- **Garbage collection** = Java's automatic memory reclamation.
- Python **tuple** is immutable (list is mutable).

### Java, languages & who made them
- Java source → compiled to **bytecode** → executed by the **JVM**. Slogan **"Write Once, Run Anywhere"**. **JDK** includes the compiler and dev tools.
- Collections: **HashSet** = unique elements, no duplicates; **HashMap** = key-value pairs.
- **Creators:** Java = **James Gosling** · C++ = **Bjarne Stroustrup** · Python = **Guido van Rossum** · JavaScript = **Brendan Eich** (Netscape, 1995) · C# = **Anders Hejlsberg**.
- **C++:** **pure virtual function** = append **`= 0`** (class becomes abstract); **operator overloading** lets operators work on user-defined types.
- **JavaScript:** strict equality is **`===`**. **TypeScript** = Microsoft's typed superset of JavaScript.
- **Kotlin** = Google's preferred Android language since 2019 · **Swift** = Apple's iOS language (2014) · **Dart** = used with **Flutter**.
- **Naming:** **PascalCase** for class names; **snake_case** for Python variables/functions; camelCase for Java variables/methods.

---

## Core idea & history
- **OOP** models software as **objects** (data + behavior) that interact via messages. Contrast: **procedural** (functions + data separate), functional, declarative.
- **Class** = blueprint/template; **Object** = instance of a class (has state, behavior, identity). **Attributes/fields/properties** = state; **methods** = behavior. **Instantiation** = creating an object (`new`).
- First OO language: **Simula** (1960s, Ole-Johan Dahl & Kristen Nygaard); **Smalltalk** (Alan Kay, Xerox PARC) popularized OOP; C++ (Bjarne Stroustrup, 1980s "C with Classes"), Java (James Gosling, Sun, 1995), C# (Anders Hejlsberg, Microsoft, 2000), Python (Guido van Rossum, 1991), Ruby (Matz, 1995), Swift (Apple 2014), Kotlin (JetBrains 2011; Google's preferred Android language since 2019).

## The four pillars
| Pillar | Meaning | Mechanism |
|---|---|---|
| **Encapsulation** | bundling data+methods and **hiding internal state** | private fields + public getters/setters; access modifiers; "data hiding" |
| **Abstraction** | exposing essential features, hiding implementation detail | abstract classes, interfaces |
| **Inheritance** | new class acquires properties/methods of existing class ("is-a") | `extends`, `:`; base/parent/super class vs derived/child/sub class |
| **Polymorphism** | "many forms" – same interface, different behavior | **Compile-time (static)**: overloading; **Run-time (dynamic)**: overriding + virtual dispatch |
- Also: **Message passing**, **Dynamic binding**, **Modularity**.

## Key concepts
- **Constructor**: special method called on creation; same name as class (Java/C++/C#), `__init__` (Python); no return type. **Default constructor** (no args; compiler-provided if none defined), **parameterized**, **copy constructor** (C++). **Destructor** (`~Class()` C++; `__del__` Python); Java uses **garbage collection** (`finalize` deprecated).
- **this** (Java/C++/C#) / **self** (Python) = reference to the current object. **super** = parent class reference.
- **Method overloading**: same name, different parameter lists (number/type/order) — same class; return type alone doesn't count. **Method overriding**: subclass redefines parent method with same signature (Java: `@Override`; C++ `virtual`/`override`; C# `virtual`/`override`).
- **static** members belong to the class (shared by all objects); `static` methods can't use `this`.
- **final** (Java: variable constant / method not overridable / class not extendable) · `const` (C++/C#, JS) · `sealed` (C#) · `readonly`.
- **Abstract class**: can't be instantiated; may have abstract (no body) and concrete methods; single inheritance. **Interface**: contract of methods (Java 8+ may have default/static methods); a class can implement **many**. Abstract class = "is-a" partial implementation; interface = "can-do" capability.
- **Access modifiers:**
  | Modifier | Class | Package | Subclass | World |
  |---|---|---|---|---|
  | `public` | ✔ | ✔ | ✔ | ✔ |
  | `protected` | ✔ | ✔ | ✔ | ✘ |
  | default (package-private) | ✔ | ✔ | ✘ | ✘ |
  | `private` | ✔ | ✘ | ✘ | ✘ |
- **Inheritance types:** single, multilevel, hierarchical, multiple (C++, Python; **not for classes in Java/C#** → interfaces instead), hybrid. **Diamond problem** = ambiguity with multiple inheritance (C++ virtual inheritance; Python MRO/C3 linearization).
- **Composition ("has-a") vs inheritance ("is-a")**; "favor composition over inheritance". **Association → aggregation → composition** (strength). **Dependency**, **realization** (interface). **Coupling** (dependence between classes — keep low) and **cohesion** (focus within a class — keep high).
- **Upcasting/downcasting**: parent reference to child object (`Animal a = new Dog();`) → polymorphic call uses Dog's overridden method (dynamic dispatch via **vtable** in C++).
- **Early (static) binding** vs **late (dynamic) binding**.
- **Object lifecycle:** create → use → destroy/garbage collected. **Garbage collector** frees unreachable objects (Java, C#, Python ref-count + GC). C/C++: manual memory (`malloc/free`, `new/delete`, smart pointers).
- **Stack vs heap:** local variables/primitives & call frames on **stack**; objects on **heap**. **Memory leak** = unreleased memory. **Null pointer / NullPointerException**.
- **Pass-by-value** (Java is always pass-by-value; object references are copied) vs by-reference (C++ `&`).
- **Immutable** object: can't change after creation (Java `String`, Python `str`, `tuple`). **String pool** (Java).
- **Equality:** `==` compares references (Java objects) / values (primitives); `.equals()` compares content. Python `==` value, `is` identity.
- **Wrapper classes** (Integer, Double) & **autoboxing/unboxing**. **Generics** (`List<String>`; templates in C++). **Enums**. **Records** (Java 16+). **Lambda expressions** and **streams** (Java 8). **Annotations**.
- **Exception handling:** `try { } catch (Exception e) { } finally { }` — finally always runs. Java: *checked* (compile-time, must handle/declare: IOException, SQLException) vs *unchecked/runtime* (NullPointerException, ArithmeticException, ArrayIndexOutOfBounds); `throw` (raise) vs `throws` (declare). Python: `try/except/else/finally`, `raise`. `Error` (OutOfMemory) vs `Exception`.
- **Design principles** (SOLID, DRY, KISS) and **patterns** → file `05`.
- **Naming conventions:** *camelCase* (variables/methods in Java/JS), *PascalCase* (class names), *snake_case* (Python/C), *SCREAMING_SNAKE_CASE* (constants), *kebab-case* (CSS/URLs).

## Java quick facts
- Platform independent: source `.java` → compiler `javac` → **bytecode `.class`** → runs on the **JVM**. Slogan: **"Write Once, Run Anywhere" (WORA)**. **JDK** (dev kit: compiler+tools+JRE) ⊃ **JRE** (runtime: JVM + libraries) ⊃ **JVM**.
- Entry point: `public static void main(String[] args)`. Print: `System.out.println()`. Input: `Scanner`. Files: `.java`; one public class per file, filename = class name.
- Primitives (8): `byte(1) short(2) int(4) long(8) float(4) double(8) char(2) boolean`. Everything else is a reference type. `String` is a class.
- Keywords: `class, extends, implements, interface, abstract, final, static, new, this, super, try, catch, finally, throw, throws, package, import, instanceof, enum, void, null, synchronized, volatile`.
- Collections: `List` (ArrayList – dynamic array, LinkedList), `Set` (HashSet – unique, unordered; TreeSet – sorted; LinkedHashSet), `Map` (HashMap – key/value, TreeMap, LinkedHashMap), `Queue`/`Deque`, `Stack`, `Collections` utility. **ArrayList** random access O(1), insertion mid O(n); **LinkedList** insertion O(1) at known node.
- Versions: Java 8 (2014, lambdas, LTS), 11 (LTS), 17 (LTS), 21 (LTS), **25 (LTS, Sept 2025)**; releases every 6 months (Java 26 in Mar 2026; Java 27 in Sep 2026). Owned by **Oracle** (acquired Sun 2010). OpenJDK. Frameworks: **Spring/Spring Boot**, Hibernate, Maven/Gradle, JavaFX, Android (Java/Kotlin).
- **Multithreading:** `Thread`, `Runnable`, `synchronized`.

## C++ quick facts
- Extension of C by **Bjarne Stroustrup** (Bell Labs). `#include <iostream>`; `cout << "Hi" << endl;`, `cin >> x;`, `using namespace std;`. Supports procedural + OO + generic programming.
- **Pointers** (`int *p = &x;` `*p` dereference), **references** (`int &r = x;`), `new`/`delete`, **virtual functions**, **pure virtual** (`= 0` → abstract class), **operator overloading**, **templates**, **friend** functions, **STL** (vector, map, set, algorithm), **RAII**, smart pointers (`unique_ptr`, `shared_ptr`), `struct` default public vs `class` default private. Scope resolution `::`. Header & source files `.h/.hpp`, `.cpp`. C++ standards: C++11, 14, 17, 20, 23, 26.
- `i++` vs `++i`; `sizeof`; `int` typically 4 bytes.

## Python quick facts
- Interpreted, dynamically typed, indentation defines blocks, created by **Guido van Rossum** (named after Monty Python). **Python 3.15** (Oct 2026); 3.10 EOL Oct 2026; Python 2 EOL Jan 2020.
- `class Dog(Animal):` · constructor `def __init__(self, name):` · `self.name = name` · `super().__init__()` · **duck typing** · **dunder methods** `__str__`, `__repr__`, `__len__`, `__add__` · `@staticmethod`, `@classmethod`, `@property` · no true private (convention `_x`, name mangling `__x`) · multiple inheritance with MRO.
- Data types: `int, float, str, bool, list [], tuple (), dict {k:v}, set {}`; list mutable, tuple immutable. Slicing `s[a:b:step]`; `len()`, `range()`, `enumerate()`, list comprehension `[x*x for x in range(5)]`. Libraries: NumPy, pandas, Matplotlib, scikit-learn, TensorFlow, PyTorch, Django, Flask, FastAPI.
- Operators: `//` floor div, `**` power, `%` mod, `and/or/not`, `in`, `is`.

## C#, JavaScript & other languages · finals
- **C#** (.NET; Microsoft): `class`, properties `{ get; set; }`, `Console.WriteLine()`, `interface`, `sealed`, LINQ, `using`, `namespace`. .NET 8 (LTS), .NET 9, **.NET 10 (LTS, Nov 2025)**. Unity uses C#.
- **JavaScript** (Brendan Eich, Netscape, 1995, in ~10 days; originally Mocha → LiveScript → JavaScript; standardized as **ECMAScript**/ES6 = 2015): prototype-based inheritance; `class` is syntactic sugar; `let/const/var`; `===` strict equality; `null` vs `undefined`; arrow functions; Promises/`async-await`; Node.js (Ryan Dahl, 2009).
- **TypeScript** (Microsoft; Anders Hejlsberg): typed superset of JS. **PHP** (Rasmus Lerdorf 1994). **Go** (Google). **Rust** (Mozilla; ownership/borrow). **Swift** (Apple). **Kotlin**. **Dart** (Flutter). **R** (statistics). **Scala**. **Lua**. **Perl** (Larry Wall). **Ruby on Rails**.

## Code tracing practice
```java
// Q1  polymorphism
class Animal { void speak(){ System.out.println("Animal"); } }
class Dog extends Animal { void speak(){ System.out.println("Woof"); } }
Animal a = new Dog(); a.speak();
// A1: Woof   (runtime polymorphism; method overriding)
```
```java
// Q2  overloading
int add(int a,int b){ return a+b; }
double add(double a,double b){ return a+b; }
add(2,3); add(2.0,3.0);
// A2: 5  and 5.0
```
```java
// Q3  static counter
class C{ static int n=0; C(){ n++; } }
new C(); new C(); new C();  System.out.println(C.n);
// A3: 3
```
```java
// Q4  finally
try { System.out.print("A"); int x = 5/0; System.out.print("B"); }
catch(ArithmeticException e){ System.out.print("C"); }
finally { System.out.print("D"); }
// A4: ACD
```
```python
# Q5
class A:
    def __init__(self): self.x = 1
class B(A):
    def __init__(self):
        super().__init__()
        self.y = self.x + 1
print(B().y)
# A5: 2
```
```java
// Q6 string equality
String s1 = "hi", s2 = "hi", s3 = new String("hi");
s1==s2 ? true; s1==s3 ? false; s1.equals(s3) ? true
```
```
Q7: Which keyword prevents inheritance in Java? → final      Q8: Can an interface be instantiated? → No
Q9: Can a constructor be inherited? → No (but can be called via super())
Q10: Which OOP concept is 'private variables + public getters/setters'? → Encapsulation
```

## "Which concept?" mappings
- Same method name in parent and child with same signature → **overriding (runtime polymorphism)**.
- Same method name, different parameters → **overloading (compile-time polymorphism)**.
- Hiding implementation details → **abstraction / encapsulation (data hiding)**.
- Car *has an* Engine → **composition/aggregation**; Dog *is an* Animal → **inheritance**.
- A class that cannot be instantiated → **abstract class**; contract only → **interface**.
- One interface, many implementations → **polymorphism**.
- Creating objects without exposing logic → **Factory pattern**; only one instance → **Singleton**.

---

## ✅ Quick self-check
- 4 pillars of OOP? → **Encapsulation, Abstraction, Inheritance, Polymorphism**
- Blueprint for objects? → **Class**; instance → **Object**
- Method with same name as class and no return type → **Constructor**
- Compile-time polymorphism → **Overloading**; run-time → **Overriding**
- Keyword referring to current object (Java) → **this**; to parent → **super**; Python current object → **self**
- Shared by all instances → **static** member
- Java: prevent inheritance → **final**; implement interface → **implements**; inherit class → **extends**
- Not instantiable but may have concrete methods → **Abstract class**
- Java compiled code → **bytecode** executed by **JVM**; dev kit → **JDK**
- Java creator → **James Gosling (Sun Microsystems)**; C++ → **Bjarne Stroustrup**; Python → **Guido van Rossum**; JavaScript → **Brendan Eich**; C# → **Anders Hejlsberg**; C → **Dennis Ritchie**; PHP → **Rasmus Lerdorf**
- First OO language → **Simula**; Smalltalk → **Alan Kay**
- Problem with multiple inheritance → **Diamond problem**
- Block that always executes → **finally**
- Is Java pass-by-value or by-reference? → **pass-by-value**
- `==` vs `.equals()` → reference vs content
- C++ pure virtual function → `= 0` makes class **abstract**
- Python constructor → **__init__**
- SOLID's "S" → **Single Responsibility**
