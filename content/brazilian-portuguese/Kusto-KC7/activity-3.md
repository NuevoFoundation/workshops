---
title: "Atividade 3: Kusto Query Language 101"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="Atividade 3: Kusto Query Language 101 - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} Aqui é onde queremos que você abra o Scoreboard e o visualizador ADX em janelas separadas para completar os próximos exercícios. Se você não puder ou não quiser usar o Scoreboard, todas as perguntas desta seção estão listadas abaixo.

*Lembre-se: qualquer página com vídeo repete a lição tanto em vídeo quanto em texto. Você pode seguir o que preferir, dependendo de como aprende melhor.* {{< /notice >}}

## KQL 101

**[Certifique-se de usar o banco de dados SecurityLogs para este exercício.]**

Digite a consulta abaixo no workspace para ver as primeiras linhas da tabela **Employees**. Pressione “run” ou “shift + enter” para executar a consulta. Todos os blocos de código KQL deste workshop estarão destacados em cinza como o exemplo abaixo.

```KQL
Employees
|   take 10
```

Esta consulta tem algumas partes. Vamos entender cada uma delas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

O operador <span style="color:red">**take**</span> é uma ferramenta poderosa para explorar linhas de uma tabela e, assim, entender melhor que tipo de dados estão guardados ali.

{{< notice note >}} 🎯**Dica – O que fazer quando não sabe por onde começar**: Sempre que você encontrar uma tabela de banco de dados desconhecida, a primeira coisa a fazer é amostrar suas linhas usando o operador <span style="color:red">**take**</span>. Assim, você descobre quais campos estão disponíveis para consulta e pode imaginar que tipo de informação pode extrair da fonte de dados. {{< /notice >}}

A tabela Employees contém informações sobre todos os funcionários da nossa organização. Neste caso, vemos que a organização se chama “Envolve Labs” e o domínio é “envolvelabs.com”.

{{< alert theme="success" >}}
*Pergunta 1.	🤔 Teste você mesmo! Faça um <span style="color:red">**take**</span> 10 em todas as outras tabelas para ver que tipo de dados elas têm.*{{< /alert >}}

Você pode escrever várias consultas na mesma aba do workspace. Para isso, separe cada consulta por uma linha em branco. Veja abaixo como as consultas para Employees, Email e OutboundBrowsing estão separadas por linhas em branco nas linhas 3 e 6.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

Quando há várias consultas, é importante dizer ao ADX qual delas você quer rodar. Para escolher, basta clicar em qualquer linha que faça parte da consulta. Assim que selecionar, ela ficará destacada em azul, como nas linhas 4 e 5 acima.

#### **Descobrindo “Quantos”: O operador 'count'**

Podemos usar <span style="color:red">**count**</span> para ver quantas linhas há em uma tabela. Isso mostra quanto dado está guardado ali.

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*Pergunta 2.	🤔Quantos funcionários existem na empresa?*{{< /alert >}}

#### **Filtrando Dados com o operador 'where'**

Até agora, rodamos consultas que olham todo o conteúdo da tabela. Muitas vezes, na análise de cibersegurança, queremos ver só os dados que atendem a certos critérios. Para isso, aplicamos filtros em colunas específicas.

Podemos usar o operador <span style="color:red">**where**</span> no KQL para filtrar um campo específico. Por exemplo, podemos encontrar todos os funcionários com o nome “Linda” filtrando pela coluna name na tabela **Employees**.

Comandos <span style="color:red">**where**</span> seguem uma estrutura específica. Use o quadro abaixo para entender como montar um comando <span style="color:red">**where**</span>.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
O operador <span style="color:blue">**has**</span> é útil aqui porque estamos procurando uma correspondência parcial. Se quisermos buscar um funcionário com nome e sobrenome exatos, usamos o operador ==:

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Pergunta 3.	🤔Cada funcionário da Envolve Labs tem um endereço IP. Qual funcionário tem o IP: “192.168.0.191”?*{{< /alert >}}

No dia a dia, os funcionários da Envolve Labs enviam e recebem e-mails. Um registro de cada e-mail é guardado na tabela **Email**.

