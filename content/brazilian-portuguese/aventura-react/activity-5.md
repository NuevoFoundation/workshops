---
title: "Atividade 5 - Resgatando os bichos-preguiça"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="Bicho-preguiça, ilustração baixada do site freepik" width="25%" />

Estamos quase terminando nossa viagem pela Costa Rica! Para encerrar, vamos aprender um pouco sobre os bichos-preguiça.  
Os bichos-preguiça na Costa Rica são um ícone do país, e existem duas espécies: o bicho-preguiça de dois dedos (Choleopus hoffmanni) e o bicho-preguiça de três dedos (Bradypus variegatus). Eles são conhecidos pela sua lentidão, sua habilidade de se camuflar e por serem símbolos nacionais que representam a conexão da Costa Rica com a natureza. Você pode encontrá-los em parques nacionais como Manuel Antonio e Corcovado, e em áreas como La Fortuna e Cahuita.  

**Escreva este arquivo `"Perezoso.jsx"`**:

{{% notice info %}}
### Importante usar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### Um componente dentro de outro componente

Nesta atividade, vamos usar dois componentes:

- Um componente pequeno: **Perezoso**
- Um componente grande: **Perezosos**

Isso significa que criamos um componente pequeno (como um molde de biscoito) e depois usamos várias vezes dentro do componente grande.
{{% /notice %}}

```jsx
// Componente pequeno
function Perezoso() {
  return <p>Sou um bicho-preguiça</p>;
}

// Componente grande
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props, informações que o componente recebe

Props são informações que enviamos do componente grande para o componente pequeno.  
O componente Perezoso irá receber:

- nome
- onRescatar
- resgatado
{{% /notice %}}

```jsx
function Perezoso({ nome, onRescatar, resgatado }) {
  return <p>{nome}</p>;
}
```

É assim que eles são enviados:

```jsx
<Perezoso
  nome="Marcos"
  onRescatar={rescatar}
  resgatado={false}
/>
```
---

#### Dentro do componente **Perezoso** insira este código

```jsx
<div className={`perezoso-card ${resgatado ? "resgatado" : ""}`}>
      <p>
        {resgatado
          ? `${nome} está salvo!`
          : `${nome} precisa de ajuda`}
      </p>

      {!resgatado && (
        <button onClick={() => onRescatar(nome)}>Resgatar</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. Contêiner principal com classes dinâmicas

```jsx
<div className={`perezoso-card ${resgatado ? "resgatado" : ""}`}>
```

- Ele sempre usa a classe perezoso-card do style.css.
- Se o bicho-preguiça já foi resgatado (```resgatado === true```), também adiciona a classe ```resgatado```.
- Isso é usado para alterar os estilos com base no estado do componente.

É como dar um adesivo especial quando o bicho foi salvo.
A classe **"resgatado"** é esse adesivo.

---

#### 2. Texto que muda conforme o estado do bicho-preguiça

```jsx
<p>
  {resgatado
      ? `${nome} está salvo!`
      : `${nome} precisa de ajuda`}
</p>

```

- Se resgatado for true, exibe uma mensagem dizendo que o bicho está salvo.
- Se for false, mostra que ainda precisa de ajuda.
- **O ```? :``` é um "se estiver resgatado → mostre isso, senão → mostre aquilo".**

É como um semáforo:

Se estiver verde → já está salvo!

Se estiver amarelo → ainda precisa de ajuda.

---

#### 3. Botão que aparece apenas se NÃO estiver resgatado

```jsx
{!resgatado && (
  <button onClick={() => onRescatar(nome)}>Resgatar</button>
)}

```

- !resgatado significa "NÃO resgatado".
- Se isso for verdadeiro, o botão é exibido.
- Se já estiver resgatado → o botão desaparece.
- O botão executa ```onRescatar(nome)``` quando você o pressiona.

É como um botão de "ajude-o!".
Se já estiver bem, o botão desaparece porque não é mais necessário.

{{% /notice %}}

---

{{% notice info %}}
### Crie uma função chamada Perezosos

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Uma constante chamada resgatados e setResgatados.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Outra constante chamada perezosos, e adicione nomes de bichos-preguiça a ela.</p>
{{% /notice %}}

---

**Constante para resgatar os preguiçosos!**
const rescatar = (nome) => {
    setResgatados([...resgatados, nome]);
  };
```

---

{{% notice info %}}
### Crie uma lista de componentes com um loop for

```jsx
let listaPerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listaPerezosos.push(
    <Perezoso
      key={i}
      nome={perezosos[i]}
      onRescatar={rescatar}
      resgatado={resgatados.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### Como é exibido

```jsx
return (
    <div className="perezosos-container">
      <h2>Resgate dos bichos-preguiça</h2>
      <p className="instruccion">
        Clique nos bichos-preguiça para resgatá-los da floresta
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {resgatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Você resgatou todos os bichos-preguiça!
        </h3>
      )}
    </div>
  );
```

**NÃO SE ESQUEÇA DE IMPORTÁ-LO NO APP.JSX**

``` jsx
import Perezosos from "./Components/Perezoso.jsx"
``` 

<img src="../media/Components5Perezoso.png" alt="Componente Perezosos renderizado no app