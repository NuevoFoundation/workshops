---
title: "Atividade 1: Crie um quadro de cores"
prereq: "Fundamentos de Python, Manipulação de Imagens em Python: Abrir uma Imagem, Pixels em Python: Cores e Pixels"
difficulty: "Intermediário"
date: 2020-07-11T00:00:00Z
weight: 1
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nz3Uz4kBoUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Exemplo de um quadro de cores básico

Aqui está um exemplo de como fazer um quadro de cores com a cor vermelha, uma largura de 60 e um comprimento de 30.

`from PIL import Image; img = Image.new('RGB', (60, 30), 'red'); img.save('pil_red.png')`

![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo da atividade")

## Crie seu próprio quadro de cores!

Escolha sua cor favorita e faça um quadro de cores para brincar! Aqui estão algumas cores de exemplo que você pode escolher, mas também pode escolher sua própria cor.

<img src="../../media/Color-chart.png" width=30%>

<label for="colorpicker">Você pode usar o seletor de cores para escolher uma cor:</label>
<input type="color" id="colorpicker">

{{% notice warning %}}
Para ver sua imagem, clique no canto superior esquerdo (onde diz 'Files'), e depois clique no arquivo de imagem para ver o resultado.
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

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity1" target="_blank">Abrir no Replit</a>
