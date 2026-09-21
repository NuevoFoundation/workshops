---
title: "Aidez-moi, je suis bloqué !"
description: "Configuration des écouteurs"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "Aucun"
difficulties: ["débutant"]
draft: false
---
##### Pas de panique ! Consultez les points suivants pour voir s'ils peuvent vous aider. Sinon, n'hésitez pas à nous contacter, et nous vous aiderons.

1.  L'indentation est très importante lorsque vous travaillez en Python. Faites attention aux espaces et aux tabulations dans votre code, car les erreurs d'indentation peuvent parfois être assez difficiles à repérer.

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    Cependant, l'aspect positif est qu'un formatage strict rend le code Python très clair et organisé. Est-ce que toutes vos variables, fonctions, etc. sont bien indentées comme indiqué ?
    
2.  SyntaxError : syntaxe invalide  
    Vérifiez que vos mots-clés sont orthographiés correctement et que vous respectez la structure définie.

3.  IndentationError : indentation inattendue  
    Si vous voyez ce message, vérifiez vos indentations.

4.  NameError : le nom global \'\-\--\' n'est pas défini  
    Les variables définies dans une fonction peuvent uniquement être utilisées dans cette fonction. Si vous essayez d'utiliser une variable d'une fonction dans une autre, vous recevrez cette erreur.

    Pour rendre une information disponible aux autres fonctions, vous pouvez la transmettre avec l'instruction `return`, en l'affectant éventuellement à une variable. Ensuite, vous pouvez l'envoyer à une autre fonction en utilisant un paramètre. Consultez le lien vers le tutoriel sur les fonctions dans ma signature pour une explication détaillée.

5.  Erreur non reconnaissable : faute d'orthographe ?  
    Vous recevez généralement cette erreur si vous faites une faute de frappe dans vos mots-clés. Vérifiez tous vos mots-clés.

6.  TypeError : Impossible de convertir implicitement un objet 'int' en chaîne de caractères  
    Vérifiez que vous n'essayez pas d'utiliser un entier dans des actions liées aux chaînes de caractères (vous ne pouvez pas concaténer une chaîne et un entier. Vous devez d'abord convertir l'entier en chaîne).
