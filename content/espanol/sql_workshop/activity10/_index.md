---
title: "Actividad 10: Aprende el comando SUM"
description: "Aprende el comando SUM"
date: 2020-07-07
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
<link rel="stylesheet" href="_activity10.css" type="text/css"></link>
<script type="text/javascript" src="_activity10.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/UCxPAE0xw3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Regresa los Tótems Legendarios del planeta de la Diversión al Lider

Haz encontrado exitosamente los dos Tótems Legendarios del planeta de la Diversión. El Líder te agradece por encontrar su tesoro perdido.

### El Líder revela un secreto:
{{% notice info %}}
Los Tótems Legendarios del planeta de la Diversión no pueden liberar todo su potencial hasta que sean unidos juntos. Unicamente pueden ser unidos por el "Inventor".

Tu siguiente paso es encontrar a la persona que pueda combinar ambos Tótems Legendarios del planeta de la Diversión. El "Inventor" solo va a aparecer si organizas una gran fiesta.

{{% /notice%}}

## Tarea 10: Ayuda a los habitantes a organizar la fiesta.
¡El planeta entero está invitado! Ayuda a los ciudadanos a prepararse para la fiesta averiguando cuántos invitados irán a la fiesta.

Aprendamos el comando `SUM`

![Explain](assets/sum.png)

#### Usando la base de datos  'planet'(planeta) y el comando `SUM()`, encuentra el numero total de invitados que van a asistir a esta increíble fiesta.

{{% notice tip %}}
Usa el comando de la actividad 1 para mostrar toda la base de datos.

* Pista 1: El comando es muy similar al ejemplo de arriba y el ejemplo del ejercicio de `AVG()` (tarea anterior).
* Pista 2: La columna 'population'(población) contiene información sobre el número de individuos por ciudad.
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
  
<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:show">
  <div class="alert">
    <span id="check">&#10003;</span>
    Completaste la tarea. Continúa con la siguiente misión.
  </div>
</div>

{{< /rawhtml >}}
