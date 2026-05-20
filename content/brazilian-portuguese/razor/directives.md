---
title: "Diretivas Razor"
date: 2023-09-13T11:45:38-07:00
draft: false
weight: 6
---

## Diretivas
As diretivas Razor são representadas por expressões implícitas com palavras-chave reservadas após o símbolo @. Uma diretiva normalmente altera a forma como uma view é processada ou habilita funcionalidades diferentes.

Entender como o Razor gera código para uma view facilita a compreensão de como as diretivas funcionam.

```csharp
@{
    string quote = "Envelhecer não é para os fracos! - Anônimo";
}

<div>Citação do Dia: @quote</div>
```

O código gera uma classe semelhante à seguinte:

```csharp
public class _Views_Something_cshtml : RazorPage<dynamic>
{
    public override async Task ExecuteAsync()
    {
        string output = "Envelhecer não é para os fracos! - Anônimo";

        WriteLiteral("/r/n<div>Citação do Dia: ");
        Write(output);
        WriteLiteral("</div>");
    }
}
```

### ```@attribute```
A diretiva ```@attribute``` adiciona o atributo fornecido à classe da página ou view gerada. O exemplo a seguir adiciona o atributo [Authorize]:

```csharp
@attribute [Authorize]
```

A diretiva ```@attribute``` também pode ser usada para fornecer um template de rota baseado em constante em um componente Razor. No exemplo a seguir, a diretiva ```@page``` em um componente é substituída pela diretiva ```@attribute``` e o template de rota baseado em constante em Constants.CounterRoute, que é definido em outro lugar no app como "/counter":

```csharp
@page "/counter"
@attribute [Route(Constants.CounterRoute)]
```

### ```@code```
Este cenário se aplica apenas a componentes Razor (.razor).

O bloco ```@code``` permite que um componente Razor adicione membros C# (campos, propriedades e métodos) a um componente:

```csharp
@code {
    // Membros C# (campos, propriedades e métodos)
}
```

Para componentes Razor, ```@code``` é um alias de ```@functions``` e é recomendado em vez de ```@functions```. Mais de um bloco ```@code``` é permitido.

### ```@functions```
A diretiva ```@functions``` permite adicionar membros C# (campos, propriedades e métodos) à classe gerada:

```csharp
@functions {
    // Membros C# (campos, propriedades e métodos)
}
```

Em componentes Razor, use ```@code``` em vez de ```@functions``` para adicionar membros C#.

Por exemplo:

```csharp
@functions {
    public string GetHello()
    {
        return "Olá";
    }
}

<div>Do método: @GetHello()</div> 
```

O código gera a seguinte marcação HTML:

```html
<div>Do método: Olá</div>
```

O código a seguir é a classe C# Razor gerada:

```csharp
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor;

public class _Views_Home_Test_cshtml : RazorPage<dynamic>
{
    // Funções colocadas entre aqui 
    public string GetHello()
    {
        return "Olá";
    }
    // E aqui.
#pragma warning disable 1998
    public override async Task ExecuteAsync()
    {
        WriteLiteral("\r\n<div>Do método: ");
        Write(GetHello());
        WriteLiteral("</div>\r\n");
    }
#pragma warning restore 1998
```

Os métodos ```@functions``` servem como métodos de template quando possuem marcação:

```csharp
@{
    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}

@functions {
    private void RenderName(string name)
    {
        <p>Nome: <strong>@name</strong></p>
    }
}
```

O código renderiza o seguinte HTML:

```html
<p>Nome: <strong>Mahatma Gandhi</strong></p>
<p>Nome: <strong>Martin Luther King, Jr.</strong></p>
```

### ```@implements```
A diretiva ```@implements``` implementa uma interface para a classe gerada.

O exemplo a seguir implementa System.```IDisposable``` para que o método Dispose possa ser chamado:

```csharp
@implements IDisposable

<h1>Exemplo</h1>

@functions {
    private bool _isDisposed;

    ...

    public void Dispose() => _isDisposed = true;
}
```

### ```@inherits```

A diretiva ```@inherits``` fornece controle total sobre a classe da qual a view herda:

```csharp
@inherits TypeNameOfClassToInheritFrom
```

O código a seguir é um tipo de página Razor customizada:

