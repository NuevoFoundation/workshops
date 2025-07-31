---
title: "Atividade 10: Criando um meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 10
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
---

Outra coisa divertida que podemos fazer para melhorar nossa imagem é adicionar texto. Podemos fazer isso usando o módulo `ImageDraw` do Pillow. Vamos importá-lo no topo do nosso arquivo junto com os outros imports.

```python
from PIL import Image
from PIL import ImageFilter
from PIL import ImageDraw
```

Para adicionar texto, precisamos desenhar novamente a imagem que usamos antes. Fazemos isso usando a função `draw()`, que recebe um objeto de imagem. Depois disso, podemos usar o método `text()` para colocar o texto na imagem. O texto será desenhado com base nas coordenadas fornecidas. A função precisa de dois parâmetros obrigatórios: as coordenadas `xy` e o texto que será exibido.

Por exemplo:

```python
drawnImage = ImageDraw.Draw(img)
drawnImage.text((200,20), "Quando você percebe que aprendeu Python em uma hora.")
drawnImage.save("meuGatoComTexto.jpg")
```

Minha imagem agora ficou assim:  
<img src="../../media/meme.png" alt="gato em preto e branco de cabeça para baixo com texto: 'when you realize you learned python in an hour.'" width=50%>

### Desafio – Mude a fonte

Você percebeu que o texto na imagem acima está em uma fonte padrão pequena. Existem outros parâmetros que podemos passar no método `text()`. Dê uma olhada na [documentação](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) e veja se você consegue mudar a fonte, o tamanho da fonte e até a cor do texto!

{{% notice note %}}
Para isso, você vai precisar baixar um arquivo `.ttf` (um tipo de arquivo de fonte) da internet! Peça ajuda se precisar!
{{% /notice %}}
