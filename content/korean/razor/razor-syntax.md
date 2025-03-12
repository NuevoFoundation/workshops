---
title: "Razor 기초2"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 5
---

## Razor 구문

### Razor 구문의 주요 규칙
Razor는 C#을 지원하며, HTML에서 C#으로 전환하기 위해 @ 기호를 사용합니다. Razor는 C# 표현식을 평가한 후, 이를 HTML 출력에 렌더링 합니다.

**@ 기호와 Razor 전환**
* @ 기호 뒤에 Razor 예약 키워드가 올 경우: Razor 전용 마크업으로 전환됩니다.
* 그렇지 않은 경우: 일반 HTML로 간주됩니다.

**@ 기호 이스케이프 처리**

Razor 마크업에서 @ 기호를 출력하려면 한 번 더 @를 사용합니다.

```csharp
<p>@@Username</p>
```

위 코드의 HTML 출력은 다음과 같이 렌더링됩니다:

```csharp
<p>@Username</p>
```

Razor 코드를 작성할 때 기억해야 할 몇 가지 기본 규칙은 다음과 같습니다:

* Razor 코드 블록은 @{ ... }로 감쌉니다.
* 인라인 표현식(변수 및 함수)은 @로 시작합니다.
* 코드 문(statement)은 세미콜론(;)으로 끝납니다.
* 문자열(String)은 큰따옴표("")로 감쌉니다.
* C# 코드는 대소문자를 구분(case-sensitive)합니다.
* C# 파일 확장자는 .cshtml 또는 .razor입니다.


#### 암묵적 Razor 표현식
암묵적(Implicit) Razor 표현식은 @로 시작하며 뒤에 C# 코드가 옵니다.

```csharp
<p>@DateTime.Now</p>
<p>@DateTime.IsLeapYear(2016)</p>
```

C#``` await``` 키워드를 제외하고는 암묵적 표현식에는 공백을 포함할 수 없습니다.

C# 제네릭(Generic)은 사용할 수 없습니다. (```< >```) 안의 문자가 HTML 태그로 해석되기 때문입니다.
 
#### 명시적 Razor 표현식

명시적(Explicit) Razor 표현식은 @ 뒤에 괄호로 감싼 표현식을 사용합니다. 예를 들어, 지난주 같은 시간의 시간을 렌더링하려면 다음과 같은 Razor 마크업을 사용할 수 있습니다.

```csharp
<p>Last week this time: @(DateTime.Now - TimeSpan.FromDays(7))</p>
```
괄호 안의 모든 내용은 평가된 후 출력됩니다. 명시적 표현식을 사용하면 텍스트와 표현식 결과를 연결할 수도 있습니다.

```csharp
@{
    var joe = new Person("Joe", 33);
}

<p>Age@(joe.Age)</p>
```

주의할 점:
* 명시적 표현식 없이 작성된 경우: ```<p>Age@joe.Age</p>```는 이메일 주소처럼 처리되어 ```<p>Age@joe.Age</p>```로 렌더링됩니다.
* 명시적 표현식을 사용하면: ```<p>Age33</p>```로 렌더링됩니다.

#### Razor 코드 블록
Razor 코드 블록은 @로 시작하며 { }로 감쌉니다. 표현식과는 달리, 코드 블록 내부의 C# 코드는 렌더링되지 않습니다. 뷰(View)에서 코드 블록과 표현식은 동일한 스코프(Scope)를 공유하며, 정의된 순서대로 실행됩니다. 코드 블록에서는 로컬 함수(Local Function)를 선언하고, 마크업과 함께 이를 템플릿 메서드로 사용할 수 있습니다.

```csharp
@{
    void RenderName(string name)
    {
        <p>Name: <strong>@name</strong></p>
    }

    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}
```
다음 Razor 코드는 아래와 같은 HTML로 렌더링됩니다:

```html
<p>Name: <strong>Mahatma Gandhi</strong></p>
<p>Name: <strong>Martin Luther King, Jr.</strong></p>
```

