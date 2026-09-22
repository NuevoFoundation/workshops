---
title: "Activity 3 - Азыркы каталогду изилдеңиз"
description: "Linux буйруктарын колдонуп, учурдагы каталогдун мазмунун көрсөтүңүз"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="Activity 3 - Азыркы каталогду изилдеңиз - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Каталогду кантип изилдейбиз?

Азыркы каталогдогу файлдарды көрүү үчүн `ls` буйругун колдонобуз. Бул "Тизме" дегенди билдирет.

Аны байкап көрүңүз:

```
ls
```

![ls буйругу](../images/03_ls-command.png?classes=border,shadow)

### Бул каталогдогу файлдар жөнүндө көбүрөөк маалыматты кантип алам?

Муну байкап көрүңүз:

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l буйругу"/>

Жогорку буйруктагы `-l` белгиси `ls` буйругуна узак формадагы маалыматты тизмелөөнү айтат.

## Кандай маалымат көрсөтүлүп жатат?

Жогорудагы мисалдын биринчи сапын солдон оңго карай карап чыгалы, `Videos` каталогун карап көрөлү:

![ls -l буйругу түшүндүрүлгөн](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">жашыл</span>: файлдын уруксаттары. Биринчи белгиси `d` **Videos** каталог экенин билдирет. Эгерде ал `-` болсо, **Videos** файл болуп эсептелмек.
2. <span style="color:red">кызыл</span>: бул файл үчүн **шилтемелердин** саны. **Videos** каталогунда 2 _шилтеме_ бар.
3. <span style="color:purple">кызгылт көк</span>: бул файлга ээ болгон колдонуучу. Колдонуучу `nuvi` **Videos** каталогунун ээлеген адамы.
4. <span style="color:white;background-color:#232b36">ак</span>: файлга тиешелүү топ. Бул жерде, **Videos** каталогу `nuvi` тобуна кирет.
5. <span style="color:#ffc000">сары</span>: файлдын өлчөмү **байт** менен. **Videos** каталогу 4096 байт өлчөмүндө.
6. <span style="color:#ed7d31">кызгылт сары</span>: файл түзүлгөн күн жана убакыт.
7. <span style="color:#2e75b6">көк</span>: каталогдун аталышы.