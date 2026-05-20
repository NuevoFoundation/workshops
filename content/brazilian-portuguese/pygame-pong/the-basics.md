---
title: "O Básico - Classe e Objeto"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## Classes e objetos

Antes de começar a construir um jogo, você precisa saber como desenhar diferentes objetos e modificá-los com base em como eles devem aparecer e se mover na tela do computador.

Para criar objetos, você precisa primeiro decidir como eles devem parecer, qual papel devem ter no seu jogo e como o jogador vai controlar os movimentos deles na tela. Você pode fazer isso criando uma **classe** para cada objeto que você quiser mostrar na tela.  
Antes dos objetos serem criados num programa, é necessário definir a **classe** deles.  
Uma **classe** diz como cada objeto vai parecer e se comportar.  
Ela contém os **atributos** e **métodos** que o objeto pode usar enquanto o programa estiver rodando (no nosso caso, o jogo Pong).  
Você só precisa definir uma classe **uma única vez** — depois disso, pode criar quantos objetos quiser a partir dela!

Você não pode usar uma classe diretamente — é necessário criar um **objeto** dessa classe para usá-la no programa.  
Tudo relacionado à **aparência** e **movimento** é chamado de **"atributo"** do objeto.  
E tudo relacionado ao **controle** do objeto é chamado de **"função"** (ou método) do objeto.

Vamos começar definindo a classe da raquete usada no jogo. Para isso, use o código abaixo:

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

Vamos entender esse código com mais detalhes:

{{% notice tip %}}

### Nome da classe

`class Paddle(pygame.Rect)`

É assim que você dá nome à classe `"Paddle"`. Agora, repare no `pygame.Rect` dentro dos parênteses `()`.  
Você provavelmente já imaginou que, para desenhar uma raquete na tela do computador, precisamos desenhá-la como um **retângulo**, definindo suas dimensões e posição na tela.

A instrução `(pygame.Rect)` diz ao Python que esse objeto será um **retângulo**, e com isso podemos usar todas as propriedades de um retângulo, como `WIDTH` e `HEIGHT`. Isso nos permite aproveitar todos os atributos disponíveis na classe `Rectangle` da biblioteca Pygame.

### Adicionando atributos

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

Você não precisa se preocupar com `args` e `kwargs` por enquanto – foque apenas nos atributos principais da classe `Paddle`.

A função especial `__init__` serve para configurar a classe com os atributos que você quer que os objetos dela tenham.  
Você pode adicionar outros atributos além dos que vêm da classe `Rectangle`.

Vamos adicionar os seguintes atributos:

- `velocity`: a velocidade com que a raquete vai se mover  
- `up_key`: a tecla usada para mover a raquete para cima  
- `down_key`: a tecla usada para mover a raquete para baixo

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```
### Adicionando métodos

`move_paddle()` é um **método**.  
Usamos esse método para fazer a raquete realizar ações de movimento.  
Neste caso, `move_paddle()` move a raquete para cima ou para baixo, dependendo da tecla pressionada, e respeitando a velocidade definida.

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

Agora que você já definiu como a raquete deve parecer e como ela deve se mover, fique à vontade para dar uma olhada nas classes `Ball` e `Pong`.  
Nas próximas atividades, você vai modificar algumas partes dessas classes para deixar o jogo Pong com a sua cara!

