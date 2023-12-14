---
title: "Uma visão geral da depuração"
difficulty: "Intermediário"
weight: 2
draft: false
---

Existem muitas maneiras diferentes de depurar um programa. Neste guia, começaremos com algumas etapas gerais para que você não se perca ao depurar um programa. Existem 3 etapas básicas para depurar um programa:

1. **Identifique o problema**. Nesta etapa, seu objetivo é identificar o que está causando o bug. Isso envolve encontrar as condições que levaram ao bug. Ser capaz de reproduzir o bug fornece algumas das informações necessárias, o que permite restringir o problema e talvez ajudar a entender por que o bug está ocorrendo.

2. **Encontre uma solução**. Nesta etapa, seu objetivo é corrigir o bug. Às vezes este é o passo mais fácil, mas outras vezes pode ser difícil porque você pode descobrir que a lógica do seu programa estava incorreta para começar! Esta etapa combinada com a etapa 3 pode facilmente ser a que vai levar mais tempo.

3. **Teste a solução**.  De que adiantará se a sua correção não resolver o bug? Você também precisa ter certeza de que sua correção não introduz mais bugs. Esta etapa pode ser tão simples quanto recompilar e executar o programa novamente depois de aplicar a correção. Ou pode envolver a execução de um conjunto completo de testes automatizados em um ambiente. De qualquer forma, o objetivo desta etapa é estabelecer a *correção* do programa.

Provavelmente a parte mais frustrante da depuração é a etapa 1. Como programadores, nosso trabalho é escrever código, mas não podemos escrever código para resolver o problema se não soubermos qual é o problema! Assim, a maior parte deste workshop se concentrará em descobrir onde um bug pode estar escondido, bem como em como você pode usar algumas ferramentas para auxiliar em sua busca.