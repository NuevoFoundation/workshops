---
title: "Sala 10: O Recanto da Implantação"
description: "Aprenda a implantar seu projeto usando o GitHub Pages."
difficulties: ["intermediário"]
weight: 10
---

Você entra na sala final e encontra uma enorme tela exibindo um site e botões "Implantar" flutuando. Uma voz triunfante anuncia: "Implante sua vitória para que todos vejam!"

## Sua Missão

1. Ativar o GitHub Pages para o seu repositório.
2. Criar um arquivo simples chamado index.html.
3. Fazer o push do arquivo e visualizar seu site implantado.

## Instruções

1. Vá para a aba "Settings" (Configurações) do seu repositório.
2. Role para baixo até a seção "GitHub Pages".
3. Em "Source" (Fonte), selecione o branch que você deseja implantar (geralmente `main`).
4. No seu repositório local, crie um arquivo `index.html` no diretório raiz.
5. Adicione algum código HTML ao arquivo, como:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Meu Site do GitHub Pages</title>
     </head>
     <body>
       <h1>Olá, GitHub Pages!</h1>
       <p>Eu completei o Jogo de Aventura do GitHub!</p>
     </body>
   </html>
    ```

6. Faça o commit e o push desse arquivo para o seu repositório.
7. Aguarde alguns minutos para que o GitHub processe sua solicitação e, em seguida, visite seu site em https://<username>.github.io/<repository-name>, onde <username> é o seu nome de usuário no GitHub e <repository-name> é o nome do seu repositório.

{{< notice info >}}
Nota: Pode levar alguns minutos para que o seu site seja implantado após realizar o push das alterações.
{{< /notice >}}

{{< mermaid >}}
graph TD
A[Ativar GitHub Pages] --> B(Criar index.html)
B --> C(Fazer commit e push)
C --> D{Site implantado?}
D -->|Sim| E[Visualize seu site]
D -->|Não| F[Aguarde alguns minutos]
F --> D
{{< /mermaid >}}

Depois que seu site for implantado, qual é o título da sua página da web? Você pode encontrá-lo no topo do navegador ao visitar o site. Insira-o abaixo:

<label for="finput">Campo para inserir o título da página da web:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Parabéns, mestre do GitHub! Você completou todos os desafios e implantou sua vitória. Você escapou do Jogo de Aventura do GitHub!
{{< /notice >}}