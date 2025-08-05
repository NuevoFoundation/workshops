---
title: "Atividade 7 - Permitindo que o Jogador Atire"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 14
---

Agora vamos adicionar uma das partes mais importantes do jogo — **atirar nos inimigos**!  
Embora possamos derrotar inimigos colidindo com eles, isso não será uma boa ideia quando adicionarmos vidas mais tarde. Vamos criar o efeito de disparo criando um objeto **beam** (raio/tiro) usando um arquivo JavaScript separado (assim como fizemos para a explosão).

---

Começamos com o básico — carregando uma **spritesheet** e uma animação na **Scene 1** para os tiros do jogador:

<img src="../media/8/scene1_preload.png" alt="scene1_preload" style="width:950px;"/>

A localização da spritesheet é `assets/beam.png` e cada quadro (frame) tem **32x32** pixels:

<img src="../media/8/scene1_create.png" alt="scene1_create" style="width:950px;"/>

---

Na **Scene 2**, faremos algo parecido com o que fizemos com os inimigos: criar um **grupo** para os tiros, assim podemos manipulá-los facilmente.  
Crie um grupo chamado `"projectiles"`:

<img src="../media/8/projectiles_step1.png" alt="projectiles" style="width:950px;"/>

---

Agora vá para `playerBeam.js`:

<img src="../media/8/constructor_xy.png" alt="constructor_xy" style="width:950px;"/>

Assim como no `Explosion.js`, ele estende `Phaser.GameObjects.Sprite` e usa `super()` no construtor.  
Complete o construtor para:
- Reproduzir a animação do tiro
- Ativar o corpo físico
- Definir a velocidade no eixo Y para o valor desejado

---

Depois de configurar o **beam**, vamos permitir que o jogador o dispare quando pressionar a **barra de espaço**.  
Assim como criamos uma variável para processar as setas de movimento, criaremos outra para processar a barra de espaço:

<img src="../media/8/control_space.png" alt="control_space" style="width:950px;"/>

Agora vamos criar o método `playerShoot()`:

<img src="../media/8/player_shoot.png" alt="player_shoot" style="width:950px;"/>

E chamá-lo no `update()`, como fizemos com `movePlayer()`:

<img src="../media/8/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

---

O método `playerShoot()` vai verificar se a barra de espaço foi pressionada e criar um **playerBeam** (tiro) se o jogador estiver ativo (vivo).  

Teste agora! Você vai notar dois problemas:
1. O tiro não causa dano no inimigo  
2. O tiro continua para sempre por causa do **canvas infinito** do Phaser

![blast](../media/8/blast-first.gif)

---

Vamos corrigir primeiro o problema do tiro infinito.  
Mesmo que isso não afete diretamente a jogabilidade, muitos tiros fora da tela podem causar **lag**.  
Para resolver, vamos usar a função `update()` no `playerBeam.js` para destruir o tiro quando ele sair da tela.

No entanto, para essas funções `update()` funcionarem, precisamos chamá-las no `update()` da **Scene 2**:

```javascript
for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    var beam = this.projectiles.getChildren()[i];
    beam.update();
}
```

<img src="../media/8/update_projectiles.png" alt="update_projectiles" style="width:950px;"/>

---

Para testar, podemos colocar a altura de destruição do tiro dentro da área visível:

<img src="../media/8/player_bullet_update.png" alt="player_bullet_update" style="width:950px;"/>

Se o tiro desaparecer na altura especificada (por exemplo, **50**), o código está funcionando.  
Depois, basta alterar para um valor fora da tela (como **10**).

![blast](../media/8/blast-disappear.gif)

---

Agora, vamos destruir o inimigo quando ele for atingido por um tiro.  
Podemos fazer isso usando a mesma detecção **overlap** que usamos para verificar colisão entre jogador e inimigo:

<img src="../media/8/projectiles_step2.png" alt="overlap projectiles" style="width:950px;"/>

Mas, como o jogador não está sendo atingido, não podemos usar `hurtPlayer()`.  
Em vez disso, criaremos um método `hitEnemy()`:

<img src="../media/8/hit_enemy.png" alt="hit_enemy" style="width:950px;"/>

Nesse método:
- Criamos uma explosão na posição do inimigo
- Removemos o tiro
- Removemos o inimigo

---

No final, o disparo ficará assim:

![blast](../media/8/blast-final.gif)
