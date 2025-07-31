---
title: "Atividade 5: Filtros mais avançados"
date: 2020-09-08T00:00:00Z
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/deYXkPt58co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Na seção anterior, vimos como criar um filtro azul e pensamos sobre como fazer um filtro cinza. Agora, vamos criar juntos o nosso filtro cinza!

### Exemplo – Criar um filtro cinza

Vamos modificar a imagem do gatinho abaixo com nosso filtro cinza!

<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")

# Aplicar filtro cinza
for i in range(img.size[0]): # Para cada coluna
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j)) # Capturar a cor
        GREY = (color[0] + color[1] + color[2]) // 3 # Média dos valores RGB
        img.putpixel((i,j),(GREY, GREY, GREY)) # Definir nova cor cinza

# Salvar a imagem com o filtro
img.save("Mycat.png")
```

{{% notice tip %}}
Lembre-se: para deixar um pixel cinza, os três valores RGB precisam ser iguais.  
Mas se você apenas usar um valor fixo (ex: 200), a imagem toda vai virar um tom de cinza, e não será um filtro sobre a imagem original.

Qual é a melhor forma de “cinzar” um pixel? Podemos fazer a média entre os valores RGB do pixel. Use `//` para fazer divisão inteira e garantir que o resultado seja um número inteiro.

{{% /notice %}}

Uau! Aqui está nosso gato com o filtro cinza:  
<img src="../../media/greyfiltercat.png" width=50%>

### Exemplo – Filtro parcial

Agora, vamos pensar em como aplicar um filtro apenas em uma parte do nosso lindo gatinho.

```python
# Precisamos importar o pacote PIL para manipular pixels
from PIL import Image

# Abrir a imagem do gato
img = Image.open("cat.png")

# Aplicar filtro cinza em uma parte
for i in range((img.size[0] // 2)): # Metade das colunas
    for j in range((img.size[1] // 2)): # Metade das linhas
        color = img.getpixel((i,j)) # Capturar a cor
        GREY = (color[0] + color[1] + color[2]) // 3 # Média dos valores RGB
        img.putpixel((i,j),(GREY, GREY, GREY)) # Aplicar tom cinza

# Salvar imagem com filtro
img.save("Mycat.png")
```

Uau! Aqui está nosso gato com o filtro aplicado só em um quarto da imagem (canto superior esquerdo):  
<img src="../../media/partialfilter.png" width=50%>

### Desafio – Crie seu próprio filtro parcial

Agora é a sua vez! Escolha a parte da imagem que quiser e aplique filtros diferentes no seu gatinho fofo. Que divertido!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Abrir no Replit</a>

{{% showanswer Advanced %}}

Não seria ótimo se pudéssemos simplificar os passos acima? Vamos fazer isso usando as funções `filter()` e `convert()` do `Pillow ImageFilter`.

Para usar a função `filter()`, você pode passar um tipo de filtro do `ImageFilter`.  
Exemplo: `image.filter(ImageFilter.BLUR)` aplica um efeito borrado.  
Ou `ImageFilter.CONTOUR` para um efeito de contorno, tipo desenho.

Para a imagem `img` que abrimos acima:

```python
    blurredImage = img.filter(ImageFilter.BLUR) 
    blurredImage.save("myCatBlurred.jpg")
```

Você verá a imagem do gato salva com efeito borrado. Teste outros filtros até achar um que goste!

Além disso, podemos usar a função `convert()` para transformar a imagem em preto e branco.  
Use o modo `"L"` para escala de cinza e `"RGB"` para manter as cores normais.

Vamos testar:

```python
    greyscaleImage = img.convert("L")
    greyscaleImage.save("myCatBW.jpg")
```

Se você combinar `filter()` com `convert("L")`, terá algo como isto – purrfeito!  
<img src="../../media/bw_upside_down.png" alt="gato preto e branco borrado de cabeça para baixo" width=50%>

{{% /showanswer %}}
