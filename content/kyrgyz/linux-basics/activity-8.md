---
title: "Иш-аракет 8 - Эмнеси башкача?"
description: "Файлдарды салыштырып көрүү үчүн Linux буйруктарын колдонуңуз"
date: 2022-09-23
difficulties: ["орточо"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Иш-аракет 8 - Эмнеси башкача? - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувидин бир сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Келгиле, бул кызыктай `malware.sh` файлы купуя билдирүүгө эч нерсе кылбаганын текшерүү үчүн карап көрөлү!
    </div>
</div>

## Айырмачылыктар

`secret-message.txt` файлы кайда жайгашканын аныктоого жардам бере турган буйрук билебизби?

![find буйругу](../images/Act8.1.png?classes=border,shadow)

Ошол каталогго өтүп, мурдагы "Do. Or do not. There is no try." цитатасын текшерели. Бизге жардам бере турган кайсы буйрук эсиңиздеби?  

![grep буйругу](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувидин бир сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Бул файл адатта жакшы жана кызыктуу цитаталарга ээ, бирок анда көптөгөн өзгөрүүлөр болгон окшойт. Биз аны калыбына келтирилген версия менен салыштырып чыгышыбыз керекпи?
    </div>
</div>

Купуя билдирүүнүн каталогунда запас копиялары барбы же жокпу, текшерип көрөлү. Document каталогго өтүп, бул буйрукту аткарып көрүңүз:  

```
ls -la
```

{{% notice tip %}}
`-a` флагы жашыруун файлдарды кошуп бардык жазууларды көрсөтөт.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувидин бир сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Эч кандай жаңы файл таптыңызбы? Өзгөрүүлөр тууралуу белги алып коюңуз!
    </div>
</div>

## secret-message.txt файлды запас файл менен салыштыруу

`diff` бул файлдарга эмне кошулганын, өзгөртүлгөнүн жана өчүрүлгөнүн билүү үчүн колдонулган буйрук.  
Формат: `diff [файлдын аты] [Салыштыруучу файлдын аты]`

{{% notice info %}}
Кызыктуу факт: `diff --help` буйругу `diff` куралын кантип колдонуу керектиги жана андагы мүмкүнчүлүктөр жөнүндө маалымат берет.
{{% /notice %}}

Эки файлдын ортосундагы айырмалар эмне экенин карап көрүңүз. Канча айырмачылыкты таптыңыз? Бул тууралуу түзгөн файлыңызга жазып коюңуз!

{{% notice tip %}}

### Айырмачылыктарды жакшыраак көрүү үчүн

`vimdiff` бул буйрук, файлдарды өзүнчө барактарда ачып, алардын ортосундагы айырмачылыктарды белгилеп көрсөтөт.

Файлдардын ортосундагы айырмачылыктарды жакшыраак көрүү үчүн `vimdiff` буйругун колдонуп көрүңүз.
{{% /notice %}}