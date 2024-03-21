---
title: "Atividade 6: Use Comparadores"
description: "Use Comparadores"
date: 2020-07-11
prereq: "Comando SELECT, Comando WHERE"
difficulty: "Intermedário"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica drop down -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="_activity6.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

## Tarefa 6: Encontre o Totem Lendário da Diversão: Canhão de Confete

Você precisa explorar o planeta e encontrar o primeiro Totem Lendário da Diversão - O Canhão da Diversão de Confete.
As lendas dizem que este canhão nunca para de atirar confetes e é um símbolo de paz e entretenimento sem fim.

{{% notice info %}}
**Sua única dica é que o artefato foi criado em 12/09/1738.**
{{% /notice%}}
Para ajudá-lo, a Federação Galáctica enviou-lhe um breve tutorial sobre como comparar números no banco de dados.

![Explicar](assets/Comparator.png)
![Exemplo](assets/Example.png)

{{% notice note %}}
* No exemplo 2, os símbolos `!=` poderiam ser usados ​​em vez de `<>` para fornecer a mesma saída.
* Observe o valor em `[valor para comparar]` em `SELECT * FROM [banco de dados] WHERE [nome_coluna] [Comparador] [valor para comparar];` Observe que os números não precisam de aspas simples, mas data/palavras precisam estar entre aspas simples! Se Transporte tivesse mais 2 colunas chamadas "Name" que armazenasse o nome do veículo e "Date" que armazenasse a data (ano-mês-dia) de fabricação do veículo, nós as consultaríamos assim:

    `SELECT * FROM Transportation WHERE Fuel > 20;`

    `SELECT * FROM Transportation WHERE Name = 'myrocket';`

    `SELECT * FROM Transportation WHERE Date > '2021-01-01';`
{{% /notice%}}

### Usando o banco de dados chamado 'items' com a coluna chamada 'date_created', descubra qual artefato é o Totem Lendário da Diversão: Canhão de Confete

{{% notice tip %}}
Você pode exibir o banco de dados usando o comando da atividade 1.

* Dica 1: O artefato foi criado em '1738-09-12' (use aspas simples ao redor da data, a data está em ano-mês-dia).
* Dica 2: Qual comparador você precisa usar para encontrar uma correspondência exata?
* Dica 3: O comando correto segue de perto o exemplo acima.
* Dica 4: você não precisa de aspas simples nos nomes das colunas ou dos bancos de dados neste comando.
* Dica 5: Qual símbolo você precisa no final de um comando SQL?

* BÔNUS: Exiba todos os itens criados em e depois de '1738-09-12' também!
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
      <button class="button button1" onclick="sql()">Enter</button>
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="reset()">Reset</button>
    </div>
  </div>
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERRO ENTRADA INVÁLIDA></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

  <div id="text" style="visibility:hidden">
    <p> Você encontrou a localização do primeiro totem lendário da diversão: o canhão de confete! </p>
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
