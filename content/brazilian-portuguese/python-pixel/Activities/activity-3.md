---
title: "Atividade 3: Desafio: Projetar novos elementos"
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
date: 2020-09-08T00:00:00Z
weight: 3
draft: false
---

Usando loops, você pode criar seus próprios elementos no quadro colorido. Você pode criar seu próprio logotipo ou qualquer coisa que desejar neste quadro colorido. Aqui está um exemplo que fornecemos para você.


### Exemplo: faça um N.

```python
#Isso cria o quadro colorido original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'white')

#Isso usa loop while aninhado para alterar o quadro colorido.
#Linha vertical esquerda
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Linha vertical direita
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))

#Linha diagonal central
for y in range(5, 25):
  for x in range(10+(y-5), 15+(y-5)):
    img.putpixel( (x,y), (255, 211, 0)) 
img.save('pixel-activity3.png')
```
saída:
![alt text](../../media/Activity3_ex.png "imagem mostrando exemplo da atividade3")


### Projete seu próprio elemento!

{{% notice tip %}}
Na verdade, você pode criar algumas letras fáceis, como H, K, T e etc. Você pode alterar a cor de uma determinada parte dessas letras para torná-las mais bonitas.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity3" target="_blank">Iniciar Replit</a>
