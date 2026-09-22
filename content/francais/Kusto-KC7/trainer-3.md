---
title: "T3 : Programme de l'événement et logistique"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Programme
{{< /alert >}}

*[PRÉREQUIS, 10 min] Accéder au cluster et l'ajouter à ADX*

### Partie 1 : Comprendre l'environnement [1,5 heures]

[5 min] Introduction au renseignement sur les menaces    
     - Mentionner brièvement les outils et techniques d'attribution     
     - Modèle du diamant     
     - Kill Chain     

[20 min] Introduction au langage de requête Kusto (KQL)    
     - Présentation des tables, commandes et syntaxe pour KQL dans le navigateur ADX     
      - where (has, contains, has_any, ==, etc…)     
      - count     
      - take     
      - let     

[10 min] Comment regrouper les activités observées des acteurs malveillants 
 - Comment décider si le prochain élément est lié à votre acteur ? 
 - Cartographier les connaissances de l'acteur avec le modèle du diamant 
 - Comment savoir quand vous avez fini ? 
 - Pièges liés au regroupement (méprises dans l'attribution)    

[45 min] Scénario 1 : Introduction à l'enquête cyber
 - Enquête sur une activité malveillante (ex. menace par e-mail)
 - Utiliser Azure Data Explorer (ADX) pour analyser les données des journaux de sécurité
 - Appliquer les fondamentaux de KQL pour répondre à des questions ciblées à partir des données
 - Passer d'un ensemble de données à un autre

[10 min] Débriefing 
 - Revoir rapidement comment trouver les réponses

### Pause [10 min]

### Partie 2 : Attrapez le pirate [1,5 heures, y compris une activité bonus]

[5 min] Introduction et vue d'ensemble de l'atelier 
 - Outils et techniques de chasse aux menaces pour approfondir le renseignement avant de reprendre

[30 min] Scénario 2 : Attrapez le pirate
 - Ouvrir le tableau de bord et introduire le scénario
 - Faciliter du temps libre pour la chasse
 - Surveiller le chat

[10 min] Débriefing
 - Sélectionner quelques questions et montrer le chemin pour les résoudre

*(Choisissez une activité bonus pour terminer la session si le temps le permet)*    

{{%showanswer "Option 1 : Activité de phishing"%}}	
**Option 1**         
[5 min] Bonus 1 : Activité de phishing

[30 min] Scénario 3 : Hackers envoyant des documents malveillants
 - Temps libre pour la chasse

[10 min] Débriefing et clôture de la session {{%/showanswer%}}

{{%showanswer "Option 2 : Vérité ou désinformation"%}}	
**Option 2**         
[5 min] Introduction à l'analyse de blogs *(pour un public plus avancé)*

[30 min] Scénario 3 : Vérité ou désinformation
 - Temps libre pour enquêter et analyser le blog 

[10 min] Débriefing et clôture de la session
{{%/showanswer%}}

{{%showanswer "Option 3 : Jeopardy sécurité"%}}	
**Option 3**         
[5 min] Introduction au Jeopardy sécurité 
[30 min] Jouer au jeu
 - À décider par l'instructeur le format du jeu. Les participants pourraient jouer directement sur le tableau de bord de leur ordinateur et un minuteur pourrait déterminer celui ayant obtenu le plus de points (quiz avec recherche sur internet libre). Alternativement, utiliser un générateur de Jeopardy pour poser des questions à un public plus expérimenté. Gardez à l'esprit que les autres parties de cet atelier n'abordent pas déjà ces termes *(ce jeu est recommandé uniquement pour un public ayant des connaissances préalables en cybersécurité lors d'une session en direct)*.

[10 min] Débriefing et clôture de la session
{{%/showanswer%}}


{{< alert theme="success" >}}
## Logistique
{{< /alert >}}

### Liste de contrôle

**Voici la liste des éléments dont vos participants auront besoin :**   
* Un ordinateur ou un portable (il ne doit pas être particulièrement puissant)   
* Une connexion Internet correcte   
* Un compte Microsoft   
    * Soit un compte personnel Hotmail ou Outlook    
    * Soit un compte Office365 fourni par l'école    
    * *Note : Si l'école ou l'organisation n'autorise pas l'accès à Azure Data depuis le tenant de l'entreprise - il faudra une solution de contournement comme fournir un compte spécifique à l'événement*     

**Voici la liste des éléments qui pourraient également être nécessaires :**   
* Des copies imprimées des guides de formation (nous avons constaté que    
* les participants travaillent mieux avec un guide papier)    
* Un projecteur ou un tableau interactif pour résoudre les problèmes en groupe    
* Des snacks ou collations - tout le monde les adore :)

### Configuration du tableau de bord

Pour accéder au tableau de bord KC7, rendez-vous sur ce site : https://kc7.azurewebsites.net. Vous devrez vous connecter avec les identifiants reçus par e-mail après avoir rempli le formulaire pour animer une session. Si vous ne dirigez pas une session, vous pouvez créer un compte pour vous connecter.

Si vous gérez une session, vous avez déjà été ajouté à la session de jeu de votre groupe. Vous la verrez sur votre tableau de bord lors de votre connexion. Pour rejoindre la session, cliquez simplement sur le bouton "rejoindre ce jeu".

Vous devrez également ajouter des questions ou des défis pour que les participants du jeu puissent accumuler des points. Pour cela :

* Assurez-vous d'être connecté en tant qu'administrateur pour votre session
* Trouvez la liste des questions correspondant au guide de formation que vous utilisez
* Sélectionnez le jeu de questions dans le menu déroulant

### Ressources supplémentaires

KC7 Répertoire Github : https://github.com/kkneomis/kc7       
Site Web KC7 : https://kc7cyber.com/#demos