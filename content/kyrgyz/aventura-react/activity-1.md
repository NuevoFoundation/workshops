---
title: "Ишмердүүлүк 1 - Ташбакаларды куткаруу"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Шарки ташбака кабыгы менен" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">Төмөнкү шилтемени басып, Коста Рика колдонмосун өзүңүз түзүңүз:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Өзүңүздүн React долбооруңузду түзүңүз!</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Сонун! Эми, Тортугеро аралындагы ташбакаларды куткаруу үчүн компонентти кадам сайын түзөбүз.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">React чоң LEGO бөлүктөрү менен толтурулган кутуча деп элестетиңиз. Ар бир бөлүк (компонент) бир ишти аткарат, мисалы:</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>Бир бөлүк баскыч болушу мүмкүн</li>
  <li>Башка бөлүк экран болушу мүмкүн</li>
  <li>Дагы башкасы тизмек болушу мүмкүн</li>
  <li>Дагы бири сүрөт болушу мүмкүн</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Алардын баарын бириктиргенде... толук тиркеме түзүлөт!</p>

Баштайлы!

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>import { useState } from "react";</code> деген эмне?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">React ичинде кээ бир аспаптар даяр эмес, аларды React кутучасынан сурап алуу керек. <code>useState</code> өзгөрүлүүчү нерселерди сактоого жардам берген атайын аспаптардын бири.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Мисалы: канча ташбака куткарылганын.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>export default function Tortugero()</code> деген эмне?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Бул жерде биз компонент түзүп жатабыз. <code>export default</code> "Бул негизги файл, башка жерлерде колдонсо болот" дегенди билдирет.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> компоненттин аты. Мисалы, кутучада мындай деп жазылган: <b>"Бул Тортугеро"</b>.</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;"><code>const [tortugas, setTortugas] = useState(0);</code> эмне?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Жашыруун кутучада сан сакталган деп элестетиңиз. Бул сан куткарылган ташбакалардын саны. </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → кутучада эмне бар (сан)</li>
  <li><b>setTortugas</b> → ошол санды өзгөртүүгө жардам берген сыйкырдуу ачкыч</li>
  <li><b>useState(0)</b> → алгач нөл ташбака куткарылган</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> React куткарылган ташбакалардын санын ушундай эстеп калат. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;"><code>const total = 10;</code> деген эмне?</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Бул сан оюндагы максатты билдирет: Тортугеро аралында 10 ташбака камалып калган! Бул жерде мындай деп жатабыз: <b>"10 ташбачаканы куткаруу керек"</b>.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Оюнду жеңилдетип же татаал кылуу үчүн бул санды өзгөртсөңүз болот. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;"><code>const salvarTortuga = () => { };</code> эмне кылат?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Бул функция <b>"Salvar tortuga"</b> баскычы басылганда ишке кирет. </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>Ал дагы куткарылуучу ташбакалар бар экенин текшерет → <code>tortugas &lt; total</code></li>
  <li>Эгер бар болсо, бир ташбаканы кошот → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style