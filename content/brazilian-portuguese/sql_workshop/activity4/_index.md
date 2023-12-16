---
title: "Atividade 4: Selecionar Múltiplas Informações"
description: "Selecionar Múltiplas Informações"
date: 2020-07-13
prereq: "Comando SELECT"
difficulty: "Iniciante"
draft: false
---
<!-- Links para javascript e CSS necessários para a lógica do menu suspenso -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="_activity4.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>

## Tarefa 4: Encontrar o Líder deles

Depois de ir para a Capital da Diversão, os habitantes pedem para você falar com o líder deles. Descubra qual habitante é o líder.
Para fazer isso, vamos dar uma olhada em como selecionar múltiplas colunas em um banco de dados.

![Vírgulas](assets/Virgulas.png)

#### Agora use o que aprendeu para descobrir quem é o líder do Planeta da Diversão!

{{% notice tip %}}
Você pode visualizar o banco de dados inteiro usando o comando `SELECT * FROM [nome_do_banco];` que você aprendeu na atividade 1.

**A Federação Galáctica também te lembra que o banco de dados 'galáxia' possui as seguintes colunas:**

* numero_planeta: A ordem em que os planetas aparecem no banco de dados.

* planeta: O nome do planeta.

* líder: O nome do líder do planeta.

* população: Quantos habitantes vivem no planeta.

* coordenada: A localização do planeta na galáxia.

**Dica: Apenas duas colunas são necessárias.**

{{% /notice%}}

### Pergunta: Usando o banco de dados 'galaxy', como você exibe apenas os _nomes dos_ planetas e seus líderes?

{{% notice warning %}}
Não esqueça do ponto e vírgula no final!
{{% /notice%}}

<!-- Digitação SQL na Atividade -->
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
    <p>Você encontrou o comando correto para exibir todos os planetas e seus líderes!</p>
    <div class="alerta">
      <span id="verificar">&#10003;</span>
      Você completou a tarefa! Continue para a próxima missão!
    </div>
  </div>
  
{{< /rawhtml >}}
