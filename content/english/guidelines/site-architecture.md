---
title: "How the site is built"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# How the site is built

The workshops subdomain content is built using the [DocDock](https://docdock.netlify.com/) theme for Hugo. [Hugo](https://gohugo.io) is a static site generator with a number of benefits:

1. **Content authors** can focus on content using markdown and not on the technical implementation of the site or CSS/page styling. Workshops are *automagically* added to the left table-of-contents and the workshops home page. Hugo works great locally (ex: on an airplane), and Hugo is the fastest static site generator, building the entire workshop site in <2 seconds.  
2. **Students** benefit from a consistent UX across workshops, built-in accessibility, localization, responsive design supporting mobile-to-desktop, automated links to the GitHub repo, and fast global site performance using the Azure CDN.
3. **Nuevo Dev Team** benefits from the ability to build and customize workshop pages including custom page templates, [built-in page controls for alerts, notes, buttons, warnings and more](https://workshops.nuevofoundation.org/guidelines/formatting/), custom controls (ex: the Nuevo header), iframe interactivity, custom metadata, automated cross-page linking, page theming, automated site map creation, built-in icons, and built-in automation using GitHub Actions and Azure DevOps for build / deployment. 
