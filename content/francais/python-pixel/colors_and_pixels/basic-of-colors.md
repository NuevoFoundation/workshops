```markdown
---
title: "Notions de base des couleurs"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" title="Notions de base des couleurs - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Notions de base des couleurs
En parcourant toutes sortes d'images en ligne, vous êtes-vous déjà demandé comment ces images obtenaient leurs couleurs ? En réalité, les ordinateurs utilisent le *mode RGB* pour représenter les couleurs.

## Format RGB
En Python, nous suivons un format spécifique lors de la définition des couleurs :  
(R, G, B), où "R", "G" et "B" sont tous des entiers. "R" représente une certaine quantité de <span style="color:red; font-weight:bold"> rouge</span>, "G" représente une certaine quantité de <span style="color:green; font-weight:bold"> vert</span>, et "B" représente une certaine quantité de <span style="color:blue; font-weight:bold"> bleu</span>.  

La couleur représentée par (R, G, B) est ce que nous obtenons par "le mélange" de différentes quantités de rouge, vert et bleu.

<!-- Pour l'accessibilité, utilisez cet élément HTML label -->
<label for="colorpicker">Cliquez sur la ligne ci-dessous et choisissez les couleurs souhaitées sur le sélecteur de couleurs pour observer leurs valeurs RGB :</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*Que signifie "le mélange des couleurs" ?*

Ici, nous utilisons différentes quantités de lumière rouge, verte et bleue pour obtenir une nouvelle couleur lumineuse. Tout comme nous utilisons différentes quantités de pigments en peinture, nous mélangeons différentes quantités de lumière pour créer différentes couleurs lumineuses. Les pigments utilisent les couleurs primaires rouge, jaune et bleu, tandis que les ordinateurs utilisent les couleurs primaires rouge, vert et bleu.

Cette image représente très approximativement comment les couleurs se mélangent :
<img src="../../media/colors.svg.png" alt="Représentation des couleurs montrant comment le rouge, le vert et le bleu se mélangent" width="50%">

Tout comme nous ne devrions pas utiliser trop de pigment, il existe également une limitation pour la représentation des couleurs. L'entier maximum que nous pouvons utiliser pour représenter chaque quantité de couleur est 255, et l'entier minimum est 0. Cette règle est définie pour le mode RGB.

Dans tous les matériaux suivants, "couleur" signifie "la couleur de la lumière".
{{% /notice %}}


## Questions et Réponses
1. Quelle couleur représente (0, 0, 0) ?

<center>
<label for="colorpickerQ1">Essayez :</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Afficher la réponse" %}}
Noir. Toutes les couleurs sont à 0 %. (Il n'y a pas de couleur ici. Le monde entier est si sombre. C'est noir !)
<img src="../../media/black.png" alt="Exemple de couleur noire" width="40%">
</br>
{{% /showanswer %}}

2. Quelle couleur représente (255, 255, 255) ?

<center>
<label for="colorpickerQ2">Essayez :</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Afficher la réponse" %}}
Blanc. 255 signifie que vous utilisez 100 % de chaque couleur, ce qui est saturé. (Lorsque toutes les couleurs sont saturées, vous obtenez du blanc)
<img src="../../media/white.png" alt="Exemple de couleur blanche" width="40%">
</br>
{{% /showanswer %}}

3. Quelle couleur représente (100, 100, 100) ?

<center>
<label for="colorpickerQ3">Essayez :</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Afficher la réponse" %}}
Gris. 100 / 255 % = 39,2 %. Vous obtiendrez du gris en mélangeant 39,2 % de rouge, 39,2 % de bleu et 39,2 % de vert.
<img src="../../media/grey.png" alt="Exemple de couleur grise" width="40%">
</br>
{{% /showanswer %}}

*Remarque : Ne paniquez pas si vous vous sentez confus ici, nous expliquerons davantage ces concepts dans les activités de codage Python plus tard dans l'atelier.*  
<br/><br/>

## Couleurs intégrées

En Python, les couleurs les plus couramment utilisées sont déjà préparées pour vous. Lorsque vous devez faire référence à une couleur, il suffit d'écrire :
```python
color = 'nom de la couleur'
```
Par exemple :  
Rouge :
```python
color = 'red'
# Le code suivant est utilisé pour afficher la couleur obtenue.
# Vous pouvez ignorer ces lignes pour l'instant. Nous vous les expliquerons sur la page suivante !
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
Voici votre résultat :
<img src="../../media/whileloopbefore.png" alt="Exemple de sortie couleur rouge" width="60%">
Incroyable ! Vous obtenez du rouge !
```