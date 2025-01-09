---
title: "Activity 4 - 조건문 (Conditions)"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eweOJoWtuwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

좋아요!

우리는 점점 비밀 메시지를 완성하는 데 가까워지고 있습니다. 하지만 이 메시지를 해독(decrypt)할 수 있어야 한다는 점도 잊지 마세요!


이를 위해 콘솔에서 입력 값을 받을 것입니다:
1.	1을 입력하면 메시지를 암호화(encrypt)합니다.
2. 2를 입력하면 메시지를 해독(decrypt)합니다.
이 작업을 위해 **조건문(Condition)**이 필요합니다.


{{% notice tip %}}

### 조건문 if/else
프로그래밍에서 조건문이란 특정 조건이 참(true)인지에 따라 명령어 또는 명령어 그룹을 실행하거나 실행하지 않도록 지시하는 것입니다. 이는 다음과 같이 동작합니다:
만약(if) 특정 조건이 충족되면, 이 명령어를 실행합니다. **그렇지 않다면(if not)(else)** 다른 명령어를 실행합니다.

Example
```
if(3 > 1){
  cout << "3 is greater than 1" << endl;
}else{
  cout << "3 is not greater than 1" << endl;
}
```
이 프로그램은 다음과 같이 출력됩니다:
```
3 is greater than 1
```


1.	if(3 > 1)
o	숫자 3이 1보다 큰지 확인합니다.
2.	조건이 참(true)이라면, if 바로 뒤의 코드 블록이 실행됩니다.
o	위 코드에서는 "3 is greater than 1"이 출력됩니다.
3.	조건이 거짓(false)이라면, else 뒤의 코드 블록이 실행됩니다.
o	하지만 위 예제에서는 조건이 참이므로, else 블록은 실행되지 않습니다

**논리 연산자(Logical Operators)**
조건을 만들 때는 if 옆의 괄호 () 안에서 논리 연산자를 주로 사용합니다.
예를 들어, a = 5와 b = 3일 때, 아래는 사용 가능한 논리 연산자들입니다:
•	작다: a < b (5는 3보다 작습니까?)
•	작거나 같다: a <= b (5는 3보다 작거나 같습니까?)
•	크다: a > b (5는 3보다 큽니까?)
•	크거나 같다: a >= b (5는 3보다 크거나 같습니까?)
•	같다: a == b (5는 3과 같습니까?)
•	같지 않다: a != b (5는 3과 같지 않습니까?)


{{% /notice %}}

이번 활동에서는 입력된 값에 따라 메시지를 암호화(encrypt it)할지 해독할지(decrypt it)를 결정하는 조건문을 작성합니다. 
그걸 위해서 이 과정을 따라야 합니다.:
1.	정수형(int) 변수를 만드세요.
2.	사용자 입력을 요청하고, 입력된 데이터를 정수형 변수에 저장하세요.
3.	if/else 조건문을 사용하여 입력된 값이 1인지 확인하세요:
	값이 1이라면, 메시지를 암호화(Encrypt) 합니다.
	그렇지 않다면, 메시지를 해독(Decrypt) 합니다.
4.	콘솔 출력:
값이 1일 경우, "Encrypt a message"를 출력합니다.
	그 외의 경우, "Decrypt a message"를 출력합니다.

도움이 필요하면 이전 활동으로 돌아가서 검토할 수 있다는 점을 기억하세요.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-4-english" target="_blank">Replit 실행하기</a>