---
title: "Atividade 9: Rotacione sua imagem"
date: 2020-09-08T00:00:00Z
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
weight: 9
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0d9NT0MEPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nesta seção, vamos aprender como girar sua imagem usando pixels.

### Exemplo – Girar a imagem 180 graus no sentido horário

Vamos girar nosso gatinho 180 graus no sentido horário.  
<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Nova imagem com mesmo tamanho
newimg = Image.new('RGB',(width,height))

# Definir os pixels da nova imagem
for i in range(width): # Para cada coluna
    for j in range(height): # Para cada linha
        # Veja como calculamos heightNew e widthNew
        heightNew = height - 1 - j
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Pegar cor da imagem original
        newimg.putpixel((i,j),color) # Aplicar na nova imagem

newimg.save("Mycat.png")
```

Uau! Aqui está nosso novo gato após a rotação.  
<img src="../../media/catrot.png" width=50%>

{{% notice note %}}
Preste atenção em como calculamos `heightNew` e `widthNew`. Tente visualizar esses valores!

Por exemplo, aplique esse cálculo ao grupo de letras 4x4 abaixo:  
<img src="../../media/table.png" width=15%>

Depois gire o grupo 180 graus no sentido horário e compare o resultado. É o mesmo?
{{% /notice %}}

### Desafio – Gire seu gato 90 graus no sentido anti-horário

Agora é sua vez de girar o gato 90 graus no sentido anti-horário!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Abrir no Replit</a>

{{% showanswer Advanced %}}

O módulo Pillow tem funções que podem simplificar os passos acima!  
Vamos usar a função `rotate()` do `Pillow Image`.

A função `rotate()` funciona com ângulos. Por exemplo, `rotate(45)` inclina a imagem 45 graus. `rotate(90)` gira a imagem 90 graus.

Vamos tentar:

```python
image = Image.open("cat.jpg")
image.rotate(90)
image.save("myCat.jpg")
```

Hmm, a imagem não parece ter girado. Por quê? Porque giramos a imagem, mas não salvamos o resultado em uma nova variável.

A forma correta é:

```python
image = Image.open("cat.jpg")
image = image.rotate(90)
image.save("myCat.jpg")
```

Desafio: você consegue girar a imagem totalmente (360 graus)?  
E girar 3/4 de volta sem usar um ângulo maior que 180? (Dica: tente ângulos negativos!)

Minha imagem girada totalmente ficou assim:  
<img src="../../media/upside_down.png" alt="gato de cabeça para baixo" width=50%>

{{% /showanswer %}}
