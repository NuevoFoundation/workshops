---
title: "Razor 지시문"
date: 2023-09-13T11:45:38-07:00
draft: false
weight: 6
---

## 지시문
Razor 지시문은 @ 기호 뒤에 예약된 키워드가 따라오는 암묵적 표현식으로 표현됩니다.
지시문은 일반적으로 뷰(View)가 해석되는 방식을 변경하거나, 다양한 기능을 활성화합니다.

Razor가 뷰에 대한 코드를 생성하는 방식을 이해하면 지시문의 동작을 더 쉽게 이해할 수 있습니다.

```csharp
@{
    string quote = "Getting old ain't for wimps! - Anonymous";
}

<div>Quote of the Day: @quote</div>
```

위 코드는 다음과 유사한 클래스를 생성합니다:

```csharp
public class _Views_Something_cshtml : RazorPage<dynamic>
{
    public override async Task ExecuteAsync()
    {
        string output = "Getting old ain't for wimps! - Anonymous";

        WriteLiteral("/r/n<div>Quote of the Day: ");
        Write(output);
        WriteLiteral("</div>");
    }
}
```

### ```@attribute```
```@attribute``` 지시문은 생성된 페이지나 뷰 클래스에 지정된 속성을 추가합니다. 다음 예제는 [Authorize] 속성을 추가하는 방법을 보여줍니다:

```csharp
@attribute [Authorize]
```

```@attribute``` 지시문은 Razor 컴포넌트에서 상수 기반 경로 템플릿(constant-based route template)을 제공하는 데에도 사용할 수 있습니다. 다음 예제에서는 컴포넌트에서 ```@page``` 지시문이 ```@attribute``` 지시문과 Constants.CounterRoute의 상수 기반 경로 템플릿으로 대체됩니다. Constants.CounterRoute는 앱의 다른 곳에서 "/counter"로 설정되어 있습니다:

```csharp
@page "/counter"
@attribute [Route(Constants.CounterRoute)]
```

### ```@code```
@code 블록은 Razor 컴포넌트(.razor)에만 해당됩니다. @code 블록을 사용하면 Razor 컴포넌트에 C# 멤버(필드, 속성, 메서드)를 추가할 수 있습니다.


```csharp
@code {
    // C# members (fields, properties, and methods)
}
```

Razor 컴포넌트에서 ```@code```는 ```@functions```의 별칭으로, ```@functions``` 대신 사용하는 것이 권장됩니다. ```@code``` 블록은 여러 개 작성이 가능합니다.

### ```@functions```
```@functions``` 지시문은 생성된 클래스에 C# 멤버(필드, 속성, 메서드)를 추가할 수 있도록 합니다.

```csharp
@functions {
    // C# members (fields, properties, and methods)
}
```

Razor 컴포넌트에서는 C# 멤버를 추가할 때 ```@functions``` 대신 ```@code```를 사용하는 것이 권장됩니다.


```csharp
@functions {
    public string GetHello()
    {
        return "Hello";
    }
}

<div>From method: @GetHello()</div> 
```

위 코드는 다음과 같은 HTML을 생성합니다:

```html
<div>From method: Hello</div>
```

다음은 Razor 코드가 생성하는 C# 클래스입니다:

```csharp
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor;

public class _Views_Home_Test_cshtml : RazorPage<dynamic>
{
    // Functions placed between here 
    public string GetHello()
    {
        return "Hello";
    }
    // And here.
#pragma warning disable 1998
    public override async Task ExecuteAsync()
    {
        WriteLiteral("\r\n<div>From method: ");
        Write(GetHello());
        WriteLiteral("</div>\r\n");
    }
#pragma warning restore 1998
```

```@functions``` 방식은 마크업을 포함하는 경우, 템플릿 방식으로 동작할 수 있습니다:

```csharp
@{
    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}

@functions {
    private void RenderName(string name)
    {
        <p>Name: <strong>@name</strong></p>
    }
}
```

위 코드는 다음과 같은 HTML로 렌더링됩니다:

```html
<p>Name: <strong>Mahatma Gandhi</strong></p>
<p>Name: <strong>Martin Luther King, Jr.</strong></p>
```

### ```@implements```
```@implements``` 지시문은 생성된 클래스에 인터페이스를 구현하도록 설정합니다. 다음 예제는 ```System.IDisposable```인터페이스를 구현하여 Dispose 메서드를 호출할 수 있도록 합니다:

```csharp
@implements IDisposable

<h1>Example</h1>

@functions {
    private bool _isDisposed;

    ...

    public void Dispose() => _isDisposed = true;
}
```

### ```@inherits```

```@inherits``` 지시문은 뷰(View)가 상속받는 클래스를 완전히 제어할 수 있도록 설정합니다:

```csharp
@inherits TypeNameOfClassToInheritFrom
```

커스텀 Razor 페이지 타입의 사용 예시는 다음과 같습니다.

