---
title: "신호 방송하기"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## 라디오 켜기

마이크로빗의 블루투스 라디오를 사용하여 다른 마이크로빗과 얼마나 떨어져 있는지 확인합니다. 먼저 라디오를 켜고 채널에 맞추는 작업을 해야 합니다. “Radio” 섹션을 클릭하세요. 화면에서 다섯 번째에 있는 분홍색 섹션입니다. “radio set group 1”을 선택하고 이를 작업 영역의 파란색 “on start” 블록으로 끌어다 놓으세요. 모든 참가자가 동일한 그룹 번호를 사용하도록 하세요. 다른 그룹 번호를 사용하면 마이크로빗 간 통신이 이루어지지 않습니다. 작업 영역은 아래와 같이 보여야 합니다:

![MakeCode menu showing the Radio section selected](../img/radioMenu.png)
![MakeCode workspace showing the "radio set group" block in the "on start" block](../img/setRadioGroup.png)

## 신호 방송하기

이제 마이크로빗이 신호를 청취할 준비가 되었으니, 해당 신호를 보낼 준비를 해야 합니다. 다시 “Radio” 섹션을 클릭하세요. 이번에는 “radio send number 0” 블록을 선택하고 이를 작업 영역의 파란색 “forever” 블록 안으로 끌어다 놓으세요. 이렇게 하면 마이크로빗이 동일한 그룹 내에서 계속해서 해당 숫자를 보내게 됩니다.

![MakeCode workspace showing the "radio send number" block in the "forever" block](../img/radioSendNumber.png)