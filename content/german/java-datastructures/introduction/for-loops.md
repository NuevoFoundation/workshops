```markdown
---
title: "For-Schleifen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

Wenn Sie genau wissen, wie oft Sie einen Codeblock durchlaufen möchten, verwenden Sie eine `for`-Schleife anstelle einer `while`-Schleife:

```java
for (initialization; condition; iteration) {
  // Codeblock, der ausgeführt wird
}
```

- `initialization` wird (einmalig) vor der Ausführung des Codeblocks ausgeführt.
- `condition` (wie der Name schon sagt) definiert die Bedingung für die Ausführung des Codeblocks.
- `iteration` wird (jedes Mal) nach der Ausführung des Codeblocks ausgeführt.

Das folgende Beispiel gibt die Zahlen `0` bis `4` aus:

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` setzt eine Variable, bevor die Schleife beginnt (`int i = 0`).
- `condition` definiert die Bedingung, dass die Schleife ausgeführt wird (`i` muss kleiner als `5` sein). Ist die Bedingung `true`, beginnt die Schleife erneut. Ist sie `false`, endet die Schleife.
- `iteration` erhöht einen Wert (`i++`) jedes Mal, wenn der Codeblock innerhalb der Schleife ausgeführt wurde.

Dieses Beispiel gibt nur gerade Werte zwischen `0` und `10` aus:

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```