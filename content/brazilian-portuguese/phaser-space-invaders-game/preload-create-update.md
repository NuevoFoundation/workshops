---
title: "Preload, Create e Update"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## Os métodos Preload, Create e Update

Agora vamos olhar para as nossas **scenes** (cenas), que vão guardar o código do nosso jogo.  
Se você rolar a página, vai ver que cada cena tem um **constructor** (porque ela é uma classe) e também três métodos importantes: `preload()`, `create()` e `update()`.  
Na **Scene 2**, existem também várias funções auxiliares, mas hoje vamos focar nesses três métodos, porque eles são essenciais para entender o **Phaser**.

Do jeito que configuramos as cenas:  
- `preload()` e `create()` estão na **Scene 1**  
- `create()` e `update()` estão na **Scene 2**  

Essas três funções são as ferramentas principais de qualquer jogo feito com Phaser.

---

## Preload()

Vamos começar pelo `preload()`.  
Esse método carrega coisas para dentro do nosso jogo: imagens, variáveis e praticamente qualquer outra coisa que você queira usar.  
Mas atenção: as coisas carregadas no `preload()` **ainda não aparecem nem funcionam no jogo** até você usar elas depois.  

Você pode imaginar o `preload()` como um **depósito** onde colocamos tudo o que o jogo vai precisar, antes mesmo dele começar.  
A maioria dos elementos precisa estar no `preload()` antes de serem usados no resto do jogo.

---

## Create()

O `create()` é bem direto: ele roda **uma única vez** no começo do jogo.  
Aqui colocamos no jogo todas as coisas que carregamos no `preload()` e também criamos objetos como animações, detectores de colisão, textos, grupos e muito mais.

---

## Update()

Por último, temos o `update()`.  
Enquanto `preload()` e `create()` rodam só no começo do jogo, o `update()` **roda o tempo todo**.

{{% notice info %}}
Quando você joga videogame, talvez já tenha visto o termo **FPS**.  
Isso significa "frames por segundo" – ou seja, quantas vezes uma nova imagem (frame) aparece na tela por segundo.  
Cada frame é basicamente uma chamada para o método `update()`.  
O Phaser normalmente roda a **60 FPS**, o que quer dizer que o `update()` é chamado 60 vezes por segundo!
{{% /notice %}}

O `update()` serve para várias coisas:  
- **Movimento**: se pedirmos para um objeto se mover um pouquinho dentro do `update()`, o jogo vai mostrar um movimento suave, porque o método é chamado tão rápido que a gente não percebe as pausas.  
- **Verificação constante**: podemos usar `update()` para ficar checando se algo aconteceu. Por exemplo, se quisermos que o jogador possa atirar quando a barra de espaço for apertada, podemos colocar um `if` no `update()` para verificar isso o tempo todo.
