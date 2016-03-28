### Static Methods & final
* Static variables are known as class variables (as opposed to instance variables) because the whole class just has one of them. 
```java
class Thing {
  public String name;           // each instance of Thing will have its own name
  public static String description; // this will be the same for all instances of Thing

  public void showName() {
    System.out.println(description + ": " + name); // has access to static and non-static variables.
  }

  public static void showDesc() {
    System.out.println(description)
    // System.out.println(name) --- this won't work - static methods only have access to static variables.
  }
}
```
* Static variables can be accessed by their class, e.g. `Thing.description` rather than by instances of that class e.g. `thing1.description`
* Static variables could be useful e.g. for counting the number of instances of a class that have been created, or for assigning a unique id to each instance. This could be done by assigning each instance's `ID` to the static variable `count`, which could be incremented each time a new instance is created.
* Java also has a version of const: `public final static int LUCKY_NUM = 7;` - this will make a static int which cannot be re-assigned. Note that the value must be set when it is declared.

### String Methods
* We often add to strings using `+=`. Every time you use this, it creates a new string and assigns the variable to the new string combined with the old string. Instead, we can use StringBuilder:
```
StringBuilder sb = new StringBuilder("");
sb.append("My name is Sue");
sb.append(" ");
sb.append("and I am a lion tamer");
String s = sb.toString();
```
* You can also method chain these methods. Another method that does the same thing is StringBuffer, which is threaded.
* `printf` is useful for printing variables and things: 
```java
System.out.printf("Total cost: %d, total amount: %d", 5, 120) // d = digit
System.out.printf("Total cost: %-10d, total amount: %d", 5, 120) // -10 = field 10 chars wide
System.out.printf("Total cost: %.2f", 5.5678) // for floats, .2 = 2 d.p.
```