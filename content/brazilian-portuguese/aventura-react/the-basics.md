---
title: "Configurar o ambiente PlayCode"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Clique no link abaixo para construir o app da Costa Rica você mesmo:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Crie seu projeto React!</a>

Ao clicar no botão, você entrará na página do PlayCode:

<img src="../media/UsarPlaygroud.png" alt="Tela inicial do PlayCode mostrando a opção gratuita" style="width:50%;">



**Clique em Iniciar Gratuito**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Seu navegador não suporta a tag de vídeo.
</video>

No arquivo `"App.jsx"` **cole este código!**

```jsx
import React from 'react';

export function App(props) {
  return (
      <div className="App">
       <h2>Hola mundo</h2>
      </div>
      );
}

console.log('Configurando')
``` 

No arquivo `"index.jsx"` **cole este código!**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

No arquivo `"index.html"` **cole este código!**

```jsx 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="src/index.jsx"></script>
  </body>
</html>

```

**Crie um arquivo chamado** `"style.css"`

<img src="../media/css.png" alt="Criando um novo arquivo style.css no PlayCode" style="width:50%;">

Antes de ver todos os elementos necessários para criar nosso projeto da Costa Rica, precisamos configurar, ou mais especificamente, criar uma pasta importante.

**Clique nos 3 pontinhos ao lado da pasta principal chamada** `"src"`

<img src="../media/paso1-carpeta.png" alt="Clique nos três pontos ao lado da pasta src" style="width:70%;">

{{% notice info %}}
#### O arquivo 'style.css' deve estar dentro da pasta src
{{% /notice %}}

**Agora siga estes passos:**

`"Novo", "Diretório"`

<img src="../media/paso2-carpeta.png" alt="Selecione Novo e, em seguida, Diretório para criar uma pasta" style="width:70%;">

**Agora que criamos a pasta, clique nos 3 pontos e renomeie-a:**

<img src="../media/paso3-carpeta.png" alt="Renomeie a nova pasta para Components" style="width:70%;">

**Pronto! Criamos a pasta Components, estamos quase prontos!**

<img src="../media/paso4-carpeta.png" alt="Pasta Components criada dentro de src" style="width:70%;">

**Por fim, precisamos adicionar arquivos JSX para começar a construir nosso projeto!**

Para fazer isso, clique novamente nos 3 pontos, mas agora na pasta `"Components"`.

**Importante: selecione o tipo de arquivo** `"JSX"`.

<img src="../media/paso5-carpeta.png" alt="Adicionando um novo arquivo JSX dentro da pasta Components" style="width:70%;">

Este é o aspecto do nosso novo arquivo, nomeado: `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**A Ilha de Tortuguero é uma ilha pertencente ao país centro-americano da Costa Rica. Está situada entre o Mar do Caribe e a lagoa de mesmo nome, com uma área estimada de 2.810 hectares.**


<img src="../media/paso6-carpeta.png" alt="Arquivo Tortugero.jsx criado dentro de Components" style="width:70%;">