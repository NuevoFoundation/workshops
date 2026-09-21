```markdown
---
title: "Atividade 1 - Conheça o Nuvo o Explorador"
date: 2025-10-12T12:00:00-04:00
weight: 1
draft: false
---

Bem-vindo, jovem explorador! 🐢✨ Hoje, você vai conhecer o **Nuvo**, uma tartaruga curiosa que adora aventuras. Antes que Nuvo possa começar a explorar o prado e encontrar Nuvi, precisamos ajudá-lo a **aparecer na tela** usando o módulo **turtle** do Python.

<img src="../media/nuvo.png" alt="Nuvo the turtle" width="25%" />

Aqui está o que faremos nesta atividade:

1. Importar a biblioteca turtle e o nosso módulo auxiliar.
2. Criar o Nuvo, a tartaruga.
3. Fazer com que ele apareça na tela em uma posição inicial.
4. Manter a janela aberta para vê-lo.

Antes que Nuvo possa explorar o prado e o labirinto, ele precisa de algumas **ferramentas úteis**. 🐢✨  
Em Python, podemos criar **funções auxiliares** — pequenas instruções que tornam a codificação mais fácil e rápida.

Hoje, aprenderemos **duas ferramentas mágicas auxiliares** do `turtlehelper.py`:

1. **`create_turtle_object()`** — cria uma nova tartaruga rapidamente.
2. **`set_cursor()`** — move uma tartaruga para qualquer posição na tela.

---

### 🌟 Passo 1: A função `set_cursor()`

Esta função **move uma tartaruga para qualquer posição** na tela.

```python
def set_cursor(t, x, y, isPenDown=True):
    t.penup()            # Levanta a caneta para não desenhar
    t.goto(x, y)         # Move a tartaruga para (x, y)
    if isPenDown:        # Se True, abaixa a caneta para desenhar
        t.pendown()
    return
```

{{% notice info %}}

🔍 Explicação

1. t.penup() – levanta a caneta da tartaruga para que ela não desenhe uma linha enquanto se move.
2. t.goto(x, y) – move a tartaruga para as coordenadas (x, y) na tela. Os `x` e `y` no método `t.goto()` são as coordenadas da tartaruga. Queremos mudar as coordenadas de `(0, 0)`, que é o centro da imagem, para um lugar um pouco mais distante para que o Nuvo possa navegar no labirinto, e o Nuvi possa se esconder dentro dele.
3. if isPenDown: – verifica se queremos que a tartaruga comece a desenhar novamente.
4. t.pendown() – abaixa a caneta para desenhar.
5. return – encerra a função (opcional, mas uma boa prática).

{{% /notice %}}

### 🌟 Passo 2: A função create_turtle_object()

Esta função cria uma nova tartaruga com configurações personalizadas como cor, tamanho, forma e velocidade.

```python
def create_turtle_object(color_name=None, size=None, turtle_shape=None, speed=None):
    t = turtle.Turtle()       # Cria uma nova tartaruga
    if color_name:
        t.color(color_name)   # Define a cor da caneta
    if size:
        t.pensize(size)       # Define a espessura da caneta
    if turtle_shape:
        t.shape(turtle_shape) # Define a forma da tartaruga (seta, tartaruga, círculo, etc.)
    if speed:
        return t
    t.speed(speed)            # Define a velocidade da tartaruga
    return t
```

{{% notice info %}}

🔍 Explicação

1. t = turtle.Turtle() – cria um novo objeto tartaruga.
2. if color_name: – define a cor da caneta, se for fornecida.
3. if size: – define a espessura das linhas.
4. if turtle_shape: – escolhe a aparência da tartaruga.
5. if speed: – define a velocidade da tartaruga.
6. return t – devolve a tartaruga para que possamos usá-la em nosso código.

{{% /notice %}}

### 🌟 Passo 3: Vamos criar uma tartaruga de texto para o Nuvo mostrar mensagens

```python
# Criar o objeto de texto do Nuvo (para mensagens posteriores)
text = th.create_turtle_object("black", 4, "arrow")
text.hideturtle()  # Ocultar o ícone da tartaruga
th.set_cursor(text, 0, 160, False)
text.write("Bem-vindo à História de Nuvo e Nuvi", align="center", font=("Comic Sans MS", 14, "bold"))
th.set_cursor(text, 0, 140, False)
text.write("A Grande Aventura do Labirinto", align="center", font=("Comic Sans MS", 14, "bold"))
```

{{% notice info %}}

🔍 Explicação

1. text.hideturtle() – oculta a tartaruga para que apenas o texto seja visível.
2. text.write() – exibe uma mensagem na tela.
3. set_cursor posiciona o texto no local correto.
4. align="center" – posiciona o texto no centro da localização da tartaruga. Outras opções: "left" ou "right".
5. font=("Comic Sans MS", 14, "bold") – controla o estilo do texto: "Comic Sans MS" → tipo de fonte, 14 → tamanho da fonte e "bold" → peso da fonte (também pode usar "normal" ou "italic").

{{% /notice %}}

{{% notice tip %}}
💡 Dica do Nuvo:  
As funções auxiliares são como dar à sua tartaruga uma mochila mágica — ela carrega todas as instruções para que seu código permaneça organizado e fácil.

Experimente alterar o texto, o tamanho da fonte ou o alinhamento para ver como fica.
{{% /notice %}}

### 🌟 Passo 4: Criando Nuvo & Nuvi

Vamos dar vida aos nossos heróis usando a função auxiliar que fizemos anteriormente!

```python
# Criar nossos amigos tartarugas
nuvo = th.create_turtle_object("green", 3, "turtle", 6)
nuvi = th.create_turtle_object("purple", 3, "turtle", 6)
```

{{% notice info %}}

🔍 Explicação

1. "green" e "purple" – definem suas cores.
2. 3 – espessura da linha (tamanho da caneta).
3. "turtle" – dá a eles um formato de tartaruga muito fofo!
4. 6 – define a velocidade de movimento (números maiores movem mais rápido).

{{%