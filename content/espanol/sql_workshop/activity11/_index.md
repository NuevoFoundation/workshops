---
title: "Actividad 11: Aprende el comando GROUP BY"
description: "Aprende el comando GROUP BY"
date: 2020-07-06
prereq: "Comando SELECT, comando WHERE"
difficulty: "Principiante"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<link rel="stylesheet" href="_activity11.css" type="text/css"></link>
<script type="text/javascript" src="_activity11.js"></script>


## Fiesta con los habitantes! 

Se te ha dado la tarea de elegir qué comida servir en la fiesta. Cada ciudad tiene su comida favorita y tienes que decidir cuales tener en la fiesta. Usa el comando `GROUP BY` para averiguar qué traer.

### Lo que hace el comando `GROUP BY`:

![Explain](assets/group.png)

### Tarea 11: Usando la base de datos llamada 'planet'(planeta) con la columna 'favorite_food'(comida favorita), averigua qué traer a la fiesta.
{{% notice tip %}}
Pista: El comando es muy similar al ejemplo de arriba.

BONUS: Combina el los comandos `COUNT()` y `GROUP BY` para mostrar el numero de ciudades que les gusta cada comida. 
(Revisa las actividades 3 y 4 para obtener ayuda)

{{% /notice%}}

{{< rawhtml >}}
<div class="content_scaler">
  <div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="placeholder()">Escribe el comando aquí!</h3>
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
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR ENTRADA INVÁLIDA></strong></h1>
<table id="table">
  <tr></tr>
</table>
<h4 id="story"></h4>

<div class="content_scaler">
  <div class="vendor_div" id="vendor_div">
    <button class="button cake" id = "cake_button" onclick="highlight('cake_button')"></button>
    <button class="button ice_cream" id = "ic_button" onclick="highlight('ic_button')"></button> 
    <button class="button hot_dog" id = "hd_button" onclick="highlight('hd_button')"></button> 
    <button class="button vendor_reset" id = "vendor_reset" onclick="oven_reset()"> Reiniciar </button> 
    <div style="clear: both;"></div>  
    <button class="button burger" id = "burger_button" onclick="highlight('burger_button')"></button>
    <button class="button pizza" id = "pizza_button" onclick="highlight('pizza_button')"></button>
    <button class="button taco" id = "taco_button" onclick="highlight('taco_button')"></button>
    <button class="button vendor_button" id = "vendor_button" onclick="confirm()"> ¡Cocinar! </button>  
    <div style="clear: both;"></div> 
  </div> <!-- vendor_div -->
</div> <!-- content_scaler -->

<br>

<h4 id="plot" style="visibility:hidden"> ¡Lo lograste Cadete Espacial! Ahora los habitantes finalmente podrán comenzar la fiesta. </h4> 

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Completaste la tarea. Continúa con la siguiente misión.
  </div>
</div>
{{< /rawhtml >}}
