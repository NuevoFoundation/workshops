---
title: "Sala 4: O Labirinto da Mesclagem"
description: "Navegue pelas complexidades da revisão e mesclagem de código."
difficulties: ["intermediário"]
weight: 4
---

Você se encontra em uma sala com um labirinto complexo no chão. Os caminhos se cruzam e divergem, representando os desafios ocasionais de mesclar o código da sua cópia local com a versão hospedada remotamente.

## Sua Missão

1. Revise os comentários do seu pull request.
2. Faça as alterações necessárias e atualize o pull request.
3. Após a aprovação, efetue a mesclagem do pull request.

## Instruções

1. Verifique o seu pull request em busca de comentários de revisão.
2. Se forem solicitadas alterações:
   - Realize as alterações localmente
   - Faça o commit das alterações
   - Envie para o seu fork com um push
3. O pull request será atualizado automaticamente.
4. Uma vez aprovado, clique em "Merge pull request" na interface do GitHub.

{{< notice warning >}}
**Importante:** A comunicação é essencial! Se você tiver dúvidas sobre as alterações solicitadas, não hesite em pedir esclarecimentos nos comentários do pull request.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[Verificar Comentários do PR] -->|Alterações Solicitadas| B(Realizar Alterações Locais)
    B --> C(Fazer Commit das Alterações)
    C --> D(Enviar para o Fork)
    D --> E{PR Aprovado?}
    E -->|Sim| F(Mesclar PR)
    E -->|Não| A
    A -->|Nenhuma Alteração Necessária| E
{{< /mermaid >}}

Após mesclar com sucesso seu pull request, qual mensagem você viu? Insira-a abaixo para continuar:

<label for="finput">Campo de entrada para a mensagem de mesclagem:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Dica" >}}
A mensagem que você procura geralmente é algo como "Pull request successfully merged and closed."
{{< /expand >}}