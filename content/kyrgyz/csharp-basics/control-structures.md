```markdown
---
title: "Control Structures"
description: "Introduce if-else, for, and while loops in C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Чечим кабыл алуу: If-Statement

Патрик 🐥 абдан сылык өрдөк, ал жолуккан адамдарга учурдагы убакытка жараша "Кайырлуу таң," "Кайырлуу күн," же "Кайырлуу түн" деп куттуктоону жакшы көрөт.

![Күндүн батышынын тоо үстүнөн батуу](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(Grand Challenge: giphy.com/natgeochannel)</p>

Мурда үйрөнгөнүбүздөй, биз бул билдирүүлөрдү төмөнкүдөй басып чыгара алабыз:

```C#
Console.WriteLine("Good Morning");   // 0:00 - 11:59 аралыгында айтылат
Console.WriteLine("Good Afternoon"); // 12:00 - 19:59 аралыгында айтылат
Console.WriteLine("Good Night");     // 20:00 - 23:59 аралыгында айтылат
```

Бирок, биз билебиз, Патрик 🐥 учурдагы убакытка карап, бул билдирүүлөрдүн бирин гана айтышы керек.

Башкача айтканда, биз шарттуу түрдө басып чыгаруу үчүн чечим кабыл ала турган кодду жазышыбыз керек.

C# тилинде биз чечимди **if statement** же **if...else statement** менен кабыл алабыз. Төмөндөгү эскертүүлөрдү окуңуз:

{{% notice note %}}
### If Statement

```
if(boolean expression){
    Action(s) to Take
}
```

**If statement** жогоруда көрсөтүлгөн түзүлүштү ээрчийт. Блоктогу аракеттер (түшүнүктөр) бул boolean expression `true` болсо гана аткарылат. Болбосо, Boolean expression `false` болсо, программа блоктун кийинки сапына өтөт.
### If-Else Statement

```
if(boolean expression){
    Action(s) to Take A
}else{
    Action(s) to Take B
}
```

**If-else statement** жогоруда көрсөтүлгөн түзүлүштү ээрчийт. Эгер boolean expression `true` болсо, программа `if` блоктогу `Action(s) to Take A` аткарат. Болбосо, программа `else` блоктогу `Action(s) to Take B` гана аткарат.

### Мисал

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("I like Music");
    } 
    else 
    {
        Console.WriteLine("I don't like Music");
    }   
```

Жогорудагы код `I like Music` билдирүүсүн басып чыгарат, анткени boolean expression, `likeMusic == true`, туура.
{{% /notice %}}

Жогорудагы куттуктоо мисалына кайрылып, Патрик үчүн "Кайырлуу таң," "Кайырлуу күн," "Кайырлуу түн" деп айтуу чечимин кабыл алалы.

Патрик "Кайырлуу таң" деп 0:00 - 11:59 аралыгында, "Кайырлуу күн" 12:00 - 19:59 аралыгында, "Кайырлуу түн" 20:00 - 23:59 аралыгында айтышы керек.

1. Бизде учурдагы саатты сактаган `currentHour` аттуу өзгөрмө бар.
2. Программаны толтуруу үчүн туура `boolean expression A` жана `boolean expression B` толтуруңуз.
3. `currentHour` өзгөрмөсүнө 0 ден 23ке чейин сандарды берип, натыйжаңызды текшериңиз:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Кайра кайталоо: For-Loop, While-Loop

Математика сабагында, Патриктин 🐥 мугалими класска математикалык чакырык берет, ал жардамга муктаж болуп калышы мүмкүн.

Мугалим алардан **1, 2, 3, ...., 100** сумм