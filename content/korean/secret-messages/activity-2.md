---
title: "Activity 2 - 변수와 입력"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/umCdJDmdf3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

멋져요! 이제 한 단계 더 나아가 봅시다. 이번에는 메시지를 출력하는 것뿐만 아니라, 수신자의 이름을 입력 받아 프로그램이 "Hello"라고 말하도록 만들어 보겠습니다.

이를 위해, 우리는 **변수(Variable)**가 필요합니다.


{{% notice tip %}}

### 변수(Variable)

**변수**는 정보를 저장하는 컨테이너입니다. 변수에는 다양한 종류가 있으며, 각 변수는 서로 다른 유형의 정보를 저장합니다:

1. **string**: :  문자, 숫자, 기호의 연속적인 데이터(문자열)를 나타냅니다. 문자열은 항상 따옴표("")로 감싸야 합니다.
예시: "hello", "1,2,3"
2. **int**: 양수 또는 음수의 정수를 나타냅니다.
예시: 1, 100, -250
3. **char**: 단일 문자를 나타냅니다. 문자는 항상 작은따옴표('')로 감싸야 합니다.
예시: 'A', 'e', 'I'
4. **bool**: true(참) 또는 false(거짓)의 값을 나타냅니다.

변수를 생성하려면 다음과 같이 선언합니다:

```
int number = 10;
```
이 코드 줄을 자세히 살펴보겠습니다:

1.	먼저 변수에 저장할 정보의 유형(type)을 지정합니다. 여기서는 int 유형입니다.
2.	그 다음 변수의 이름을 선언합니다. 여기서는 변수 이름이 number입니다.
3.	마지막으로 변수에 저장할 값(value)을 지정합니다. 여기서는 10입니다.
4.	줄 끝에는 세미콜론(;)을 추가해 코드가 끝났음을 나타냅니다.
이제 프로그램 내에서 변수 number를 사용해 저장된 값을 참조할 수 있습니다. 예를 들어, 변수의 값을 출력하려면 아래와 같이 작성합니다:

```
cout << "The number is: " << number << endl;
```
 
Running this line of code, the console will print:

```
The number is: 10
```
{{% /notice %}}

{{< notice note >}}
`cout`을 사용하면 단어, 숫자, 변수를 출력할 수 있습니다. 여러 항목을 출력하려면 각 항목 사이에 `<<`를 추가해야 합니다:
Example: 
```
int hour = 13;
cout << "It is " << hour << " in the afternoon" << endl;
```
위 코드를 실행하면 콘솔에 다음이 출력됩니다:
```
It is 13 in the afternoon.
```
{{< /notice >}}

이제 메시지 수신자가 자신의 이름을 콘솔에 입력하고, 프로그램이 그 이름을 사용해 "Hello"라고 말하도록 만들어 보겠습니다.
이름을 입력 받기 위해 아래 코드를 사용할 것입니다:

이 코드를 살펴보겠습니다:
```
string name;
cin >> name;
```
Let's dig into this line of code.

{{% notice tip %}}

### 콘솔 입력(Console Input)

`cout`을 사용해 콘솔에 출력할 수 있듯이, `cin`을 사용해 콘솔에서 받을 수 있습니다. 입력 받은 데이터는 미리 선언한 변수에 저장됩니다.
위 코드에서는 입력한 데이터를 변수 `name`.에 저장하겠다고 선언한 것입니다.
예를 들어, 콘솔에서 Queen을 입력하면, 변수 `name`은 문자열(string)"Queen"을 저장합니다.

{{% /notice%}}

이제 우리 프로그램을 실행할 시간입니다.

이 활동을 위해 따라야 할 단계는 다음과 같습니다:

1. 문자열 변수 `name`을 선언합니다.
2. 'cin'을 사용하여 사용자에게 입력을 요청하고, 입력된 데이터를 `name` 변수에 저장합니다.
3. 'Hello (`name`)' 콘솔로 인쇄합니다. 여기서 `(name)`은 `name` 변수의 값으로 대체되어야 합니다.
4. 실행을 클릭합니다. **console** 탭에서 수신자의 이름으로 'Queen'을 입력하고 콘솔에서 'Hello Queen'을 출력하는지 확인합니다.


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-2-english" target="_blank"> Replit 실행하기</a>

{{% notice warning %}}

### 도움이 필요할 때 (HELP!)

만약 Run 버튼을 클릭한 후 빨간색 에러 메시지가 나타난다면, 코드에 문제가 있다는 뜻입니다. 이 경우, 강사님께 도움을 요청하세요.
또한 아래 사항을 확인하세요:

You should also check for the following
1.	철자, 대소문자, 기호가 주어진 예제와 일치하는지 확인하세요.
2.	각 코드 줄 끝에 세미콜론(;)이 있는지 확인하세요.
3.	문자열은 반드시 따옴표("")로 감싸야 합니다.
4.	작성한 모든 코드는 `int main` 함수의 중괄호 안에 있어야 합니다.

{{% /notice %}}


