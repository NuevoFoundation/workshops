```markdown
---
title: "基礎知識 - 類別與物件"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## 類別與物件

在開始建立遊戲之前，你需要了解如何繪製不同物件，並根據它們需要的外觀及在螢幕上的移動方式進行修改。

為了建立物件，你需要先決定它們應該的外觀、在遊戲中扮演的角色，以及玩家如何在螢幕上控制它們的移動。你可以透過為想要在螢幕上看到的每個物件建立一個類別來完成這一步。
在程式中建立物件之前，必須先定義它們的類別。類別是用來描述個別物件外觀及行為的規則。類別包含屬性和方法，物件在程式運行期間可以使用這些屬性和方法（在本例中是乒乓遊戲）。類別只需要定義一次，隨後你可以使用它來創建任意數量的物件。

類別並不能直接在程式中使用；類別必須通過物件作為具體實現，才能用於程式中。
所有與視覺效果和移動有關的部分稱為物件的 `"屬性"`。
所有與物件控制相關的部分稱為物件的 `"函數"`。

首先，定義遊戲中使用的球拍類別。要實現這一點，使用以下程式碼：

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

讓我們更深入地了解這段程式碼。

{{% notice tip %}}

### 為類別命名

`class Paddle(pygame.Rect)`

這就是如何為類別命名為 `"Paddle"`。現在，注意括號內的 `pygame.Rect`。你可能已經想到，為了在電腦螢幕上繪製球拍，需要將它畫成一個矩形，然後定義它在螢幕上的尺寸和位置，使其看起來像球拍。`(pygame.Rect)` 語句告訴 Python 編譯器將此物件繪製成矩形，並賦予它所有矩形的屬性，例如 `WIDTH` 和 `HEIGHT`。這讓我們能夠利用 Pygame 程式庫中 `Rectangle` 類別的所有屬性。

### 新增屬性

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

你暫時不需要擔心 `args` 和 `kwargs`，只需專注於 `Paddle` 類別的核心屬性即可。

`__init__` 函數允許你在類別中設置你想要用於其物件的屬性。你可以在這裡定義額外的屬性，除了從 `Rectangle` 類別中既有的屬性之外。我們新增的屬性包括 `velocity`（代表球拍移動的速度）、`up_key` 和 `down_key`（用於控制球拍向上和向下移動的按鍵）。

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```

### 新增方法

`move_paddle()` 是一個 **方法**。我們透過這個方法讓球拍執行移動動作。在這個例子中，`move_paddle()` 根據按下的按鍵，以一定速度使球拍上下移動。

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

現在，你已經定義了球拍的外觀以及移動方式，接下來可以查看 `Ball` 和 `Pong` 類別。在接下來的活動中，你將修改這些類別中的某些部分，將乒乓遊戲個性化，符合你的偏好。
```