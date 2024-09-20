---
title: "Sala 2: O Enigma do Commit"
description: "Aprenda a fazer alterações e commitá-las no seu repositório."
difficulty: "Iniciante"
weight: 2
---

# Sala 2: O Enigma do Commit

{{< figure src="../images/room2_commit.jpg" title="Trechos de código flutuam ao redor de um terminal central, esperando para serem organizados" >}}

Ao entrar na segunda sala, trechos de código flutuam no ar. Um terminal no centro pisca com uma mensagem: "Traga ordem ao caos. Commite suas alterações para prosseguir."

## Sua Missão

1. Crie um novo arquivo chamado `solution.md` em seu repositório local.
2. Adicione o código secreto da Sala 1 a este arquivo.
3. Estagie e commite suas alterações.

## Instruções

1. No seu terminal, certifique-se de estar no diretório `escape-room`.
2. Crie o arquivo e adicione o código:

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Estagie e commite suas alterações:

```
git add solution.md
git commit -m "Adicionar solução para Sala 1"
```

{{< notice warning >}}
**Dica:** Sempre escreva mensagens de commit claras e descritivas. Elas ajudam você e outros a entender o histórico do seu projeto.
{{< /notice >}}

{{< expand "Quiz: Teste Seus Conhecimentos" >}}

**Pergunta 1: Qual comando você usa para estagiar alterações?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Pergunta 2: O que o parâmetro -m faz no comando commit?**

{{< button href="#" >}}Marca o commit como importante{{< /button >}}
{{< button href="#" >}}Mescla o commit imediatamente{{< /button >}}
{{< button href="#" >}}Permite que você adicione uma mensagem de commit{{< /button >}}

{{< /expand >}}

Quando você tiver feito seu commit, insira a mensagem de commit que você usou:

[Campo de entrada para mensagem de commit]

{{< notice info >}}
Nota: O campo de entrada real e a funcionalidade de criptografia precisariam ser implementados separadamente, pois o Hugo não oferece isso por padrão.
{{< /notice >}}