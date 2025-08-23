```markdown
---
title: "Sala 3: O Portal do Pull Request"
description: "Aprenda a enviar mudanças e criar um pull request."
difficulty: "Intermediário"
weight: 3
---

# Sala 3: O Portal do Pull Request

{{< figure src="../images/room3_pull_request.jpg" title="Uma porta massiva está à sua frente, com 'Pull Request' gravado acima" >}}

Uma porta massiva bloqueia seu caminho, com "Pull Request" escrito acima. Um aviso diz: "Para abrir esta porta, suas mudanças devem ser revisadas."

## Sua Missão

1. Envie suas mudanças locais para o seu repositório fork.
2. Crie um pull request para o repositório original `CodeDungeon/escape-room`.

## Instruções

1. Envie suas mudanças:

```
git push origin main
```

2. Vá para seu repositório fork no GitHub.
3. Clique em "Contribute" e depois em "Open pull request".
4. Preencha o título com "Solution for Room 2" e forneça uma breve descrição.
5. Clique em "Create pull request".

{{< notice info >}}
**Dica:** Fique de olho no seu pull request. Os guardiões da masmorra (mantenedores do repositório) irão revisá-lo e podem solicitar alterações!
{{< /notice >}}

{{< expand "Processo de Pull Request" >}}

**Enviar Mudanças**
Primeiro, envie suas mudanças locais para seu repositório remoto:

```
git push origin main
```

**Criar Pull Request**
1. Navegue até seu fork no GitHub
2. Clique na aba "Pull requests"
3. Clique em "New pull request"
4. Certifique-se de que o repositório base é o original e o repositório da cabeça é o seu fork
5. Clique em "Create pull request"

**Aguarde Revisão**
Após criar o pull request:
1. Aguarde os mantenedores revisarem suas mudanças
2. Atenda a qualquer feedback que eles forneçam
3. Envie novos commits para atualizar o pull request, se necessário

{{< /expand >}}

Assim que você criar seu pull request, insira seu número para prosseguir:

[Campo de entrada para número do pull request]

{{< notice info >}}
Nota: O campo de entrada real e a funcionalidade de criptografia precisariam ser implementados separadamente, pois o Hugo não oferece isso por padrão.
{{< /notice >}}
```