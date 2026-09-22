```markdown
---
title: "For Loops"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

Эгер код блогун канча жолу кайталагыңыз келерин так билсеңиз, `for` циклин `while` циклдин ордуна колдонсоңуз болот:

```java
for (initialization; condition; iteration) {
  // аткарылышы керек код блогу
}
```

- `initialization` код блогу иштей электе (бир гана жолу) аткарылат.
- `condition` (аты айтып тургандай) код блогу аткарылышы үчүн шартты аныктайт.
- `iteration` код блогу аткарылгандан кийин (ар бир жолу) аткарылат.

Төмөндөгү мисал `0` ден `4` чейинки сандарды басып чыгарат:

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` цикл башталуудан мурун бир өзгөрмөнү орнотот (`int i = 0`).
- `condition` цикл иштеши үчүн шартты аныктайт (`i` `5`тен кичине болушу керек). Эгер шарт `true` болсо, цикл кайрадан башталат, эгер `false` болсо, цикл токтойт.
- `iteration` ар бир код блогу аткарылгандан кийин бир маанини көбөйтөт (`i++`).

Бул мисал `0` ден `10` чейинки жуп сандарды гана басып чыгарат:

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```
```