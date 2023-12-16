---
title: "Pixels em uma imagem"
draft: false
weight: 4
---

## Pixels 

Pixels são uma pequena área colorida em uma tela. As imagens são formadas por pixels na tela. Podemos manipular pixels alterando o **Valor RGB**, que basicamente altera o valor das cores vermelho (Red), verde (Green) e azul (Blue) em cada pixel. Quando vemos uma imagem em uma tela, ela é composta por uma tonelada de minúsculos pixels em várias cores, todos próximos uns dos outros. No entanto, cada pequeno pixel possui uma única cor em uma posição única na imagem.

<div style="width:80%;padding-left:20%;">
    <table>
        <td>
            <img src="../../media/nuvi.png" width=100%>
        </td>
        <td>
            <img src="../../media/pixel-nuvi.png" width=100%>
        </td>
    </table>
</div>

Vamos começar a fazer imagens. Não se esqueça, aprendemos como abrir e salvar imagens em Python usando o módulo Pillow nas seções anteriores!

## Fazendo imagens usando pixels

```python
# Lembre-se de importar a imagem
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` cria uma nova imagem com o modo e tamanho fornecidos (e opcionalmente, a cor). Aqui, podemos usar `RGB` como modo. Tamanho é um valor `(largura, altura)` de uma imagem. Cor é a cor RGB dos pixels. Também podemos usar nomes de cores em vez de valores RGB. Se você não inicializar o valor da cor, a imagem será preenchida com preto.

## Vamos ver alguns exemplos

```python
# Lembre-se de importar a imagem
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
img.save('pil_grey.png')
```
A variável `img` armazena a imagem PNG semelhante a esta:

![alt text](../../media/grey.png "Imagem mostrando o primeiro exemplo de pixels")

```python
# Lembre-se de importar a imagem
from PIL import Image
img=Image.new('RGB', (200,100),"black")
img.save('pil_black.png')
```
Aqui, especificar `black` como a cor RGB cria e armazena a imagem PNG semelhante a esta:

![alt text](../../media/black.png "Imagem mostrando o segundo exemplo de pixels")

## Alterando um pixel em uma imagem

E se quisermos colocar outro pixel em uma imagem?

A função `img.putpixel( (x,y), (r, g, b))` coloca um novo pixel na imagem com a posição e cor fornecidas. Posição é um valor `(width, height)` da localização desse pixel na imagem. Cor é a cor RGB desse pixel.

## Vamos ver um exemplo

```python
# Lembre-se de importar a imagem
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
img.putpixel( (100,50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Depois de criar uma imagem amarela de 200x100, a função `putpixel` coloca um pequeno ponto no meio deste bloco amarelo. Este é um pequeno pixel - na verdade, é tão pequeno que talvez seja necessário expandir a imagem para realmente vê-lo!

![alt text](../../media/black-dot.png "imagem mostrando o terceiro exemplo de pixels")

