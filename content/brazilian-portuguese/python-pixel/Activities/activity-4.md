---
title: "Atividade 4: Criar Filtro Básico"
date: 2020-09-08T00:00:00Z
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
weight: 4
draft: false
---

Agora que entendemos mais sobre pixels e imagens, podemos começar a aprender como criar seu próprio filtro na imagem. Vejamos alguns exemplos de como criar um filtro básico em sua imagem.

### Exemplo de filtro azul

<img src="../../media/cat.png" width=50%>
Queremos adicionar um filtro azul no gato fofo acima. Vamos ver como conseguir isso.

```python
# Precisamos importar o pacote PIL para permitir a manipulação de pixels.
from PIL import Image

# Abra a imagem do gato
img = Image.open("cat.png")

# Vamos adicionar o filtro azul
for i in range(img.size[0]): # Para cada coluna
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j) )
        img.putpixel((i,j),(0, 0, color[2])) # Defina a cor de acordo

#Salve o gato após filtrar
img.save("Mycat.png")
```

Uau! Este é o nosso gato depois do filtro azul.
<img src="../../media/bluefiltercat.png" width=50%>

{{% notice tip %}}
Como isso funcionou? Vejamos o circuito: 

```python
for i in range(img.size[0]): # Para cada coluna
    for j in range(img.size[1]): # Para cada linha
        color = img.getpixel( (i,j) ) # Obtenha o pixel atual
        img.putpixel((i,j),(0, 0, color[2])) # Defina a cor de acordo
```

Começamos percorrendo a imagem, por cada coluna e cada linha, para obter cada pixel. Em seguida, obtém o valor da cor atual do pixel. Para definir um filtro azul para esse pixel, tudo o que fazemos é definir os valores RGB 'Vermelho' e 'Verde' como 0. Portanto, apenas os valores 'Azul' permanecem!

{{% /notice %}}


### Desafio - Crie seu próprio filtro

Seguindo o exemplo acima, tente criar seus próprios filtros com cores diferentes.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity4" target="_blank">Iniciar Replit</a>

Finalmente, pense e tente criar um filtro cinza. Falaremos sobre como criar um filtro cinza na próxima seção.
