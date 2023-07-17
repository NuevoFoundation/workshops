---
title: "Etapa 3 - Teste"
difficulty: "Intermediário"
weight: 7
draft: false
---

Você implementou a(s) correção(ões) para o(s) seu(s) bug(s). Naturalmente, a primeira coisa a fazer é recompilar seu código e executá-lo. Se parece certo, você corrigiu o bug! Para projetos menores, isso funciona relativamente bem. Projetos maiores podem ser mais difíceis, pois levam muito mais tempo para compilar. Normalmente, eles têm testes automatizados que são executados automaticamente após as atualizações serem feitas na base de código, para que os programadores nem precisem se preocupar muito com esta etapa (exceto para os programadores que fazem os testes!).

Ao testar, você já sabe ou tem uma boa ideia de onde o bug ocorrerá e, portanto, em seus testes, você desejará executar esse código intencionalmente para garantir que o código esteja correto. O teste é tão importante que toda uma metodologia de desenvolvimento de software gira em torno dele (desenvolvimento baseado em teste)!

### Testes de unidade
Sempre comece pequeno com seus testes. Essa ideia é tirada de experimentos científicos: se você reduzir o número de fatores (variáveis independentes) que estão em jogo, poderá restringir a causa mais facilmente. Estes são chamados de testes de unidade. Em vez de testar se todo o programa ou parte funciona, um teste de unidade analisa uma parte específica. Por exemplo, um teste de unidade pode chamar uma função que não chama outras funções para ver se ela gera o valor correto/esperado.

### Testes de Integração
Somente depois que seus testes de unidade forem bem-sucedidos, você deve iniciar os testes de integração. Os testes de integração analisam como vários componentes do seu programa trabalham juntos para ver se eles geram o valor correto/esperado. Um teste de integração pode chamar uma função que chama muitas outras funções ou afeta muitas partes diferentes do programa.
Só porque seus testes de unidade funcionam, não significa que seus testes de integração funcionem. Como analogia, só porque tenho partes funcionais de um circuito eletrônico (bateria, LED, resistor, etc.) não significa que o circuito como um todo funcione!