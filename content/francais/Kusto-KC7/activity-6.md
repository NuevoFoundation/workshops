---
title: "Bonus 2: Vérité ou Désinformation ?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" title="Bonus 2: Truth or Misinformation? - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Analyse du Blog Cyber

Dans ce scénario, nous vous invitons à examiner l'article de blog ci-dessous et à vérifier si vous pouvez trouver des preuves dans **SecurityLogs2** qui confirment ou réfutent les informations publiées.

------------------------------------------------------
*[Début de l'Article de Blog]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">


**Qu'est-ce que UnhelpfulDesk ?** 
 
Les implants malveillants UnhelpfulDesk sont déposés par des fichiers dont les noms ressemblent à des fonctions informatiques légitimes, comme des mises à jour logicielles ou des réinitialisations de mots de passe, ou encore des sujets de recherche médicale, comme la recherche sur les vaccins. Ces fichiers sont envoyés aux victimes via des courriels malveillants contenant des liens pour télécharger les fichiers.  
 
 
 
**Droppeurs UnhelpfulDesk** 
 
| Nom de fichier 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**Implants Déployés** 
 
|Nom de fichier 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
Note : *Des échantillons des fichiers d'implant UnhelpfulDesk détectés par les chercheurs de VulnerableArray sont disponibles sur VirusTotal.*
 
Une fois déployé avec succès, l'implant UnhelpfulDesk effectue une reconnaissance via les commandes suivantes : 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Par la suite, le malware chiffre les fichiers sur la machine et demande une rançon pour déchiffrer ces fichiers. La note de rançon est récupérée depuis Pastebin comme montré ci-dessus : 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Autres Indicateurs de Compromission (IOC)** 
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[Fin de l'Article de Blog]*

-----------------------------------------------------

## Maintenant, c’est à vous de jouer… 
 
Notre Responsable de la Sécurité des Systèmes d'Information (RSSI) vous a demandé d'évaluer ce rapport de VulnerableArray et de déterminer s'il est exact en utilisant les journaux de la base de données **SecurityLogs2**.     

🤔  Pendant votre évaluation, considérez les questions suivantes : 

{{< alert theme="success" >}} 
*Question 1.	Est-ce que tous les indicateurs signalés appartiennent au même cluster d'activités ? Comment le savez-vous ?*
 {{< notice note >}}
  **Indice :** Utilisez le modèle Diamond (Adversaire, Victime, Infrastructure, Capacités) pour vous aider à réfléchir à la classification des groupes d'activités distincts. Cherchez des similitudes et des différences dans chacun des quatre sommets du modèle Diamond.  {{< /notice >}}
 
*Question 2.	Le rapport affirme que le malware UnhelpfulDesk vise à déployer un ransomware et à chiffrer les fichiers sur un système infecté. Êtes-vous d'accord avec cette évaluation ? Ou voyez-vous des preuves d'objectifs différents ?*
 {{< notice note >}}
  **Indice :** Essayez de rechercher des activités liées aux indicateurs basés sur les malwares partagés dans le blog, puis identifiez quelques systèmes compromis. Voyez-vous des activités post-compromission sur l'un de ces systèmes qui diffèrent du ransomware décrit dans le blog ? {{< /notice >}}
 
*Question 3.	Quelles erreurs analytiques, le cas échéant, ont été commises par les auteurs du blog ?* 
 {{< notice note >}}
  **Indice :** Certains processus sont exécutés automatiquement par le malware lors de son exécution. D'autres processus sont exécutés manuellement (main sur le clavier) par l'opérateur après l'établissement du canal de commande et de contrôle. {{< /notice >}}
 
 
*Question 4.	Le malware UnhelpfulDesk est-il unique à l'acteur ITINIUM ? Comment le savez-vous ?* 
 {{< notice note >}}
  **Indice :** Les implants updater.dll semblent être déposés à partir de fichiers ayant deux thèmes distincts (IT et recherche). Réfléchissez à la raison pour laquelle cela