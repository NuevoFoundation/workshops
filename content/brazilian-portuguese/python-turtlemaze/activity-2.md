---
title: "Atividade 2 - Desenhando as Paredes do Grande Labirinto"
date: 2025-10-13T10:30:00-04:00
weight: 2
draft: false
---

Nuvo e Nuvi estão prontos para começar sua aventura! 🐢✨  
Mas antes de eles explorarem, eles precisam de um **labirinto** — cheio de curvas e voltas.  
Nesta atividade, vamos ajudar Nuvo a desenhar as **paredes** do labirinto usando Python Turtle.

---

### Etapa 1: Importe seus auxiliares e crie um desenhista de labirinto 🧰

Vamos usar novamente nosso módulo auxiliar especial para posicionar a tartaruga facilmente e manter nosso código organizado.

```python
import turtle
import turtlehelper as th
```

Agora, vamos criar uma nova tartaruga que desenhará as paredes do labirinto.

```python
# Crie uma tartaruga para desenhar o labirinto
maze_drawer = th.create_turtle_object("black", 3, "arrow", 0)
```

{{% notice info %}}

🔍 Explicação

1. "black" → cor das linhas do labirinto  
2. 3 → espessura da caneta  
3. "arrow" → forma que aponta para onde a tartaruga está indo  
4. 0 → velocidade de desenho mais rápida (0 é instantâneo)

{{% /notice %}}

### Etapa 2: Escolha o ponto de partida 🎯

Antes de desenhar, movemos nossa tartaruga para o lugar certo.

```python
th.set_cursor(maze_drawer, 0, 100)
```

{{% notice info %}}

🔍 Explicação

1. Isso diz à tartaruga para:  
2. levantar a caneta (para não desenhar no caminho)  
3. mover para (x = 0, y = 100)  
4. então colocar a caneta de volta no papel  

{{% /notice %}}

### Etapa 3: Comece a desenhar a parede externa 🧱

Agora o labirinto começa a tomar forma!

```python
maze_drawer.forward(150)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(300)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(110)
maze_drawer.right(90)
maze_drawer.forward(30)
```

{{% notice info %}}

🧩 O que está acontecendo aqui?

1. forward(150) → se move 150 passos para frente  
2. right(90) → vira à direita 90 graus (como um canto de um quadrado)  
3. Cada par de “avançar + virar” desenha um novo lado do labirinto.

{{% /notice %}}

### Etapa 5: Oculte o construtor e admire o labirinto 👀

```python
maze_drawer.hideturtle()
```

Agora você pode ver o contorno do labirinto claramente sem a seta no caminho.

#### 🌟 Desafio para Você

Mude a cor do labirinto para algo divertido como "brown" ou "darkgreen".

Ajuste a espessura das paredes mudando o tamanho da caneta.

Tente criar caminhos extras — você consegue fazer um atalho secreto para Nuvi?

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/8sanyhiu" title="Atividade 2 - Desenhando as Paredes do Grande Labirinto - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

Incrível trabalho, Mestre do Labirinto! 🏆  
Você acabou de criar o cenário para a aventura.

Na Atividade 3, você construirá o labirinto interno e fará Nuvi se esconder nele. Isso prepara o cenário para Nuvo começar a explorar e procurar Nuvi!