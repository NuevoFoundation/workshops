---
title: "Clave de Respuesta - Android Tic-Tac-Toe"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### Enigma 1
```xml
<resources>
    <string name="app_name">Tic-Tac-Toe</string>
</resources>
```

### Enigma 2
```kotlin
Toast.makeText(this, "Bienvenido a Tic-Tac-Toe", Toast.LENGTH_LONG).show()
```

### Enigma 3
#### Enigma 3a
```kotlin
var colorGreen = Color.GREEN
```
#### Enigma 3b
```kotlin
var winner = -1
```

### Enigma Final
```kotlin
//cruz1
if (Player1.contains(1) && Player1.contains(5) && Player1.contains(9))
{
    winner = 1
}
if (Player2.contains(1) && Player2.contains(5) && Player2.contains(9))
{
    winner = 2
}

//cruz2
if (Player1.contains(3) && Player1.contains(5) && Player1.contains(7))
{
    winner = 1
}
if (Player2.contains(3) && Player2.contains(5) && Player2.contains(7))
{
    winner = 2
}
```