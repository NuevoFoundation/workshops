---
title: "Aktivität 5 - Die Feinde bewegen lassen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 12
---

Im Moment sind die Feinde ein bisschen langweilig, da sie einfach nur stillstehen. Lassen wir sie sich ein wenig bewegen! Unser Ziel wird es sein, sie von links nach rechts bewegen zu lassen, wie hier gezeigt:
![move](../media/6/enemy-move.gif)

Fangen wir damit an, die Feinde nach links zu bewegen, sobald sie erstellt sind. Das können wir ganz einfach mit einer einzigen Zeile Code erreichen:

```javascript
enemy.body.velocity.x = -90;
```

Füge dies in unsere `createEnemies()`-Methode ein:

<!--- ![move enemies](../media/6/move_enemies.png)--->
<img src="../media/6/move_enemies.png" alt="move enemies" style="width:950px;"/>

Wenn du den Code jetzt testest, wirst du sehen, dass die Feinde einfach unendlich weit nach links gehen, da Phaser eine unendliche Leinwand hat. Lassen wir sie die Richtung ändern, bevor sie aus dem Bildschirm verschwinden. Dies können wir mit einem Timer erreichen – ein Werkzeug, das uns ermöglicht, eine Funktion nach einem bestimmten Zeitraum aufzurufen. Die Funktion, die der Timer aufruft, wird die Richtung des Feindes ändern. Wir können den Timer auch unendlich laufen lassen, sodass er die Funktion nach jedem Zeitintervall weiterhin ausführt (was wir hier tun werden). Füge den folgenden Timer am Ende der `createEnemy()`-Methode hinzu:

```javascript
this.enemyTimer = this.time.addEvent({
    delay: 1500,
    callback: this.changeEnemyDirection,
    callbackScope: this,
    loop: true
});
```

<!--- ![timer_function](../media/6/timer_function.png)--->
<img src="../media/6/timer_function.png" alt="timer_function" style="width:950px;"/>

Dies ist ein Timer, der kontinuierlich die Funktion `changeEnemyDirection()` nach einem bestimmten Zeitintervall aufruft. Allerdings haben wir noch keinen Inhalt in sie eingefügt. Lasst uns das jetzt machen: Füge Code in die Methode `changeEnemyDirection()` ein, der die Richtung jedes Feindes in der Feinde-Gruppe ändert (das ist einer der Gründe, warum wir eine Gruppe erstellt haben!):

<!--- ![change_direction](../media/6/change_direction.png)--->
<img src="../media/6/change_direction.png" alt="change_direction" style="width:950px;"/>

{{% notice hint %}}

Beachte jedoch, dass (falls du dieselben Timer-Werte wie wir verwendet hast) dein Schiff sich hinein und heraus aus dem Bildschirm bewegt. Anstatt es an den Bildschirm wie bei dem Schiff des Spielers zu binden, verschieben wir einfach die Startposition des Feindes etwas nach rechts (weil der Timer die korrekte Zeit hat, um hin und her über den Bildschirm zu gehen).

{{% /notice %}}