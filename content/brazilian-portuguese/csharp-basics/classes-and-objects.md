---
title: "Classes e Objetos"
description: "Introduza classes e objetos em C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## O que é um Objeto e o que é uma Classe?

Um Objeto é uma coisa (substantivo) que possui certas características e pode realizar certas tarefas. Uma Classe é o modelo ou definição para esse objeto quando ele é criado.

Um exemplo é uma Pessoa. Uma Pessoa é um tipo de Classe. Uma pessoa pode ter certas características que a distinguem de outra pessoa. Pode ter olhos azuis, pode ter 15 anos, etc. Uma pessoa também pode realizar certas tarefas. Pode caminhar, pode falar, etc.

Um Objeto C# é uma instância de uma Classe C#. Nesta instância, "Bea" é uma "Pessoa". "Bea" tem olhos castanhos. Esta é uma propriedade (ou campo de dados) de "Bea". "Bea" pode falar em inglês. "Bea" pode falar em espanhol. Estes são métodos que "Bea" pode executar.

## Criando uma Classe!

C# é uma linguagem de programação **orientada a objetos**, o que significa que tudo em C# está associado a um **objeto** e uma **classe** (o modelo para o objeto).

Para começar, a linha de código que usamos para imprimir declarações da atividade 1 é, na verdade, uma chamada de método de uma classe predefinida chamada `System`!

```csharp
Console.WriteLine("Hello World");
```

1. `Console` é uma classe que lida com entrada e saída do usuário.
3. `WriteLine()` é um método definido na classe `Console`.

Outra classe embutida com a qual interagimos nos exercícios anteriores é `string`. A classe `string` define um conjunto de regras sobre como uma lista de caracteres deve se comportar.

Com a seguinte linha de código, criamos um objeto `string` chamado `name` usando as regras definidas na classe `string`:

```csharp
string name = "Patrick";
```

`Console` e `string` são classes predefinidas em C#. No entanto, não estamos limitados a essas classes predefinidas e podemos, na verdade, criar nosso próprio tipo de dados escrevendo uma classe! Isso é útil para os programadores criarem objetos específicos para ter certos atributos e comportamentos. Ter acesso a esses tipos definidos pelo usuário nos permite construir programas distintos.

Vamos aprender sobre as diferentes partes de uma classe abaixo:

{{% notice note %}}
### Classe
Uma classe é um modelo ou protótipo de um novo tipo de objeto. Em geral, uma classe contém três partes importantes: 

<img src="../images/class.png" height="400" alt="Um modelo de Classe para um objeto contém variáveis de instância/campos de dados que são dados/atributos no objeto, construtor que são métodos que criam o objeto da classe, e métodos, que são comportamentos possíveis para o objeto."/> 

**Elemento** | **Descrição** | **Exemplo**
---|---|---
**campos de dados/variáveis de instância** | variáveis que um objeto desta classe tem acesso que descrevem o objeto | Por exemplo, uma classe Pessoa poderia ter campos corDosOlhos, idade, altura.
**construtor** | método chamado automaticamente quando um objeto dessa classe é criado, construtores têm o mesmo nome da classe | Pode haver mais de um construtor por classe
**métodos** | métodos para o objeto desta classe realizar certas tarefas | A classe Pessoa poderia ter métodos falar e andar.

Por exemplo:

```csharp
public class Person{
    // (1) campos de dados/variáveis de instância
    private String name; // exemplo
    private int age;
    private int height;

    // (2) construtor - construtores têm o mesmo nome da classe
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) construtor - você pode ter mais de um
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) métodos
    public void talk()
    {
        Console.WriteLine($"Hello from {name}");
    }
}
```

{{% /notice %}}

## Tente Você Mesmo 🐥!

Vamos criar uma classe `Bird` para representar Patrick 🐥 e todos os seus amigos pássaros seguindo os passos abaixo! 

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5