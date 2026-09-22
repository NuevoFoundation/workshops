```markdown
---
title: "Schritt 4: Daten vorbereiten"
description: "Grundlagen des maschinellen Lernens"
prereq: "keine"
difficulties: ["mittel"]
draft: false
weight: 4
---

Bis jetzt haben wir unseren Datensatz importiert. Im echten Leben hat jeder Fußballspieler eine bestimmte Position. Unterschiedliche Positionen erfordern Stärken in unterschiedlichen Attributen. Daher wollen wir den Fokus auf die Stürmer (Striker) legen.

Zuerst listen wir alle Positionen auf.
Dieser Befehl sieht zwar etwas länger aus, aber er erfüllt seinen Zweck. Die `fifa_data['Position']`-Spalte wählt die Spalte für die Positionen im `fifa_data`, die `dropna()`-Funktion entfernt leere Zellen, und `unique()` entfernt alle Duplikate für uns.

```python
# um herauszufinden, wie viele Positionen es gibt
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

Nun können wir die Daten nach der Position "ST" filtern. Es wird empfohlen, andere Positionen auszuwählen, um die Unterschiede zu sehen.

```python
# Spieler nach Position abrufen
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Lassen Sie uns ein Histogramm für die Gesamtbewertungen aller Stürmer erstellen.

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![Output image](../images/output_11_1.png)

Als nächstes wollen wir die Daten in zwei Sets aufteilen: eines wird verwendet, um das Modell zu trainieren, das andere wird verwendet, um zu überprüfen, ob das trainierte Modell gut ist.

Man könnte denken, dass man so viele Daten wie möglich für das Training belassen sollte, da dies das Modell verbessert. Das Modell passt besser, aber nur für die Trainingsdaten. Wenn Sie das Modell auf Testdaten anwenden, könnte die Vorhersagegenauigkeit abnehmen. Dies nennt man "Overfitting."

Jetzt lassen wir 25% der Daten für Tests übrig.

```python
# Daten zufällig in train_data und test_data aufteilen
# Sie können das Verhältnis von test_size ändern, um zu sehen, was passiert
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# die Anzahl der Spieler in train_data und test_data ausgeben
# len() gibt die Anzahl der Spieler in numerischer Form aus
# str() konvertiert den numerischen Wert in einen String
print("Die Anzahl der Trainingsdaten beträgt " + str(len(train_data)))
print("Die Anzahl der Testdaten beträgt " + str(len(test_data)))
```

    Die Anzahl der Trainingsdaten beträgt 1614
    Die Anzahl der Testdaten beträgt 538
```