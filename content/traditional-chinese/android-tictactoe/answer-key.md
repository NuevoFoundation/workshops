---
title: "答案解答 - Android 井字遊戲 (Tic-Tac-Toe)"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### 謎題 1
```xml
<resources>
    <string name="app_name">Tic-Tac-Toe</string>
</resources>
```

### 謎題 2
```kotlin
Toast.makeText(this, "歡迎來到井字遊戲", Toast.LENGTH_LONG).show()
```

### 謎題 3
#### 謎題 3a
```kotlin
var colorGreen = Color.GREEN
```
#### 謎題 3b
```kotlin
var winner = -1
```

### 最終謎題
```kotlin
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