---
title: "Atividade 9: Gire sua imagem"
date: 2020-09-08T00:00:00Z
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
weight: 9
draft: false
---

In this section, we will start to learn how to rotate your image using pixels.

### Exemplo - Gire sua imagem 180 graus no sentido horário

Vamos girar nosso gato 180 graus no sentido horário.
<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configure uma nova imagem com meia largura e altura
newimg = Image.new('RGB',(width,height) )

# Defina o pixel para a nova imagem
for i in range(width): # Para cada coluna
    for j in range(height): # Para cada linha
        # Concentre-se em como obtemos nossa altura.
        heightNew = height - 1 - j
        
        # Concentre-se em como obtemos nosso widthNew.
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Obtenha a cor da imagem original
        newimg.putpixel((i,j),color) # Coloca a cor na nova imagem

newimg.save("Mycat.png")
```

Uau! Este é o nosso novo gato depois de girar.
<img src="../../media/catrot.png" width=50%>

{{% notice note %}}

Preste atenção em como obtemos nossa heightNew e widthNew. Pense nessas variáveis ​​com cuidado e tente visualizá-las.

Por exemplo, tente aplicá-los no seguinte grupo de letras 4x4:

<img src="../../media/table.png" width=15%>

Em seguida, gire-o 180 graus no sentido horário e compare-o com a saída anterior. Eles são os mesmos?
{{% /notice %}}


### Desafio - Gire seu gato 90 graus no sentido anti-horário

Agora é sua vez de girar seu gato 90 graus no sentido anti-horário!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Iniciar Replit</a>

{{% showanswer Advanced %}}

O módulo Pillow possui funções que podem ajudar a simplificar as etapas acima! Para fazer isso, vamos dar uma olhada na função `Pillow Image` `rotate()`.

A rotação da imagem funciona usando ângulos. Por exemplo, `rotate(45)` inclinará sua imagem lateralmente em 45 graus. Usar `rotate(90)` virará sua imagem de lado.

Vamos tentar! Vamos girar a imagem antes de salvá-la:

```python
    image = Image.open("cat.jpg")
    image.rotate(90)
    image.save("myCat.jpg")
```

Hmm, a imagem não parecia girar. Por que? Bem, a imagem que abrimos está salva na variável image. Quando giramos a imagem, não salvamos a imagem girada em nenhuma variável, então nosso código não salva a imagem girada.

Vamos fazer isso:

```python
    image = Image.open("cat.jpg")
    image = image.rotate(90)
    image.save("myCat.jpg")
```

Desafio: você pode virar essa imagem completamente? Você pode virar a imagem 3/4 de volta
sem usar um ângulo > 180? (Dica: tente usar números de ângulo negativos!)

Girada totalmente, minha imagem fica assim:

<img src="../../media/upside_down.png" alt="cat upside down" width=50%>
</br>
{{% /showanswer %}}

