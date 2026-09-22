---
title: "Erstellen von Animationen"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animation in Phaser

Animation funktioniert, indem eine Reihe von Bildern sehr schnell nacheinander angezeigt wird. Wenn wir dies schnell tun, nimmt unser Gehirn es als Bewegung wahr. Auf eine Weise täuscht man das Gehirn und lässt es glauben, dass diese Bilderserie nur ein sich bewegendes Objekt ist.

![animation](../media/animation.png)

Wir verwenden Spritesheets für Dinge, die wir animieren möchten, da wir diese Animation erstellen können, indem wir durch die Spritesheets scrollen. Um Spritesheets zu animieren, müssen wir zwei Schritte ausführen.

Der erste Schritt besteht darin, die "Anweisungen" für die Animation zu erstellen.

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

Dies erstellt eine Animation namens "dude_anim", die auf "dude" angewendet wird. Die Bildrate ist im Wesentlichen die Geschwindigkeit der Animation. Wiederholen bezieht sich im Wesentlichen darauf, wie oft die Animation abgespielt wird, und eine negative Zahl bedeutet, dass die Animation unendlich oft abgespielt wird.

Der nächste Schritt besteht einfach darin, dem Spiel mitzuteilen, dass es die in unseren Anweisungen angegebene Animation abspielen soll. Dies kann ebenfalls in `create()` erfolgen.

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

Wenn Sie diese Play-Anweisung machen, muss die Zeile nach der Platzierung des Dude auf dem Bildschirm geschrieben werden, da der Code von oben nach unten ausgeführt wird. Wenn wir also diese Play-Anweisung machen, bevor wir den Dude platzieren, weiß der Computer nicht, was er animieren soll.

{{% /notice %}}

Versuchen Sie, den Dude aus der letzten Lektion zu animieren. Experimentieren Sie gerne mit den Werten und sehen Sie, wie sie das Endergebnis verändern.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorAnimation" target="_blank">Replit starten</a>