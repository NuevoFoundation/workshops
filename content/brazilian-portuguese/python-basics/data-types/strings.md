---
title: "Strings"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Qualquer coisa que esteja entre aspas é chamada de `string`. É assim que um computador representa palavras ou frases. Por exemplo, "a", "2", "banana!" e "Hello World" são strings, mas 2 e Hello World não são strings porque faltam aspas. Você pode combinar muitas strings usando o sinal `+`!

{{% notice tip %}}
As strings que você combina não precisam ser palavras reais! Por exemplo, `"Ma" + "çã"` produzirá a string `"Maçã"`.
<b>Peça ajuda se estiver confuso!</b>

{{% /notice %}}

Por exemplo,

- `"Maçã" + "Abacaxi"` produz a string `"MaçãAbacaxi"`

- `"Nuevo" + " " + "Foundation"` produz `"Nuevo Foundation"`


#### Desafio 1

E se você combinar seu nome e sobrenome? Como você faria isso?

#### Desafio 2

Exclua todas as instruções `print` do seu código. Comece seu código com a linha `print("Nuevo" + " " + "Foundation")`

Se você executá-lo, deverá obter a seguinte saída:

    Nuevo Foundation

Vamos tentar encontrar mais duas maneiras de imprimir a string `"Nuevo Foundation"` usando dois símbolos de adição (`+`) em cada instrução `print`. Depois de fazer este trabalho, você deverá imprimir "Nuevo Foundation" 3 vezes. Em outras palavras, seu console deve ficar assim depois de você pressionar executar:

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>