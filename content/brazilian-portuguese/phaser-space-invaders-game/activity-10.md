---
title: "Atividade 10 - Adicionando uma Tela de Título"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

Agora, vamos aproveitar a separação entre a **scene 1** e a **scene 2** para adicionar uma **tela de título** e finalizar nosso jogo! 🎯

É bem simples! Primeiro, vamos comentar a linha que chama `startGame()` no final do `create()` da **Scene 1**.  
Vamos usar a função `startGame()` para iniciar o jogo **apenas** quando o jogador clicar, em vez de começar automaticamente como antes:

<!--- ![startGame()](../media/11/comment_out.png)--->  
<img src="../media/11/comment_out.png" alt="startGame comentado" style="width:950px;"/>

Quando fizer isso, o console vai voltar a mostrar apenas uma tela preta.  
Para criar uma tela de título, vamos importar a imagem de fundo e adicionar alguns textos na **seção da página inicial** da **Scene 1**:

<!--- ![start_page](../media/11/start_page.png)--->  
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

Você só pode criar o fundo como uma **imagem** dentro do `create()`, pois imagens só podem ser movidas dentro das funções `update()`.

Para os textos, recomendamos usar **fontes** e **cores (fills)** diferentes para o título e para o texto de "iniciar jogo".

Agora, vamos fazer com que o método `startGame()` seja chamado **apenas** quando o jogador clicar para começar:

<!--- ![on_click](../media/11/on_click.png)--->  
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

Sua tela deverá ficar parecida com esta:  
![title_screen](../media/11/title_screen.gif)

---

## Parabéns! 🎉

Você completou todas as lições e criou o seu próprio jogo **Space Invader**!  
Agora é só se divertir jogando! 👏🏽👏🏽👏🏽