```csharp
using Microsoft.AspNetCore.Mvc.Razor;

public abstract class CustomRazorPage<TModel> : RazorPage<TModel>
{
    public string CustomText { get; } = 
        "Gardyloo! - A Scottish warning yelled from a window before dumping" +
        "a slop bucket on the street below.";
}
```

뷰에서 CustomText 출력하기:

```chsarp
@inherits CustomRazorPage<TModel>

<div>Custom text: @CustomText</div>
```

위 코드는 다음과 같은 HTML을 생성합니다:

```html
<div>
    Custom text: Bumbershoot - Another word for an umbrella.
</div>
```

```@model```과 ```@inherits```는 동일한 뷰에서 함께 사용할 수 있습니다.
```@inherits```는 _ViewImports.cshtml 파일에 정의되어 뷰가 이를 가져올 수 있습니다.


```csharp
@inherits CustomRazorPage<TModel>
```

다음 코드는 강력한 형식(strongly-typed)의 뷰 예제입니다:

```csharp
@inherits CustomRazorPage<TModel>

<div>The Login Email: @Model.Email</div>
<div>Custom text: @CustomText</div>
```

Model에 "jade@nuevofoundation.org" 값이 전달되었을 때, 뷰는 다음과 같은 HTML을 생성합니다:

```html
<div>The Login Email: jade@nuevofoundation.org</div>
<div>
    Custom text: Bumbershoot - Another word for an umbrella.
</div>
```

### ```@inject```

```@inject``` 지시문은 Razor 페이지가 서비스 컨테이너로부터 서비스를 뷰에 주입할 수 있도록 합니다. 

### ```@layout```

```@layout``` 지시문은 Razor 컴포넌트(.razor)에만 해당됩니다.
이 지시문은 ```@page``` 지시문이 있는 라우팅 가능한 Razor 컴포넌트에 대해 레이아웃을 지정합니다.

레이아웃 컴포넌트는 코드 중복과 일관성 부족을 방지하기 위해 사용됩니다.


### ```@model```

```@model``` 지시문은 MVC 뷰와 Razor 페이지(.cshtml)에만 해당됩니다. 다음 지시문은 뷰(View)나 페이지(Page)에 전달되는 모델의 타입을 지정합니다:


```csharp
@model TypeNameOfModel
```

ASP.NET Core MVC 또는 Razor Pages 앱에서 개별 사용자 계정을 사용하는 경우, Views/Account/Login.cshtml 파일은 다음과 같은 모델 선언을 포함합니다:

```csharp
@model LoginViewModel
```

@model 선언은 다음과 같이 RazorPage를 상속하는 클래스를 생성합니다:

```csharp
public class _Views_Account_Login_cshtml : RazorPage<LoginViewModel>
```

Razor는 뷰에 전달된 모델에 접근할 수 있도록 Model 속성을 제공합니다:

```html
<div>The Login Email: @Model.Email</div>
```

```@model``` 지시문은 Model 속성의 타입을 지정합니다.
이 지시문은 생성된 클래스에서 ```RazorPage<T>```의 T 타입을 정의합니다.

 ```@model``` 지시문이 없는 경우, Model 속성의 타입은 dynamic으로 설정됩니다.
강력한 형식 모델(strongly typed models)과 ```@model``` 키워드에 대한 자세한 내용은 관련 문서를 참조해주세요.


### ```@namespace```

@namespace 지시문은 다음과 같은 역할을 합니다:

* 생성된 Razor 페이지, MVC 뷰 또는 Razor 컴포넌트 클래스의 네임스페이스를 설정합니다.
* 디렉터리 트리에서 가장 가까운 imports 파일(_ViewImports.cshtml 또는 _Imports.razor)에 따라 페이지, 뷰 또는 컴포넌트 클래스의 루트 네임스페이스를 설정합니다.


```csharp
@namespace Your.Namespace.Here
```

**Razor Pages 예제**

다음 표에서 보여주는 Razor Pages 예제의 특징은 다음과 같습니다:

* 각 페이지는 Pages/_ViewImports.cshtml을 가져옵니다.
* 각 페이지는 Hello.World를 네임스페이스의 루트로 설정합니다.
* Pages/_ViewImports.cshtml 파일에는 다음과 같은 내용이 포함됩니다:


|Page|	Namespace|
|---|---|
|Pages/Index.cshtml|	Hello.World|
|Pages/MorePages/Page.cshtml	|Hello.World.MorePages|
|Pages/MorePages/EvenMorePages/Page.cshtml|	Hello.World.MorePages.EvenMorePages|

앞서 설명한 관계는 MVC 뷰와 Razor 컴포넌트에서 사용되는 import 파일에도 동일하게 적용됩니다. 디렉터리 트리에서 페이지, 뷰, 또는 컴포넌트와 가장 가까운 import 파일에 ```@namespace``` 지시문이 있을 경우, 해당 파일이 루트 네임스페이스를 설정합니다.

