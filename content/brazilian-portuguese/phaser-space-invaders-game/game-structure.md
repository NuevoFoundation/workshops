---
title: "A Estrutura de Arquivos do Jogo"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

Como você pode ver, nós já criamos vários arquivos para você.  
A estrutura do jogo já está pronta, e você vai preencher cada arquivo com conteúdo.  
Então, para começar, precisamos ter pelo menos uma noção básica do que cada arquivo faz e como eles se relacionam.

Primeiro, o arquivo `phaser.min.js` é simplesmente um arquivo JavaScript que contém o código necessário para rodar o **Phaser**, o framework que estamos usando para fazer o jogo. Você não precisa se preocupar muito com ele e não vai editá-lo.

Depois, temos o `index.html`. Esse é um arquivo HTML que serve como **espinha dorsal** do nosso projeto, pois importa todos os arquivos JavaScript que serão usados.

Em seguida, o `Game.js`. Esse arquivo representa essencialmente o nosso jogo.  
Dentro dele, o código principal se ramifica para os arquivos `Scene1.js` e `Scene2.js`.  
São nesses arquivos de cena que você vai escrever a maior parte do seu código. Vamos falar mais sobre **scenes** do Phaser mais adiante.

Os arquivos `PlayerBullet.js`, `EnemyBullet.js` e `Explosion.js` criam objetos específicos do nosso jogo.

Por fim, a pasta `assets` contém todas as imagens que o jogo usa.
