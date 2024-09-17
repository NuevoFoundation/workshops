---
título: "Actividad 4: Activity 4: Selecciona Información Multiple"
descripción: "Selecciona Información Multiple"
date: 2020-07-13
prerequesito: "Comando SELECT"
dificultad: "Principiante"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="_activity4.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/UySfZlYMd6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Tarea 4: Encuentra al Líder

Después de ir a la Capital de Diversión, los habitantes te indican hablar con su Líder. Averigua cuál habitante es el Líder. 

Para completar esta tarea, echemos un vistazo a cómo seleccionar múltiples columnas en la base de datos. 

![Commas](assets/Commas.png)

#### Ahora utiliza lo que aprendiste para averiguar quién es el líder del Planeta de la Diversión

{{% notice tip %}}
Puedes ver la base de datos completa utilizando el comando `SELECT * FROM [database_name];` que aprendiste en la Actividad 1.

**La Federación Galáctica también te ha enviado un recordatorio sobre la base de datos 'galaxy' tiene las siguientes columnas:**

* planet_number: El orden en el los planetas aparecen en la base de datos. 

* planet: El nombre del planeta. 

* leader: El nombre del lider del planeta. 

* population: La cantidad de habitantes que viven en el planeta.

* coordinate: La ubicación del planeta en la galaxia.

**Pista: Solo se necesitan dos columnas.**

{{% /notice%}}

### Pregunta: Ustilizando la base de datos 'galaxy', ¿cómo muestras solo los _nombres de_ los planetas y su líder?

{{% notice warning %}}
¡No olvides el punto y coma al final!
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
    <tr>
    </tr>
  </table>
  <h4 id="story"></h4>
  
  <!-- Tells User to continue mission -->
  <div class="resume_plot" id="resume_plot" style="visibility:hidden">
    <p>¡Encontraste el comando correcto para mostrar todos los planetas y sus líderes!</p>
    <div class="alert">
      <span id="check">&#10003;</span>
      ¡Has completado la tarea!¡Continúa a la siguiente misión!
    </div>
  </div>
  
{{< /rawhtml >}}
