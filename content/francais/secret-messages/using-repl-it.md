---
title: "Utilisation de Repl.It"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/sdO27-l4aqM" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Afin d'aider le Kin et la Queen, nous développerons un programme dans un langage de programmation appelé C++. Avec ce programme, nous pourrons entrer un message, et le programme le modifiera pour le rendre secret.

## Utilisation de Replit

Aujourd'hui, vous allez utiliser Replit. Avant de commencer, vous devez vous inscrire pour obtenir un compte Replit, si ce n'est pas encore fait. 

Cliquez sur le bouton ci-dessous pour créer un compte Replit - vous aurez besoin d'une adresse e-mail pour vous inscrire. Si vous avez déjà un compte Replit, vous pouvez vous connecter à votre compte en utilisant également le bouton ci-dessous.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/signup" target="_blank">Créer un compte Replit</a>

<img src="../media/replit-signup.png" height="300" alt="Formulaire d'inscription Replit" />

Ensuite, lancez la console Replit que nous utiliserons aujourd'hui en cliquant sur le bouton ci-dessous. Vous devriez voir l'écran suivant.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-0-english" target="_blank">Lancer Replit</a>

<img src="../media/replit-start-screen.png" height="300" alt="Écran de démarrage d'un repl" />

Nous allons maintenant forker le Repl, ce qui signifie simplement créer une copie du programme, afin que nous puissions y apporter nos propres modifications. Cliquez sur le bouton "Fork Repl" en haut à droite, puis sur le bouton "Fork Repl".

<img src="../media/replit-fork.png" height="300" alt="Forker un repl pour créer une copie du programme" />

Après avoir forké le Replit, vous verrez une fenêtre similaire à celle ci-dessous :

<img src="../media/replit-window.png" height="300" alt="Fenêtre Replit" />

{{% notice warning %}}
Chaque fois que vous voyez le bouton "Lancer Replit", vous devrez suivre les étapes ci-dessus pour forker le repl afin de réaliser une activité. Demandez de l'aide si vous avez des difficultés à forker les repls !
{{%/notice %}}

Avant d'aller plus loin, comprenons comment ces fenêtres fonctionnent. Le fichier `main.cpp` contient le code, ou les instructions que l'ordinateur comprendra et exécutera. En cliquant sur le bouton **Run**, vous commanderez à l'ordinateur d'exécuter les instructions présentes dans ce fichier. Les résultats peuvent être visualisés dans l'onglet **console**, en bas de la fenêtre Replit. 

Expliquons maintenant le code que nous avons dans `main.cpp`. 

{{% notice tip %}}

### Bibliothèques et "#include"

Allez au début de `main.cpp`. Vous y trouverez la ligne suivante :

```
#include <iostream>
```

Cette directive ou instruction fait référence à la bibliothèque `iostream`. Une **bibliothèque** est un endroit commun où un ensemble de fonctions C++, généralement liées à un problème commun ou à un sujet particulier, sont regroupées. Il existe des bibliothèques pour dessiner, créer et gérer des connexions Internet, effectuer des opérations mathématiques, ainsi que pour de nombreux autres usages. `iostream` est une bibliothèque très basique qui nous permet de recevoir ou d'afficher des messages dans la console.

### Commentaires

Les lignes grisées dans `main.cpp` commencent par `//`. Ce sont des **commentaires**. Les commentaires sont utiles dans nos programmes C++ pour mieux les documenter, et expliquer plus en détail l'objectif des instructions. Les commentaires ne sont pas des instructions et sont en fait ignorés par l'ordinateur.

### Namespace std
```
using namespace std;
```
Cette ligne spécifique nous permet d'accéder à quelques mots déjà réservés en C++. Un **mot réservé** est un mot qui a une signification spécifique dans un langage de programmation donné ; en raison de cela, il ne peut pas être réutilisé à d'autres fins. Ici, nous faisons référence au mot réservé **std** pour utiliser le code du standard bien conçu et développé de C++. `using namespace std` signifie que nous souhaitons faire référence à l'espace de noms standard.

### Fonction principale
```
int main(){
    
    return 0;
}
```
`main` est une fonction obligatoire dans tout programme C++. C'est le point d'entrée de notre programme. Entre les accolades `{ ... }` nous placerons toutes les instructions que nous souhaitons que l'ordinateur exécute. Après avoir cliqué sur **Run**, l'ordinateur exécutera ces instructions. `return 0;` indique que le programme a terminé avec succès son exécution. Si des instructions étaient placées après cette ligne, l'ordinateur ne les exécuterait pas.
{{% /notice %}}

{{< alert theme="warning" >}}Toutes les instructions C++ doivent se terminer par un **point-virgule** `;` {{< /alert >}}