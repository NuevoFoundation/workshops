---
title: "Criando o seu programa"
description: ""
draft: false
weight: 3
---

Abra seu navegador de internet favorito (como Edge, Firefox, Google Chrome, Brave) e acesse https://aka.ms/oranges. Sua tela ficará assim:

![Não foi possível carregar a imagem](../img/adafruit.png?classes=border,shadow)

### Definindo as variáveis

Hoje vamos usar laranjas para dizer ao nosso Adafruit quando fazer barulho. A primeira coisa que precisamos fazer é dar um nome para cada laranja, possibilitando ao nosso computador saber onde procurar o que elas estão dizendo. Fazemos a primeira parte definindo uma variável. Clique na seção que diz **VARIABLES** ou variáveis em português. Ela é de cor salmão e pode ser encontrado na sétima posição de cima para baixo da lista de botões. Em seguida, defina uma variável clicando em **Make a variable**, dando-lhe um nome. Faça isso duas vezes. Aqui nomeamos as nossas variáveis como _analog1_ e _analog2_, mas você pode chamá-las como quiser.

![Não foi possível carregar a imagem](../img/1.png?classes=border,shadow)
![Não foi possível carregar a imagem](../img/2.png?classes=border,shadow)
![Não foi possível carregar a imagem](../img/3.png?classes=border,shadow)

### Interpretando as entradas

Agora que temos um nome que nosso computador conhece para cada uma das nossas laranjas, vamos deixar o Adafruit saber como entendê-las. Existem dois tipos de entradas, digital e analógica. Interruptores de luz e botões de energia são exemplos de entradas digitais. Eles podem ser ligados ou desligados, 1 ou 0. As entradas analógicas são como um botão de volume ou um dimmer de luz. Eles possuem mais opções de valores que podem ser ajustáveis girando o botão. No nosso projeto, as nossas laranjas serão como entradas analógicas, que ajustarão os valores no Adafruit, conforme elas são tocadas ou espremidas.

Clique novamente na seção Variáveis. Desta vez, você verá quatro caixinhas nas opções do menu. Isso acontece porque anteriormente nos definimos as nossas duas variáveis. Arraste a caixinha “**set \_\_ to \_\_**” para o bloco verde “**forever**” localizado na sua área de trabalho. Usando a seta branca para baixo, altere o primeiro espaço em branco para a sua primeira variável, aqui chama-se “_analog1_”.

![Não foi possível carregar a imagem](../img/4.png?classes=border,shadow)

Em seguida, em **ADVANCED**, clique na seta para baixo para expandir o menu e então clique em PINS. Procure pela caixinha “**analog read pin \_\_**”, ele fica na terceira posição de cima para baixo da lista. Insira-o na posição onde o 0 está localizado, na caixinha “**set analog1 to 0**”. Para inseri-lo nesse slot, clique na caixinha e arraste-a para que fique acima do zero. Verifique se o 0 está destacado em amarelo e solte botão do mouse (ou touchpad). Você perceberá que a primeira caixinha estendeu-se para acomodar a segunda caixinha. Se esse comportamento não acontecer, tente novamente.

![Não foi possível carregar a imagem](../img/5.png?classes=border,shadow)
![Não foi possível carregar a imagem](../img/6.png?classes=border,shadow)

Depois de finalizado, sua área de trabalho deverá se parecer com a imagem acima. Repita este processo novamente, mas desta vez selecione a sua segunda variável. Para isso, use as setas brancas para baixo para selecionar _analog2_ e _A2_. Agora compare com a imagem abaixo para verificar se você o fez corretamente.

![Não foi possível carregar a imagem](../img/7.png?classes=border,shadow)

### Criando nossos loops

Agora que nosso computador sabe como chamar nossas laranjas e também como entender o que elas estão dizendo, vamos criar um loop que verificará quando estivermos segurando nossa laranja. Clique na seção **LOGIC** e arraste a caixinha “**If \_\_\_\_ then**” para adicioná-la ao seu conjunto de variáveis.

![Não foi possível carregar a imagem](../img/8.png?classes=border,shadow)

Nessa etapa, voltaremos ao exemplo do botão de volume para entender a comparação que faremos em nosso loop.
Cada pessoa tem um ponto em que gosta de ouvir sua música para se divertir. Este ponto ideal também aplica-se para as nossas laranjas. Elas informarão ao computador um determinado valor quando ninguém as toca e um valor menor quando as tocarmos. O truque é encontrar o meio termo para que só façamos barulho quando quisermos.

Para realizar esta configuração, vá para a seção **LOGIC** novamente e pegue a caixinha logica "**0 < 0**" que é o segundo na subseção **Comparison**. Coloque-a sob o valor “**true**” na caixinha “**If \_\_\_\_ then**”. Certifique-se de ver o destaque amarelo antes de soltá-la nessa posição. Observe a imagem abaixo para comparar com a sua área de trabalho.

![Não foi possível carregar a imagem](../img/9.png?classes=border,shadow)

Agora vamos adicionar o que estamos comparando. Volte para a seção **VARIABLES**, retire _analog1_ e coloque-a no primeiro espaço. Em seguida, clique no segundo espaço e digite 40. O número 40 seria o ponto ideal para a maioria das pessoas. Caso sua laranja esteja fazendo barulho sem que você a toque, volte para esta etapa e aumente o valor. Ainda, se a sua laranja não estiver fazendo barulho algum ao tocá-la, você também pode voltar e aumentar o mesmo valor. Por enquanto, vamos deixá-lo em 40.

![Não foi possível carregar a imagem](../img/10.png?classes=border,shadow)

Agora podemos escolher nossa música! Clique na seção **MUSIC** e arraste a segunda caixinha ”**play sound **\_\_** until done**” para o nosso bloco **If-Then**. Sinta-se à vontade para clicar na seta para baixo e selecionar os sons de sua preferência.

![Não foi possível carregar a imagem](../img/11.png?classes=border,shadow)

Agora repita os últimos passos descritos acima para a segunda variável, _analog2_. Ao finalizar, sua área de trabalho ficará como a imagem abaixo (mas com suas opções de música).

![Não foi possível carregar a imagem](../img/12.png?classes=border,shadow)

### Diversão com luzes (se o tempo permitir)

A placa da Adafruit possui diversas luzes! Elas são superdivertidas de brincar, então vamos adicionar um pouco de cor as nossas músicas para que possamos ver e ouvir a diferença quando tocamos em nossas laranjas. Clique na seção **LIGHT** e arraste a caixinha “**Set all Pixels to \_\_\_**” para os nossos dois blocos **If-Then**. Faça isso antes de tocar qualquer som. Por fim, fique à vontade para mudar a cor das luzes. Para isso, você deve clicar na parte da cor e escolher uma que mais te agrade.

![Não foi possível carregar a imagem](../img/13.png?classes=border,shadow)
