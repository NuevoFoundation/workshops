---
title: "활동 3 - 웹 애플리케이션 만들기"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 7
---

## 활동 지침

### 프로젝트 생성

1. Visual Studio Code가 열려 있는지 확인합니다.

2. 액티비티 바(Activity Bar)에서 **Explorer** 아이콘을 선택합니다.

3. **Create .NET Project** 버튼을 클릭합니다.

    명령 팔레트(Command Palette)가 드롭다운 형태로 나타나며 프로젝트 유형 목록이 표시됩니다.

4. 제공된 목록에서 **Blazor Server App을 선택합니다.**

5. 새 애플리케이션을 저장할 폴더를 선택합니다.

6. 애플리케이션에 이름을 지정합니다.

    애플리케이션이 생성되며, 탐색기(Explorer)에서 **Solution** 메뉴가 표시됩니다.

    <img src="../media/solution-explorer.png" alt="Screenshot of Solution Explorer in VS Code" />

이제 여러분이 직접 만든 페이지가 생겼습니다!

### Razor Pages 프로젝트 구조 검토

아래 표는 생성된 Razor Pages 프로젝트 구조를 설명합니다:

|이름   | 설명 |
|-------|------------|
|Pages/	|Razor 페이지와 지원 파일을 포함합니다. 각 Razor 페이지는 .cshtml 파일과 .cshtml.cs PageModel 클래스 파일을 가집니다.|
|wwwroot/	|HTML, JavaScript, CSS와 같은 정적 자산 파일을 포함합니다. |
|ContosoPizza.csproj	|프로젝트의 종속성과 같은 구성 메타데이터를 포함합니다.|
|Program.cs|	앱의 진입점 역할을 하며, 라우팅과 같은 앱의 동작을 구성합니다.|

기타 주요 관찰 사항:

* Razor 페이지 파일과 PageModel 클래스 파일의 쌍

    * Razor 페이지는 Pages 디렉터리에 저장됩니다.
각 Razor 페이지는 다음 두 가지 파일로 구성됩니다:
        * .cshtml 파일: 프레젠테이션(HTML 마크업) 담당.
        * .cshtml.cs 파일(PageModel 클래스): 로직 분리를 담당.
    * PageModel 클래스의 역할:
        * Razor 페이지의 로직과 프레젠테이션을 분리.
        * 요청을 처리하기 위한 페이지 핸들러(page handlers) 정의.
        * Razor 페이지에 한정된 데이터 속성과 로직을 캡슐화.


* Pages 디렉터리 구조와 요청 라우팅

    Pages 디렉터리는 Razor Pages의 파일과 구조를 관리하며, 라우팅 요청을 처리합니다. Razor Pages는 Pages 디렉터리 구조를 사용하여 요청 라우팅 규칙을 정합니다.

다음 표는 URL이 파일명으로 매핑되는 방식을 보여줍니다:

|URL|	매핑되는 Razor 페이지|
|---|---------|
|www.domain.com	|Pages/Index.cshtml|
|www.domain.com/Index	|Pages/Index.cshtml|
|www.domain.com/Privacy	|Pages/Privacy.cshtml|
|www.domain.com/Error	|Pages/Error.cshtml|

Pages 디렉터리의 하위 폴더는 Razor 페이지를 체계적으로 구성하는 데 사용됩니다.
예를 들어, Pages/Products 디렉터리가 있다면 URL은 아래와 같이 매핑됩니다:

|URL	|매핑되는 Razor 페이지|
|-----|--------|
|www.domain.com/Products	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Index	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Create	|Pages/Products/Create.cshtml|


* 레이아웃 및 공용 파일

Razor Pages는 여러 페이지에서 공통으로 사용되는 파일들을 지원합니다. 이 파일들은 공통 레이아웃 요소와 페이지에서 공유되는 설정을 정의합니다. 다음 표는 주요 공용 파일의 목적을 설명합니다:

|파일명	|설명 |
|-------|----------|
|_ViewImports.cshtml	|여러 페이지에서 사용되는 네임스페이스와 클래스를 가져옵니다.|
|_ViewStart.cshtml	|모든 Razor 페이지에 적용되는 기본 레이아웃을 지정합니다.|
|Pages/Shared/_Layout.cshtml	|_ViewStart.cshtml 파일에 의해 지정된 레이아웃으로, 여러 페이지에서 공통 레이아웃 요소를 구현합니다.|
|Pages/Shared/_ValidationScriptsPartial.cshtml	|모든 페이지에 유효성 검사 기능을 제공합니다.|

### 프로젝트 실행

1. Visual Studio Code 열기 및 탐색기 선택 확인

    * Visual Studio Code가 열려 있는지 확인하고, 액티비티 바(Activity bar)에서 탐색기(Explorer)가 선택되어 있는지 확인합니다.

2. 솔루션 탐색기에서 프로젝트 실행

    * 솔루션 탐색기(Solution Explorer)에서 프로젝트 이름을 마우스 오른쪽 버튼으로 클릭합니다.
    
    * Debug(디버그)를 선택한 후, Start new instance(새 인스턴스 시작)를 선택합니다.

이 작업은 새 웹사이트를 빌드하고 실행합니다.

<img src="../media/website1.png" alt="Screenshot of the website you just created" />

3. 웹사이트에서 **Counter** 및 **Fetch Data** 링크를 클릭하여 페이지를 탐색합니다.


### 랜딩 페이지 사용자 지정

웹 애플리케이션에 더 적합하도록 랜딩 페이지를 변경해 봅시다.

1. *Pages/Index.razor* 파일에서 아래 C# 코드를 추가합니다:


```C#
@code {
TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}
```

위 코드는 비즈니스가 시작된 이후 경과한 시간을 계산합니다.

2. ```PageTitle``` 요소를 **“Welcome to my first web page”** 로 변경합니다.

3. ```h1``` 요소를 **“Welcome to my first Razor web app”** 로 변경합니다.

4. 나머지 텍스트를 아래 코드로 대체합니다:

```CSHTML
<p class="lead">The best website in town for @Convert.ToInt32(timeInBusiness.TotalDays) days!</p>
```
코드 설명:

* 텍스트의 의미: 2010년 1월 17일부터 경과한 일수를 표시합니다.
* Razor 구문 사용: 기호를 사용하여 HTML에서 Razor 구문으로 전환합니다.
* Convert.ToInt32 메서드: timeInBusiness 변수의 TotalDays 속성을 정수로 변환합니다.
* Convert 클래스: System 네임스페이스의 일부이며, .csproj 파일의 ```<ImplicitUsings>``` 요소에 의해 자동으로 가져옵니다.


5. 파일을 저장한 후, 앱이 실행 중인 브라우저 탭을 새로고침하여 변경 내용을 확인합니다. 

<img src="../media/end-of-activity-3.png" alt="Screenshot of site after changes from Activity 3" />