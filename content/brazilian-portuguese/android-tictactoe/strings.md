---
title: "Strings"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
Qualquer coisa que esteja entre aspas é chamada de string. É assim que um computador representa palavras ou frases. Por exemplo, `"a"`, `"2"`, `"banana!"` e `"Hello World"` são strings, mas `"Hello World` e `2` não são strings, pois não estão entre aspas. Você pode combinar muitas strings usando o operador +. Por exemplo:

- `"Apple" + "Pineapple"` produz a string `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produz a string `"Nuevo Foundation"`.

{{% notice tip %}}
## Working Together

Exclua todo o texto `System.out.println` do seu código. Comece seu código com a linha `System.out.println("Nuevo" + " " + "Foundation");`. Observe que existem muitas maneiras de combinar strings. Por exemplo, outra maneira de imprimir Nuevo Foundation seria escrever `System.out.println("Nue" + "vo Fou" + "ndation");`. Iremos debater pelo menos mais uma maneira de imprimir a string `"Nuevo Foundation"` usando dois símbolos `+` em cada instrução `System.out.println`. Verifique se Nuevo Foundation foi impresso 3 vezes. Em outras palavras, seu console deve ficar assim depois de você pressionar executar:

         Nuevo Foundation
         Nuevo Foundation
         Nuevo Foundation
{{% /notice %}}