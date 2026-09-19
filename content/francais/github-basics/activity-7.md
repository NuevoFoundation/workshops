---
title: "Salle 7 : L'Allée de l'Automatisation"
description: "Exploitez la puissance de GitHub Actions pour automatiser votre flux de travail."
difficulties: ["avancé"]
weight: 7
---

Vous entrez dans une salle remplie d'activités. Des engrenages tournent et des tapis roulants bougent, symbolisant des processus automatisés. Un affichage holographique s'allume : "Automatisez votre chemin vers la victoire !"

## Votre Mission

1. Créez un simple workflow GitHub Actions.
2. Déclenchez le workflow en poussant un changement dans votre dépôt.
3. Consultez les résultats du processus automatisé.

## Instructions

1. Dans votre dépôt local, créez un nouveau répertoire nommé `.github/workflows`.
2. À l'intérieur de ce répertoire, créez un fichier nommé `hello-world.yml`.
3. Ajoutez le contenu suivant au fichier :

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. Commitez ce fichier et poussez-le sur votre dépôt GitHub.
Rendez-vous dans l'onglet "Actions" de votre dépôt GitHub pour voir l'exécution du workflow.

{{< notice warning >}}
Note : GitHub Actions peut être un outil puissant pour l'automatisation, mais soyez attentif aux limites d'utilisation sur les comptes gratuits.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Créer un fichier de workflow] --> B(Commiter et pousser)
B --> C{Workflow déclenché ?}
C -->|Oui| D[Consulter les résultats]
C -->|Non| E[Vérifier les erreurs dans le fichier de workflow]
E --> B
{{< /mermaid >}}

Après que votre workflow ait été exécuté avec succès, quel était le résultat de l'étape "Say Hello" ? Entrez-le ci-dessous :

<label for="finput">Champ de saisie pour le résultat du workflow :</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Indice" >}}
Le résultat devrait être exactement ce que vous avez spécifié dans la commande echo de votre fichier workflow.
{{< /expand >}}

{{< notice success >}}
Excellent travail ! Vous avez automatisé votre premier processus avec GitHub Actions. En route pour le prochain défi !
{{< /notice >}}