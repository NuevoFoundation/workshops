---
title: "Acessar pixels em uma imagem"
draft: false
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydP3GVHLGR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Mais sobre pixels

Já aprendemos como criar uma imagem de cor sólida usando pixels e como alterar um pixel da imagem. Agora, vamos aprender a identificar pixels em imagens já existentes.

* Para mais informações sobre como usar listas e tuplas em Python, veja esta página:  
<a href="../../../python-basics/data-structures/" target="blank">Estruturas de Dados</a>

## Obter dados da imagem

```python
# Lembre-se de importar Image
from PIL import Image
Image.size
Image.size[0]
Image.size[1]
```

`Image.size` retorna um valor `(largura, altura)` da imagem.  
`Image.size[0]` retorna a largura da imagem e `Image.size[1]` retorna a altura.

## Vamos ver um exemplo

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100),(100,100,100))
# Vamos imprimir os detalhes da imagem:
print(img.size) 
print(img.size[0])
print(img.size[1])
```

O código acima imprimirá:  
```
(200, 100)  
200  
100  
```

Aqui, o tamanho da imagem é 200 por 100. A largura é 200 e a altura é 100.

## Obter a informação de um pixel

`img.getpixel(x,y)` retorna a cor de um pixel em determinada posição.  
A posição é dada em `(largura, altura)` e a cor é no formato RGB do pixel.

## Vamos ver um exemplo

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100), "yellow")
color = img.getpixel((100,50))
# Vamos imprimir a cor do pixel
print(color)
```

O código acima imprimirá:  
```
(255, 255, 0)
```

## Obter o valor RGB de um pixel

Cada cor RGB é uma tupla `(vermelho, verde, azul)`.  
`color[0]` retorna o valor vermelho, `color[1]` retorna o valor verde, `color[2]` retorna o valor azul do pixel.

#### Vamos ver um exemplo

```python
# Lembre-se de importar Image
from PIL import Image
img = Image.new('RGB', (200,100), "yellow")
color = img.getpixel((100,50))

# Vamos imprimir os valores RGB do pixel
print(color[0])
print(color[1])
print(color[2])
```

O código acima imprimirá:  
```
255
255
0
```

Aqui os valores RGB indicam que vermelho = 255, verde = 255 e azul = 0.
