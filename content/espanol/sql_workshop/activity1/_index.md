---
title: "Actividad 1: Aprende el comando SELECT"
description: "Aprende el comando SELECT"
date: 2020-07-17
prereq: "Ninguno"
difficulty: "Pricipiante"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity1.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity1.js"></script>
<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/hUTKI3AHJ1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

# Misión 1: ¡Salvar al Planeta de la Diversión del Aburrimiento! 
¡Tu primera misión es ir al Planeta de la Diversión y salvarlo del aburrimiento! Te han enviado una base de datos sobre el planeta y necesitas aprender como usar los comandos SQL para ayudar a salvar el Planeta de la Diversión. 

## Tarea 1: Echa un vistazo a la información sobre el Planeta de la Diversión
Te han dado información sobre la Galaxia y quieres buscar al Planeta de la Diversión. Para hacer esto, la Federación Galáctica te ha dado tu primer comando SQL:`SELECT`. 

{{% notice info %}}
### Lo que hace el comando:  
El comando `SELECT` te permite elegir cuáles datos mostrar de la base de datos. 
{{% /notice%}}

### Ejemplo:

![Select](assets/Select.PNG)

### ¡Ahora usa lo que aprendiste! 
{{% notice tip %}}
**¡Arrastra los bloques a la terminal y reacomodalos para responder la siguiente pregunta!**
{{% /notice%}}

#### Pregunta: ¿Cuál comando muestra todas las columnas en la base datos llamadas "galaxy"?

{{< rawhtml >}}
<div class="content_scaler">
<div class="terminal_div" id="terminal_div">

<!-- Rectangles to Receive blocks -->
<div id="div6" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div> 

<br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
 <img class="img" id="answer1" src="assets/Select_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag1" align: top left> <!-- style="border: 1px solid green;"> -->
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/Asterix_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer5" src="assets/Semicolon_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div> 

<!-- Enter button -->
<button class="button button1" onclick="check()">Enter</button>
</div> <!-- terminal_div -->
</div> <!-- content_scaler -->

<!-- Hidden SQL database will appear once correct sequence is placed -->
<div style="clear: both;"></div> 
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT</strong></h1>
<table id="table">
  <tr></tr>
</table>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <p> ¡Encontraste el comando correcto para mostrar la base de datos completa! Esto es es útil cuando quieres ver toda la información al alcance de tus dedos.</p>
  <div class="alert">
    <span id="check">&#10003;</span>
    Haz completado la tarea. Continua a la siguiente misión.
  </div>
</div>
{{< /rawhtml >}}
