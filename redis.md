## REDIS

`SET server:name ‘fido’`
server:name is the key; ‘fido’ is the value. SET stores the value ‘fido’ at key ‘server:name’

`SETNX server:thing ‘Rover’`
stores the value if the key does not already exist

`GET server:name  // ‘fido’`
returns the key demanded

`INCR connections`
increases the value of the key specified by 1. Note that this is different from just increasing connections by one, because INCR is ‘atomic’ - it appears to the rest of the system to occur instantaneously.

```
SET resource:lock ‘Redis Demo’
EXPIRE resource:lock 120
```
tells Redis that resource:lock should only exist for 120 seconds, after which it will be deleted.

`TTL resource:lock // 113`
returns the number of seconds that the key has left. Returns -2 if they key no longer exists, and returns -1 if the key will never expires. TTL is reset if you SET the key to something new.

A list is a set of ordered values. You can set up a new list by pushing a value to a key using RPUSH:
`RPUSH friends ‘Alice’`
puts ‘Alice’ at the the end of a new list called ‘friends’

`LPUSH friends ’Fred’`
puts ‘Fred' at the beginning of friends

`LRANGE friends 0 -1 // 1) "Alice" 2) “Fred”`
returns all elements from the 1st element till the end of the list. You can also specify which ones you want like:

`LRANGE friends 0 0 // 1) “Alice”`
returns a range from 1st element to 1st element, i.e. just the first one.

`LLEN friends`
returns the length of a list

`LPOP friends`  
removes and returns the first element from a list

`RPOP friends` 
removes and returns the last element from a list.

Sets are like lists but don’t have an order, and each element may only appear once.

```
SADD superpowers ‘flight’
SADD superpowers ‘reflexes’
```
adds the value to the set.

`SREM superpowers ‘flight’`
removes the value from the set.

`SISMEMBER superpowers ‘flight’ // 0`
tests if the given value is in the set (returns 1 or 0)

`SMEMBERS superpowers // 1) “reflexes”`
returns all the members of the set.

`SUNION superpowers birdpowers // 1) “reflexes”, 2) “pecking”`
joins two lists together and returns a list of all the elements (remember that each value can only appear once i.e. if both lists contain that element it will only appear once in the returned list.

`SINTER superpowers birdpowers // “reflexes”`
returns the ‘intersection’ between two sets, i.e. the elements that they have in common.

`ZADD hackers 1912 “Alan Turing”`
this adds a value to a sorted set called ‘hackers’. Here, each value has an associated score, which is then used to sort the elements in the set.

`ZSCORE hackers “Alan Turing”`
returns the score of a given value

`ZRANGE hackers 0 0 // “Alan Turing”`
returns the range specified, in order. The parameters are not the scores of the values, but the indexes of the values in the ordered list.

Hashes are useful for representing objects - they can nest.
```
HSET user:1000 name “John Smith”
HSET user:1000 password “s3cret”
HSET user:1000 visits 10
```

`HGETALL user:1000`
returns all the saved data of a hash.

`HMSET user:1001 name "Mary Jones" password "hidden" visits 5`
sets multiple fields of a hash in one line

`HGET user:1001 name // “Mary Jones”`
this returns a single field value.

`HDEL user:1000 password`
deletes the specified field in a hash.

`HINCRBY user:1000 visits 1 // 11`
increases a numerical value of a hash field by given number. If the field specified doesn’t exist, HINCRBY makes it the given number.

`SADD people user:1000`
this adds the hash ‘user:1000’ to the set ‘people’
