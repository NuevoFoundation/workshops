---
title: "Activity 2 - CSS"
date: 2020-11-27T17:53:41-07:00
draft: false
weight: 6
---
## Dale estilo con CSS

Las etiquetas le indican al navegador qué elementos tiene que utilizar. Pero también le tenemos que decir como mostrar esos elementos, y dónde ponerlos. Puede que queramos el título en el centro o en el lado derecho. Puede que queramos una foto a la derecha y el párrafo a la izquierda. Hay dos formas de hacer esto: usando atributos HTML u hojas de estilo en cascada ( en inglés `Cascading Style Sheets`).

## Cascading Style Sheets (CSS)

Los atributos HTML son sencillos, pero pueden convertirse en algo complicado muy rápidamente. Si queremos utilizar muchos estilos, cada elemento HTML se puede volver muy largo y complicado de leer. Además, ¿qué pasa si queremos usar el mismo estilo para varios elementos? Tendríamos que copiar todos los atributos de cada elemento, eso no es eficiente y puede dar pie a errores. Para la mayoría de los estilos, es mejor usar CSS.

Los archivos CSS trabajan juntamente con las etiquetas HTML. Cada etiqueta HTML puede tener un atributo del tipo `class` y/o un atributo `id` que ayude a identificar a cada elemento. Varios elementos pueden tener la misma clase y un único elemento puede tener múltiples clases. Sin embargo, un elemento puede tener solo un único id y ese id no puede ser compartido con otros elementos. El archivo CSS usa estos atributos para mostrar estilos específicos para cada `class` o `id`.

Mira este ejemplo de abajo:
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> See the Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Styling it up</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<b>Haz clic sobre la pestaña "HTML" en la esquina de arriba a la izquierda para ver el código HTML, y en la pestaña "CSS" para ver el código CSS.</b>
<br>
<br>
Echemos un vistazo al código HTML. Intenta encontrar una etiqueta <&lt;div&gt;> con el atributo "info". Se ve así < div id="info” >. Al darle este <&lt;div&gt;> e id, podemos usar CSS para especificar estilos para este elemento específico.

Cambia al archivo CSS. También le podemos dar estilo a todos los elementos de un tipo específico, por ejemplo, podemos usar CSS para darles el mismo estilo a todos los elementos `<p>`. En el bloque `header`, le estamos diciendo al navegador que coloree todas las cabeceras (headers) con el color #0097A7 (que es el color verde azulado).

Hablemos ahora de la sintaxis (o la forma de escribir) para CSS. Primero, tienes que empezar con el elemento al que le quieres dar estilo. Si quieres darle estilo a todos los elementos que tengan la misma etiqueta (como por ejemplo `<header>`), sólo tienes que escribir el nombre. Si quieres darle estilo a un elemento con una clase (class) o id, pon un . o un # delante del nombre de la clase o id respectivo. Luego, para cada propiedad que quieras cambiar, usa el formato `attribute-name: value;`. No olvides terminar cada línea con un `;`. Todos estos estilos tienen que estar entre llaves { y }.

Hay muchos elementos de estilo para verlos todos en este tutorial. Si, en el boceto que has hecho anteriormente, no estás seguro de cómo usar CSS para conseguir el estilo deseado, intenta hacer una búsqueda online.

![alt text](../media/web-search.gif "gif of web searching css")

{{% notice tip %}}

Si bien CSS entiende 140 nombres de colores tales como "green", "red" y "blue", esto puede ser todavía poco. ¿Qué pasa si queremos usar un verde oscuro o un verde un poco más claro? Para conseguir esto, podemos referirnos a los colores en su forma hexadecimal o RGB. Mira este [link](https://htmlcolorcodes.com/color-names/) para ver los colores y sus formas hexadecimales correspondientes.

{{% /notice %}}

## Agregar una nueva tipografía (o tipo de letra)

Hay varios tipos de tipografía o letra. Esta parte del taller te muestra como importar varios tipos de letras a tu sitio web. 

- Vamos a importar la tipografía Heebo de internet. Primero importamos la tipografía en la parte superior del archivo CSS con esta sentencia: 
`@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- Luego la asignamos a la etiqueta body. Como esta etiqueta va a contener todos los demás elementos HTML, nuestra selección de tipografía se va a usar en todos los elementos.

![alt text](../media/bodytag.PNG "body tag example")

- Fíjate que el formato dentro de las llaves es: `name: value;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono'); </span><br> `font-family: 'Roboto Mono', monospace;`
  - <span style="color:purple"> @import url('https://fonts.googleapis.com/css?family=Indie+Flower');</span><br> `font-family: 'Indie Flower', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Pacifico'); </span><br> `font-family: 'Pacifico', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');</span><br> `font-family: 'Permanent Marker', cursive;`

## Actividad 2 - Añadir atributos y estilo 

1. Abre el editor web (clic en el botón “Inténtalo tu mism@!” de abajo)
2. Agrega un atributo id a una de las etiquetas header. Por ejemplo, 
<font color="red">`<header id="page-title (o Título de tu pagina)">`</font>
3. Cambia a la pestaña CSS 
<font color="red">`#page-title
{
  styling here...
}`
</font>
4. Cambia el color del título agregándole color: yellow (o amarillo); dentro de las llaves {}
5. Cambia el color de la tipografía añadiendo font-family: 'Roboto Mono', monospace; dentro de las llaves y agregando <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');</span> en la parte de arriba de la pestaña CSS

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">Inténtalo tu mism@!</a>