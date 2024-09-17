---
title: "Activity 2: Learn the WHERE Command"
description: "Learn the WHERE command"
date: 2020-07-16
prereq: "SELECT command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity2.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity2.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/FZnnkNVn0Ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Tarea 2: ¡Viaja al Planeta de la Diversión!

Necesitas programar el GPS de tus naves espaciales para ir al Planeta de la Diversión reacomodando los bloques de código. Para encontrar las coordenadas, la Federación Galáctica te ha dado el siguiente comando SQL: `WHERE`

{{% notice info %}}
### Lo que hace el comando: 
El comando `WHERE` te permite solo mostrar los datos que tu quieres. 

{{% /notice%}}

![Explain](assets/Where_Explain.png)

### Ejemplo:

![Ex](assets/Where_Ex.png)

{{% notice info %}}
1. El bloque de la base de datos `SELECT * FROM` que aprendimos en la actividad anterior nos permite elegir una base de datos y mirar dentro de ésta. 

2. El comando `WHERE` nos permite reducir los datos que se muestran dependiendo de la condición (el bloque verde en la imagen debajo). Una condición es un requerimiento que estás buscando. Las condiciones no tienen que seguir el ejemplo de arriba, pero su uso más común es buscar los renglones que contengan información específica.

3. El nombre de la columna en la que deseamos buscar información. 
 
4. El signo de igual significa que queremos buscar la información que coincide con lo que tenemos en el lado derecho del signo de igual. 

5. Cuando estamos buscando palabras específicas o texto, debemos rodear el texto con comillas simples. SQL utiliza comillas simples para indicar que estamos buscando una palabra en la base de datos.

6. Puedes reemplazar 'texto' con cualquier palabra que estes buscando en la base de datos. 

7. Los signos de punto y coma se utlizan para indicar el final de un comando SQL, como un punto al final de una oración. 

{{% /notice%}}

#### Usando la base de datos llamada 'galaxy' que tiene la columna 'planet,' encuentra las coordenadas para el Planeta de la Diversión. 

<!-- rearrange code blocks on terminal to get coordinate block -->

{{< rawhtml >}}

<div class="content_scaler">
<div class="terminal_div" id="terminal_div">

<!-- Rectangles to Receive blocks -->
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div11" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div12" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div>

<br><br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" id="answer5" src="assets/Equal.PNG" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/Planet_Name_Block.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer6" src="assets/Planet_Fun_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div style="clear: both;"></div>

<div id="buffer" class="codeBlocks" style="border: none;"></div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer1" src="assets/Select_From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div id="div6" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/Where_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div>
<br><br>

<!-- Press Enter and if correct, unhide coordinate block -->
<button class="button button1" onclick="check()"> Enter </button>
</div> <!-- terminal_div -->
</div> <!-- content_scaler -->

<table id="planet" style="visibility:hidden">
  <tr>
  </tr>
  <script>displaytable("galaxy where planet = 'Planet of Fun'", "planet");</script>
</table>

<div id="text" style="visibility:hidden">
<h3> Ahora que sabes donde esta el Planeta de la Diversión, podemos encontrar mas información sobre este e ignorar a otros planetas.  that you know where the Planet of Fun is, we can find more information about it and ignore the other planets. ¡Vamos al Planeta de la Diversión! </h3>
</div>

<img src="" id="gps">

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    ¡Has completado la tarea!¡Continua a la siguiente misión!
  </div>
</div>
{{< /rawhtml >}}
