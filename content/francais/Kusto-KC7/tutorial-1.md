---
title: "Tutoriel 1 : Introduction à l'intelligence des menaces"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" title="Tutoriel 1 : Introduction à l'intelligence des menaces - vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} En parcourant cet atelier, vous remarquerez que chaque page contenant une vidéo contient également la leçon sous forme écrite. Vous pouvez suivre l'une ou l'autre en fonction de votre style d'apprentissage. {{< /notice >}}

## Qu'est-ce que l'intelligence des menaces ?

**Analystes en intelligence des menaces** :

{{<icon name="user" size="large">}} Apprennent à connaître les adversaires ... et partagent leurs connaissances avec des partenaires des secteurs public et privé.

{{<icon name="time" size="large">}} Suivent les adversaires au fil du temps ... pour comprendre l'évolution du paysage des menaces.

{{<icon name="lock" size="large">}} Mettent en œuvre des défenses ... et travaillent avec les équipes de développement produit pour protéger les clients.

Les données, à elles seules, ne constituent pas de l'intelligence. Les journaux de sécurité, à eux seuls, ne fournissent rien d'impactant tant qu'ils ne sont pas analysés. Une fois que les analystes en intelligence des menaces ont traité les données et les informations, dans le contexte des adversaires qu’ils suivent et de l’évolution du paysage des menaces, ils peuvent commencer à élaborer une histoire et une chronologie des événements passés. Comprendre ce que ces menaces signifient, pourquoi elles se sont produites et comment elles ont affecté votre entreprise... voilà ce qu'est la véritable intelligence des menaces.

## Qu'est-ce que la Cyber Kill Chain ?

La Cyber Kill Chain, initialement développée par Lockheed Martin, est un cadre d’identification et de prévention des cyberattaques. Ce cadre identifie 7 étapes que les adversaires doivent compléter pour atteindre leur objectif [^1].  
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">

## Comprendre le modèle de diamant

Le modèle de diamant pour l'analyse des intrusions fournit une méthode pour analyser les caractéristiques des cyberattaques. Ce modèle met l'accent sur les relations entre 4 composants : **l'adversaire, les capacités, l'infrastructure et les victimes**. La théorie sous-jacente à ce modèle repose sur l'idée que pour chaque cyberattaque, il existe "un **adversaire** faisant un pas vers un objectif en utilisant une **capacité** à travers une **infrastructure** contre une **victime** pour produire un résultat" [^2].  
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## Qu'est-ce que KC7 ?

Cela nous amène à expliquer pourquoi ce jeu s'appelle KC7 ; parce qu'il guide les gens à travers les 7 étapes de la Cyber Kill Chain décrites ci-dessus.

**KC7 est un jeu conçu pour enseigner aux gens comment appliquer des connaissances en cybersécurité et développer des compétences en analyse à l'aide de données réalistes.** Il s'agit d'une simulation unique et immersive d'analyse en cybersécurité, développée par des experts en sécurité du Microsoft Threat Intelligence Center (MSTIC), une équipe spécialisée dans le suivi des acteurs cyber les plus sophistiqués au monde. Le point fort de ces données est qu'elles sont fictives et générées par un script Python. Cela signifie que les participants apprennent des techniques réelles sans les risques liés à des données privées. Cette formation offre aux participants l'opportunité d'apprendre et d'appliquer des compétences d'analyse des menaces cyber tout en défendant une entreprise simulée contre des pirates.

{{< alert theme="info" >}} Maintenant que nous avons abordé quelques sujets liés à l'intelligence des menaces, passons à la suite. Pas de souci si tout cela ne vous semble pas encore totalement clair, ces concepts deviendront plus faciles à comprendre au cours de la formation. {{< /alert >}}