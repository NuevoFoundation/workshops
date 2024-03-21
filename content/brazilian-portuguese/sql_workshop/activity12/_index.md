---
title: "Atividade 12: Encontre o Inventor!"
description: "Encontre o Inventor!"
date: 2020-07-05
prereq: "Comando SELECT"
difficulty: "Iniciante"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica suspensa -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<link rel="stylesheet" href="_activity12.css" type="text/css"></link>
<script type="text/javascript" src="_activity12.js"></script>

### Todos os convidados estão aqui! Precisamos encontrar o Inventor antes que seja tarde demais!

A alegria é contagiante na festa! O inventor misterioso finalmente fez sua entrada triunfal. Agora, o desafio é desvendar sua identidade! Sem pistas sobre sua aparência, dependemos das dicas astutas do Líder para revelar o inventor entre nós!

### Tarefa 12: Exiba todo o banco de dados chamado "pessoas" para que possamos ver todos os participantes.
{{% notice tip %}}
* Dica 1: O comando que você usa deve exibir todo o banco de dados de “pessoas”.
* Dica 2: O comando é semelhante ao da atividade 1 (Aprenda o comando `SELECT`).
{{% /notice%}}

{{< rawhtml >}}
<div class="content_scaler">
  <div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="placeholder()">Digite o comando aqui!</h3>
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
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA</strong></h1>
<table id="table">
	<tr></tr>
</table>
<h3 id="story"></h3>
{{< /rawhtml >}}

### Aqui estão algumas dicas para descobrir quem é o "Inventor":
{{% notice info %}}
* A comida favorita do Inventor é Pizza.

* A matéria favorita do Inventor é Matemática.

* O filme favorito do Inventor é “Big Hero 6”.
{{% /notice%}}

{{< rawhtml >}}
<div style="max-width:600px">
  <div class="content_scaler">
    <div class = "inventor_div" id="inventor_div">
      <div class = "box_half" id = "box_half">
        <div class = "text_box">
          <h3 id = "person" contenteditable="true" onclick="document.getElementById('person').innerHTML = ''">Digite a pessoa aqui!<h3>
        </div>
      </div>
      
      <div class= "half" id = "half">
        <button class="button second" onclick="check()"> Check! </button>
      </div>
    </div> <!-- inventor_div -->
  </div> <!-- content_scaler -->
</div>

<h4 id="answer"></h4>
<img id = "plot">

<!-- Mostrar enredo e certificado após encontrar o inventor -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa!
  </div>
  
  <h2> Você salvou o planeta da diversão! </h2>
  <p> O Planeta da Diversão agora está protegido dos invasores graças a você! Você encontrou os Totens Lendários da Diversão perdidos e os devolveu ao seu devido lugar
      e salvou os cidadãos do perigo! Os habitantes nunca esquecerão o seu ato de bondade! Parabéns cadete espacial! Você salvou com sucesso o Planeta da Diversão!
      <br><br>Clique no botão "Download" abaixo para receber seu certificado honorário!
  </p>
  
  <!--Botão de download -->
  <form method="get" action="assets/Certificate.pdf" target="_blank">
    <button type="submit" id="download">Download</button>
  </form> 

</div>

{{< /rawhtml >}}
