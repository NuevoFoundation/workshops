```yaml
---
title: "Tutoriel 2 : Orientation des nouveaux employés"
draft: false
weight: 10
---
{{%showanswer "DISCLAIMER: Tous les domaines, données et noms utilisés dans ce document, site web ou autres matériaux sont fictifs ... (cont.)"%}}
*AVERTISSEMENT : Tous les domaines, données et noms utilisés dans ce document, site web ou autres matériaux sont fictifs et ont été créés uniquement à des fins illustratives et éducatives. Ils ne représentent aucun individu, entreprise ou organisation réel.*

*Ce document, site web ou autres matériaux, y compris mais sans s'y limiter, les textes, images, graphiques, logos et logiciels, sont fournis "tel quel" sans garantie d'aucune sorte, expresse ou implicite, y compris mais sans s'y limiter, les garanties implicites de qualité marchande et d'adéquation à un usage particulier.*

*En aucun cas, les créateurs ou propriétaires de ce document, site web ou autres matériaux ne seront responsables des dommages, y compris mais sans s'y limiter, les dommages directs, indirects, spéciaux, accessoires ou consécutifs, résultant de ou en lien avec l'utilisation ou l'impossibilité d'utiliser ce document, site web ou autres matériaux, même s'ils ont été avertis de la possibilité de tels dommages.*

*Les créateurs ou propriétaires de ce document, site web ou autres matériaux se réservent le droit d'apporter des modifications au contenu à tout moment et sans préavis.*  

*En accédant ou en utilisant ce document, site web ou autres matériaux, vous acceptez d'être lié par les termes et conditions énoncés dans cet avertissement. Si vous n'êtes pas d'accord avec ces termes et conditions, vous ne devriez pas accéder ou utiliser ce document, site web ou autres matériaux.*  
{{%/showanswer%}}

## Introduction : Bienvenue chez EnvolveLabs

Bienvenue chez EnvolveLabs Corporation ! 🥳 Aujourd'hui est votre premier jour en tant qu’analyste junior du Security Operations Center (SOC) au sein de notre entreprise. Votre principale responsabilité professionnelle est de protéger EnvolveLabs et ses employés contre les acteurs malveillants du cyberespace.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs est une startup med-tech basée aux États-Unis qui a été fondée en 2012. Notre mission est de développer une nouvelle technologie de vaccin flexible qui couvre de nombreuses souches virales différentes et offre une immunité durable. Cela éliminerait le besoin de recevoir des rappels à intervalles réguliers et rendrait les vaccins plus accessibles. Nos recherches initiales ont prouvé que cette technologie est très efficace – nous prévoyons de commencer la production au premier trimestre de 2024.

EnvolveLabs dispose d'une série de partenaires-clés qui contribuent au succès de notre entreprise. Par conséquent, nous attendons de nos employés qu'ils entretiennent une communication régulière avec ces partenaires-clés :

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

Jusqu'à présent, nous avons été extrêmement concentrés sur la recherche médicale et l'accomplissement de nos objectifs de production. Mais, à mesure que notre travail devient plus important et couronné de succès, nous avons réalisé la nécessité d'investir davantage dans les efforts de cybersécurité. C'est pourquoi nous vous avons embauché !

Comme toutes les bonnes entreprises, EnvolveLabs collecte des journaux de données sur l'activité que ses employés effectuent sur le réseau de l’entreprise. Ces journaux d'audit de sécurité sont stockés dans Azure Data Explorer (ADX) - un service de stockage de données dans Azure (le cloud de Microsoft). Vous utiliserez le langage de requête Kusto (KQL) pour analyser divers types de journaux de sécurité. En analysant ces journaux, vous pouvez nous aider à déterminer si nous sommes ciblés par des acteurs malveillants.
- Vous pouvez trouver la documentation complète sur les requêtes KQL pour ADX ici :  
https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer

### Base de données EnvolveLabs

La base de données EnvolveLabs_Analysis contient huit tables. Les tables contiennent de nombreuses lignes de données similaires. Pour les journaux de sécurité, une seule ligne représente généralement une action effectuée par un employé ou un appareil sur le réseau à un moment donné.

Nous disposons actuellement de huit types de données de journal. Comme vous le verrez dans ADX, chaque type de journal correspond à une table qui existe dans la base de données EnvolveLabs_Analysis :

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">

{{< notice note >}}
🎯**Point clé – Données Over the Horizon (OTH) :** Une des tables mentionnées ci-dessus est différente des autres – **PassiveDns**. Plutôt que d'être un journal de sécurité interne, **PassiveDns** est une source de données que nous avons achetée auprès d'un fournisseur tiers. Toute activité cyber malveillante ne se produit pas uniquement au sein du réseau de notre entreprise, donc parfois nous dépendons de données provenant d'autres sources pour mener à bien nos investigations. {{< /notice >}}

Vous allez bientôt apprendre à utiliser chaque ensemble de données. D'abord, exécutons quelques requêtes pour vous entraîner à utiliser KQL et ADX.  
```