```markdown
---
title: "Salle 3 : Le Portail de la Pull Request"
description: "Apprenez à pousser des modifications et à créer une pull request."
difficulties: ["intermédiaire"]
weight: 3
---

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
3. Cliquez sur "Contribute" puis sur "Open pull request".
4. Remplissez le titre avec "Solution pour la Salle 2" et fournissez une brève description.
5. Cliquez sur "Create pull request".

{{< notice info >}}
**Astuce :** Gardez un œil sur votre pull request. Les gardiens du donjon (mainteneurs du dépôt) l'examineront et pourraient demander des modifications !
{{< /notice >}}

{{< expand "Processus de Pull Request" >}}

**Pousser les Modifications**
D'abord, poussez vos modifications locales vers votre dépôt distant :

```
git push origin main
```


**Créer une Pull Request**
1. Naviguez vers votre fork sur GitHub
2. Cliquez sur l'onglet "Pull requests"
3. Cliquez sur "New pull request"
4. Assurez-vous que le dépôt de base est l'original et que le dépôt source est votre fork
5. Cliquez sur "Create pull request"

**Attendre la Révision**
Après avoir créé la pull request :
1. Attendez que les mainteneurs examinent vos modifications
2. Apportez des modifications si des retours sont fournis
3. Poussez de nouveaux commits pour mettre à jour la pull request si nécessaire

{{< /expand >}}

Une fois que vous avez créé votre pull request, saisissez son numéro pour continuer :

<label for="finput">Champ de saisie pour le numéro de la pull request :</label><br>
<input type="text" id="finput" name="finput"><br>
```