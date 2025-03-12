---
title: "활동 5: 와일드카드 활용(Echoing Wildcards)"
draft: false
weight: 10
---

## 와일드카드 활용(Echoing Wildcards)
이제 와일드카드 ```*```와 ```<star />```태그를 함께 사용하여 사용자의 입력을 응답에 포함시킬 수 있도록 해봅시다.

1. 사용자가 "My name is [name]"이라고 입력하면, 봇이 "Nice to meet you, [name]!"이라고 응답해야 합니다.
예시
입력 | 출력
---|--------------
My name is John | Nice to meet you, John!
My name is Jane | Nice to meet you, Jane!
My name is Bob | Nice to meet you, Bob!

2. 사용자가 "My favorite color is [color]"라고 입력하면, 봇이 "I also like [color]!"라고 응답해야 합니다.
예시:
입력 | 출력
---|--------------
My favorite color is blue | I also like blue!
My favorite color is red | I also like red!
My favorite color is green | I also like green!

3. 사용자가 "My favorite food is [food]"이라고 입력하면, 봇이 "[food]! Yum!"이라고 응답해야 합니다.
예시:
입력 | 출력
---|--------------
My favorite food is pizza | pizza! Yum!
My favorite food is pasta | pasta! Yum!
My favorite food is sushi | sushi! Yum!