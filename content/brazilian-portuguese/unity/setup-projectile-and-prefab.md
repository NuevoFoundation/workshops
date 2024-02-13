---
title: "Configurando o projétil e tornando-o um pré-fabricado"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 8
---

Oh não! O alienígena rosa está atacando agora! É uma loucura porque Nuvi o atropelou. Vamos configurar o Nuvi com um mecanismo de autodefesa.

Após selecionar Nuvi na hierarquia, clique com o botão direito e selecione "Criar Vazio", que cria um GameObject vazio com apenas um componente Transform.

{{< notice tip >}}
Para poder ver onde está nosso objeto vazio, certifique-se de que estamos na ferramenta Move (Mover)! Você deverá ver duas setas que se cruzam – onde elas se cruzam é ​​onde nosso GameObject vazio está localizado.
{{< /notice >}}

Este componente Transform representará de onde o projétil irá surgir. Usando a ferramenta Move, vamos alinhar o Transform para que fique na frente da barriga saliente do Nuvi. Gire o Transform usando a ferramenta Rotate (Girar) para criar uma imagem semelhante à abaixo:

<img src="../img/7_projectileSpawn.png" alt="Reposicione e gire o spawn Transform de projétil para que fique na frente do Nuvi" width="400"/>

Agora, na pasta Assets da janela Project, localize o png "projectile" (projétil) na pasta Drawings. Arraste e solte o projétil na hierarquia. Redimensione o projétil para que fique menor que o Nuvi. Certifique-se de adicionar um BoxCollider2D e um RigidBody2D com a escala de gravidade definida como 0.

{{< notice tip >}}
Se a imagem do projétil não aparecer, tente entrar no componente Sprite Renderer e aumentar a "Order in Layer" (Ordem na Camada), como você fez para o Nuvi quando adicionamos o fundo.
{{< /notice >}}

## Pré-fabricados

Como iremos disparar vários projéteis, seria mais fácil fazer dos projéteis um "prefab", ou seja, pré-fabricado. Um pré-fabricado é uma versão pré-fabricada de um objeto do qual você pode fazer várias cópias apenas arrastando-o para a cena. Se você fizer alguma alteração na pré-fabricada, essa alteração afetará todas as cópias dessa pré-fabricada. Você não precisa entrar em cada cópia e alterar tudo manualmente.

Primeiro, vamos criar uma pasta "Prefabs" em Assets na janela Project. Então, para tornar o projétil um pré-fabricado, basta arrastar o projétil da hierarquia para a pasta Prefabs.

{{< notice note >}}
Observe que o texto “projétil” e o cubo vazio próximo a ele ficaram azuis na hierarquia.
{{< /notice >}}

Agora que o projétil foi salvo para reutilização futura, podemos excluí-lo da hierarquia. Para fazer isso, basta clicar com o botão direito no projétil e escolher “Delete”.
