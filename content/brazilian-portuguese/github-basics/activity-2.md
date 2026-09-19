---
title: "Sala 2: O Enigma do Commit"
description: "Aprenda a fazer alterações e commit-las em seu repositório."
difficulties: ["iniciante"]
weight: 2
---

Ao entrar na segunda sala, trechos de código flutuam no ar. Um terminal no centro pisca com uma mensagem: "Traga ordem ao caos. Faça o commit das suas alterações para continuar."

## Sua Missão

1. Crie um novo arquivo chamado `solution.md` em seu repositório local.
2. Adicione o código secreto da Sala 1 a este arquivo.
3. Prepare e faça o commit das suas alterações.

## Instruções

1. No seu terminal, certifique-se de estar no diretório `escape-room`.
2. Crie o arquivo e adicione o código:

```
echo "Código Secreto: GITHUB_BASICS_101" > solution.md
```

3. Prepare e faça o commit das suas alterações:

```
git add solution.md
git commit -m "Adicionar solução para a Sala 1"
```

{{< notice warning >}}
**Dica:** Sempre escreva mensagens de commit claras e descritivas. Elas ajudam você e outros a entender o histórico do seu projeto.
{{< /notice >}}

{{< expand "Quiz: Teste Seus Conhecimentos" >}}

**Pergunta 1: Qual comando você usa para preparar alterações?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Pergunta 2: O que faz a flag -m no comando de commit?**

{{< button href="#" >}}Marca o commit como importante{{< /button >}}
{{< button href="#" >}}Faz o merge do commit imediatamente{{< /button >}}
{{< button href="#" >}}Permite que você adicione uma mensagem de commit{{< /button >}}

{{< /expand >}}

Quando você tiver feito seu commit, insira a mensagem de commit que utilizou:

<label for="finput">Campo de entrada para a mensagem de commit:</label><br>
<input type="text" id="finput" name="finput"><br>