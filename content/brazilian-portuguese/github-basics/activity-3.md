---
title: "Sala 3: O Portal do Pull Request"
description: "Aprenda a enviar alterações e criar um pull request."
difficulties: ["intermediário"]
weight: 3
---

Uma porta maciça bloqueia seu caminho, com "Pull Request" escrito acima dela. Uma placa diz: "Para abrir esta porta, suas alterações precisam ser revisadas."

## Sua Missão

1. Envie suas alterações locais para o repositório que você bifurcou.
2. Crie um pull request para o repositório original `CodeDungeon/escape-room`.

## Instruções

1. Envie suas alterações:

```
git push origin main
```

2. Acesse o repositório bifurcado no GitHub.
3. Clique em "Contribute" e depois "Open pull request".
4. Preencha o título como "Solution for Room 2" e forneça uma breve descrição.
5. Clique em "Create pull request".

{{< notice info >}}
**Dica:** Fique de olho no seu pull request. Os guardiões da masmorra (os mantenedores do repositório) irão revisá-lo e podem solicitar alterações!
{{< /notice >}}

{{< expand "Processo de Pull Request" >}}

**Enviar Alterações**
Primeiro, envie suas alterações locais para seu repositório remoto:

```
git push origin main
```

**Criar Pull Request**
1. Navegue até seu fork no GitHub
2. Clique na aba "Pull requests"
3. Clique em "New pull request"
4. Certifique-se de que o repositório base seja o original e o repositório do cabeçalho seja seu fork
5. Clique em "Create pull request"

**Aguarde Revisão**
Após criar o pull request:
1. Aguarde os mantenedores revisarem suas alterações
2. Resolva qualquer feedback que eles fornecerem
3. Envie novos commits para atualizar o pull request, se necessário

{{< /expand >}}

Depois de criar seu pull request, insira seu número para prosseguir:

<label for="finput">Campo de entrada para o número do pull request:</label><br>
<input type="text" id="finput" name="finput"><br>