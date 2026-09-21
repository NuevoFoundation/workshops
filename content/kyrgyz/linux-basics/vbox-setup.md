---
title: "Виртуалдык Машиналарды Колдонуу 1-бөлүк"
description: "Виртуалдык машиналарды колдонуунун киришүү боюнча колдонмосу"
date: 2022-09-23
difficulties: ["орточо"]
weight: 1
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="Using Virtual Machines Part 1 - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Биз сизге бузулган компьютердин көчүрмөсүн виртуалдык машина түрүндө берип жатабыз, бизге жардам берүүңүз үчүн.
    </div>
</div>

{{% notice info %}}

### Виртуалдык машина деген эмне?

**Виртуалдык машина** (көбүнчө VM деп аталады) – бул компьютер сыяктуу иштеген компьютер файлдары (алар `образ` деп аталат).  
Башкача айтканда, бул компьютердин ичиндеги компьютер. Ал терезе түрүндө жөнөкөй программа сыяктуу иштейт.  
Бул сизге виртуалдык машинада кадимки компьютердегидей эле тажрыйба берет.

VM системанын калган бөлүгүнөн `изоляцияланган` (sandboxed), демек виртуалдык машинанын ичиндеги программа компьютердин өзүнө таасир эте албайт.  
Бул башка операциялык системаларды сыноо, вирустардан жабыркаган маалыматтарды изилдөө жана жаңы программаларды же колдонмолорду түзүү үчүн идеалдуу шарт түзөт.
{{% /notice %}}

## VirtualBox деген эмне?

VirtualBox бул виртуалдашуу программасы, башкача айтканда `гипервизор`. Ал сиздин компьютериңизге виртуалдык машиналарды иштетүүгө мүмкүндүк берет.

## VirtualBox'ту жүктөп алуу

Сиз VirtualBox'ту бул шилтеме аркылуу жүктөп алсаңыз болот:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Жүктөө шилтемеси
</a>

Эгер сиз Windows колдонуучу болсоңуз: "Windows hosts" дегенди тандаңыз  
Эгер сиз macOS колдонуучу болсоңуз: "OS X hosts" дегенди тандаңыз  
Эгер башка платформа колдонуп жатсаңыз, бул семинар үчүн Windows же macOS колдонууну сунуштайбыз. Башка платформалар бул семинарда талкууланбайт.

![VirtualBox жүктөө бет] (../images/vbox-dlpage-update.PNG?classes=border,shadow)

Эми жүктөлгөн орнотуу файлды иштетиңиз.

Бүгүнкү күн үчүн демейки параметрлер жетиштүү болот! Орнотуу учурунда "Next" баскычын басып ишти уланта бериңиз.

Эскертүү: Үчүнчү бетте кайсы бир параметрлерди тандаш керек.

![VirtualBox орнотуу параметрлери](../images/vbox-install-03.PNG?classes=border,shadow)

Эгерде мындай эскертүү көрсөңүз, коркпоңуз, бул күтүлгөн нерсе.

![VirtualBox тармак эскертүүсү](../images/vbox-install-04.PNG?classes=border,shadow)

Бул бетке келериңизде "Install" баскычын басыңыз.

![VirtualBox орнотуу](../images/vbox-install-05.PNG?classes=border,shadow)

Акырында, орнотуу бүткөндөн кийин VirtualBox'ту иштетүү үчүн белгилүү бир кутучаны тандаңыз.

![Орнотуудан кийин VirtualBox иштетүү](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ооба! Биз VirtualBox орнотуу процессин бүтүрдүк. Эми аны колдонууну баштоого даярбыз.
    </div>
</div>