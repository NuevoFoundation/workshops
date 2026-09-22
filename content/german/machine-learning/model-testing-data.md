---
title: "Schritt 7: Teste das Modell mit Testdaten"
description: "Grundlagen des maschinellen Lernens"
prereq: "keine"
difficulties: ["mittelschwer"]
draft: false
weight: 7
---

Jetzt verwenden wir das trainierte Modell, um Spieler in `test_data` zu schätzen. Ähnlich wie bei `train_data` erstellen wir `x_test` und `y_test`.

`model.predict()` wird eine Liste von vorhergesagten Ergebnissen erzeugen.

```python
# Wir möchten die Testdaten nach dem Zielwert ("Overall") sortieren
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

Vergleichen wir die Ergebnisse mit den tatsächlichen Gesamtwertungen.

```python
# Füge eine neue Spalte mit den vorhergesagten Gesamtwertungen zu test_data hinzu
test_data['Vorhergesagter Gesamtwert'] = y_pred.copy()

# Füge eine neue Spalte mit dem prozentualen Unterschied der Vorhersage zu test_data hinzu
difference = (y_pred - y_test) / y_test * 100
test_data['Unterschied (%)'] = difference

# Drucke die Ergebnisse
test_data[["Name", "Nationalität", "Verein", "Gesamtwert", "Vorhergesagter Gesamtwert", "Unterschied (%)"]]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Name</th>
      <th>Nationalität</th>
      <th>Verein</th>
      <th>Gesamtwert</th>
      <th>Vorhergesagter Gesamtwert</th>
      <th>Unterschied (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Cristiano Ronaldo</td>
      <td>Portugal</td>
      <td>Juventus</td>
      <td>94</td>
      <td>91.973701</td>
      <td>-2.155638</td>
    </tr>
    <tr>
      <th>10</th>
      <td>R. Lewandowski</td>
      <td>Polen</td>
      <td>FC Bayern München</td>
      <td>90</td>
      <td>88.135513</td>
      <td>-2.071652</td>
    </tr>
    <tr>
      <th>23</th>
      <td>S. Agüero</td>
      <td>Argentinien</td>
      <td>Manchester City</td>
      <td>89</td>
      <td>87.807637</td>
      <td>-1.339733</td>
    </tr>
    <tr>
      <th>48</th>
      <td>C. Immobile</td>
      <td>Italien</td>
      <td>Lazio</td>
      <td>87</td>
      <td>85.933234</td>
      <td>-1.226168</td>
    </tr>
    <tr>
      <th>159</th>
      <td>Louri Beretta</td>
      <td>Brasilien</td>
      <td>Atlético Mineiro</td>
      <td>83</td>
      <td>81.583941</td>
      <td>-1.706096</td>
    </tr>
    <tr>
      <th>193</th>
      <td>Rodrigo</td>
      <td>Spanien</td>
      <td>Valencia CF</td>
      <td>83</td>
      <td>81.784946</td>
      <td>-1.463921</td>
    </tr>
    <tr>
      <th>179</th>
      <td>S. Gnabry</td>
      <td>Deutschland</td>
      <td>FC Bayern München</td>
      <td>83</td>
      <td>79.978980</td>
      <td>-3.639783</td>
    </tr>
    <tr>
      <th>315</th>
      <td>David Villa</td>
      <td>Spanien</td>
      <td>New York City FC</td>
      <td>82</td>
      <td>81.259066</td>
      <td>-0.903578</td>
    </tr>
    <tr>
      <th>362</th>
      <td>Paco Alcácer</td>
      <td>Spanien</td>
      <td>Borussia Dortmund</td>
      <td>81</td>
      <td>81.836532</td>
      <td>1.032756</td>
    </tr>
    <tr>
      <th>518</th>
      <td>Alexandre Pato</td>
      <td>Brasilien</td>
      <td>Tianjin Quanjian FC</td>
      <td>80</td>
      <td>78.322831</td>
      <td>-2.096461</td>
    </tr>
    <!-- Other rows omitted for brevity -->
  </tbody>
</table>
<p>538 Zeilen × 6 Spalten</p>
</div>

Ist das nicht beeindruckend? Mit diesem Ergebnis können Sie das Modell sicher verwenden, um die Gesamtwertungen von beliebigen Fußballspielern weltweit zu schätzen!

Machen wir nun einige Diagramme, um das Ganze zu visualisieren.

```python
# Ergebnisse plotten
plt.scatter(range(0,y_test.shape[0]), y_test,  color='blue', label="Tatsächliche Werte")
plt.plot(range(0,y_test.shape[0]), y_pred, color='red', label="Vorhergesagte Werte")

# Achsenbeschriftungen, Legendenelemente hinzufügen
plt.xticks(())
plt.xlabel("Spieler (Sortiert nach den tatsächlichen Gesamtwertungen)")
plt.ylabel("Gesamtwertungen")
plt.legend(loc='upper right')
plt.show()
```

![Endgültiges Diagramm](../images/output_27_0.png)