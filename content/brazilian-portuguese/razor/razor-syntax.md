---
title: "Noções Básicas de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 5
---

## Sintaxe Razor

### Principais Regras da Sintaxe Razor
Razor suporta C# e utiliza o símbolo @ para alternar do HTML para o C#. O Razor avalia expressões C# e as renderiza na saída HTML.

Quando um símbolo @ é seguido por uma palavra-chave reservada do Razor, ele faz a transição para uma marcação específica do Razor. Caso contrário, ele faz a transição para HTML comum.

Para escapar um símbolo @ na marcação Razor, use um segundo símbolo @:

```csharp
<p>@@Username</p>
```

O código acima é renderizado em HTML com um único símbolo @.

Existem algumas regras básicas a serem lembradas ao escrever código Razor.

* Blocos de código Razor são delimitados por ```@{ ... }```
* Expressões inline (variáveis e funções) começam com ```@```
* Instruções de código terminam com ponto e vírgula (```;```)
* Strings são delimitadas por aspas
* Código C# diferencia maiúsculas de minúsculas
* Arquivos C# têm extensão .cshtml ou .razor

#### Expressões Implícitas Razor
Expressões implícitas Razor começam com ```@``` seguido de código C#.

```csharp
<p>@DateTime.Now</p>
<p>@DateTime.IsLeapYear(2016)</p>
```

Com exceção da palavra-chave C# ```await```, expressões implícitas não devem conter espaços.

Expressões implícitas ***não podem*** conter genéricos C#, pois os caracteres dentro de (```<>```) são interpretados como uma tag HTML.

#### Expressões Explícitas Razor
Expressões explícitas Razor consistem em um símbolo @ com parênteses balanceados. Para renderizar o horário da semana passada, utiliza-se a seguinte marcação Razor:

```csharp
<p>Semana passada neste horário: @(DateTime.Now - TimeSpan.FromDays(7))</p>
```
Qualquer conteúdo dentro dos parênteses @() é avaliado e renderizado na saída.

Expressões explícitas podem ser usadas para concatenar texto com o resultado de uma expressão:

```csharp
@{
    var joe = new Person("Joe", 33);
}

<p>Idade@(joe.Age)</p>
```

Sem a expressão explícita, ```<p>Idade@joe.Age</p>``` é tratada como um endereço de e-mail, e ```<p>Idade@joe.Age</p>``` é renderizada. Quando escrita como uma expressão explícita, ```<p>Idade33</p>``` é renderizada.

#### Blocos de Código Razor
Blocos de código Razor começam com @ e são delimitados por {}. Diferente das expressões, o código C# dentro de blocos de código não é renderizado. Blocos de código e expressões em uma view compartilham o mesmo escopo e são definidos em ordem:

Em blocos de código, declare funções locais com marcação para servir como métodos de template:

```csharp
@{
    void RenderName(string name)
    {
        <p>Nome: <strong>@name</strong></p>
    }

    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}
```
O código renderiza o seguinte HTML:

```html
<p>Nome: <strong>Mahatma Gandhi</strong></p>
<p>Nome: <strong>Martin Luther King, Jr.</strong></p>
```

#### Renderização condicional de atributos
O Razor omite automaticamente atributos que não são necessários. Se o valor passado for null ou false, o atributo não é renderizado.

Por exemplo, considere o seguinte Razor:

```csharp
<div class="@false">False</div>
<div class="@null">Null</div>
<div class="@("")">Empty</div>
<div class="@("false")">False String</div>
<div class="@("active")">String</div>
<input type="checkbox" checked="@true" name="true" />
<input type="checkbox" checked="@false" name="false" />
<input type="checkbox" checked="@null" name="null" />
```

A marcação Razor acima gera o seguinte HTML:

```html
<div>False</div>
<div>Null</div>
<div class="">Empty</div>
<div class="false">False String</div>
<div class="active">String</div>
<input type="checkbox" checked="checked" name="true">
<input type="checkbox" name="false">
<input type="checkbox" name="null">
```

### Trabalhando com Objetos
A programação no servidor frequentemente envolve objetos.

O objeto "DateTime" é um típico objeto interno do ASP.NET, mas objetos também podem ser definidos pelo usuário para descrever uma página web, uma caixa de texto, um arquivo, um registro de banco de dados, etc.

Objetos podem ter métodos que podem executar. Um registro de banco de dados pode ter um método "Save", um objeto de imagem pode ter um método "Rotate", um objeto de e-mail pode ter um método "Send", e assim por diante.

Objetos também possuem propriedades que descrevem suas características. Um registro de banco de dados pode ter uma propriedade FirstName e uma propriedade LastName (entre outras).

O objeto DateTime do ASP.NET possui uma propriedade Now (escrita como DateTime.Now), e a propriedade Now possui uma propriedade Day (escrita como DateTime.Now.Day). O exemplo abaixo mostra como acessar algumas propriedades do objeto DateTime:

```html
<table border="1">
<tr>
<th width="100px">Nome</th>
<td width="100px">Valor</td>
</tr>
<tr>
<td>Dia</td><td>@DateTime.Now.Day</td>
</tr>
<tr>
<td>Hora</td><td>@DateTime.Now.Hour</td>
</tr>
<tr>
<td>Minuto</td><td>@DateTime.Now.Minute</td>
</tr>
<tr>
<td>Segundo</td><td>@DateTime.Now.Second</td>
</tr>
</td>
</table>
```

### Estruturas de Controle
Estruturas de controle são uma extensão dos blocos de código. Todos os aspectos dos blocos de código (transição para marcação, C# inline) também se aplicam às seguintes estruturas:

#### Condicionais ```@if, else if, else, e @switch```
```@if``` controla quando o código é executado:

```csharp
@if (value % 2 == 0)
{
    <p>O valor é par.</p>
}
```

```else``` e ```else if``` não requerem o símbolo @:

```csharp
@if (value % 2 == 0)
{
    <p>O valor é par.</p>
}
else if (value >= 9876)
{
    <p>O valor é grande.</p>
}
else
{
    <p>O valor é ímpar e pequeno.</p>
}
```

A marcação a seguir mostra como usar uma instrução switch:

```csharp
@switch (value)
{
    case 1:
        <p>O valor é 1!</p>
        break;
    case 9876:
        <p>Seu número é 9876!</p>
        break;
    default:
        <p>Seu número não era 1 nem 9876.</p>
        break;
}
```

#### Laços ```@for, @foreach, @while, e @do while```

HTML modelado pode ser renderizado com instruções de controle de laço. Para renderizar uma lista de pessoas:

```csharp
@{
    var people = new Person[]
    {
          new Person("Jade", 31),
          new Person("Maxwell", 29),
          ...
    };
}
```

As seguintes instruções de laço são suportadas:

```@for```

```csharp
@for (var i = 0; i < people.Length; i++)
{
    var person = people[i];
    <p>Nome: @person.Name</p>
    <p>Idade: @person.Age</p>
}
```

```@foreach```

```csharp
@foreach (var person in people)
{
    <p>Nome: @person.Name</p>
    <p>Idade: @person.Age</p>
}
```

```@while```

```csharp
@{ var i = 0; }
@while (i < people.Length)
{
    var person = people[i];
    <p>Nome: @person.Name</p>
    <p>Idade: @person.Age</p>

    i++;
}
```

```@do while```

```csharp
@{ var i = 0; }
@do
{
    var person = people[i];
    <p>Nome: @person.Name</p>
    <p>Idade: @person.Age</p>

    i++;
} while (i < people.Length);
```