---
title: "활동 2: PandoraBots 설정"
draft: false
weight: 5
---

## AIML
이제 AIML을 사용하여 챗봇을 만들 것입니다. AIML은 **인공지능 마크업 언어**(Artificial Intelligence Markup Language)의 약자로, 웹사이트를 만들 때 사용하는 HTML과 매우 유사하게 보일 것입니다. AIML을 작성하기 전에, Pandorabots에 가입해야 합니다.

## Pandorabots
[https://www.pandorabots.com/](https://www.pandorabots.com/) 에 접속하여 **Sign Up**을 클릭하세요. 메일과 비밀번호를 입력하여 계정을 만드세요. 또는 Google, Facebook, Twitter, Github 계정으로 가입할 수도 있습니다. 프롬프트가 나타나면 무료 체험(free trial) 옵션을 선택하세요.

## 새로운 봇 만들기
가입이 완료되면, 다음과 같은 페이지가 표시 됩니다:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="new account landing page on pandorabots" width="40%"/></p>

"My Bots" 옆에 있는 "+" 버튼을 눌러 새로운 봇을 만드세요. 이름을 지정하고 "Create Bot"를 클릭하세요.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="creating a new bot on pandorabots" width="40%"/></p>

## 봇 편집하기
새로운 봇을 만들면, 봇의 이름이 탐색 창에 나타납니다. 봇 이름 아래의 **Edit**을 클릭한 다음, **Code Editor**를 선택하여 편집기로 이동하세요.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editing a bot on pandorabots" width="40%"/></p>

편집기에서 AIML 파일과 카테고리를 작성하여, 여러분과 다른 사람들이 봇과 대화할 수 있도록 할 수 있습니다. 

파일 메뉴를 사용하여 greetings라는 새로운 AIML 파일을 만드세요.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="adding a new file on pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="adding a new file on pandorabots" width="40%"/></p>

## Hello World

다음 카테고리 코드를 ```<aiml>``` 시작 태그와 ```</aiml>``` 종료 태그 사이에 복사하세요:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

완료되면, "파일(file)" 드롭다운 메뉴를 통해 파일을 저장하세요.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="adding a new file on pandorabots" width="40%"/></p>

## 봇 테스트하기
채팅 위젯(Chat Widget)을 사용하여 봇과 대화할 수 있습니다. 오른쪽 아래의 "채팅 말풍선(chat bubbles)" 아이콘을 클릭하여 봇과 대화를 시작하세요. `Hello` 라고 입력하면, 여러분이 방금 작성한 응답인  `“Hello, world!”`﻿가 표시될 것입니다.

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="adding a new file on pandorabots" width="40%"/></p>