---
title: "활동 1 - Visual Studio Code 탐색하기"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 2
---

## 활동 1 - Visual Studio Code 탐색하기

### Visual Studio Code를 열고 Welcome 페이지를 살펴보세요.
1. Windows 시작 메뉴를 사용하여 Visual Studio Code 열기

    Windows 시작 메뉴를 열면 최근에 추가된 애플리케이션 목록에서 Visual Studio Code를 찾을 수 있습니다. 또는 시작 메뉴를 아래로 스크롤하여 Visual Studio Code를 찾아보세요. 화면 하단의 실행 트레이에 있는 Windows 검색 상자에 "Visual Studio Code"를 입력하여 검색할 수도 있습니다.

2. Visual Studio Code의 Welcome 페이지 확인하기

    Visual Studio Code를 처음 열면 Welcome 페이지가 나타나며, 몇 가지 링크와 정보가 포함되어 있습니다. 처음 실행할 때 Get Started with VS Code와 같은 유용한 안내 내용이 표시됩니다. 이 안내 내용은 후에 따로 참고해볼 수 있습니다

3. Welcome 페이지 닫기

    Welcome 페이지를 닫으려면, 인터페이스에 표시된 닫기 버튼(화면에 X로 표시됨)을 선택해주세요. 편집기(Editor)에서 열려 있는 각 페이지에는 페이지 제목 오른쪽에 닫기 버튼(X)이 있습니다. 페이지 탭은 Visual Studio Code 창의 왼쪽 상단, 메인 메뉴(Main Menu) 아래에 표시됩니다. 마우스 포인터를 닫기 버튼(X) 위에 올리면 "Close"라는 단어가 나타납니다.

### 액티비티 바와 사이드 바 살펴보기

1. Visual Studio Code 창의 왼쪽 끝에 있는 세로형 아이콘 목록이 액티비티 바(Activity Bar)입니다. 액티비티 바 오른쪽에 위치한 사이드 바(Side Bar)는 기본적으로 축소된 상태입니다. 사이드 바의 내용은 액티비티 바에서 선택한 항목에 따라 달라집니다.

2. 마우스 포인터를 액티비티 바 위에 놓고, 각 아이콘 위에 마우스를 올려보세요. 그러면 해당 아이콘의 라벨이 표시됩니다. 액티비티 바의 버튼들은 다음 이미지에서 보여주는 것과 유사하게 나타날 것입니다.

<img src="../media/visual-studio-code-activity-bar-icons.png" alt="Screenshot showing Visual Studio Code Activity bar with labeled icons." />

액티비티 바(Activity bar)의 아이콘을 위에서부터 아래로 살펴보면 다음과 같습니다:
탐색기(Explorer), 검색(Search), 소스 제어(Source Control), 실행 및 디버그(Run and Debug), 확장 프로그램(Extensions), 계정(Accounts), 관리(Manage).

3. 액티비티 바에서 탐색기(Explorer) 아이콘을 선택합니다.
그러면 사이드 바가 열리고 관련 정보가 표시됩니다.

4. 사이드 바는 EXPLORER라는 이름으로 표시됩니다. EXPLORER 뷰는 프로젝트 폴더와 코드 파일을 탐색하거나 확인할 때 사용됩니다. Visual Studio Code는 작업 기록을 저장하며, 프로그램을 다시 열 때 가장 최근에 작업했던 파일과 폴더를 자동으로 엽니다. 하지만 처음 열었다면 아직 프로젝트 폴더가 열려 있지 않습니다.

5. 액티비티 바에서 확장 프로그램(Extensions) 아이콘을 선택합니다.

6. N사이드 바가 EXTENSIONS라는 이름으로 표시됩니다.

7. EXTENSIONS 뷰의 정보 살펴보기

    EXTENSIONS 뷰에서는 코딩 언어, 디버거, 기타 도구를 추가할 수 있는 확장 프로그램 정보를 제공합니다. 개발 환경을 지원하며, 이 워크숍에서는 나중에 C# 확장 프로그램을 설치할 것입니다.

8. 액티비티 바에서 다시 확장 프로그램(Extensions) 아이콘을 선택하면 EXTENSIONS 사이드 바가 닫힙니다.

### 상단 메뉴 옵션 살펴보기

1. File 메뉴를 선택하여 파일 메뉴 옵션을 확인합니다.

2. 파일 메뉴에는 New(새로 만들기), Open(열기), Save(저장), Close(닫기) 옵션이 나열되어 있는 것을 확인합니다.

3. Edit(편집) 메뉴 옵션을 잠시 살펴본 후, 상단의 다른 메뉴 항목도 하나씩 살펴봅니다.

4. 여러 메뉴에 코드와 상호작용하는 옵션이 포함되어 있습니다. 예를 들어,

    * Edit(편집) 메뉴에는 찾기, 바꾸기, 코드 주석 전환 옵션과 함께 잘라내기, 복사, 붙여넣기, 실행 취소, 다시 실행과 같은 표준 옵션이 포함되어 있습니다.
    * Selection(선택) 메뉴에는 코드 줄을 선택하고 조작할 수 있는 옵션이 포함되어 있습니다.
    * Run(실행) 메뉴에는 애플리케이션을 실행하고 디버그 할 수 있는 옵션이 포함되어 있습니다.

5. Terminal(터미널) 메뉴에서 New Terminal을 선택합니다.

6. 터미널 패널의 내용 확인하기

    터미널 패널의 내용을 잠시 살펴봅니다.
    탭(PROBLEMS, OUTPUT, DEBUG CONSOLE, TERMINAL) 간에 전환할 수 있으며, 오른쪽 상단의 버튼 위에 마우스를 올리면 버튼 레이블이 표시됩니다.

7. 터미널 패널에는 명령 프롬프트가 포함되어 있습니다.

    터미널 패널은 명령줄 인터페이스(CLI) 명령을 실행하는 데 사용됩니다. 

8. 터미널 패널의 오른쪽 상단에서 X(닫기) 버튼을 선택하여 패널을 닫습니다.

9. 보기(View) 메뉴에서 명령 팔레트 선택하기

    View 메뉴에서 **Command Palette(명령 팔레트)** 를 선택합니다.
    명령 팔레트는 다양한 유용한 명령을 찾고 실행하는 데 사용됩니다. 지금은 세부적으로 살펴볼 필요는 없지만, 명령 팔레트의 위치를 알아두는 것이 좋습니다.


10. 명령 팔레트의 프롬프트에 extensions를 입력합니다.

    입력에 따라 명령 목록이 필터링되는 것을 확인합니다.

11. extensions 대신 help를 입력하여 명령 목록을 업데이트합니다.

12. 필터 된 명령 목록에서 Help: Interactive Editor Playground를 선택합니다.

    Editor Playground 문서가 편집기에 열리며, 대화형 활동 목록이 포함되어 있습니다.

13. 대화형 활동 목록에서 Formatting(서식 지정)을 선택합니다.

14. 서식 지정 옵션에 대한 내용을 잠시 읽어봅니다.

15. Editor Playground 문서를 닫습니다.

