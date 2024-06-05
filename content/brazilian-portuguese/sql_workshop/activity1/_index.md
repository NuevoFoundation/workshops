---
title: "Atividade 1: Aprenda o Comando SELECT"
description: "Aprenda o comando SELECT"
date: 2020-07-17
prereq: "none"
difficulty: "Iniciante"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica suspensa -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity1.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity1.js"></script>

# Missão 1: Salvar o Planeta da Diversão do Tédio!
Sua primeira missão é ir ao Planeta da Diversão e salvá-los do tédio!
Você receberá um banco de dados sobre o planeta e precisa aprender a usar comandos SQL para ajudar a salvar o Planeta da Diversão!

## Tarefa 1: Dê uma olhada nas informações do Planeta da Diversão
Você receberá informações sobre a Galáxia e deseja procurar o Planeta da Diversão. Para fazer isso, a Federação Galáctica deu a você seu primeiro comando SQL: `SELECT`.

{{% notice info %}}
### O que o comando faz:
O comando `SELECT` permite escolher quais dados mostrar de um banco de dados.
{{% /notice%}}

### Exemplo:

![Select](assets/Select.PNG)

### Agora use o que você aprendeu!
{{% notice tip %}}
**Arraste os blocos para o terminal e reorganize-os para responder à pergunta abaixo!**
{{% /notice%}}

#### Pergunta: Qual comando exibirá todas as colunas do banco de dados chamado "galaxy"?

{{< rawhtml >}}
<div class="content_scaler">
<div class="terminal_div" id="terminal_div">

<!-- Retângulos para receber blocos -->
<div id="div6" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div> 

<br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
 <img class="img" id="answer1" src="assets/Select_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag1" align: top left> <!-- style="border: 1px solid green;"> -->
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/Asterix_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer5" src="assets/Semicolon_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div> 

<!-- Botão Entrar -->
<button class="button button1" onclick="check()">Enter</button>
</div> <!-- terminal_div -->
</div> <!-- content_scaler -->

<!-- O banco de dados SQL oculto aparecerá assim que a sequência correta for colocada -->
<div style="clear: both;"></div> 
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA</strong></h1>
<table id="table">
  <tr></tr>
</table>

<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <p>Você encontrou o comando correto para exibir todo o banco de dados! Isso é útil quando você deseja ver todas as informações na ponta dos dedos!</p>
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>
{{< /rawhtml >}}
