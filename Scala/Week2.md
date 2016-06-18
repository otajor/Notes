## Week 2: Higher-Order Functions

### Lecture 2.1 - Higher-Order Functions
* These let you pass functions as arguments and return them as results. This is possible because functions are first-class values in functional languages. (Other 'normal' functions are known as first-order functions.)
* Imagine we want to sum all numbers between a and b. Our code would have the same pattern as if we wanted to sum all the cubes of the numbers between a and b, or all the factorials of the numbers between a and b. So we would do well to refactor this code into a `sum` function (e.g. `cube` or `factorial`) and applies it to these values while summing them recursively. This is a use case for higher-order functions.
* We can describe function types using an arrow, such as `Int => Int` is a function that takes an Int and returns an Int.
* We can also write anonymous functions - these are like function literals. The syntax for an anonymous cube function would be: `(x: Int) => x * x * x`. These anonymous functions are only syntactic sugar, since the functionality is exactly like defining functions and then referencing them.
 * So we could write our `sumCubes` function using the generic `sum` function with an anonymous function passed in: `def sumCubes(a: Int, b: Int) = sum(x => x * x * x, a, b)`.
* Goes through how to write the generic `sum` function as a tail-recursive function using a higher order function that is passed in.

### Lecture 2.2 - Currying
* Scala has syntax for currying: 
```
def sum(f: Int => Int)(a: Int, b: Int): Int =
  if (a > b) 0 else f(a) + sum(f)(a + 1, b)
```
* So `sum` takes a function and returns a function which takes two ints and returns an int.
* Note that you don't have to call this function with all three of its parameters. You can call `sum(cubeFunc)` and this returns the function that takes two ints, which you might want for something.
* The signature for a curried function would be something like `(Int => Int) => (Int, Int) => Int`, i.e. it is a function which takes a function and returns a function which takes two ints and returns an int.
```
def product(f: Int => Int)(a: Int, b: Int): Int =
  if(a > b) 1
  else f(a) * product(f)(a + 1, b)
```
This could be called like this: `product(x => x * x)(3,4)`

### Lecture 2.5 - Functions and Data
* We are going to learn how functions create and encapsulate data structures.
* Starting with rational numbers:
 * A rational number x/y is represented by 
  * numerator x
  * denominator y
* We could write functions that take numerators and denominators for each rational number involved, but this would result in many values to keep track of. So we will define a class instead:
```scala
class Rational(x: Int, y: Int) {
  def numer = x
  def denom = y
}
```
* Rational is now a new *type*, with a *constructor* to make instances of that type
* Names of types and values are kept in different namespaces - no conflict between Rational (constructor) and Rational (type)
* Elements of a class type are called *objects*. We create these by calling the constructor with the `new` operator: `new Rational(1, 2)`
* If we create a rational type like `myRational = new Rational(1, 2)` then we can access the numer and denom with `myRational.numer` (returns 1)
* We can then define functions which take parameters of type Rational.
```scala
def makeString(r: Rational) =
  r.numer + "/" + r.denom
```
* We can also package these functions in the data abstraction itself, i.e. in the class - these are methods. Let's add an `add` method to the Rational class
```scala
class Rational(x: Int, y: Int) {
  def numer = x
  def denom = y

  def add(that: Rational) =
    new Rational(
      numer * that.denom + that.numer * denom,
      denom * that.denom
    )
}
```
* Say we have one Rational `x` and another `y`. We can add them with `x.add(y)`. 

### Lecture 2.6 - More Fun With Rationals
* We will look at data abstraction and show how it relates to classes.
* In our current model, we can end up with unsimplified rational numbers like 70/49 instead of 10/7.
* We want a way to simplify the representation in the class when the objects are constructed.
* We add a new method to rational - `gcd` from last week. This should be private because it is not accessible outside of the class. Add these lines to the class constructor:
```scala
private def gcd(a:Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
private val g = gcd(x, y)
def numer = x/g
def denom = y/g
```
* Now `numer` and `denom` are defined such that they are already simplified.
* There are different ways we could implement this functionality: we could put the `gcd` call in the definition of `numer` and `denom`, or we could make them both vals. This would not affect the behaviour or the client's view (i.e. anything using this class, I think?)
* Let's define some more methods for Rational:
```scala
def less(that: Rational) = numer * that.denom < that.numer * denom
def max(that: Rational) = if (this.less(that)) that else this
```
* Note that `this` is used to refer to the instance of the class to which the method belongs *as a whole*.
* Also note that within the class, we do not have to say `this.numer`, but can just say `numer`.
* How can we stop users from making illegal Rational numbers like `new Rational(1, 0)`? 
 * We can add a requirement in the constructor: `require(y > 0, "denominator must be positive")`
 * We can also use `assert`.
* Every class implicitly introduces a *primary constructor*, which takes the parameters of the class and executes all statements in the class body.
* Classes can have more than one constructor, taking different arguments. e.g. we can add another constructor to Rational which only takes one argument: `def this(x: Int) = this(x, 1)` - calling the primary constructor with its given parameter and a default second parameter as 1.
* Always simplify/'normalise' numbers as early as possible, as you may exceed the maximal number for integers.

### Lecture 2.7 - Evaluation and Operators
* How do we evaluate statements to do with classes? Pretty much how you would expect. `new C(v1...vn)` is evaluated simply by substituting v1...vn for x1...xn in the class's constructor.
* Why for integers can we write `x + y`, yet for our rational numbers, we have to write `r.add(s)`. Well, we don't have to. Any method with a parameter can be used like an infix operator in Scala. We can write `r add s` and this is just the same as `r.add(s)`.
* We can also use symbols as identifiers for methods in Scala. We can change `add` to `+` simply by changing the character: `def + (that: Rational) = ...`. Make sure you have a space between the symbol-identifier and whatever comes next (in this case `(`) - otherwise it'll just be interpreted as one big symbol-identifier.
* Precedence is determined by set rules based on the first character of the operator. So no matter what you define `*` as in your class, it will have high priority precedence. This is mainly for consistency. Don't make crazy operators that are counterintuitive.


