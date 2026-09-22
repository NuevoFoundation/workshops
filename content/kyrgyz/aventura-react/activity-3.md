```markdown
---
title: "Иш-чара 3 - Кофе ферма"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Сиз Коста-Рикада кофенин маанилүүлүгүн билесизби?

Коста-Риканын кофеси бүткүл дүйнөдө өзүнүн жогорку сапаты менен таанылган, бул вулкандык түшүмдүү топурак, идеалдуу климат жана арабика дандырларынын гана өстүрүлүшү менен байланыштуу. Өлкө Робуста сортун өстүрүүгө тыюу салат, бул өз кезегинде жумшак жана тең салмакталган продукцияны кепилдейт. Тарыхый жактан караганда, кофе өлкөнүн экономикасы жана маданияты үчүн абдан маанилүү болгон жана ал Тарразу сыяктуу белгилүү аймактарда өстүрүлөт.

Андыктан кофенин процессин үйрөнөлү жана эмнеге **Sharky** менен React тууралуу дагы көбүрөөк билип алсак болбосун!

**Бул `"FincaCafe.jsx"` файлын жазгыла**:

{{% notice info %}}
### Пайдалануу маанилүү:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Кофе" style="width:50%;">

Кофе даярдоо үчүн, алгач бул маанилүү процессти билүү керек, анткени ал бир нече этаптарды камтыйт, биз аларды төмөндө көрөбүз.

{{% notice info %}}
### Ар түрдүү нерселерди үйрөнөбүз
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Биз окуянын кайсы этабында экенибизди билүү үчүн номерди колдонобуз.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Биз көргөн нерсебизди ошол номерге жараша өзгөртөбүз.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Биз санабайбыз, биз кадамдарды карап жүрөбүз.</p>

{{% /notice %}}

```jsx
const etapas = [
  "Кофе эгүү",
  "Дан жыйноо",
  "Күндүн астында кургатуу",
  "Кууруу",
  "Лаззат алуу"
];

const [indice, setIndice] = useState(0);

```

**Бул жерде `"ETAPAS"` деп аталган туруктуу түзөбүз, ошондой эле `"INDICE"` деп аталган башка туруктуу бар**.

{{% notice info %}}
### Бул эмнени билдирет:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Номер 0 - 1-этабды билдирет.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Номер 1 - 2-этабды билдирет.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Номер 2 - 3-этабды билдирет.</p>

{{% /notice %}}

Эми ушундай кылып, этаптардын арасында өтүү үчүн `"siguiente"` аттуу туруктуу түзсөк болот.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>Чоң атанын фермасы</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Кийинки этап
        </button>
      ) : (
        // АКЫРКЫ ЭТАПКА ЖЕТТИН
        <h3 className="mensaje-final">
          Сен кофенин бардык процессин бүтүрдүң!
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Сизде 5 деңгээлдүү оюн бар деп элестетиңиз
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = Оюнда канча деңгээл бар (мисалы: 5 деңгээл).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = Азыр кайсы деңгээлдесиз (1, 2, 3 деңгээлдери болушу мүмкүн).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Номер 2 - 3-этабды билдирет.</p>

{{% /notice %}}

**APP.JSX'ке ИМПОРТТОГОНДУ УНУТПАҢЫЗ**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="FincaCafe компоненттери тиркемеге кошулду" style="width:50%;">
```