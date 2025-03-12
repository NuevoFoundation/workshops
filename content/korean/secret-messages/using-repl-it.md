---
title: "Repl.It 사용하기"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/sdO27-l4aqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

왕과 왕비를 돕기 위해, 우리는 C++이라는 프로그래밍 언어로 프로그램을 개발할 것입니다. 이 프로그램을 사용하면 메시지를 입력하고, 프로그램이 메세지를 비밀 메시지로 변환할 수 있습니다.

## Repl.It 사용법

오늘 우리는 Repl.It을 사용할 것입니다. 시작하기 전에, Repl.It 계정이 없다면 먼저 가입해야 합니다.
아래 버튼을 클릭하여 Repl.It 계정을 생성하세요. 가입하려면 이메일 계정이 필요합니다. 이미 Repl.It 계정이 있다면, 아래 버튼을 사용해 로그인할 수 있습니다.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/signup" target="_blank">Replit 가입 하기</a>

<img src="../media/replit-signup.png" height="300" alt="Replit sign up form" />

다음으로, Repl.It 콘솔을 사용하려고 하는데, 이를 실행하려면 아래 버튼을 클릭하세요. 다음과 같은 화면이 나타날 것입니다.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-0-english" target="_blank">Replit 실행하기</a>

<img src="../media/replit-start-screen.png" height="300" alt="Repl 초기 화면" />

이제 "Fork Repl" 버튼을 클릭하여 Repl을 포크합니다. 포크란 프로그램의 사본을 만들어 우리가 수정할 수 있도록 하는 과정입니다. 오른쪽 상단의 “Fork Repl” 버튼을 클릭하고, 다시 “Fork Repl” 버튼을 누르세요.

<img src="../media/replit-fork.png" height="300" alt="프로그램 사본 만들기 위해 repl 포킹하기"/>

Repl을 포크한 후에는 아래와 유사한 창이 나타날 것입니다.

<img src="../media/replit-window.png" height="300" alt="Replit 화면" />

{{% notice warning %}}
매번 “Launch Replit” 버튼을 볼 때마다 위 단계를 따라 Repl을 포크하여 활동을 완료해야 합니다. 포크하는 과정에서 문제가 있다면 도움을 요청하세요.
{{%/notice %}}

먼저, 이 창이 어떻게 작동하는지 알아봅시다.
main.cpp 파일은 컴퓨터가 이해하고 실행할 명령어, 즉 코드가 포함된 파일입니다. Run 버튼을 클릭하면 컴퓨터가 해당 파일에 있는 명령어를 실행합니다. 결과는 Repl 하단의 콘솔 탭에서 확인할 수 있습니다.
다음으로, `main.cpp`에 작성된 코드를 설명하겠습니다.
{{% notice tip %}}

### 라이브러리와 #include

`main.cpp`의 시작 부분으로 이동하면, 다음과 같은 줄이 있을 것입니다:

```
#include <iostream>
```
이 명령어는 `iostream`라이브러리를 참조합니다. 라이브러리는 특정 공통 문제나 주제와 관련된 C++ 함수들이 모여 있는 공간입니다. 예를 들어, 그림 그리기, 인터넷 연결 관리, 수학 연산 등을 수행하는 라이브러리가 있습니다. `iostream`은 매우 기본적인 라이브러리로, 콘솔에서 메시지를 주고받을 수 있게 해줍니다.

### 주석(Comment)

`main.cpp`에 회색으로 표시된 줄은 `//`로 시작하며, 이것을 **주석**이라고 합니다.
주석은 C++ 프로그램을 더 잘 문서화하고 명령어의 목표를 자세히 설명하는 데 유용합니다. 주석은 명령어가 아니며, 컴퓨터는 이를 무시합니다.


### 네임스페이스 규격(namespace std)
```
네임스페이스 규격 사용하기(using namespace std);
```
이 특정 명령어는 몇 가지 미리 예약된 C++ 단어에 접근할 수 있도록 합니다. 예약된 단어는 특정 의미를 가진 단어로, 다른 목적으로 사용할 수 없습니다. 여기서 std라는 예약된 단어를 참조하여 C++ 표준 라이브러리의 코드를 사용합니다. using namespace std는 표준 네임스페이스를 참조하겠다는 뜻입니다.

### 메인 함수 (Main Function)
```
int main(){
    
    return 0;
}
```
`main` 은 모든 C++ 프로그램에서 필수적인 함수입니다. 프로그램의 진입점(entry point) 역할을 합니다.
중괄호 { … } 안에 우리가 실행하려는 모든 명령어를 작성합니다. **Run**  버튼을 클릭하면 컴퓨터가 이 명령어를 실행합니다.
`return 0;` ;은 프로그램이 성공적으로 실행을 마쳤음을 나타냅니다. 만약 이 줄 이후에 명령어가 있다면, 컴퓨터는 이를 실행하지 않습니다.

{{% /notice %}}

{{< alert theme="warning" >}}모든 C++ 명령어는 세미콜론 ;으로 끝나야 합니다. **semicolon** `;`  {{< /alert >}}