예를 들어, 이전 예제에서 EvenMorePages 폴더에 **@namespace Another.Planet**을 포함한 import 파일이 있거나, Pages/MorePages/EvenMorePages/Page.cshtml 파일에 ```@namespace``` Another.Planet 지시문이 포함된 경우 결과는 다음 표와 같습니다.

|Page|	Namespace|
|---|---|
|Pages/Index.cshtml|	Hello.World|
|Pages/MorePages/Page.cshtml|	Hello.World.MorePage|
|Pages/MorePages/EvenMorePages/Page.cshtml|	Another.Planet|

### ```@page```

```@page``` 지시문은 나타나는 파일 유형에 따라 다른 동작을 수행합니다:

* .cshtml 파일에서: 해당 파일이 Razor 페이지임을 나타냅니다.
* Razor 컴포넌트에서: 해당 컴포넌트가 요청을 직접 처리해야 함을 지정합니다.


### ```@preservewhitespace```

이 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다.

기본값은 false이며, 다음 조건에 해당하는 경우 렌더링된 마크업에서 공백이 제거됩니다:

* 요소 안의 앞뒤 공백.
+ RenderFragment 매개변수 안의 앞뒤 공백(예: 다른 컴포넌트에 전달된 자식 콘텐츠).
* ```@if``` 또는 ```@foreach```와 같은 C# 코드 블록 앞뒤의 공백.


### ```@section```
@section 지시문은 MVC 뷰와 Razor 페이지(.cshtml)에만 적용됩니다.

이 지시문은 MVC 및 Razor Pages 레이아웃과 함께 사용되어, 뷰(View)나 페이지(Page)가 HTML 페이지의 서로 다른 부분에 콘텐츠를 렌더링할 수 있도록 합니다.

### ```@typeparam```

@typeparam 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다.

이 지시문은 생성된 컴포넌트 클래스에 **제네릭(Generic) 타입 매개변수** 를 선언합니다:

```csharp
@typeparam TEntity
```

제약 조건(type constraints)이 있는 제네릭 타입도 지원됩니다:

```csharp
@typeparam TEntity where TEntity : IEntity
```

### ```@using```

```@using``` 지시문은 생성된 뷰(View)에 C#의 using 지시문을 추가합니다:

```csharp
@using System.IO
@{
    var dir = Directory.GetCurrentDirectory();
}
<p>@dir</p>
```

위 코드는 현재 디렉터리 경로를 출력하는 HTML을 생성합니다.

Razor 컴포넌트에서는 ```@using```이 컴포넌트의 범위(scope) 내에 있는 컴포넌트를 제어하는 데에도 사용됩니다.

## Directive attributes
Razor 지시문 속성은 ```@``` 기호 뒤에 예약 키워드가 따라오는 암묵적 표현식으로 쓸 수 있습니다. 지시문 속성은 일반적으로 요소가 해석되는 방식을 변경하거나, 다른 기능을 활성화합니다.

### ```@attributes```
```@attributes``` 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다.

이 지시문은 선언되지 않은 속성을 컴포넌트에서 렌더링할 수 있도록 합니다.


### ```@bind```
```@bind``` 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다.

데이터 바인딩은 @bind 속성을 사용하여 수행됩니다.

```html
<input type="checkbox" @bind="todo.IsDone" />
```
This example binds the ```todo``` Object's ```IsDone``` property to the checkbox.

### ```@bind:culture```
```@bind:culture``` 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다. 

이 속성은 ```@bind``` 속성과 함께 사용되어 값을 파싱 하거나 포맷할 때```System.Globalization.CultureInfo```를 제공합니다.

### ```@on{EVENT}```
이 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다. 

Razor는 컴포넌트를 위한 이벤트 처리 기능을 제공합니다.

```html
<button @onclick="AddTodo">Add todo</button>
```

위 코드에서 버튼을 클릭하면 ```AddTodo``` 메서드가 호출됩니다.

### ```@ref```
```@ref``` 지시문은 Razor 컴포넌트(.razor)에만 적용됩니다. 컴포넌트 참조(```@ref```)는 컴포넌트 인스턴스를 참조하여 해당 인스턴스에 명령을 전달할 수 있는 방법을 제공합니다.

## Razor 예약 키워드
### Razor에서 사용되는 키워드:
* page
* namespace
* functions
* inherits
* model
* section

Razor 키워드는 ```@(키워드)```형태로 이스케이프됩니다. (예를 들어``` @(functions)```)

### C# Razor 키워드
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

C# Razor 키워드는 @(@C# 키워드) 형태로 이중 이스케이프해야 합니다.

* 첫 번째 @는 Razor 파서를 이스케이프합니다.
* 두 번째 @는 C# 파서를 이스케이프합니다. 예: @(@case)


### Razor에서 사용되지 않는 예약 키워드
* class