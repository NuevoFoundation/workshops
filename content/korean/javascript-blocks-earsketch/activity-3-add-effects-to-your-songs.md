---
title: "활동 3 - 곡에 효과 추가하기"

date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## EarSketch에서의 효과


**효과** 프로듀서가 오디오 클립의 소리를 독특하게 변형할 수 있게 합니다. 새로운 오디오 클립을 추가할 때 `fitMedia()` 함수를 사용한 것처럼, 우리는 특정 오디오 클립에 효과를 적용하기 위해 `setEffect()` 함수를 사용해야 합니다. 한 트랙에 여러 효과를 적용할 수 있다는 점이 중요합니다. 이는 여러 효과를 결합하여 독특한 사운드를 만들 수 있음을 의미합니다. EarSketch에는 다양한 효과가 내장되어 있습니다. 모든 효과를 참고하려면 이 [링크](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) 를 방문하고 탐색 바에서 *커리큘럼* 창을 선택하세요.


효과를 추가하기 전에 `setEffect` 함수의 각 요소를 살펴봅시다:

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: ● 효과를 적용할 트랙 번호입니다. 참고: 마스터 트랙에 효과를 적용하려면, track 값으로 0을 사용합니다. 마스터 트랙은 모든 오디오가 함께 재생되는 곳입니다. 이곳에 효과를 적용하면, 처리 중인 모든 소리에 동일한 효과가 적용됩니다.
- `effectType`: 사용하려는 특정 효과입니다,
- `effectParameter`: 선택한 효과의 세부 설정입니다.
- `effectValue`: effectParameter에 적용될 값입니다.
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## 곡에 효과 추가하기

이제 효과를 사용하는 방법을 알았으니, 곡에 효과를 추가해 봅시다.

1. `setEffect` 함수 블록을 찾으세요. 두 개의 `setEffect` 블록이 보일 텐데, 그중 첫 번째 블록을 선택하세요. 이 블록을 스크립트의 기존 코드 블록 아래로 드래그하세요.
2. 매개변수를 자신의 값으로 교체해야 합니다. 드롭다운을 사용하여 `track`을 2로 변경하세요(또는 원하는 다른 숫자를 선택하세요).
3. `effectType` 매개변수에 사용할 수 있는 다양한 효과를 드롭다운에서 선택해보세요. DELAY를 선택해봅시다.
4. 이제 `effectType`을 선택했으니, `effectParameter`를 매개변수로 선택하세요. DELAY_FEEDBACK을 선택하세요.
5. 마지막으로, 유효한 값을 입력하세요. DELAY_FEEDBACK을 선택했으므로, -120.0에서 -1.0 사이의 숫자를 지정해야 합니다. 예시: DELAY_FEEDBACK 값으로 -6.0을 사용하세요.

이제 코드가 아래와 같이 보일 것입니다:


<img src="../img/screenshot-set-effect-1.png" height="400"/>
