---
title: "Answer Key - Android Tic-Tac-Toe"
date: 2020-07-27T14:17:07.42-07:00
draft: true
hidden: true
weight: 13
---

### Puzzle 1
```java
<resources>
    <string name="app_name">Tic-Tac-Toe</string>
</resources>
```

### Puzzle 2
```java
Toast.makeText(this, "Welcome to Tic-Tac-Toe", Toast.LENGTH_LONG).show()
```

### Puzzle 3
#### Puzzle 3a
```java
var colorGreen = Color.GREEN
```
#### Puzzle 3b
```java
var winner = -1
```

### Final Puzzle
```java
//cross1
if (Player1.contains(1) && Player1.contains(5) && Player1.contains(9))
{
    winner = 1
}
if (Player2.contains(1) && Player2.contains(5) && Player2.contains(9))
{
    winner = 2
}

//cross2
if (Player1.contains(3) && Player1.contains(5) && Player1.contains(7))
{
    winner = 1
}
if (Player2.contains(3) && Player2.contains(5) && Player2.contains(7))
{
    winner = 2
}
```