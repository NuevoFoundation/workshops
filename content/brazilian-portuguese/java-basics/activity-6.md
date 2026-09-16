---
title: "Objeto e Classes"
description: "Apresente objeto e classe em Java."
date: 2021-10-13T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ejXgw0qchDg" title="Objeto e Classes - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## O que é um objeto e uma classe?

Um objeto é uma coisa (substantivo) que possui certas características e pode realizar determinadas tarefas. Uma classe é o projeto ou definição desse objeto.

Um exemplo é uma Pessoa. Uma pessoa é classe. Uma pessoa pode ter certas características que a distinguem de outra pessoa. Pode ter olhos azuis, pode ter 30 anos, etc. Uma pessoa também pode realizar certas tarefas. Ele pode andar, pode falar, etc.

Um objeto Java é uma instância de uma classe Java. Neste caso, "Bea" é uma "Pessoa". "Bea" tem olhos castanhos. Esta é uma propriedade (ou campo de dados) de "Bea". "Bea" pode falar em inglês. "Bea" pode falar espanhol. Estes são métodos que "Bea" pode executar.

## Criando uma classe!

Java é uma linguagem de programação <b>orientada a objetos</b>, o que significa que tudo em Java está associado a um <b>objeto</b> e a uma <b>classe</b> (o modelo do objeto).

Para começar, a linha de código que usamos para imprimir instruções da atividade 1 é na verdade uma chamada de método de uma classe predefinida chamada `System`!

```java
System.out.println("Hello World");
```

1. `System` é uma classe que lida com entradas e saídas do usuário.
2. `out` é uma variável na classe `System` da classe/tipo `PrintStream`.
3. `println()` é um método definido na classe `PrintStream`.

<br />

Outra classe com a qual interagimos nos exercícios anteriores é `String`. A classe `String` define um conjunto de regras sobre como uma lista de caracteres deve se comportar.

Com a seguinte linha de código, criamos um objeto `String` chamado `name` usando as regras definidas na classe `String`:

```java
String name = "Patrick";
```

<br />

`System`, `PrintStream` e `String` são classes predefinidas em Java. No entanto, não estamos limitados a essas classes predefinidas e podemos criar nosso próprio tipo de dados escrevendo uma classe! Isso é útil para codificadores criarem objetos específicos com determinados atributos e comportamentos. Ter acesso a esses tipos definidos pelo usuário nos permite construir programas distintos.

Vamos aprender sobre as diferentes partes de uma aula abaixo:

{{% notice note %}}
### Classe
Uma classe é um projeto ou protótipo de um novo tipo de objeto. Em geral, uma classe contém três partes importantes: (1) campos de dados/variáveis ​​de instância (2) construtor (3) métodos.

<img src="../images/class.png" height="400" alt="A Class blueprint for an object contains instance varialbes/data fields which are data/attributes in the object, constructor which are methods that creates the obejct of the class, and methods, which are behaviors possible for the object."/> 

**Elemento** | **Descrição** | **Exemplo**
---|---|---
**campos de dados/variáveis ​​de instância** | variáveis ​​às quais um objeto desta classe tem acesso e que descrevem o objeto | A classe Person possui campos eyeColor, age, height.
**construtor** | método chamado para criar um objeto desta classe | Pode haver mais de um construtor por classe
**métodos** | métodos que um objeto desta classe poderá chamar para executar determinadas tarefas | A classe Person possui métodos talk e walk.

Por exemplo:

```java
public class SampleClass{
    // (1) campos de dados/variáveis ​​de instância
    private String name; // exemplo

    // (2) construtor
    public SampleClass(){
        name = "example";
    }
    // (3) métodos
    public sampleMethod(){}
}
```

{{% /notice %}}

## Experimente 🐥!

Vamos fazer uma classe `Bird` para representar Patrick 🐥 e todos os seus amigos Bird (pássaros) seguindo os passos abaixo!
**Nota:** Para este exercício, você trabalhará em Bird.java em vez de Main.java.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">Launch Replit</a>

### Primeiro, começamos definindo o nome da classe no formato `public` `class` `name`.

```java
public class Bird{}
```

<br />

### Segundo, vamos declarar todos os campos da classe Bird: species, name, hobby, age, loveMusic.

Cada campo é declarado no formato: `private` `data type` `name` `;`.

1. Declaramos todos os 5 campos como `private` na classe `Bird`. Isso garante que esses dados só possam ser acessados ​​dentro desta classe.

2. Vamos identificar o tipo apropriado para cada campo:

