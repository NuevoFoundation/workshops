---
title: "Actividad 8: Aprende el comando LIKE"
description: "Aprende el comando LIKE"
date: 2020-07-09
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
<link rel="stylesheet" href="_activity8.css" type="text/css"></link>
<script type="text/javascript" src="_activity8.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dPk644r21e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


## Tarea 8: Encuentra el Tótem Legendario del planeta de la Diversión: La Mesa infinita de Buffet.

Otro artefecto que debes encontrar es la Mesa Infinita de Buffet del planeta de la Diversión.
Cuenta la leyenda que los festivales nunca se quedarán sin comida con esta mesa de buffet mística.

{{% notice info %}}
Este Tótem fue creado un mes después del artefacto previo: el Cañon de Confeti. (recuerda que el Cañon de Confeti fue creado en 1738-09-12).
{{% /notice%}}

**La Federación Galáctica te ha enviado un breve tutorial sobre un comando útil:`LIKE`**

![Explain](assets/like_explain.png)
![Ex](assets/like.png)

#### Usando la base de datos llamada 'items'(artículos) con una columna etiquetada como 'date_created' (fecha de creación), encuentra la Mesa de Buffet Infinito.
{{% notice tip %}}
Puedes usar el comando de la actividad 1 para mostrar toda la base de datos.

* Pista 1: El formato para la fecha es Año-Mes-Día.
* Pista 2: Este Tótem fue creado un mes DESPUÉS que el Cañón de Confeti.
* Pista 3: ¿Cuál es el patrón? ¿Necesitas buscar el mes al inicio, fin o en otro lugar del valor?
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

<div id="legend" style="visibility:hidden">
  <h4> ¡Encontraste la ubicación del Tótem Legendario del planeta de la Diversión: La Mesa de Buffet Infinito! Ahora viajaremos a la capital del planeta de la Diversión.
  </h4>
</div>

<br>

<!-- Unhide the buffet table location -->
<img id="gps" alt="gps" style="visibility:hidden; pointer-events: none;"/>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Completaste la tarea. Continúa con la siguiente misión.
  </div>
</div>

{{< /rawhtml >}}
