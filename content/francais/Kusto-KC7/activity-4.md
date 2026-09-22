---
title: "Activité 4 : Attrapez le Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Activity 4: Catch the Hacker - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}Ceci est une section beaucoup plus courte. Nous allons simplement expliquer le scénario et vous laisser traquer librement. Vous pouvez prendre tout le temps que vous voulez pour cette partie, mais pour les sessions en direct, nous donnons généralement aux participants 30 à 40 minutes avant de passer à la suite.

- **Assurez-vous d'utiliser la base de données SecurityLogs**
- **Soumettez vos réponses au défi "Introducing the Hackers" sur le tableau de scores**

#### **Bonne chasse !**{{< /notice >}}

### Présentation des Hackers

Maintenant que vous avez terminé votre première phase de formation, vous êtes prêt à travailler sur votre premier cas dans le SOC !

Un chercheur en sécurité a tweeté que le domaine *“immune[.]tech”* était utilisé par des hackers. Apparemment, les hackers envoient des emails de phishing contenant des identifiants (connexions, mots de passe, etc.) depuis ce domaine.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️REMARQUE ! Il s'agit d'un protocole de sécurité fréquemment utilisé de formater les liens suspects sous la forme immune[.]tech ou domaine[.]com lorsqu'ils sont mentionnés en ligne. L'ajout de ces crochets autour du point empêche la création d'un lien cliquable. Lors de la recherche dans les journaux, assurez-vous de retirer les crochets du nom de domaine. {{< /alert >}}

Selon les recherches OSINT menées par vos collègues, ce domaine pourrait être utilisé dans le cadre d'une campagne de phishing composée des étapes suivantes :

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯 **Point clé – Renseignement de Source Ouverte (OSINT)** : Les chercheurs et analystes en sécurité utilisent souvent des données libres et accessibles publiquement, comme Twitter ! Nous appelons ces sources de données publiques OSINT, et elles peuvent offrir de précieuses pistes d'investigation. Comme pour toutes les sources de données publiques sur Internet, vous devriez valider toute information obtenue de cette façon par une analyse rigoureuse au lieu de vous fier aveuglément à la source.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considérez les questions suivantes en lien avec cette piste pour vous aider dans votre chasse. Quelques indices sont fournis ci-dessous :**

{{%showanswer "Question 1"%}}
*Quels utilisateurs de notre organisation ont reçu des emails contenant le domaine immune.tech ?*

🤫 **Indice** : Essayez la commande suivante en insérant le nom de domaine en question.
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "Question 2"%}}	
*Avons-nous bloqué certains emails contenant ce domaine ? Qui a effectivement reçu l'un de ces emails ?*     

🤫 **Indice** : Le champ "accepted" dans la table Email indique si un email a été bloqué ou non. Les emails bloqués apparaîtront comme false.* {{%/showanswer%}}

{{%showanswer "Question 3"%}}	
*Quels autres domaines partagent les mêmes IP que immune.tech ? Pouvez-vous trouver la liste complète des domaines associés à cet acteur en vous basant sur les données de PassiveDns ?*  

🤫 **Indice** : Vous pouvez utiliser l'opérateur "in" pour vérifier plusieurs valeurs dans un champ. Par exemple : where field in (“x”, “y”, “z”)* {{%/showanswer%}}

{{%showanswer "Question 4"%}}
*Quelles adresses email les hackers ont-ils utilisées pour envoyer ces domaines ?* 

🤫 **Indice** : Examinez qui est mentionné dans la colonne "sender" pour les emails dont vous savez qu’ils contiennent des sujets et des liens suspects. {{%/showanswer%}}

{{%showanswer "Question 5"%}}
*Les utilisateurs ont-ils cliqué sur l’un des liens contenus dans les emails de phishing ?* 

🤫 **Indice** : Vérifiez les journaux de fichiers, les événements de processus et/ou l’historique de navigation pour les appareils et les comptes associés aux utilisateurs dont vous savez qu’ils ont reçu l’email malveillant, afin de voir s’il y a des traces d’une activité inhabituelle indiquant qu’ils ont cliqué sur le lien. {{%/showanswer%}}

{{%showanswer "Question 6"%}}
*Un utilisateur a-t-il eu ses identifiants volés ? Comment le savez-vous ?* 

🤫 **Indice** : Pour que ses identifiants soient volés, un utilisateur doit avoir visité le site de collecte d’identifiants et y avoir saisi son nom d'utilisateur et son mot de passe. Ensuite, l'attaquant peut essayer de se connecter au compte de l'utilisateur avec les identifiants volés. Vous pouvez trouver des détails sur l'activité de connexion dans la table **AuthenticationEvents**. {{%/showanswer%}}

{{%showanswer "Question 7"%}}
*Du contenu de la boîte mail d’un utilisateur a-t-il été exfiltré (volé) ? Comment le savez-vous ? Quels risques cet incident représente-t-il pour l’entreprise si ce contenu a été volé ?* {{%/showanswer%}}
{{< /alert >}}