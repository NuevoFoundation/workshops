---
title: "Colocando coisas no Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Colocando Texto

Agora você aprenderá como colocar coisas no Phaser. Veja a resposta abaixo.

Vamos primeiro ver como colocar texto!

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

Essas linhas de código criam uma variável chamada “mensagem”. Esta variável adiciona o texto "Hello World!" à coordenada (X, Y) (20, 10) na janela do jogo. O código também especifica que o texto seja criado na cor branca, na fonte Arial e no tamanho da fonte 25 px.

Coloque esta linha no seu método `create()` na parte inferior da página e veja se ela aparece na janela do jogo.

{{% notice note %}}

1. Ao criar um texto, o nome da variável não é o texto que aparece na tela, é o que você coloca entre aspas
2. Esta sintaxe também pode ser usada para colocar texto armazenado em uma variável String.

{{% /notice %}}

{{% notice warning %}}

### Ajuda! Minha janela de jogo é muito pequena!

Não se preocupe, na verdade é relativamente grande, mas repl o minimiza como padrão. Você pode estender a visualização da janela arrastando as barras entre elas.

{{% /notice %}}

## Colocando um plano de fundo

Os textos são muito simples, mas quando queremos usar nossos próprios sprites personalizados para o jogo (o que você quase sempre fará), você deve primeiro carregar o sprite em preload() antes de especificar sua localização em create().

Vamos começar criando um plano de fundo. Coloque este código em seu método `preload()`.

```javascript
this.load.image('background', 'assets/sky.png');
```

Isso simplesmente carrega a imagem no jogo. A seguir, vamos adicionar esta imagem ao jogo com `create()`:

```javascript
this.add.image(400, 300, 'sky');
```

Esta linha simplesmente coloca a imagem na coordenada (400, 300). Experimente e veja se o seu fundo não é mais uma tela preta!

{{% notice note %}}

A coordenada (400, 300) refere-se ao local onde colocamos o pixel central da nossa imagem. Isso significa que (400, 300) será o centro da imagem. Estamos colocando a imagem aqui de forma que ela cubra toda a tela como deveria ser um plano de fundo.

{{% /notice %}}

## Colocando um personagem

A seguir, vamos colocar um personagem em nosso mundo.

O código que entra na sua função preload() é assim:

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

Isso requer um pouco mais de código porque é uma spritesheet em vez de um sprite simples. Spritesheets ficam assim:
![cara](../media/example-dude.png)
Esta é a spritesheet do nosso personagem. Spritesheets são essencialmente uma coleção de sprites de um único personagem ou coisa em múltiplas posições. Quando reproduzidos consecutivamente, eles criarão uma animação para o nosso jogo (que descreveremos com mais detalhes na próxima lição). Embora seja óbvio para nós que se trata de um monte de imagens do mesmo personagem, o computador não é capaz de detectar isso facilmente por si só. Portanto, precisamos de mais sintaxe para informar ao computador o tamanho de cada sprite de caractere na spritesheet (neste caso, 32x48).

A sintaxe para colocar esta spritesheet em `create()` é quase a mesma da imagem, mas com uma tag física:

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

Nesta linha estamos criando a variável “player” que adiciona a primeira imagem da spritesheet na coordenada (250, 200). A imagem também recebe o nome de “cara”.

Nesta linha, player é o nome de uma variável que estamos criando. 250 e 200 são as coordenadas X e Y que colocamos o sprite, então ele será colocado na coordenada (250, 200) da nossa tela. “cara” é o nome do nosso sprite, mas não entrará em jogo nesta lição em particular.

Tente adicionar o personagem! Você vê o personagem na tela?

{{% notice note %}}

1. Para ver o personagem, a variável dude em `create()` DEVE ser criada após o background. Isso ocorre porque o código é lido pelo computador de cima para baixo, portanto, se o personagem for colocado antes do fundo, o computador colocará o fundo em cima do personagem, cobrindo-o e tornando-o invisível ao usuário.
2. O cara deveria estar olhando para a esquerda porque na primeira colocação, as spritesheets sempre serão colocadas na primeira entrada da planilha, e para o nosso cara, ele está olhando para a esquerda

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Iniciar Replit</a>