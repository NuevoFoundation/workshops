---
title: "Sala 7: O Corredor da Automação"
description: "Aproveite o poder do GitHub Actions para automatizar seu fluxo de trabalho."
difficulties: ["avançado"]
weight: 7
---

Você entra em uma sala cheia de atividade. Engrenagens giram e esteiras se movem, simbolizando processos automatizados. Um display holográfico ganha vida: "Automatize seu caminho para a vitória!"

## Sua Missão

1. Crie um workflow simples utilizando GitHub Actions.
2. Acione o workflow ao realizar alterações no seu repositório.
3. Visualize os resultados do processo automatizado.

## Instruções

1. No seu repositório local, crie um novo diretório chamado `.github/workflows`.
2. Dentro deste diretório, crie um arquivo chamado `hello-world.yml`.
3. Adicione o seguinte conteúdo ao arquivo:

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. Faça o commit deste arquivo e envie-o para o seu repositório no GitHub.
   Acesse a aba "Actions" em seu repositório no GitHub para ver a execução do workflow.

{{< notice warning >}}
Nota: O GitHub Actions pode ser uma ferramenta poderosa para automação, mas lembre-se dos limites de uso em contas gratuitas.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Criar arquivo do workflow] --> B(Fazer commit e enviar)
B --> C{Workflow acionado?}
C -->|Sim| D[Visualizar resultados]
C -->|Não| E[Verificar erros no arquivo do workflow]
E --> B
{{< /mermaid >}}

Após a execução bem-sucedida do seu workflow, qual foi a saída do passo "Say Hello"? Insira abaixo:

<label for="finput">Campo de entrada para saída do workflow:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Dica" >}}
A saída deve ser exatamente o que você especificou no comando echo no seu arquivo de workflow.
{{< /expand >}}

{{< notice success >}}
Excelente trabalho! Você automatizou seu primeiro processo com o GitHub Actions. Avante para o próximo desafio!
{{< /notice >}}