{{< notice note >}}🎯**Dica – Privacidade do Usuário e Metadados**: Como você pode imaginar, alguns e-mails são muito sensíveis. Em vez de guardar o conteúdo completo de cada e-mail enviado e recebido em um banco de dados que pode ser acessado por analistas de segurança, capturamos apenas os metadados dos e-mails.

Metadados de e-mail incluem informações como: hora do envio, remetente, destinatário, assunto e links que o e-mail pode conter. Guardar só os metadados, e não o conteúdo completo, ajuda a proteger a privacidade dos funcionários e garante que os analistas possam nos manter seguros. Às vezes, até metadados podem revelar informações sensíveis, então é importante não comentar sobre dados de logs com outros funcionários fora do SOC.{{< /notice >}}

Podemos encontrar informações sobre e-mails enviados ou recebidos por um usuário procurando o endereço de e-mail dele nos campos de remetente e destinatário da tabela **Email**. Por exemplo, podemos usar a consulta abaixo para ver todos os e-mails enviados por “Michael Montello”:

```KQL
Email
|   where sender == "michael_montello@envolvelabs.com"
```
{{< alert theme="success" >}}
*Pergunta 4.	🤔Quantos e-mails Betty Parrish recebeu?*{{< /alert >}}

#### **Fácil como 1, 2, 3… Consultas Compostas e o operador distinct**

Podemos usar o operador distinct para encontrar valores únicos em uma coluna. Com a consulta abaixo, descobrimos quantos usuários da organização enviaram e-mails.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL5.png?raw=true" alt= “KQL5” width="50%" height="value">

Esta é a primeira vez que usamos uma consulta de várias linhas com múltiplos operadores, então vamos entender:

Na **linha 2**, pegamos a tabela Email e filtramos para encontrar só as linhas com “envolvelabs” na coluna sender.

Na **linha 3**, adicionamos outro pipe ( | ) e usamos o operador distinct para encontrar todos os remetentes únicos. Aqui, não estamos achando todos os remetentes únicos, mas só os que sobraram depois do filtro.

Por fim, na **linha 4**, adicionamos outro pipe ( | ) e usamos o operador count para contar os resultados das linhas 1-3 da consulta.

{{< alert theme="success" >}}
*Pergunta 5.	🤔Quantos usuários receberam e-mails com o termo “vaccine” no assunto?*{{< /alert >}}

#### **Rastreando um Clique: Dados de OutboundBrowsing**

Quando funcionários da Envolve Labs acessam um site pela rede da empresa, essa atividade é registrada. Isso fica guardado na tabela **OutboundBrowsing**, que tem registros dos sites acessados por cada usuário. Sempre que alguém visita um site, um registro é salvo na tabela. Porém, o nome do usuário não é guardado, só o endereço IP. Existe uma relação 1:1 entre usuários e seus IPs, então podemos consultar a tabela **Employees** para descobrir quem acessou determinado site.

Se quisermos saber quais sites Annie Jackson visitou, podemos encontrar o IP dela na tabela **Employees**.

```KQL
Employees
|   where name == "Annie Jackson"
```
A consulta acima mostra que o IP dela é “192.168.3.168”. Podemos pegar esse IP e procurar na tabela **OutboundBrowsing** para saber quais sites ela visitou.

```KQL
OutboundBrowsing
| where src_ip == "192.168.3.168"
```

{{< alert theme="success" >}}
*Pergunta 6.	🤔Quantos sites únicos “Keith Mitchell” visitou?*{{< /alert >}}

#### **O que tem em um nome? Tudo sobre dados de DNS passivo**

Embora nomes de domínio como “google.com” sejam fáceis para humanos lembrarem, os computadores não sabem lidar com eles. Então, eles convertem para endereços IP que as máquinas entendem. Assim como o endereço da sua casa diz aos amigos como te encontrar, um endereço IP diz ao computador onde encontrar uma página ou serviço na internet.


{{< notice note >}} 🎯**Dica – Pratique o bom OPSEC**: Se quisermos descobrir para qual IP um domínio resolve, poderíamos simplesmente acessá-lo. Mas, se o domínio for malicioso, você pode baixar arquivos perigosos ou avisar os atacantes que você sabe da infraestrutura deles. Como analistas de cibersegurança, precisamos seguir procedimentos e cuidados para proteger nossa capacidade de rastrear ameaças. Essas práticas são chamadas de segurança operacional, ou OPSEC. {{< /notice >}}

