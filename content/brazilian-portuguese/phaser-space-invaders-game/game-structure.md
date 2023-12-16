---
title: "A estrutura de arquivos do jogo"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

Como você pode ver, já criamos muitos arquivos para você. A estrutura do jogo já está definida e você preencherá cada arquivo com conteúdo. Portanto, para começar, devemos primeiro ter pelo menos uma compreensão básica do que cada arquivo faz e como eles se relacionam entre si.

Em primeiro lugar, `phaser.min.js` é simplesmente um arquivo JavaScript que contém o código que permite ao jogo rodar o Phaser, a estrutura que estamos usando para fazer o jogo. Você não precisa se preocupar muito com esse arquivo e não o editará.

A seguir, veja `index.html`. Este é um arquivo html que constitui a espinha dorsal de todo o nosso projeto, importando todos os arquivos JavaScript usados.

O próximo é `Game.js`. Este é o arquivo que representa essencialmente o nosso jogo. Dentro dele, o código real do jogo se ramifica em `Scene1.js` e `Scene2.js`. Esses arquivos de cena são onde você escreverá a maior parte do seu código, e entraremos em mais detalhes sobre as cenas do Phaser um pouco mais tarde.

`PlayerBullet.js`, `EnemyBullet.js` e `Explosion.js` são arquivos que criam objetos específicos para o nosso jogo.

Finalmente, a pasta `assets` contém todas as imagens que nosso jogo utiliza.