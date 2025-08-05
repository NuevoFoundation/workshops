---
title: "Noções Básicas de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 4
---

## Entenda quando e por que usar Razor

### Os benefícios das Razor Pages
Razor é uma sintaxe de marcação que permite incorporar código baseado em servidor (C#) em páginas web.

O código baseado em servidor pode criar conteúdo web dinâmico em tempo real, enquanto uma página web é enviada ao navegador. Quando uma página web é solicitada, o servidor executa o código baseado em servidor dentro da página antes de retorná-la ao navegador. Ao rodar no servidor, o código pode realizar tarefas complexas, como acessar bancos de dados.

Razor é baseado em ASP.NET e foi projetado para criar aplicações web. Ele possui o poder da marcação tradicional do ASP.NET, mas é mais fácil de usar e de aprender.

Os benefícios incluem:

* Configuração fácil para aplicativos web dinâmicos usando HTML, CSS e C#.
* Arquivos organizados por funcionalidade para facilitar a manutenção.
* Combina marcação com código C# do lado do servidor usando a sintaxe Razor.

As Razor Pages utilizam Razor para incorporar código baseado em servidor nas páginas web. A sintaxe Razor combina HTML e C# para definir a lógica de renderização dinâmica. Isso significa que você pode usar variáveis e métodos C# dentro do seu HTML para gerar conteúdo web dinâmico no servidor em tempo de execução. É importante entender que Razor Pages não substituem HTML, CSS ou JavaScript. Elas são uma forma de combinar essas tecnologias para criar conteúdo web dinâmico.

### Quando usar Razor Pages
Use Razor Pages em seu aplicativo ASP.NET Core quando você:

* Quiser gerar interfaces web dinâmicas.
* Preferir uma abordagem focada em páginas.
* Quiser reduzir duplicação com partial views.

Razor Pages simplifica a organização de páginas no ASP.NET Core ao manter páginas relacionadas e sua lógica juntas em seu próprio namespace e diretório.