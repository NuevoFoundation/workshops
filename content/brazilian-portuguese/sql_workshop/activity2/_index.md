---
title: "Atividade 2: Aprenda o comando WHERE"
description: "Aprenda o comando WHERE"
date: 2020-07-16
prereq: "comando SELECT"
difficulty: "Iniciante"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica suspensa -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="_activity2.css" type="text/css"></link>

<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="_activity2.js"></script>

## Tarefa 2: Viaje para o Planeta da Diversão!

Você precisa programar o GPS do seu foguete para ir ao Planeta da Diversão reorganizando os blocos de código. Para encontrar as coordenadas,
a Federação Galáctica deu a você o próximo comando SQL: `WHERE`!

{{% notice info %}}
### O que o comando faz:
O comando `WHERE` permite mostrar apenas os dados que você deseja.
{{% /notice%}}

![Explicar](assets/Where_Explain.png)

### Exemplo:

![Ex](assets/Where_Ex.png)

{{% notice info %}}
1. O bloco de banco de dados `SELECT * FROM` que aprendemos na atividade anterior nos permite escolher um banco de dados para pesquisar.

2. O comando `WHERE` nos permite restringir quais dados são exibidos dependendo da condição (os blocos verdes na imagem abaixo). Uma condição é um requisito que você está procurando. As condições não precisam seguir o exemplo acima, mas o uso mais comum de condições é procurar linhas que contenham informações específicas.

3. O nome da coluna na qual desejamos procurar informações.
 
4. O sinal de igual significa que queremos encontrar informações que correspondam ao que temos no lado direito do sinal de igual.

5. Quando procuramos palavras ou textos específicos, devemos colocar o texto entre aspas simples. SQL usa aspas simples para indicar que estamos procurando uma palavra no banco de dados.

6. Você pode substituir 'texto' por qualquer palavra que esteja procurando no banco de dados.

7. O ponto e vírgula funciona como o final de um comando SQL, como um ponto final no final de uma frase.
{{% /notice%}}

#### Usando o banco de dados chamado 'galaxy' que possui uma coluna chamada 'planet', encontre as coordenadas do Planeta da Diversão!

<!-- reorganiza os blocos de código no terminal para obter o bloco de coordenadas -->

{{< rawhtml >}}

<div class="content_scaler">
<div class="terminal_div" id="terminal_div">

<!-- Retângulos para receber blocos -->
<div id="div7" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div8" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div9" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div10" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div11" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>
<div id="div12" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<div style="clear: both;"></div>

<br><br>

<div id="div1" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" id="answer5" src="assets/Equal.PNG" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

<div id="div2" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer2" src="assets/galaxy_block.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div>

<div id="div3" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer4" src="assets/Planet_Name_Block.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div>

<div id="div4" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer6" src="assets/Planet_Fun_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag4">
</div>

<div style="clear: both;"></div>

<div id="buffer" class="codeBlocks" style="border: none;"></div>

<div id="div5" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer1" src="assets/Select_From_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div id="div6" class="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img class="img" img id="answer3" src="assets/Where_Block.PNG" draggable="true" ondragstart="drag(event)" id="drag5">
</div>

<div style="clear: both;"></div>
<br><br>

<!-- Pressione Enter e se estiver correto, exiba o bloco de coordenadas -->
<button class="button button1" onclick="check()"> Enter </button>
</div> <!-- terminal_div -->
</div> <!-- content_scaler -->

<table id="planet" style="visibility:hidden">
  <tr>
  </tr>
  <script>displaytable("galáxia onde planeta = 'Planeta da Diversão'", "planet");</script>
</table>

<div id="text" style="visibility:hidden">
<h3> Agora que você sabe onde fica o Planeta da Diversão, podemos encontrar mais informações sobre ele e ignorar os outros planetas. Vamos para o Planeta da Diversão! </h3>
</div>

<img src="" id="gps">

<!-- Diz ao usuário para continuar a missão -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    Você completou a tarefa! Continue para a próxima missão!
  </div>
</div>
{{< /rawhtml >}}
