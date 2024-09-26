---
title: "Activity 10: Making a meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 10
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
--- 

Outra coisa que podemos fazer para aprimorar nossa imagem é adicionar texto. Podemos fazer isso utilizando o módulo `Pillow ImageDraw`. Vamos importar isso no topo do nosso arquivo junto com nossas outras instruções de importação.

```python
    from PIL import Image
    from PIL import ImageFilter
    from PIL import ImageDraw
```

Para nos permitir adicionar texto, devemos redesenhar a mesma imagem que usamos anteriormente. Vamos fazer isso usando a função `draw()`, que recebe um objeto de imagem. Depois que a imagem for desenhada, podemos adicionar texto a ela usando o método `text()` para definir o texto da imagem. O texto é desenhado com base nas coordenadas fornecidas. A função recebe dois parâmetros obrigatórios: as coordenadas xy e o texto necessário.

Por exemplo:

```python
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "When you realize you learned python in an hour.")
    drawnImage.save("myCatWithText.jpg")
```


My image now looks like this:
<img src="../../media/meme.png" alt="gato preto e branco desfocado de cabeça para baixo com um texto que diz “quando você perceber, aprendeu python em uma hora”.`" width=50%>

### Desafio - Alterar a fonte
Você pode ver que o texto na imagem criada acima está em uma fonte pequena e padrão. Existem outros parâmetros dentro do método `text()` que você pode usar. Dê uma olhada na [documentação](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) e veja se você pode alterar a fonte e o tamanho da fonte, bem como a cor do texto!

{{% notice note %}}

Isso exigirá o download de um .ttf (também conhecido como arquivo de fonte) on-line! Peça ajuda se tiver alguma dúvida.

{{% /notice %}}
