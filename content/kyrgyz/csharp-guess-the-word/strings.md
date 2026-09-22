---
title: "Жазуулар"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 5
---

## Жазуулар

Кош тырмакчага алынган нерселер жазуулар деп аталат. Компьютер сөздөрдү же сүйлөмдөрдү ушундайча көрсөтөт. Мисалы, `"a"`, `"2"`, `"banana!"`, жана `"Hello World"` жазуулар болуп саналат, бирок `Hello World` жана `2` жазуулар эмес, анткени кош тырмакчалар жок.

Сиз көптөгөн жазууларды `+` операторун колдонуу менен бириктире аласыз. Мисалы:

- `"Apple" + "Pineapple"` жазуусун `"ApplePineapple"` кылып түзөт.
- `"Nuevo" + " " + "Foundation"` жазуусун `"Nuevo Foundation"` кылып түзөт.

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "Жазууларды + менен бириктирүү")

{{% notice tip %}}

## Биргелешип Иштөө

Төмөндөгү Replit программасында кодду `Console.WriteLine("Nuevo" + " " + "Foundation");` сап аркылуу баштадык.

Жазууларды бириктирүүнүн көптөгөн жолдору бар экенин байкаңыз. Мисалы, Nuevo Foundation жазуусун чыгаруунун башка жолу: `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

Биз, ар бир `Console.WriteLine` буйругунда эки `+` символун колдонуу менен `"Nuevo Foundation"` жазуусун чыгаруунун дагы бир жолун ойлоп табабыз. Nuevo Foundation жазуусу жалпы 3 жолу консольго жазылгандыгын текшерип көрүңүз. Башкача айтканда, **иштетүү** баскычын чыкылдаткандан кийин сиздин консоль төмөнкүдөй болушу керек:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" title="Strings - .NET Fiddle редактору" frameborder="0"></iframe>

{{% /notice %}}