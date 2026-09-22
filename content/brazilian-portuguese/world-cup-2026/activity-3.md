---
title: "Atividade 3: Decida o Campeão"
date: 2026-09-15
draft: false
weight: 5
---

## O apito final

A partida terminou, mas o programa ainda precisa decidir qual mensagem exibir.

Uma **decisão `if`/`else`** permite que um programa escolha entre dois caminhos:

- `if` executa o código indentado quando a condição é verdadeira.
- `else` executa o código indentado quando a condição é falsa.

O símbolo `>` significa "é maior que."

```python
if team_goals > opponent_goals:
    print("Nós vencemos!")
else:
    print("O oponente venceu.")
```

## Código inicial

Use esta versão completa do programa da partida. Você pode manter os detalhes do time e os anúncios do intervalo que personalizou anteriormente.

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "azul"

team_goals = 3
opponent_goals = 2

print(f"Bem-vindo à final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} lidera o {team_name} ao campo.")
print(f"Placar: {team_name} {team_goals} - {opponent_goals} {opponent_name}")

if team_goals > opponent_goals:
    print(f"{team_name} é campeão do torneio!")
    print(f"{captain_name} ergue a taça enquanto a torcida comemora!")
else:
    print(f"{opponent_name} é o campeão do torneio.")
    print(f"{team_name} agradece seus torcedores após um ótimo campeonato.")
```

Execute o programa com `team_goals` maior que `opponent_goals`. Em seguida, troque os placares e execute novamente. Você deverá ver um final diferente.

{{% notice warning %}}
Os quatro espaços antes de cada `print()` indentado são importantes. Eles indicam ao Python quais instruções pertencem ao `if` e quais pertencem ao `else`.
{{% /notice %}}

## Desafio: crie o final do seu campeonato

Personalize os dois possíveis finais:

1. No caminho do `if`, inclua o nome do seu time, capitão e uma celebração pela vitória.
2. No caminho do `else`, inclua o nome do oponente e uma mensagem de incentivo para o seu time.
3. Teste os dois caminhos alterando os placares.

Quando ambos os finais funcionarem, seu programa da partida estará pronto para o apito final!

{{% notice tip %}}
Use pelo menos uma f-string em cada caminho. Seu time vencerá apenas quando `team_goals > opponent_goals` for verdadeiro.
{{% /notice %}}