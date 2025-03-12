---
title: "프로그램 작성하기"
description: ""
draft: false
weight: 3
---
가장 선호하는 인터넷 브라우저(예: Edge, Firefox, Google Chrome, Internet Explorer)를 열고 https://aka.ms/oranges 로 이동합니다. 화면이 아래와 같이 보여야 합니다:

![Cannot load image](../img/adafruit.png?classes=border,shadow)

## 변수 정의하기

오늘 우리는 오렌지를 사용하여 아다프루트가 언제 소리를 낼지 설정할 것입니다.
첫 번째 단계는 각 오렌지에 이름을 부여하고, 오렌지가 어떤 값을 전달하는지 확인할 위치를 컴퓨터에 알려주는 것입니다. 이를 위해 변수를 정의합니다. VARIABLES 섹션(담홍색, 상단에서 일곱 번째)을 클릭합니다. Make a Variable 버튼을 클릭하여 변수를 생성합니다. 두 개의 변수를 정의합니다. (예: analog1과 analog2) 원한다면 다른 이름을 사용할 수도 있습니다.

![Cannot load image](../img/1.png?classes=border,shadow)
![Cannot load image](../img/2.png?classes=border,shadow)
![Cannot load image](../img/3.png?classes=border,shadow)

## 입력값 해석하기

N이제 컴퓨터가 오렌지의 이름을 알게 되었으니, 아다프루트가 오렌지를 이해하도록 설정해야 합니다. 입력값에는 두 가지 종류가 있습니다: 디지털 입력과 아날로그 입력. 디지털 입력은 전등 스위치나 전원 버튼과 같이 켜짐(1) 또는 꺼짐(0) 상태로만 작동합니다. 아날로그 입력은 조명 조절기나 볼륨 버튼처럼 여러 값의 범위를 가질 수 있습니다. 오렌지는 아날로그 입력으로 작동하며, 만지거나 누르는 강도에 따라 아다프루트에 전달하는 값이 달라집니다.

VARIABLES 섹션으로 다시 이동하세요. 우리가 정의한 두 변수가 이제 목록에 표시됩니다. "set ___ to __" 블록을 작업 공간의 초록색 "forever" 블록 안으로 드래그합니다. 첫 번째 빈칸을 "analog1"로 변경합니다.

![Cannot load image](../img/4.png?classes=border,shadow)

ADVANCED를 클릭한 다음 PINS를 선택하세요. "analog read pin __" 블록(상단에서 세 번째)을 찾아 드래그하여 "set analog1 to 0" 블록의 숫자 0 부분에 넣습니다. 블록을 드래그해 숫자 0 위에 놓고, 숫자가 노란색으로 강조 표시될 때 블록을 내려놓으세요. 블록이 확장되어 새 블록을 포함할 수 있어야 합니다. 그렇지 않다면 다시 시도하세요.

![Cannot load image](../img/5.png?classes=border,shadow)
![Cannot load image](../img/6.png?classes=border,shadow)

작업이 완료되면 작업 공간이 아래 그림과 같아야 합니다. 위 과정을 반복하여 이번에는 analog2와 A2를 선택하세요. 아래 그림을 확인하여 올바르게 설정했는지 확인하세요.
![Cannot load image](../img/7.png?classes=border,shadow)

## 루프 생성하기

컴퓨터가 오렌지의 이름과 입력값을 이해할 수 있게 되었습니다. 이제 오렌지를 만졌을 때 확인할 루프를 생성해 봅시다. LOGIC 섹션으로 이동하여 "If ____ then" 블록을 가져옵니다. 그런 다음 이 블록을 변수 블록 아래에 놓습니다.

![Cannot load image](../img/8.png?classes=border,shadow)

예시로 볼륨 다이얼을 생각해봅시다.
사람마다 음악을 가장 즐길 수 있는 ‘스위트 스팟’ 볼륨이 있습니다. 이 개념은 오렌지에도 적용됩니다. 오렌지가 가만히 있을 때는 하나의 숫자를 컴퓨터에 전달합니다. 오렌지를 만졌을 때는 더 낮은 숫자를 전달합니다. 우리는 그 중간 지점을 찾아야 하며, 그렇게 하면 오렌지를 만질 때만 소리가 나도록 설정할 수 있습니다.

LOGIC 섹션으로 이동하여 "__ < __" 블록을 가져옵니다. 이 블록을 "if ____ then" 블록의 "true" 부분에 놓습니다.  놓기 전에 노란색 강조 표시를 확인하세요. 아래 그림을 확인하여 블록의 위치를 올바르게 설정했는지 확인하세요.

![Cannot load image](../img/9.png?classes=border,shadow)

이제 비교하려는 값을 입력합니다. VARIABLES 섹션으로 이동하여 analog1을 가져와 첫 번째 슬롯에 넣습니다. 그런 다음 두 번째 슬롯을 클릭하고 숫자 40을 입력하세요. 이 숫자 40이 일반적으로 가장 적합한 스위트 스팟입니다  가장 적합합니다. 만약 오렌지를 만지지 않았는데도 소리가 난다면, 숫자를 더 크게 만들어 보세요. 반대로, 오렌지를 만졌는데도 소리가 나지 않는다면, 숫자를 더 작게 만들어 보세요. 현재는 이 숫자를 40으로 유지해 둡시다.

![Cannot load image](../img/10.png?classes=border,shadow)

이제 음악을 선택해 봅시다! MUSIC 섹션으로 이동하여 "play _____ until done" 블록을 가져옵니다. 그런 다음 If-Then 블록 안에 추가합니다. 아래쪽 화살표를 클릭하여 원하는 소리를 선택할 수 있습니다.

![Cannot load image](../img/11.png?classes=border,shadow)

이제 같은 과정을 analog2로 반복합니다. 이렇게 하면 작업 공간은 아래 그림과 유사하게 보일 것입니다(음악 선택은 각자 다를 수 있습니다).

![Cannot load image](../img/12.png?classes=border,shadow)

## 조명과 함께 즐거움 추가하기 (시간 여유가 있을 경우)

아다프루트 보드에는 다양한 LED 조명이 있습니다!
이 조명은 가지고 놀기 정말 재미있습니다. 이제 소리를 들을 때 색상도 함께 볼 수 있도록 추가해 보겠습니다. LIGHT 섹션을 클릭하여 “Set all Pixels to ___” 블록을 가져옵니다. 이 블록을 두 개의 If-Then 블록 각각에 추가합니다. play _____ until done 블록 바로 앞에 넣으세요. 색상 부분을 클릭하여 원하는 색상을 선택할 수 있습니다. 오렌지마다 다른 색상을 선택해 보면 더욱 재미있게 즐길 수 있습니다.

![Cannot load image](../img/13.png?classes=border,shadow)