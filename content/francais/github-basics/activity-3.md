```markdown
---
title: "Salle 3 : Le Portail de la Pull Request"
description: "Apprenez à pousser des modifications et créer une pull request."
difficulty: "Intermédiaire"
weight: 3
---

# Salle 3 : Le Portail de la Pull Request

{{< figure src="../images/room3_pull_request.jpg" title="Une porte massive se dresse devant vous, avec 'Pull Request' inscrit au-dessus" >}}

Une porte massive bloque votre chemin, avec "Pull Request" écrit au-dessus. Un panneau indique : "Pour ouvrir cette porte, vos modifications doivent être examinées."

## Votre Mission

1. Poussez vos modifications locales vers votre dépôt forké.
2. Créez une pull request vers le dépôt original `CodeDungeon/escape-room`.

## Instructions

1. Poussez vos modifications :

```
git push origin main
```

2. Allez sur votre dépôt forké sur GitHub.
3. Cliquez sur "Contribuer" puis "Ouvrir une pull request".
4. Remplissez le titre avec "Solution pour la Salle 2" et fournissez une brève description.
5. Cliquez sur "Créer une pull request".

{{< notice info >}}
**Astuce :** Surveillez votre pull request. Les gardiens du donjon (mainteneurs du dépôt) l'examineront et peuvent demander des modifications !
{{< /notice >}}

{{< expand "Processus de Pull Request" >}}

**Pousser les Modifications**
Tout d'abord, poussez vos modifications locales vers votre dépôt distant :

```
git push origin main
```

**Créer une Pull Request**
1. Allez sur votre fork sur GitHub
2. Cliquez sur l'onglet "Pull requests"
3. Cliquez sur "Nouvelle pull request"
4. Assurez-vous que le dépôt de base est l'original et que le dépôt de tête est votre fork
5. Cliquez sur "Créer une pull request"

**Attendre la Révision**
Après avoir créé la pull request :
1. Attendez que les mainteneurs examinent vos modifications
2. Répondez à tout retour d'information qu'ils fournissent
3. Poussez de nouveaux commits pour mettre à jour la pull request si nécessaire

{{< /expand >}}

Une fois que vous avez créé votre pull request, entrez son numéro pour continuer :

[Zone de saisie pour le numéro de la pull request]

{{< notice info >}}
Note : Le champ de saisie réel et la fonctionnalité de cryptage devraient être implémentés séparément, car Hugo ne le propose pas par défaut.
{{< /notice >}}
```