---
title: "Atividade 1: Crie um quadro colorido"
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
date: 2020-07-11T00:00:00Z
weight: 1
draft: false
---

## Exemplo de quadro colorido básico

Aqui está um exemplo de como fazer um quadro colorido com a cor vermelha, largura 60 e comprimento 30.

```python
#Este é o exemplo para criar um quadro colorido.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
```
![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo da atividade 1")

## Crie seu próprio quadro colorido!

Escolha sua cor favorita e faça um quadro colorido para brincar! Aqui estão alguns exemplos de cores que você pode escolher, mas você também pode escolher sua própria cor.

<img src="../../media/Color-chart.png" width=30%>

<!-- Para acessibilidade, use este rótulo HTML -->
<label for="colorpicker">Você pode usar o seletor de cores para escolher uma cor:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
 Para ver sua imagem, clique no canto superior esquerdo (que diz 'Arquivos') e, a seguir, clique no arquivo de imagem para ver o resultado.
<div style="width:100%">
    <table>
        <td>
            <img src="../../media/open-file1.png" width=100%>
        </td>
        <td>
            <img src="../../media/open-file2.png" width=100%>
        </td>
    </table>
</div>
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Iniciar Replit</a>
