```yaml
---
title: "Activité 2 : Jeu d'intelligence des menaces"
draft: false
weight: 8
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" title="Activité 2 : Jeu d'intelligence des menaces - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Documentation:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

  // go through the "current choices"
  // to find the selected choice.
  // radio boxes pointing to choices
  // must be named "cc"
  // change if necessary
  //
  var i = 0;
  for(;i<quizForm.elements.length;i++)
  {
    if(("cc" ==
        quizForm.elements[i].name) &&
       (quizForm.elements[i].checked))
    {
      s = quizForm.elements[i].value;
    }
  }

  // no choice was selected
  //
  if("?" == s)
  {
    alert("Veuillez faire une sélection.");
    return false;
  }

  // check if we have the correct
  // choice selected
  //
  if(s == theAnswer)
  {
    alert("'"+s+"' est correct !");
    if(urlRight)
    {
    document.location.href = urlRight;
    }
  }
  else
  {
    alert("'"+s+"' est incorrect.");
    if( urlWrong )
    {
    document.location.href = urlWrong;
    }
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}

{{< alert theme="success" >}}**La meilleure façon de compléter cette section est de regarder la vidéo tout en suivant le contenu de la page ci-dessous**{{< /alert >}}

### Qu'est-ce que l'attribution ?

Un sujet clé dans le monde de la cybersécurité est appelé **attribution**. En cybersécurité, l'attribution désigne le processus de suivi, d'identification et, de manière générale, d'imputation de la responsabilité à l'auteur d'une cyberattaque. Les cyberattaques, également appelées communément *piratage*, sont des tentatives par un adversaire d'accéder à des systèmes dans le but de modifier, voler, détruire ou exposer des informations. Voici des exemples de méthodes pour mener une cyberattaque :
- **Malware** - Abréviation de logiciel malveillant, tout code créé dans l'intention de causer des dommages, comme un virus ou un ver.
- **Hameçonnage (Phishing)** - Une attaque utilisant des emails, des messages texte (SMS) ou les réseaux sociaux pour inciter une victime à partager des informations sensibles ou à télécharger un fichier malveillant, un peu comme dans le cas du catfishing.
- **Ransomware** - Un code malveillant conçu pour verrouiller les victimes hors de leurs propres systèmes afin d'exiger une rançon, généralement de l'argent, en échange de l'accès à nouveau à leurs systèmes ou données verrouillés.
- **Password Spray** - Un attaquant acquiert une liste de noms d'utilisateur, puis essaie de se connecter à tous les noms avec le même mot de passe, et recommence le processus avec de nouveaux mots de passe jusqu'à ce qu'il accède au système.

### Défis de l'attribution

Bien qu'il s'agisse d'une partie essentielle de la cybersécurité, l'attribution peut être difficile, même pour les experts en cybersécurité. Ces derniers doivent souvent mener des enquêtes approfondies en criminalistique et analyser de nombreuses données pour trouver des moyens de prouver qui pourrait être responsable des attaques. Voici quelques éléments que les experts analysent pour les aider :
- **Données historiques** - Existe-t-il des modèles répétés utilisés dans plusieurs cyberattaques au fil du temps, pouvant indiquer quels auteurs malveillants pourraient être responsables ?
- **Intentions ou motifs** - Ces attaques ciblent-elles spécifiquement les institutions éducatives, par exemple ? Une cyberattaque pourrait-elle coïncider avec un conflit politique publiquement observable entre des pays ne pouvant se permettre d'engager des actions visibles comme le lancement de missiles, l'envoi de troupes militaires ou d'autres formes de **guerre cinétique** avec un autre pays ?
- **Schéma géographique des attaques** - Les organisations d'un pays particulier sont-elles principalement ciblées ? À l'inverse, une entité cible-t-elle des organisations dans le monde entier sauf une seule, potentiellement son propre pays ?

Le degré de difficulté de l'attribution cyber rend cette méthode d'attaque attrayante pour les groupes ayant le savoir-faire, les ressources et la motivation nécessaires pour essayer tout en dissimulant leurs traces. Avec cela en tête, notre mission est d'aider à élever la prochaine génération de Défenseurs Cybersécuritaires pour contrer les attaques informatiques. Aussi difficile que cela puisse être, ce type de travail a un impact concret dans le monde réel. Consultez l'histoire ci-dessous qui démontre l'impact que les Défenseurs Cybersécuritaires peuvent avoir :
- Exposition des activités et de l'infrastructure de POLONIUM ciblant des organisations israéliennes : https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C

### Classification des adversaires

Il existe 3 grandes catégories que nous utilisons pour classer les adversaires : **hacktivistes, cybercriminels et acteurs sponsorisés par des nations**.

Les hacktivistes ne sont pas affiliés à un gouvernement spécifique et ne recherchent généralement pas d'argent. Ils croient passionnément en une sorte d'idéalisme et utilisent les cyberattaques pour promouvoir leur mission.
Caractéristiques principales :
- Piratage pour diffuser un idéalisme
- Cherchent le changement politique ou social
- Pas nécessairement les plus avancés techniquement
- Exemples : Cult of the Dead Cow / Anonymous

Les cybercriminels piratent principalement pour des gains financiers.
Caractéristiques principales :
- Motivés par l'argent
- Ciblage indiscriminé
- Ransomware / Fraudes commerciales / Piratage et divulgation
- Niveau d'organisation variable 
- Loups solitaires et mafias organisées

Les acteurs sponsorisés par des nations agissent au nom de leur gouvernement. De nombreux gouvernements financent et dirigent des groupes de piratage en ligne avec leurs objectifs, qu'ils soient politiques, financiers, liés à la défense, etc.
- Spons