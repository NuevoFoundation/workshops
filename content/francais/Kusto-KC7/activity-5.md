---
title: "Bonus 1: Activité Suspecte"
draft: false
weight: 20
---


## Hackers envoyant des documents malveillants

Après avoir enquêté sur l'activité de phishing, vous trouvez un autre tweet provenant du fournisseur de renseignement sur les menaces SolitaryStrike :

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">


{{< notice note >}}
🤔 Utilisez le tweet pour commencer votre investigation. Laissez les questions vous aider à explorer les données et à comprendre ce qui se passe.     
- Soumettez vos réponses au défi "Hackers envoyant des documents malveillants" sur le Tableau de Score à l'adresse https://kc7cyber.azurewebsites.net/ pour obtenir des retours et gagner des points. Les questions ci-dessous sont reflétées sur le Tableau de Score pour cette section. **Il n'y a pas de réponse maître pour cette section autre que le Tableau de Score.**
- **Assurez-vous d'utiliser la base de données SecurityLogs pour cet exercice.**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considérez les questions suivantes liées à cet indice pour vous aider à approfondir votre recherche. Certains indices sont inclus dans les questions ci-dessous :**

{{%showanswer "Question 1"%}}	
*Combien d'emails contenaient le domaine notice[.]io ?* 

🤫**Indice :** Dans quelle table de la base de données SecurityLogs une colonne pourrait-elle contenir des preuves de ce site ou domaine suspect ? {{%/showanswer%}}

{{%showanswer "Question 2"%}}	
*Quelle adresse email a envoyé le domaine notice[.]io ?* {{%/showanswer%}}

{{%showanswer "Question 3"%}}	
*Quel était l'objet des emails contenant le domaine notice[.]io ?* {{%/showanswer%}}

{{%showanswer "Question 4"%}}	
*Quel est le nom de l'utilisateur qui a cliqué sur le lien notice[.]io ?* {{%/showanswer%}}

{{%showanswer "Question 5"%}}	
*À quelle date l'utilisateur mentionné ci-dessus a-t-il téléchargé le fichier : "Critical_Security_Path.docx" ?*    

🤫**Indice :** Les fichiers créés sur les appareils des employés sont enregistrés dans le log FileCreationEvents. Essayez de regarder là-bas pour voir quels employés ont téléchargé ce fichier. {{%/showanswer%}}

{{%showanswer "Question 6"%}}	
*Combien d'emails ont été envoyés à votre organisation le 9 janvier par des utilisateurs de wesellbeakers.com ?* 

🤫**Indice :** Si vous ne vous souvenez pas du format date/heure pour les logs Email, effectuez une requête 'take 10' et observez. Cela vous aidera à écrire votre requête pour cette question. {{%/showanswer%}}

{{%showanswer "Question 7"%}}	
*Quels autres domaines sont hébergés sur les mêmes IPs que notice[.]io ?* {{%/showanswer%}}

{{%showanswer "Question 8"%}}	
*Quelle adresse email est observée en train d'envoyer des emails contenant l'un des domaines identifiés dans la question 7 ?* {{%/showanswer%}}

{{%showanswer "Question 9"%}}	
*Combien d'utilisateurs ont téléchargé les fichiers observés dans les emails de la question 8 ?* {{%/showanswer%}}

{{%showanswer "Question 10"%}}	
*Un des fichiers observés dans la Question 9 - **IMPORTANT_INSTRUCTIONS.pptx** - a été vu dans deux emails distincts. Quels sont les objets de ces emails ?* {{%/showanswer%}}

{{%showanswer "Question 11"%}}	
*Quelle adresse email compromise de pharmasupplies.org a été utilisée pour envoyer un lien vers scanverify.com ?* {{%/showanswer%}}

{{%showanswer "Question 12"%}}	
*Combien d'IPs scanverify.com a-t-il résolus ?* {{%/showanswer%}}

{{%showanswer "Question 13"%}}	
*Considérez l'adresse email que vous avez trouvée dans la question 11. Quel autre domaine cette adresse email a-t-elle envoyé ?* {{%/showanswer%}}

{{%showanswer "Question 14"%}}	
*Quel est le nom du fichier hébergé sur scanverify.com ?* {{%/showanswer%}}

{{%showanswer "Question 15"%}}	
*Quel fichier .pptx a été utilisé pour cibler Gerald Kempinski et Kenny Salcido ?* {{%/showanswer%}}

{{%showanswer "Question 16"%}}	
*Quel IP d'acteur a été utilisé pour rechercher le terme "helpdesk ticket system" sur le site web d'EnvolveLabs ?* {{%/showanswer%}}

{{%showanswer "Question 17"%}}	
*Combien d'emails au total ont été envoyés à votre organisation par cet acteur ?* {{%/showanswer%}}

{{%showanswer "Question 18"%}}	
*Quel fichier .dll a été déposé sur une machine victime peu de temps après que l'utilisateur a téléchargé le zip malveillant : **EnvolveLabs_Research_Tool.7z***  

🤫**Indice :** Les fichiers créés sur les appareils des employés sont enregistrés dans le log FileCreationEvents. Essayez de regarder là-bas pour voir quels employés ont téléchargé ce fichier. {{%/showanswer%}}

{{%showanswer "Question 19"%}}	
*Quelle commande de reconnaissance à six lettres a été exécutée sur la machine de l'utilisateur ayant chargé l'implant mentionné ci-dessus ?*

🤫**Indice :** Essayez de vous concentrer sur un appareil particulier qui a téléchargé le fichier EnvolveLabs_Research_Tool.7z. Ensuite, recherchez dans les logs FileCreationEvents et ProcessEvents pour trouver de nouveaux fichiers et processus créés autour du moment où le fichier a été téléchargé.{{%/showanswer%}}

{{%showanswer "Question 20"%}}	
*Un fichier malveillant 'infector.exe' est observé exécutant des actions suspectes sur plusieurs appareils. Quelle ligne de commande de processus associée à ce fichier est utilisée pour assurer la persistance sur les appareils ?*

🤫**Indice :** Les acteurs établissent une persistance afin de pouvoir revenir plus tard et effectuer des tâches manuelles (appelées activités "hands-on-keyboard") au sein du réseau de votre entreprise. Essayez de rechercher des systèmes créant des connexions vers des domaines externes et IPs, ou des comportements inhabituels comme la création de tâches planifiées. {{%/showanswer%}}
{{< /alert >}}