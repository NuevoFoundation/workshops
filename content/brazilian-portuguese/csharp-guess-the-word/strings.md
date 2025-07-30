---
title: "Strings"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 5
---

## Strings

Qualquer coisa que está entre aspas é chamada de string. É assim que um computador representa palavras ou frases. Por exemplo, `"a"`, `"2"`, `"banana!"` e `"Hello World"` são strings, mas `Hello World` e `2` não são strings, porque as aspas estão faltando.

Você pode juntar várias strings usando o operador `+`. Por exemplo:

- `"Apple" + "Pineapple"` produz a string `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produz a string `"Nuevo Foundation"`.

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.PNG "Combinando strings com +")

{{% notice tip %}}

## Trabalhando Juntos

No programa Replit abaixo, começamos o código com a linha `Console.WriteLine("Nuevo" + " " + "Foundation");`.

Note que existem várias maneiras de juntar strings. Por exemplo, outra maneira de mostrar Nuevo Foundation seria escrever `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

Vamos pensar em pelo menos mais uma maneira de mostrar a string `"Nuevo Foundation"` usando dois símbolos `+` em cada comando `Console.WriteLine`. Verifique se Nuevo Foundation é mostrado 3 vezes. Ou seja, seu console deve ficar assim depois de apertar **run**:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" frameborder="0"></iframe>

{{% /notice %}}
