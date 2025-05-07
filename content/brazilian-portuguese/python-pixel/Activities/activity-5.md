---
title: "Atividade 5: Filtros mais avançados"
date: 2020-09-08T00:00:00Z
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
weight: 5
draft: false
---

Na última seção, vimos um exemplo de criação de um filtro azul e pensamos em como criar o filtro cinza. Agora, vamos criar nosso filtro cinza juntos.

### Exemplo - Crie um filtro cinza

Vamos mudar a imagem original do gato abaixo com nosso filtro cinza juntos! 

<img src="../../media/cat.png" width=50%>

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")

# Filtros cinza
for i in range(img.size[0]): # Para cada coluna:
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j)) # Obter cor 
        GREY = (color[0] + color[1] + color[2]) // 3 # Média dos valores de pixel
        img.putpixel((i,j),(GREY, GREY, GREY)) # Defina a cor de acordo

# Salve o gato após filtrar
img.save("Mycat.png")
```

{{% notice tip %}}
Lembre-se, para definir um pixel cinza, todos os três valores de RGB devem ser iguais. No entanto, definir cada pixel com o mesmo valor aleatório (ex. 200) tornará toda a imagem cinza, em vez de apenas adicionar um filtro sobre a imagem existente do gato.

Qual a melhor forma de descobrir como definir um pixel para ser a versão 'acinzentada' dele? Podemos fazer uma média de cada valor das cores RGB. Você pode usar // para fazer uma divisão inteira, o que garante que o resultado da operação média seja um número inteiro.

{{% /notice %}}

Uau! Este é o nosso gato depois do filtro cinza.
  
<img src="../../media/greyfiltercat.png" width=50%>

### Exemplo – Filtro parcial

Agora, vamos pensar em como adicionar filtro apenas em parte do nosso adorável gato.

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")

# Filtros cinza
for i in range((img.size[0] // 2)): # Para colunas da primeira metade
    for j in range((img.size[1] // 2)): # Para linhas da primeira metade
        color = img.getpixel((i,j)) # Obtém cor
        GREY = (color[0] + color[1] + color[2]) // 3 # Média dos valores dos pixels
        img.putpixel((i,j),(GREY, GREY, GREY)) # Defina a cor de acordo

#Salve o gato após filtrar
img.save("Mycat.png")
```

Uau! Este é o nosso gato depois do filtro. Filtramos apenas um quarto do gato no canto superior esquerdo！

<img src="../../media/partialfilter.png" largura=50%>

### Desafio - Crie seu próprio filtro parcial

Agora é sua vez de filtrar a parte que desejar com diferentes tipos de filtros no gato fofo! Incrível!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity5" target="_blank">Iniciar Replit</a>

{{% showanswer Advanced %}}

Não seria bom se pudéssemos seguir os passos acima e torná-lo mais simples? Vamos fazer isso usando a função `Pillow ImageFilter` `filter()` e `convert()`.

Para usar a função `filter()`, você pode especificar o tipo ImageFilter entre parênteses. Por exemplo, `image.filter(ImageFilter.BLUR)` deixará a imagem desfocada. Ou, se você usar `ImageFilter.CONTOUR`, ele adicionará um efeito do tipo ‘esboço’ à sua imagem.

Por exemplo, para o 'img' acima:

```python
    blurredImage = img.filter(ImageFilter.BLUR) 
    blurredImage.save("myCatBlurred.jpg")
```

Você deverá ver que a imagem salva do gato está desfocada. Experimente isso com alguns outros filtros de imagem até encontrar um que lhe agrade!

Além disso, podemos usar a função convert() para definir nossa imagem para preto e branco. Para usar esta função, você pode especificar o modo para o qual deseja converter sua imagem. Os mais comuns são “L”, que converte uma imagem em escala de cinza, e “RGB”, que converte uma imagem em sua cor verdadeira.

Vamos experimentar assim:

```python
    greyscaleImage = img.convert("L")
    greyscaleImage.save("myCatBW.jpg")
```

Se você combinar a função desfocada e a função de conversão em preto e branco, obterá algo assim – perfeito!

<img src="../../media/bw_upside_down.png" alt="gato preto e branco desfocado de cabeça para baixo" width=50%>
</br>
{{% /showanswer %}}

