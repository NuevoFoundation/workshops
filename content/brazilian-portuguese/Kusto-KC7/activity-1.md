---
title: "Atividade 1: Login e Configuração do Ambiente Cibernético"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Começando

Certo, Defensores Cibernéticos!  
A primeira coisa que vocês precisam fazer é configurar o ambiente onde irão caçar hackers.  
Para isso, abra os links abaixo e siga as instruções para configurar primeiro o Azure Data Explorer (ADX) e depois fazer login na sessão do **Scoreboard**.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt="Resources" width="60%" height="value">

### Configurando o Azure Data Explorer (ADX)

O ADX é a principal ferramenta usada por alguns defensores cibernéticos para explorar e analisar dados.  
A parte incrível é que o ADX é utilizado por analistas de segurança em algumas das menores e maiores organizações do mundo.

Vamos fazer você entrar e começar a usar o ADX:

1. Vá para [Azure Data Explorer](https://dataexplorer.azure.com/) e faça login com sua conta Microsoft  
    - Se você ainda não tem uma conta Microsoft, crie uma agora (é grátis)
2. Clique na aba **Query** no lado esquerdo da tela.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt="ADX1" width="20%">

Os dados no ADX são organizados em uma estrutura hierárquica que consiste em **clusters, databases e tables**.  
Todos os logs de segurança da *Envolve Labs* estão armazenados em um único cluster.  
Você precisará adicionar esse cluster à sua interface do ADX para começar a analisar os dados de log.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt="ADX2" width="40%" height="value">

3. Adicione um novo cluster usando o URI do cluster fornecido pelo seu instrutor  
    - Clique em **Add cluster**  
    - Digite o **Connection URI**: `mstictraining.eastus`

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt="ADX3" width="40%" height="value">

4. Selecione seu banco de dados  
    - Expanda a seta ao lado do seu cluster. Você verá um banco de dados chamado **SecurityLogs**.  
    - Expanda a seta ao lado do banco de dados **SecurityLogs**.  
    - Clique em **SecurityLogs**. Quando ele estiver destacado, significa que foi selecionado e você está pronto para consultar as tabelas dentro dele.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt="ADX4_updated" width="30%" height="value">

O grande espaço em branco à direita da lista de clusters é o **query workspace**.  
É nele que você usará código KQL para escrever consultas (*queries*) e interagir com os dados de log.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt="ADX5" width="60%" height="value">

### Configuração do Scoreboard

1. Acesse o [site do Scoreboard](https://aka.ms/kc7scoreboard) e crie uma conta de usuário. Use um nome de usuário e senha que você consiga lembrar, pois o sistema pedirá para fazer login imediatamente.  
2. Clique no botão verde **"Join a new game"**  
3. Ao entrar, digite a senha da sessão: **GAMEON**

Agora você deve ver o **Scoreboard**.  
Quando for até a aba *challenges*, verá uma lista como na imagem abaixo.  
Vamos precisar disso mais tarde no treinamento, então você pode minimizar o Scoreboard, mas deixe-o pronto para uso.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt="ADX3" width="value" height="value">

{{< alert theme="info" >}} Pronto! Agora que está tudo configurado, é hora de colocar as mãos nos dados. {{< /alert >}}

[def]: Images/ADX1.png
