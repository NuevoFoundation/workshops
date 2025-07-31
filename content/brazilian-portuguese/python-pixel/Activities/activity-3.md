---
title: "Atividade 3: Desafio: Crie novos elementos"
prereq: "Fundamentos de Python, Manipulação de Imagens em Python: Abrir uma Imagem, Pixels em Python: Cores e Pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/YkxNH1TWjR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Usando loops, você pode criar seus próprios elementos no quadro de cores. Dá para desenhar seu próprio logo ou qualquer outra coisa que quiser nesse quadro. Aqui está um exemplo que preparamos para você.

### Exemplo: desenhar um N

```python
# Cria o quadro de cores original
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

# Usa loop aninhado para alterar o quadro de cores
# Linha vertical esquerda
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Linha vertical direita
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

# Linha diagonal central
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```

output:  
`imagem mostrando o exemplo da atividade 3`  
![alt text](../../media/Activity3_ex.png "imagem mostrando o exemplo da atividade 3")

### Crie seu próprio elemento!

{{% notice tip %}}
Você pode desenhar letras simples, como H, K, T e outras. Pode mudar a cor de partes dessas letras para deixá-las mais bonitas.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Abrir no Replit</a>
