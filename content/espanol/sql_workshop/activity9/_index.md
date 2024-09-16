---
title: "Actividad 9: Aprende el comando AVG"
description: "Aprende el comando AVG"
date: 2020-07-08
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

<script type="text/javascript" src="_activity9.js"></script>
<link rel="stylesheet" href="_activity9.css" type="text/css"></link>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XLm2T6XBltg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


## Tarea 9: Desbloquea la Mesa de Buffet Infinito:

¡Haz descubirto la ubicación de la Mesa de Buffet Infinito! Sin embargo, está encerrada detrás de una puerta que sólo se abre si encuentras el número secreto.

{{% notice info %}}
Tu única pista es que la combinación es los primeros dos dígitos de la población promedio de la ciudad.
{{% /notice%}}

**Repasemos el comando `AVG()`**

![Explain](assets/AVG.png)

#### Usando la base de datos 'planet' y el comando `AVG()`, encuentra los primeros dos dígitos del promedio de la población ('population') de la ciudad.
{{% notice tip %}}
Usa el comando de la actividad 1 para ver la base de datos entera.

* Pista 1: El comando es muy similar al ejemplo de arriba.

* Pista 2: ¿Cómo usas 'population'(población) con el comando `AVG()`?

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

{{< /rawhtml >}}

### ¡Descubre la combinación para abrir la caja fuerte!
{{% notice info %}}
La pista para la combinación está arriba en esta página.
{{% /notice%}}

{{< rawhtml >}}

<div class="content_scaler">
  <div class="vault_div" id="vault_div">

    <div id="left_div">
    <button class="button first_up" id = "first_up" onclick="add(1)"> + </button>
    <button class="button sec_up" id = "sec_up" onclick="add(2)"> + </button> 
    
    <div style="clear: both;"></div> 
    
    <textarea class="lock" id="lock1" readonly>0</textarea>
    <textarea class="lock" id="lock2" readonly>0</textarea>
    
    <button class="button first_down" id = "first_down" onclick="subtract(-1)" style="clear:left;"> - </button>
    <button class="button sec_down" id = "sec_down" onclick="subtract(-2)"> - </button>
    </div>

    <div id="right_div">
    <button class="button vault_button" id = "vault_button" onclick="confirm()"> Check </button>
    </div>
    
    <div style="clear: both;"></div> 

  </div> <!-- vault_div -->
</div> <!-- content_scaler -->

<br>

<h5 id="plot" style="visibility:hidden"> ¡Lo lograste, Explorador Espacial! Encontraste el Tótem Legendario del planeta Fun: la Mesa de Buffet Infinito. </h5> 

<!-- Unhide the Infinite Buffet Table -->
<img id="buffet" alt="buffet" style="visibility:hidden"/>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Completaste la tarea. Continúa con la siguiente misión.
  </div>
</div>

{{< /rawhtml >}}
