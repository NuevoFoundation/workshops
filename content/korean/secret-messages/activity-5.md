---
title: "Activity 5 - ASCII 코드"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/MeOQFpey0pA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

좋아요!
이번 활동에서는 수신자의 이름을 암호화(Encrypt)해 보겠습니다.


**ASCII Code** 써 봅시다!

{{% notice tip %}}

### ASCII 코드

ASCII 코드는 각 문자에 숫자 값이 있음을 보여줍니다. 예를 들어 'A' 문자는 숫자 65, 'B'는 66, 'C'는 67 등입니다.

다음 목록은 가장 일반적으로 사용되는 문자의 값을 보여줍니다:

![ASCII 코드 목록](../media/ascii-english.png)

각 문자에는 숫자 값이 있으므로 이를 사용하여 이 문자에 값을 더하거나 뺄 수 있으므로 특정 방식으로 문자의 순서를 변경할 수 있습니다. 문자('char')를 숫자('int')로 변환하거나 그 반대로 변환할 수 있습니다.

Example
```
char letter = 'A';
int letter_value = letter;

cout << letter << " = " << letter_value << endl;
```
This will print:
```
A = 65
```

이 예제에서는 문자를 변수 유형 **char**에 저장합니다. 그런 다음 **int** 유형 변수에서는 문자 유형 변수를 저장하지만, 두 번째 변수는 숫자를 저장하므로 ASCII 코드에 따라 문자를 숫자 값으로 변환합니다.

우리는 반대로 할 수 있습니다. 예를 들어:
```
int letter_value = 67;
char letter = letter_value;
cout << letter_value << " = " << letter << endl;
```
This will print:
```
67 = C
```
{{% /notice %}}

암호화 방법
이제 우리는 키워드(keyword)를 사용하여 이름을 암호화할 것입니다.
프로그램은 다음과 같은 방식으로 작동합니다:
•	이름의 각 문자와 키워드의 각 문자를 더합니다.
•	결과로 나온 새 문자를 암호화된 메시지에 저장합니다.
•	키워드의 길이가 끝나면 다시 처음으로 돌아갑니다.

예제:
•	키워드: "queen"
•	암호화할 이름: "programmer"
1.	첫 번째 문자 'p'와 키워드의 첫 번째 문자 'q'를 더합니다. 결과는 새 문자로 저장됩니다.
2.	두 번째 문자 'r'과 키워드의 두 번째 문자 'u'를 더합니다.
3.	키워드가 끝나면 다시 처음 문자 'q'로 돌아갑니다.


이를 위해 우리는 이미 수행한 작업의 일부를 수집할 것이며 다음 단계를 따라야 합니다:

1. 먼저, 키워드가 될 'string' 유형의 변수를 생성합니다.
2. 콘솔에서 받은 입력을 이 변수에 저장합니다. 이것이 이름이 될 것입니다.
3. 처음 두 단계를 반복하면 키워드가 저장됩니다.
3. 'for' 루프를 선언하고 0으로 초기화된 유형의 변수 'int'를 사용합니다. 루프의 각 사이클에 대해 이 변수에 '1'을 추가하고 변수가 '끈' 변수의 '크기'보다 작을 때 루프를 계속합니다.
4. 'for' 루프의 본문에서 이름 문자 (`name[i]`)와 카운터 위치의 키워드 문자 (`key[counter]`)의 합과 같은 'int' 변수를 만듭니다. 이 합에서 소문자 'a'를 빼서 합이 ASCII 코드의 다른 임의 문자가 아닌 문자에 해당하도록 해야 합니다.
5. 'if' 문을 사용하여 문자의 합이 'z'보다 큰 문자에 해당하는지 확인합니다. 그렇다면 알파벳에서 참된 문자를 얻으려면 '25'(알파벳의 문자 수)를 빼야 합니다.
6. 문자 `name[i]`을 '합' 변수에 포함된 값으로 설정합니다. 이렇게 하면 원래 문자가 새 문자로 변경됩니다.
7. 키워드에서 가져온 카운터에 '1'을 추가합니다.
8. 키워드 카운터가 '키' 문자열의 길이보다 크거나 같은지 확인합니다. 그렇다면 카운터를 '0'으로 재설정합니다.
9. 마지막으로 'for' 문 뒤에 암호화된 메시지를 콘솔에 인쇄합니다.

언제든지 이전 활동으로 돌아가서 무엇이든 복습할 수 있다는 점을 기억하세요!

단계가 완료되면 단어 재생 및 암호화를 시작하세요! **Run**을 누르고 콘솔에 키워드를 입력한 다음 엔터 키, 암호화할 이름 또는 단어, 엔터 키를 입력합니다. 예를 들어, 다음을 복사하여 콘솔에 붙여넣을 수 있습니다:
```
programmer
queen
```
{{< alert theme="warning" >}} **경고**: 이 프로그램에서는 항상 **소문자**로 문자열과 문자를 작성해야 합니다.. {{< /alert >}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-5-english" target="_blank">Replit 실행하기</a>

{{< alert theme="danger" >}}**중요:** 콘솔에 붙여넣으려면 콘솔을 마우스 오른쪽 버튼으로 클릭하고 "붙여넣기"를 클릭합니다. 그렇지 않으면 붙여넣기 작업이 제대로 작동하지 않을 수 있습니다. {{< /alert >}}
© 2022 GitHub, Inc.
