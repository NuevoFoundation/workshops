---
title: "Atividade 1: Login e configuração do ambiente cibernético"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Começando

Ok, Defensores Cibernéticos! A primeira coisa que você precisa fazer é configurar o ambiente no qual você caçará hackers. Para fazer isso, abra os links abaixo e siga as instruções sobre como configurar primeiro o Azure Data Explorer (ADX) e depois fazer login na sessão do Scoreboard.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Resources” width="60%" height="value">

### Configurando o Azure Data Explorer (ADX)

ADX é a principal ferramenta usada por alguns defensores cibernéticos para exploração e análise de dados. A grande vantagem do ADX é que ele é usado por analistas cibernéticos em muitas das menores e maiores organizações do mundo.

Vamos fazer login e começar a usar o ADX:

1.	Acesse [Azure Data Explorer](https://dataexplorer.azure.com/) e faça login com sua conta da Microsoft
    - Se você ainda não tem uma conta da Microsoft, crie uma agora (elas são gratuitas)
2. Clique na guia Query no lado esquerdo da tela.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

Os dados no ADX são organizados em uma estrutura hierárquica que consiste em **clusters, bancos de dados e tabelas**. Todos os logs de segurança do Envolve Labs são armazenados em um único cluster. Você precisará adicionar este cluster à sua interface ADX para poder começar a examinar os dados de log

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. Adicione um novo cluster usando o URI do cluster fornecido pelo seu instrutor
    - Clique em adicionar cluster
    - Insira o URI de conexão: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4.	Selecione seu banco de dados
    - Expanda a seta suspensa ao lado do seu cluster. Você deverá ver um banco de dados chamado **SecurityLogs** dentro dele.
    - Expanda a seta suspensa ao lado do banco de dados **SecurityLogs**.
    - Clique no banco de dados **SecurityLogs**. Depois de fazer isso, você deverá ver o banco de dados destacado - isso significa que você selecionou o banco de dados e está pronto para consultar as tabelas dentro dele..      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

O grande espaço em branco à direita da sua lista de clusters é o espaço de trabalho de consulta. É aí que você usará o código KQL para escrever o que chamamos de consultas, que são usadas para interagir com nossos dados de log. 

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Configuração do placar

1. Depois de acessar o [site do Scoreboard](https://aka.ms/kc7scoreboard), crie uma conta de usuário. Certifique-se de usar um nome de usuário e uma senha que você possa lembrar, pois será solicitado imediatamente que você faça login.
2. Clique no botão verde **"Join a new game"**
3. Depois de entrar, digite a senha da sessão: **GAMEON**

Você deverá ver o Placar agora, ao acessar a aba de desafios, deverá ver uma lista como na imagem abaixo. Precisaremos disso mais tarde no treinamento, então fique à vontade para minimizar o placar, mas mantenha-o pronto para uso.
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Feito! Agora que você está configurado, é hora de colocar as mãos nos dados. {{< /alert >}}

[def]: Images/ADX1.png