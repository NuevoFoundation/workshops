---
title: "Web Developer Guidelines"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

This document is for **website developers only** for changing the [Nuevo Foundation workshop project](https://github.com/nuevoFoundation/workshops) templates and style.

## Before getting started

Before adding/updating the website, ensure you have synced with the project team and the existing work in the [Project Backlog](https://github.com/NuevoFoundation/workshops/projects/1).

## Setup

Follow the instructions in the [Getting Started](../getting-started/) page to install Git and Hugo to test the project locally.

## Web design styles and structure

- **Images:** Website images should be `themes/images`
- **CSS** Ignore the SCSS files and just use CSS files in `/themes/docdock/static/css/` Make sure to add a reference to the CSS you want to include in the `head.html` file at `/themes/docdock/layouts/partials/flex/head.html`

## Dissecting a Workshop Page

- **Full page template**: To see all of the components of a page including header, menu, body, footer, see `/themes/docdock/layouts/_default/baseof.html`
- **Head**: Meta, CSS, and JS files `/themes/docdock/layouts/partials/flex/head.html`
- **Top / Menu Navigation**: Don't use docDock config.toml values, instead add/edit HTML in: `/themes/docdock/layouts/partials/flex/body-before-content.html`
- **Left Menu**: `/themes/docdock/layouts/partials/flex/menu.html`
- **Footer Navigation**: `/themes/docdock/layouts/partials/flex/body-after-content.html`
- **Metadata Box**: `/themes/docdock/layouts/partials/flex/body-after-content.html`

## Help, the CSS is gone

One challenge with Hugo is that a key parameter in the build is the `baseURL` variable. If the content is loading, and the CSS is not, it's likely an issue with the `baseURL` setting.

You can change the `baseURL` when building content instead of changing the config.toml file. The example below will minify the CSS and JS, set the baseURL to the production .org URL and copy the results to the `public` directory.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## Tips and Tricks

- **Ignore Public**: By default, running `hugo` with no parameters will build the site to the public directory. Make sure you do not add the public directory to source control (it's in gitignore now).
- **Left Nav**: You can hide content from the left nav by setting metadata on the file hidden: true (like this workshop's index.md markdown!)
- **Partials**: For reusable components to a page, create a new partial under `/themes/docdock/layouts/partials/flex/`.
