---
title: "Passo 3 - Testando"
difficulty: "Intermediate"
weight: 8
draft: false
---

Você implementou a(s) correção(ões) para o(s) seu(s) bug(s). Naturalmente, a primeira coisa que você faz é recompilar seu código e executá-lo. Se tudo parece certo, o bug foi corrigido! Para projetos menores, isso funciona relativamente bem. Projetos maiores podem ser mais difíceis, já que a compilação leva muito mais tempo. Normalmente, esses projetos têm testes automatizados que são executados automaticamente após as atualizações do código, então os programadores nem precisam se preocupar muito com essa etapa (exceto os programadores que criam os testes!).

Nos testes, você já sabe ou tem uma boa ideia de onde o bug pode ocorrer, então seus testes devem rodar intencionalmente aquele código para garantir que está correto. Testar é tão importante que existe até uma metodologia inteira de desenvolvimento de software baseada nisso (desenvolvimento orientado a testes)!

Às vezes, corrigir um bug pode introduzir outro bug, o que é chamado de _regressão_. É muito comum precisar de várias iterações de correções de bugs!

## Testes Unitários
Sempre comece pequeno com seus testes. Essa ideia vem dos experimentos científicos: se você reduz o número de fatores (variáveis independentes) em jogo, fica mais fácil identificar a causa. Esses são chamados de testes unitários. Em vez de testar se todo o programa ou uma grande parte dele funciona, um teste unitário olha para uma parte específica. Um teste unitário pode chamar apenas uma função (que não chama outras) para ver se ela retorna o valor correto/esperado.

Por exemplo, imagine que você tem um aplicativo de calculadora que pode somar, subtrair, multiplicar e dividir números. Você poderia escrever um teste unitário apenas para testar a função de adição, fornecendo 2 números e verificando se o retorno é o valor correto.

## Testes de Integração
Somente quando seus testes unitários estiverem passando é que você deve iniciar os testes de integração. Os testes de integração verificam como vários componentes do seu programa funcionam juntos para ver se eles retornam o valor correto/esperado. Um teste de integração pode chamar uma função que chama muitas outras funções ou que afeta várias partes diferentes do programa.

O fato de seus testes unitários funcionarem não significa que seus testes de integração também funcionarão. Você poderia escrever um teste de integração para sua calculadora testando uma sequência de operações aritméticas, como realizar uma soma e depois uma multiplicação, e verificar o resultado.
