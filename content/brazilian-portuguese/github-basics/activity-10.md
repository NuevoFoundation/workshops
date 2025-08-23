---
title: "Sala 10: O Recanto do Deployment"
description: "Aprenda a implantar seu projeto usando o GitHub Pages."
difficulty: "Intermediário"
weight: 10
---

# Sala 10: O Recanto do Deployment

{{< figure src="../images/room10_pages.jpg" title="Uma sala com uma tela gigante exibindo um site e botões de deploy flutuantes" >}}

Você entra na sala final para encontrar uma tela gigante exibindo um site e botões "Deploy" flutuantes. Uma voz triunfante anuncia: "Implante sua vitória para todos verem!"

## Sua Missão

1. Habilitar o GitHub Pages para seu repositório.
2. Criar um arquivo simples index.html.
3. Enviar o arquivo e visualizar seu site implantado.

## Instruções

1. Vá para a aba "Settings" do seu repositório.
2. Role para baixo até a seção "GitHub Pages".
3. Em "Source", selecione o branch que deseja implantar (geralmente `main`).
4. No seu repositório local, crie um arquivo `index.html` no diretório raiz.
5. Adicione algum código HTML ao arquivo, como:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Meu Site no GitHub Pages</title>
     </head>
     <body>
       <h1>Olá, GitHub Pages!</h1>
       <p>Completei o GitHub Adventure Game!</p>
     </body>
   </html>
   ```

6. Comite e envie este arquivo para seu repositório.
7. Aguarde alguns minutos para o GitHub processar seu pedido, depois visite seu site em https://<username>.github.io/<repository-name> onde <username> é seu nome de usuário no GitHub e <repository-name> é o nome do seu repositório.
{{< notice info >}}
Nota: Pode levar alguns minutos para seu site ser implantado após enviar mudanças.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Habilitar GitHub Pages] --> B(Criar index.html)
B --> C(Comitar e enviar)
C --> D{Site implantado?}
D -->|Sim| E[Ver seu site]
D -->|Não| F[Aguardar alguns minutos]
F --> D
{{< /mermaid >}}
Depois que seu site for implantado, qual é o título da sua página? Você pode encontrá-lo no topo do seu navegador ao visitar o site. Digite abaixo:
[Campo de entrada para título da página]
{{< notice success >}}
Parabéns, mestre do GitHub! Você completou todos os desafios e implantou sua vitória. Você escapou do GitHub Adventure Game!
{{< /notice >}}