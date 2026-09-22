---
title: "Tutorial 1: Einführung in Threat Intelligence"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" title="Tutorial 1: Intro to Threat Intelligence - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} Während Sie diesen Workshop durchlaufen, werden Sie feststellen, dass jede Seite mit einem Video die Lektion sowohl in Video- als auch in schriftlicher Form dupliziert. Sie können die Methode wählen, die besser zu Ihrem Lerntyp passt.{{< /notice >}}
## Was ist Threat Intelligence?

**Threat Intelligence Analysten**:

{{<icon name="user" size="large">}} Lernen Sie über Gegner ... und tauschen Sie Wissen mit Partnern aus dem öffentlichen und privaten Sektor aus

{{<icon name="time" size="large">}} Verfolgen Sie Gegner über Zeit ... um die sich verändernde Bedrohungslandschaft zu verstehen

{{<icon name="lock" size="large">}} Implementieren Sie Verteidigungen ... und arbeiten Sie mit Produktentwicklungsteams zusammen, um Kunden zu schützen

Daten allein sind nicht gleich Intelligenz. Sicherheitsprotokolle erzählen von sich aus nichts Bedeutsames, bis sie verarbeitet werden. Sobald ein Threat Intelligence Analyst die Daten und Informationen im Kontext der Gegner, die er verfolgt, und der sich verändernden Bedrohungslandschaft analysiert, kann er anfangen, eine Geschichte und einen Zeitverlauf darüber zu erstellen, was möglicherweise passiert ist. Zu verstehen, was diese Bedrohungen bedeuten, warum sie aufgetreten sind und wie sie Ihr Unternehmen beeinflusst haben ... das ist wahre Threat Intelligence.

## Was ist die Cyber Kill Chain?

Die Cyber Kill Chain, ursprünglich von Lockheed Martin entwickelt, ist ein Framework zur Identifizierung und Verhinderung von Cyberangriffen. Dieses Framework identifiziert 7 Schritte, die Gegner abschließen müssen, um ihr Ziel zu erreichen  [^1] .
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">


## Das Diamond Model verstehen

Das Diamond Model der Intrusionsanalyse bietet eine Methode zur Analyse der Merkmale von Cyberangriffen. Dieses Modell betont die Beziehungen zwischen 4 Komponenten: **dem Gegner, Fähigkeiten, Infrastruktur und Opfer**. Die Theorie, auf der es basiert, besagt, dass bei jedem Cyberangriff "ein **Gegner** einen Schritt in Richtung eines beabsichtigten Ziels unternimmt, indem er eine **Fähigkeit** über die **Infrastruktur** gegen ein **Opfer** einsetzt, um ein Ergebnis zu erzielen"  [^2] .
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## Was ist KC7?

Das führt uns zu der Frage, warum wir dieses Spiel KC7 genannt haben; weil es den Leuten hilft, die 7 Phasen der oben beschriebenen Cyber Kill Chain Schritt für Schritt zu durchlaufen.

**KC7 ist ein Spiel, das entwickelt wurde, um Menschen beizubringen, wie sie Cyber-Sicherheitswissen anwenden und Analysefähigkeiten anhand realistischer Daten entwickeln können.** Es ist eine einzigartige und immersive Cyber-Sicherheitsanalyse-Simulation, die von Sicherheitsexperten im Microsoft Threat Intelligence Center (MSTIC) entwickelt wurde, einem Team, das sich auf die Verfolgung der weltweit raffiniertesten Cyber-Akteure konzentriert. Das Beste an diesen Daten ist, dass sie fiktiv und durch ein Python-Skript generiert sind, was bedeutet, dass die Teilnehmer echte Techniken lernen können, ohne die Gefahren des Umgangs mit privaten Daten. Dieses Training gibt den Teilnehmern die Möglichkeit, Fähigkeiten der Cyber-Bedrohungsanalyse zu erlernen und anzuwenden, während sie ein simuliertes Unternehmen gegen Hacker verteidigen.

{{< alert theme="info" >}} Jetzt, da wir einige Themen zur Bedrohungsaufklärung behandelt haben, gehen wir weiter. Keine Sorge, wenn Sie das noch nicht ganz verstehen, diese Themen werden im weiteren Verlauf der Schulung leichter zu erfassen sein. {{< /alert >}}