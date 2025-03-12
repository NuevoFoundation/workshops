---
title: "Atividade 7: Use o Comando MIN"
description: "Use o Comando MIN"
date: 2020-07-10
prereq: "Comando SELECT, Comando  WHERE, Comando MAX/MIN"
difficulty: "Beginner"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica suspensa -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity7.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="_activity7.js"></script>

## Tarefa 7: Encontre a chave para chegar ao canhão de confete!

Você encontrou a localização do Canhão de Confete Lendário, mas ele está trancado atrás de uma porta feita de titânio
e só pode ser desbloqueado com a menor chave do planeta!

**Para ajudá-lo, a Federação Galáctica enviou-lhe um lembrete sobre como usar `MIN()` de uma atividade anterior.**

![Explicar](../activity5/assets/max_min.png)

#### Usando o banco de dados chamado <i>'items'</i> com colunas rotuladas <i>'object'</i> e <i>'height'</i>, encontre a <i>'key'</i > (chave) com a menor altura.
{{% notice tip %}}
Você pode exibir todo o banco de dados usando o comando da atividade 1.

* Dica 1: Lembre-se do conselho da Federação Galáctica: `SELECT [coluna/propriedade da coluna] FROM [banco de dados] [condição opcional];`

* Dica 2: Condição: `WHERE [column_name] [IN()/NOT IN()];`

* Dica 3: Você precisa usar `IN()` ou `NOT IN()` para mostrar a 'chave'?
{{% /notice%}}
<!-- Atividade de digitação SQL -->

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
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

<h4 id="story"></h4>

<br>
{{< /rawhtml >}}

### Escolha e arraste a chave correta para a fechadura para continuar sua aventura!
{{% notice note %}}
A altura (height) corresponde ao número de voltas na base da chave. A chave correta será destacada em verde.
{{% /notice%}}

{{< rawhtml >}}

<div class="content_scaler">
  <!-- O jogador arrasta o bloco-chave para soltá-lo e terminar a missão -->
  <div class="door_div" id="door_div">

    <div id="buffer" class = "codeBlocks"></div>
    <div style="clear: both;"></div> 


    <!-- Position of first key -->
    <div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key1.png" draggable="true" ondragstart="drag(event)" id="drag1">
    </div> 

    <!-- Drag Block -->
    <div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key2.png" draggable="true" ondragstart="drag(event)" id="drag2">
    </div> 

    <div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img class="img" src="assets/Key3.png" draggable="true" ondragstart="drag(event)" id="drag3">
    </div> 

    <!-- Drop Location -->
    <div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

  </div> <!-- door_div -->
</div> <!-- content_scaler -->

<!-- O texto da próxima missão é exibido -->
<div id="text1" style="visibility:hidden">
  <h3> Você encontrou o Lendário Totem da Diversão: Canhão de Confete! </h3>
</div>

<!-- Mostrar o canhão de confete -->
<img id="cannon" alt="cannon" style="visibility:hidden"/>

<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>
{{< /rawhtml >}}
