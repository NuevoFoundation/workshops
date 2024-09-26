---
title: "Atividade 6: Cortar imagem"
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 6
draft: false
---

Nesta seção, começaremos a aprender como cortar sua imagem.

### Exemplo - Corte o gato ao meio

Agora, vamos recortar a metade direita da imagem do gato.
  
<img src="../../media/cat.png" largura=50%>

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Configure uma nova imagem com meia largura e altura
newimg = Image.new('RGB', (width // 2, height))

# Defina os pixels para a nova imagem
for i in range(width // 2):    
    for j in range(height): # Para cada linha
        color = img.getpixel((i,j)) # Obtém a cor da imagem original
        newimg.putpixel((i,j),color) # Coloca a cor na nova imagem

newimg.save("Mycat.png")
```

Uau! Este é o nosso gato após o corte. Cortamos a metade direita da imagem!

<img src="../../media/halfcat.png" width=25%>

### Exemplo - Recorte a peça central

Vamos recortar a imagem do gato para ficar apenas com a parte central!

<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configure uma nova imagem com meia largura e meia altura
newimg = Image.new('RGB', (width // 2, height // 2))

# Defina o pixel para a nova imagem
for i in range(width // 4, (width // 4) * 3): # Vamos fazer com que o primeiro 1/4 da largura da imagem atinja o último 1/4 da largura da imagem
    for j in range(height // 4, (height // 4) * 3): # Para cada linha
        color = img.getpixel((i,j)) # Obtém a cor da imagem original
        newimg.putpixel((i - width // 4, j - height // 4), color) # Coloca a cor na nova imagem

newimg.save("Mycat.png")
```

Uau! Este é o nosso gato após o corte.
<img src="../../media/cropcat.png" width=25%>

### Desafio - Cortar imagem com base em sua escolha

Agora é sua vez de cortar a parte que quiser do gato fofo! Incrível!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Iniciar Replit</a>