#### 조건부 속성 렌더링
Razor는 필요하지 않은 속성을 자동으로 생략합니다. 전달된 값이 null이거나 false인 경우 해당 속성은 렌더링되지 않습니다.

예를 들어, 아래의 Razor 코드를 살펴보세요:


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

이 Razor 마크업은 다음과 같은 HTML을 생성합니다:

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

### 객체와 함께 작업하기
서버 코딩은 종종 객체(Object)와 관련됩니다.

DateTime 객체는 ASP.NET에 내장된 대표적인 객체이지만, 객체는 웹 페이지, 텍스트 상자, 파일, 데이터베이스 레코드 등을 설명하기 위해 사용자 정의로 생성될 수도 있습니다. 객체는 수행할 수 있는 메서드(Method)를 가질 수 있습니다.

예를 들어:

* 데이터베이스 레코드 객체에는 Save 메서드가 있을 수 있습니다.
* 이미지 객체에는 Rotate 메서드가 있을 수 있습니다.
* 이메일 객체에는 Send 메서드가 있을 수 있습니다.

객체는 특성을 설명하는 속성(Property)도 가질 수 있습니다.

예를 들어:

* 데이터베이스 레코드 객체는 FirstName과 LastName 속성을 가질 수 있습니다.


ASP.NET의 DateTime 객체는 Now라는 속성을 가지고 있습니다(DateTime.Now로 작성). Now 속성은 Day라는 하위 속성도 가집니다(DateTime.Now.Day로 작성). 아래 예제는 DateTime 객체의 일부 속성에 접근하는 방법을 보여줍니다:

```html
<table border="1">
<tr>
<th width="100px">Name</th>
<td width="100px">Value</td>
</tr>
<tr>
<td>Day</td><td>@DateTime.Now.Day</td>
</tr>
<tr>
<td>Hour</td><td>@DateTime.Now.Hour</td>
</tr>
<tr>
<td>Minute</td><td>@DateTime.Now.Minute</td>
</tr>
<tr>
<td>Second</td><td>@DateTime.Now.Second</td>
</tr>
</td>
</table>
```

### 제어 구조
제어 구조는 코드 블록의 확장 형태입니다. 코드 블록의 모든 특성(마크업으로의 전환, 인라인 C# 등)이 다음 구조에도 적용됩니다:

#### 조건문(Conditionals) ```@if, else if, else, 그리고 @switch```
```@if```는 코드 실행 여부를 제어합니다.

```csharp
@if (value % 2 == 0)
{
    <p>The value was even.</p>
}
```

```else```와 ```else if```는 @ 기호를 필요로 하지 않습니다.`

```csharp
@if (value % 2 == 0)
{
    <p>The value was even.</p>
}
else if (value >= 9876)
{
    <p>The value is large.</p>
}
else
{
    <p>The value is odd and small.</p>
}
```

아래 마크업은 switch 문을 사용하는 방법을 보여줍니다:

```csharp
@switch (value)
{
    case 1:
        <p>The value is 1!</p>
        break;
    case 9876:
        <p>Your number is 9876!</p>
        break;
    default:
        <p>Your number wasn't 1 or 9876.</p>
        break;
}
```

#### 반복문 ```@for, @foreach, @while, @do while```

반복 제어문을 사용하여 템플릿 HTML을 렌더링할 수 있습니다. 예를 들어, 사람들의 목록을 렌더링하려면 다음과 같이 작성할 수 있습니다:

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

지원되는 반복문은 다음과 같습니다:

```@for```

```csharp
@for (var i = 0; i < people.Length; i++)
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>
}
```

```@foreach```

```csharp
@foreach (var person in people)
{
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>
}
```

```@while```

```csharp
@{ var i = 0; }
@while (i < people.Length)
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>

    i++;
}
```

```@do while```

```csharp
@{ var i = 0; }
@do
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>

    i++;
} while (i < people.Length);
```