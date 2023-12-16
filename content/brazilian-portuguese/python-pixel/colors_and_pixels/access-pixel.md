---
title: "Acesse pixels na imagem"
draft: false
weight: 5
---

## Mais sobre pixels

Já aprendemos como fazer uma imagem em cores puras usando pixels e alterar um pixel na imagem. Agora aprenderemos como identificar pixels em imagens existentes.

* Para obter informações sobre como usar listas e tuplas em Python, veja mais nestas páginas:
<a href="../../../python-basics/data-structures/" target="blank">Estrutura de dados</a>

## Obtenha dados de imagem 

```python
# Lembre-se de importar a imagem
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```
`Image.size` gives a `(width, height)` value of an image. `Image.size[0]` gives the width of the image and `Image.size[1]` gives the height of the image.

## Vamos ver um exemplo

```python
# Lembre-se de importar a imagem
from PIL import Image
img=Image.new('RGB', (200,100),(100,100,100))
# Vamos imprimir os detalhes da imagem:
print(img.size) 
print(img.size[0])
print(img.size[1])
```

O código acima será impresso:  
```  
(200, 100)  
200  
100  
```
Aqui o tamanho da imagem é 200 por 100. A largura é 200, a altura é 100.

## Obtenha informações de pixel

`img.getpixel(x,y)` obterá um valor de cor em uma determinada posição. Posição é um valor `(largura, altura)` desse pixel. Cor é a cor RGB desse pixel.

## Vamos ver um exemplo

```python
# Lembre-se de importar a imagem
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))
# Vamos imprimir a cor do pixel
print(color)
```

O código acima será impresso:
```
(255, 255, 0)
```

## Obtenha o valor RGB de um pixel

Cada cor RGB fornece um valor de tupla `(vermelho, verde, azul)` de um pixel. `Color[0]` fornece o valor vermelho do pixel, `Color[1]` fornece o valor verde do pixel e `Color[2]` fornece o valor azul do pixel.

#### Vamos ver um exemplo

```python
# Lembre-se de importar a imagem
from PIL import Image
img=Image.new('RGB', (200,100),"yellow")
color=img.getpixel((100,50))

# Vamos imprimir o valor RGB de um pixel
print(color[0])
print(color[1])
print(color[2])
```

O código acima será impresso:  
```
255
255
0
```
Aqui, o valor RGB é dividido de modo que o vermelho tenha um valor de 255, o verde tenha um valor de 255 e o azul tenha um valor de 0.