---
title: "Иш-аракет 4 - Белгилей алуу практикасы"
description: "Жаңы каталог түзүү үчүн Linux буйругун колдонуу"
date: 2022-09-23
difficulties: ["орточо"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="Иш-аракет 4 - Белгилей алуу практикасы - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Киберкоопсуздук инженери катары көптөгөн жазууларды алуу маанилүү. Алар келечекте, чабуул кантип болгонун түшүнүү үчүн пайдалуу. Эми жумуш чөйрөбүздү жакшырталы!
    </div>
</div>

### Эгер жаңы каталогду түзгүм келсе эмне кылышым керек?

Жаңы каталог түзүүнү практикалоо үчүн `mkdir` (бул "каталог түзүү" дегенди билдирет) буйругун төмөнкү форматта колдонуңуз: `mkdir new_directory_name`.

Келгиле, `files` аттуу каталогду төмөнкү буйрукту терүү аркылуу түзөбүз:

```
mkdir files
```

<!---![ls-l буйругу](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="mkdir буйругу" style="width:600px;"/>

Көрүнүп тургандай, эми `ls -l` буйругун иштеткенде, `files` аттуу кошумча каталог пайда болот.

### Бул файлдар менен эмне кылууга болот?

Файлды же каталогду өңдөөнүн бир мисалы — аны башка жерге жылдыруу. Бул иш `mv` буйругу аркылуу аткарылат. Машыгуу катары, `Music` каталогун `Documents` каталогуна жылдырганды машыксак.

Төмөнкү буйрукта көрсөтүлгөндү териңиз:

```
mv Music/ Documents/
```

Эми `ls -l` деп кайрадан терип, натыйжаны караңыз.

![ls-l буйругу](../images/04_mv_music_dir.png?classes=border,shadow)

Сиз көрүшүңүз керек, `Music` каталогу мындан ары көрүнбөйт, анткени ал `Documents` каталогуна жылдырылган.

{{% notice tip %}}
Биз `Documents` ичиндеги өзгөрүүлөрдү кошумча жолду көрсөтүү аркылуу `ls` буйругу менен текшере алабыз.

```
ls -l Documents/
```

{{% /notice %}}

Кайрадан `mv` буйругу аркылуу аны артка жылдырууну машыкканга аракет кылалы.

Мына муну кылып көрүңүз:

```
mv Documents/Music/ .
```

Бул буйрук `Music` каталогун `Documents` ичинен кайра биздин учурдагы каталогго (белгиленгени - `.`) жылдырат. Нүктө кайсы каталогдосуз экенин билдирүү үчүн колдонулат. `ls -l` кайра терип, `Music` кайра бул каталогго кайтарылганын көрүңүз.

<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l буйругу"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Нувинин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Сиз сонун иштедиңиз, эми файлдарды жылдырууну үйрөндүңүз. Бул билимди жакын арада чабуулдан калыбына келтирүү үчүн колдонобуз.
    </div>
</div>

### Эгер жаңы файл түзгүм келсе эмне кылышым керек?

Файл түзүү үчүн биз `touch` буйругун колдонсок болот. `touch` буйругу ичинде эч кандай маалымат камтылган бош файлды жаратат.

Төмөнкү буйрукту терип, `file1` аттуу файлды түзүңүз:

```
touch file1
```

<!---![ls-l буйругу](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="touch буйругу" style="width:600px;"/>

Эми `ls -l` деп тергенибизде, файл түзүлгөнүн көрөбүз.

### Эгер файлга маалымат кошкум келсечи?

Ичинде маалымат жок файл көп пайдалуу боло албайт, ошондуктан ага маалымат кошолу, мисалы биз: "нуви" деп жазыңыз. 

Файлды редактирлөө үчүн `vim` буйругун колдонобуз. Vim текст редактору файлдын ичиндеги маалыматты кошууга, алып салууга жана өзгөртүүгө мүмкүнчүлүк берет.

Төмөнкү буйрукту пайдаланып, file1 файлын түзөтүү үчүн тергиле:

```
vim file1
```

<!---![ls-l буйругу](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="vim буйругу"/>

Биз азыр Vim редакторундабыз. `i` баскычын басып, "көчүрүү режимине" өткүлө. "nuvi" дегенди жазыңыз жана көчүрүү режиминен чыгуу үчүн `esc` баскычын басыңыз. Акырында `:wq` жазып, enter баскычын басыңыз. 

{{% notice warning %}}
`vim` редакторунан чыгуу үчүн, `esc