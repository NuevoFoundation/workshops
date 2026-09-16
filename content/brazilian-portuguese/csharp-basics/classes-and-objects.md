---
title: "Classes e Objetos"
description: "Introdução a classes e objetos em C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## O que é um Objeto e o que é uma Classe?

Um Objeto é algo (um substantivo) que possui certas características e pode realizar determinadas tarefas. Uma Classe é o molde ou definição para criar esse objeto.

Um exemplo é uma Pessoa. Pessoa é uma Classe. Uma pessoa pode ter características que a diferenciam de outra pessoa. Pode ter olhos azuis, ter 15 anos, etc. Uma pessoa também pode executar tarefas, como andar ou falar.

Um Objeto em C# é uma instância de uma Classe C#. Por exemplo, "Bea" é uma "Pessoa". "Bea" tem olhos castanhos — isso é uma propriedade (ou campo de dados) de "Bea". "Bea" pode falar inglês e espanhol — esses são métodos que "Bea" pode executar.

## Criando uma Classe!

C# é uma linguagem de programação **orientada a objetos**, o que significa que tudo em C# está associado a um **objeto** e a uma **classe** (o molde do objeto).

Por exemplo, a linha de código usada na atividade 1 para imprimir mensagens é uma chamada de método de uma classe pré-definida chamada `System`!

`Console.WriteLine("Hello World");`

- `Console` é uma classe que lida com entrada e saída de dados do usuário.
- `WriteLine()` é um método definido na classe `Console`.

Outra classe embutida com a qual interagimos é `string`. A classe `string` define como uma lista de caracteres deve se comportar.

Exemplo de criação de um objeto `string` chamado `name` com base nas regras da classe `string`:  
`string name = "Patrick";`

`Console` e `string` são classes pré-definidas em C#. No entanto, podemos criar nossos próprios tipos de dados escrevendo uma classe! Isso é útil para definir objetos com atributos e comportamentos específicos.

Vamos aprender sobre as partes de uma classe:

{{% notice note %}}
### Classe
Uma classe é um molde ou protótipo de um novo tipo de objeto. Em geral, uma classe contém três partes importantes: 

<img src="../images/class.png" height="400" alt="Um molde de classe para um objeto contém variáveis de instância (dados/atributos do objeto), construtores (métodos que criam o objeto) e métodos (os comportamentos possíveis para o objeto)."/> 

**Elemento** | **Descrição** | **Exemplo**  
---|---|---  
**data fields/instance variables** | variáveis que descrevem o objeto | Exemplo: uma classe Pessoa poderia ter campos eyeColor, age, height.  
**constructor** | método chamado automaticamente quando um objeto dessa classe é criado; tem o mesmo nome da classe | Pode haver mais de um construtor por classe.  
**methods** | ações que o objeto dessa classe pode realizar | A classe Pessoa poderia ter métodos talk e walk.  

Exemplo de classe Person:  
`public class Person{ private String name; private int age; private int height; public Person(){ name = "Bea"; age = 29; height = 167; } public Person(String nameInput, int ageInput, int heightInput){ name = nameInput; age = ageInput; height = heightInput; } public void talk(){ Console.WriteLine($"Hello from {name}"); } }`
{{% /notice %}}

## Tente Você Mesmo 🐥!

Vamos criar uma classe `Bird` para representar o Patrick 🐥 e todos os seus amigos pássaros, seguindo os passos abaixo!  

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="Classes e Objetos - .NET Fiddle editor 1" frameborder="0"></iframe>

### Primeiro, definimos o nome da classe no formato `public class NomeDaClasse`.

`public class Bird{}`

### Segundo, declaramos os campos da classe Bird: species, name, hobby, age, loveMusic.

Cada campo segue o formato `access specifier data type name;`.

1. Declaramos todos os 5 campos como `private` na classe `Bird`, para que só possam ser acessados dentro dela.
2. Tipos de dados:
   - `species`: `String` (ex: "duck").
   - `name`: `String` (ex: "Patrick").
   - `hobby`: `String` (ex: "play basketball").
   - `age`: `int` (ex: 25).
   - `loveMusic`: `bool` (true ou false).

Exemplo: `private String species;`

3. Crie os outros 4 campos da mesma forma.

### Terceiro, criamos o construtor da classe `Bird`.

O construtor inicializa os campos da classe. Ele segue o formato `public ClassName(parameters)`.

`public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput){ species = speciesInput; name = nameInput; hobby = hobbyInput; age = ageInput; loveMusic = loveMusicInput; }`

### Por fim, criamos os métodos da classe `Bird`.

Precisamos de 6 métodos:
- `getSpecies()`
- `getName()`
- `getHobby()`
- `getAge()`
- `getLoveMusic()`
- `ToString()`

Escreva os 5 primeiros métodos baseados no que você já aprendeu.  
O método `ToString()` retorna uma string com as informações do objeto:

`public string ToString(){ string info = ""; info = "Hi, my name is " + getName() + ". I am a " + getAge() + " year old " + getSpecies() + " who likes to " + getHobby() + ". "; if(getLoveMusic()){ info += "I also like music very much!"; }else{ info += "However, I do not like music!"; } return info; }`

{{% notice warning %}}
Se a classe `Bird` estiver correta, você verá a mensagem:  
"Congratulations! You correctly implemented the Bird Class :)"
{{% /notice %}}

## Criando Pássaros 🐥!

Parabéns! Você criou sua primeira classe C#. Agora, vamos criar objetos dessa classe.

Para criar um objeto, chamamos o construtor no formato `class name variable = new constructor();`.

`Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);`

Depois, podemos usar `ToString()` para exibir as informações do objeto:  
`Console.WriteLine(patrick.ToString());` ou `Console.WriteLine(patrick);`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/fMXXuT" title="Classes e Objetos - .NET Fiddle editor 2" frameborder="0"></iframe>
