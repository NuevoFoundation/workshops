---
title: "Respuestas - Android Gato"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### Acertijo 1
```xml
<resources>
    <string name="app_name">Gato</string>
</resources>
```

### Acertijo 2
```kotlin
Toast.makeText(this, "Bienvenido al juego del Gato", Toast.LENGTH_LONG).show()
```

### Acertijo 3
#### Acertijo 3a
```kotlin
var colorGreen = Color.GREEN
```
#### Acertijo 3b
```kotlin
var winner = -1
```

### Acertijo Final
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