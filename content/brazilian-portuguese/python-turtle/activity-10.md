---
title: "Atividade 10 - Randomizando a cor das pétalas da sua mandala"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

![alt text width="70%"](../media/mandala-color.png "flor de mandala com pedais de cores aleatórias")

Definimos com sucesso a cor da flor da mandala para um valor RGB. Agora, vamos explorar a mudança de cor das pétalas individuais da flor da mandala?

Faremos uso da biblioteca `random` do python. O método `random.randint()` nos permite escolher um valor aleatório para cada valor vermelho, verde ou azul. Para escolher um valor entre 0 inclusive e 256 exclusivo (ou seja, entre 0 e 255 inclusive), precisamos usar `random.randint(0, 256)`.

Use `random.randint(0, 256)` três vezes para produzir três valores aleatórios e conecte-os ao método `turtle.color()`. Agora você deve ser capaz de ver uma flor mandala multicolorida! Esta é definitivamente uma flor da qual Alex estaria interessado em coletar néctar!

<iframe src="https://trinket.io/embed/python/64ab3455ae" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br>
<br>

Congratulations! You helped Alex make a honeycomb and a flower! He can now happily live in his beehive, and make lots of honey! Your final image should look something like this:

![alt text width="70%"](../media/turtle-honeycomb-flower.png "final product")
