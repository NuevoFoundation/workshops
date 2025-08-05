---
title: "Fundamentos do Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Parte 1: A Variável Config

Vamos revisar alguns fundamentos do **Phaser**, um framework de jogos que usa **HTML** e **JavaScript** para criar jogos para a web! É isso que você vai aprender a usar neste workshop.

Vá até o arquivo `game.js`. Todo jogo feito em Phaser começa com uma variável que guarda as configurações do jogo (geralmente chamada de **config**, como aqui).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

Nessa variável, definimos várias características do jogo, como largura (**width**), altura (**height**) e cor de fundo (**backgroundColor**). Também definimos as **scenes** que vamos usar (vamos falar mais sobre elas em breve).  
Você também poderia criar um jogo sem scenes e colocar todo o código no `game.js`.

Perceba também que definimos a **física** do jogo no **config**. Em design de jogos, a física é um dos elementos mais importantes para definir a “sensação” do jogo. Por exemplo, a física “saltitante” no Mario é o que faz ele ter a sensação única de Mario.  
No nosso caso, usamos a física **arcade**, que é simples de usar. Além disso, definimos a gravidade como 0 porque nosso jogo é um **Space Shooter**, então não precisamos que os personagens sejam puxados para baixo.

No final do `game.js`, passamos a variável **config** para a variável **game** — isso é quase sempre necessário em um jogo feito com Phaser.

---

## Parte 2: Scenes

Agora, vamos falar sobre **scenes**.  
Uma scene é basicamente um **estado do jogo** em que o jogador está naquele momento.

Exemplo:  
No jogo Pokémon, você normalmente está andando pelo mundo. Mas quando encontra um treinador ou um Pokémon selvagem, muda para outra scene para batalhar. Depois da batalha, você pode abrir o mapa — que é outra scene.  
Cada uma dessas scenes tem mecânicas próprias e funcionam de forma diferente:  
- O mundo precisa de um espaço 2D e um jogador.  
- A batalha precisa de menus.  
- O mapa é mais como um gráfico interativo.  

Separar essas partes em scenes diferentes facilita muito o desenvolvimento.

Você pode pensar que o jogador “pula” entre scenes enquanto joga. Ele usa apenas uma de cada vez, e cada scene é quase como um mini-jogo próprio.

{{% notice info %}}
Tecnicamente, poderíamos usar uma única scene para todos esses estados. Mas isso deixaria o código muito mais complicado. Criar scenes separadas é muito mais organizado e fácil.
{{% /notice %}}

Outro exemplo muito comum é a **tela de título**:

![Tela de título do jogo Outliers](../media/title-game.png)

A primeira scene mostra apenas o título e opções como configurações ou carregar jogo salvo. Quando o jogador clica em “Jogar”, mudamos para outra scene, onde o jogo realmente acontece.

No nosso jogo:  
- **Scene 1** terá a tela de título.  
- **Scene 2** terá a jogabilidade principal (onde você vai passar a maior parte do tempo programando).

---

## Parte 3: Canvas Infinito

Quando você iniciar o jogo no Replit, verá um canvas em branco na tela, onde vamos colocar os elementos.  
Mas essa é apenas uma parte do canvas — ele, na verdade, é infinito em todas as direções.  

Isso significa que objetos podem se mover ou serem colocados em partes que o jogador não vê.  
No nosso jogo, não queremos que as coisas saiam muito da tela, então precisaremos limitar os objetos para que fiquem visíveis ou removê-los se saírem.
