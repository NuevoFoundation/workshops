---
title: "Aktivität 7 - Dem Spieler erlauben zu schießen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

Jetzt möchten wir einen der wichtigsten Teile des Spiels hinzufügen - das Schießen der Gegner! Obwohl wir Gegner durch Kollidieren besiegen können, wird das keine gute Idee mehr sein, sobald wir später Leben hinzufügen. Wir werden einen Schusseffekt erzeugen, indem wir ein Objekt für den Strahl mithilfe einer separaten JavaScript-Datei erstellen (ähnlich wie bei der Explosion).

Wir beginnen mit einigen Grundlagen – dem Laden eines Sprite-Sheets und der Animation in Szene 1 für die Strahlen des Spielers:

<!--- ![scene1_preload](../media/8/scene1_preload.png)--->
<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

Der Speicherort des Sprite-Sheets ist `assets/beam.png` und die Breite und Höhe der Frames beträgt jeweils 32:

<!--- ![scene1_create](../media/8/scene1_create.png)--->
<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

Nun werden wir in Szene 2 etwas Ähnliches tun wie bei den Gegnern und eine Gruppe für die Strahlen erstellen, damit wir sie leicht manipulieren können. Erstelle eine Gruppe und nenne sie "projectiles":

<!--- ![projectiles](../media/8/projectiles_step1.png)--->
<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

Wechsle nun zu `playerBeam.js`：

<!--- ![constructor_xy](../media/8/constructor_xy.png)--->
<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

Beachte, dass, ähnlich wie bei `Explosion.js`, die `playerBeam`-Klasse Phaser.GameObjects.Sprite erweitert und das `super()`-Schlüsselwort in seinem Konstruktor verwendet. Vollständige den Code im Konstruktor. Hierbei musst du die Animation des Strahls abspielen, den Körper aktivieren und die y-Geschwindigkeit des Strahls auf die gewünschte Reisegeschwindigkeit setzen.

Nachdem wir die Grundlagen des Strahls erledigt haben, erlauben wir dem Spieler, ihn abzufeuern, wenn er die Leertaste drückt. Ähnlich wie beim Erstellen einer Variablen zur Verarbeitung von Pfeiltasten für die Spielerbewegung, werden wir eine weitere Variable erstellen, die verarbeitet, wann der Spieler die Leertaste drückt:

<!--- ![control_space](../media/8/control_space.png)--->
<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

Nun erstellen wir eine Methode namens playerShoot():

<!--- ![player_shoot](../media/8/player_shoot.png)--->
<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

und rufen sie in der update()-Methode genau wie bei movePlayer() auf:

<!--- ![update_player_shoot](../media/8/update_player_shoot.png)--->
<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

Die Methode playerShoot wird überprüfen, ob die Leertaste gedrückt wurde und einen Strahl abfeuern, wenn dies der Fall ist. "Einen Strahl abfeuern" bedeutet in diesem Fall, ein playerBeam-Objekt zu erstellen und es der Projektilgruppe hinzuzufügen, sofern der Spieler aktiv ist (also noch lebt).

Teste es jetzt! Es gibt jedoch zwei große Probleme - der Strahl schadet dem Gegner überhaupt nicht und der Strahl bewegt sich auch ewig weiter aufgrund der unbegrenzten Canvas von Phaser.
![blast](../media/8/blast-first.gif)

Lassen Sie uns zuerst das zweite Problem lösen. Obwohl dieses Problem das Gameplay nicht direkt beeinflusst, könnte es potenziell ein Problem sein, da der Computer Zeit darauf verwenden muss, den Strahl zu verwalten, wenn er außerhalb des Bildschirms noch existiert. Wenn es zu viele Strahlen gibt, die der Computer verwalten muss, könnte dies letztendlich zu Verzögerungen führen! Wir verwenden eine Update-Funktion in playerBeam.js, die den Strahl zerstört, sobald er den Bildschirm verlässt.

Die einzige Möglichkeit, diese Update-Funktionen funktionieren zu lassen, besteht darin, sie in der Update-Funktion in Szene 2 wie folgt aufzurufen:

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

Du kannst dies an dieser Stelle einfügen:

<!--- ![update_projectiles](../media/8/update_projectiles.png)--->
<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

Um dies zu testen, können wir einfach den Höhenwert ändern, bei dem der Strahl sich selbst zerstört, auf einen Wert, der sich auf dem Bildschirm befindet:

<!--- ![player_bullet_update](../media/8/player_bullet_update.png)--->
<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

Der Code funktioniert korrekt, wenn der Strahl auf einer bestimmten Höhe verschwindet. Nachdem wir getestet haben, dass der Code funktioniert, können wir diesen Wert einfach auf einen ändern, der sich über dem Bildschirm befindet.

![blast](../media/8/blast-disappear.gif)

Man sieht in diesem GIF, dass der Strahl verschwindet, sobald er eine bestimmte Höhe erreicht (wir verwendeten 50). Nachdem wir bestätigt haben, dass es funktioniert, können wir die Zahl 50 einfach auf eine ändern, die etwas außerhalb des Bildschirms liegt (wie 10), und wir wissen, dass der Code wahrscheinlich weiterhin genauso funktioniert.

Jetzt lassen wir den Gegner zerstört werden, wenn er von einem Strahl getroffen wird! Dies können wir tatsächlich mit einer ähnlichen Überlappungserkennung machen, die wir angewendet haben, um zu prüfen, ob der Spieler den Gegner berührt:

<!--- ![overlap](../media/8/projectiles_step2.png)--->
<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

Erstelle eine Codezeile, die dieselbe Syntax wie die Zeile benutzt, die wir verwendet haben, um zu überprüfen, ob Spieler und Gegner kollidiert sind, überprüfe aber, ob Gegner und Strahlen kollidiert sind.

Allerdings können wir die Methode hurtPlayer() nicht verwenden, da der Spieler nicht verletzt wird und wir nicht möchten, dass der Spieler respawnt, wenn der Gegner getroffen wird. Wir