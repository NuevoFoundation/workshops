---
title: "O Básico - Classe e Objeto"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## Classes e objetos

Antes de começar a construir um jogo, você deve saber como desenhar diferentes objetos e modificá-los com base na aparência e no movimento deles na tela do computador.

Para construir objetos, você precisa primeiro decidir como eles devem ser, qual o papel que devem desempenhar no jogo e como o jogador pode controlar seus movimentos na tela. Você pode fazer isso criando uma classe para cada objeto que deseja na tela.
Antes de os objetos serem criados em um programa você deve definir sua classe. Uma classe é o que informa a aparência e o comportamento de um objeto individual. Ele contém os atributos e métodos que seu objeto pode utilizar enquanto o programa está em execução (neste caso é um jogo Pong). Você só precisa definir uma classe uma vez, após a qual poderá usá-la para criar quantos objetos desejar.

Você não pode usar uma classe diretamente em um programa; uma classe deve ter como manifestação um objeto que é usado no programa.
Todos os aspectos relacionados ao visual e ao movimento são chamados de `"atributos"` do objeto que você vê na tela do computador.
Todos os aspectos relacionados ao controle de um objeto são chamados de `"funções"` do objeto.
A raquete será denominada como "paddle"

Primeiro, defina a classe da raquete usada no jogo. Para fazer isso, use o seguinte código:

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)

    def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()

        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity

        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

Vamos tentar entender o código com mais detalhes.

{{% notice tip %}}

### Nomeie a classe

`class Paddle(pygame.Rect)`

É assim que você nomeia a classe `"Paddle"`. Agora, observe o `pygame.Rect` dentro de `()`. Você já deve ter imaginado que para desenhar a raquete na tela do computador é necessário desenhá-la como um retângulo, depois definir suas dimensões e posição na tela para que pareça uma raquete. A instrução `(pygame.Rect)` nos permite dizer ao compilador Python para desenhar este objeto como um retângulo e fornecer todos os atributos do retângulo para ele, como `WIDTH` e `HEIGHT`. Isso nos ajuda a usar todos os atributos disponíveis para a classe `Rectangle` na biblioteca Pygame.

### Adicionar atributos

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

Você não precisa se preocupar com `args` e `kwargs` por enquanto - apenas concentre-se nos atributos principais da classe `Paddle`.

A função `__init__` permite configurar a classe com os atributos que você deseja ver em seus objetos. Você pode definir atributos adicionais aqui além dos que você já obtém da classe `Rectangle`. Vamos adicionar atributos como `velocity`, `up_key`, `down_key` para representar a velocidade com que a raquete pode se mover e as teclas necessárias para o movimento para cima e para baixo da raquete.

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```
### Adicionar métodos

`move_paddle()` é um **método**. Usamos este método para fazer com que a raquete execute ações de movimento. Neste caso, `move_paddle()` move a raquete para cima ou para baixo dependendo da tecla pressionada e em uma determinada velocidade.

```python
def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()
        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity
        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

{{% /notice %}}

Agora que você definiu a aparência e o movimento da raquete, fique à vontade para dar uma olhada nas classes `Ball` e `Pong`. Nas próximas atividades você modificará certos aspectos dessas classes para personalizar o jogo Pong de acordo com suas preferências.
