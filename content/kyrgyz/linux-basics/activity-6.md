```markdown
---
title: "Activity 6 - А ЖАМАН Файл"
description: "Линукс командаларын колдонуп издөө"
date: 2022-09-23
difficulties: ["ортодо"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Activity 6 - А ЖАМАН Файл - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuviдин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Менде secret-message.txt деген файл бар болчу, анын ичинде мен жактырган цитаталардын бири жазылган. "Кыл. Же кылба. Сынап көрүү жок." Мага бул файлды табууга жардам бере аласыңбы?
    </div>
</div>

### Файлдан үлгүнү издөө?

`grep` (**г**лобалдык издөө **р**егулярдуу **э**кспрессия үчүн жана **ч**ыгаруу) - файлдардын ичиндеги текстти издөө үчүн колдонулуучу буйрук. Бул буйрук ар кандай параметрлер аркылуу колдонулушун өзгөртүүгө мүмкүнчүлүк берет.

Форматы: `grep [параметр] “[үлгү]” [файлдын аты]`.

| Параметрлер | Колдонулушу                                                    |
| :---------- | :------------------------------------------------------------- |
| -c          | Үлгү табылган файлдардын санын алуу үчүн.                      |
| -i          | Издөөнү капаарсыз кылуу (CASE INSENSITIVE). “uNiX” менен “unix” бирдей болот. |
| -n          | Туура келген сапты жана анын номерин чыгарат.                  |
| -R          | Азыркы каталогдогу бардык файлдарды издеп чыгу.                 |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuviдин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Келиңиз, secret-message.txt файлын табуу үчүн бул буйрукты колдонууну үйрөнөлү!
    </div>
</div>

Төмөнкү буйрукту колдонуп көрөлү:

```
cd
grep -R "Кыл. Же кылба. Сынап көрүү жок."
```

![grep буйругу](../images/Act6.1.png?classes=border,shadow)

---

### Эмне үчүн secret-message файлы ушундай көрүнөт?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuviдин сүрөтү" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Биз көргөн кызыктай аталыштагы файлды эстедиңизби? Анын аты malware.sh эле. Аны кайра таап, жакшылап карап чыгышыбыз керек. Менимче бул файлды хакерлер калтырган!
    </div>
</div>

`find` - белгилүү бир параметрлери бар файлды каталогдун же файлдардын аймагынан издөө үчүн колдонулуучу буйрук. Анын ар кандай түрдө колдонулушу мүмкүн:

- Белгилүү бир аталыштагы файлды издөө  
  Форматы: `find [каталог] -name [файлдын аты]`
- Белгилүү бир файл кеңейтүүсү бар бардык файлдарды издөө (мисалы, текст файлдары, .txt менен бүтө турган)  
  Форматы: `find [каталог] -name *.txt`

Азыркы каталогдон файлды табуу үчүн `find` буйругун колдонуңуз. Азыркы каталог эмне экенин билиш үчүн колдонууга боло турган буйрук барбы?

![find буйругу](../images/Act6.2.png?classes=border,shadow)
```