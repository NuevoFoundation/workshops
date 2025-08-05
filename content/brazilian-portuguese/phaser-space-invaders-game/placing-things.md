---
title: "Colocando coisas no Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Colocando Texto

Agora você vai aprender como colocar coisas dentro do Phaser. Veja o repl abaixo.

Vamos começar vendo como colocar um texto!

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

Essas linhas de código criam uma variável chamada "message". Essa variável adiciona o texto "Hello World" na coordenada (X, Y) (20, 10) da janela do jogo. O código também especifica que o texto será branco, com fonte Arial e tamanho de 25 px.

Coloque essa linha no seu método `create()` no final da página e veja se o texto aparece na tela do jogo.

{{% notice note %}}

1. Ao criar um texto, o nome da variável não é o texto que aparece na tela — o que aparece é o que você coloca entre aspas.
2. Essa mesma sintaxe pode ser usada para mostrar textos guardados em uma variável do tipo String.

{{% /notice %}}

{{% notice warning %}}

### Socorro! Minha tela do jogo está muito pequena!

Não se preocupe, ela é relativamente grande, mas o repl deixa ela minimizada por padrão. Você pode aumentar a área arrastando as barras entre as janelas.

{{% /notice %}}

## Colocando um Plano de Fundo

Textos são simples, mas quando queremos usar sprites personalizados para o jogo (o que quase sempre vai acontecer), primeiro precisamos carregar o sprite no `preload()` antes de definir sua posição no `create()`.

Vamos começar criando um plano de fundo. Coloque este código no seu método `preload()`:

```javascript
this.load.image('background', 'assets/sky.png');
```

Isso apenas carrega a imagem no jogo. Agora vamos adicionar essa imagem no `create()`:

```javascript
this.add.image(400, 300, 'sky');
```

Essa linha coloca a imagem na coordenada (400, 300). Teste e veja se o fundo preto desapareceu!

{{% notice note %}}

A coordenada (400, 300) indica onde estamos posicionando o pixel central da imagem. Isso significa que (400, 300) será o centro dela. Estamos colocando aqui para que cubra a tela inteira como um verdadeiro plano de fundo.

{{% /notice %}}

## Colocando um Personagem

Agora, vamos colocar um personagem no nosso mundo.

O código que vai no `preload()` fica assim:

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

Esse código é um pouco maior porque é para um **spritesheet** em vez de um sprite simples. Spritesheets são assim:  
![dude](../media/example-dude.png)  
Um spritesheet é basicamente uma coleção de sprites do mesmo personagem ou objeto em várias posições. Quando mostramos essas imagens rapidamente, uma após a outra, criamos uma animação (vamos falar mais disso na próxima lição).  
Embora seja óbvio para nós que é o mesmo personagem em poses diferentes, o computador não consegue perceber isso sozinho, então precisamos informar o tamanho de cada sprite — nesse caso, 32x48.

O código para colocar esse spritesheet no `create()` é quase igual ao da imagem, mas com **physics**:

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

Aqui, estamos criando a variável "dude" e colocando a primeira imagem do spritesheet na coordenada (250, 200). A imagem recebe o nome interno "dude".

Na prática:  
- `dude` é o nome da variável que estamos criando  
- `250` e `200` são as coordenadas X e Y na tela  
- `"dude"` é o nome do sprite (não vai ser importante nesta lição)

Tente colocar o personagem! Você consegue vê-lo na tela?

{{% notice note %}}

1. Para o personagem aparecer, o `dude` no `create()` **PRECISA** ser criado **depois** do plano de fundo. Isso porque o código é lido de cima para baixo, então, se o personagem for colocado antes do fundo, o fundo vai cobrir ele.  
2. O personagem aparece olhando para a esquerda porque, por padrão, spritesheets começam mostrando a primeira imagem da sequência — e, no caso do nosso "dude", ele está virado para a esquerda.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Abrir Replit</a>
