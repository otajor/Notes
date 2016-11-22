## Week 3

### Lecture 3.1 - Class Hierarchies
* Looking at class hierarchies, where multiple classes cooperate to achieve a certain goal. We will do this with reference to this class:
```scala
abstract class IntSet {
  def incl(x: Int): IntSet
  def contains(x: Int): Boolean
}
```
* This is an abstract class, which means it can contain members that are missing an implementation. This means it cannot be instantiated using `new IntSet()`
