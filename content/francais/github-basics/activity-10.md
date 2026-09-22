---
title: "Salle 10 : Le Déploiement"
description: "Apprenez à déployer votre projet à l'aide de GitHub Pages."
difficulties: ["intermédiaire"]
weight: 10
---

Vous entrez dans la dernière salle pour découvrir un écran géant affichant un site web ainsi que des boutons "Déployer" flottants. Une voix triomphante annonce : "Déployez votre victoire pour que tous puissent la voir !"

## Votre Mission

1. Activez GitHub Pages pour votre dépôt.
2. Créez un fichier simple nommé index.html.
3. Poussez le fichier et visualisez votre site déployé.

## Instructions

1. Accédez à l'onglet "Settings" de votre dépôt.
2. Faites défiler jusqu'à la section "GitHub Pages".
3. Sous "Source", sélectionnez la branche que vous souhaitez déployer (généralement `main`).
4. Dans votre dépôt local, créez un fichier `index.html` à la racine du répertoire.
5. Ajoutez du code HTML dans le fichier, par exemple :

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Mon site GitHub Pages</title>
     </head>
     <body>
       <h1>Bonjour, GitHub Pages !</h1>
       <p>J'ai terminé le jeu d'aventure GitHub !</p>
     </body>
   </html>
    ```

6. Validez et poussez ce fichier sur votre dépôt.
7. Attendez quelques minutes que GitHub traite votre requête, puis visitez votre site à l'adresse https://<nom_utilisateur>.github.io/<nom_du_dépôt> où <nom_utilisateur> correspond à votre nom d'utilisateur GitHub et <nom_du_dépôt> au nom de votre dépôt.

{{< notice info >}}
Note : Le déploiement de votre site peut prendre quelques minutes après le push de vos modifications.
{{< /notice >}}

{{< mermaid >}}
graph TD
A[Activer GitHub Pages] --> B(Créer index.html)
B --> C(Valider et pousser)
C --> D{Site déployé ?}
D -->|Oui| E[Visualiser votre site]
D -->|Non| F[Attendre quelques minutes]
F --> D
{{< /mermaid >}}

Après avoir déployé votre site, quel est le titre de votre page web ? Vous pouvez le trouver en haut de votre navigateur lorsque vous visitez le site. Saisissez-le ci-dessous :

<label for="finput">Champ de saisie pour le titre de la page web :</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Félicitations, maître de GitHub ! Vous avez relevé tous les défis et déployé votre victoire. Vous avez échappé au jeu d'aventure GitHub !
{{< /notice >}}