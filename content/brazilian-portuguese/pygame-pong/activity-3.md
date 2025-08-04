---
title: "Atividade 3 - Mude a tecla para mover a raquete da esquerda"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

Parabéns! Você não só consertou a borda do jogo, como também deu cor aos objetos. Agora, vamos ver se você consegue mudar as teclas que movimentam a raquete da esquerda.

Para isso, precisamos modificar um dos parâmetros que usamos ao criar o objeto da raquete da esquerda.  
Lembra da seção "O Básico - Classe e Objeto"? Lá, você definiu a classe `Paddle` com os atributos de teclas para subir (`UP`) e descer (`DOWN`).

Encontre `# TODO (ACTIVITY 3)` no código. Modifique o valor do atributo correto para que, ao pressionar a tecla `'s'`, a raquete da esquerda se mova para baixo.  
Atualmente, esse movimento para baixo está sendo feito pela tecla `'T'`.

{{% notice tip %}}

Tente trocar também a tecla de subir (`UP`) por outra tecla diferente. Depois, clique em <b>Run</b> para testar suas mudanças.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Abrir no Replit</a>

## O Que Você Aprendeu

Você acabou de modificar o atributo `down_key` na classe `Paddle` para controlar como a raquete da esquerda se move na tela.
