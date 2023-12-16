---
title: "Atividade 1 – Defina o andamento e adicione sons"
description: "Configurando fones de ouvido"
prereq: "Python: Fundamentos. Impressão, comentários, funções"
difficulty: "Intermediário"
weight: 5
draft: false
---

Vamos dar uma olhada mais de perto no código pré-existente e entender o que ele significa. ![captura de tela anotada não pode ser exibida](../img/annotated-screenshot-overview.png) Colocaremos nosso novo código entre as funções `setTempo()` e `finish()`. A função `setTempo()` permite definir o andamento geral do projeto.

{{% notice info %}}

**Quick Fact**: Tempo é a velocidade com que uma peça de música é tocada. Alterar o tempo de um projeto permite que diferentes estilos de música sejam criados. Tente alterar o tempo da sua função `Settempo` e veja o que acontece! Verifique se é um número entre 45-220.

![](../img/img-tempo1.png)

{{% /notice %}}

## Atividade 1

1. Agora que nosso tempo está definido, é hora de adicionar sons. Para fazer isso, devemos utilizar a função `fitMedia ()`.
2. Verifique se o cursor do seu programa está entre as funções `setTempo ()` e `finish ()`.
     ! [] (../ img/anotated-screenshot-cursor.png)
3. Navegue para o ícone **API Browser** no menu do lado esquerdo. Percorra a lista até a função `fitMedia ()`.
4. Clique no ícone **Paste** no canto direito das `fitMedia ()` para inserir a função entre as funções `setTemp` e` finish`.
5. Você pode notar que, quando colar a função, o Earsketch produz alguns textos de espaço reservado que precisamos substituir mais adiante. Esses textos de espaço reservado também são conhecidos como 'parâmetros'.
    ![](../img/annotated-screenshot-fitmedia.png)

Você pode especificar seus próprios valores para o seguinte:

- `fileName` - Navegue até o painel \'Sounds\' e encontre um som que você gosta.
- `trackNumber` - selecione qualquer número inteiro positivo como o número da faixa.
- `startLocation/endlocation` - esses parâmetros são quantificados em compassos (measures). Um compasso é um segmento de tempo que se correlaciona com um número específico de batidas.

Se você não tiver certeza de quais valores escolher, tente o seguinte:

- `fitmedia (yg_trap_electric_piano_filtered_1, 3, 1, 17)`

Seu código agora deve parecer algo assim:
    {{% notice info %}}
    da importação de earketch *
        init()
        setTempo(120)
        fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
        finish()
    {{% /notice %}}

{{% notice warning %}} Certifique-se de que a capitalização da chamada do método esteja correta. A maioria das linguagens de programação, incluindo Python, diferenciam maiúsculas de minúsculas. Isso significa que adicionar letras maiúsculas pode chamar uma função diferente da esperada. Por exemplo: `fitMedia()` não é o mesmo que `FitMedia()`.
{{% /notice %}}

6. Depois de inserir seus próprios parâmetros, pressione executar e clique em reproduzir para ouvir seu clipe de áudio!
    - **Se você ver algum texto em vermelho, então aconteceram alguns erros! Por favor, peça ajuda.** A função `fitMedia()` é a base para fazer música no Earsketch. Usaremos muito essa função, então se você tiver alguma dúvida sobre seu uso, pergunte!

{{% notice info %}}

Estação de trabalho de áudio digital (DAW, Digital Audio Workstation) é a área onde os sons aparecem. Ela fica na parte superior central da janela do EarSketch. A seguir está um exemplo de como diferentes seções de uma música podem parecer no DAW. ![](../img/screenshot-daw.png)

{{% /notice %}}