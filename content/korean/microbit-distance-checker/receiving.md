---
title: "메시지 수신하기"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

이제 메시지를 보내고 청취할 준비가 되었으니, 받은 정보를 사용해 마이크로빗 간 거리를 계산할 준비를 해야 합니다. 이를 위해, 수신 신호의 강도를 알아야 합니다. “Radio” 섹션으로 돌아가 이번에는 “on radio received (receivedNumber)” 블록을 작업 영역의 빈 공간으로 끌어다 놓으세요. 

이 블록은 다른 마이크로빗에서 전송된 숫자를 받을 때 마이크로빗이 수행할 동작을 지정합니다.

!["On radio received" block added to the workspace](../img/onRadioReceived.png)

다음으로, 빨간색 “Variables” 섹션을 클릭하고 “Make a Variable…”을 선택합니다. 텍스트 상자에 “strength”라는 이름을 입력하고 “Ok ✔”를 클릭하세요.

![MakeCode menu showing the Variables section selected](../img/makeVariable.png)
![The variable name pop-up window](../img/variableModal.png)

다시 Variables 메뉴로 돌아가 “set strength to 0” 블록을 분홍색 “on radio received (receivedNumber)” 블록 안에 넣으세요. 그런 다음 “Radio” 메뉴로 돌아가 “received packet (signal strength)”을 선택하고, “set strength to 0”에 있는 숫자 `0️` 위에다가 드롭하세요. 완료하면 작업 영역은 다음과 같이 보여야 합니다:

![Workspace with on start, forever, and received packet blocks filled in](../img/savedRSSI.png)

변수(variable)는 정보를 저장할 수 있는 공간으로, 저장된 내용이 무엇인지 명확히 이해할 수 있도록 친숙한 이름을 붙여야 합니다. 예를 들어,`strength`라는 변수를 생성하면, 값을 저장할 수 있는 공간을 따로 확보하는 것입니다. 여기서 수신된 메시지로부터 측정된 신호 강도를 저장하기 위해 이 변수를 사용합니다. 이후에는 `strength`라는 이름을 사용하여 저장된 현재 값을 확인하거나 다른 값과 비교할 수 있습니다. 나중에 신호가 더 강해지거나 약해지는 메시지를 새로 받으면, 변수의 값이 자동으로 그 새로운 값으로 업데이트됩니다. 따라서 “on radio received” 블록은 새로운 메시지를 받을 때마다 신호 강도의 최신 값을 자동으로 업데이트하도록 설정됩니다. 이를 위해 직접 추가 작업을 할 필요는 없습니다.