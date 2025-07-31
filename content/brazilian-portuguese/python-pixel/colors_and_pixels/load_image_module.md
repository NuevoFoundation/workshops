---
title: "Importar um módulo de imagem"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

### Configurando o projeto

Para fazermos coisas legais com imagens, precisamos desbloquear algumas funções úteis. Para isso, precisamos importar um módulo. Neste caso, ao importar o módulo <b>Pillow</b>, conseguimos usar funções que nos ajudam a modificar imagens.

Primeiro, apague tudo que está no arquivo `main.py`.  
Depois, adicione as instruções abaixo:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>

Assim que você clicar em "Run", verá que o módulo será instalado no console:

![alt text](../../media/installed_module.png "imagem do console mostrando o módulo instalado com sucesso")

Se você viu isso, parabéns! Você importou o módulo com sucesso.  
Se estiver com problemas, peça ajuda antes de continuar.

{{% notice note %}}
Se você estiver curioso para saber quais funções existem no módulo Pillow (Image), veja mais aqui:  
https://pillow.readthedocs.io/en/latest/handbook/index.html
{{% /notice %}}
