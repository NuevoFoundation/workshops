---
title: "Uma visão geral da depuração"
difficulty: "Intermediário"
weight: 2
draft: false
---

Há muitas maneiras diferentes de depurar um programa. Neste guia, começaremos com algumas etapas gerais para que você não se perca ao depurar um programa. Existem 3 etapas básicas para depurar um programa:

1. **Identifique o problema**. Nesta etapa, seu objetivo é identificar o que está causando o bug. Isso envolve encontrar as condições que levaram ao bug. Ser capaz de reproduzir o bug lhe dá algumas das informações que você precisa, o que permite que você reduza o problema e talvez ajude você a entender por que o bug está ocorrendo em primeiro lugar.

2. **Encontre uma solução**. Nesta etapa, seu objetivo é corrigir o bug. Às vezes, este é o passo mais fácil, mas em outros momentos é difícil porque você pode achar que a lógica do seu programa estava incorreta para começar! Esta etapa combinada com a etapa 3 pode facilmente levar a maior quantidade de tempo.

3. **Teste a solução**. Se a sua correção não corrigir o bug, de que adianta? Você também precisa se certificar de que sua correção não introduza mais bugs. Esta etapa pode ser tão simples quanto recompilar e executar o programa novamente depois de aplicar a correção. Ou, pode envolver a execução de todo um conjunto de testes automatizados em um ambiente. De qualquer forma, o objetivo desta etapa é estabelecer a *correção* do programa.

Indiscutivelmente, a parte mais frustrante da depuração é a etapa 1. Como programadores, nosso trabalho é escrever código, mas não podemos escrever código para corrigir o problema se não soubermos qual é o problema em primeiro lugar! Assim, a maior parte deste workshop se concentrará em encontrar onde um bug pode estar escondido, bem como como você pode usar algumas ferramentas para ajudar em sua busca.--