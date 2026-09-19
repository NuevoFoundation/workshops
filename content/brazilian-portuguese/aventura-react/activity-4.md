---
title: "Atividade 4 - Vulcão Arenal"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Você sabia que existem cerca de 200 vulcões na Costa Rica? Desses, apenas cinco estão ativos: Poás, Irazú, Turrialba, Rincón de la Vieja e Arenal. Os demais são inativos ou extintos.

Bem, vamos contar para você sobre o Vulcão Arenal.

<img src="../media/Arenal.jpg" alt="Vulcão Arenal" style="width:50%;">
O Vulcão Arenal é um estratovulcão inativo e um ícone da Costa Rica, localizado na província de Alajuela, dentro do Parque Nacional Vulcão Arenal. Ele é conhecido por sua forma cônica e é cercado por florestas tropicais, fontes termais e uma rica biodiversidade, que inclui uma grande variedade de espécies de aves. Sua última grande atividade eruptiva começou em 1968 e cessou em 2010.

**Escreva este arquivo `"Volcan.jsx"`**:

{{% notice info %}}
### Importante usar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">Crie uma constante de animais com um correspondente SetAnimales, escreva aqueles que você acha que vivem na Costa Rica!</h2>

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

#### **Vamos salvá-los porque parece que o Vulcão Arenal está mostrando atividade!**

<img src="../media/Volcan.png" alt="Perigo do vulcão" style="width:50%;">
**Criamos uma constante para evacuá-los da área**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Nas Praias, apenas criamos botões, mas no Vulcão criamos uma lista completa:</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Um "li" pode conter texto + um botão + uma função.</p>
{{% /notice %}}

```jsx
/*Aqui fazemos uma lista manualmente usando um for*/
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} está em perigo{" "}
        <button onClick={() => evacuar(animales[i])}>Evacuar</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Imagine o seguinte
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Um helicóptero faz rondas para resgatar os animais:</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → Primeira ronda: visita o animal 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Segunda ronda: visita o animal 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Terceira ronda: visita o animal 3.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Quarta ronda: visita o animal 4.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → PARAR! Não há mais animais (porque animales.length = 4).</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">É como se o piloto anotasse na lista qual animal foi encontrado e qual botão pressionar para salvá-lo. </p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Nas Praias, usamos:</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Mas em Volcan.jsx vemos isso: </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**Como é exibido**:

```jsx
return (
    <div className="volcan">
      <h2>Vulcão Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Todos os animais estão a salvo!</p>
      )}
    </div>
  );
```

**NÃO ESQUEÇA DE IMPORTAR EM APP.JSX**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Componente do vulcão renderizado no aplicativo" style="width:50%;">