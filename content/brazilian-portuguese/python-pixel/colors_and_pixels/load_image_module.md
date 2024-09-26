---
title: "Importe um módulo de imagem"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

### Configurando o projeto

Para fazer coisas divertidas com imagens, precisamos desbloquear algumas funções úteis. Para obter essas funções, precisamos importar um módulo. Neste caso, se importarmos o módulo <b>Pillow</b>, poderemos utilizar algumas funções que nos ajudarão a modificar imagens.

Primeiro, vamos deletar tudo no arquivo main.py. Em seguida, adicione as seguintes afirmações:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>


Depois de clicar em run (executar), você verá o módulo sendo instalado no console:

![alt text](../../media/installed_module.png "imagem do que você deve ver ao instalar o módulo com sucesso")

Se você ver o que está acima, significa que importou um módulo com sucesso! Se você estiver enfrentando problemas, peça ajuda antes de prosseguir.

{{% notice note %}}

Se você está curioso para ver quais funções existem no módulo Pillow Image, você encontra informações sobre ele aqui:: https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}
