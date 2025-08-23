---
title: "Sala 1: A Bifurcação no Caminho"
description: "Comece sua aventura fazendo fork e clonando um repositório."
difficulty: "Iniciante"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="A primeira sala da Masmorra do Código, iluminada por um logotipo do GitHub misterioso" >}}

Você desperta em uma sala mal iluminada. Um pedestal no centro exibe um logotipo do GitHub brilhante. Uma voz ecoa: "Para prosseguir, você deve bifurcar o caminho à frente."

Por caminho, a voz se refere a um repositório do GitHub. Fazer fork cria uma cópia do repositório na sua conta, permitindo que você faça alterações sem afetar a cópia original.

## Sua Missão

1. Crie uma conta no GitHub (se ainda não tiver).
2. Faça fork do repositório: `https://github.com/VerisimilitudeX/escape-room`
3. Clone seu repositório bifurcado para sua máquina local.

## Instruções

1. Acesse o GitHub e registre-se ou faça login.
2. Navegue até a URL do repositório e clique no botão "Fork" no canto superior direito.
3. Após fazer fork, clique no botão verde "Code" e copie a URL.
4. Abra seu terminal e execute:

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**Dica:** Procure o arquivo `README.md` no seu repositório clonado. Ele contém um código secreto para desbloquear a próxima sala!
{{% /notice %}}

{{< expand "Precisa de ajuda?" >}}
Se você estiver preso, tente estas etapas:

1. Certifique-se de que está logado no GitHub.
2. Verifique se navegou para a URL correta do repositório.
3. Se estiver com problemas com comandos git, certifique-se de que o [git](https://git-scm.com/downloads) está instalado no seu sistema.
{{< /expand >}}

Quando estiver pronto para prosseguir, insira o código secreto que você encontrou:

[Campo de entrada para o código secreto]

{{% notice %}}
Nota: O campo de entrada real e a funcionalidade de criptografia precisariam ser implementados separadamente, pois o Hugo não fornece isso nativamente.
{{% /notice %}}