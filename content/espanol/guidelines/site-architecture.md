---
title: "Cómo se construyó el sitio"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# Cómo se construyó el sitio

El contenido del subdominio de talleres se construye utilizando el tema [DocDock](https://docdock.netlify.com/) para Hugo. [Hugo](https://gohugo.io) es un generador de sitios estáticos con varios beneficios:

1. **Los autores de contenido** pueden concentrarse en el contenido utilizando markdown y no en la implementación técnica del sitio o el estilo CSS/diseño de las páginas. Los talleres se añaden *automáticamente* a la tabla de contenidos de la izquierda y a la página de inicio de talleres. Hugo funciona de maravilla de manera local (por ejemplo: en un avión), y es el generador de sitios estáticos más rápido, construyendo todo el sitio de talleres en menos de 2 segundos.  
2. **Los estudiantes** se benefician de una experiencia de usuario (UX) consistente en todos los talleres, accesibilidad incorporada, localización, diseño responsivo compatible con dispositivos móviles y de escritorio, enlaces automáticos al repositorio de GitHub y un rendimiento rápido del sitio a nivel global utilizando Azure CDN.
3. **El equipo de desarrollo de Nuevo** se beneficia de la capacidad para construir y personalizar las páginas de los talleres, incluyendo plantillas de página personalizadas, [controles integrados de página para alertas, notas, botones, advertencias y más](https://workshops.nuevofoundation.org/guidelines/formatting/), controles personalizados (por ejemplo: el encabezado de Nuevo), interactividad con iframe, metadatos personalizados, enlaces automáticos entre páginas, tematización de páginas, creación automatizada de mapas del sitio, íconos integrados y automatización incorporada utilizando GitHub Actions y Azure DevOps para la compilación/despliegue. 