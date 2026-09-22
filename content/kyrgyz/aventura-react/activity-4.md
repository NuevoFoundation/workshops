---
title: "Иш-чара 4 - Аренал вулканы"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Коста-Рикада 200гө жакын вулкандар бар экенин билчү белеңиз? Алардын ичинен болгону бешөө активдүү: Поас, Иразу, Турриальба, Ринкон де ла Виеха жана Аренал. Калгандары активсиз же өчкөн вулкандар.

Ошондой эле, биз сизге Аренал вулканы тууралуу айтып беребиз.

<img src="../media/Arenal.jpg" alt="Аренал вулканы" style="width:50%;">
Аренал вулканы - активсиз стратовулкан жана Коста-Риканын белгиси. Ал Аларуэла провинциясында, Аренал Вулкан Улуттук Паркынын ичинде жайгашкан. Ал конус формасы, тропикалык токойлор, ысык булактар жана бай биологиялык ар түрдүүлүк менен белгилүү, анын ичинде канаттуулардын ар кандай түрлөрү бар. Анын акыркы чоң активдүүлүк цикли 1968-жылы башталып, 2010-жылы аяктаган.

**Бул `"Volcan.jsx"` файлды жазалы**:

{{% notice info %}}
### Колдонуу маанилүү:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">Коста-Рикада жашай турган жаныбарларды жазыңыз! Алар үчүн жаныбарлар константасын жана SetAnimales түзүңүз.</h2>

```jsx
const [animales, setAnimales] = useState([
    "",
    "",
    "",
    "",
    ""
  ]);
```

---

#### **Аларды сактап калалы, анткени Аренал вулканы активдүүлүк көрсөтө баштады окшойт!**

<img src="../media/Volcan.png" alt="Вулкан коркунучу" style="width:50%;">
**Биз аларды аймактан эвакуациялоо үчүн константа түзөбүз**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">"Beaches" бөлүмүндө биз жөн гана кнопкаларды түзгөнбүз, бирок "Volcán" бөлүмүндө биз толук тизмени түзөбүз:</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Бир "li" текстти + кнопканы + функцияны камтыйт.</p>
{{% /notice %}}

```jsx
/*Бул жерде биз колдон менен тизмени түзөбүз*/
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} кооптуулукта{" "}
        <button onClick={() => evacuar(animales[i])}>Эвакуациялоо</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Төмөнкүнү элестетип көрүңүз
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Вертолет жаныбарларды куткаруу үчүн айланып учуп жатканы:</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → Биринчи айлануу: 1-жаныбарга барат.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Экинчи айлануу: 2-жаныбарга барат.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Үчүнчү айлануу: 3-жаныбарга барат.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Төртүнчү айлануу: 4-жаныбарга барат.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → ТОКТО! Башка жаныбарлар жок (анткени animales.length = 4).</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Бул пилот жаныбарлардын кайсы жерде экенин жана кайсы кнопканы басып куткарууну жазып жаткан учур сыяктуу.</p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">"Beaches" бөлүмүндө биз төмөнкүдөй кылчубуз:</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Бирок Volcan.jsx'те биз мындай деп жазабыз: </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**Кантип көрсөтүлөт**:

```jsx
return (
    <div className="volcan">
      <h2>Аренал Вулканы</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Бардык жаныбарлар аман-эсен!</p>
      )}
    </div>
  );
```

**APP.JSXке импорттоону унутпаңыз**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Доделенный Volcan компонент" style="width:50%;">