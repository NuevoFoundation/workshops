---
title: "사이트 구축 방식"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# 사이트 구축 방식

워크숍 서브도메인(subdomain)의 콘텐츠는 Hugo의 [DocDock](https://docdock.netlify.com/) 테마를 사용하여 구축됩니다. [Hugo](https://gohugo.io) 는 여러 장점을 가진 정적 “사이트 생성기(static site generator)”입니다:

1. **콘텐츠 작성자** 는 사이트의 기술 구현이나 CSS/페이지 스타일에 신경 쓰지 않고 Markdown 형식으로 콘텐츠에 집중할 수 있습니다. 워크숍들은 *자동으로* 왼쪽 목차와 워크숍 홈 페이지에 추가됩니다. Hugo는 로컬 환경, 즉 자체 네트워크상(예: 비행기 안)에서도 잘 작동하며, 가장 빠른 정적 사이트 생성기로서 전체 워크숍 사이트를 2초 이내에 구축할 수 있습니다. 
2. **학생들** 은 일관된 사용자 경험(UX), 내장된 접근성(built-in accessibility), 로컬라이제이션(localization), 모바일부터 데스크톱까지 지원하는 반응형 디자인의 혜택을 누릴 수 있습니다. 또한 “GitHub” 저장소로의 자동 링크와 “Azure CDN”을 통한 빠른 글로벌 사이트 성능을 제공합니다.
3. **Nuevo 개발 팀** 은 워크숍 페이지를 구축하고 사용자화할 수 있는 기능을 통해 다양한 이점을 누립니다. 여기에는 사용자화 페이지 템플릿(custom page templates), [알림(alerts), 메모(notes), 버튼(buttons), 경고(warnings) 등을 위한 내장 페이지 컨트롤(built-in page controls)](https://workshops.nuevofoundation.org/guidelines/formatting/), Nuevo 헤더(Nuevo header)와 같은 사용자화 컨트롤(custom controls), iframe 상호작용(iframe interactivity), 커스텀 메타데이터(custom metadata), 자동 페이지 링크 연결(automated cross-page linking), 페이지 테마 지정(page theming), 자동 사이트맵 생성(automated site map creation), 내장 아이콘(built-in icons), 그리고 GitHub Actions 및 Azure DevOps를 사용하는 빌드/배포 자동화(built-in automation using GitHub Actions and Azure DevOps for build/deployment)가 포함됩니다.
