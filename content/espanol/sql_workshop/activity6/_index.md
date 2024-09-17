---
título: "Actividdad 6: Utiliza Comparadores"
descripción: "Utiliza Comparadores"
fecha: 2020-07-11
prerequesito: "Comando SELECT, comando WHERE"
dificultad: "Intermedio"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="_activity6.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/WeTYg1YnbHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


## Tarea 6: Encuentra el Tótem Lengedario de la Diversión, el Cañón de Confeti  

Necesitas explorar el planeta y encontrar el primer Tótem Legendario de la Diversión: el Cañón de Confeti de la Diversión. 
La leyenda cuenta que este cañón nunca deja de lanzar confeti ya que es un símbolo de paz y entretenimiento infinito. 

{{% notice info %}}
**Tu única pista es que el artefacto es creado el 1738-09-12.**
{{% /notice%}}
Para ayudarte, la Federación Galáctica te ha enviado un tutorial breve de cómo comparar los números en la base de datos. 

![Explain](assets/Comparator.png)
![Example](assets/Example.png)

{{% notice note %}}
* En el ejemplo 2, los símbolos `!=` pueden ser utilizados en vez de `<>` para darte el mismo output (salida de datos).
* Fíjate en el valor en `[value to compare]` en `SELECT * FROM [database] WHERE [column_name] [Comparator] [value to compare];` Toma en cuenta que los números no necesitan comillas simples alrededor, pero los datos/palabras si necesitan estar dentro de comillas simples. Sí Transportation/Transporte tuviera 2 columnas más llamadas "Nombre" que almacenaran el nombre del vehículo y "Fecha" que almacenara la fecha de fabricación del vehículo, las consultaríamos así:

    `SELECT * FROM Transportation WHERE Fuel > 20;`

    `SELECT * FROM Transportation WHERE Name = 'myrocket';`

    `SELECT * FROM Transportation WHERE Date > '2021-01-01';`
{{% /notice%}}

### Utilizando la base de datos llamada 'items' con la columna 'date_created', averigua cuál artefacto es el Tótem Legendario de la Diversión: el Canón de Confeti

{{% notice tip %}}
Puedes mostrar la base de datos utilizando el comando de la Actividad 1. 

Pista 1: El artefacto se creó en '1738-09-12' (use comillas simples alrededor de la fecha).
* Sugerencia 2: ¿Qué comparador necesita usar para encontrar una coincidencia exacta?
* Pista 3: El comando correcto sigue de cerca el ejemplo anterior.
* Sugerencia 4: No necesita comillas simples alrededor de los nombres de las columnas o bases de datos en este comando.
* Pista 5: ¿Qué símbolo necesita al final de un comando SQL?

* BONUS: ¡Muestra también todos los objetos creados a partir de '1738-09-12'!

* Pista 1: El artefacto se creó en '1738-09-12' (use comillas simples alrededor de la fecha).
* Pista 2: ¿Qué comparador necesitas usar para encontrar una coincidencia exacta de datos?
* Pista 3: El comando correcto es similar al ejemplo de arriba. 
* Pista 4: No necesitas comillas simples alrededor de los nombres de las columnas o bases de datos en este comando. 
* Pista 5: ¿Qué símbolo necesitas al final de un comando SQL?
* BONUS: ¡Muestra también todos los objetos creados a partir de '1738-09-12'!
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
      <button class="button button1" onclick="sql()">Enter</button>
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="reset()">Reset</button>
    </div>
  </div>
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

  <div id="text" style="visibility:hidden">
    <p> Has encontrado la ubicación del primer Tótem Legendario de la Diversión: ¡el Cañón de Confeti!</p>
  </div>

  <!-- Unhide the Confetti Cannon -->
  <img id="cannon" alt="cannon" style="visibility:hidden"/>
  
  <!-- Tells User to continue mission -->
  <div class="resume_plot" id="resume_plot" style="visibility:hidden">
    <div class="alert">
      <span id="check">&#10003;</span>
      ¡Haz completado la tarea!¡Continúa a la siguiente misión!
    </div>
  </div>
{{< /rawhtml >}}
