---
title: "Usando Máquinas Virtuais - Parte 2"
description: "Continuando o guia introdutório sobre máquinas virtuais"
date: 2022-09-21
difficulty: "Intermediário"
weight: 2
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excelente trabalho na preparação do nosso ambiente de trabalho! Agora vamos executar a imagem do nosso computador invadido como uma VM.
    </div>
</div>

{{% notice info %}}

## O que é uma imagem?

`Imagens` vêm em uma variedade de tipos. Temos fotografias, que são imagens. E as imagens do nosso computador que também são muito semelhantes. Ambos são cópias de coisas de um único ponto no tempo. Nesse minicurso trabalharemos com uma cópia de um computador que está agindo de forma estranha. Mas não se preocupe, isso não vai prejudicar o seu computador! Lembre-se que o SO estará `isolado`, o que significa que não pode afetar seu computador.

## Configurando o Kali Linux

### Baixando a imagem

`Imagens do sistema operacional` facilitam o envio de cópias exatas de computadores.
O VirtualBox usa a extensão de arquivo `.ova` para suas imagens. Isso assemelha-se a maneira como salvamos nossos documentos como um arquivo `.docx` e fotografias como `.png`.

Agora, vamos baixar a nossa cópia do computador infectado! Clique no link abaixo para fazer o download.
A maioria das imagens do sistema operacional é grande (~8 GB), mas a nossa é de apenas ~3 GB. Mesmo assim, o download ainda pode demorar alguns minutos.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Baixar
</a>

### Importando uma Máquina Virtual

Agora que baixamos a nossa imagem da máquina infectada, é hora de configurá-la!

#### Passo 1

No aplicativo VirtualBox, podemos _importar_ as nossas imagens. Vamos clicar no botão "**Import**" para começar!

![botão para importar uma imagem na virtual box](../images/import-01.PNG?classes=border,shadow)

#### Passo 2

A imagem que queremos importar, aqui chamada de _appliance_, será o arquivo `.ova` que você baixou anteriormente. Clique na pequena pasta com um símbolo de acento circunflexo verde. Isso abrirá uma janela para que você possa encontrar e selecionar a nossa imagem de extensão `.ova`.

![janela de carregamento de uma imagem para a virtual box](../images/import-02.PNG?classes=border,shadow)

#### Passo 3

Agora que você selecionou o arquivo de imagem `.ova`. Clique em "**Abrir**". Em seguida, clique em "**Next**" na tela "**Appliance to Import**".

![janela de carregamento de uma imagem para a virtual box](../images/import-03.PNG?classes=border,shadow)

#### Passo 4

Agora vamos ao último passo! No campo "**Name**", nomeie a nossa imagem para algo de sua escolha. Ela é a sua própria VM! Certifique-se de que a opção "**USB Controller**" **não** esteja selecionada. Certifique-se de desmarcá-la. Em seguida, para a campo "**MAC Address Policy**", certifique-se de que a opção "**Generate new MAC addresses for all network adapters**" esteja selecionada. Por fim, clique em "**Import**"!

![janela de carregamento de uma imagem para a virtual box](../images/import-05.PNG?classes=border,shadow)

**Observação:** será exibida uma janela informando o tempo necessário para concluir a importação.
Normalmente, isso leva cerca de 5 minutos, mas pode demorar um pouco mais dependendo do seu computador.

![janela de carregamento de uma imagem para a virtual box](../images/import-06.JPG?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excelente! Agora que importamos a nossa imagem infectada, vamos executá-la para começarmos a nossa investigação.
    </div>
</div>
