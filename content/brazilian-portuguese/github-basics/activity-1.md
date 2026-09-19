---
title: "Sala 1: A Encruzilhada no Caminho"
description: "Comece sua aventura fazendo um fork e clonando um repositório."
difficulties: ["iniciante"]
weight: 1
---

Você desperta em uma sala fracamente iluminada. Um pedestal no centro sustenta um logotipo do GitHub brilhante. Uma voz ecoa: "Para prosseguir, você deve fazer o fork do caminho à frente."

Por "caminho", a voz refere-se a um repositório do GitHub. Fazer um fork cria uma cópia do repositório na sua conta, permitindo que você faça alterações sem afetar a cópia original.

## Sua Missão

1. Crie uma conta no GitHub (se ainda não tiver uma).
2. Faça um fork do repositório: `https://github.com/VerisimilitudeX/escape-room`
3. Clone o repositório que você fez fork para sua máquina local.

## Instruções

1. Acesse o GitHub e cadastre-se ou faça login.
2. Navegue até o URL do repositório e clique no botão "Fork" no canto superior direito.
3. Após o fork, clique no botão verde "Code" e copie o URL.
4. Abra seu terminal e execute:

   ```pwsh
   git clone <URL_DO_REPOSITORIO_DE_SEU_FORK>
   cd escape-room
   ```

{{% notice tip %}}
**Dica:** Procure pelo arquivo `README.md` em seu repositório clonado. Ele contém um código secreto para desbloquear a próxima sala!
{{% /notice %}}

{{< expand "Precisa de ajuda?" >}}
Se estiver com dificuldades, tente os seguintes passos:

1. Certifique-se de que você está conectado ao GitHub.
2. Verifique se você navegou até o URL correto do repositório.
3. Se estiver com problemas nos comandos do git, verifique se o [git](https://git-scm.com/downloads) está instalado no seu sistema.
{{< /expand >}}

Quando estiver pronto para prosseguir, insira o código secreto que encontrou:

<label for="finput">Campo para inserir o código secreto:</label><br>
<input type="text" id="finput" name="finput"><br>