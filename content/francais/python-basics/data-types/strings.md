```yaml
---
title: "Chaînes"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Tout ce qui est entouré de guillemets est appelé une `chaîne`. C’est ainsi qu’un ordinateur représente des mots ou des phrases. Par exemple, "a", "2", "banana!", et "Hello World" sont des chaînes, mais 2 et Hello World ne le sont pas, car les guillemets sont manquants. Vous pouvez combiner plusieurs chaînes entre elles en utilisant le signe `+` !

{{% notice tip %}}
Les chaînes que vous combinez n'ont pas besoin d'être des mots réels ! Par exemple, `"Ap" + "ple"` donnera la chaîne `"Apple"`. 
<b>Demandez de l'aide si vous êtes confus !</b>

{{% /notice %}}

Par exemple,

- `"Apple" + "Pineapple"` donne la chaîne `"ApplePineapple"`

- `"Nuevo" + " " + "Foundation"` donne `"Nuevo Foundation"`


#### Défi 1

Que se passe-t-il si vous combinez votre prénom et votre nom ? Comment feriez-vous cela ? 

#### Défi 2

Supprimez toutes les instructions `print` dans votre code. Commencez votre code avec la ligne `print("Nuevo" + " " + "Foundation")`

Si vous l’exécutez, vous devriez obtenir le résultat suivant :

    Nuevo Foundation

Essayons de trouver deux autres façons d’imprimer la chaîne `"Nuevo Foundation"` en utilisant deux symboles plus (`+`) dans chaque instruction `print`. Une fois que cela fonctionne, vous devriez avoir "Nuevo Foundation" imprimé 3 fois. En d'autres termes, votre console devrait ressembler à ceci après avoir appuyé sur exécuter :

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe title="Challenge 2 - Codebunga" src="https://codebunga.com/embed/fsrc8is8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```