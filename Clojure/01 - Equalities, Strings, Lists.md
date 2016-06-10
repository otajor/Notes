### Equalities
These notes are 8th Light's Clojure Koans, completed and with my own notes added for additional clarification.
* Test that two things are equal by comparing them using the equal operator:
```clj
(= true true)
```
* Things inside brackets are evaluated first, and multiple arguments can be given to the equal operator:
```clj
(= (3 + 4) (7) (2 + 5))
```
* You can negate something with `not`:
```clj
(= true (not (= 1 2)))
```
* You can make symbols and keywords with the following operators:
```clj
(= :hello (keyword "hello")) 
(= 'hello (symbol "hello"))
```
* There is also a not-equal operator:
```clj
(not= "one thing" "another thing")
```
### Strings
