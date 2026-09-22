```markdown
---
title: "Ишмердүүлүк 10 - Көчүрүү жана алмаштыруу"
description: "Linux буйруктарын колдонуп файлдарды жылдырып жана көчүрүү"
date: 2022-09-23
difficulties: ["орточо"]
weight: 13
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="Ишмердүүлүк 10 - Көчүрүү жана алмаштыруу - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Мыкты! Эми хакерлердин зыяндуу файлы баш оорутпайт. Кайра мурдагы файлды калыбына келтирип, системабызды кайтадан иштетели.
    </div>
</div>

### Купуя билдирүүнү кантип оңдоо керек

`mv` буйругунан колдонуп, булак файлды дайын жердеги файлга алмаштыруу мүмкүн.  
Формат мындай: `mv [булак файл аты] [максат файл аты]`.

Мурда бузулган купуя билдирүүнү сактоо көчүрмөсү менен алмаштырыңыз.  
Файлды түзгөн жаңы каталогго жылдыралы.

![mv буйругу](../images/Act10.1.png?classes=border,shadow)

---

### Файлдарыңызды сактоо көчүрмөсүн алыңыз

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Чын эле, мурунку сактоо файл бузулууну оңдоого абдан пайдалуу болду. Эми каталогубуздагы файлдардан сактоо көчүрмөсүн алып коёлучу.
    </div>
</div>

`cp` - бул буйрук бир файлды бир жерден башка жерге көчүрүү үчүн колдонулат.  
Формат мындай: `cp [булак файл аты] [максат файл аты]`.

Жараткан файлыңыздан жана `secret-message.txt` файлыңыздан көчүрмө жасаңыз.

![cp буйругу](../images/Act10.2.png?classes=border,shadow)
```