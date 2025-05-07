---
title: "Pré-carregar, criar e atualizar"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## Os métodos Pré-carregar, Criar e Atualizar

Então agora vamos dar uma olhada em nossas cenas, que eventualmente conterão o código do nosso jogo. Se você rolar, verá que cada cena tem um construtor (porque é uma classe), e também três grandes métodos: `preload()`, `create()`, `update()`. Há também uma série de funções auxiliares na Cena 2, mas falaremos sobre os três métodos mencionados acima porque eles são essenciais para a compreensão do Phaser.

Da forma como configuramos as cenas, preload() e create() estão na Cena 1 e create() e update() estão na Cena 2. Essas três funções são as principais ferramentas que qualquer jogo usando Phaser utilizará.
## Pré-carregar()

Vamos começar descrevendo preload() - esta função basicamente carrega coisas em nosso jogo. Podem ser imagens, variáveis ​​e praticamente qualquer outra coisa que você queira definir para uso no jogo. Coisas carregadas no jogo com preload() NÃO são realmente usadas ou colocadas em qualquer lugar do jogo até que você as use mais tarde. Você pode pensar nesse método como um espaço de armazenamento que é preenchido uma vez antes do jogo começar. A maioria das coisas precisa ser colocada em preload() antes de serem usadas em qualquer lugar do jogo.

## Criar()

O próximo é criar(). Esta função também é relativamente simples - ela é executada uma vez no início do jogo e permite ao usuário colocar as coisas que pré-carregou com preload() e criar objetos dentro do nosso jogo, como animações, detectores de colisão, texto, grupos, e muito mais.

## Atualizar()

Finalmente, a última função é update(). Enquanto preload() e create() são executados apenas uma vez no início do jogo, update() é executado constantemente.

{{% notice info %}}
Ao jogar, você pode encontrar o termo “FPS”. Consulte os “quadros por segundo (Frames Per Second)” do jogo ou à frequência com que um novo quadro é atualizado na tela. Um quadro é essencialmente uma única chamada ao método update(). O Phaser roda normalmente a 60 FPS, o que significa que o método update() é chamado 60 vezes em um único segundo!
{{% /notice %}}

O método update() é usado de várias maneiras. Uma é para movimento - se atribuirmos um objeto para se mover um pouco em update(), então, quando jogarmos, parecerá que o objeto está se movendo suavemente porque update() está sendo chamado com tanta frequência que não podemos veja os intervalos entre cada movimento. Também podemos usar update() para verificar constantemente se uma entrada foi fornecida. Por exemplo, se quisermos que o jogador seja capaz de atirar quando a barra de espaço for pressionada, podemos usar uma declaração if que verifica a barra de espaço na função update(), para que o jogo verifique isso constantemente.
