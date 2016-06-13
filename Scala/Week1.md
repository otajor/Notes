Scala
### Lecture 1.1: Programming Paradigms
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

### Working Hard to Keep It Simple Lecture
* https://www.youtube.com/watch?v=3jg1AheF4n0
* Parallel programming: We want to make use of additional hardware to make programs run faster
* Concurrent programming: We have something that is concurrent and these have to be processed in realtime, so we need a concurrent application.
* Both are hard to get right. Some of the difficulty is fundamental some of it is incidental.
 * Fundamental: concurrent threads accessing a shared mutable states leads to non-determinism, which leads to very tricky bugs. It arises from two things in combination: parallel processing, and mutable state. We can't get rid of parallel processing, so to get rid of the non-determinism, we must get rid of the mutable state by programming functionally.
* Imperative programming is normally driven by time-related considerations. Functional programming is more driven by space-related considerations; it is more like building some kind of structure out of various parts.
* Scala tries to combine functional programming with object-oriented programming.

### Lecture 1.2
* Formal model of evaluation called the 'substitution model' will be very important later on.
* Every non-trivial programming language provides:
 * Primitive expressions representing the simplest elements
 * Ways to combine expressions
 * Ways to abstract expressions, which introduce a name for an expression by which it can then be referred to
* Rules for evaluating a non-primitive expression:
 * Take leftmost operator, evaluate operands (left before right), apply operator to operands
 * If evaluating a name, we replace the name with the right hand side of its definition.
* Defitions can have parameters: `def square(x: Double) = x * x`
* We can also specify the return type of the function: `def power(x: Double, y: Int): Double = ...`
* Function applications evaluated: 1. evaluate all function arguments; 2. Replace the function application by the function's right hand side, while replacing the formal parameters of the function with the actual arguments.
* E.g.
```scala
def sumOfSquares(x: Double, y: Double) = square(x) + square(y)

sumOfSquares(3, 2+2)  // step 1: evaluate all function arguments:
sumOfSquares(3, 4)   // step 2: replace function application with function's right hand side, and replace parameters with arguments.
square(3) + square(4)   // repeat step 2 for square function:
3 * 3 + 4 * 4           // keep on going until you have a value:
25
```
* This is the substitution model: keep evaluating until the expression has been reduced to a value, through a series of rewriting steps.
* This model is powerful. It can express EVERY algorithm. However, it can only be applied to expressions that do not have side-effects.
 * A simple expression with side-effects would be: `c++` - this cannot be expressed by the substitution model because you need a store to keep the value of `c` somewhere.
* Goes over Call-By-Name and Call-By-Value as two ways to carry out evaluations of expressions.
 * Call-By-value evaluates the arguments before evaluating other stuff. This means it doesn't unnecessarily evaluate arguments more than once.
 * Call-By-Name evaluates the operators without evaluating the arguments. This means it doesn't evaluate arguments that aren't used.

### Lecture 1.3 - Evaluation Strategies and Termination
* Importantly, there is a theorem that states that: if CBV evaluation terminates, then CBN will terminate.
 * BUT, the opposite is not true. If we pass a non-terminating computation as an argument into CBV, it will be non-terminating. But if we pass the same computation into CBN, but as an unused argument, then the evaluation will terminate.
* Scala usually uses CBV, i.e. evaluate the arguments first, then the expressions. However, we can force CBN for a certain parameter when defining the function: `def constOne(x: Int, y: => Int) = 1`. Here, y will be evaluated using CBN.

### Lecture 1.4 - Conditionals and Value Definitions
* if-else expresses a choice between two alternatives. It is used for expressions, not statements:
 * `def abs(x: Int) = if (x >= 0) x else -x`
 * `x >= 0` is an expression of type boolean, a.k.a. a predicate.
 * Booleans are evaluated in a way similar to the substitution model. Evaluate things until you have a value.
* We evaluate an if/else expression based on whether the predicate is true or not. If it is true, the if/else expression evaluates to the first alternative, else it evaluates to the second alternative.
* Definitions can be *by-name* or *by-value*.
 * The `def` form is in a sense by-name, because its right-hand side is evaluated on each use.
 * The `val` form is by-value, because its right side is evaluated into a value, and then the `val` is equal to that value and will not be evaluated based on its definition again.

### Lecture 1.5 -- Example: square roots with Newton's method
* 

### Lecture 1.6
* We can use blocks to limit accessibility to functions. Blocks are delimited by braces. They contain a number of definitions, and as the last element, an expression that is the return value of that block.
* Blocks are expressions and can be used anywhere that other expressions are used. In the case of functions, we are saying that a block is the return value of that function. The block then evaluates to its last expression.
* Within a block, a val defined outside the block will still be visible unless it is shadowed (another val with the same name is defined inside the block). This means that we don't need to pass values around a lot within different functions of the same block (though couldn't this lead to side-effects in async code?)
* Semi-colons are pretty much optional, unless you have multiple statements on one line.
* BUT: what about expressions that span several lines? Scala will interpret this as two expressions.
 * We can write these in parentheses (semi-colons are never inserted in parentheses)
 * Or we can include an operator (such as '+') at the end of the first line, which tells the compiler that the statement is not finished.

Lecture 1.7 -- Tail Recursion
* Goes over the substitution model again. 
* Euclid's algorithm to find greatest common denominator of two numbers:
```scala
def gcd(a: Int, b: Int): Int =
  if (b == 0) a else gcd(b, a % b)
```
* Goes through how this is solved for (14, 21) using substitution model.
* Does the same for a basic recursive factorial function, and asks what the difference is.
* For gcd, the recursion always comes about in the same form. It calls itself as its last action. This is just as efficient as a loop because of something about  re-using stack frames.
* For factorial, the recursion comes about as a progressively longer expression. This is because the recursive call is combined with a multiplication, meaning that extra values are added to the expression each time.
* In general, if the last action of a function consists of calling a function (which may be the same), one stack frame would be sufficient for both functions.
* Should we always use tail-recursive functions? Only if there are deep recursive chains - JVM throws a stackoverflow error if there are too many stack frames, so in this case minimising them by using tail-recursive functions is desirable. Otherwise nbd.
