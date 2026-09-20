---
title: "JSappyBird - Gabarito de Respostas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este gabarito cobre todo o código que os alunos adicionam para construir o jogo Flappy Bird. Cada etapa adiciona uma linha específica de JavaScript a um arquivo específico no projeto Replit. O workshop é guiado (os alunos são instruídos sobre o que digitar), mas este documento consolida tudo em uma referência para o professor.
{{% /notice %}}

## Adições de Código Passo a Passo

### 1. Carregar a imagem do pássaro

**Arquivo:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. Alterar o texto da tela inicial

**Arquivo:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Pressione Espaço para Iniciar", textOptions);
```

### 3. Fazer o pássaro pular ao pressionar a barra de espaço

**Arquivo:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. Adicionar gravidade

**Arquivo:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. Adicionar força de salto (velocidade)

**Arquivo:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**Pergunta comum dos alunos:** "Como faço o pássaro saltar mais alto ou mais baixo?"

Altere o número em `bird.body.velocity.y`. Mais negativo = salto mais alto. Experimente `-200` para um salto pequeno ou `-500` para um salto maior.
{{% /notice %}}

### 6. Adicionar rotação do pássaro ao cair

**Arquivo:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. Adicionar som ao pular

**Arquivo:** `create-game.js`

```javascript
jumpSound.play();
```

## Respostas da Atividade Extra

### Fazer o pássaro pular para frente

**Arquivo:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### Perguntas de exploração bônus

| Pergunta | O que acontece |
|----------|----------------|
| Tornar a gravidade mais forte? | `bird.body.gravity.y = 1500;` — o pássaro cai mais rápido, tornando o jogo mais difícil |
| Tornar a gravidade negativa? | `bird.body.gravity.y = -900;` — o pássaro flutua para cima em vez de cair |
| Fazer o pássaro girar mais rápido? | Altere `bird.angle += 1` para `bird.angle += 5` |
| Remover o `if` ao redor da rotação? | O pássaro gira infinitamente além dos 50 graus |

## Código das Atividades (Versão Avançada)

O workshop também inclui três atividades de codificação que ensinam variáveis, condicionais, funções e laços:

### Atividade 1: Manter o pássaro na tela (condicional)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // o pássaro está na tela - permite movimento
}
```

### Atividade 2: Função de salto

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### Atividade 3: Adicionar obstáculos com uma lacuna

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**Como funciona:** O laço `for` cria 8 obstáculos de canos. A variável `hole` escolhe uma posição aleatória (1-6) para pular, criando uma lacuna para o pássaro passar.

## Resumo da Lógica Completa do Jogo

| Funcionalidade | Código | Arquivo |
|----------------|--------|---------|
| Carregar sprite do pássaro | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| Tela inicial | `game.add.text(0, 0, "Pressione Espaço para Iniciar", textOptions)` | start-screen.js |
| Pulo com a barra de espaço | `spaceKey.onDown.add(jump, this)` | create-game.js |
| Gravidade | `bird.body.gravity.y = 900` | create-game.js |
| Velocidade de salto | `bird.body.velocity.y = -350` | create-game.js |
| Rotação ao cair | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| Som ao pular | `jumpSound.play()` | create-game.js |  