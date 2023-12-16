---
title: "Abra uma imagem"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Para alterar uma imagem, devemos abrir uma imagem. Podemos usar o módulo `Pillow Image` que acabamos de importar na configuração.
Vamos primeiro encontrar algumas imagens para abrir. Encontre uma imagem de sua preferência e faça o download. Depois de fazer o download, navegue de volta para a janela do Replit e carregue sua imagem clicando nos três pontos e selecionando ‘carregar arquivo’.

Por exemplo, para fazer upload do arquivo cat.jpg:

![alt text](../../media/upload_file.png "imagem mostrando como fazer upload de um arquivo")

Você deverá ver o arquivo JPG no lado esquerdo depois de carregá-lo. Observe que sua imagem pode ter uma extensão diferente.

O próximo passo é abrir essa imagem dentro do código. Existem funções no módulo `Pillow Image` que importamos que nos permitem fazer isso.

Para abrir e mostrar a imagem que você baixou, faça o seguinte:

```python
    image = Image.open("cat.jpg")
    image.save("myCat.jpg")
```

Se você estiver usando uma imagem diferente, certifique-se de colocar o nome do arquivo entre aspas. O código acima abre a imagem JPG e armazena essa imagem na variável imagem. Para verificar se a variável image contém a imagem, podemos então salvá-la como uma nova imagem. Desta forma a imagem aparecerá na janela.

Clique em run (executar) e veja sua imagem aparecer! Minha imagem fica assim:

<img src="../../media/cat.png" alt="cat" width=50%>
