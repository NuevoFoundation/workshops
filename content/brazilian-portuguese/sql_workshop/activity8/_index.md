---
title: "Atividade 8: Aprenda o comando LIKE"
description: "Aprenda o comando LIKE"
date: 2020-07-09
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
<link rel="stylesheet" href="_activity8.css" type="text/css"></link>
<script type="text/javascript" src="_activity8.js"></script>

## Tarefa 8: Encontre o Lendário Totem da Diversão: Mesa de Buffet Infinita

Outro artefato que você deve encontrar é a mesa buffet infinita de diversão! As lendas dizem que os festivais nunca acontecerão
sem comida com esta mesa de buffet mística.

{{% notice info %}}
Este Totem foi criado um mês após o artefato anterior:
o Canhão de Confete (lembrete: o Canhão de Confete foi criado em 12/09/1738).
{{% /notice%}}

**A Federação Galáctica enviou a você um breve tutorial sobre um comando útil: `LIKE`**

![Explicar](assets/like_explain.png)
![Ex](assets/like.png)

#### Usando o banco de dados chamado 'items' com uma coluna chamada 'date_created', encontre a Tabela Buffet Infinita!
{{% notice tip %}}
Você pode usar o comando na atividade 1 para exibir todo o banco de dados.

* Dica 1: O formato da data é Ano-Mês-Dia.
* Dica 2: Este Totem foi criado um mês DEPOIS do Canhão de Confete (12 de setembro de 1738).
* Dica 3: Qual é o padrão? Precisa procurar o mês no início, no final ou em qualquer lugar do valor?
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

<div id="legend" style="visibility:hidden">
  <h4> Você encontrou a localização do Lendário Totem da Diversão: Mesa de Buffet Infinita! Agora viajaremos para Capital da Diversão!</h4>
</div>

<br>

<!-- Mostrar a localização da mesa do buffet -->
<img id="gps" alt="gps" style="visibility:hidden; pointer-events: none;"/>

<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>

{{< /rawhtml >}}
