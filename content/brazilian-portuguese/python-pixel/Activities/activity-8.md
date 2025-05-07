---
title: "Atividade 8: Vire sua imagem"
date: 2020-09-08T00:00:00Z
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
weight: 8
draft: false
---

Nesta seção, começaremos a aprender como inverter sua imagem usando pixels.

### Exemplo - Vire sua imagem de cabeça para baixo

Vamos virar o gato de cabeça para baixo.
<img src="../../media/cat.png" width=50%>

{{% notice note %}}

Virar a imagem de cabeça para baixo é o mesmo que criar uma imagem simétrica em relação à `linha central horizontal`, que é a linha preta na imagem a seguir.

{{% /notice %}}

<img src="../../media/cathori.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipulação com pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configure uma nova imagem com a mesma largura e altura
newimg = Image.new('RGB', (width,height))

# Defina o pixel para a nova imagem
for i in range(width): # Para cada coluna
    for j in range(height): # Para cada linha
        heightNew = height - 1 - j # Obtenha a nova localização da altura do pixel.
        color = img.getpixel( (i, heightNew) ) # Obtenha a cor da imagem original
        newimg.putpixel((i,j),color) # Coloca a cor na nova imagem

newimg.save("Mycat.png")
```

Uau! Este é o nosso novo gato depois de virar.

<img src="../../media/flipcat.png" width=50%>

Como descobrimos como definir `heightNew`? No código acima temos:

`heightNew = height - 1 - j`

Este é o ponto chave para virar o gato de cabeça para baixo. Isso pega a altura da imagem e subtrai 1, bem como a localização atual da altura do pixel (j). Subtraímos 1 para indexação; lembre-se de que os computadores começam a contar em '0' em vez de '1'. Subtraímos a localização atual da altura do pixel para obter a localização de onde o novo pixel deveria estar.

Você pode desenhar algumas imagens simples à mão para visualizar isso.

Lembre-se de que nosso código original é principalmente:

```python
width = img.size[0]
height = img.size[1]

# Configure uma nova imagem com a mesma largura e altura
newimg = Image.new('RGB', (width,height))

# Defina o pixel para a nova imagem
for i in range(width): # Para cada coluna
    for j in range(height): # Para cada linha
        heightNew = height - 1 - j # Obtenha a nova localização da altura do pixel.
        color = img.getpixel( (i, heightNew) ) # Obtenha a cor da imagem original
        newimg.putpixel((i,j),color) # Coloca a cor na nova imagem
```

Por exemplo, tente aplicar este código no seguinte grupo de letras 4x4:

<img src="../../media/table.png" width=15%>

Em seguida, crie a saída simétrica em relação à linha central horizontal e compare-a com a saída anterior. Eles são os mesmos?

### Desafio - Vire seu gato da esquerda para a direita

Agora é a sua vez de virar o gato da esquerda para a direita!
  
{{% notice note %}}

Virar a imagem da esquerda para a direita é o mesmo que criar uma imagem simétrica em relação à `linha central vertical`.

Preste atenção na variável `widthNew` e pense cuidadosamente em como defini-la.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity8" target="_blank">Iniciar Replit</a>

