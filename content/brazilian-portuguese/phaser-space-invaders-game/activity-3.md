---
title: "Atividade 3 - Adicionando Controle de Teclado para Mover o Jogador"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 10
---

Agora, vamos permitir que nossa nave se mova quando o jogador usar o teclado.  
O primeiro passo é criar um atributo `cursor` no método `create()` dentro de `Scene2.js`:

<img src="../media/4/create_cursor_key.png" alt="create_cursor_key" style="width:950px;"/>

---

A forma mais eficiente de criar o movimento é ter uma função auxiliar que use o atributo `cursor` para verificar se alguma tecla foi pressionada.  
Essa função já está criada para você e se chama `movePlayer()`:

<img src="../media/4/move_player_function.png" alt="move_player_function" style="width:950px;"/>

---

Usamos essa função para mover o jogador, e a chamamos dentro do método `update()` para verificar o movimento a cada ciclo de atualização (isso também já foi feito para você).

Agora, vá até o método `movePlayer()` e escreva o código que verifica as teclas pressionadas e move o jogador de acordo.

---

{{% notice hint %}}
* Recomendamos uma velocidade de movimento de **200**  
* Use instruções `if`  
* Depois de criar os `if`, você pode perceber que o jogador continua se movendo mesmo após soltar a tecla.  
  Para corrigir isso, pense: quando nenhuma tecla está sendo pressionada, o que a nave deve fazer?
{{% /notice %}}

---

Agora teste! Você pode notar algo: o jogador consegue sair da tela, assim:

<img src="../media/4/player-off.gif" alt="bounds" style="width:100px;"/>

Isso acontece porque o Phaser usa um **canvas infinito**, que existe além da área visível da tela.  
Podemos corrigir isso restringindo o jogador à tela com uma única linha de código:

```javascript
this.player.body.setCollideWorldBounds(true); // impede o jogador de sair da tela
```

Encontre o método `create()` da **Scene 2**:

<img src="../media/4/set_bound.png" alt="set_bound" style="width:950px;"/>

---

Agora que o jogador está limitado à tela, você poderá mover a nave assim:

<img src="../media/4/player-move-example.gif" alt="animation spaceship and background" style="width:300px;"/>