```csharp
using Microsoft.AspNetCore.Mvc.Razor;

public abstract class CustomRazorPage<TModel> : RazorPage<TModel>
{
    public string CustomText { get; } = 
        "Gardyloo! - Um aviso escocês gritado da janela antes de jogar" +
        "um balde de resíduos na rua abaixo.";
}
```

O CustomText é exibido em uma view:

```chsarp
@inherits CustomRazorPage<TModel>

<div>Texto customizado: @CustomText</div>
```

O código renderiza o seguinte HTML:

```html
<div>
    Texto customizado: Bumbershoot - Outro nome para guarda-chuva.
</div>
```

```@model``` e ```@inherits``` podem ser usados na mesma view. ```@inherits``` pode estar em um arquivo _ViewImports.cshtml que a view importa:

```csharp
@inherits CustomRazorPage<TModel>
```

O código a seguir é um exemplo de view fortemente tipada:

```csharp
@inherits CustomRazorPage<TModel>

<div>Email de Login: @Model.Email</div>
<div>Texto customizado: @CustomText</div>
```

Se "jade@nuevofoundation.org" for passado no modelo, a view gera a seguinte marcação HTML:

```html
<div>Email de Login: jade@nuevofoundation.org</div>
<div>
    Texto customizado: Bumbershoot - Outro nome para guarda-chuva.
</div>
```

### ```@inject```

A diretiva ```@inject``` permite que a Razor Page injete um serviço do container de serviços em uma view. 

### ```@layout```

Este cenário se aplica apenas a componentes Razor (.razor).

A diretiva ```@layout``` especifica um layout para componentes Razor roteáveis que possuem uma diretiva ```@page```. Componentes de layout são usados para evitar duplicação de código e inconsistência.

### ```@model```

Este cenário se aplica apenas a views MVC e Razor Pages (.cshtml).

A diretiva ```@model``` especifica o tipo do modelo passado para uma view ou página:

```csharp
@model TypeNameOfModel
```

Em um app ASP.NET Core MVC ou Razor Pages criado com contas de usuário individuais, Views/Account/Login.cshtml contém a seguinte declaração de modelo:

```csharp
@model LoginViewModel
```

A classe gerada herda de RazorPage<LoginViewModel>:

```csharp
public class _Views_Account_Login_cshtml : RazorPage<LoginViewModel>
```

O Razor expõe uma propriedade Model para acessar o modelo passado para a view:

```html
<div>Email de Login: @Model.Email</div>
```

A diretiva ```@model``` especifica o tipo da propriedade Model. A diretiva especifica o T em ```RazorPage<T>``` da classe gerada da qual a view deriva. Se a diretiva ```@model``` não for especificada, a propriedade Model é do tipo dynamic. Para mais informações, veja Modelos fortemente tipados e a palavra-chave ```@model```.

### ```@namespace```

A diretiva ```@namespace```:

* Define o namespace da classe da página Razor, view MVC ou componente Razor gerado.
* Define os namespaces derivados raiz das classes de páginas, views ou componentes a partir do arquivo de importação mais próximo na árvore de diretórios, _ViewImports.cshtml (views ou páginas) ou _Imports.razor (componentes Razor).

```csharp
@namespace Your.Namespace.Here
```

Para o exemplo de Razor Pages mostrado na tabela a seguir:

* Cada página importa Pages/_ViewImports.cshtml.
* Pages/_ViewImports.cshtml contém @namespace Hello.World.
* Cada página tem Hello.World como raiz do seu namespace.

|Página|	Namespace|
|---|---|
|Pages/Index.cshtml|	Hello.World|
|Pages/MorePages/Page.cshtml	|Hello.World.MorePages|
|Pages/MorePages/EvenMorePages/Page.cshtml|	Hello.World.MorePages.EvenMorePages|

Os relacionamentos acima se aplicam a arquivos de importação usados com views MVC e componentes Razor.

Quando múltiplos arquivos de importação possuem a diretiva ```@namespace```, o arquivo mais próximo da página, view ou componente na árvore de diretórios é usado para definir o namespace raiz.

Se a pasta EvenMorePages no exemplo acima tiver um arquivo de importação com ```@namespace``` Another.Planet (ou o arquivo Pages/MorePages/EvenMorePages/Page.cshtml contiver ```@namespace``` Another.Planet), o resultado é mostrado na tabela a seguir.

