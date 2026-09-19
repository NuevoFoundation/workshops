---
title: "Salle 4 : Le Labyrinthe de Fusion"
description: "Tracez votre chemin à travers les complexités de la revue de code et de la fusion."
difficulties: ["intermédiaire"]
weight: 4
---

Vous vous retrouvez dans une salle avec un labyrinthe complexe au sol. Les chemins se croisent et divergent, représentant les défis occasionnels de la fusion de code depuis votre copie locale vers la version hébergée à distance.

## Votre Mission

1. Examinez les commentaires sur votre pull request.
2. Apportez les modifications nécessaires et mettez à jour votre pull request.
3. Une fois approuvée, fusionnez votre pull request.

## Instructions

1. Vérifiez votre pull request pour tout commentaire de revue.
2. Si des modifications sont demandées :
   - Apportez les modifications localement
   - Validez les changements (commit)
   - Poussez vers votre fork
3. La pull request se mettra automatiquement à jour.
4. Une fois approuvée, cliquez sur "Merge pull request" dans l'interface GitHub.

{{< notice warning >}}
**Important :** La communication est essentielle ! Si vous avez des doutes sur les modifications demandées, n'hésitez pas à demander des clarifications dans les commentaires de la pull request.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[Consultez les commentaires PR] -->|Modifications demandées| B(Faites des modifications locales)
    B --> C(Validez les modifications)
    C --> D(Poussez vers votre fork)
    D --> E{PR approuvée ?}
    E -->|Oui| F(Fusionnez la PR)
    E -->|Non| A
    A -->|Aucune modification nécessaire| E
{{< /mermaid >}}

Après avoir réussi à fusionner votre pull request, quel message avez-vous vu ? Entrez-le ci-dessous pour continuer :

<label for="finput">Champ de saisie pour le message de fusion :</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Indication" >}}
Le message que vous cherchez est généralement quelque chose comme "Pull request successfully merged and closed."
{{< /expand >}}