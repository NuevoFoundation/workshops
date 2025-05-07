---
title: "Atividade 7: Alterar o fundo da imagem"
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 7
draft: false
---

Nesta seção, começaremos a aprender como alterar o fundo simples da sua imagem usando pixels.

### Exemplo - Alterar cor de fundo

Vamos mudar a cor de fundo do Nuvi para rosa.
<img src="../../media/nuevo.png" width=25%>

```python
from PIL import Image

# Abra a imagem do Nuvi
img = Image.open("nuevo.png")

width = img.size[0]
height = img.size[1]
 
# Configure uma nova imagem com largura e altura
newimg = Image.new('RGB',(width,height))

# Defina os pixels para a nova imagem
colorpink = (244,114,208) 
coloryellow = img.getpixel((0,0))
for i in range(width):    
    for j in range(height):    
        color = img.getpixel((i,j)) # Obtém a cor da imagem original
        if color == coloryellow: # Se for amarelo, então:
            newimg.putpixel((i,j),colorpink) # Mude a cor para rosa
        else:
            newimg.putpixel((i,j),color) # Caso contrário, a cor permanece a mesma

newimg.save("nuevopink.png")
```

Uau! Este é o nosso novo Nuvi depois de mudar o fundo.
<img src="../../media/nuevopink.png" width=25%>


### Desafio - Mude o plano de fundo com base na sua escolha

Agora é sua vez de mudar a cor que quiser no Nuvi!

{{% notice warning %}}
Para ver sua imagem, clique no canto superior esquerdo (que diz ‘Files’) e, a seguir, clique no arquivo de imagem para ver o resultado.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity7" target="_blank">Iniciar Replit</a>
