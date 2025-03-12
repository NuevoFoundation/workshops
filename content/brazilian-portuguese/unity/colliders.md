---
title: "Colisores"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 6
---

A razão pela qual o Nuvi some da tela é porque não há colisores para detê-los.

{{< notice info >}}
Os colisores permitem que dois objetos se toquem.
{{< /notice >}}

Então, vamos usar colisores para adicionar paredes invisíveis ao redor da nossa arena. Vá até a janela Hierarquia, clique com o botão direito e escolha "Create Empty" (Criar Vazio). Nomeie este objeto vazio como "Walls" (Paredes).

Em seguida, clique com o botão direito no objeto "Walls" (Paredes) que você acabou de criar e desta vez escolha "3D Object -> Cube" (Objeto 3D -> Cubo). Redimensione o cubo em uma forma retangular para cobrir um lado da tela como abaixo:

![Uma parede invisível](../img/5_1stWall.png)

Em seguida, remova o componente BoxCollider que o cubo possui por padrão e adicione um componente BoxCollider2D.

Faça o mesmo para fazer mais 3 paredes invisíveis que cercam o Nuvi, como:

![Quatro paredes invisíveis cercando a arena](../img/5_all_walls.png)

Agora execute o jogo e veja o que acontece. ...Oh-oh, o Nuvi ainda some. Isso porque o Nuvi não possui Collider (Colisor). Para que dois objetos colidam, ambos precisam ter um Collider!

Então, vamos adicionar um componente BoxCollider2D ao Nuvi. Nesse componente, clique em "Edit Collider" (Editar Colisor) e você deverá ver uma caixa verde ao redor do Nuvi. Redimensione esta caixa para que ela se encaixe perfeitamente no Nuvi.
Execute o jogo e veja que Nuvi não vai mais fugir... mas agora Nuvi começa a girar quando atinge um canto da arena. Para impedir isso, acesse o componente Rigidbody2D do Nuvi, expanda "Constraints" (Restrições) e marque "Freeze Rotation" (Congelar Rotação).

Para adicionar um plano de fundo e fazer o Nuvi funcionar no espaço sideral, arraste o arquivo png "background" (Plano de Fundo) da pasta Desenhos como você fez para a imagem do Nuvi e solte-o na cena. Redimensione a imagem de fundo; olhar para a janela do jogo irá ajudá-lo a fazer isso.

{{< notice tip >}}
Se o Nuvi se esconder atrás da imagem de fundo, vá para o componente Sprite Renderer do Nuvi, expanda "Additional Settings" (Configurações Adicionais) e altere "Order in Layer" (Ordem em Camada) do Nuvi para 1 (ou qualquer número maior que 0).
{{< /notice >}}

Finalmente, execute o jogo novamente e certifique-se de que tudo está bem. Se sim, então parabéns! Ajudamos com sucesso o Nuvi a se movimentar no espaço sideral!

![Nuvi na imagem de fundo](../img/5_done.png)
