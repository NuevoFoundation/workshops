```markdown
---
title: "Иш аракети 9 - Жаман файлды алып салуу"
description: "Жаман файлды жана каталогду алып салуу үчүн Linux буйруктарын колдонуңуз"
date: 2022-09-23
difficulties: ["Орто"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="Иш аракети 9 - Жаман файлды алып салуу - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Malware.sh шектүү файл болуп саналат, аны хакерлер калтырып кеткен болушу мүмкүн. Бул файлды жана аны камтыган каталогду алып салуу керек!
    </div>
</div>

## Жаман файлды алып салалы!

`rm` буйругу файлдарды алып салуу үчүн колдонулат.  
Форматы: `rm [filename]`.

{{% notice warning %}}
`rm` файлды туруктуу түрдө алып салат.
{{% /notice %}}

Көйгөйлөрдү жараткан файлды алып салыңыз. Файл толук алып салынганын кандайча текшере алабыз?

![rm буйругу](../images/Act9.1.png?classes=border,shadow)

----

## Эгер каталогду алып салуу керек болсо, эмне кылуу керек?

`rmdir` буйругу бош каталогду алып салуу үчүн колдонулат.  
Форматы: `rmdir [directoryName]`.

{{% notice warning %}}
`rmdir` каталогду туруктуу түрдө алып салат.
{{% /notice %}}

Жаман файл жайгашкан каталогду кандайча алып салса болот?

![rmdir буйругу](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
Файлдарды алып салуу кооптуу операция болушу мүмкүн, өзгөчө Linux системаларында. Жок кылынуучу файлды алып салууга ишенгениңиз абзел. Туура эмес файлды жок кылып, компьютерге зыян келтирип алышыңыз мүмкүн.
{{% /notice %}}

Алып салынган каталогду кайра кантип түзсө болот? Эсиңиздеби?

![mkdir буйругу](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Эми, secret-message.txt файлын калыбына келтирүү үчүн нужду буйрук билип алайлы...
    </div>
</div>
```