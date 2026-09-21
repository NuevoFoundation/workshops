---
title: "Иш-Чара 2 - Колдонуучунун Орун Жайын Аныктоо"
description: "Учурда кайсы каталогдо экениңизди аныктоо үчүн Linux буйругун колдонуңуз"
date: 2022-09-23
difficulties: ["аралык"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="Иш-Чара 2 - Колдонуучунун Орун Жайын Аныктоо - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi'нин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Хакерлерди токтото алуудан мурун, Linux файл системасы менен кыдырууну үйрөнүшүбүз зарыл.
    </div>
</div>

## Файловая система деген эмне?

Файловая система – бул компьютердин дискинде же диск түзүлүшүндө файлдардын жана маалыматтардын уюшкан жыйындысы. Файловая системанын эң жогорку деңгээли "root" же түп каталог деп аталат. Муну файловая системанын башталышы катары түшүнсө болот.

{{% notice tip %}}
Кызыктуу маалымат: файловая системалар көбүнчө "бак" деп сүрөттөлөт. Анткени файловая система астын караган бакка окшош: ар бир папка бутак же жалбырак сыяктуу. Маселен, сиздин файловая системасыңыз төмөндөгүдөй көрүнүшү мүмкүн.

<img src="../images/filesystem-tree.png" height="500" alt="Файловая системанын дарагынын сүрөтү"/>

{{% /notice %}}

Windows компьютеринде "Файл изилдөөчүсү" аркылуу "C:\" дискин көрө аласыз, төмөнкүчө:

![Windows файл изилдөөчүсүнүн сүрөтү](../images/filesystem-windows.png?classes=border,shadow)

Mac компьютерде болсо, "Finder" аркылуу үйдүн файловая системасын көрө аласыз, төмөнкүчө:

![Mac файл изилдөөчүсүнүн сүрөтү](../images/home-folder-mac.jpg?classes=border,shadow)

## Файловая системада кайсы жерде экениңизди кантип билсе болот?

Жаңырган "иштеп жаткан каталогубуздун" ордун табабыз. Бул сиз учурда файловая системада жайгашкан ордуңуз.

Linux'тагы `pwd` командасы сиздин ордуңузду көрсөтөт. Бул "Print Working Directory" дегенди түшүндүрөт. Муну сынап көрүңүз!

```
pwd
```

<!---!![pwd буйругу](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="pwd буйругу" style="width:700px;"/>

Жогорудагы чыгарылган натыйжа `/home/nuvi` жана анын мааниси төмөндө түшүндүрүлгөн:

- `/`: Бул символ файловая системанын түп каталогун (root) билдирет.
- `/home`: Бул үй каталогуна алып баруучу жол, ал түп каталогдун ичинде жайгашкан.
- `/home/nuvi`: Бул nuvi каталогуна алып баруучу жол, ал үй каталогуна караштуу. Натыйжа ушул жерде токтогондуктан, `/home/nuvi` биз жайгашкан учурдагы иштеп жаткан каталог болуп саналат.
- Файловая системада бир папкадан экинчисине карай бул процесс айрым учурларда көп этаптарга чейин созулушу мүмкүн.
- Жогоруда көрсөтүлгөн жана сүрөттөлгөн жол <b>абсолюттук жол</b> деп аталат, анткени бул учурдагы каталогдон баштап түп каталогго чейинки жолду көрсөтөт.

## Кантип файловая системада көчүп кыдырсак болот?

Башка каталогго өтүү үчүн `cd` буйругун колдонуңуз. Бул "Change Directory" дегенди түшүндүрөт. Бул буйруктун форматы `cd [каталогдун аталышы]` түрүндө болот.

<!---![cd буйругу](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="cd буйругу" style="width:700px;"/>

Жогорудагы натыйжада, кайра `pwd` жазганда иштеп жаткан каталогубуз эми Desktop болуп калганын көрө аласыз. `cd ..` буйругун сынап көрүңүз.

Төмөндө `cd` буйругунун дагы бир үлгүсүн байкап көрүңүз:

```
cd ..
```

<!-- ![cd буйругу](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="cd буйругу" style="width:700px;"/>

`cd` буйругунан кийин жазылган `..` файловая системанын дарагында бир деңгээл жогору чыгат. `pwd` натыйжасында биз кайра баштапкы ордубузга кайтканыбызды көрсөтүп турат. Биз nuvi каталогунда баштап, дарактын ылдый жагындагы `Desktop`ка `cd Desktop` менен өттүк, анан дарактын жогорку жагына `cd ..` аркылуу кайтып келдик.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi'нин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Сонун иш жасадыңыз, кийинки бөлүмдө каталогдорду кантип изилдөөнү үйрөн