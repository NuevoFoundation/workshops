---
title: "Escolha Sua Própria Aventura - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este workshop é criativo — a história de cada aluno será diferente! Este gabarito mostra um exemplo completo funcionando baseado na história de Nuvi apresentada no workshop, além de um modelo de código que os professores podem usar para ajudar os alunos a estruturarem suas próprias aventuras.
{{% /notice %}}

## Conceitos-Chave Utilizados

| Conceito            | Código Python        | Propósito na História          |
|---------------------|----------------------|---------------------------------|
| Imprimir texto      | `print("texto")`     | Contar a história ao leitor    |
| Obter input do usuário | `input("pergunta")` | Permitir que o leitor faça escolhas |
| Armazenar em variável | `choice = input(...)` | Lembrar o que o leitor escolheu |
| Tomar decisões      | `if` / `else`        | Alterar a história com base na escolha |

## Aventura Completa de Nuvi

Este é um exemplo funcional baseado no storyboard de Nuvi apresentado no workshop:

```python
# Jogo de Escolha Sua Própria Aventura de Nuvi

print("=" * 40)
print("Aventura de Nuvi!")
print("=" * 40)
print()
print("Nuvi acabou de sair da prática de Robótica na escola.")
print("É hora de ir para casa!")
print()

# Escolha 1: Como voltar para casa
choice1 = input("Nuvi deve ir caminhando ou de bicicleta para casa? Digite 'caminhar' ou 'bicicleta': ")

if choice1 == "caminhar":
    print()
    print("Nuvi decide ir caminhando para casa.")
    print("No caminho, Nuvi encontra um filhote de cachorro fofo!")
    print("Nuvi faz carinho no cachorro e continua a caminhar.")
    print("Nuvi chega em casa sentindo-se feliz.")
elif choice1 == "bicicleta":
    print()
    print("Nuvi pega a bicicleta e pedala para casa.")
    print("O vento é agradável! Nuvi pedala muito rápido.")
    print("Nuvi chega em casa em tempo recorde!")
else:
    print()
    print("Nuvi não conseguiu decidir, então ela acabou indo caminhando para casa.")

print()
print("Nuvi finalmente está em casa! Alguns amigos estão do lado de fora.")
print()

# Escolha 2: O que fazer com os amigos
choice2 = input("Nuvi deve jogar futebol ou nadar? Digite 'futebol' ou 'nadar': ")

if choice2 == "futebol":
    print()
    print("Nuvi e os amigos jogam futebol no parque!")
    print("Nuvi marca o gol da vitória!")
    print("Todos comemoram! Que dia incrível!")
elif choice2 == "nadar":
    print()
    print("Nuvi e os amigos vão para a piscina!")
    print("Eles se divertem muito jogando água uns nos outros.")
    print("Nuvi dá um salto estilo 'bomba'! SPLASH!")
else:
    print()
    print("Nuvi decide apenas conversar e relaxar com os amigos.")

print()
print("Que dia incrível! Fim.")
```

**Saída de exemplo (se o usuário escolher "caminhar" e depois "futebol"):**
```
========================================
Aventura de Nuvi!
========================================

Nuvi acabou de sair da prática de Robótica na escola.
É hora de ir para casa!

Nuvi deve ir caminhando ou de bicicleta para casa? Digite 'caminhar' ou 'bicicleta': caminhar

Nuvi decide ir caminhando para casa.
No caminho, Nuvi encontra um filhote de cachorro fofo!
Nuvi faz carinho no cachorro e continua a caminhar.
Nuvi chega em casa sentindo-se feliz.

Nuvi finalmente está em casa! Alguns amigos estão do lado de fora.

Nuvi deve jogar futebol ou nadar? Digite 'futebol' ou 'nadar': futebol

Nuvi e os amigos jogam futebol no parque!
Nuvi marca o gol da vitória!
Todos comemoram! Que dia incrível!

Que dia incrível! Fim.
```

## Modelo de Código para Alunos

Os alunos podem usar este modelo como ponto de partida para suas próprias histórias:

```python
# Meu Jogo de Escolha Sua Própria Aventura
# Substitua o texto entre aspas pela sua própria história!

print("Bem-vindo ao meu jogo de aventura!")
print()

# Mostre o início da sua história
print("Você está [descreva o cenário].")
print("[Algo acontece para iniciar a aventura].")
print()

# Primeira escolha
choice1 = input("[Peça ao leitor para fazer uma escolha]: ")

if choice1 == "[opção 1]":
    print("[O que acontece se escolher a opção 1]")
elif choice1 == "[opção 2]":
    print("[O que acontece se escolher a opção 2]")
else:
    print("[O que acontece se digitar algo inesperado]")

print()

# Segunda escolha
choice2 = input("[Peça ao leitor para fazer outra escolha]: ")

if choice2 == "[opção A]":
    print("[O que acontece se escolher a opção A]")
elif choice2 == "[opção B]":
    print("[O que acontece se escolher a opção B]")
else:
    print("[O que acontece se digitar algo inesperado]")

print()
print("Fim!")
```

{{% notice tip %}}
**Problemas comuns dos alunos e soluções:**

**"Minha declaração if nunca corresponde!"**
- Certifique-se de que a comparação seja exatamente igual ao que o usuário digitar. `"Caminhar"` não é igual a `"caminhar"`. Dica: use `.lower()` para tratar capitalização: `if choice1.lower() == "caminhar":`

**"Como adiciono mais escolhas?"**
- Você pode incluir declarações if/else aninhadas para caminhos ramificados ou adicionar mais opções `elif`. Cada escolha cria um novo ramo na história.

**"Como faço para a história ficar mais longa?"**
- Adicione mais instruções `print()` entre as escolhas para contar mais da história. Também é possível incluir uma terceira ou quarta escolha usando o mesmo padrão de `input()` e `if/else`.
{{% /notice %}}

## Mapeamento do Storyboard para o Código

| Elemento do Storyboard   | Conceito de Código       |
|--------------------------|--------------------------|
| Texto da história visível ao leitor | `print("...")`         |
| Leitor faz uma decisão   | `choice = input("...")`  |
| Caminhos diferentes com base na decisão | `if` / `elif` / `else` |
| Combinar texto com variáveis | `print("Olá " + nome)` |
| Múltiplos finais         | Vários r