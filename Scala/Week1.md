Scala
### Lecture 1: Programming Paradigms
Various paradigms in programming: 
* Imperative: modify mutable variables, use assignment, use control structures e.g. if/else, loops, return.
* Von Neumann computer model has shaped computer programming in making it like imperative programs.
* Imperative programming is limited because it tends to conceptualise data structures word-by-word
* This means we need other techniques for higher level abstractions. We also need theories of these things - data types, operations on these types, and laws describing the relations between these types. Note that these theories do not include mutations, which are common in imperative programming
* If we want to implement high-level concepts following mathematical theories, there is no place for mutation. So we will express theories as functions, avoiding mutations and abstracting and composing functions.
* Restricted sense of FP: no mutable variables, assignments, loops or imperative control structures.
* Wider sense: FP focuses on functions. Functions can be produced, consumed, composed.
* Functions are first class citizens in FP languages. They can be created anywhere, passed as parameters, and composed together.
* Not many really pure functional languages because this wouldn't be very useful.
