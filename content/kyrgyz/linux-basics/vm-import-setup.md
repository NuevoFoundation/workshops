---
title: "Виртуалдык Машиналарды Колдонуу 2-бөлүк"
description: "Виртуалдык машиналарды колдонуу боюнча киришүүчү колдонмону улантабыз"
date: 2022-09-23
difficulties: ["орточо"]
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="Виртуалдык Машиналарды Колдонуу 2-бөлүк - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Хост чөйрөнү даярдоо боюнча сонун иш! Эми бузулган компьютердин образын VM катары жүктөйбүз.
    </div>
</div>

## Образ деген эмне?

`Образдар` түрдүү типтерде болот. Сүрөттөр да образдар. Компьютер образдары ушуга абдан окшош. Экөө тең бир мезгилдеги нерсенин көчүрмөсү. Биз "өзүн кызыктай алып жүргөн" компьютердин көчүрмөсү менен иштейбиз. Кабатыр болбоңуз, бул сиздин компьютериңизге зыян тийгизбейт! Эсиңизде болсун, операциялык система `кумкалапта` (sandbox) болот, демек, ал сиздин компьютериңизге таасир эте албайт.

## Kali Linux орнотуу

### Образды жүктөө

`ОС образдары` компьютерди так көчүрмө кылып берүү үчүн жөнөкөй.  
VirtualBox программасы машина образдары үчүн `.ova` файл кеңейтүүсүн колдонот. Бул документтерди `.docx` файл түрүндө жана сүрөттөрдү `.png` катары сактагандай.

Анда компьютердин көчүрмөсүн жүктөп алабыз! Төмөндөгү шилтемени басыңыз.  
Көпчүлүк ОС образдары чоң (~8GB), бирок биздин образ болжол менен ~3GB гана. Жүктөө үчүн бир аз убакыт кетиши мүмкүн.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Жүктөө шилтемеси
</a>

### Виртуалдык Машинаны импорттоо

Эми машина образын жүктөп алган соң, аны орнотууга убакыт келди!

#### 1-кадам

VirtualBox тиркемесинде биз образдарыбызды _импорттоо_ мүмкүнчүлүгүнө ээбиз. Баштоо үчүн "Import" баскычын басыңыз!

![virtual box импорттоо баскычы](../images/import-01.PNG?classes=border,shadow)

#### 2-кадам

Импорттоону каалаган жабдык жүктөгөн `.ova` файлы болот. Жашыл тырмак белги менен кичинекей папканы басыңыз. Бул терезени ачып, `.ova` файлыңызды табууга жана тандоого мүмкүнчүлүк берет.

![virtual box импорттоо экраны](../images/import-02.PNG?classes=border,shadow)

#### 3-кадам

Эми `.ova` файлды тандап алдыңыз. "Open" баскычын басыңыз. Андан соң "Appliance to Import" экранында "Next" баскычын басыңыз.

![virtual box импорттоо экраны](../images/import-03.PNG?classes=border,shadow)

#### 4-кадам

Акыркы кадам! "Name" талаасына каалагандай ат коюңуз. Бул сиздин жеке VM болуп калды! "USB Controller" опциясы **тагылган эмес** экенине ишениңиз. Аны белгиден алып салыңыз. MAC дарек саясаты үчүн, "Бардык тармак адаптерлер үчүн жаңы MAC даректерди түзүү" деп жазылганына ишениңиз. Акырында, "Import" баскычын басыңыз!

![virtual box импорттоо экраны](../images/import-05.PNG?classes=border,shadow)

**Эскертүү:** бул импорттоо бүткөн убакытты көрсөтүүчү калкыма терезе менен коштолот.  
Бул процесс орто эсеп менен 5 мүнөттөй созулат, бирок компьютериңизге жараша бир аз узарышы мүмкүн.

![virtual box импорттоо экраны](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Эми вирустук машинаны ишке киргизип, иликтөөлөрүбүздү баштасак болот!
    </div>
</div>