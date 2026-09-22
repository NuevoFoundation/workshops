```markdown
---
title: "Aktivität 6 - Neustart des Spielers nach Zerstörung"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 13
---

Wir haben ziemlich solide Gegner erstellt, aber jetzt gibt es ein Problem – sie tun dir eigentlich nichts! Genauer gesagt, sie können dir in keiner Weise schaden. Das werden wir ändern. Im finalen Spiel wird es zwei Möglichkeiten geben, wie du Schaden nehmen kannst: indem du von einem gegnerischen Laser getroffen wirst oder indem du den Gegner berührst. Fangen wir mit Letzterem an, da es ein bisschen einfacher ist.

Kollisionen sind in Phaser relativ einfach.

Lass uns zuerst ein Explosions-Sprite-Sheet importieren und die Animation in Szene 1 umsetzen:

<!--- ![load_sprite](../media/7/load_sprite.png)--->
<img src="../media/7/load_sprite.png" alt="load_sprite" style="width:950px;"/>

<!--- ![create_sprite](../media/7/create_sprite.png)--->
<img src="../media/7/create_sprite.png" alt="create_sprite" style="width:950px;"/>

Das wird eine Explosion sein, die abgespielt wird, wenn der Spieler zerstört wird!

Phaser bietet sehr praktische Möglichkeiten, um Kollisionen zwischen Objekten zu behandeln. Wir können einfach die folgende Zeile zur `create()`-Methode in Szene 2 hinzufügen:

```javascript
this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
```

<!--- ![overlap with player](../media/7/overlap_hurtPlayer.png)--->
<img src="../media/7/overlap_hurtPlayer.png" alt="overlap with player" style="width:950px;"/>

Diese Zeile ruft die Methode `hurtPlayer()` auf, wenn `this.player` und ein Mitglied der Gruppe `this.enemies` sich überlappen. Dabei wird `hurtPlayer` mit `this.player` und `this.enemies` als Argumente aufgerufen.

Diese Zeile veranlasst, dass die Methode `hurtPlayer()` aufgerufen wird, wenn der Spieler und ein Objekt in der Gegnergruppe sich berühren, wobei die Variablen des Spielers und des Gegners an die Methode übergeben werden. Jetzt erstellen wir die Methode `hurtPlayer()`:

<!--- ![hurtPlayer](../media/7/function.png)--->
<img src="../media/7/function.png" alt="hurtPlayer" style="width:950px;"/>

Zuerst zerstören wir den Gegner und deaktivieren den Spieler für `Schritt 4 und 5` mit diesen Zeilen:

```javascript
enemy.destroy();
player.disableBody(true, true);
```

Dies lässt sowohl den Gegner als auch den Spieler verschwinden (der Gegner wurde gelöscht, aber der Spieler ist nur unsichtbar und nicht interaktiv). Jetzt lassen wir den Spieler nach einer kurzen Pause wiederbeleben (die Pause gibt dem Spieler Zeit, auf den Schaden zu reagieren). Für diese Pause verwenden wir einen weiteren Timer (wie wir es für die Änderung der Bewegungsrichtung des Gegners gemacht haben) in `Schritt 7`. Die Syntax wird dieselbe sein, aber wir rufen die Funktion `resetPlayer()` auf, haben eine kürzere Verzögerung und der Timer wird nicht wiederholt.

Wenn du den Timer erstellt hast, lass uns an der Methode `resetPlayer()` arbeiten:

<!--- ![reset_player](../media/7/resetPlayer.png)--->
<img src="../media/7/resetPlayer.png" alt="reset_player" style="width:950px;"/>

Zuerst wählen wir eine Respawn-Koordinate aus und ändern den (X, Y)-Wert des Spielers auf diese Position (wir können den Standort des Schiffs so ändern, weil er immer noch existiert, nur deaktiviert ist). Dann aktivieren wir den Spieler mit dieser Zeile:

```javascript
this.player.enableBody(true, x, y, true, true);
```

Sobald du dies implementiert hast, sollte die Kollision so aussehen:
![collision](../media/7/respawn-first.gif)

Als Nächstes erstellen wir ein neues Explosionsobjekt, indem wir `explosion.js` bearbeiten:

<!--- ![explosion](../media/7/explosion.png)--->
<img src="../media/7/explosion.png" alt="explosion" style="width:950px;"/>

Beachte, dass es `Phaser.GameObjects.Sprite` erweitert. Das ermöglicht uns, den Konstruktor dieser Klasse durch Vererbung zu nutzen. Der Parameter unseres Projektilobjekts ist einfach die Szene und zwei Zahlen für die x- und y-Koordinaten – später wirst du sehen, dass wir Szene 2 selbst übergeben. Wir können diese Szene verwenden, um auf alles innerhalb von ihr zuzugreifen. Diese Datei erstellt lediglich ein Objekt, das die Explosionsanimation an der angegebenen Position abspielt. Alles, was diese Klasse benötigt, ist im Konstruktor enthalten, und es gibt nur 2 Zeilen Code, die du ausfüllen musst.

Jetzt gehe zur Methode `hurtPlayer()` in `scene2.js`:

<!--- ![create_explosion](../media/7/create_explosion.png)--->
<img src="../media/7/create_explosion.png" alt="create_explosion" style="width:950px;"/>

{{% notice hint %}}
Du wirst zwei Explosionsobjekte erstellen:

* Eines mit der Szene und den Spielerkoordinaten als Parameter,
* Das andere mit der Szene und den Gegnerkoordinaten als Parameter.
{{% /notice %}}

Als Nächstes fällt auf, dass die Wiederbelebung des Spielers etwas abrupt ist. Wir machen den Übergang mit einem Tween geschmeidiger, nachdem wir den Spieler gespawnt haben:

<!--- ![reset_tween](../media/7/reset_tween.png)--->
<img src="../media/7/reset_tween.png" alt="reset_tween" style="width:950px;"/>

Ein Tween ist im Wesentlichen ein Werkzeug, das dir ermöglicht, ein Feature oder eine Eigenschaft eines Objekts zu animieren. Zum Beispiel animieren wir in diesem Fall die Alpha (d. h. Transparenz) des Spielers. Wir beginnen, indem wir die Alpha des Spielers auf 0,5 setzen und verwenden dann das Tween, um sie auf volle, normale Sichtbarkeit zu animieren.

```javascript
var tween = this.tweens.add({
    targets: this.player,
    y: config.height - 64,
    ease: 'Power1',
    duration: 1500,
    repeat: 0,
    onComplete: function(){
        this.player.alpha = 1;
    },
    callbackScope: this
});
```

Jetzt sind wir endlich fertig! Die Wiederbelebungsanimation des Spielers sieht nun viel sauberer aus!

![collision](../media/respawn-second.gif)
```