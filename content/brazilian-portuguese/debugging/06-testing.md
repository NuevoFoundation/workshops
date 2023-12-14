---
title: "Etapa 3 - Teste"
difficulty: "Intermediário"
weight: 7
draft: false
---

Você implementou as correções para seus bugs. Naturalmente, a primeira coisa a fazer é recompilar seu código e executá-lo. Se funcionar corretamente, você corrigiu o bug! Para projetos menores, isso funciona relativamente bem. Projetos maiores podem ser mais difíceis, pois demoram muito mais para serem compilados. Normalmente, eles têm testes automatizados que são executados automaticamente após as atualizações serem feitas na base de código, então os programadores nem precisam se preocupar muito com esta etapa (exceto os programadores que fazem os testes!).

Nos testes, você já sabe ou tem uma boa ideia de onde o bug ocorrerá e, portanto, em seus testes, você desejará executar esse código intencionalmente para ter certeza de que está correto. O teste é tão importante que toda uma metodologia de desenvolvimento de software gira em torno dele (desenvolvimento baseado em testes)!

### Testes unitários
Sempre comece aos poucos com seus testes. Esta ideia é retirada de experiências científicas: se reduzirmos o número de factores (variáveis independentes) que estão em jogo, podemos restringir a causa mais facilmente. Eles são chamados de testes unitários. Em vez de testar se todo o programa ou parte funciona, um teste de unidade analisa uma parte específica. Por exemplo, um teste de unidade pode chamar uma função que não chama outras funções para ver se ela gera o valor correto/esperado.

### Testes de Integração
Somente depois que seus testes de unidade forem bem-sucedidos você deverá iniciar os testes de integração. Os testes de integração analisam como vários componentes do seu programa funcionam juntos para ver se eles geram o valor correto/esperado. Um teste de integração poderia chamar uma função que chama muitas outras funções ou afeta muitas partes diferentes do programa.
Só porque seus testes de unidade funcionam não significa que seus testes de integração funcionem. Como analogia, só porque tenho partes funcionais de um circuito eletrônico (bateria, LED, resistor, etc.) não significa que o circuito como um todo funciona!