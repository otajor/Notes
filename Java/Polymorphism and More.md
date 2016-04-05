### 30. Polymorphism
* Things get a bit complicated when you make objects equal to other objects of different classes. Here, Tree inherits from Plant
```java
Tree myTree = new Tree();

Plant myPlant = tree; // myPlant has the class Plant, but it is also the object myTree
                      // which has the class Tree. How will this work?

myPlant.grow();     // both Plant and Tree have a grow() method. myPlant uses Tree's method, which overrides Plant's method

myPlant.shedLeaves(); // only Tree has this method. myPlant cannot use it (it is a Plant). This line will cause an error.
```
* It is useful to remember that child classes will always be able to call methods which their parents have.