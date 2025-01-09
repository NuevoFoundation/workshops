---
title: "2. 입력을 읽고 처리하기"
description: "스캐너 클래스로 입력 읽기 및 오류 사례 확인하세요."
date: 2021-10-14T00:00:00Z
prereq: "게임판 설정하기!"
difficulty: "중급"
weight: 3
draft: false
---

## 패키지 불러오기

자바에서 사용자 입력을 효율적으로 받는 방법은 Scanner 클래스를 사용하는 것입니다. 이 클래스를 사용하려면 파일 상단에 다음과 같은 코드를 작성하여 java.util 패키지를 불러와야 합니다.

```java
import java.util.Scanner;
```

## Scanner 클래스 사용하기

'main()'에서는 먼저 생성자를 호출하여 'sc'라는 '스캐너' 객체를 만들어야 합니다(아래에 표시됨).

우리는 표준 입력 스트림에서 우리의 입력을 읽기 위해 '스캐너'를 사용하고자 합니다. 이를 위해서는 'System.in '(표준 입력 스트림 객체)

```java
// Create a Scanner object
Scanner sc = new Scanner(System.in);
```

## 사용자 입력 받기

이전 활동에서는 사용자에게 1에서 9까지의 숫자를 입력하도록 요청했습니다. 따라서 입력 스트림에서 'int'를 기대할 수 있습니다.

Scanner 객체에 저장된 int 값을 얻으려면, sc라는 Scanner 객체에서 nextInt() 메서드를 호출하면 됩니다.

```java
int input = sc.nextInt();
```

## 프로그램 테스트 (선택 사항)

프로그램을 테스트하기 위해 입력력 받은(띄어쓰기 수정) 값을 출력하는 print 문을 추가해봅시다.

 프로그램을 실행하고 몇 가지 숫자를 입력한 후 Enter를 누르면, 입력한 숫자가 정확하게 출력되는 것을 확인할 수 있습니다. 예를 들어:
```
<<<~  틱택토  ~>>>
* 숫자 1 - 9를 선택하여 말을 놓으세요
* 플레이어: 'X' 컴퓨터: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
말을 놓을 위치를 선택하세요 (1-9): 2
입력한 숫자: 2             <----------- 입력된 숫자를 올바르게 출력한 문구 인쇄
```

{{% notice warning %}}
#### 사용자가 숫자가 아닌 것을 입력하면 어떻게 되나요?

프로그램을 작성할 때 프롬프트에 철자가 적혀 있어도 사용자가 올바른 값을 입력할 것이라고 기대할 수는 없습니다.

우리 프로그램은 'int' 입력만 하기 때문에 'hi', '$', '20.1'과 같이 정수가 아닌 것을 입력하면 프로그램이 크래시가 나게 됩니다. 다음과 같은 오류 메시지가 표시됩니다:
```
Exception in thread "main" java.util.InputMismatchException      <------ tells you what error it is
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                  <-------- 오류를 일으키는 코드 라인을 알려줍니다(Main.java의 15번째 줄)
```

또한, 1에서 9까지의 범위에 속하지 않는 숫자 입력은 프로그램에 충돌하지 않지만, 이 또한 우리가 원하지 않는 입력이라는 점에 유의하세요.
{{% /notice %}}

## 스캐너로 잘못된 입력 처리하기

스캐너 클래스는 유효한 입력 또는 유효하지 않은 입력을 확인하는 메서드를 제공합니다. 예를 들어, 메서드 'hasNextInt'는 사용자의 입력 값이 정수인지 확인하고 '참' 또는 '거짓'을 반환합니다. 이 메서드는 사용자의 입력이 유효한지 확인하는 데 사용할 수 있습니다.

제어 구조를 사용하여 사용자 입력을 검증합니다. 입력이 유효하지 않은 경우 유효한 입력을 다시 요청합니다.

```java
if(sc.hasNextInt()) { //was an integer entered
	move = sc.nextInt(); // get integer input
   if (!(move > 0 && move <= 9)) { //is the integer between 1 and 9
		System.out.print("Invalid Position; re-enter your move (1-9): ");
   }
} else { // if an integer wasn't entered
   sc.next(); // clear the Scanner
	System.out.print("Invalid Input; re-enter your move (1-9): ");
}
```

## 프로그램 테스트(선택 사항)

`Run`을 클릭하여 프로그램을 테스트하면 숫자가 아닌 입력을 입력했거나 숫자가 1에서 9 사이가 아닌 경우.'잘못된 위치; 이동(1-9)을 다시 입력하세요'라는 메시지가 표시됩니다: 

## 다중 입력 받기

이제 하나의 입력값을 받아 유효성을 평가하는 프로그램을 작성했으니, 게임이 끝날 때까지 플레이어가 계속 입력할 수 있도록 만들어 봅시다.

플레이어가 다음 움직임을 입력하도록 반복적으로 요청하려면, 기존의  `hasNextInt` 조건문 전체를 `while loop` 안에 넣으면 됩니다. 이 `while loop`는 조건으로 `true`를 받기 때문에, 명시적으로 중단 명령을 내릴 때까지 계속 실행됩니다.

또한, 루프의 각 반복 끝부분에서 `printBoard(board)`를 호출하여 현재 보드를 출력하고, 플레이어에게 입력을 요청합니다. 아래 예제에서 그 과정을 확인할 수 있습니다:

```java
while(true){
    // insert the hasNextInt() if statement here

   // move these into the hasNextInt() if statement 
    printBoard(board);
    System.out.print("Enter your move (1-9): "); 
}
```

## 유효하지 않은 입력 처리하기

플레이어가 유효하지 않은 입력값을 입력했을 때, 프로그램이 printBoard(board)를 호출하거나 Enter your move (1-9):라는 메시지를 출력하지 않도록 해야 합니다.

즉, 잘못된 입력이 들어오면 while 루프의 다음 반복으로 바로 넘어가도록 프로그램을 설계해야 합니다. 이를 위해 코드에 continue;를 추가하여 루프의 현재 실행을 종료하고, 루프의 처음으로 되돌아가 실행을 이어가게 만듭니다.

이 연습이 끝나면, 잘못된 입력이 들어왔을 경우 다시 입력을 요청하고, 올바른 입력에 대해서는 빈 보드와 함께 Enter your move (1-9): 메시지가 출력되는 프로그램이 완성될 것입니다!

<<<~ 틱택토~>>
* 1번 - 9번을 선택하여 이동합니다
* 플레이어: 'X' 컴퓨터: 'O'

1 | 2 | 3
---+---+---
4 | 5 | 6
---+---+---
7 | 8 | 9

당신의 이동을 입력하세요 (1-9): d
잘못된 입력; 이동을 다시 입력합니다 (1-9): 3
   |   |
---+---+---
   |   |
---+---+---
   |   |
당신의 이동을 입력하세요 (1-9):