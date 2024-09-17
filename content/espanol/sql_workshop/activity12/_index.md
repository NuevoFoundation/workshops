---
title: "Actividad 12: Encuentra al Inventor!"
description: "Encuentra al Inventor!"
date: 2020-07-05
prereq: "Comando SELECT"
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
<link rel="stylesheet" href="_activity12.css" type="text/css"></link>
<script type="text/javascript" src="_activity12.js"></script>


### ¡Todos los invitaods están aquí. Necesitamos encontrar al Inventor antes de que sea muy tarde!

Todos se están divirtiendo en la fiesta. El Inventor también ha llegado, ahora tenemos que averiguar quién es el Inventor. Nadie sabe cómo luce, pero el líder te ha dado pistas sobre cómo encontrar al inventor.

### Tarea 12: Muestra toda la base de datos llamada "people" (personas)
{{% notice tip %}}
* Pista 1: El comando que uses debería de mostrar toda la base de datos "people".
* Pista 2: El comando es similar al de la actividad 1 (Aprende el comando `SELECT`).
{{% /notice%}}

{{< rawhtml >}}
<div class="content_scaler">
  <div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="placeholder()">!Escribe el comando aquí!</h3>
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
<h3 id="story"></h3>
{{< /rawhtml >}}

### Estas son algunas pistas para averiguar quién es el "Inventor":
{{% notice info %}}
* La comida favorita del Inventor es la pizza.

* La materia favorita del Inventor es matemáticas.

* La película favorita del Inventor es "Big Hero 6"
{{% /notice%}}

{{< rawhtml >}}
<div style="max-width:600px">
  <div class="content_scaler">
    <div class = "inventor_div" id="inventor_div">
      <div class = "box_half" id = "box_half">
        <div class = "text_box">
          <h3 id = "person" contenteditable="true" onclick="document.getElementById('person').innerHTML = ''">Ingresa la persona aquí<h3>
        </div>
      </div>
      
      <div class= "half" id = "half">
        <button class="button second" onclick="check()"> Validar! </button>
      </div>
    </div> <!-- inventor_div -->
  </div> <!-- content_scaler -->
</div>

<h4 id="answer"></h4>
<img id = "plot">

<!-- Unhide plot and certificate after finding inventor -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    ¡Completaste esta tarea!
  </div>
  
  <h2> !Salvaste el planeta de la Diversión! </h2>
  <p> El planeta de la diversión ahora está protegido de invasores gracias a tí. Encontraste los Totems Legendarios perdidos y los regresaste a su lugar de origen y salvaste a los ciudadanos del peligro. Los habitantes nunca van a olvidar tu acto de amabilidad. ¡Felicidades cadete espacial! Haz salvado exitosamente al planeta de la Diversión.
      <br><br>Click en el botón de "Descargar" debajo para recibir tu certificado honorario.
  </p>
  
  <!--Download Button -->
  <form method="get" action="assets/Certificate.pdf" target="_blank">
    <button type="submit" id="download">Descargar</button>
  </form> 

</div>

{{< /rawhtml >}}
