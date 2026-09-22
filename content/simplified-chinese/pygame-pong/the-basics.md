```markdown
---
title: "基础知识 - 类与对象"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## 类和对象

在开始制作游戏之前，你需要了解如何绘制不同的对象，并根据它们在电脑屏幕上的外观和移动方式进行修改。

为了构建对象，你首先需要决定它们应该是什么样子，在游戏中扮演什么角色，以及玩家如何控制它们在屏幕上的移动。你可以通过为屏幕上的每个对象创建一个类来实现这一点。
在程序中创建对象之前，必须先定义它们的类。类是用来定义单个对象的外观和行为的。它包含了对象在程序运行期间可以使用的属性和方法（在这里是一个乒乓游戏）。类只需定义一次，之后可以用来创建任意数量的对象。

类无法直接在程序中使用；类必须通过对象以其表现形式用于程序。
所有与视觉和移动相关的方面被称为对象在电脑屏幕上可见的`"属性"`。
所有与对象控制相关的方面被称为对象的`"函数"`。

首先，为游戏中的球拍定义类。为此，使用以下代码：

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

让我们更详细地理解这段代码。

{{% notice tip %}}

### 命名类

`class Paddle(pygame.Rect)`

这是命名类`"Paddle"`的方法。现在，请注意括号中的`pygame.Rect`。你可能已经想到，为了在电脑屏幕上绘制球拍，你需要像绘制一个矩形那样进行绘制，然后定义其在屏幕上的尺寸和位置，使其看起来像一个球拍。`(pygame.Rect)`语句允许我们告诉Python编译器将此对象绘制为一个矩形，并提供所有与矩形相关的属性，例如`WIDTH`和`HEIGHT`。这有助于我们利用Pygame库中`Rectangle`类的所有属性。

### 添加属性

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

目前你无需担心`args`和`kwargs`——只需关注`Paddle`类的核心属性。

`__init__`函数允许你为类设置你希望其对象具备的属性。你可以在这里定义额外的属性，除了你已经从`Rectangle`类获得的属性。让我们添加属性，例如`velocity`、`up_key`、`down_key`，分别表示球拍移动的速度以及上下移动所需的键。

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```

### 添加方法

`move_paddle()`是一个**方法**。我们用此方法让球拍执行移动操作。在这种情况下，`move_paddle()`根据按下的键以一定的速度使球拍向上或向下移动。

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

现在你已经定义了球拍的外观和移动方式，可以随时查看`Ball`和`Pong`类。在接下来的活动中，你将修改这些类的某些方面，以根据自己的偏好个性化乒乓游戏。
```