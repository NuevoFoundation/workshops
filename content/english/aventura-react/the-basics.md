---
title: "Set up PlayCode environment"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Click the link below to build the Costa Rica app yourself</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Create your React project!</a>

When you click the button you will enter the PlayCode page

<img src="../media/UsarPlaygroud.png" alt="PlayCode start screen showing the free option" style="width:50%;">



**Click on Start Free**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the file `"App.jsx"` **paste this code!**

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

In the file `"index.jsx"` **paste this code!**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

In the file `"index.html"` **paste this code!**

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

**Create a file called**  `"style.css"`

<img src="../media/css.png" alt="Creating a new style.css file in PlayCode" style="width:50%;">



Before seeing all the elements needed to create our Costa Rica project, we need to set up, or more specifically, create an important folder.

**Click on the 3 dots next to the main folder called** `"src"`

<img src="../media/paso1-carpeta.png" alt="Click the three dots next to the src folder" style="width:70%;">

{{% notice info %}}
#### The 'style.css' file must be inside the src folder
{{% /notice %}}

**Then follow these steps:**

`"New", "Directory"`

<img src="../media/paso2-carpeta.png" alt="Select New then Directory to create a folder" style="width:70%;">

**Now we have the folder created, click on the 3 dots and rename**

<img src="../media/paso3-carpeta.png" alt="Rename the new folder to Components" style="width:70%;">

**Done! We have the Components folder created, we are almost ready!**

<img src="../media/paso4-carpeta.png" alt="Components folder created inside src" style="width:70%;">

**Finally, we need to add jsx files so we can start building our project**

To do this, click on the 3 dots again but now on the `"Components"` folder

**Important: select the** `"JSX"` **file type**

<img src="../media/paso5-carpeta.png" alt="Adding a new JSX file inside the Components folder" style="width:70%;">

This is how our new file should look, named: `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**Tortuguero Island is an island that belongs to the Central American country of Costa Rica. It is located between the Caribbean Sea and the lagoon of the same name, with an estimated area of 2,810 hectares.**


<img src="../media/paso6-carpeta.png" alt="Tortugero.jsx file created inside Components" style="width:70%;">





