---
title: "Pixels em uma Imagem"
draft: false
weight: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WvDHBwyM6_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pixels

Pixels são pequenas áreas de cor em uma tela. Imagens são formadas por vários pixels lado a lado. Podemos modificar pixels mudando o **valor RGB**, ou seja, ajustando a quantidade de vermelho, verde e azul de cada pixel.  
Quando vemos uma imagem na tela, ela é composta por muitos pixels coloridos, mas **cada pixel tem apenas uma cor e ocupa uma posição única na imagem**.

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

Vamos começar a criar imagens!  
Não se esqueça de que já aprendemos a abrir e salvar imagens com o módulo Pillow nas seções anteriores!

## Criando imagens com pixels

```python
# Lembre-se de importar Image
from PIL import Image

Image.new(mode, size)
Image.new(mode, size, color)
```

`Image.new()` cria uma nova imagem com o modo e tamanho informados (e opcionalmente, uma cor).  
Usamos o modo `'RGB'`. O tamanho é uma tupla `(largura, altura)`. A cor pode ser um valor RGB ou o nome da cor.  
Se não definir uma cor, a imagem será preenchida com preto.

## Vamos ver alguns exemplos

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100), (100,100,100))
img.save('pil_grey.png')
```

A variável `img` guarda a imagem PNG, que fica assim:  
![alt text](../../media/grey.png "Imagem cinza gerada por pixels")

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100), "black")
img.save('pil_black.png')
```

Aqui, ao especificar `"black"` como cor RGB, criamos e salvamos esta imagem:  
![alt text](../../media/black.png "Imagem preta gerada por pixels")

## Alterando um pixel na imagem

E se quisermos mudar um pixel em uma imagem?

A função `img.putpixel((x, y), (r, g, b))` coloca um novo pixel na posição `(x, y)` com a cor RGB especificada.

## Vamos ver um exemplo

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100), "yellow")
img.putpixel((100, 50), (0, 0, 0))
img.save('pil_black-dot.png')
```

Após criar uma imagem amarela de 200x100, a função `putpixel` coloca um pequeno ponto preto bem no meio do bloco amarelo.  
Esse ponto é apenas 1 pixel – talvez você precise ampliar a imagem para enxergar!

![alt text](../../media/black-dot.png "Imagem mostrando ponto preto em fundo amarelo")
