---
title: "Chaînes de caractères"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
Tout ce qui est entouré de guillemets est appelé une chaîne de caractères. C'est ainsi qu'un ordinateur représente des mots ou des phrases. Par exemple, `"a"`, `"2"`, `"banana!"`, et `"Hello World"` sont des chaînes de caractères, mais `Hello World` et `2` ne le sont pas, car les guillemets sont absents. Vous pouvez combiner plusieurs chaînes ensemble en utilisant l'opérateur +. Par exemple :

- `"Apple" + "Pineapple"` produit la chaîne `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produit la chaîne `"Nuevo Foundation"`.

{{% notice tip %}}
## Travailler ensemble

Supprimez tous vos textes `System.out.println` dans votre code. Commencez votre code par la ligne `System.out.println("Nuevo" + " " + "Foundation");`. Notez qu'il existe de nombreuses façons de combiner des chaînes ensemble. Par exemple, une autre manière d'imprimer Nuevo Foundation serait d'écrire `System.out.println("Nue" + "vo Fou" + "ndation");`. Nous allons réfléchir à au moins une autre méthode pour imprimer la chaîne `"Nuevo Foundation"` en utilisant deux symboles `+` dans chaque déclaration `System.out.println`. Vérifiez que Nuevo Foundation s'imprime 3 fois. En d'autres termes, votre console devrait ressembler à ceci après avoir appuyé sur exécuter :

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}