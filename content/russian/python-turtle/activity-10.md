---
title: "Activity 10 - Randomizing the color of your mandala flower petals"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

![alt text width="70%"](../media/mandala-color.png "mandala flower with random color pedals")

Мы успешно задали цвет цветка-мандалы с помощью RGB. А теперь давайте изменим цвет отдельных лепестков этого цветка?

Мы будем использовать библиотеку `random` в Python. Метод `random.randint()` позволяет выбрать случайное значение для каждого из компонентов — красного, зелёного и синего. Чтобы выбрать значение в диапазоне от 0 включительно до 256 не включительно (иначе говоря, от 0 до 255 включительно), нужно использовать `random.randint(0, 256)`.

Вызовите `random.randint(0, 256)` три раза, чтобы получить три случайных значения, и подставьте их в метод `turtle.color()`. Теперь вы должны увидеть разноцветный цветок-мандалу! Это определённо тот цветок, с которого Алексу захотелось бы собирать нектар!

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Поздравляем! Вы помогли Алексу сделать соты и цветок! Теперь он может счастливо жить в своём улье и производить много мёда! Ваш итоговый рисунок должен выглядеть примерно так:

![alt text width="70%"](../media/turtle-honeycomb-flower.png "final product")