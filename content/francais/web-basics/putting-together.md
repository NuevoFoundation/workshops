---
title: "Mise en place"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 3
---

Pour que ton navigateur comprenne ce qu'est chaque élément de ton site, on doit les étiqueter avec des tags (balises) HTML. HTML est l'abréviation de "Hypertext Markup Language" (Langage de Balisage d'Hypertexte). Les tags sont des mots entourés des symboles `<` et `>`. Par exemple, la tag `<img>` indique à ton navigateur "ceci est une image". La tag `<button>` lui indique "ceci est un bouton".

![alt text](../media/web-tags-sm.png "html tags graphic")

Les tags peuvent également être utilisées pour organiser ton page Web ! L'image ci-dessous présente la structure d'une page Web de base. Le "head" (tête) contient généralement les libraries (bibliothèques) supplémentaires utilisées et le titre de la page, tandis que le corps contient la majeure partie du contenu affiché.

<p style="text-align: center; "><img src="../media/htmlTagStructure.png" alt="html tag structure" width="500"/></p>

La plupart des tags nécessitent une tag d'ouverture et une tag de fermeture. Par exemple, tu vois que toutes les pages ont une tag d'ouverture `<html>` au début et une tag de fermeture `</html>` à la fin. Cela indique au navigateur où les éléments HTML commencent et où ils se terminent. Pensez aux tags comme à des guillemets ; par exemple, l'ordinateur comprendra que tout ce qui se trouve entre les tags `<html>` et `</html>` fait partie d'un site Web de HTML.

Il existe également quelques tags, comme la tag d'image `<img>`, qui se ferment automatiquement, ce qui signifie qu'elles ne nécessitent qu'une tag d'ouverture et non une tag de fermeture.

Voici un exemple :

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html,result" data-user="Sunny-Dee" data-slug-hash="ErRraG" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="HTML Basics">
    <span>See the Pen <a href="https://codepen.io/Sunny-Dee/pen/ErRraG/">HTML Basics</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
