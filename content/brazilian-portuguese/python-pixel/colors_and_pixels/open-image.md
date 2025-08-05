---
title: "Abrir uma imagem"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Para modificar uma imagem, primeiro precisamos abri-la. Podemos usar o módulo `Image` do Pillow que acabamos de importar na configuração.

Vamos começar escolhendo uma imagem para abrir. Encontre uma imagem que você goste e baixe-a.  
Depois que a imagem estiver salva, volte para a janela do Replit e envie o arquivo clicando nos três pontinhos e escolhendo a opção **"upload file"**.

Por exemplo, para enviar o arquivo `cat.jpg`:

![alt text](../../media/upload_file.png "imagem mostrando como enviar um arquivo")

Você verá o arquivo JPG aparecer no lado esquerdo da tela após o upload.  
Note que sua imagem pode ter uma extensão diferente (como .png, .jpeg etc.).

### Próximo passo: abrir a imagem no código

O módulo `Pillow Image` que importamos possui funções para abrir imagens.

Para abrir e visualizar a imagem que você enviou, use o seguinte código:

```python
image = Image.open("cat.jpg")
image.save("myCat.jpg")
```

Se estiver usando outra imagem, troque `"cat.jpg"` pelo nome correto do seu arquivo.  
O código acima abre a imagem e armazena ela na variável `image`. Depois, salvamos com outro nome para garantir que a imagem apareça no ambiente do Replit.

Clique em **Run** e veja a imagem aparecer!  
A minha imagem ficou assim:

<img src="../../media/cat.png" alt="gato" width=50%>
