---
title: "Atividade 10: Aprenda o comando SUM"
description: "Aprenda o comando SUM"
date: 2020-07-07
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
<link rel="stylesheet" href="_activity10.css" type="text/css"></link>
<script type="text/javascript" src="_activity10.js"></script>

## Devolva os Lendários Totens de Diversão ao Líder

Você encontrou com sucesso os dois Totens Lendários da Diversão! O Líder agradece por encontrar o tesouro perdido.

### O Líder também revela um segredo:
{{% notice info %}}
Os Totens Lendários da Diversão não podem liberar todo o seu potencial até que sejam fundidos. Eles só podem ser mesclados pelo "Inventor".

Seu próximo passo é encontrar a pessoa que possa combinar os dois Totens Lendários da Diversão. O "Inventor" só aparecerá se você der uma grande festa!
{{% /notice%}}

## Tarefa 10: Ajude os habitantes a se prepararem para a festa!
Todo o planeta está convidado! Ajude os cidadãos a se prepararem para a festa descobrindo quantos convidados estarão presentes!

Vamos examinar o comando `SUM`!

![Explicar](assets/sum.png)

#### Usando o banco de dados 'planet' e o comando `SUM()`, encontre o número total de convidados que comparecerão a esta festa incrível!

{{% notice tip %}}
Use o comando da atividade 1 para exibir todo o banco de dados.

* Dica 1: O comando segue muito de perto o exemplo e o exemplo `AVG()` (tarefa anterior).
* Dica 2: A coluna 'população' contém informações sobre o número de indivíduos por cidade.
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
  
<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>

{{< /rawhtml >}}
