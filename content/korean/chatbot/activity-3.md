---
title: "활동 3: 나만의 카테고리 추가"
draft: false
weight: 7
---

## 카테고리 추가하기

지금까지는 봇이 "Hello"라는 말에만 응답할 수 있었습니다. 이제 더 많은 카테고리를 추가하여 봇이 더 많은 질문에 응답할 수 있도록 해봅시다.

1. 여러분이 "What is your name?"이라고 입력하면, 봇이 "My name is Chatbot"이라고 응답합니다.
2. 여러분이 "What is your favorite color?"라고 입력하면, 봇이 "My favorite color is blue"라고 응답합니다.
3. 여러분이 "What is your favorite food?"라고 입력하면, 봇이 "My favorite food is pizza"라고 응답합니다.

카테고리의 기본 구조는 다음과 같습니다:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

패턴을 작성할 때는 항상 대문자로 작성하고, 구두점은 사용하지 마세요. 예를 들어, "What is your name?"이라는 패턴을 작성할 때는 "WHAT IS YOUR NAME"으로 작성해야 합니다.

{{% /notice %}}

{{% notice tip %}}

카테고리를 수정한 후에는 파일을 저장해야 봇과 상호작용할 수 있습니다.

{{% /notice %}}

이제 이러한 카테고리들을 여러분의 봇에 추가하고, 채팅 위젯을 사용하여 테스트해 보세요. 이제 봇은 "Hello", "What is your name?", "What is your favorite color?", "What is your favorite food?"에 응답할 수 있어야 합니다.