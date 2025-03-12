---
title: "새 이미지 로드 및 화면 텍스트 변경"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

먼저 “Flappy”를 로드하고 화면에 배치해 봅시다.

파일 [File: load-sprites.js] 에 다음 명령을 추가하세요:
      ```
      game.load.image('bird','assets/bird.png');
       ```
       
### 함께 해보기

아래 “Replit” 창에서 코드는 `game.load.image('bird', 'assets/bird.png');`로 시작합니다.

![alt text](../img/loadbird.png "image to add the bird in the file")

**run**을 누르고 스페이스 바를 누르면, 여러분의 콘솔에 새가 나타나는 것을 볼 수 있습니다:

![alt text](../img/loadbird_output.png "bird image in the output")

## 화면 텍스트 변경하기

시작 화면 텍스트를 변경해 봅시다:

파일 [File: start-screen.js] 에 다음 명령을 추가하세요.
     var text = game.add.text(0, 0, "Press Space to Start", textOptions);
     
### 함께 해보기

아래 Replit 창에서 `var text = game.add.text(0, 0, "Press Space to Start", textOptions);`로 코드를 시작했습니다.

![alt text](../img/startscreen.png "image to add the bird in the file")

**run**을 누르면, 여러분의 콘솔에 "Press Space to Start"라는 문구가 나타나는 것을 확인할 수 있습니다:

![alt text](../img/startscreen_output.png "bird image in the output")
