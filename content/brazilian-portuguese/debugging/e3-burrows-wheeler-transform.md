---
title: "Exercício 3 - Transformada de Burrows-Wheeler"
difficulty: "Intermediate"
weight: 11
draft: false
---

A transformada de Burrows-Wheeler (BWT) é um algoritmo usado em compressão de dados. Ele recebe uma string como entrada e gera uma string codificada, que geralmente tem caracteres semelhantes agrupados.

## A Teoria

O algoritmo é relativamente direto e fácil de entender.

1. Pegue a string de entrada e extraia todas as suas rotações. (Veja a figura).
2. Ordene as rotações em ordem lexicográfica, de forma ascendente.
3. Pegue a última coluna da matriz de rotações ordenadas; este é o resultado.

![Burrows-Wheeler Transform](../resources/e3-01.png "Os 3 passos da Transformada de Burrows-Wheeler")

No diagrama acima, usamos a string `banana` como exemplo. O `\0` é um símbolo usado para indicar o fim da string (como o caractere nulo em C), mas é considerado o MAIOR caractere lexicograficamente em comparação com os outros.

Uma forma eficiente de implementar a BWT é usando uma estrutura de dados chamada **array de sufixos**. Para criar um array de sufixos, primeiro pegamos todos os sufixos de uma string de entrada e atribuímos um rótulo numérico a cada um. Em seguida, ordenamos os sufixos lexicograficamente.

![Suffix Arrays](../resources/e3-02.png "Etapas de criação de um array de sufixos")

Usando `Nuevo\0` como exemplo, primeiro pegamos todos os sufixos e os listamos. Depois, os ordenamos em ordem lexicográfica, considerando `\0` como o maior caractere. Por fim, pegamos o índice da primeira letra de cada sufixo e colocamos em um array. Por exemplo, o índice da letra `N` em `Nuevo\0` é `0`, enquanto o índice de `e` é `2`. Como eles são os menores alfabeticamente, entram nas posições 0 e 1 do array, respectivamente.

Podemos pensar nos sufixos como rotações para a transformada de Burrows-Wheeler! Tudo o que precisamos fazer é adicionar o *prefixo* que "cortamos" no final da string. Assim, `evo\0` se torna `evo\0Nu` quando queremos pensar no sufixo como uma rotação. Ao fazer isso para todos os sufixos, obtemos as rotações ordenadas que queremos na BWT.

![Suffixes to Rotations](../resources/e3-03.png "Tabela de ordenação das rotações a partir de sufixos para a Transformada de Burrows-Wheeler")

Um ponto importante é que não precisamos realmente armazenar as rotações, pois o índice no array de sufixos já nos dá essa informação. Se `suffix_array[i] == 0`, então sabemos que a rotação que estamos vendo é `Nuevo\0`. Se `suffix_array[i] == 3`, então a rotação é `vo\0Nue`. Podemos pensar como se estivéssemos rotacionando `N` espaços para a direita no caso `suffix_array[i] == N`. A ilustração acima demonstra isso.

Dito isso, podemos obter o último caractere da rotação simplesmente pegando `suffix_array[i] - 1`, depois aplicando o módulo do tamanho total do array de sufixos para obter o índice da string original que queremos. Isso nos dá a transformada de Burrows-Wheeler para qualquer string.

## A Implementação

A estratégia de implementação que usamos é a destacada acima: construir um array de sufixos, depois pegar os índices, subtrair 1 e realizar a operação de módulo pelo comprimento da string (incluindo o terminador nulo).

Implementamos o array de sufixos e, com ele, a transformada de Burrows-Wheeler. No entanto, estávamos cansados na hora e deixamos alguns bugs passarem. Este exercício pode ser complicado porque envolve muito trabalho com índices e manipulação de posições. Como dica para corrigir os erros, a maioria dos bugs está relacionada ao array de sufixos e como ele é usado.

{{% notice tip %}}
O caractere terminador nulo pode atrapalhar a forma como você imprime suas strings. Neste exercício, você deve imprimir a string transformada caractere por caractere, porque o terminador nulo fará a função `printf` parar de imprimir assim que encontrá-lo. O código a seguir imprimirá o resultado de `bwt(dest, src)`, onde `STR_LEN` é o comprimento estático da string **incluindo o terminador nulo**.

for(int i = 0; i < STR_LEN; ++i) {
    printf("%c", dest[i]);
}

Note que `strlen()` retorna o comprimento da string **sem** o terminador nulo.

Uma última dica: `%` em C **não** é o operador de módulo! Ele é o operador de resto. Talvez este seja o motivo de alguns erros de indexação...
{{% /notice %}}

Todas as funções estão documentadas em `bwt.h`. Use ferramentas como `gdb` e `valgrind` a seu favor. Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-3" target="_blank">Abrir Replit</a>
