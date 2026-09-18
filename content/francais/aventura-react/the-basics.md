```yaml
---
title: "Configurer l'environnement PlayCode"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Cliquez sur le lien ci-dessous pour construire vous-même l'application Costa Rica :</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Créez votre projet React !</a>

Lorsque vous cliquez sur le bouton, vous entrerez sur la page PlayCode :

<img src="../media/UsarPlaygroud.png" alt="Écran de démarrage PlayCode montrant l'option gratuite" style="width:50%;">



**Cliquez sur Commencer gratuitement**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

Dans le fichier `"App.jsx"`, **collez ce code !**

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

Dans le fichier `"index.jsx"`, **collez ce code !**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

Dans le fichier `"index.html"`, **collez ce code !**

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

**Créez un fichier appelé** `"style.css"`

<img src="../media/css.png" alt="Créer un nouveau fichier style.css dans PlayCode" style="width:50%;">

Avant de voir tous les éléments nécessaires pour créer notre projet Costa Rica, nous devons configurer, ou plus précisément, créer un dossier important.

**Cliquez sur les 3 points à côté du dossier principal appelé** `"src"`

<img src="../media/paso1-carpeta.png" alt="Cliquez sur les trois points à côté du dossier src" style="width:70%;">

{{% notice info %}}
#### Le fichier 'style.css' doit être à l'intérieur du dossier src
{{% /notice %}}

**Puis suivez ces étapes :**

`"Nouveau", "Dossier"`

<img src="../media/paso2-carpeta.png" alt="Sélectionnez Nouveau puis Dossier pour créer un dossier" style="width:70%;">

**Maintenant, nous avons créé le dossier, cliquez sur les 3 points et renommez-le :**

<img src="../media/paso3-carpeta.png" alt="Renommer le nouveau dossier en Components" style="width:70%;">

**Fait ! Nous avons créé le dossier Components, nous sommes presque prêts !**

<img src="../media/paso4-carpeta.png" alt="Dossier Components créé à l'intérieur de src" style="width:70%;">

**Enfin, nous devons ajouter des fichiers jsx pour pouvoir commencer à construire notre projet !**

Pour ce faire, cliquez à nouveau sur les 3 points mais cette fois-ci sur le dossier `"Components"`.

**Important : sélectionnez le type de fichier** `"JSX"`.

<img src="../media/paso5-carpeta.png" alt="Ajout d'un nouveau fichier JSX dans le dossier Components" style="width:70%;">

Voici à quoi devrait ressembler notre nouveau fichier, nommé : `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**L'île de Tortuguero est une île qui appartient au pays d'Amérique centrale qu'est le Costa Rica. Elle est située entre la mer des Caraïbes et le lagon du même nom, avec une superficie estimée à 2 810 hectares.**


<img src="../media/paso6-carpeta.png" alt="Fichier Tortugero.jsx créé dans Components" style="width:70%;">
```