---
title: "Configurando os inimigos"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 7
---

Agora que o Nuvi está preparado e pronto para agir, vamos fazer com que eles recebam os alienígenas no universo! Localize o arquivo png alienígena chamado "alien_pink" na pasta Drawings. Em seguida, arraste e solte alien_pink na hierarquia. Redimensione o inimigo para corresponder ao tamanho do Nuvi, pois ele é muito grande.

<img src="../img/6_nuvi_and_enemy.png" alt="O inimigo é dimensionado para corresponder ao tamanho do Nuvi" width="400"/>

Agora, se fôssemos rodar o jogo, Nuvi atravessaria o alienígena rosa. Queremos que o Nuvi colida com ele. Para fazer isso, adicione um BoxCollider2D no alienígena como fizemos com o Nuvi e redimensione-o se necessário. Agora, se rodarmos o jogo novamente, Nuvi esbarrará no alienígena em vez de passar por cima dele!
