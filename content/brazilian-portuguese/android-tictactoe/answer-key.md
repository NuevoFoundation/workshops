---
title: "Gabarito - Jogo da Velha para Android"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### Quebra-cabeça 1
```xml
<resources>
 <string name="app_name">Jogo da Velha</string>
</resources>
```

### Quebra-cabeça 2
```kotlin
Toast.makeText(this, "Bem vindo ao Jogo da Velha", Toast.LENGTH_LONG).show()
```

### Quebra-cabeça 3
#### Quebra-cabeça 3a
```kotlin
var colorGreen = Color.GREEN
```
#### Quebra-cabeça 3b
```kotlin
var winner = -1
```

### Quebra-cabeça Final
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