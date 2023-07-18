---
title: "Activity 1 - Set tempo & add sounds"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulty: "Intermediate"
weight: 5
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/3OpCc7sKcpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Vamos dar uma olhada no código pré-existente e entender o que ele significa. ![captura de tela anotada não pode ser exibida](../img/annotated-screenshot-overview.png) Colocaremos nosso novo código entre as funções `setTempo()` e `finish()`. A função `setTempo()` permite que você defina o tempo geral do projeto.

{{% notice info %}}

**Fato rápido**: Tempo é a velocidade na qual uma peça musical é tocada. Alterar o andamento de um projeto permite a criação de diferentes estilos de música. Tente mudar o andamento da sua função `setTempo` e veja o que acontece! Certifique-se de que é um número entre 45-220.

![](../img/img-tempo1.png)

{{% /notice %}}

## Atividade 1

1. Agora que nosso andamento está definido, é hora de adicionar sons. Para isso, devemos utilizar a função `fitMedia()`.
2. Certifique-se de que o cursor em seu programa esteja entre as funções `setTempo()` e `finish()`.
     ![](../img/annotated-screenshot-cursor.png)
3. Navegue até o ícone **Api Browser** no menu do lado esquerdo. Percorra a lista até a função `fitMedia()`.
4. Clique no ícone **Colar** no canto direito de `fitMedia()` para inserir a função entre as funções `setTemp` e `finish`.
5. Você pode notar que quando você cola a função, Earsketch produz alguns textos de espaço reservado que precisaremos substituir mais tarde. Esses textos de espaço reservado também são conhecidos como `parâmetros`.
    ![](../img/annotated-screenshot-fitmedia.png)

Você pode especificar seus próprios valores para o seguinte:

- `fileName` - Navegue até o painel \'Sons\' e encontre um som de sua preferência.
- `trackNumber` - Selecione qualquer número inteiro positivo como o número da faixa.
- `startLocation/endLocation` - Esses parâmetros são quantificados em medidas. Uma medida é um segmento de tempo que se correlaciona com um número específico de batidas.

Se você não tiver certeza de quais valores escolher, tente isto:

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Seu código agora deve se parecer com isto:
    {{% notice %}}
    from earsketch import *
        init()
        setTempo(120)
        fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
        finish()
    {{% /notice %}}

{{% notice warning %}} Certifique-se de que a capitalização da chamada do método esteja correta. A maioria das linguagens de programação, incluindo Python, diferencia maiúsculas de minúsculas. Isso significa que adicionar letras maiúsculas pode chamar uma função diferente da esperada. Por exemplo: `fitMedia()` não é o mesmo que `FitMedia()`.
{{% /notice %}}

6. Depois de inserir seus próprios parâmetros, pressione executar e, em seguida, clique em reproduzir para ouvir seu clipe de áudio!
     - **Se vir algum texto vermelho, você encontrou alguns erros! Por favor, peça ajuda.** A função `fitMedia()` é a espinha dorsal para fazer música no Earsketch. Estaremos usando muito esta função, portanto, se você tiver alguma dúvida sobre seu uso, pergunte!

{{% notice info %}}

A estação de trabalho de áudio digital (DAW) é a área em que os sons aparecem. Ela fica na parte superior central da janela do EarSketch. O seguinte é um exemplo de como as diferentes seções de uma música podem aparecer na DAW. ![](../img/screenshot-daw.png)

{{% /notice %}}