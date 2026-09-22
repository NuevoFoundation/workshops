---
title: "Иш-аракет 1: Кибер чөйрөнү кирүү жана орнотуу"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="Иш-аракет 1: Кибер чөйрөнү кирүү жана орнотуу - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Баштоо

Макул, Кибер коргоочулар! Биринчи иш, хакерлерди аңдоочу чөйрөнү орнотуу болуп эсептелет. Бул үчүн төмөндөгү шилтемелерди ачыңыз жана алгач Azure Data Explorer (ADX) орнотууну, андан кийин Scoreboard сессиясына кирүүнү сыпаттап берген көрсөтмөлөрдү аткарсаңыз болот.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Ресурстар” width="60%" height="value">

### Azure Data Explorer (ADX) орнотуу

ADX айрым кибер коргоочулар тарабынан маалыматтарды изилдөө жана анализдөө үчүн колдонулган негизги курал болуп саналат. ADXти эң сонун кылган нерсе — аны дүйнөдөгү эң кичинекей жана эң чоң уюмдардын кибер аналитиктери колдонушат.

Сизди ADXке киргизип жана баштатып көрөлү:

1.	[Azure Data Explorer](https://dataexplorer.azure.com/) баракчасына өтүп, Microsoft аккаунтуңуз менен кириңиз.  
    - Эгерде мурда Microsoft аккаунтуңуз жок болсо, азыр катталыңыз (буларды каттоо акысыз).  
2.	Экрандын сол тарабындагы "Query" деген баракчаны басыңыз.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

ADXтеги маалыматтар **кластерлер, маалымат базалары жана таблицалар** түрүндө иерархиялык түзүмгө уюштурулган. Envolve Labs камсыз кылган коопсуздук журналдары бир кластерде сакталган. Сиз ADX интерфейсине бул кластерди кошушуңуз керек, журнал маалыматтарын карап башташыңыз үчүн.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3.	Мугаллимиңиз берген кластердин URIсы аркылуу жаңы кластер кошуңуз.  
    -  "Add cluster" басыңыз.  
    -  Connection URIти киргизиңиз: mstictraining.eastus  

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4.	Маалымат базаңызды тандаңыз.   
    - Кластердин жанындагы ачылуучу жебени басыңыз. Андан кийин анын ичинде **SecurityLogs** деген жалгыз маалымат базасын көрүшүңүз керек.   
    - **SecurityLogs** маалымат базасынын жанындагы жебени кеңейтиңиз.   
    - **SecurityLogs** маалымат базасын басыңыз. База белгиленгенден кийин, аны тандоонун айынан таблицалардан суроо-талаптарды чыгарууга даяр болосуз.   

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

Кластерлер тизмесинин оң тарабындагы чоң боштук — суроо-талап жазуучу workspace. Бул жерде журнал маалыматтары менен иштөөгө суроо-талаптар жазуу үчүн KQL кодун колдонобуз.  

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Scoreboard орнотуу

1.  [Scoreboard интернет баракчасына](https://aka.ms/kc7scoreboard) барган соң, колдонуучу аккаунту түзүңүз. Колдонууну оңой эстей турган колдонуучу аты жана сыр сөз киргизиңиз, андан кийин дароо кирүү суралат.
2.  Жашыл баскычты басыңыз **"Join a new game"**
3.  Сессиянын сыр сөзүн киргизиңиз: **GAMEON**

Сиз Scoreboardты көрүшүңүз керек. Challenges барагына барганда, сүрөттөгү тизмени көрөсүз. Бизге бул тренингдин кийинки бөлүгүндө керек болот, ошондуктан Scoreboardты азыраак чонойтууга болот, бирок даяр сактоо зарыл.  
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Бүттү! Орнотулгандан кийин маалыматтар менен иштөөгө даярсыз. {{< /alert >}}

[def]: Images/ADX1.png