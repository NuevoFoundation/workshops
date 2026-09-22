---
title: "Aktivität 8 - Den Gegnern das Schießen erlauben"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Jetzt werden wir die Gegner dazu bringen, auf den Spieler zu schießen. Jeder Gegner wird zufällig schießen, und die Schwierigkeit (die später mit jeder Stufe erhöht wird) wird durch die Häufigkeit definiert, mit der sie zufällig schießen.

Der gegnerische Strahl ist dem Strahl des Spielers recht ähnlich. Wir werden erneut eine sehr ähnliche Datei `enemyBeam.js` erstellen, die nahezu denselben Code wie die Datei `playerBeam.js` enthält, jedoch mit anderen Variablennamen und Zahlen:

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

Wir werden die Sprites und Animationen für die Strahlen des Spielers und die Strahlen der Gegner teilen. Während der Implementierung erstellen Sie jedoch eine separate Gruppe für gegnerische Geschosse:

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

Wir müssen auch eine Schwierigkeit für dieses Spiel erstellen (wir werden später mehr über `difficulty` erklären, aber zunächst wird `difficulty` sicherstellen, dass der Gegner schießt):

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Wir empfehlen, die Schwierigkeit auf 1000 zu setzen.
* Wenn Sie die Schwierigkeit auf 1000 setzen, wird eine Zufallszahl zwischen 1 und 1000 ausgewählt. Nur wenn die Zufallszahl 1 ist, wird der Gegner schießen.
* Der Gegner wird kontinuierlich schießen, wenn Sie die Schwierigkeit auf 1 setzen.
{{% /notice %}}

Um die Gegner zufällig schießen zu lassen, erstellen wir zunächst eine `enemyShoot()` Methode:

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

und rufen diese in der `update()` Methode auf:

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

Die Methode erzeugt ein neues gegnerisches Geschoss in einer zufällig definierten Rate.

Dann müssen wir die gegnerischen Geschosse aktualisieren. Wir müssen sicherstellen, dass jeder Strahl gelöscht wird.

Sie müssen die gegnerischen Strahlen in `enemyBeam.js` aktualisieren, so wie Sie dies bei `playerBeam.js` getan haben:

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

Sie müssen auch jedes gegnerische Geschoss in Szene 2 aktualisieren, ähnlich wie wir die Geschosse aktualisieren:

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

Am Ende sollte das Gameplay so ähnlich aussehen:
![enemyShoot](../media/9/enemy-shoot.gif)