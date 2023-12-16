---
title: "Instalando Unity"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 1
---

Precisamos ajudar Nuvi a derrotar os alienígenas, mas programar tudo do zero pode ser um pouco demais agora.
Unity é uma ferramenta que simplifica algumas partes básicas da construção de jogos para nós, então tudo o que precisamos fazer é arrastar e soltar objetos e escrever um pouco de código C# simples!

{{< notice info >}}
#### Por que usar o Unity quando existem outras ferramentas por aí?

Bem, o Unity tem ótimas características, especialmente se você está apenas começando sua jornada de desenvolvimento de jogos. É multiplataforma, o que significa que você pode desenvolver um jogo para, digamos, computadores e telefones celulares. É adequado para para programadores iniciantes. O melhor de tudo é que tem uma comunidade de apoio grande!

Alguns jogos desenvolvidos em Unity incluem: *Subway Surfers*, *Hearthstone*, *Cytus*, *Pokemon Go*, *Overcooked*, *Cuphead*, *Hollow Knight*, *Among Us* e *Genshin Impact*.
Apenas nesta lista, você pode notar que existem títulos indie e títulos AAA, e há jogos para diversas plataformas. Se você deseja desenvolver em uma grande empresa ou por conta própria, é uma boa ideia ter alguma experiência com Unity!
{{< /notice >}}

Então, antes de podermos fazer qualquer coisa, você precisa baixar e instalar o Unity!
Mesmo que você já tenha o Unity instalado, analise esta atividade para ter certeza de que tem a configuração correta.

## Etapa 1: Baixe o Unity

Primeiro, vamos [escolher e baixar o Unity](https://unity3d.com/get-unity/download?_ga=2.142217974.513534012.1631151100-1023620192.1630193772).

1. Clique em “Escolha seu Unity + download”.

2. Clique em **"Student and hobbyist"** e abaixo **"Personal"** ou **"Student"** se você tiver um endereço de e-mail de estudante, selecione "Começar".

3. Role para baixo na página da web em **"1. Download the Unity Hub"**, download com base no seu computador.  
 
{{< notice note >}}
Para este workshop, utilizamos a versão "2019.4.19f1" para o conteúdo e capturas de tela. Se você quiser usar esta versão exata, na mesma página em "2. Choose your Unity version", selecione "Visit the download archive" para encontrar a mesma versão deste workshop. Caso contrário, poderão ocorrer pequenas alterações na interface do usuário para versões mais recentes. Se você optar pelo desenvolvimento de jogos no Unity, não se esqueça de conferir as versões mais recentes!
{{< /notice >}}

4. Após o término do download do Unity, abra o Unity, que iniciará a configuração do Unity Hub, um aplicativo que o ajudará a gerenciar seus projetos do Unity.

5. Uma janela pop-up aparecerá. Concorde com os contratos do usuário, ative a licença, selecione a pasta de destino onde deseja fazer o download em seu computador, instale e execute o Unity Hub selecionando "Finish"!

## Etapa 2: Unidade Hub

1. Faça login com seu Unity ID: o instalador do Unity Hub aparecerá. Depois de clicar em instalar, você será levado a uma página onde deverá criar um Unity ID. Se você ainda não tiver um, crie um novo ID. Se você já possui um, selecione “I already have a Unity ID” e insira suas informações.

2. Depois de inserir suas informações, a página solicitará que você escolha um modelo para um microjogo. Isso ocorre apenas porque escolhemos "First-Time Users", então o Unity deseja que novos usuários experimentem os projetos fornecidos para ajudá-los a entender melhor o Unity.

3. Usaremos nossos próprios projetos para ensinar, então, por enquanto, você pode escolher um modelo aleatório que queira explorar mais tarde e clicar em "continue" e "Launch Unity". O Unity irá então iniciar o microjogo, mas como não o estamos usando, basta fechar o Unity.

4. Se a sua versão do Unity não for 2019.4, abra o hub Unity e à esquerda da janela, selecione "Installs". Clique no botão "ADD" e selecione a versão desejada. Você pode selecionar a versão mais recente ou a versão que estamos usando para este projeto, **"2019.4.19f1 (LTS)"**. Em seguida, o Unity Hub o levará a uma página onde você poderá escolher as bibliotecas que pode incluir. Certifique-se de que o suporte de compilação para Windows e Mac esteja selecionado!

## Etapa 3: vamos começar!
Para começar a trabalhar em um novo projeto, abra o Unity Hub e clique no botão azul que diz “NEW”. Nomeie seu projeto como quiser e escolha um local para criar a pasta do projeto. Certifique-se de ter escolhido "2D" como modelo de projeto, conforme mostrado na imagem.

![Criando um novo projeto 2D Unity](../img/0_new_project_edited.png)

