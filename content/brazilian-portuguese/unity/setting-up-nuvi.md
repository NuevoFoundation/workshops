---
title: "Configurando o Nuvi"
date: 2021-10-06T11:45:38-07:00
draft: true
weight: 3
---

Para começar a configurar nosso player principal, Nuvi, primeiro precisamos importar os assets do jogo que queremos usar. Você pode importar seus próprios assets ou [baixar os assets fornecidos](../files/Unity_game_images.zip). Para importá-los para o Unity, precisamos ir até a janela Project e na pasta Assets, criar uma nova pasta e chamá-la de "Drawings".

![Criando uma nova pasta](../img/2_1.png)

Arraste tudo o que você importou para a pasta Drawings.

A seguir, queremos arrastar e soltar o desenho do Nuvi na hierarquia. Nuvi agora deve aparecer na cena e na janela do jogo. Como podemos ver na janela do jogo, o Nuvi é muito grande. Para redimensionar o Nuvi, queremos usar a ferramenta Rect no canto superior esquerdo do Unity.

![Ferramenta Rect](../img/2_Unity_tools.png)

Em seguida, clique e arraste um dos círculos azuis exibidos nos cantos do Nuvi para redimensionar. Se executarmos o programa agora, o Nuvi não fará nada – ele apenas ficará parado. Para permitir que o Nuvi se mova, precisamos adicionar um componente "Rigidbody2D".

{{< notice info >}}
O componente Rigidbody2D permite que um GameObject seja manipulado no mecanismo de física do Unity.
{{< /notice >}}

Para adicionar qualquer componente a um GameObject, clique em Nuvi como fez para redimensionar. Uma janela do Inspetor deve aparecer à direita. Então você deseja clicar no botão "Add Component" (Adicionar Componente) e selecionar "RigidBody2D" após pesquisá-lo digitando-o.

<img src="../img/2_AddComponent.png" alt="Antes de adicionar um componente" width="400"/>
<img src="../img/2_Rigidbody2D.png" alt="Depois de adicionar um componente" width="400"/>

Agora, se você executasse o programa, veria o Nuvi avançando lentamente. Na verdade, Nuvi está caindo! Isso ocorre porque no componente Rigidbody2D, a "escala de gravidade" do Nuvi é definida como 1 e a gravidade funciona no Nuvi para puxá-los para baixo. Como não queremos que o Nuvi caia em nosso jogo, temos que mudar a gravidade para 0 no Inspetor.

Antes de prosseguirmos, devemos salvar com frequência para não perder o progresso. Para fazer isso, podemos segurar Control + s (Command + s se você estiver usando um Mac) ou ir até o canto superior esquerdo da tela e clicar em “Save” (Salvar) em “File” (Arquivo). Certifique-se de fazer isso com frequência ao acompanhar este workshop.
