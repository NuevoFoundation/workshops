---
title: "Exercício 3 - A Transformada Burrows-Wheeler"
difficulty: "Intermediário"
weight: 101
draft: false
---

A transformação Burrows-Wheeler é um algoritmo usado na compressão de dados. Ele recebe como entrada uma string e gera uma string codificada, que geralmente possui caracteres semelhantes agrupados.

## A teoria

O algoritmo é relativamente direto e fácil de entender.

1. Pegue a string de entrada e extraia todas as suas transformações rotacionais. (Ver foto).
2. Classifique as rotações em ordem lexicográfica, ascendente.
3. Pegue a última coluna da transformação ordenada; esta é a saída.

![Toca-Wheeler Transform](../resources/e3-01.png)

No diagrama acima, usamos a string `banana` como exemplo. O `\0` é um símbolo usado para denotar o final da string (como no caractere terminador nulo em C), mas é lexicograficamente o MAIOR caractere quando comparado aos outros.

Uma maneira eficiente de implementar o BWT é usar uma estrutura de dados chamada array de sufixos. Para criar uma matriz de sufixos, primeiro pegamos todos os sufixos de uma string de entrada e damos a ela um rótulo numerado. Em seguida, classificamos os sufixos lexicograficamente.

![Suffix Arrays](../resources/e3-02.png)

Usando `Nuevo\0` como exemplo, primeiro pegamos os sufixos dele e os listamos. Em seguida, os classificamos em ordem lexicográfica, com `\0` sendo o caractere de terminação nulo como antes e atuando como o maior caractere. Por fim, pegamos o índice da primeira letra de cada sufixo e os colocamos em uma matriz. Por exemplo, o índice da letra `N` em `Nuevo\0` é `0`, enquanto o índice de `e` é `2`. Como são alfabeticamente os menores, eles vão para os slots 0 e 1 da matriz, respectivamente.

Podemos pensar em sufixos como rotações para a transformação Burrows-Wheeler! Tudo o que precisamos fazer é anexar o *prefixo* que "cortamos" ao final da string. Portanto, `evo\0` torna-se `evo\0Nu` quando queremos pensar no sufixo como uma rotação. Então, se fizermos isso para todos os sufixos, obteremos as rotações classificadas que queremos na transformação Burrows-Wheeler.

![Sufixos para rotações](../resources/e3-03.png)

Uma observação importante é que, na verdade, não precisamos armazenar as rotações porque o índice na matriz de sufixos já nos fornece essas informações. Se `suffix_array[i] == 0`, então sabemos que a rotação que estamos vendo é `Nuevo\0`. Se `suffix_array[i] == 3`, então a rotação que estamos vendo é `vo\0Nue`. Você pode pensar nisso como nós girando `N` espaços para a direita no caso `suffix_array[i] == N`. A ilustração acima demonstra isso.

Então, com isso dito, podemos obter o último caractere da rotação simplesmente pegando `suffix_array[i]` e subtraindo por 1, então pegando o módulo do comprimento total da matriz de sufixos para obter o índice da string original que estão procurando. Isso nos dá a transformação Burrows-Wheeler para qualquer string.

## A implementação

A estratégia de implementação que usamos é a que destacamos acima: construa uma matriz de sufixos, pegue os índices, subtraia por 1 e execute uma operação de módulo do comprimento da string (incluindo o terminador nulo).

Implementamos a matriz de sufixos e com ela a transformação Burrows-Wheeler. No entanto, estávamos cansados na época e perdemos alguns bugs. Este exercício pode ser complicado porque envolve muita indexação e descobrir como podemos ser sorrateiros ao usá-los. Como dica para corrigir os erros, a maioria dos bugs está centrada na matriz de sufixos e como a usamos.

{{% notice tip %}}
O caractere terminador nulo pode atrapalhar a forma como você imprime suas strings. Neste exercício, você deve imprimir a string transformada caractere por caractere, porque o caractere terminador nulo fará com que a função `printf` pare de imprimir depois de encontrá-lo. O código a seguir imprimirá o resultado da chamada `bwt(dest, src)`, onde `STR_LEN` é o comprimento estático da string **incluindo o terminador nulo**.
```c
for(int i = 0; i < STR_LEN; ++i) {
	printf("%c", dest[i]);
}
```
Observe que `strlen()` retorna o comprimento da string, sem o terminador nulo.

Uma dica final: `%` em C **não** é o operador módulo! É o operador resto. Talvez esta seja a razão pela qual alguma indexação deu errado...
{{% /notice %}}

Todas as funções estão documentadas em `bwt.h`. Use qualquer ferramenta como gdb e valgrind a seu favor. Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-3" target="_blank">Executar Replit</a>
