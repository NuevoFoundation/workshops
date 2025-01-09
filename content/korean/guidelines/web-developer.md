---
title: "웹 개발자 가이드라인(Web Developer Guidelines)"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

이 문서는 [Nuevo Foundation 워크숍 프로젝트](https://github.com/nuevoFoundation/workshops)의 템플릿과 스타일을 변경하려는 **웹사이트 개발자 전용**입니다.
## 시작하기 전에

웹사이트를 추가하거나 업데이트하기 전에 프로젝트 팀과 동기화를 맞추고 [프로젝트 백로그(Project Backlog)](https://github.com/NuevoFoundation/workshops/projects/1) 내 기존 작업을 확인하세요.

## 설치

프로젝트를 로컬에서 테스트하기 위해 [시작하기(Getting Started)](../getting-started/) 페이지의 지침에 따라 Git과 Hugo를 설치하세요.

## 웹 디자인 스타일과 구조

- **이미지(images)** 웹사이트 이미지 파일은 `themes/images`에 저장해야 합니다.
- **CSS** SCSS 파일은 무시하고 `/themes/docdock/static/css/`파일만 사용하세요.  필요한 CSS를 `head.html`파일 안 `/themes/docdock/layouts/partials/flex/head.html` 파일의 태그에 참조로 추가하세요.

## 워크숍 페이지 분석

- **전체 페이지 템플릿(Full page template)**: 헤더, 메뉴, 본문, 푸터를 포함한 페이지의 모든 구성 요소를 확인하려면 `/themes/docdock/layouts/_default/baseof.html` 파일을 참조하세요.
- **헤드(Head)**: 메타 정보, CSS, 및 JS 파일은 `/themes/docdock/layouts/partials/flex/head.html` 파일에서 확인하세요.
- **상단/메뉴 내비게이션(Top/Menu Navigation)**: docDock config.toml 값을 사용하지 마세요., 대신 `/themes/docdock/layouts/partials/flex/body-before-content.html` 파일에서 HTML을 추가하거나 수정하세요.
- **왼쪽 메뉴(Left Menu)**: `/themes/docdock/layouts/partials/flex/menu.html` 파일을 참조하세요.
- **푸터 내비게이션(Footer Navigation)**: `/themes/docdock/layouts/partials/flex/body-after-content.html` 파일을 참조하세요.
- **메타데이터 박스(Metadata Box)**: `/themes/docdock/layouts/partials/flex/body-after-content.html` 파일을 참조하세요.

## 도움말: CSS가 사라졌어요!

Hugo의 주요 매개변수 중 하나는 `baseURL` 변수입니다. 콘텐츠는 로드되지만 CSS가 로드되지 않는다면 `baseURL` 설정의 문제일 가능성이 큽니다. 콘텐츠를 빌드할 때 config.toml 파일을 변경하는 대신 `baseURL`을 설정할 수 있습니다. 아래 예시는 CSS와 JS를 최적화하고 `baseURL`을 프로덕션 URL로 설정하여 public 디렉터리에 결과를 복사하는 방법입니다.

config.toml 파일을 직접 수정하지 않고도 콘텐츠를 만들 때 `baseURL`을 변경할 수 있습니다. 아래 예시는 CSS와 JS 파일을 축소하고, baseURL을 프로덕션 .org URL로 설정하며, 결과를 `public` 디렉토리에 복사하는 과정을 보여줍니다.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## 팁과 요령(Tips & Tricks)

- **Public 디렉터리 무시(Ignore Public)**: 기본적으로 `hugo`를 매개변수 없이 실행하면 사이트가 public 디렉터리에 빌드됩니다. public 디렉터리를 소스 제어에 추가하지 않도록 하세요 (현재 gitignore에 포함되어 있습니다).
- **왼쪽 탐색(Left Nav)**: 파일의 메타데이터에 hidden: true를 설정하여 왼쪽 탐색에서 콘텐츠를 숨길 수 있습니다 (이 워크숍의 index.md 마크다운 파일처럼!).
- **파셜(Partials)**: 페이지에 재사용 가능한 구성 요소를 추가하려면 `/themes/docdock/layouts/partials/flex/`디렉터리에 새 파셜 파일을 만드세요.
