---
title: "Иш-чара 2 - Пляждарды тазалоо"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Пляжды тазалоо" style="width:50%;">

Сонун! Сиз черепахаларды сактап калдыңыз. Эми пляждарды тазалоо үчүн константтарды массивдер, циклдар жана let өзгөрмөлөрү менен колдонгонду үйрөнөбүз.

**Бул `"Playa.jsx"` файлын жазыңыз**:

{{% notice info %}}
### Колдонуу маанилүү:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
Башында, биз каалаган санда элементтерди сактай турган массив түзөбүз. Бул мисалга караңыз!

Бул React'тагы массивдер кандай көрүнөт.

``` jsx
const [Dinero, setDinero] = useState([
    "Колондор",
    "Долларлар",
    "Евролор",
    "Песолор"
  ]);
```

Бул иш-чара үчүн **desechos жана setDesechos** деген констант түзүңүз. Бул константтын ичинде пляждардагы таштандыларды жайгаштырыңыз.

Биз массивдеги таштандыларды тазалоо үчүн функция түзүшүбүз керек.

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

Бул функция тизмеден бир таштандыны сиз аны басканда алып салат. Кантип иштээрин карап көрөлү:

{{% notice tip %}}
### Бул функция эмнени аткарат?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Сиз аны басканда, массивдеги ошол нерсени өчүрөт.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Filter бирден текшерип, жаңы массив түзөт, анан ошол таштандысыз тизмени сактайт.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Мисалы: эгер сиз пластикти өчүрсөңүз, айнек, металл, кагаз менен каласыз.</p>

{{% /notice %}}

Андан кийин `"let"` деп аталган өзгөрмөнү түзүшүбүз керек. Const'тан айырмаланып, letти өзгөртүүгө болот.

Биз бул өзгөрмөнү `"botones = [];"` деп атадык.

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Топтоо {desechos[i]}
      </button>
    );
  }

```

Бул бизди 4 кнопканы кол менен жазуудан сактайт.

{{% notice info %}}
### Бул цикл эмне кылат:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Биринчи таштандыдан баштайт.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Ошол таштанды үчүн кнопка түзөт.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Кийинкиге өтөт.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Бүткүчө кайталайт.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Кнопка onClick менен камсыз болуп, тазалоо үчүн колдонулат</p>

**Эгерде тизме өзгөрсө, React калган кнопкаларды гана кайра сүрөттөйт.**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>Пляждарды Тазалоо</h2>
      <p className="instruccion">
        Таштандыларды чогултуп, деңиз жандыктарын коргоо үчүн аларды басыңыз
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Пляж таза!</p>
      )}
    </div>
);
```

**APP.JSXке импорттоону унутпаңыз**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Playa компоненти тиркемеде чагылдырылган" style="width:50%;">