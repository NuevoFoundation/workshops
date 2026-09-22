---
title: "Atividade 3 - Desenhando as Paredes Internas do Labirinto"
date: 2025-10-13T10:30:00-04:00
weight: 3
draft: false
---

Nuvo e Nuvi estão prontos para começar sua aventura! 🐢✨  
Mas antes de explorar, eles precisam de um **labirinto** — cheio de curvas e reviravoltas.  
Nesta atividade, vamos desenhar as **paredes internas** do labirinto usando Python Turtle.

---

### Passo 1: Adicione os caminhos internos do labirinto 🌀

Vamos adicionar algumas passagens para Nuvo explorar.  
Você pode continuar usando `set_cursor()` para pular para novos pontos de início sem desenhar linhas indesejadas.

```python
th.set_cursor(maze_drawer, -120, 70)
maze_drawer.left(90)
maze_drawer.forward(30)
maze_drawer.right(90)
maze_drawer.forward(30)
maze_drawer.left(90)
maze_drawer.forward(150)
```

{{% notice info %}}

Sempre que quiser desenhar uma nova parede em outro lugar,  
basta mover a tartaruga usando `set_cursor()` — sem precisar começar do zero!

{{% /notice %}}

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/a4i3d3pk" title="Atividade 3 - Desenhando as Paredes Internas do Labirinto - Editor Codebunga 1" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

#### 🌟 Desafio para Você

Paredes não são apenas barreiras — elas são convites para explorar. Adicione curvas, reviravoltas e caminhos escondidos para tornar cada passo uma descoberta emocionante.

Aqui está um exemplo de labirinto para sua referência:

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/3s58emjh" title="Atividade 3 - Desenhando as Paredes Internas do Labirinto - Editor Codebunga 2" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

### Passo 2: É hora de esconder Nuvi no labirinto

Vamos esconder a Nuvi dentro do labirinto para que Nuvo possa procurá-la.

```python
nuvi = th.create_turtle_object("green",5,"turtle",1)
th.set_cursor(nuvi,10,-135)
nuvi.right(90)
nuvi.right(90)
```

Trabalho incrível, Mestre do Labirinto! 🏆  
Você acabou de criar o labirinto para a aventura.

Na Atividade 4, Nuvo começará a se movimentar pelo labirinto e você o guiará até Nuvi usando lógica e curvas!