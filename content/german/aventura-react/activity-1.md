```markdown
---
title: "Aktivität 1 - Schildkröten retten"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky mit dem Schildkrötenpanzer" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">Klicke auf den unten stehenden Link, um die Costa Rica-App selbst zu erstellen:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Erstelle dein React-Projekt!</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Super! Jetzt werden wir Schritt für Schritt eine Komponente bauen, um Schildkröten auf der Tortuguero-Insel zu retten.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Stell dir vor, React ist eine riesige Kiste voller LEGO-Teile. Jedes Teil (Komponente) hat eine Aufgabe, zum Beispiel:</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>Ein Teil kann ein Knopf sein</li>
  <li>Ein anderes Teil kann ein Bildschirm sein</li>
  <li>Ein weiteres kann eine Liste sein</li>
  <li>Ein weiteres kann ein Bild sein</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Wenn du all diese Teile zusammenfügst... entsteht deine komplette Anwendung!</p>

Los geht‘s!

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Was bedeutet <code>import { useState } from "react";</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In React sind einige Werkzeuge nicht sofort einsatzbereit. Du musst sie aus der React-Werkzeugkiste anfordern. <code>useState</code> ist eines dieser speziellen Werkzeuge, mit denen wir Dinge speichern können, die sich ändern.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Zum Beispiel: wie viele Schildkröten noch zu retten sind.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Was ist <code>export default function Tortugero()</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Hier erstellen wir eine Komponente. <code>export default</code> bedeutet: „Dies ist die Hauptdatei, du kannst sie an anderen Orten verwenden“.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> ist der Name der Komponente. Wie eine Box, auf der steht: <b>„Dies ist Tortugero“</b>.</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Was ist <code>const [tortugas, setTortugas] = useState(0);</code>?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Stell dir vor, wir haben eine magische Box, in der wir eine Zahl speichern. Diese Zahl ist die Anzahl der geretteten Schildkröten.</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → was sich in der Box befindet (eine Zahl)</li>
  <li><b>setTortugas</b> → der magische Schlüssel, der es dir ermöglicht, diese Zahl zu ändern</li>
  <li><b>useState(0)</b> → beginnt mit 0 geretteten Schildkröten</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">So merkt sich React, wie viele Schildkröten du gerettet hast.</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Was ist <code>const total = 10;</code>?</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Diese Zahl ist das Ziel des Spiels: Es gibt 10 gefangene Schildkröten in Tortuguero! Hier sagen wir: <b>„Wir müssen 10 Schildkröten retten“</b>.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Du könntest diese Zahl ändern, um das Spiel einfacher oder schwieriger zu machen.</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Was macht <code>const salvarTortuga = () => { }; </code>?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Diese Funktion wird ausgelöst, wenn wir auf den Button <b>„Salvar tortuga“</b> klicken.</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>Sie prüft, ob noch Schildkröten zu retten sind → <code>tortugas &lt; total</code></li>
  <li>Wenn ja, wird eine Schildkröte hinzugefügt → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Jeder Klick rettet eine neue Schildkröte.</p>

``` jsx
if (tortugas < total) setTortugas(tortugas + 1);
``` 

{{% /notice %}}

{{% notice tip