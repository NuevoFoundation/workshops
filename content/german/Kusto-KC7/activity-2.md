---
title: "Aktivität 2: Threat Intel Spiel"
draft: false
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" title="Activity 2: Threat Intel Game - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Dokumentation:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

  // durch die "aktuellen Auswahlmöglichkeiten" gehen,
  // um die ausgewählte Option zu finden.
  // Radioboxen, die auf Optionen zeigen,
  // müssen "cc" benannt werden
  // gegebenenfalls anpassen
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

  // keine Auswahl wurde getroffen
  //
  if("?" == s)
  {
    alert("Bitte treffen Sie eine Auswahl.");
    return false;
  }

  // prüfen, ob wir die richtige
  // Auswahl getroffen haben
  //
  if(s == theAnswer)
  {
    alert("'"+s+"' ist korrekt!");
    if(urlRight)
    {
    document.location.href = urlRight;
    }
  }
  else
  {
    alert("'"+s+"' ist falsch.");
    if( urlWrong )
    {
    document.location.href = urlWrong;
    }
  }

  // "false" zurückgeben, um anzuzeigen, dass das
  // Formular nicht abgeschickt werden soll.
  // Ändern Sie dies auf "true", wenn die Formular
  // "action" valide ist,
  // d. h. auf ein gültiges CGI-Skript verweist.
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}


{{< alert theme="success" >}}**Die beste Möglichkeit, diesen Abschnitt abzuschließen, besteht darin, das Video abzuspielen und parallel den untenstehenden Text zu lesen.**{{< /alert >}}

### Was ist Attribution?

Ein zentrales Thema in der Welt der Cybersicherheit, dem Sie begegnen werden, wird als **Attribution** bezeichnet. Attribution in der Cybersicherheit bezieht sich auf den Prozess des Nachverfolgens, Identifizierens und allgemeinen Zuschreibens von Schuld an den Urheber eines Cyberangriffs. Cyberangriffe, auch bekannt als *Hacking*, sind Versuche eines Gegners, Zugriff auf Systeme zu erlangen, um Informationen zu ändern, zu stehlen, zu zerstören oder offenzulegen. Beispiele für Methoden zur Durchführung eines Cyberangriffs sind:
- **Malware** - Kurz für schadhafte Software, ist jeder Code, der mit der Absicht erstellt wurde, Schaden zu verursachen, wie ein Virus oder ein Wurm.
- **Phishing** - Ein Angriff, der E-Mail, Textnachrichten (SMS) oder soziale Medien nutzt, um ein Opfer dazu zu bewegen, sensible Informationen preiszugeben oder eine schädliche Datei herunterzuladen. Dies ähnelt dem sogenannten Catfishing.
- **Ransomware** - Bösartiger Code, der darauf abzielt, Opfer aus ihren eigenen Systemen auszusperren, um ein Lösegeld, oft in Form von Geld, vom Opfer zu verlangen, damit sie wieder Zugriff auf ihre gesperrten Systeme oder Daten erhalten.
- **Password Spraying** - Ein Angreifer erwirbt eine Liste von Benutzernamen und versucht dann, sich mit allen Benutzernamen unter Verwendung desselben Passworts anzumelden, und wiederholt den Vorgang mit neuen Passwörtern, bis er Zugriff auf das System erhält.

### Herausforderungen bei der Attribution

Obwohl es ein zentraler Bestandteil der Cybersicherheit ist, kann die Attribution selbst für Cybersicherheitsexperten eine Herausforderung sein. Experten müssen oft umfangreiche forensische Untersuchungen durchführen und viele Daten analysieren, um Hinweise darauf zu finden, wer für Angriffe verantwortlich sein könnte. Einige Dinge, die Experten betrachten, um dabei zu helfen, sind:
- **Historische Daten** - Gibt es wiederholte Muster, die über mehrere Cyberangriffe hinweg verwendet wurden und auf bestimmte Angreifer hinweisen könnten?
- **Absicht oder Motive** - Gibt es Angriffe, die speziell Bildungseinrichtungen ins Visier nehmen? Könnte ein Cyberangriff mit einem öffentlich beobachtbaren politischen Konflikt zwischen Ländern zusammenfallen, die es sich nicht leisten können, mit Raketen, Truppen oder sonstigem, was als **kinetische Kriegsführung** bezeichnet wird, mit einem anderen Land in Konflikt zu geraten?
- **Geografisches Angriffsmuster** - Werden überwiegend Organisationen in einem bestimmten Land angegriffen? Oder ist eine Entität hauptsächlich auf der ganzen Welt tätig, mit Ausnahme eines Landes... möglicherweise ihres eigenen?

Die Schwierigkeit der Cyber-Attribution macht sie zu einer attraktiven Angriffsmethode für Gruppen mit dem Wissen, den Ressourcen und der Motivation, solche Angriffe zu verschleiern. Mit diesem Hintergrund ist es unsere Mission, die nächste Generation von Cyberverteidigern auszubilden, um Cyberangriffe zu bekämpfen. So schwierig diese Arbeit auch sein mag, hat sie reale Auswirkungen. Schauen Sie sich diese Geschichte an, die das Maß an Wirkung aufzeigt, das Cyberverteidiger haben können:
- Aufdeckung der Aktivitäten und Infrastruktur von POLONIUM, die auf israelische Organisationen abzielen: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C

### Klassifikationen von Angreifern

Es gibt drei Hauptkategorien, die wir zur Klassifizierung von Angreifern verwenden: **Hacktivisten, Cyberkriminelle und staatlich unterstützte Akteure**.

Hacktivisten sind Personen, die nicht mit einer bestimmten Regierung verbunden sind und in der Regel nicht wegen Geld handeln. Sie glauben leidenschaftlich an eine Art Ideal und nutzen Cyberangriffe, um ihre Mission voranzutreiben.  
Wesentliche Merkmale:
- Hacking, um Idealismus zu verbreiten
- Streben nach politischer oder sozialer Veränderung
- Nicht unbedingt technisch besonders fortgeschritten
- Z. B. Cult of the Dead Cow / Anonymous

Cyberkriminelle hacken mit der Hauptmotivation, finanzielle Gewinne zu erzielen.  
Wesentliche Merkmale:
- Motiviert durch Geld
- Indiskriminierendes Targeting
- Ransomware / Geschäftsbetrügereien / Hack und Leak
- Organisationsgrad variiert
- Einzelgänger & organisierte Mafia 

Staatlich unterstützte Akteure operieren im Auftrag ihrer Regierung. Viele Regierungen finanzieren und leiten