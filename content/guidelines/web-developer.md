---
title: web-developer"
date: 2019-07-22T14:08:32-07:00
draft: false
---

This document is for **website developers only** for changing the [Nuevo Foundation workshop project](https://github.com/nuevoFoundation/workshops) templates and style.

## Before getting started

Before adding/updating the website, ensure you have sync'd with the project team and the existing work in the [Project Backlog](https://github.com/NuevoFoundation/workshops/projects/1).

## Setup

Follow the instructions in the Project readme.md to install Git and Hugo to test the project locally.

## Web design styles and structure

- **Images:** Website images should be `themes/images`
- **Workshop Page**: Use the single.html template in `themes/docdock/_default/layouts/single.html`
- **List page**: Use the list.html template in `themes/docdock/_default/layouts/list.html`
  Each workshop page has a set of partial pages that can be found in `themes/docdock/layouts`
- **CSS Files**: This site uses SASS, with all files in `themes/docdock/static/scss/flex`
- **Fonts**: `themes/docdock/static/scss/flex/fonts.scss`
- **Top Navigation**: `themes/docdock/static/scss/flex/header.scss`
- **Left navigation**: `themes/docdock/static/scss/flex/menu.scss`
- **Shortcodes**: `themes/docdock/layouts/shortcodes` and `themes/docdock/static/scss/flex/*.scss` for SASS/CSS
