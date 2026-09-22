---
title: "Salle 1 : La bifurcation"
description: "Commencez votre aventure en forquant et clonant un dépôt."
difficulties: ["débutant"]
weight: 1
---

Vous vous réveillez dans une pièce faiblement éclairée. Un piédestal au centre porte un logo GitHub lumineux. Une voix résonne : "Pour avancer, vous devez forquer le chemin devant vous."

Par "chemin", la voix fait référence à un dépôt GitHub. Forquer crée une copie du dépôt dans votre compte, vous permettant de faire des modifications sans affecter la copie originale.

## Votre Mission

1. Créez un compte GitHub (si ce n'est pas déjà fait).
2. Forkez le dépôt : `https://github.com/VerisimilitudeX/escape-room`
3. Clonez votre dépôt forké sur votre machine locale.

## Instructions

1. Accédez à GitHub et inscrivez-vous ou connectez-vous.
2. Rendez-vous sur l'URL du dépôt et cliquez sur le bouton "Fork" en haut à droite.
3. Une fois forqué, cliquez sur le bouton vert "Code" et copiez l'URL.
4. Ouvrez votre terminal et exécutez :

   ```pwsh
   git clone <VOTRE_URL_DEPOT_FORKÉ>
   cd escape-room
   ```

{{% notice tip %}}
**Astuce :** Recherchez le fichier `README.md` dans votre dépôt cloné. Il contient un code secret pour déverrouiller la pièce suivante !
{{% /notice %}}

{{< expand "Besoin d'aide ?" >}}
Si vous êtes bloqué, essayez ces étapes :

1. Assurez-vous d'être connecté à GitHub.
2. Vérifiez que vous avez bien accédé à l'URL correcte du dépôt.
3. Si vous rencontrez des problèmes avec les commandes git, assurez-vous que [git](https://git-scm.com/downloads) est installé sur votre système.
{{< /expand >}}

Lorsque vous êtes prêt à avancer, entrez le code secret que vous avez trouvé :

<label for="finput">Champ pour entrer le code secret :</label><br>
<input type="text" id="finput" name="finput"><br>