Para não precisar resolver ativamente (ou seja, acessar ou interagir diretamente com um domínio para descobrir seu IP) cada domínio que nos interessa, podemos usar dados de DNS passivo. Eles permitem explorar com segurança as relações entre domínio e IP, respondendo perguntas como:

- Para qual IP este domínio resolve?
- Quais domínios estão hospedados neste IP?
- Para quantos outros IPs este domínio já resolveu?     

Essas relações estão guardadas na tabela **PassiveDns**.
{{< alert theme="success" >}}
*Pergunta 7.	🤔 Quantos domínios nos registros da **PassiveDns** contêm a palavra “vaccine”? (dica: use o operador <span style="color:blue">**contains**</span> em vez de <span style="color:blue">**has**</span>. Se ficar em dúvida, faça um <span style="color:red">**take**</span> 10 na tabela para ver os campos disponíveis.)*

*Pergunta 8.	🤔 Para quais IPs o domínio “biotechenvolv.science” resolveu?*{{< /alert >}}

🤯**Comandos let – facilitando sua vida:**

Às vezes, precisamos usar o resultado de uma consulta como entrada para outra. O jeito mais simples é digitar manualmente o resultado na próxima consulta.

- Por exemplo, e se quisermos ver toda a navegação de funcionários chamados “Linda”?
- Primeiro, você precisa ir na tabela **Employees** e achar os IPs dessas pessoas.     

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL6.png?raw=true" alt= “KQL6” width="80%" height="value">

Depois, você pode copiar e colar esses IPs em uma consulta na tabela **OutboundBrowsing**. Note que podemos usar o operador in para escolher todas as linhas que têm um valor igual a qualquer valor da lista. Ou seja, o operador == procura uma correspondência exata, enquanto o operador in verifica se está na lista.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL7.png?raw=true" alt= “KQL7” width="90%" height="value">

Embora isso funcione, não é muito prático se você tiver 100 ou 1000 funcionários chamados “Linda”.

Podemos fazer isso de forma mais elegante usando um [comando let](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/letstatement), que permite dar um nome para uma expressão ou função. Podemos usar o comando <span style="color:blue">**let**</span> aqui para salvar e nomear o resultado da primeira consulta, assim podemos reutilizar os valores depois. Isso evita digitar ou copiar e colar os resultados várias vezes.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL8.png?raw=true" alt= “KQL8” width="value" height="value">

À esquerda do comando <span style="color:blue">**let**</span> está o nome da variável (“linda_ips” neste caso). O nome pode ser o que você quiser, mas é bom escolher algo que ajude a lembrar o que está guardando.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL9.png?raw=true" alt= “KQL9” width="value" height="value">

À direita do comando <span style="color:blue">**let**</span> está a expressão que você está guardando. Neste caso, usamos o operador <span style="color:red">**distinct**</span> para selecionar valores de uma coluna só – assim eles ficam em um array ou lista de valores. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL10.png?raw=true" alt= “KQL10” width="value" height="value">

O comando <span style="color:blue">**let**</span> termina com ponto e vírgula.

Depois de guardar o valor de uma consulta em uma variável usando <span style="color:blue">**let**</span>, podemos usá-la quantas vezes quisermos no resto da consulta. A consulta guardada não mostra nenhum resultado. Lembre-se, porém, que sua consulta KQL precisa ter um comando tabular – ou seja, você precisa ter outra consulta depois do comando <span style="color:blue">**let**</span>.
{{< alert theme="success" >}}
*Pergunta 9.	🤔 Quantas URLs únicas foram acessadas por funcionários chamados “Karen”?*{{< /alert >}}


{{< notice note >}}🎯**Dica – Pivotando**: Parte de ser um bom analista de cibersegurança é aprender a usar várias fontes de dados para contar uma história mais completa sobre o que um atacante fez. Chamamos isso de “pivotar”. Você pivota ao pegar um dado conhecido em um conjunto de dados e procurar em outro conjunto para descobrir algo novo. Você praticou isso aqui quando começou na tabela Employees e usou o que aprendeu para achar dados relacionados em outra fonte – **OutboundBrowsing**. {{< /notice >}}


