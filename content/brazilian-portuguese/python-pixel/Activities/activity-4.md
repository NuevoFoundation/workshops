---
title: "Atividade 4: Crie um Filtro Básico"
date: 2020-09-08T00:00:00Z
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
weight: 4
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/jA6xNqAhb1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Agora que entendemos melhor sobre pixels e imagens, podemos começar a aprender como criar nossos próprios filtros em imagens. Vamos ver alguns exemplos de como fazer um filtro básico.

### Exemplo de filtro azul

<img src="../../media/cat.png" width=50%>  
Queremos adicionar um filtro azul no gatinho fofo acima. Vamos ver como fazer isso:

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")

# Vamos adicionar o filtro azul
for i in range(img.size[0]): # Para cada coluna
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Define a nova cor

# Salvar o gato com filtro aplicado
img.save("Mycat.png")
```

Uau! Aqui está o nosso gato com o filtro azul aplicado.  
<img src="../../media/bluefiltercat.png" width=50%>

{{% notice tip %}}
Como isso funciona? Vamos olhar o loop:

```python
for i in range(img.size[0]): # Para cada coluna
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j) ) # Pega o pixel atual
        img.putpixel((i,j),(0, 0, color[2])) # Define a cor usando só o azul
```

Começamos percorrendo a imagem por colunas e linhas para pegar cada pixel. Depois, pegamos a cor atual do pixel. Para aplicar o filtro azul, colocamos os valores 'Vermelho' e 'Verde' como 0. Assim, só o valor 'Azul' continua!

{{% /notice %}}

### Desafio – Crie seu próprio filtro

Seguindo o exemplo acima, tente criar seus próprios filtros com outras cores.  
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Abrir no Replit</a>

Por fim, tente imaginar como criar um filtro cinza. Vamos aprender sobre isso na próxima seção.
