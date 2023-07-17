---
title: "Strings"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 5
---

## Strings


Qualquer coisa que esteja entre aspas é chamada de cadeia de caracteres. É assim que um computador representa palavras ou frases. Por exemplo, `"a"`, `"2"`, `"banana!"`, e `"Hello World"`são strings, mas `Hello World` e `2` não são strings, porque as aspas estão faltando.

Você pode combinar muitas cadeias de caracteres usando o operador `+`. Por exemplo:

- `"Apple" + "Pineapple"` produz a string `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produz a string `"Nuevo Foundation"`.

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "Combinando strings com +")

{{% notice tip %}}

## Trabalhando juntos

No programa Replit abaixo, iniciamos o código com a linha `Console.WriteLine("Nuevo" + " " + "Foundation");`.

Observe que há muitas maneiras de combinar cadeias de caracteres. Por exemplo, outra maneira de imprimir Nuevo Foundation seria escrever `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

Vamos debater pelo menos mais uma maneira de imprimir a cadeia de caracteres `"Nuevo Foundation"` usando dois símbolos `+` em cada instrução `Console.WriteLine`. Verifique se a Fundação Nuevo foi impressa 3 vezes. Em outras palavras, seu console deve ter esta aparência depois que você pressionar **run**:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-Strings" target="_blank">Executar Replit</a>

{{% /notice %}}
