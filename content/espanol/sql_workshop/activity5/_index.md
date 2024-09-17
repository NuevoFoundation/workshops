---
title: "Actividad 5: Aprende el comando MAX/MIN"
description: "Aprende el comando MAX/MIN"
date: 2020-07-12
prereq: "Comando SELECT, comando WHERE"
difficulty: "Intermedia"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity5.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity5.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/VPMZedGI-Ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Tarea 5: Encuentra la escalera más alta para llegar con su Líder

Haz descubierto que el líder del planeta está en una cabaña en la colina más alta pero para llegar ahi, necesitas encontrar la escalera más alta en la Capital de la Diversión

La Federación Galáctica te ha enviado cuatro comandos SQL nuevos. ¡Vamos a echarles un vistazo!


### Lo que hace el comando:

![Explain](assets/max_min.png)

<br/>

{{% notice info %}}
La propiedad de la columna:
`MAX()` es utilizada para buscar el valor más alto en una columna. `MIN()` es lo opuesto de `MAX()` y buscará el valor más chico en una columna. 
Puedes reemplazar cualquier palabra dentro de los paréntesis con el nombre de otra columna para obtener el valor més alto o chico de esa columna. 
{{% /notice%}}

![IN](assets/In.png)
![NOT](assets/not.png)

{{% notice info %}}
Fíjate en cómo los elementos especificados dentro `IN()` y `NOT IN()` están rodeados por comillas simples pero las que están dentro de `MAX()` y `MIN()` no lo están.

<br>

Condición:
* `IN()` y `NOT IN()` son usados mano a mano con el comando `WHERE` que aprendimos en la Actividad 2. `IN()` es parte de la condición de un comando SQL y es útil cuando sólo quieres mostrar algunas columnas y no todas. 

* `NOT IN()` es lo opuesto de `IN()`. En lugar de elegir qué mostrar como el comando `IN()`, `NOT IN()` mostrará todas las columnas que no elegiste dentro dentro de los paréntesis.

* Puedes usar comas dentro de los paréntesis para elegir más de una columa qué mostrar o no. 

* Usar solo un input (entrada de datos) dentro de `IN()` es equivalente a usar `=`. 

Ejemplo. `column_name IN('obejct_in_column');` es lo mismo que `column_name = 'obejct_in_column';`
{{% /notice%}}

### ¡Ahora utiliza lo que aprendiste! Usando la base de datos llamada 'items' con las columnas 'object' y 'height', encuentra la escalera ('ladder') más alta.
{{% notice tip %}}
Puedes mostrar la base de datos utilizando el comando de la Actividad 1.

* Pista 1: Recuerda el consejo de la Federacion Galactica:`SELECT [column/column property] FROM [database] [optional condition];`

* Pista 2: La propiedad de la columna: ¿Necesitas usar `MAX()` o `MIN()` para encontrar la escalera mas alta?

* Pista 3: Condición: `WHERE [column_name] [IN/NOT IN];`

* Pista 4: ¿Necesitas usar `IN()` o `NOT IN()` para mostrar la escalera ('ladder')?

* Pista 5: ¿Cuál símbolo necesitas al final de un comando SQL?
{{% /notice%}}
 
{{% notice info %}}
* BONUS: Intenta usar múltiples inputs (entradas de datos) dentro de `IN()` o `NOT IN()` cuando estés buscando la escalera. 
* Este comando es muy poderoso cuando estas buscando múltiples tipos de objetos.
{{% /notice%}}

{{% notice tip %}}
Recuerda: Puedes consultar la base datos múltiples veces usando todo lo que has aprendido hasta ahora para encontrar el color de la escalera más alta. 
{{% /notice%}}

<!-- SQL Type In Activity -->

{{< rawhtml >}}

  <div class="content_scaler">
    <div class="terminal_div" id="terminal_div">
      <div class = "outer">
        <h3 id = "commands" contenteditable="true" onclick="placeholder()">Type command here!</h3>
      </div>
      <div class = "prev">
        <h3 id = "prev"></h3>
      </div>
        <div style="clear: both;"></div> 
      <button class="button button1" onclick="sql()"> Enter </button>
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="reset()">Reset</button>
    </div> <!-- terminal_div -->
  </div> <!-- content_scaler -->
  <div style="clear: both;"></div>
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  
  <h4 id="story"></h4>

  <div id="legend" style="visibility:hidden">
     <br/>
    <p style="color:red;"> RED Ladder = 100 </p>
    <p style="color:#00e500;"> GREEN Ladder = 60 </p>
    <p style="color:#ffb972;"> YELLOW Ladder = 20 </p>
    </br>
  </div>

{{< /rawhtml >}}

### ¡Elige y arrastra la escalera correcta en la colina para continuar tu aventura!

{{% notice note %}}
La escalera correcta resaltará en verde. 
{{% /notice%}}

{{< rawhtml >}}


<div class="content_scaler">
<!-- Player drags ladder block to drop block to finish mission -->
<div class="hill_div" id="hill_div">

<!-- Drop Location -->
<div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<!-- Drag Block -->
<div id="div1" class ="codeBlocks" style="clear: left;" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_green.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_yellow.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

</div> <!-- hill_div -->
</div> <!-- content_scaler -->

<div style="clear: both;"></div> 

<!-- Next mission text displays -->
<div id="text1" style="visibility:hidden">
  <p> ¡Lo lograste! El Lider te comunica que el Planeta de la Diversión está en riesgo de ser invadido por aliens del Planeta del Aburrimiento. 
  ¡Debes encontrar los Tótems de la Diversión para salvar al planeta! </p>
</div>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    ¡Has completado la tarea!¡Continúa a la siguiente misión!
  </div>
</div>

{{< /rawhtml >}}
