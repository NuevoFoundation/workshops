---
title: "새가 점프하도록 만들고 중력 적용하기"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

### 새에게 어떤 동작을 추가할까요?

새가 점프하도록 만들어 봅시다:

파일 [File: create-game.js] 에 다음 명령을 추가하세요:
     spaceKey.onDown.add(jump, this);

### 함께 해보기

아래 Replit 창에서 코드는 `spaceKey.onDown.add(jump, this);`로 시작합니다.

![alt text](../img/jump.png "image to add jump down")

**run** 을 누르고 스페이스 바를 누르면, 콘솔에 새가 점프하는 모습이 나타납니다:

![alt text](../img/jump_output.png "Image of jumping bird")

## 중력 추가하기
### 함께 해보기

아래 Replit 창에서 코드는 `bird.body.gravity.y = 900;`로 시작합니다.

![alt text](../img/gravity.png "image to add gravity to the bird")

**run** 을 누르고 스페이스 바를 누르면, 콘솔에 중력이 적용된 상태로 새가 점프하는 모습이 나타납니다.:

![alt text](../img/jump_output.png "bird jumping with gravity")