- `species` deve ser uma `String` que armazena por exemplo: "duck", "swan", "owl" ("pato", "cisne", "coruja").
- `name` deve ser uma `String` que armazena por exemplo: "Patrick".
- `hobby` deve ser uma `String` que armazena por exemplo: "jogar basquete".
- `age` deve ser um `int` que armazena por exemplo: 25.
- `loveMusic` deve ser um `boolean` que armazena verdadeiro ou falso.

Por exemplo, para declarar `species` como um campo privado da classe `Bird`, você colocaria `private String Species;` .

3. Termine de criar os outros 4 campos da classe Bird!

<br/>

### Terceiro, vamos criar o construtor para a classe `Bird`. 

Normalmente, construtor é o método que inicializa o valor para todos os campos de uma classe. Possui o formato `public` `nome da classe` `(parâmetro)`. Como temos 5 campos nesta classe, o construtor receberá 5 parâmetros/entradas.

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput){
    // corpo do construtor
}
```

No corpo do construtor, precisamos inicializar todas as variáveis ​​de instância, atribuindo a cada variável seus valores iniciais:

```java
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

<br />

### Por último, vamos criar alguns métodos para a classe `Bird.`

Vamos criar 6 métodos para esta classe!
- getSpecies();   // retornar espécie da ave
- getName();      // retornar o nome do pássaro
- getHobby();     // retornar hobby do pássaro
- getAge();       // retornar idade do pássaro
- getLoveMusic(); // retornar se o pássaro adora música
- toString();     // retornar informações em uma String

Tente escrever os primeiros 5 métodos com o que você aprendeu no exercício anterior sobre métodos de escrita!

<br />
Depois, vamos escrever o método `toString()` juntos!

`toString()` é um método que retorna a representação `String` do objeto.

Retornaremos uma String que inclui todos os campos do `Bird`: name, age, species, hobby, loveMusic, chamando os 5 métodos que você acabou de implementar!

```java
public String toString(){
    // inicialize as informações da variável para ter uma String vazia
    String info = "";

    // anexe informações à String no formato:
    // Hi, my name is [name]. I am a [age] year old [species] who likes to [hobby].
    info = info + "Hi, my name is " + getName() + 
           ". I am a " + getAge() + " year old " + getSpecies() + 
           " who likes to " + getHobby() + ". ";

    // se o pássaro gosta de música, acrescente a string "I also like music very much!" para informações
    if(getLoveMusic()){
        info = info + "I also like music very much!";
    }else{        
        info = info + "However, I do not like music!";
    }

    // retornar a String completa
    return info;
}
```

{{% notice warning %}}
Se você implementou corretamente a classe `Bird`, você verá a seguinte mensagem ao clicar em `Run`:

```
Parabéns! Você implementou corretamente a classe Bird :)
```

Se ainda houver algo incompleto ou incorreto ao clicar em `Executar`:
- Você pode receber um erro como `Main.java:3: error: cannot access Bird` (Main.java:3: erro: não é possível acessar o Bird).
- Ou você verá a mensagem, `Something is still not quite right!` (Algo ainda não está certo!).
{{% /notice %}}

## Criando Birds 🐥!

Parabéns! Você acabou de escrever sua primeira classe Java, classe `Bird`. Agora vamos aprender a escrever um programa que use objetos `Bird`!

Definimos a classe `Bird` para ter os seguintes atributos (variáveis ​​de instância) e comportamentos (métodos):
<img src="../images/bird_class.png" height="450" alt="Bird Class blueprint for a Bird object contains instance variables/data fields which include String species, String name, String hobby, int age, and boolean loveMusic, constructor, which requires all 5 variables to be passed in, and methods, including String getSpecies(), String getName(), String getHobby(), int getAge(), boolean getLoveMusic(), and String toString()." /> 

Para criar um novo objeto de uma classe específica, chamamos o construtor dessa classe no formato `class name` `variable name` `=` `new` `constructor call`.

Lembre-se de que o construtor da classe `Bird` é o seguinte:

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput);
```

Assim, podemos criar um Bird com estes atributos (species - duck; name - Patrick; hobby - hangout with friends; age - 15; loveMusic - true) com esta linha de código.

```java
Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
```

Experimente você mesmo e crie vários pássaros de espécies diferentes 🐦🐤🐔🐧!

<br />
A seguir, vamos chamar o método `toString()` nesses objetos `Bird` que criamos para imprimir as informações de nossos amigos. Você pode fazer o seguinte:

1. Imprima o valor de retorno do método `toString()`. (ou seja, `System.out.println(patrick.toString());`)
2. Imprima diretamente o objeto `Bird`, que solicita que `toString()` seja chamado em segundo plano. (ou seja, `System.out.println(patrick);`).

Experimente e imprima todas as informações dos amigos pássaros que você criou 🐦🐤🐔🐧!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBirdMain" target="_blank">Launch Replit</a>