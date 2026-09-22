---
title: "Copa do Mundo 2026 - Gabarito"
date: 2026-09-15
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas são soluções de exemplo. Os estudantes devem ser incentivados a inventar os próprios detalhes do time e mensagens dos comentaristas.
{{% /notice %}}

### Atividade 1: Construa a Ficha do Time

**Desafio:** Personalize o nome do time, adversário, capitão e cor do uniforme.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

print("Final do campeonato")
print("Time da casa:", team_name)
print("Time visitante:", opponent_name)
print("Capitão:", captain_name)
print("Cor do uniforme:", jersey_color)
```

Resultado esperado:

```text
Final do campeonato
Time da casa: Lightning FC
Time visitante: Mountain Stars
Capitão: Jordan
Cor do uniforme: green
```

### Atividade 2: Relate a Partida

**Desafio:** Adicione um anúncio do intervalo e o placar atual usando f-strings.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 2
opponent_goals = 1

print(f"Bem-vindos à final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera o {team_name} em direção ao campo.")
print(f"O {team_name} está vestindo {jersey_color}.")
print(f"Placar: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
print(f"Intervalo! {team_name} e {opponent_name} voltam para os vestiários.")
print(f"O placar do intervalo é {team_goals} a {opponent_goals}.")
```

Os estudantes podem usar diferentes formulações, desde que ambas as novas linhas sejam f-strings e incluam as variáveis solicitadas.

### Atividade 3: Decida o Campeão

**Desafio:** Personalize e teste ambos os resultados finais.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 3
opponent_goals = 2

print(f"Bem-vindos à final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera o {team_name} em direção ao campo.")
print(f"Placar: {team_name} {team_goals} - {opponent_goals} {opponent_name}")

if team_goals > opponent_goals:
    print(f"O {team_name} vence! Confetes enchem o estádio.")
    print(f"O capitão {captain_name} ergue a taça junto com todo o time!")
else:
    print(f"O {opponent_name} vence o campeonato.")
    print(f"O {team_name} jogou com coragem e voltará ainda mais forte!")
```

Teste o caminho da vitória com:

```python
team_goals = 3
opponent_goals = 2
```

Teste o outro caminho com:

```python
team_goals = 1
opponent_goals = 2
```

O workshop usa intencionalmente dois resultados finais. Um placar empatado pode ser discutido como extensão após os estudantes se sentirem confortáveis com `if`/`else`.