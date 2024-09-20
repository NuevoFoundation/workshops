---
title: "Chambre 4 : Le Labyrinthe de la Fusion"
description: "Naviguez dans les complexités de la revue de code et de la fusion."
difficulty: "Intermédiaire"
weight: 4
---

{{< figure src="../images/room4_merge.jpg" title="Un labyrinthe complexe représente les défis de fusionner du code" >}}

Vous vous trouvez dans une pièce avec un labyrinthe complexe au sol. Les chemins s'entrecroisent et divergent, représentant les défis occasionnels de la fusion du code de votre copie locale vers la version hébergée à distance.

## Votre Mission

1. Examinez les commentaires sur votre pull request.
2. Apportez les modifications nécessaires et mettez à jour votre pull request.
3. Une fois approuvée, fusionnez votre pull request.

## Instructions

1. Vérifiez votre pull request pour tout commentaire de révision.
2. Si des modifications sont demandées :
   - Faites les modifications localement
   - Commitez les modifications
   - Poussez vers votre fork
3. La pull request se mettra à jour automatiquement.
4. Une fois approuvée, cliquez sur "Merge pull request" dans l'interface GitHub.

{{< notice warning >}}
**Important :** La communication est essentielle ! Si vous n'êtes pas sûr des modifications demandées, n'hésitez pas à demander des éclaircissements dans les commentaires de la pull request.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[Check PR Comments] -->|Changes Requested| B(Make Local Changes)
    B --> C(Commit Changes)
    C --> D(Push to Fork)
    D --> E{PR Approved?}
    E -->|Yes| F(Merge PR)
    E -->|No| A
    A -->|No Changes Needed| E
{{< /mermaid >}}

Après avoir fusionné avec succès votre pull request, quel message avez-vous vu ? Entrez-le ci-dessous pour continuer :

[Champ de saisie pour le message de fusion]

{{< expand "Indice" >}}
Le message que vous recherchez est généralement quelque chose comme "Pull request successfully merged and closed."
{{< /expand >}}

{{< notice info >}}
Note : Le champ de saisie réel et la fonctionnalité de cryptage doivent être implémentés séparément, car Hugo ne fournit pas cela par défaut.
{{< /notice >}}