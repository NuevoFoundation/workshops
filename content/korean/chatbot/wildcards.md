---
title: "와일드카드(Wildcard)"
draft: false
weight: 8
---

## 와일드카드
지금쯤이면 사용자가 질문하는 모든 방식에 대해 카테고리를 작성하는 것에 상당히 많은 작업이 필요하다는 것을 느꼈을 것입니다. 예를 들어, 현재 봇은 "Hello"에 "Hello, world"로 응답합니다. 하지만 사용자가 "Hello there" 또는 "Hello chatbot"이라고 말한다면 어떻게 될까요? 이런 경우마다 새로운 카테고리를 작성해야 합니다. 다행히도, 봇을 좀 더 유연하게 만들기 위해 사용할 수 있는 추가 도구들이 있습니다. 

그중 하나가 **와일드카드**입니다. 와일드카드는 어떤 단어나 구도에 맞출 수 있는 특별한 문자입니다. 어떻게 작동하는지 살펴봅시다.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

 ```*``` 기호는 사용자 입력에서 하나 이상의 단어를 캡처할 수 있습니다. 이 새로운 카테고리로 인해 챗봇은 이제 "Hello"로 시작하는 모든 입력에 대해 "Hi!"라고 응답할 것입니다. 따라서 "HELLO *" 패턴은 "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE" 등 다양한 입력에 대응합니다.