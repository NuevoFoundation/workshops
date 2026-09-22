---
title: "Atividade 2: Relate a Partida"
date: 2026-09-15
draft: false
weight: 4
---

## Transforme dados em um comentário

A partida começou! Seu programa já lembra as informações das equipes. Agora ele combinará variáveis com texto para criar anúncios sobre a partida.

Uma **f-string** é uma string formatada. Coloque a letra `f` antes da abertura das aspas e, em seguida, insira uma variável dentro de chaves `{ }`. O Python substitui as chaves e o nome da variável pelo valor armazenado.

```python
print(f"{captain_name} lidera o {team_name} para o campo!")
```

## Código inicial

Mantenha os valores personalizados da Atividade 1. Adicione variáveis de pontuação e anúncios formatados:

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "azul"

team_goals = 2
opponent_goals = 1

print(f"Bem-vindos à final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera o {team_name} para o campo.")
print(f"{team_name} está jogando com o uniforme {jersey_color}.")
print(f"Placar: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
```

Execute o programa. Cada par de chaves deve ser substituído por um nome, cor ou número.

Os números não precisam de aspas:

```python
team_goals = 2
```

Se você escrever `"2"`, o Python tratará isso como texto, e não como um número.

## Desafio: escreva uma atualização do intervalo

Adicione duas novas linhas `print()`:

1. Anuncie que o primeiro tempo terminou e inclua os nomes das duas equipes.
2. Informe ao público o placar atual, incluindo ambas as variáveis de pontuação.

Suas palavras exatas podem ser diferentes. Faça o anúncio soar como um comentarista de verdade, depois mude um dos placares e execute o programa novamente.

{{% notice tip %}}
Comece cada linha com `print(f"` e coloque cada variável dentro de chaves, como `{team_goals}`.
{{% /notice %}}