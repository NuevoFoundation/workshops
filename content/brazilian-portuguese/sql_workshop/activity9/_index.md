---
title: "Atividade 9: Aprenda o Comando AVG"
description: "Aprenda o Comando AVG"
date: 2020-07-08
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

<script type="text/javascript" src="_activity9.js"></script>
<link rel="stylesheet" href="_activity9.css" type="text/css"></link>

## Tarefa 9: Desbloqueie a Mesa de Buffet Infinito:

Você descobriu a localização da Lendária Mesa de Buffet Infinita! No entanto, está trancado atrás de uma porta que
só será desbloqueado se você encontrar o número secreto.

{{% notice info %}}
Sua única pista é que a combinação representa os dois primeiros dígitos da população média da cidade.
{{% /notice%}}

**Vejamos o comando `AVG()`!**

![Explicar](assets/AVG.png)

#### Usando o banco de dados 'planet' e o comando `AVG()`, encontre os dois primeiros dígitos da 'population' (população) média da cidade!
{{% notice tip %}}
Use o comando da atividade 1 para visualizar todo o banco de dados.

* Dica 1: O comando segue muito de perto o exemplo.

* Dica 2: Como você usa 'população' com o comando `AVG()`?
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

{{< /rawhtml >}}

### Descubra a combinação para desbloquear o cofre!
{{% notice info %}}
A pista para a combinação está no topo desta página!
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

<h5 id="plot" style="visibility:hidden"> Você conseguiu, Explorador Espacial! Você encontrou o Lendário Totem da Diversão: Mesa de Buffet Infinita! </h5> 

<!-- Mostrar a mesa do buffet infinito -->
<img id="buffet" alt="buffet" style="visibility:hidden"/>

<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>

{{< /rawhtml >}}
