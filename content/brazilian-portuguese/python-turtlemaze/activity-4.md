---
title: "Atividade 4 - Dirigir Nuvo Pelo Labirinto"
date: 2025-10-13T11:00:00-04:00
weight: 4
draft: false
---

Nuvo está empolgado! 🐢  
Ele finalmente tem um labirinto para explorar — mas antes de enviá-lo para encontrar a Nuvi, vamos ajudá-lo a praticar como se mover com segurança.  

Nesta atividade, você vai **controlar manualmente o Nuvo** por algumas curvas usando comandos básicos da Tartaruga.  
É como controlar remotamente o seu amigo tartaruga com código! 🎮  

---

### Passo 1: Importe seus módulos e configure o cenário 🎨

Vamos reutilizar nossos arquivos de labirinto e auxiliares de antes para que Nuvo possa se mover dentro do labirinto.

```python
import turtle
import turtlehelper as th
import maze
```

Depois, desenhe o labirinto e crie o Nuvo!

```python
# Desenhar as paredes do labirinto
maze.draw_maze()

# Criar Nuvo (nosso explorador)
nuvo = th.create_turtle_object("purple", 4, "turtle", 3)
th.set_cursor(nuvo, -20, 120)   # Comece perto da entrada do labirinto
```

### Passo 1: Mova Nuvo para frente 🐾

Tente mover o Nuvo um pouco para frente dentro do labirinto.

```python
nuvo.forward(50)
```

Toda vez que você chama forward(50), o Nuvo movimenta 50 passos para frente.  
Você pode experimentar com diferentes números — passos menores são mais seguros ao navegar por espaços apertados!

### Passo 2: Aprenda a virar à esquerda e à direita 🔄

Para fazer o Nuvo virar, use:

```python
nuvo.left(90)   # vire à esquerda
nuvo.right(90)  # vire à direita
```

Cada comando faz o Nuvo girar pelo número de graus que você indicar — 90 graus significa uma curva perfeita.

Experimente este pequeno trajeto de teste:

```python
nuvo.forward(50)
nuvo.left(90)
nuvo.forward(50)
nuvo.right(90)
nuvo.forward(50)
```

O Nuvo se move como esperado?  
Se não, ajuste os ângulos — por exemplo, use 45 ou 120 para fazer curvas diagonais ou em triângulo.

### Passo 3: Combine movimentos em um caminho simples 🚶‍♂️

Vamos guiar o Nuvo por uma parte do labirinto.  
Você pode escrever uma mini rota para ele:

```python
# Um teste personalizado de direção para o Nuvo
nuvo.forward(100)
nuvo.right(90)
nuvo.forward(80)
nuvo.left(90)
nuvo.forward(60)
```

Cada etapa é como uma instrução de direção:

1. "Vá em frente até aqui"
2. "Vire nessa direção"
3. "Agora continue se movendo"

### Passo 4: Esconda ou reinicie o Nuvo caso ele fique preso 🔁

Se o Nuvo bater em uma parede ou sair do caminho — sem problemas!  
Você pode levantá-lo e começar novamente.

```python
th.set_cursor(nuvo, 10, -135)
```

🌟 Desafio Para Você

🧩 Tente criar sua própria rota de aventura!

1. Você consegue fazer o Nuvo traçar um quadrado dentro do labirinto?
2. O que acontece se você virar 45 graus em vez de 90?
3. Você consegue guiar Nuvo da parte inferior esquerda até a parte superior direita?

<p style="text-align: center;"> <iframe src="https://codebunga.com/embed/yuftctjd" title="Atividade 4 - Dirigir Nuvo Pelo Labirinto - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

Bravo, Motorista de Tartaruga! 🚗💨  
Você acabou de aprender a controlar direção, distância e curvas — todas as ferramentas que precisa para navegar em qualquer labirinto.

Na próxima atividade, vamos ensinar Nuvo a encontrar a Nuvi!!