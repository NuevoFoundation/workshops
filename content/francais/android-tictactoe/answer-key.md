```yaml
---
title: "Clé de Réponse - Tic-Tac-Toe Android"
date: 2021-03-13T14:17:07.42-07:00
hidden: true
weight: 14
---

### Énigme 1
```xml
<resources>
    <string name="app_name">Tic-Tac-Toe</string>
</resources>
```

### Énigme 2
```kotlin
Toast.makeText(this, "Bienvenue sur Tic-Tac-Toe", Toast.LENGTH_LONG).show()
```

### Énigme 3
#### Énigme 3a
```kotlin
var colorGreen = Color.GREEN
```
#### Énigme 3b
```kotlin
var winner = -1
```

### Énigme Finale
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
```