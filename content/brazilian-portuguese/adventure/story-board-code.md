---
title: "Seção 2: Transferindo o Story Board para o Código!"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 3
difficulty: Intermediate
prereq: "Noções básicas de Python - Escrever no Console (Print), Ler do Console, Strings, Variáveis, Declarações condicionais"
---

É hora de abrir o Trinket. Agora é hora de criar, vamos ser criativos!

Você pode continuar trabalhando na linha da história de Nuvi:

<iframe src="https://trinket.io/python/3393e67d683a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Você pode trabalhar em um modelo para um jogo de Escolha Sua Própria Aventura:

<iframe src="https://trinket.io/python/e8911d860986" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Ou você pode começar do zero e fazer do seu jeito! Basta ir ao Trinket e começar a contar histórias!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

# Código do Storyboard

Vamos criar um jogo de aventura onde você pode escolher o que acontece a seguir na história. Aqui está um exemplo de como podemos começar:

```python
# Bem-vindo ao jogo de aventura!
print("Você está em uma floresta escura. Há dois caminhos à sua frente.")
print("Você escolhe o caminho da esquerda ou da direita?")

# Obter a escolha do jogador
escolha = input("Digite 'esquerda' ou 'direita': ").lower()

if escolha == "esquerda":
    print("Você encontra um rio. Você decide nadar ou construir uma jangada?")
    # Continuar a história...
elif escolha == "direita":
    print("Você encontra uma caverna. Você entra ou volta?")
    # Continuar a história...
else:
    print("Escolha inválida. O jogo terminou.")
```

## Como funciona?

1. O jogador recebe uma escolha.
2. Dependendo da escolha, a história continua em diferentes direções.
3. Podemos adicionar mais escolhas e resultados para tornar o jogo mais interessante.

Experimente modificar o código acima para criar sua própria história!