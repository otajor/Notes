## Week 2: Higher-Order Functions

### Lecture 2.1 - Higher-Order Functions
* These let you pass functions as arguments and return them as results. This is possible because functions are first-class values in functional languages. (Other 'normal' functions are known as first-order functions.)
* Imagine we want to sum all numbers between a and b. Our code would have the same pattern as if we wanted to sum all the cubes of the numbers between a and b, or all the factorials of the numbers between a and b. So we would do well to refactor this code into a `sum` function (e.g. `cube` or `factorial`) and applies it to these values while summing them recursively. This is a use case for higher-order functions.
* We can describe function types using an arrow, such as `Int => Int` is a function that takes an Int and returns an Int.
* We can also write anonymous functions - these are like function literals. The syntax for an anonymous cube function would be: `(x: Int) => x * x * x`. These anonymous functions are only syntactic sugar, since the functionality is exactly like defining functions and then referencing them.
 * So we could write our `sumCubes` function using the generic `sum` function with an anonymous function passed in: `def sumCubes(a: Int, b: Int) = sum(x => x * x * x, a, b)`.
* Goes through how to write the generic `sum` function as a tail-recursive function using a higher order function that is passed in.
