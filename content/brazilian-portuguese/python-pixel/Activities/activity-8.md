---
title: "Atividade 8: Inverta sua imagem"
date: 2020-09-08T00:00:00Z
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jx_b8111WW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nesta seção, vamos aprender como inverter sua imagem usando pixels.

### Exemplo – Inverter sua imagem de cabeça para baixo

Vamos virar o gato de cabeça para baixo.  
<img src="../../media/cat.png" width=50%>

{{% notice note %}}
Virar a imagem de cabeça para baixo é o mesmo que criar uma imagem simétrica em relação à `linha central horizontal`, que é a linha preta na imagem abaixo.
{{% /notice %}}

<img src="../../media/cathori.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Criar nova imagem com mesma largura e altura
newimg = Image.new('RGB', (width,height))

# Definir os pixels da nova imagem
for i in range(width): # Para cada coluna
    for j in range(height): # Para cada linha
        heightNew = height - 1 - j # Nova posição vertical do pixel
        color = img.getpixel( (i, heightNew) ) # Cor da imagem original
        newimg.putpixel((i,j),color) # Aplicar na nova imagem

newimg.save("Mycat.png")
```

Uau! Aqui está nosso novo gato depois de virar de cabeça para baixo.  
<img src="../../media/flipcat.png" width=50%>

Como descobrimos como definir `heightNew`?

`heightNew = height - 1 - j`

Esse é o segredo para inverter o gato. Pegamos a altura da imagem e subtraímos 1 (porque a contagem começa do zero) e o valor atual da linha (`j`). Isso nos dá o local espelhado.

Você pode desenhar em papel para visualizar isso melhor.

Nosso código principal é:

```python
width = img.size[0]
height = img.size[1]

newimg = Image.new('RGB', (width,height))

for i in range(width):
    for j in range(height):
        heightNew = height - 1 - j
        color = img.getpixel((i, heightNew))
        newimg.putpixel((i,j), color)
```

Por exemplo, tente aplicar esse código no seguinte grupo de letras 4x4:  
<img src="../../media/table.png" width=15%>

Depois crie a versão espelhada usando a linha horizontal como base e compare com o resultado anterior. Ficaram iguais?

### Desafio – Inverta seu gato da esquerda para a direita

Agora é sua vez de inverter o gato da esquerda para a direita!

{{% notice note %}}
Virar a imagem da esquerda para a direita é o mesmo que criar uma imagem simétrica com relação à `linha central vertical`.

Preste atenção à variável `widthNew` e pense com calma sobre como defini-la.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Abrir no Replit</a>
