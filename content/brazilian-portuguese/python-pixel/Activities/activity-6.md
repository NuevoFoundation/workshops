---
title: "Atividade 6: Recortar Imagem"
prereq: "Fundamentos de Python, Manipulação de Imagens em Python: Abrir uma Imagem, Pixels em Python: Cores e Pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2AoHSdQOLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nesta seção, vamos aprender como recortar (cortar) uma imagem.

### Exemplo – Cortar o gato ao meio

Agora, vamos cortar a metade direita da imagem do gatinho.

<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")
width = img.size[0] 
height = img.size[1] 

# Criar nova imagem com metade da largura
newimg = Image.new('RGB', (width // 2, height))

# Copiar os pixels para a nova imagem
for i in range(width // 2):    
    for j in range(height): # Para cada linha
        color = img.getpixel((i,j)) # Pega cor da imagem original
        newimg.putpixel((i,j),color) # Aplica na nova imagem

newimg.save("Mycat.png")
```

Uau! Esse é nosso gato depois de ser recortado. Cortamos a metade direita da imagem!  
<img src="../../media/halfcat.png" width=25%>

### Exemplo – Cortar só a parte central

Vamos cortar a imagem do gato para deixar apenas a parte central!

<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Nova imagem com metade da largura e altura
newimg = Image.new('RGB', (width // 2, height // 2))

# Copiar apenas a parte central da imagem
for i in range(width // 4, (width // 4) * 3):    
    for j in range(height // 4, (height // 4) * 3): # Para cada linha
        color = img.getpixel((i,j)) # Cor da imagem original
        newimg.putpixel((i - width // 4, j - height // 4), color) # Inserir na nova

newimg.save("Mycat.png")
```

Uau! Esse é nosso gato depois de recortar só o centro.  
<img src="../../media/cropcat.png" width=25%>

### Desafio – Recorte a imagem do jeito que quiser!

Agora é sua vez! Escolha a parte da imagem que quiser recortar do gatinho fofo! Que legal!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity6" target="_blank">Abrir no Replit</a>
