---
title: "Sets"
draft: false
weight: 3
---

Just like a list, a set is a collection of items. The difference between a set and a list is that a set cannot contain duplicates. So, if you have 5 chocolates and you put them in a set, you'll only be left with 1 chocolate as duplicates will be removed. 😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500"/>
</a>

In the image above, the left side represents **<font color="red">Indoor Games</font>** (Chess & Table Tennis) while the right side represents the **<font color="green">Outdoor Games</font>** (Cricket & Football). The middle represents the common part of both these sets. These are the games that can be played Indoors as well as Outdoors (Basketball & Badminton). The middle part is also known as the intersection between two sets.

{{% notice tip %}}
A set is created by using the `set()` function or placing all the elements within a pair of curly braces.
{{% /notice %}}

```python
indoorGames = set(["Chess", "Table Tennis", "Basketball", "Badminton"])
outdoorGames = {"Cricket", "Football", "Basketball", "Badminton"}
print('** Indoor Games **')
print(indoorGames)
print('** Outdoor Games **')
print(outdoorGames)
```

**Output**
```
** Indoor Games **
set(["Chess", "Table Tennis", "Basketball", "Badminton"])
** Outdoor Games **
set(["Cricket", "Football", "Basketball", "Badminton"])
```

### Union of Sets
If we have 2 sets as above, the union of these two sets contains the games from both the sets. The output will be a new set. The duplicates will be removed.

The symbol used for Union is `|`.

```python
allGames = indoorGames | outdoorGames
print('** All Games **')
print(allGames)
```

**Output**
```
** All Games **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Cricket", "Football"])
```


### Intersection of Sets
The intersection of 2 sets will be the set containing both indoor and outdoor games.

The symbol used for Intersection is `&`.

```python
commonGames = indoorGames & outdoorGames
print('** Common Games **')
print(commonGames)
```


**Output**
```
** Common Games **
set(["Basketball", "Badminton"])
```

### Difference of Sets
The difference of 2 sets will be the set that contains games from one set that are not present in the other set.

The symbol used for Difference is `-`.

```python
indoorOnlyGames = indoorGames - outdoorGames
print('** Indoor Only Games **')
print(indoorOnlyGames)
```

**Output**
```
** Indoor Only Games **
set(["Chess", "Table Tennis"])
```

### Print the items of a set
You cannot print the items of a set using the item number like a list. The elements of a set are not in a fixed sequence. 

Therefore, you cannot do something like `indoorGames[0]`, or `indoorGames[1]` like you can do in a list. However, you can go through the elements of a set using a `for` loop.

```python
for g in indoorGames:
  print(g)
```

**Output**
```
Chess
Table Tennis
Basketball
Badminton
```

### Adding items to a set
We can use the `.add` function to add a new game to a set. 
```python
indoorGames.add("Carrom")
print('** Indoor Games **')
print(indoorGames)
```


**Output**
```
** Indoor Games **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Carrom"])
```

### Removing items to a set
We can use the `.discard` function to remove an item from the set. 
```python
indoorGames.discard("Chess")
print('** Indoor Games **')
print(indoorGames)
```

**Output**

```
** Indoor Games **
set(["Table Tennis", "Basketball", "Badminton", "Carrom"])
```
{{% notice note %}}
If you remove an item that is not present in the set, you won't get any error. On the other hand, if you try to remove an item that is not present in a list, you would get a ValueError !
{{% /notice %}}

## Try it Yourself

<iframe height="600px" width="100%" 
 src="https://replit.com/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>