---
title: "Estruturas de dados (Array & ArrayList)"
description: "Apresente estruturas de dados básicas em Java."
date: 2021-10-13T00:00:00Z
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x2hcvJjiH_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Nos exercícios anteriores, aprendemos que variáveis ​​nos permitem acessar e armazenar dados. Mas, e se quisermos armazenar vários dados semelhantes? Existe uma boa maneira de organizá-los sem declarar múltiplas variáveis?

Na programação, **estruturas de dados** são elementos que permitem aos codificadores armazenar vários dados do mesmo tipo. Usar estruturas de dados é uma maneira eficiente de armazenar e acessar grandes volumes de dados. Neste exercício, aprenderemos sobre 2 estruturas de dados usadas em Java: **array** e **ArrayList**.

Embora array seja uma estrutura de dados de comprimento fixo, ArrayList é um comprimento variável onde você pode alterar o tamanho da estrutura de dados. Vamos começar examinando arrays!

## Array

Digamos que queremos armazenar os 5 melhores filmes favoritos de Patrick. Em vez de criar 5 variáveis, podemos armazenar todos os 5 dados em um array, nossa primeira estrutura de dados!

Para armazenar dados em um array, fazemos o seguinte:

1. Primeiro declaramos um array especificando um tipo e tamanho de dados (número de dados que podem ser armazenados).

```java
String topMovies[] = new String[5]; // crie um array de Strings de tamanho 5.
```

2. Repetimos pelo array (passamos por todos os pontos de dados) e atribuímos os dados a um ponto no array.

Observe que acessamos o array com seu nome e um índice (`0` para acessar o 1º elemento, `1` para o 2º...).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// a array topMovies agora armazena "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" em ordem
```
{{% notice info %}}
### Por que a indexação de array em Java começa com 0?

É tentador e razoável pensar que para acessar o elemento de um array no primeiro índice, deveríamos começar no índice 1.

Porém, quando o computador lê o código `arr[1]`, ele não pensa em obter o `1º` elemento de `arr`.

Na verdade, ele lê `arr[1]` para obter a distância do elemento `1` do início do array.

Em outras palavras, o índice é na verdade um deslocamento de memória. Para acessar o primeiro elemento, devemos obter o elemento de `0` deslocado do início do array (ou seja, `arr[0]`).
{{% /notice %}}

{{% notice tip %}}
### Uma maneira alternativa de criar um array:
Se conhecermos todos os dados de um array com antecedência, podemos criar o array em uma linha listando todos os dados entre `{` e `}`.

Por exemplo:

```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```

Assim como inicializamos os dados com seu índice, também podemos acessar/modificar cada dado com seu índice.

Por exemplo:

```java
String movie1 = topMovies[0]; // movie1 tem valor "Birds Of Prey"
```

{{% /notice %}}

Muitas vezes é útil saber quantos elementos há em um array depois de criá-lo (para acessar o último elemento do array, por exemplo). Podemos obter o número de elementos no array no campo `length` do array, digitando `array_name.length`.

Por exemplo:

```java
int numOfMovie = topMovies.length; // numOfMovie tem valor 5
```

<br/>

### Exercício: Escreva um método `printArr()` que receba uma entrada de array e imprima todos os elementos desse array em ordem
(Dica: utilize for loop e `.length` para ajudá-lo).

Após clicar em `Executar`, o programa deverá imprimir o seguinte:

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsArray" target="_blank">Launch Replit</a>

## ArrayList

ArrayList é outra estrutura de dados popular em Java. `ArrayList` é uma classe que foi implementada usando arrays. É semelhante a um array, pois os usuários acessam, armazenam e modificam dados por meio de um índice.

Você cria um ArrayList especificando um nome e o tipo entre `<` e `>`.
Por exemplo:

```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

Para adicionar elementos, chamamos o método `add()` no ArrayList.
Por exemplo:

```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// o ArrayList agora armazena"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" em ordem
```

Para acessar um elemento em um índice específico, chamamos o método `get()`. Observe que Java usa indexação baseada em 0, então para obter o primeiro elemento em um ArrayList fazemos uma chamada de método `get(0)`. 
Por exemplo:

```java
String movie1 = topMoviesList.get(0); // movie1 tem valor "Birds Of Prey"
```

E, para obter o número de elementos no ArrayList, chamamos o método `size()`.
Por exemplo:

```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 tem valor 5
```

<br/>

Como mencionamos brevemente acima, a diferença crítica entre array e ArrayList é que você precisa saber antecipadamente o número de elementos a serem armazenados em um array, mas não para um ArrayList.

- Com a linha de código `String topMovies[] = new String[5]` o array `topMovies` terá para sempre comprimento 5. Como resultado, você não pode armazenar mais de 5 Strings em `topMovies` após criá-lo.

- No entanto, com a linha de código `ArrayList<String> topMoviesList = new ArrayList<String>()`, o ArrayList começa com o elemento 0 e pode ser adicionado ou removido infinitamente.

Para remover um elemento de um ArrayList, chamamos o método `remove()`.
Por exemplo:

```java
System.out.print(topMoviesList.size()); // imprime 5
topMoviesList.remove("Birds Of Prey");
System.out.print(topMoviesList.size()); // imprime 4
```

<br/>

### Exercício: Escreva um método `printList()` que receba um ArrayList como entrada e imprima todos os elementos desse ArrayList em ordem

(Dica: utilize for loop e `size()` para ajudá-lo).

Após clicar em `Executar`, o programa deverá imprimir o seguinte:

```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsList" target="_blank">Launch Replit</a>

## Fim do workshop 🐥

<b>Patrick</b> 🐥 obrigado por participar! Espero que você tenha aprendido muito com este curso :)
![animation of duck Patrick](https://media.giphy.com/media/l49JKwmJLChtS6d44/giphy.gif)

<p style="text-align: center;">(image created by Molang: giphy.com/molangofficialpage)</p>
