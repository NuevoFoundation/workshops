---
title: "Atividade 3: Aprenda o comando COUNT"
description: "Aprenda o comando COUNT"
date: 2020-07-14
prereq: "comanado SELECT"
difficulty: "Iniciante"
draft: false
---
<!-- Links para javascript e CSS necessários para lógica suspensa -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="_activity3.js"></script>

<br>

A aventura se desdobra após a intrigante mensagem da Federação Galáctica.

Com os motores da nave zumbindo em antecipação, você aterrissa triunfantemente no Planeta da Diversão! Em suas mãos, um presente da Federação: uma base de dados repleta de segredos e maravilhas deste mundo exótico, aguardando sua exploração.

{{< rawhtml >}}
  <table id="planettable">
    <tr>
    </tr>
    <script>exibirTabela("planeta", "planettable");</script>
  </table>
{{< /rawhtml >}}

## Tarefa 3: Fale com os habitantes
Você precisa falar com os habitantes do Planeta da Diversão para descobrir qual é o problema. Descubra quantas cidades existem no planeta usando o comando `COUNT()`!

{{% notice info %}}
Quando usamos o comando `SELECT * FROM planet;`, a tabela acima é exibida. Mas para verificar o número de cidades, podemos usar o comando `COUNT()`.
{{% /notice%}}

![contagem](assets/contagem.png)

### Pergunta: Usando o `COUNT()`, qual comando exibirá o número de cidades no Planeta da Diversão?

{{% notice tip %}}

Lembre-se de digitar a resposta e não copiar e colar o comando. Pressione o botão Enter no terminal para verificar se você tem o comando correto. Use o botão Reset para começar de novo.

* Dica 1: A Federação Galáctica deu a você o nome deste banco de dados no início desta atividade.
* Dica 2: Você pode usar tanto o asterisco (*) quanto o nome de uma coluna.
* Dica 3: Não se esqueça do ponto e vírgula (;).

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
      <button class="button button1" onclick="sql()"> Entrar </button>
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="reset()">Resetar</button>
    </div> <!-- terminal_div -->
  </div> <!-- content_scaler -->
  
  <div style="clear: both;"></div> 

  <h1 class="erro" id="sqlcommand" style="visibility:hidden"><strong>ERRO DE ENTRADA INVÁLIDA</strong></h1>
  <table id="tabela">
    <tr>
    </tr>
  </table>
  <h4 id="história"></h4>

  <!-- Indica ao usuário para continuar a missão -->
  <div class="continuar_enredo" id="continuar_enredo" style="visibility:hidden">
    <p>Você encontrou o comando correto para exibir o banco de dados completo! Isso é útil quando você quer ver todas as informações ao alcance de seus dedos!</p>
    <div class="alerta">
      <span id="verificar">&#10003;</span>
      Você completou a tarefa! Continue para a próxima missão!
    </div>
  </div>
{{< /rawhtml >}}
