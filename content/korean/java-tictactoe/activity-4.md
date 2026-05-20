---
title: "4. 승자를 확인하기"
description: "write method to check the winner with an input board"
date: 2021-10-14T00:00:00Z
prereq: "게임판 설정하기!, 입력을 읽고 처리하기, 게임판 업데이트하기"
difficulties: ["intermediate"]
weight: 5
---

## 승자를 확인하기

현재 게임 보드의 `array` 입력으로 `String`에서 승자를 반환하는 방법 'getWinner(String[] curBoard)'를 작성합니다.

- 플레이어가 이기면 '"축하합니다!\n당신은 게임에서 이겼습니다 :)'.(`"Congratulations! \nYou won the Game :)"`)

- 컴퓨터가 이기면 '"게임 오버!"를 반환하세요당신은 게임에서 졌습니다 :(').(`"Game Over! \nYou lost the Game :("`.)

- 동점일 경우 'It's TIE! 다시 시도해 보세요'라고 답하세요.(`"It's a TIE! Try again"`.)

- 아직 우승자가 없다면 `""`.를 반환하세요.

이 방법을 작성하는 방법에는 여러 가지가 있습니다.

다음 리플릿에서 먼저 시도해 보세요. 방법이 올바르게 작성되었는지 알려줄 것입니다!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Replit 실행하기</a>

{{% notice note %}}
#### 'getWinner()' 방법 작성을 위한 아이디어 및 힌트

다음은 getWinner() 메서드를 작성하는 데 도움이 되는 몇 가지 힌트입니다:

 1. 가로, 세로, 대각선의 각 3개의 위치를 연결하여 문자열을 만들어봅니다.

 2. equals() 메서드를 사용하여 각 연결된 문자열이 "XXX" 또는 "OOO" 인지 확인하여 승자를 판별합니다. (이 부분은 "XXX" 또는 **"OOO"**을 확인하는 또 다른 메서드를 만들 수도 있습니다.)

3. 게임판 배열이 모두 채워져 있지만 승자가 없으면 게임은 무승부로 끝납니다. 이 경우 for 루프를 사용하여 배열이 꽉 찼는지 확인할 수 있습니다


{{% /notice %}}

## 승자 메서드 호출하기

`main()`,  메서드에서 플레이어의 움직임 **"X"**를 배치한 후 `getWinner()` 메서드를 호출하여 승자가 있는지 확인합니다.

 승자가 없거나 무승부인 경우 게임을 계속 진행합니다.

승자나 무승부가 있을 경우, 마지막으로 게임판을 출력하고 결과를 출력한 후`break;`문을 사용하여 `while` 루프에서 빠져나옵니다.


## 위 과정을 반복하기

이제 컴퓨터의 움직임 **"O"**를 배치한 후에도 동일한 코드를 사용하여 getWinner() 메서드를 호출하고, 승자가 있는지 확인합니다. 승자나 무승부가 있으면 게임 결과를 출력한 후 while 루프에서 빠져나옵니다.

## Scanner 객체 닫기

while 루프 외부에 sc.close() 코드를 추가하여 더 이상 입력을 받지 않도록 Scanner 객체를 닫습니다.

while 루프에서 break한 후 더 이상 입력을 받지 않을 경우 Scanner 객체를 닫는 것은 좋은 습관입니다!

## 완료! :)

이제 완전히 작동하는 틱택토 게임을 완성하셨습니다! 워크숍을 완료한 자신에게 자부심을 느끼세요! 잘하셨습니다! 👍

##### 코드의 구조에 대한 개요는 다음과 같습니다:
1.	게임판 설정: 처음 게임판을 설정하고, 플레이어와 번갈아 가며 움직임을 입력합니다.
2.	입력 처리: 유효한 입력만 받아들이고, 잘못된 입력에 대해서는 다시 요청합니다.
3.	게임판 업데이트: 플레이어와 컴퓨터의 움직임에 따라 게임판을 업데이트합니다.
4.	승자 확인: 각 턴이 끝날 때마다 승자를 확인하고, 게임 결과를 출력합니다.

<img src="../images/code.png" height="500" alt="틱택토: 당신의 자바 프로젝트. void main(String args[])는 플레이어의 입력을 읽고, 입력을 처리하며, 게임의 각 라운드를 프롬프트하거나 게임의 승자를 출력하는 메서드입니다. void printBoard(String[] curBoard)는 게임 보드를 출력하는 메서드입니다. int getComputerMove(String[] curBoard)는 컴퓨터를 위한 사용 가능한 이동을 무작위로 반환합니다. String getWinner(String[] curBoard)는 게임의 승자, 무승부 또는 게임이 계속되어야 하는 경우에는 빈 문자열을 반환합니다"/>
