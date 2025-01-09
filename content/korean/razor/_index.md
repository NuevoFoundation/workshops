---
title: "C#: Razor를 사용한 웹 사이트 만들기"
description: "C#/Razor를 사용하여 간단한 웹사이트를 만드는 방법에 대한 소개 가이드"
date: 2023-09-11T11:45:38-07:00
prereq: "웹 기초, C#"
difficulty: "중급"
draft: false
icon: "fas fa-code"
---

## 환영합니다

오늘의 활동 목표는 웹과 C# 기술을 배우고, 새롭게 익힌 지식을 활용하여 웹 사이트를 만드는 것입니다!

## 시작하기

이번의 활동 목표는 웹과 C# 기술을 배우고, 새롭게 익힌 지식을 활용하여 웹 사이트를 만드는 것입니다! 먼저 환경 설정을 시작해 봅시다.

C# 애플리케이션 개발을 시작하기 전에, 가장 먼저 해야 할 일은 프로그래밍 환경을 선택하는 것입니다. C# 개발자들 사이에서 가장 인기 있는 IDE (Integrated Development Environment, 통합 개발 환경) 중 하나인 Visual Studio Code를 사용합니다. 

### Visual Studio Code 다운로드
1. 브라우저를 열고 다음 주소로 이동합니다: <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com</a>.

2. 브라우저 창에서 Download 버튼을 클릭합니다.

{{% panel theme="info" header="Note"%}}
Visual Studio Code의 다운로드 페이지는 자동으로 사용자의 운영 체제를 감지하여 해당 운영 체제에 맞는 버전을 표시합니다. 예: Linux, macOS, Windows 등.
{{% /panel %}}

3. 설치 파일 다운로드가 완료될 때까지 기다립니다.

Windows PC의 경우 설치 파일 이름은 다음과 비슷할 수 있습니다: VSCodeUserSetup-x64-1.81.0.exe

{{% panel theme="info" header="Note"%}}
설치 파일 이름은 현재 Visual Studio Code 버전과 사용자의 운영 체제에 따라 달라질 수 있습니다.
{{% /panel %}}

4. 다운로드가 완료되면 브라우저 창을 닫습니다.

### Visual Studio Code 설치
1. PC에서 파일 탐색기(File Explorer)를 열고, 컴퓨터의 다운로드 폴더로 이동합니다.

2. 파일 탐색기에서 Visual Studio Code 설치 파일을 선택한 뒤 실행합니다.

    Windows PC의 경우, 설치 파일을 더블 클릭하여 설치를 시작할 수 있습니다. ( VSCodeUserSetup-x64-1.81.0.exe )

{{% panel theme="info" header="Note"%}}
Visual Studio Code는 사용자 설치(User Installer) 또는 시스템 설치(System Installer) 중 선택하여 설치할 수 있습니다. 사용자 설치(User Installer): 현재 사용자만을 위해 Visual Studio Code를 설치합니다. 시스템 설치(System Installer): 모든 사용자 계정에서 Visual Studio Code를 사용할 수 있도록 설치합니다. 일반적으로 사용자 설치(User Installer) 옵션을 권장합니다.
{{% /panel %}}

잠시후 **Microsoft Visual Studio Code 설정** 대화 창이 나타납니다.

<img src="media/vscodeInstaller.png" alt="Screenshot showing the Visual Studio Code Installer" />

3. 설치 창에서 라이선스 동의(I accept the license agreement)를 선택한 후, 화면에 표시되는 지침을 따라 설치를 완료합니다.

    설치 과정 중 나오는 옵션은 기본값(Default Options)을 선택합니다.

    자세한 설치 지침은 Visual Studio Code 공식 문서를 참고해주세요: <a href="https://code.visualstudio.com/docs/setup/windows" target="_blank">https://code.visualstudio.com/docs/setup/windows</a>.

### .NET SDK 설치

{{% panel theme="info" header="How to check if you have .NET installed"%}}
**.NET이 설치되어 있는지 확인하기**

터미널 창을 열고, 아래 명령어를 입력한 뒤 Enter 키를 누릅니다:
 <code>dotnet --version</code> 
 
 결과로 버전 번호가 표시되면 .NET이 설치되어 있는 것입니다.
{{% /panel %}}

1. 인터넷 브라우저를 열고 아래 URL로 이동합니다:

    <a href="https://dotnet.microsoft.com/download" target="_blank">https://dotnet.microsoft.com/download</a>

2. Download .NET 페이지에서 권장 버전의 .NET SDK를 선택합니다.

3. 설치 파일 다운로드가 완료될 때까지 기다립니다.

4. 다운로드한 설치 파일을 실행합니다.

    Windows PC의 경우, 파일 탐색기를 열어 다운로드 폴더에서 설치 파일을 찾고, 더블 클릭하여 설치를 시작합니다.

5. .NET SDK 설치 관리자(.NET SDK Installer) 창이 열리면 Install(설치)을 선택합니다.

6. 설치가 완료될 때까지 잠깐 기다립니다.

    설치가 완료될 때까지 몇 분이 걸릴 수 있습니다. 설치가 성공적으로 완료되면 확인 메시지가 표시됩니다.

7. 설치가 완료되면 Close(닫기)를 선택하여 설치 관리자 창을 닫습니다.


## 목차

<details close>
<summary>목차</summary>
{{% children /%}}
</details>