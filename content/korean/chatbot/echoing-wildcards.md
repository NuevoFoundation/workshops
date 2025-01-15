---
title: "와일드카드 활용(Echoing Wildcards)"
draft: false
weight: 9
---

## ```<star />```태그 소개
이번에는 봇의 응답이 더 흥미로워지도록 할 수 있는 방법을 하나 더 배워보겠습니다. 이전에 배운 것처럼, 우리는 와일드카드  ```*``` 를 사용해 사용자의 다양한 입력을 대응할 수 있었습니다. 그런데, 만약 사용자가 입력한 단어나 구를 그대로 응답에 포함하고 싶다면 어떻게 해야 할까요? 예를 들어, 사용자가 좋아하는 색을 말했을 때, 그 색을 응답에 포함하도록 만들고 싶을 수 있습니다. 이 경우 ```<star />``` 태그를 사용할 수 있습니다.

 ```<star />``` 태그는 사용자가 입력한 단어나 구를 응답에 그대로 반영해 주는 특별한 태그입니다. 그 작동 방식을 살펴봅시다.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

이 카테고리가 어떻게 작동하는지 살펴봅시다. "MY FAVORITE COLOR IS " 패턴은 "MY FAVORITE COLOR IS"로 시작하는 모든 입력에 매칭되며, 그 뒤에 오는 단어나 구는 무엇이든 캡처됩니다. 따라서 이 패턴은 "MY FAVORITE COLOR IS BLUE", "MY FAVORITE COLOR IS RED", "MY FAVORITE COLOR IS GREEN" 등과 같은 입력에 매칭됩니다.  ```<star />``` 태그는 사용자가 입력한 단어나 구를 캡처하여 응답에 사용합니다. 예를 들어, 사용자가 "MY FAVORITE COLOR IS BLUE"라고 입력하면, "blue"라는 단어가 와일드카드로 캡처되며, 봇은 "Your favorite color is blue"라고 응답합니다.

다음은 이 카테고리의 입력과 출력 예시입니다:

입력 | 출력 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.