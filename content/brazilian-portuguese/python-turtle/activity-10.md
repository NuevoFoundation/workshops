---
title: "Atividade 10 – Randomizando a cor das pétalas da sua mandala"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

![texto alternativo width="70%"](../media/mandala-color.png "flor mandala com pétalas de cores aleatórias")

Definimos com sucesso a cor da flor da mandala para um valor RGB. Agora, vamos explorar a mudança da cor das pétalas individuais das flores da mandala.

Faremos uso da biblioteca `random` do python. O método `random.randint()` nos permite escolher um valor aleatório para cada valor de vermelho, verde ou azul. Para escolher um valor entre 0 inclusivo e 256 exclusivo (em outras palavras, entre 0 e 255 inclusivo), precisamos usar `random.randint(0, 256)`.

Use `random.randint(0, 256)` três vezes para produzir três valores aleatórios e insira-os no método `turtle.color()`. Agora você deve conseguir ver uma flor de mandala multicolorida! Esta é definitivamente uma flor da qual Alex estaria interessado em coletar néctar!

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Parabéns! Você ajudou Alex a fazer um favo de mel e uma flor! Ele agora pode viver feliz em sua colméia e produzir muito mel! Sua imagem final deverá ficar mais ou menos assim:

![texto alternativo width="70%"](../media/turtle-honeycomb-flower.png "produto final")
