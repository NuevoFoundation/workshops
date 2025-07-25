---
title: "Actividade 1 - Setando tempo & adicionando sons"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---


Vamos analisar o código pré-existente e entender o que ele significa.

<img src="../img/screenshot-setup-complete.png" height="400"/>

A função `setTempo()` permite definir o tempo geral do projeto. Tempo é a velocidade com que uma música é tocada. Alterar o tempo de um projeto permite criar diferentes estilos musicais. Tente mudar o tempo da sua função `setTempo` alterando o número no bloco e veja o que acontece! Certifique-se de que seja um número entre 45-220. Abaixo estão algumas sugestões de tempos que você pode usar.

<img src="../img/img-tempo1.png" height="200"/>

Agora que nosso tempo está definido, é hora de adicionar sons. Para isso, devemos utilizar a função `fitMedia()`. Vamos colocar o novo código logo abaixo do bloco da função `setTempo()`.

## Activity 1

1. Encontre o bloco roxo `fitMedia()` no lado esquerdo do editor de código.
2. Arraste o bloco `fitMedia()` para inseri-lo abaixo do bloco `setTempo`.
3. Você pode notar que, ao adicionar o bloco, o Earsketch exibe alguns textos de espaço reservado que precisaremos substituir depois. Esses textos de espaço reservado também são conhecidos como `parâmetros`.

<img src="../img/screenshot-parameters.png" height="100"/>

Vamos substituir cada um desses textos por um valor válido.

- `sound` - Navegue até o painel "Sons" e encontre um som de que goste. Clique em "sound" no bloco da função `fitMedia()`, depois pressione o botão "Colar" ao lado do som que deseja adicionar. O nome do som agora deve aparecer dentro do bloco `fitMedia()`.
- `trackNumber` - Use o menu suspenso para selecionar qualquer número inteiro positivo como o número da faixa. Para este exemplo, selecione `1`.
- `start/end` - Esses parâmetros são inteiros positivos quantificados em compassos. Um compasso é um segmento de tempo que corresponde a um número específico de batidas. Tente definir `start` como `1` e `end` como `9`.

Seu código agora deve se parecer com isto:

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

Tenha certeza que os blocos da função e o texto estão no lugar correto.

{{% /notice %}}

5. Assim que você colocar seus próprios parâmetros, pressione run, click no play para ouvir o audio do seu clipe!

    - **Se você encontrar algum texto vermelho, você encontrou algum erro! Por favor peça ajuda.** A `fitMedia()` função é a base para fazer a musica no Earsketch. Nos iremos usar muito essa função, então se você tem alguma dúvida sobre essa etapa, por favor nos pergunte!

{{% notice info %}}

A **Digital Audio Workstation** (DAW) é a area que o som aparece dentro. Fica no centro em cima da janela do seu EarSketch. Abaixo veja um exemplo de diferentes sessões de uma música podem aparecer na DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}