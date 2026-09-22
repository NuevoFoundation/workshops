---
title: "Иш-аракет 8 - Душмандардын Атуусуна Мүмкүндүк Берүү"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Эми биз душмандар оюнчуну аткыдай кылабыз. Ар бир душман туш келди атып турат, жана оюндун кыйынчылыгы (кийинки деңгээлдерде көбөйөт) алардын канчалык тез-тез туш келди атышына жараша аныкталат.

Душмандын нуру оюнчунун нурларына абдан окшош. Биз дагы бир `enemyBeam.js` файлын түзөбүз, ал дээрлик `playerBeam.js` файлына окшош кодго ээ болот, бирок ар кандай өзгөрмө аттары жана сандары менен: 

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

Оюнчунун жана душмандын нурларына бирдей спрайт жана анимация менен бөлүшөбүз. Бирок ишке ашыруу учурунда, душмандын жабдыктарын башкача топко бөлөбүз:

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

Ошондой эле, оюн учун кыйынчылыкты түзүшүбүз керек (кийинчерээк `difficulty` жөнүндө көбүрөөк түшүндүрөбүз, бирок азырынча, `difficulty` душмандын атылышына көзөмөл кылат):

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Кыйынчылыкты 1000 деп коюуну сунуштайбыз.
* Эгер сиз кыйынчылыкты 1000 кылып койсоңуз, туш келди сандын 1ден 1000ге чейинкисин тандайсыз. Эгерде туш келди сан 1 болсо гана, душман атат.
* Эгер кыйынчылыкты 1 кылып көрсөңүз, душман үзгүлтүксүз атат.
{{% /notice %}}

Душмандар туш келди атышат деп, адегенде `enemyShoot()` деген метод түзөбүз:

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

жана аны `update()` методунда чакырабыз:

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

андан кийин белгилүү бир туш келди ылдамдыкта жаңы душман аппараты пайда болот.

Андан соң, душмандарга тиешелүү жабдууларды жаңыртуу керек. Ар бир нур өчүрүлгөнүнө ынанышыбыз керек.

`enemyBeam.js` файлын `playerBeam.js` файлын жаңырткандай эле жаңыртышыңыз керек:

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

Сцена 2де душмандын бардык аппараты да жаңыртылышы керек, бул башка жабдыктарды жаңыртканыбыздай окшош иштейт:

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

Акыры, оюн төмөнкүдөй көрүнөт:  
![enemyShoot](../media/9/enemy-shoot.gif)