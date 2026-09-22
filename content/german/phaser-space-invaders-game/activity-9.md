---
title: "Aktivität 9 - Punkte, Level und Leben hinzufügen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Nun werden wir Zahlen hinzufügen, um unser Spiel zu quantifizieren! Das einfachste Element, das implementiert werden kann, ist der Punktestand. Erstelle eine Textvariable oben links auf dem Bildschirm, die `Punkte: ` und den Wert einer Zahlenvariable anzeigt, die den Punktestand des Spielers speichert.

```javascript
this.scoreText = this.add.text(20, 10, "Punkte: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
Diese Zeile druckt die Punktestand-Variable oben links auf dem Bildschirm.

* `20` und `10` sind der x- und y-Wert
* `"Punkte" + this.score` ist der Textwert
{{% /notice %}}

Diese Zeile kannst du an dieser Position einfügen, nachdem du die Punktestand-Variable erstellt hast:

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

Füge einfach eine Punktestand-Variable und etwas Text auf dem Bildschirm hinzu, der "Punkte: 'Punktestand-Variable'" anzeigt. Wir werden die `hitEnemy()`-Funktion aktualisieren, damit der Spieler Punkte dazu bekommt, wenn er einen Gegner besiegt:

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

Nun werden wir Level hinzufügen. Wir initialisieren sie auf die gleiche Weise, wie wir es mit dem Punktestand gemacht haben, aber diesmal zeigen wir sie in der Mitte des Bildschirms statt oben links an:

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

Wir machen die Level recht einfach: Jedes Mal, wenn der Spieler alle Gegner besiegt, wird das nächste Level erreicht und alle Gegner werden neu gespawnt. Um jedes Level schwieriger als das vorherige zu machen, lassen wir die Gegner häufiger schießen. Um dies zu realisieren, erstellen wir eine Schwierigkeitsvariable und verwenden diese, um festzulegen, wie oft die Gegner zufällig schießen.

Mit dieser Einstellung können wir durch Ändern der Schwierigkeitsvariable beeinflussen, wie oft die Gegner schießen. Ein niedrigerer Schwierigkeitswert macht das Spiel schwieriger, da dadurch die Wahrscheinlichkeit für einen gegnerischen Schuss erhöht wird.

Um das Level zu aktualisieren, wenn der Spieler alle Gegner besiegt, erstellen wir eine `levelClear()`-Methode, die die Schwierigkeitsvariable aktualisiert, den Gegner-Timer zurücksetzt, neue Gegner erstellt (durch Aufruf von `createEnemies()`) und den Level-Text auf dem Bildschirm aktualisiert:

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

Beachte, dass wir jedes Mal einen neuen Timer erstellen müssen, wenn wir neue Gegner erstellen, da sonst die Gegner und der Timer möglicherweise nicht synchron sind. Außerdem empfehlen wir, die Schwierigkeitsvariable ab einem Wert von 200 weniger stark zu reduzieren, da die Schwierigkeit ab diesem Punkt viel schneller ansteigt.

Vergiss nicht, `levelClear()` in der `update()`-Methode zu aktualisieren:

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

Jetzt werden wir Leben hinzufügen. Auch hier verwenden wir eine ähnliche Methode, um sie zu initialisieren, und platzieren sie oben rechts auf dem Bildschirm:

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

Nun, um bei einem Treffer ein Leben zu verlieren, fügen wir diesen Code in die `hurtPlayer()`-Methode ein:

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

Damit die Leben auch wirklich Bedeutung haben, machen wir es so, dass das Spiel endet, wenn der Spieler keine Leben mehr hat. Dazu erstellen wir im `create()`-Method eine unsichtbare Textzeile auf dem Bildschirm:

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

Wir machen diesen Text sichtbar, wenn das Spiel vorbei ist. Dies geschieht in der `hurtPlayer()`-Methode:

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

Das sorgt dafür, dass die Spielfigur nicht neu gespawnt wird, der Game-Over-Text angezeigt wird und das Spiel neu gestartet wird, wenn der Spieler auf den Bildschirm klickt.

Jetzt fehlt nur noch die Erstellung der `restart()`-Methode, auf die sich dieser Code bezieht:

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

Das setzt alles zurück, um das Spiel von vorne zu starten.

![gameplay](../media/10/game-play.gif)