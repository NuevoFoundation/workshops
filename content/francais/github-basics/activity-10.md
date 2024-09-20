---
title: "Salle 10 : Le Repaire de Déploiement"
description: "Apprenez à déployer votre projet en utilisant GitHub Pages."
difficulty: "Intermédiaire"
weight: 10
---

# Salle 10 : Le Repaire de Déploiement

{{< figure src="../images/room10_pages.jpg" title="Une salle avec un écran géant affichant un site web et des boutons de déploiement flottants" >}}

Vous entrez dans la dernière salle pour trouver un écran géant affichant un site web et des boutons "Déployer" flottants. Une voix triomphante annonce : "Déployez votre victoire pour que tous la voient !"

## Votre Mission

1. Activez GitHub Pages pour votre dépôt.
2. Créez un simple fichier index.html.
3. Poussez le fichier et visualisez votre site déployé.

## Instructions

1. Allez dans l'onglet "Settings" de votre dépôt.
2. Faites défiler jusqu'à la section "GitHub Pages".
3. Sous "Source", sélectionnez la branche que vous souhaitez déployer (généralement `main`).
4. Dans votre dépôt local, créez un fichier `index.html` à la racine du répertoire.
5. Ajoutez du code HTML dans le fichier, comme :

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Mon Site GitHub Pages</title>
     </head>
     <body>
       <h1>Bonjour, GitHub Pages !</h1>
       <p>J'ai terminé le Jeu d'Aventure GitHub !</p>
     </body>
   </html>
   ```

6. Validez et poussez ce fichier vers votre dépôt.
7. Attendez quelques minutes pour que GitHub traite votre demande, puis visitez votre site à l'adresse https://<username>.github.io/<repository-name> où <username> est votre nom d'utilisateur GitHub et <repository-name> est le nom de votre dépôt.
{{< notice info >}}
Note : Il peut falloir quelques minutes pour que votre site soit déployé après avoir poussé les modifications.
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
Après que votre site est déployé, quel est le titre de votre page web ? Vous pouvez le trouver en haut de votre navigateur lorsque vous visitez le site. Entrez-le ci-dessous :
[Champ de saisie pour le titre de la page web]
{{< notice success >}}
Félicitations, maître de GitHub ! Vous avez relevé tous les défis et déployé votre victoire. Vous avez échappé au Jeu d'Aventure GitHub !
{{< /notice >}}