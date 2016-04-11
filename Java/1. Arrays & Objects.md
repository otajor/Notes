### 13. Arrays
* Arrays in java: 
```
int[] intArray; //
intArray = new int[3]; // creates new array of three elements, default value 0
intArray[0] = 3; // sets first element to be 3

int[] numbers = {1, 2, 3}; //creates new array of three elements with given values
```
* Arrays of strings in java:
```java
String[] words = {"Hello", "one", "two", "testing"};

String[] stuff = new String[3]; // creates new array of strings with three elements (default value null)
```
* Iterate over arrays with a normal for loop or a special for loop like so:
```java
for(String thing: words) {
  System.out.println(thing)
}
```
* Multi-dimensional arrays can be defined in a similar way: 
```java
int[][] grid = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
}

grid[2][2]; // 9
```

### 17-19 Java Classes

```java
class Person {
  String name;
  int age;
  void speak() { // void means that nothing is returned.
    System.out.println(“My name is “ + name);
  }
  int calculateYearsToRetirement() {  // otherwise declare what is to be returned like this
    int yearsLeft = 65 - age;
    return yearsLeft;
  }
  String getName() { // This is a getter - for if we want the data to be private.
    return name;
  }
}
```

Person bob = new Person();
bob.name = “Bob”;
bob.age = 48;
bob.speak(); // ‘My name is Bob’

### 20. Method Parameters

* Pass in arguments with their type declared beforehand.

```java
public void speak(String text) {
  System.out.println(text);
}

speak("Hi there"); // prints 'Hi there'
```

21. Setters and 'this'
* Put 'private' in front of your variables to make them inaccessible from outside (only accessible through 'public' setter and getter methods - see below)

```java
class Frog {
  private String name;
  private int age;

  public void setName(String newName) {
    name = newName;
  }

  public String getName() {
    return name;
  }
}
```
We could also write the setName function as:
```
public void setName(String name) {
  this.name = name;
}
```
where name would refer to the name parameter, and this.name is the name property of the object.

### 22. Constructors
* Constructors are methods which are not given return types!
* You can create different constructors that accept different parameters, and Java will figure out which one to run. 

```
class Machine {
  private String name;

  public Machine() { // if no name provided, assign default name
    name = "Arnie";
  }

  public Machine(String name) { // assign provided name to this.name
    this.name = name;
  }
}
```

You could also call a constructor from inside another constructor, e.g. calling a more complicated constructor from inside a simpler one. To do this, refer to the constructor as `this`. E.g. we could rewrite the default constructor above like this:
```
public Machine() {
  this("Arnie")
}
```
