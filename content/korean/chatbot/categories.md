---
title: "카테고리"
draft: false
weight: 6
---

## AIML 기초
AIML의 기본 단위는 **카테고리**입니다. 카테고리는 **패턴(pattern)**과 **템플릿(template)**으로 구성됩니다. 패턴은 사용자가 봇에게 말하는 내용이고, 템플릿은 봇이 사용자에게 제공하는 응답입니다. 

다음 예시를 보면, 패턴은 "HELLO"이고 템플릿은 "Hello, World!"입니다. 사용자가 "HELLO"라고 말하면, 봇은 "Hello, World!"라고 응답합니다. 패턴 매칭은 대소문자를 구분하지 않으므로, "hello", "HELLO", "Hello", "HeLlo" 등 다양한 형태의 입력에도 동일한 응답이 나옵니다.

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

패턴을 작성할 때는 모든 문자를 대문자로 작성하고, 구두점 사용을 피하는 것이 좋습니다. 예를 들어, "What is your name?"이라는 패턴을 만들고 싶다면 "WHAT IS YOUR NAME"으로 작성해야 합니다. Pandora는 패턴 매칭을 수행하기 전에 사용자 입력에서 구두점을 제거합니다.

{{% /notice %}}