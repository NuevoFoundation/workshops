---
title: "Estrutura do Aplicativo de Jogo"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## De volta às Fundações
Agora que o jogo tem o título certo, vamos mergulhar mais fundo em todos esses arquivos na pasta do jogo. O que eles significam? Como eles contribuem para o jogo?
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="Visão expandida dos arquivos do aplicativo" alt="Arquivos do aplicativo mostrados no Android Studio"/>

### AndroidManifest.xml
Todo projeto no Android inclui um arquivo de manifesto. Para o seu jogo, este é o arquivo `AndroidManifest.xml`. O arquivo de manifesto define os metadados para o seu jogo, por exemplo, pode definir o ícone e o tema geral para o aplicativo do seu jogo.

### activity_main.xml
Este arquivo está localizado na pasta "layout". Como o nome da pasta indica, os arquivos nesta pasta definem como seu aplicativo se parece. Se você olhar o código para `activity_main.xml`, verá palavras-chave como `TableLayout` ou `TableRow`. A combinação de palavras-chave no arquivo `activity_main.xml` cria o layout para os botões de escolha do jogo (Jogador vs Jogador ou Jogador vs Computador), o tabuleiro do jogo da velha e o botão de reiniciar. A palavra-chave `TableLayout` diz que o layout será alinhado ao estilo de tabela, que inclui colunas e linhas. A palavra-chave `TableRow` cria uma nova linha no layout, com cada elemento adicional correspondendo a um local nessa linha:
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="Layout do tabuleiro do jogo em linhas" alt="Tabuleiro do Jogo da Velha com 5 linhas. A primeira linha inclui os dois botões de escolha do jogo, seguidos por 3 linhas por 3 colunas para a grade do Jogo da Velha e finalmente a quinta linha com o botão de reiniciar"/>

### MainActivity.kt

Este arquivo está localizado na pasta "java". O arquivo contém o código e a lógica para o seu aplicativo.

### colors.xml, strings.xml, styles.xml

Esses arquivos estão localizados na pasta "values". Os arquivos contêm valores que podem ser referenciados por outros arquivos XML e código do aplicativo.

## Juntando tudo

Todos esses arquivos trabalham juntos para criar seu jogo. O arquivo `activity_main.xml` decide o que é mostrado para você. Quando você clica nos botões, eventos são enviados do `activity_main.xml` para o `MainActivity.kt` para determinar o que acontece nesse clique de botão. Para valores repetíveis, `activity_main.xml` e `MainActivity.kt` podem acessar `colors.xml`, `strings.xml` ou `styles.xml` para usar esses valores a partir de um local conveniente.
