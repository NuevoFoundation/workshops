---
title: "활동 1 - 템포 설정 및 사운드 추가"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

기존 코드의 내용을 자세히 살펴보고 그 의미를 이해해 봅시다. 

<img src="../img/screenshot-setup-complete.png" height="400"/>

`setTempo()` 함수는 프로젝트 전체의 템포(음악이 연주되는 속도)를 설정할 수 있도록 합니다. 프로젝트의 템포를 변경하면 다양한 스타일의 음악을 만들 수 있습니다. `setTempo` 함수의 숫자를 변경하여 템포를 조정해 보세요! 숫자는 45에서 220 사이여야 합니다. 아래는 사용할 수 있는 몇 가지 템포 예시입니다.

<img src="../img/img-tempo1.png" height="200"/>

이제 템포가 설정되었으니 사운드를 추가할 시간입니다. 이를 위해 우리는 `fitMedia()` 함수를 사용해야 합니다. 새로운 코드를 `setTempo()` 함수 블록 아래에 추가할 것입니다.


## 활동 1

1. 코드 에디터의 왼쪽에서 보라색 `fitMedia()` 블록을 찾으세요.
2. `fitMedia()` 블록을 드래그하여 `setTempo` 블록 아래에 삽입합니다.
3. 블록을 추가하면, EarSketch가 자리 표시자 텍스트(Placeholder text)를 생성하는 것을 볼 수 있습니다. 나중에 이 자리 표시자 텍스트(Placeholder text)를 교체해야 합니다. 이 자리 표시자 텍스트(Placeholder text)는 `매개변수(parameters)`라고도 불립니다.

<img src="../img/screenshot-parameters.png" height="100"/>

각 자리 표시자 텍스트(Placeholder text)를 유효한 값으로 교체합니다.

- `sound` - "Sounds" 창으로 이동하여 원하는 사운드를 찾으세요. `fitMedia()`  함수 블록의 "sound" 부분을 클릭한 후, 추가하고자 하는 사운드 옆의 붙여넣기(Paste) 버튼을 누릅니다. 사운드의 이름이 `fitMedia()` 블록 안에 나타나야 합니다.
- `trackNumber` - 드롭다운(Dropdown)을 사용하여 트랙 번호를 선택하세요. 1 이상의 정수를 사용할 수 있습니다. 예시로, `1`을 선택하세요.
- `start/end` - 이 매개변수는 음표를 측정하는 단위로 양의 정수를 입력해야 합니다. `시작 값(start)`은 `1`, `끝 값end`은 9로 설정해 보세요.`.

이제 코드가 아래와 같이 보일 것입니다:


<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice 주의할 점 %}}

M함수 블록과 텍스트가 올바르게 배치되었는지 확인하세요.

{{% /notice %}}

5. 매개변수를 입력한 후, 실행(Run) 버튼을 누르고, 재생(Play)을 클릭하여 오디오 클립을 들어보세요!

     - **만약 빨간색 텍스트가 보인다면, 오류가 발생한 것입니다! 도움이 필요하면 요청하세요.** `fitMedia()` 함수는 EarSketch에서 음악을 만드는 핵심 요소입니다. 이 함수를 많이 사용할 예정이니, 사용법에 대한 질문이 있다면 언제든지 물어보세요.

{{% notice 정보 %}}

**디지털 오디오 워크스테이션** (DAW)은 사운드가 나타나는 영역입니다. EarSketch 창의 상단 중앙에 위치합니다. 아래는 노래의 다른 부분이 DAW에서 어떻게 표시되는지 예시입니다.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}