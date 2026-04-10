---
title: "Configurar entorno de playcode"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Entra en el link de abajo para construir tú mismo el app de Costa Rica</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Crea tu proyecto de React!</a>

Al darle click al boton entraras en la pagina de playcode

![alt text height="200px" width="50%"](../media/UsarPlaygroud.png "Playground")



**Le damos en Start Free**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>

En el archivo `"App.jsx"` **pegamos este codigo!**

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

En el archivo `"index.jsx"` **pegamos este codigo!**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

En el archivo `"index.html"` **pegamos este codigo!**

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

**Creamos un archivo llamado**  `"style.css"`

![alt text height="200px" width="50%"](../media/css.png "CSS")



Antes de ver todos los elementos necesarios para crear nuestro proyecto de Costa Rica tenemos que configurar o mas que todo crear una carpeta importante.

**Le vamos en los 3 puntos a la par de la carpeta main llamada** `"src"`

![alt text height="600px" width="70%"](../media/paso1-carpeta.png "Paso 1")

{{% notice info %}}
#### El archivo 'style.css' debe estar dentro de la carpeta src
{{% /notice %}}

**Luego seguimos los siguientes pasos:**

`"New", "Directory"`

![alt text height="600px" width="70%"](../media/paso2-carpeta.png "Paso 2")

**Ya tenemos la carpeta creada ahora le damos en los 3 puntitos y rename**

![alt text height="600px" width="70%"](../media/paso3-carpeta.png "Paso 3")

**Listo tenemos la carpeta de Components creada estamos casi listos!!**

![alt text height="600px" width="70%"](../media/paso4-carpeta.png "Paso 4")

**Por ultimo debemos agregar archivos jsx para poder ir construyendo nuestro proyecto**

Para eso igual le damos en los 3 puntitos pero ahora en la carpeta `"Components"`

**Importante seleccionar el archivo** `"JSX"`

![alt text height="600px" width="70%"](../media/paso5-carpeta.png "Paso 5")

Asi debe de quedar nuestro neuvo archivo llamado: `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**Isla Tortuguero​​ es una isla que pertenece al país centroamericano de Costa Rica​​ se ubica entre el mar Caribe y laguna homónima, posee una superficie estimada en 2.810 hectáreas.​**


![alt text height="600px" width="70%"](../media/paso6-carpeta.png "Paso 6")





