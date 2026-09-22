---
title: "Atividade 2 - Limpando praias"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Limpeza da praia" style="width:50%;">

Ótimo! Você conseguiu salvar as tartarugas. Agora, para limpar as praias da Costa Rica, iremos aprender como usar constantes com arrays, loops `for` e variáveis `let`.

**Escreva este arquivo `"Playa.jsx"`:**

{{% notice info %}}
### Importante usar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
Primeiro, o que faremos é criar um array onde você pode armazenar qualquer número de elementos. Veja este exemplo!

É assim que os arrays normalmente são exibidos no React.

``` jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
]);
```

Crie uma constante chamada **desechos e setDesechos** para esta atividade. Dentro dessa constante, coloque itens que são lixo nas praias.

Precisamos criar uma função para limpar a praia dos resíduos no array.

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

Essa função remove um pedaço de lixo da lista quando você clicar nele. Vamos ver como funciona:

{{% notice tip %}}
### O que essa função faz?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Quando você clica, ela remove o que está no array.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">O filter verifica um por um, cria um novo array e então salva a lista sem aquele pedaço de lixo.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Exemplo: se você remover plástico, ficará apenas com vidro, metal e papel.</p>

{{% /notice %}}

Depois, precisamos criar uma variável chamada `"let"`. Diferente de const, let pode ser modificada.

Chamamos de `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolectar {desechos[i]}
      </button>
    );
  }

```

Isso nos poupa de escrever manualmente 4 botões.

{{% notice info %}}
### O loop faz isso:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Começa no primeiro pedaço de lixo.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Cria um botão para aquele pedaço de lixo.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Move para o próximo.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Repete até terminar.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">O botão possui o onClick que é usado para limpar.</p>

**Se a lista mudar, o React redesenha apenas os botões restantes.**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>Limpieza de las Playas</h2>
      <p className="instruccion">
        Haz clic en los desechos para recolectarlos y ayudar a proteger a las
        especies marinas
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Playa limpia!</p>
      )}
    </div>
);
```

**NÃO ESQUEÇA DE IMPORTAR EM APP.JSX**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Componente da Playa renderizado no aplicativo" style="width:50%;">