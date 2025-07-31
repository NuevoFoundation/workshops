---
title: "Atividade 7: Mudar o fundo da imagem"
prereq: "Fundamentos de Python, Manipulação de Imagens em Python: Abrir uma Imagem, Pixels em Python: Cores e Pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zdi2R_EK6QA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nesta seção, vamos aprender como mudar o fundo simples de uma imagem usando pixels.

### Exemplo – Mudar a cor do fundo

Vamos mudar o fundo da imagem da Nuvi para rosa.  
<img src="../../media/nuevo.png" width=25%>

```python
from PIL import Image

# Abrir a imagem da Nuvi
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Criar nova imagem com mesma largura e altura
newimg = Image.new('RGB',(width,height))

# Definir os pixels da nova imagem
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Pegar cor da imagem original
        if color == coloryellow: # Se for amarelo:
            newimg.putpixel((i,j),colorpink) # Mudar para rosa
        else:
            newimg.putpixel((i,j),color) # Senão, manter a cor original

newimg.save("nuevopink.png")
```

Uau! Aqui está a Nuvi com o novo fundo rosa.  
<img src="../../media/nuevopink.png" width=25%>

### Desafio – Mude o fundo com a cor que você quiser

Agora é sua vez! Escolha a cor que quiser e mude o fundo da Nuvi!

{{% notice warning %}}
Para ver sua imagem, clique no canto superior esquerdo (onde diz ‘Files’) e depois clique no arquivo da imagem para ver o resultado.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Abrir no Replit</a>
