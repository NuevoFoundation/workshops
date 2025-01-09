---
title: "활동 4 - 새로운 Razor 페이지 추가"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 8
---

## 활동 지침

### 새 페이지 생성하기

1. Visual Studio Code가 열려 있는지 확인합니다.

    **액티비티 바(Activity bar)** 에서 **탐색기(Explorer)** 가 선택되어 있는지 확인합니다.


2. **솔루션 탐색기(Solution Explorer)** 에서 Pages 디렉터리 옆에 있는 Add new file… 버튼을 선택합니다. 

<img src="../media/add-new-file.png" width="300" alt="Screen shot of Add new file button" />

그럼 파일 유형을 선택할 수 있습니다.

3. 나타나는 파일 유형 목록에서 **Razor component** 를 선택합니다.

<img src="../media/select-razor-component.png" width="300" alt="Screen shot of command pallette for create new file" />

4. 새 파일의 이름을 ```todo``` 로 지정하고 **Enter**를 누릅니다.

    파일이 생성되며, 편집기(Editor)에서 열립니다.


5. 파일을 업데이트하여 ```@page``` 지시문을 추가합니다. 이를 통해 페이지가 **/todo** 경로에 응답하도록 설정합니다.

    페이지 제목을 설정하려면 ```<PageTitle>``` 태그를 사용합니다.


### 네비게이션에 페이지 링크 추가

1. **Shared** 디렉터리에서 **NavMenu.razor** 파일을 찾아 엽니다.

2. **Fetch Data** 항목 위에 Fetch Data ```<div>```를 복사한 후 Todo 링크로 수정합니다.

3. **솔루션 탐색기(Solution Explorer)** 에서 프로젝트 이름을 오른쪽 클릭합니다.

    **Debug(디버그)** 를 선택하고 **Start new instance(새 인스턴스 시작)**를 선택합니다.

    브라우저에서 앱을 열어 To Do List 페이지가 추가되었는지 확인합니다.


<img src="../media/empty-todo.png" alt="Screenshot of To Do List added to the page" />

### To Do List 만들기

1. **TodoItem.cs** 라는 새 클래스 파일을 만들어 todo 객체를 나타내는 클래스를 생성해주세요.

    프로젝트 창의 맨 윗부분에서 Add new file… 버튼을 클릭하고 목록에서 Class를 선택해주세요. 이름을 ```TodoItem```으로 지정해주세요.


2. TodoItem에 문자열 타입의 ```Title```과 ```IsDone```이라는 ```boolean(불리언 속성)```을 추가하려면 다음 코드를 추가해주세요.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. todo.razor 파일로 돌아가서 다음을 수행해주세요:
    * @code 블록에서 TodoItem의 리스트 객체(List object)인 todos를 추가해주세요. Todo 컴포넌트는 이 필드를 사용하여 todo 리스트 상태를 유지합니다.
    * “Todo”라는 제목(```<h3>```)을 추가해주세요. 
    * 제목 아래에 순서 없는 목록 마크업(```<ul>```)과 foreach 루프를 추가하여 각 todo 항목을 목록 항목(```<li>```)으로 렌더링해주세요.
    * 순서 없는 목록 아래에 “Something todo”라는 placeholder를 포함하는 텍스트 입력 필드(```<input>```)와 “Add todo”라는 텍스트를 가진 버튼(```<button>```)을 추가해주세요.

4. **Add todo** 버튼을 클릭하면 현재는 아무 일도 일어나지 않습니다. 이제 이벤트 핸들러를 추가해야 합니다.

    * 버튼에 **onclick** 액션을 포함하도록 변경해주세요.
    * ```@code``` 블록에서:
        * 새 ```todo```의 이름을 저장할 새로운 문자열을 추가해주세요.
        * ```AddTodo``` 메서드를 추가하여 새 문자열에 텍스트가 있는지 확인해주세요. 이는 문자열의 ```IsNullOrWhiteSpace``` 메서드를 사용하여 수행할 수 있습니다. 텍스트가 있으면 해당 텍스트를 제목으로 사용하는 ```TodoItem``` 인스턴스를 생성하고, 이전에 생성한 리스트 객체에 해당 인스턴스를 추가해주세요.
        * ```newTodo```를 빈 문자열로 설정하여 텍스트 입력 필드의 값을 지우세요.
    * 텍스트 ```<input>``` 요소를 수정하여 ```@bind``` 속성을 사용해 ```newTodo```와 바인딩해주세요.

5. 목록을 업데이트하여 제목을 편집 가능한 입력 필드(```<input>```)로 만들고, 완료된 항목을 추적할 체크박스를 추가해주세요. 체크박스를 ```todo```의 ```IsDone``` 속성에 ```@bind``` 해주세요.

6. ```<h3>```를 업데이트하여 완료되지 않은 todo 항목의 수를 표시해주세요. 

7. 앱의 새 인스턴스를 저장하고 실행하여 테스트해주세요.

<img src="../media/new-todo-list.png" alt="Screenshot of completed app" />