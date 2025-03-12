---
title: "Activity 3 - 반복문 (Loops)"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zEQkGgS779g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

좋아요!

이제 왕께서 메시지를 문자를 통해 입력하도록 요청하셨습니다. 나중에 메시지를 수정할 수 있도록 하기 위함입니다.

이를 위해 **반복문(Loop)**이라는 것을 사용해야 합니다. 반복문은 특정 코드 블록을 여러 번 실행할 수 있게 합니다. 아래의 예제를 살펴보세요. 이 코드는 반복문을 사용하여 숫자를 출력합니다.


```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Let's try to understand what this line of code does.

{{% notice tip %}}


### 반복문(Loops)

`for(int i=0; i<3; i++) { }`
이 코드는 중괄호 {} 안에 있는 명령어를 반복문(loop)으로 실행하도록 프로그램에 지시합니다. 이 명령어에는 세 가지 주요 부분이 있습니다:
1.	`int i=0;`
o	i라는 이름의 정수형(int) 변수를 선언하고, 초기값을 0으로 설정합니다.
o	이 변수는 반복문 안에서 우리가 몇 번 반복했는지 세는 카운터(counter) 역할을 합니다.
2.	`i<3;` 
o	반복문이 계속 실행되려면 이 조건이 참(true)이어야 합니다.
o	예제에서는 i의 값이 3보다 작을 때 반복문이 실행됩니다.
3.	`i++` 
o	반복문이 한 번 실행된 후, i에 1을 더합니다.
o	이 방식은 명령어를 지정된 횟수(이 경우 3번)만큼 반복할 때 자주 사용됩니다.


{{% /notice %}}

**string** 변수의 속성은 문자열의 문자 수를 셀 수 있다는 것입니다.

{{% notice tip %}}

### 문자열에서 각 문자에 접근하기

문자열(string) 변수의 속성 중 하나는 문자열에 포함된 문자(character) 개수를 셀 수 있다는 것입니다. 문자열의 각 문자는 char라고 하며, 문자열 안에서의 위치를 사용해 접근할 수 있습니다.
문자열을 문자들의 리스트로 생각해 봅시다:
•	첫 번째 문자는 위치 0에 있습니다.
•	두 번째 문자는 위치 1에 있습니다.
•	세 번째 문자는 위치 2에 있습니다.
•	이런 식으로 계속됩니다.

다음 코드는 각 문자에 접근하는 방법을 보여줍니다:

```
string word = "hello";
char letter = word[0];
cout << "The first letter is: " << letter << endl;
```
This would print: 
```
The first letter is: h
```

### 문자열의 길이 확인하기

문자열의 각 문자에 접근하는 것 외에도, 문자열의 길이를 알 수 있습니다. 이를 위해 아래 코드를 사용할 수 있습니다:

```
string word = "hello";
int wordSize = word.size();
cout << "The size is: " << wordSize << endl;
```
This would print:
```
The size is: 5
```
{{% /notice %}}

이제 우리가 작성한 코드를 수정하여 hello 대신 입력된 이름의 각 문자를 출력하도록 만들어 봅시다.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-3-english" target="_blank">Replit 실행하기</a>

