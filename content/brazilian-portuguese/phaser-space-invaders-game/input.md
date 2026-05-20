---
title: "Ativando Entradas do Usuário"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## Entradas do Usuário

As entradas (inputs) são essenciais porque, sem o jogador usar controles para interagir, nosso jogo não seria realmente um jogo.  
Embora o **Phaser** suporte vários tipos de entradas, vamos ver três que você vai usar no jogo **Space Invaders**.

---

## Setas do Teclado

Vamos começar com um dos controles mais importantes: as setas do teclado.  
Primeiro, vamos criar uma variável que detecta quando o jogador pressiona alguma seta.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

Para usar essa variável, você pode escolher entre 4 verificações booleanas:

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

Cada uma dessas verificações será **true** se a tecla correspondente estiver pressionada, e **false** se não estiver.

---

## Barra de Espaço

Para adicionar a entrada da barra de espaço, o processo é bem parecido com o das setas.  
Primeiro criamos uma variável que detecta quando a barra de espaço é pressionada:

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Depois, usamos uma verificação booleana para checar se o botão foi pressionado:

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

---

## Clique Único

Você também pode seguir o mesmo processo usado para as setas e a barra de espaço para detectar cliques, mas vamos usar um método um pouco diferente aqui, porque é algo que provavelmente você vai usar no Space Invaders.

```javascript
this.input.once("pointerdown", this.restart, this);
```

Essa linha chama o método `this.restart` quando o jogador clica.  
Porém, é um **input de uso único**, ou seja, depois que o jogador clicar uma vez, ele não funcionará novamente até ser chamado de novo no código.  

Normalmente, esse tipo de entrada é usado dentro do `update()` ou de funções auxiliares, e não no `create()`.
