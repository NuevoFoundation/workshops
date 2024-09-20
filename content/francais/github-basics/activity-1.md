---
title: "Salle 1 : La Fourche du Chemin"
description: "Commencez votre aventure en bifurquant et clonant un dépôt."
difficulty: "Débutant"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="La première salle du Code Dungeon, illuminée par un mystérieux logo GitHub" >}}

Vous vous réveillez dans une pièce faiblement éclairée. Un piédestal au centre porte un logo GitHub lumineux. Une voix résonne : "Pour avancer, vous devez bifurquer le chemin devant vous."

Par chemin, la voix désigne un dépôt GitHub. Le forking crée une copie du dépôt dans votre compte, vous permettant de faire des changements sans affecter l'original.

## Votre mission

1. Créez un compte GitHub (si ce n'est pas déjà fait).
2. Forkez le dépôt : `https://github.com/VerisimilitudeX/escape-room`
3. Clonez votre dépôt forké sur votre machine locale.

## Instructions

1. Allez sur GitHub et inscrivez-vous ou connectez-vous.
2. Naviguez vers l'URL du dépôt et cliquez sur le bouton "Fork" en haut à droite.
3. Une fois forké, cliquez sur le bouton vert "Code" et copiez l'URL.
4. Ouvrez votre terminal et exécutez :

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**Indice :** Cherchez le fichier `README.md` dans votre dépôt cloné. Il contient un code secret pour débloquer la salle suivante !
{{% /notice %}}

{{< expand "Besoin d'aide ?" >}}
Si vous êtes bloqué, essayez ces étapes :

1. Assurez-vous d'être connecté à GitHub.
2. Vérifiez que vous avez bien navigué vers la bonne URL de dépôt.
3. Si vous avez des problèmes avec les commandes git, assurez-vous que [git](https://git-scm.com/downloads) est installé sur votre système.
{{< /expand >}}

Quand vous êtes prêt à continuer, entrez le code secret que vous avez trouvé :

[Champ de saisie pour le code secret]

{{% notice %}}
Remarque : Le champ de saisie réel et la fonctionnalité de chiffrement doivent être implémentés séparément, car Hugo ne les fournit pas par défaut.
{{% /notice %}}