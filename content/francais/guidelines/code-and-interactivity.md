```markdown
---
title: "Code et interactivité"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

Les ateliers sont interactifs. Les étudiants doivent pouvoir exécuter du code, voir les résultats, et expérimenter. Ce guide explique comment intégrer des éditeurs de code et des éléments interactifs.

## Blocs de code en ligne

Pour des exemples de code que les étudiants peuvent lire mais ne pas exécuter directement, utilisez les blocs de code standards en markdown avec des indications sur les langages :

````markdown
```python
print("Bonjour, Monde !")
```
````

Les langages pris en charge incluent `python`, `html`, `css`, `javascript`, `csharp`, `java`, `sql`, `bash`, et bien d'autres encore.

## Éditeurs de code intégrés

Pour les activités où les étudiants écrivent et exécutent du code, intégrez un éditeur interactif. Voici les plateformes que nous utilisons :

### Replit

Idéal pour Python, JavaScript et la programmation générale. Utilisez le domaine `replit.com` pour les nouveaux intégrations (les anciens ateliers peuvent utiliser `repl.it`, qui redirige toujours).

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">Lancer Replit</a>
```

Ou intégrez directement :

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="Code et interactivité - Éditeur Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

Note : les anciens ateliers incluent `?lite=true` dans les URLs Replit. Ce paramètre n'est plus actif et peut être omis dans les nouvelles intégrations.

### Codebunga

N'ajoutez pas de nouveaux liens ou intégrations Trinket. Les intégrations existantes de Trinket restent temporairement dans le dépôt et sont suivies comme `TODO-IDE-Replace` jusqu'à la migration vers un IDE de navigateur pris en charge.

Exemple hérité :

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="Code et interactivité - Éditeur Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

Idéal pour les programmes en C#.

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="Code et interactivité - Éditeur .NET Fiddle" frameborder="0"></iframe>
```

### CodePen

Idéal pour les projets web en HTML/CSS/JavaScript. Dans ce dépôt, CodePen est généralement utilisé comme bouton de lien plutôt que comme intégration directe :

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Essayez-le par vous-même !</a>
```

## Éléments HTML interactifs

Pour une interactivité personnalisée (quiz, glisser-déposer, boutons), vous pouvez utiliser directement du HTML brut dans le markdown (le rendu `unsafe` de Hugo est activé pour ce site). Sinon, utilisez le shortcode `rawhtml` :

```
{{</* rawhtml */>}}
<button onclick="alert('Correct !')">Cliquez-moi</button>
{{</* /rawhtml */>}}
```

Cela permet d’intégrer n’importe quel code HTML, CSS et JavaScript dans une page d’atelier.

## Structure des défis

Une bonne activité suit ce modèle :

1. **Expliquez** le concept avec une brève description
2. **Montrez** un exemple avec un bloc de code
3. **Défiez** les étudiants de créer leur propre code
4. **Indiquez** un conseil en utilisant un shortcode de notice :

```
{{% notice tip %}}
N'oubliez pas d'utiliser des parenthèses lorsque vous appelez une fonction !
{{% /notice %}}
```

## Conseils

- Proposez toujours un **point de départ fonctionnel**, afin que les étudiants ne se retrouvent pas devant un éditeur vide
- Testez tous les liens intégrés avant de soumettre.
- Définissez `height="600"` comme point de départ pour les éditeurs intégrés et ajustez si nécessaire.
- Ajoutez un lien de secours fonctionnel sous les cadres intégrés au cas où l'intégration serait bloquée, par exemple : "Vous ne voyez pas l'éditeur ? Ouvrez-le dans un nouvel onglet."
- Gardez les exemples de code courts et concentrés. Si un exemple dépasse 20 lignes, envisagez de le diviser en étapes.

## Voir aussi

- [Mise en forme](../formatting) — Shortcodes visuels (alertes, boutons, notices, extension)
- [Tags et Métadonnées](../tags-and-metadata) — Champs frontmatter pour tous les types de page
```