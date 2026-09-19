---
title: "Salle 2 : L'Énigme du Commit"
description: "Apprenez à apporter des modifications et à les valider dans votre dépôt."
difficulties: ["débutant"]
weight: 2
---

En entrant dans la deuxième salle, des fragments de code flottent dans l'air. Un terminal au centre clignote avec un message : "Mettez de l'ordre dans le chaos. Validez vos modifications pour continuer."

## Votre Mission

1. Créez un nouveau fichier appelé `solution.md` dans votre dépôt local.
2. Ajoutez le code secret de la Salle 1 dans ce fichier.
3. Mettez en scène et validez vos modifications.

## Instructions

1. Dans votre terminal, assurez-vous d'être dans le répertoire `escape-room`.
2. Créez le fichier et ajoutez le code :

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Mettez en scène et validez vos modifications :

```
git add solution.md
git commit -m "Ajout de la solution pour la Salle 1"
```


{{< notice warning >}}
**Astuce :** Rédigez toujours des messages de commit clairs et descriptifs. Ils vous aident, vous et les autres, à comprendre l’historique de votre projet.
{{< /notice >}}

{{< expand "Quiz : Testez vos connaissances" >}}

**Question 1 : Quelle commande utilisez-vous pour mettre en scène des modifications ?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Question 2 : Que fait l'option -m dans la commande commit ?**

{{< button href="#" >}}Marque le commit comme important{{< /button >}}
{{< button href="#" >}}Fusionne immédiatement le commit{{< /button >}}
{{< button href="#" >}}Vous permet d’ajouter un message de commit{{< /button >}}

{{< /expand >}}

Lorsque vous avez validé votre commit, entrez le message de commit que vous avez utilisé :

<label for="finput">Champ de saisie pour le message de commit :</label><br>
<input type="text" id="finput" name="finput"><br>