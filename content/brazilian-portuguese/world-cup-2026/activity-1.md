---
title: "Atividade 1: Construindo a Ficha do Time"
date: 2026-09-16
draft: false
weight: 3
---

## Começando: conheça os finalistas

Você já viu um pouco de Python, então trate esta atividade como uma breve revisão. Antes de uma partida começar, o locutor precisa acessar os nomes dos times e o capitão. Seu programa irá armazenar esses detalhes em **variáveis**.

Revisar variáveis agora fornece informações que as próximas atividades podem reutilizar. Na Atividade 2, você colocará essas variáveis dentro de mensagens formatadas sobre o jogo e adicionará variáveis de pontuação. Na Atividade 3, uma decisão com `if`/`else` irá comparar essas pontuações para anunciar o vencedor.

Como lembrete, uma **variável** é um lugar nomeado onde um programa armazena informações. O valor à direita do `=` é armazenado na variável nomeada à esquerda.

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"
```

Valores de texto são cercados por aspas. Python chama um pedaço de texto de **string**.

## Código inicial

Substitua o conteúdo de `world_cup_2026.py` com este programa funcional:

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"

print("Final do Campeonato")
print("Time da casa:", team_name)
print("Time visitante:", opponent_name)
print("Capitão:", captain_name)
print("Cor do uniforme:", jersey_color)
```

Execute o arquivo. Você deverá ver:

```text
Final do Campeonato
Time da casa: Nuvi United
Time visitante: Comet City
Capitão: Maya
Cor do uniforme: blue
```

A função `print()` exibe informações. Uma **função** é uma instrução nomeada que realiza um trabalho.

## Desafio: personalize seu time

Altere as quatro variáveis para que o programa introduza:

1. um nome de time inventado por você;  
2. um adversário inventado por você;  
3. um capitão escolhido por você; e  
4. a cor do uniforme do seu time.  

Execute o programa e confira se todos os quatro novos valores aparecem. Mantenha essas variáveis porque as próximas atividades as utilizarão.

{{% notice tip %}}
Altere apenas o texto entre aspas. Mantenha os nomes das variáveis e o sinal `=`.
{{% /notice %}}