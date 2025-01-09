---
title: "활동 4 - 페이드 인 효과 사용하기"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

이제 곡에 하나의 효과를 추가했으니, 이번에는 곡의 도입부에 페이드 인 효과를 적용해 보겠습니다.

활동 3에서는 `setEffect` 함수를 사용하여 특정 트랙에 곡 전체에 걸쳐 효과를 적용했습니다. 그러나 곡의 특정 부분에만 효과를 적용하고 싶다면 어떻게 해야 할까요? 이때는 매개변수를 더 많이 사용하는 `setEffect` 함수를 사용해야 합니다.

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: 매개변수에 적용되는 시작 값
- `start`: 시작 값을 설정할 마디
- `endValue`: 매개변수에 적용되는 끝 값
- `end`: 끝 값을 설정할 마디

이 `setEffect`함수 버전을 사용하면 곡의 특정 부분에서 자동화를 실행할 수 있습니다. 자동화란 효과의 값을 시간이 지남에 따라 변경하는 방법입니다. 자동화의 한 가지 예로 곡을 페이드 인 또는 페이드 아웃하는 방법이 있습니다. 이를 위해서는 **VOLUME** `effectType`에서 **GAIN**`매개변수(parameter)`를 사용하여 음량을 시간에 따라 조절할 수 있습니다. 예를 들어, `startValue` 를 -60db로, `endValue` 를 0db로 정의하면, 시간이 지나면서 곡이 점점 커지는 페이드 인 효과가 나타납니다. 시작 지점과 효과의 길이를 조정하려면 `start` 와 `end`매개변수를 설정하세요.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## 곡에 또 다른 setEffect 함수 추가하기

1. 또 다른 `setEffect` 블록을 코드에 추가하세요. 이때 블록에 7개의 매개변수가 있는지 확인하세요.
2. 드롭다운을 사용하여 `effectType`을 VOLUME으로 선택하세요.
3. 드롭다운에서 `매개변수(parameter)`로 GAIN을 선택하세요.
4.페이드 인 효과를 적용하려면, 음량을 매우 낮게 시작해서 점차 증가시켜야 합니다.`startValue` 를 -60과 같은 낮은 값으로 설정하고, `endValue` 를 0과 같은 높은 값으로 설정하세요.

{{% notice 팁 %}}
*힌트:* 음량은 데시벨(decibel)로 측정됩니다. 숫자가 클수록 소리가 커집니다. 또한, 0 데시벨을 초과하지 않도록 주의하세요.
{{% /notice %}}

5. `start` 및 `end` 매개변수에 값을 설정하여 페이드 인 효과가 시작되고 끝나는 시점을 지정하세요.

이제 코드가 아래와 같이 보일 것입니다:


<img src="../img/screenshot-set-effect-2.png" height="400"/>
