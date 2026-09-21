---
title: "Ишмердүүлүк 7 - Билдирме файлда ката барбы?"
description: "Файлды ачпастан аны окуу үчүн Linux командаларын колдонуңуз"
date: 2022-09-23
difficulties: ["орточо"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="Activity 7 - What&#x27;s wrong with the file? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нуви сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Зыяндуу программа кооптуу болушу мүмкүн! Биринчи эле ачпаңыз! Анын ордуна буйрук сапты колдонуп, карап көрөлү.
    </div>
</div>

{{% notice warning %}}
Биз шек санаган файлдар үчүн аларды бир аз карап көрүшүбүз керек, вирус жүктөп алуудан алыс болуу үчүн.
{{% /notice %}}

### Файлдын биринчи саптарын кантип карап көрө алабыз?

Кээде файлдын башын гана карап көрүү керек болот. `head` командасы файлдын алгачкы саптарын көрсөтөт.  
Форматы: `head [файлдын аты]`

{{% notice tip %}}
Эгерде -n жаначисло параметрлерин кошуп берсеңиз, канча сапты көргүңүз келгенин көрсөтөсүз.  
Форматы: `head -n [саптар саны] [файлдын аты]`
{{% /notice %}}

`malware.sh` файлдын алгачкы 5 сабын карап көрсөңүз!

![head командасы](../images/Act7.1.png?classes=border,shadow)

### Файлдын акыркы саптарын кантип карай алабыз?

Кээде файлдын соңун гана карап көрүүгө туура келет. `tail` командасы файлдын акыркы саптарын көрсөтөт.  
Форматы: `tail [файлдын аты]`

{{% notice tip %}}
Эгерде -n параметрин колдонсоңуз, канча сапты көргүңүз келгенин көрсөтө аласыз.  
Форматы: `tail -n [саптар саны] [файлдын аты]`
{{% /notice %}}

`malware.sh` файлдын акыркы 5 сабын карап көрүңүз!

![tail командасы](../images/Act7.2.png?classes=border,shadow)

### Файлды толугу менен кантип карай алабыз?

Кээде файлдын башын жана акырын караганда анын эмне кылаарын жана эмне кылуу керек экендигин түшүнүш оңой болот. 
Келгиле, `malware.sh` файлынын толук мазмунун көрөлү!

`cat` командасы файлдын мазмунун көрсөтөт.  
Форматы: `cat [файлдын аты]`

{{% notice tip %}}
`less` жана `more` командасы `cat` сыяктуу команда.

#### More командасы

`more` чоң файлдар үчүн ылайыктуу команда. Бул мүмкүн болгон саптарды көрсөтөт жана файлдын кийинки бөлүмүн көрүү үчүн enter басышыңыз керек болот, ал файлдын аягына чейин уланат.  
Форматы: `more [файлдын аты]`

![more командасы](../images/Act7.3.png?classes=border,shadow)

#### Less командасы

`less` файлдын бөлүмдөрүн артка жана алдыга жылдыруу үчүн пайдалуу команда. Бул `more` сыяктуу иштейт, бирок сиз файлдын бөлүмдөрүн өтүү үчүн өйдө жана ылдый жебе баскычтарын колдонсоңуз болот. Чыгып кетүү үчүн 'q' басышыңыз керек.  
Форматы: `less [файлдын аты]`

![less командасы](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нуви сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Сиздин оюңузча, malware.sh эмне кылат? Аны отчетуңузга кошуңуз!
    </div>
</div>
