```markdown
---
title: "Salle 2 : Le Casse-tête du Commit"
description: "Apprenez à faire des changements et à les valider dans votre dépôt."
difficulty: "Débutant"
weight: 2
---

# Salle 2 : Le Casse-tête du Commit

{{< figure src="../images/room2_commit.jpg" title="Des extraits de code flottent autour d'un terminal central, attendant d'être organisés" >}}

En entrant dans la deuxième salle, des extraits de code flottent dans l'air. Un terminal au centre scintille avec un message : "Mettez de l'ordre dans le chaos. Validez vos changements pour avancer."

## Votre Mission

1. Créez un nouveau fichier appelé `solution.md` dans votre dépôt local.
2. Ajoutez le code secret de la Salle 1 à ce fichier.
3. Mettez en scène et validez vos changements.

## Instructions

1. Dans votre terminal, assurez-vous d'être dans le répertoire `escape-room`.
2. Créez le fichier et ajoutez le code :

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Mettez en scène et validez vos changements :

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**Astuce :** Écrivez toujours des messages de validation clairs et descriptifs. Ils vous aident, vous et les autres, à comprendre l'historique de votre projet.
{{< /notice >}}

{{< expand "Quiz : Testez vos connaissances" >}}

**Question 1 : Quelle commande utilisez-vous pour mettre en scène les changements ?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Question 2 : Que fait l'option -m dans la commande de validation ?**

{{< button href="#" >}}Marque la validation comme importante{{< /button >}}
{{< button href="#" >}}Fusionne la validation immédiatement{{< /button >}}
{{< button href="#" >}}Vous permet d'ajouter un message de validation{{< /button >}}

{{< /expand >}}

Une fois que vous avez effectué votre validation, entrez le message de validation que vous avez utilisé :

[Champ de saisie pour le message de validation]

{{< notice info >}}
Note : Le champ de saisie réel et la fonctionnalité de cryptage devront être implémentés séparément, car Hugo ne fournit pas cela par défaut.
{{< /notice >}}
```