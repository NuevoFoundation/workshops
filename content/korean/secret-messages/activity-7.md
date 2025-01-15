---
title: "Activity 7 - 입력 줄 (Input Line)"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/xLAq5HggT6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

축하합니다!

여러분은 이제 왕국을 완전히 구해내는 것에 아주 가까워졌습니다. 이제 남은 것은 전체 문장을 입력할 수 있는 기능을 추가하는 것뿐입니다! 이를 위해 몇 가지만이 필요합니다. 
먼저, `string:getline()` 문장을 사용하여 입력을 받아야 합니다.
```
string phrase;
getline(cin, phrase);
```
이 방법을 사용하면 콘솔에서 한 단어만이 아니라 전체 메시지를 입력할 수 있게 됩니다.

다음 단계를 따라 프로그램을 완성하여 왕국을 구하세요:

1. `main` 함수에서  `cin >> name;` 문장을 `getline(cin, name);`으로 변경하세요.

2. 두 함수 모두에서 `for`  루프에 `if` 조건문을 추가하세요. 이 조건문은 현재 문자가 'a' 이상이고 '>=' 'z' 이하인 '<=' 경우에만 루프의 내용을 실행하도록 하세요. 이렇게 하면 느낌표, 쉼표, 공백, 기타 특수 문자를 암호화하거나 복호화하는 것을 무시할 수 있습니다.

프로그램이 작동하는 방식을 잊지 마세요:
1. 먼저 프로그램이 사용자에게 이름을 요청합니다.
2. 다음으로, 메시지를 `1` 암호화 (for encryption) 또는 `2` 복호화(for decryption)  해야 할 지 결정해야 합니다.
3. 마지막으로, 암호화하거나 복호화할 메시지를 입력합니다.

 이 프로그램으로 자신만의 비밀 메시지를 만들어보거나 친구들의 메시지를 복호화해보세요!  

{{< alert theme="warning" >}} **경고**: 이 프로그램에서는 항상 문자열과 문자를 **소문자**로 작성해야 합니다.. {{< /alert >}}

이전 활동으로 돌아가 필요한 내용을 언제든지 다시 검토할 수 있다는 것을 기억하세요!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-7-english" target="_blank">Replit 실행하기</a>
