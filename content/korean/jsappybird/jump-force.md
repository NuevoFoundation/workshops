---
title: "새가 힘차게 점프하고 회전하면서 떨어지도록 만들기"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

이번에는 새가 더 힘차게 점프할 수 있게 해 봅시다.

파일 [File: create-game.js] 에 다음 명령을 추가하세요.
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## 함께 해보기

아래 Replit 창에서 코드는 `bird.body.velocity.y = -350;`로 시작합니다.

![alt text](../img/jump_force.png "image to add gravity to the bird")

**run** 을 누르면, 콘솔에 새가 힘차게 점프하는 모습이 나타납니다:

![alt text](../img/jump_output.png "bird jumping with gravity")

{{% /notice %}}

## 보너스 활동

새가 위로 점프하면서 앞으로 나아가도록 만들어 봅시다:

파일 [File: create-game.js] 에 다음 명령을 추가하세요.
    bird.body.velocity.x = 100;

# 새가 회전하면서 떨어지도록 만들기

새에게 회전 효과를 추가해 봅시다:

파일 [File: update-game.js] 에 다음 명령을 추가하세요.
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## 설명:

“if”는 조건 블록으로, 여기서는 새의 각도를 확인하여, 각도가 50보다 작을 때 각도를 1씩 증가시키는 코드를 실행합니다.
   -bird.angle+=1;

{{% notice tip %}}

## 함께 해보기

아래 Replit 창에서 코드는 `bird.angle +=1;`로 시작합니다.

![alt text](../img/rotate.png "image to add rotation to the bird")

**run** 을 누르면, 콘솔에 새가 회전하면서 떨어지는 모습이 나타납니다:

![alt text](../img/rotate_output.png "bird rotating")

{{% /notice %}}

