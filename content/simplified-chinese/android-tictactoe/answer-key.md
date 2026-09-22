---
title: "答案密钥 - 安卓井字棋"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### 谜题1
```xml
<resources>
    <string name="app_name">Tic-Tac-Toe</string>
</resources>
```

### 谜题2
```kotlin
Toast.makeText(this, "欢迎来到井字棋游戏", Toast.LENGTH_LONG).show()
```

### 谜题3
#### 谜题3a
```kotlin
var colorGreen = Color.GREEN
```
#### 谜题3b
```kotlin
var winner = -1
```

### 最终谜题
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