|Página|	Namespace|
|---|---|
|Pages/Index.cshtml|	Hello.World|
|Pages/MorePages/Page.cshtml|	Hello.World.MorePage|
|Pages/MorePages/EvenMorePages/Page.cshtml|	Another.Planet|

### ```@page```

A diretiva ```@page``` tem efeitos diferentes dependendo do tipo de arquivo onde aparece. A diretiva:

* Em um arquivo .cshtml indica que o arquivo é uma Razor Page. 
* Especifica que um componente Razor deve lidar diretamente com requisições. 

### ```@preservewhitespace```

Este cenário se aplica apenas a componentes Razor (.razor).

Quando definido como false (padrão), o espaço em branco na marcação renderizada de componentes Razor (.razor) é removido se:

* Estiver no início ou fim dentro de um elemento.
* Estiver no início ou fim dentro de um parâmetro RenderFragment. Por exemplo, conteúdo filho passado para outro componente.
* Preceder ou seguir um bloco de código C#, como ```@if``` ou ```@foreach```.

### ```@section```
Este cenário se aplica apenas a views MVC e Razor Pages (.cshtml).

A diretiva ```@section``` é usada em conjunto com layouts de MVC e Razor Pages para permitir que views ou páginas renderizem conteúdo em diferentes partes da página HTML. 

### ```@typeparam```

Este cenário se aplica apenas a componentes Razor (.razor).

A diretiva ```@typeparam``` declara um parâmetro de tipo genérico para a classe do componente gerado:

```csharp
@typeparam TEntity
```

Tipos genéricos com restrições de tipo where são suportados:

```csharp
@typeparam TEntity where TEntity : IEntity
```

### ```@using```

A diretiva ```@using``` adiciona a diretiva using do C# à view gerada:

```csharp
@using System.IO
@{
    var dir = Directory.GetCurrentDirectory();
}
<p>@dir</p>
```

Em componentes Razor, ```@using``` também controla quais componentes estão em escopo.

## Atributos de diretiva
Atributos de diretiva Razor são representados por expressões implícitas com palavras-chave reservadas após o símbolo ```@```. Um atributo de diretiva normalmente altera a forma como um elemento é processado ou habilita funcionalidades diferentes.

### ```@attributes```
Este cenário se aplica apenas a componentes Razor (.razor).

```@attributes``` permite que um componente renderize atributos não declarados. 

### ```@bind```
Este cenário se aplica apenas a componentes Razor (.razor).

O data binding em componentes é realizado com o atributo ```@bind```. 

```html
<input type="checkbox" @bind="todo.IsDone" />
```
Este exemplo vincula a propriedade ```IsDone``` do objeto ```todo``` à checkbox.

### ```@bind:culture```
Este cenário se aplica apenas a componentes Razor (.razor).

Use o atributo ```@bind:culture``` junto com o atributo ```@bind``` para fornecer um ```System.Globalization.CultureInfo``` para analisar e formatar um valor.

### ```@on{EVENT}```
Este cenário se aplica apenas a componentes Razor (.razor).

O Razor fornece recursos de manipulação de eventos para componentes.

```html
<button @onclick="AddTodo">Adicionar tarefa</button>
```

Com este código, quando alguém ***clica*** no botão, o método ```AddToDo``` é chamado.

### ```@ref```
Este cenário se aplica apenas a componentes Razor (.razor).

Referências de componente (```@ref```) fornecem uma maneira de referenciar uma instância de componente para que você possa emitir comandos para essa instância. 

## Palavras-chave reservadas do Razor
### Palavras-chave do Razor
* page
* namespace
* functions
* inherits
* model
* section

Palavras-chave do Razor são escapadas com ```@(Palavra-chave Razor)``` (por exemplo, ```@(functions)```).

### Palavras-chave C# do Razor
* case
* do
* default
* for
* foreach
* if
* else
* lock
* switch
* try
* catch
* finally
* using
* while

Palavras-chave C# do Razor devem ser duplamente escapadas com ```@(@Palavra-chave C# do Razor)``` (por exemplo, ```@(@case)```). O primeiro ```@``` escapa o parser do Razor. O segundo ```@``` escapa o parser do C#.

### Palavras-chave reservadas não usadas pelo Razor
* class