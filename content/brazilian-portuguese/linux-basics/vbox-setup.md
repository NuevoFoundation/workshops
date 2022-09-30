---
title: "Usando Máquinas Virtuais - Parte 1"
description: "Um guia introdutório sobre máquinas virtuais"
date: 2022-09-21
difficulty: "Intermediário"
weight: 1
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Estamos fornecendo a você uma cópia do nosso computador invadido. Ela é chamada de máquina virtual. Agradecemos a sua ajuda!
    </div>
</div>

{{% notice info %}}

### O que é uma máquina virtual?

Uma **máquina virtual** (também chamada de **VM**) é um arquivo de computador (chamado de `imagem`), que se comporta como um computador real.
Em outras palavras, é um computador dentro de um computador. Ele é executado em uma janela, como qualquer outro programa.
A VM oferece a mesma experiência como se estivéssemos em um computador comum.

A VM é `isolada` do resto do sistema, o que significa que o software dentro de uma VM não pode afetar o próprio computador.
Isso produz um ambiente ideal para podermos testar outros sistemas operacionais, acessar dados infectados por vírus e criar novos softwares ou aplicativos.
{{% /notice %}}

## O que é VirtualBox?

VirtualBox é um software de virtualização, também chamado de `hypervisor`. Ele permite que o nosso computador rode máquinas virtuais.

### Como podemos baixar o VirtualBox?

Vamos baixar o VirtualBox usando este link:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Baixar
</a>

Se você estiver usando Windows: selecione "**hosts do Windows**"
Se você estiver usando macOS: selecione "**hosts do OS X**"
Se você estiver usando outro sistema, recomendamos o uso do Windows ou macOS para este minicurso. Qualquer outra coisa está além do escopo deste minicurso.

![página de download da virtual box](../images/vbox-dlpage-update.PNG?classes=border,shadow)

Em seguida, vamos executar o programa que acabamos de baixar.

Vamos manter as opções padrões. Clique em "**Avançar**" para prosseguir.

Observe que há algumas opções na terceira página. Vamos clicar na primeira opção.
![opções de instalação da virtual box](../images/vbox-install-03.PNG?classes=border,shadow)

Caso um aviso similar ao abaixo apareça, não se preocupe! Esse tipo de aviso é esperado. Clique em "**Yes**" para prosseguir.
![aviso de rede da virtual box](../images/vbox-install-04.PNG?classes=border,shadow)

Agora, clique em "**Install**" para concluir a configuração.
![instalando a virtual box](../images/vbox-install-05.PNG?classes=border,shadow)

Por fim, vamos marcar a caixa de seleção para iniciar o VirtualBox após concluir a instalação.
![iniciação do programa após a instalação virtual box](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Parabéns! Nós terminamos a instalação do VirtualBox. Agora avançaremos para o preparo do nosso ambiente de investigações!
    </div>
</div>
