---
title: "Actividad 7: Usa el comando MIN"
description: "Usa el comando MIN"
date: 2020-07-10
prereq: "Comando SELECT, comando WHERE, comando MAX/MIN"
difficulty: "Principiante"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity7.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="_activity7.js"></script>

## Tarea 7: Encuentra la llave para conseguir el Cañón de Confeti.

Encontraste la ubicación del Legendario Cañon de Confeti pero está encerrado detrás de una puerta de titanio y solo puede ser abierta con la llave más pequeña del planeta.

**Para ayudarte, la Federación Gálactica te ha enviado un recordatorio de la actividad anterior sobre cómo usar el comando `MIN()`.**

![Explain](../activity5/assets/max_min.png)

#### Usando la base de datos llamada <i>'items'</i> (artículos) con columnas etiquetadas como <i>'object'</i> (objeto) y <i>'height'</i>(altura), encuentra la <i>'key'</i> (llave) con la menor altura. 
{{% notice tip %}}
Puedes mostrar la base de datos entera usando el comando de la actividad 1.

* Pista 1: Recuerda el consejo de la Federación Gálactica: `SELECT [columna/propiedad de columna] FROM [base de datos] [condicionales opcionales];`

* Pista 2: Condicionales `WHERE [column_name] [IN()/NOT IN()];` 

* Pista 3: ¿Necesitar usar `IN()` o `NOT IN()` para mostrar la 'key' (llave)?
{{% /notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}

  <div class="content_scaler">
    <div class="terminal_div" id="terminal_div">
      <div class = "outer">
        <h3 id = "commands" contenteditable="true" onclick="placeholder()">Escribe el comando aquí</h3>
      </div>
      <div class = "prev">
        <h3 id = "prev"></h3>
      </div>
      <div style="clear: both;"></div> 
      <button class="button button1" onclick="sql()"> Enter </button>
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="reset()">Reiniciar</button>
    </div> <!-- terminal_div -->
  </div> <!-- content_scaler -->
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR ENTRADA INVÁLIDA</strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

<h4 id="story"></h4>

<br>
{{< /rawhtml >}}

### Elige y arrastra la llave correcta en el candado para continuar con tu adventura.
{{% notice note %}}
La altura corresponde al numero de bucles en la base de la llave. La llave correcta estará destacada con color verde.
{{% /notice%}}

{{< rawhtml >}}

<div class="content_scaler">
  <!-- Player drags key block to drop block to finish mission -->
  <div class="door_div" id="door_div">

    <div id="buffer" class = "codeBlocks"></div>
    <div style="clear: both;"></div> 


    <!-- Position of first key -->
    <div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key1.png" draggable="true" ondragstart="drag(event)" id="drag1">
    </div> 

    <!-- Drag Block -->
    <div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key2.png" draggable="true" ondragstart="drag(event)" id="drag2">
    </div> 

    <div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key3.png" draggable="true" ondragstart="drag(event)" id="drag3">
    </div> 

    <!-- Drop Location -->
    <div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

  </div> <!-- door_div -->
</div> <!-- content_scaler -->

<!-- Next mission text displays -->
<div id="text1" style="visibility:hidden">
  <h3> ¡Encontraste el Tótem Legendario: el Cañón de Confeti!</h3>
</div>

<!-- Unhide the Confetti Cannon -->
<img id="cannon" alt="cannon" style="visibility:hidden"/>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Completaste la tarea. Continúa con la siguiente misión.
  </div>
</div>
{{< /rawhtml >}}
