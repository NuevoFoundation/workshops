---
title: "Atividade 11: Aprenda o comando GROUP BY"
description: "Aprenda o comando GROUP BY"
date: 2020-07-06
prereq: "Comando SELECT, Comando WHERE"
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
<link rel="stylesheet" href="_activity11.css" type="text/css"></link>
<script type="text/javascript" src="_activity11.js"></script>

## Festa com os Habitantes!

Você tem a tarefa de escolher qual comida servir na festa! Cada cidade tem sua comida preferida e você precisa decidir quais vai levar na festa! Vamos usar o comando `GROUP BY` para descobrir o que levar.

### O que o comando `GROUP BY` faz:

![Explicar](assets/group.png)

### Tarefa 11: Usando o banco de dados chamado 'planet' com a coluna 'favorite_food', descubra o que levar para a festa!
{{% notice tip %}}
Dica: O comando segue de perto o exemplo acima.

BÔNUS: Combine os comandos `COUNT()` e `GROUP BY` para mostrar o número de cidades que gostam de cada comida.
(Revise a atividade 3 e a atividade 4 para obter ajuda)

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
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA></strong></h1>
<table id="table">
  <tr></tr>
</table>
<h4 id="story"></h4>

<div class="content_scaler">
  <div class="vendor_div" id="vendor_div">
    <button class="button cake" id = "cake_button" onclick="highlight('cake_button')"></button>
    <button class="button ice_cream" id = "ic_button" onclick="highlight('ic_button')"></button> 
    <button class="button hot_dog" id = "hd_button" onclick="highlight('hd_button')"></button> 
    <button class="button vendor_reset" id = "vendor_reset" onclick="oven_reset()"> Clear </button> 
    <div style="clear: both;"></div>  
    <button class="button burger" id = "burger_button" onclick="highlight('burger_button')"></button>
    <button class="button pizza" id = "pizza_button" onclick="highlight('pizza_button')"></button>
    <button class="button taco" id = "taco_button" onclick="highlight('taco_button')"></button>
    <button class="button vendor_button" id = "vendor_button" onclick="confirm()"> Cook! </button>  
    <div style="clear: both;"></div> 
  </div> <!-- vendor_div -->
</div> <!-- content_scaler -->

<br>

<h4 id="plot" style="visibility:hidden"> Você conseguiu, Cadete Espacial! Agora os habitantes podem finalmente começar a festa!</h4> 

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>
{{< /rawhtml >}}
