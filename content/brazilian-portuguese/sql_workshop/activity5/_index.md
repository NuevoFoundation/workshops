---
title: "Atividade 5: Aprenda o Comando MAX/MIN"
description: "Aprenda o Comando MAX/MIN"
date: 2020-07-12
prereq: "Comando SELECT, Comando WHERE"
difficulty: "Intermediário"
draft: false
---
<!-- Links para javascript e CSS necessários para a lógica do menu suspenso -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity5.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity5.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

## Tarefa 5: Encontre a Escada Mais Alta Para Chegar ao Líder Deles

Você descobriu que o líder do planeta está em uma cabana no morro mais alto, mas para chegar lá, você precisa encontrar a escada mais alta na Capital da Diversão!

A Federação Galáctica enviou quatro novos comandos SQL para você brincar! Vamos dar uma olhada neles!

### O que os comandos fazem:

![Explicação](assets/max_min.png)

<br/>

{{% notice info %}}
Propriedade da Coluna:
`MAX()` é usado para procurar o maior valor em uma coluna. `MIN()` é o oposto de `MAX()` e procurará o menor valor em uma coluna.
Você pode substituir qualquer palavra dentro dos parênteses por outro nome de coluna para obter o maior ou menor valor dessa coluna.
{{% /notice%}}

![IN](assets/Em.png)
![NOT](assets/not.png)

{{% notice info %}}
Observe como os itens especificados dentro de `IN()` e `NOT IN()` estão cercados por aspas simples, mas os dentro de `MAX()` e `MIN()` não estão.

<br>

Condição:
* `IN()` e `NOT IN()` são usados em conjunto com o comando `WHERE` que aprendemos na atividade 2. `IN()` faz parte da condição de um comando SQL e é útil quando você deseja mostrar algumas colunas, mas não todas.

* `NOT IN()` é o oposto de `IN()`. Em vez de escolher o que mostrar como `IN()`, `NOT IN()` mostrará todas as colunas que você não escolheu dentro dos parênteses.

* Você pode usar vírgulas dentro dos parênteses para escolher mais de uma coluna para mostrar ou não mostrar.

* Usar apenas 1 entrada dentro de `IN()` é equivalente a usar `=`:

Ex. `nome_coluna IN('objeto_na_coluna');` é o mesmo que `nome_coluna = 'objeto_na_coluna';`
{{% /notice%}}

### Agora use o que aprendeu! Usando o banco de dados chamado 'itens' com colunas rotuladas como 'objeto' e 'altura', encontre a 'escada' mais alta.

{{% notice tip %}}
Você pode exibir o banco de dados usando o comando da atividade 1.

* Dica 1: Lembre-se do conselho da Federação Galáctica: `SELECT [coluna/propriedade da coluna] FROM [banco de dados] [condição opcional];`

* Dica 2: Propriedade da Coluna: Você precisa usar `MAX()` ou `MIN()` para encontrar a escada mais alta?

* Dica 3: Condição: `WHERE [nome_da_coluna] [IN/NOT IN];`

* Dica 4: Você precisa usar `IN()` ou `NOT IN()` para mostrar a 'escada'?

* Dica 5: Qual símbolo você precisa no final de um comando SQL?
{{% /notice%}}
 
{{% notice info %}}
* BÔNUS: Tente usar várias entradas dentro de `IN()` ou `NOT IN()` ao procurar a escada
* Este comando é muito poderoso para buscar vários tipos de objetos
{{% /notice%}}

{{% notice tip %}}
Lembre-se: Você pode consultar o banco de dados várias vezes usando tudo o que aprendeu até agora para descobrir a cor da escada mais alta.
{{% /notice%}}

<!-- Digitação SQL na Atividade -->

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
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  
  <h4 id="story"></h4>

  <div id="legend" style="visibility:hidden">
     <br/>
    <p style="color:red;"> Escada VERMELHA = 100 </p>
    <p style="color:#00e500;"> Escada VERDE = 60 </p>
    <p style="color:#ffb972;"> Escada AMARELA = 20 </p>
    </br>
  </div>

{{< /rawhtml >}}

### Escolha e segure a escada correta até o morro para continuar sua aventura!

{{% notice note %}}
A escada correta será destacada em verde.
{{% /notice%}}

{{< rawhtml >}}


<div class="content_scaler">
<!-- Player drags ladder block to drop block to finish mission -->
<div class="hill_div" id="hill_div">

<!-- Drop Location -->
<div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<!-- Drag Block -->
<div id="div1" class ="codeBlocks" style="clear: left;" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_green.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" src="assets/ladder_yellow.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

</div> <!-- hill_div -->
</div> <!-- content_scaler -->

<div style="clear: both;"></div> 

<!-- O texto da próxima missão é exibido -->
<div id="text1" style="visibility:hidden">
  <p> Você conseguiu! O Líder lhe conta que o Planeta da Diversão está em perigo de ser invadido pelos alienígenas do Planeta do Tédio!
  Você precisa encontrar os Totens da Diversão para salvar o planeta! </p>
</div>

<!-- Indica ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>

{{< /rawhtml >}}
