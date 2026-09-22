```markdown
---
title: "Else-if Bedingung"
draft: false
weight: 2
---

Im letzten Abschnitt haben wir die grundlegenden If-Else-Bedingungen kennengelernt. Wenn du eine kurze Auffrischung benötigst, kannst du den Abschnitt <a href="../conditional-statements/"> Konditionale Aussagen</a> überprüfen.

In diesem Abschnitt erweitern wir unser Wissen und führen eine neue Bedingung namens "elif" ein.

### Elif Bedingung

Das **Elif Schlüsselwort** repräsentiert die "else-if"-Bedingung. Ein Beispiel aus der realen Welt könnte sein: Wenn ich wirklich hungrig bin, esse ich einen Kuchen, sonst, wenn ich nur ein bisschen hungrig bin, esse ich einen Apfel, ansonsten esse ich gar nichts. Du siehst, dass es verwendet wird, wenn man eine weitere Bedingung prüfen möchte, falls die erste nicht zutrifft.

```python
# Das ist die grundlegende Syntax für elif
if Ausdruck:
    Anweisung(en)
elif Ausdruck:
    Anweisung(en)
else:
    Anweisung(en)
```

#### Lass uns ein Beispiel betrachten
```python
# Das ist ein Beispiel
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
Da wir sehen können, dass die erste Aussage `1 größer als 3` falsch ist, wird sie zu `false` ausgewertet. Der Inhalt der `if`-Anweisung wird nicht ausgeführt. Dann wird die `elif`-Anweisung geprüft, `1 gleich 3`, was ebenfalls zu `false` ausgewertet wird. Der Inhalt der `elif`-Anweisung wird nicht ausgeführt. Daher wird der Inhalt von `else` ausgeführt und gedruckt.

### Achtung: `elif` ist anders als `if`  
#### Sehen wir uns zwei Beispiele an
#### Beispiel A
```python
# Das ist Beispiel A mit zwei if-Anweisungen
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('falsch')
```
Beispiel A wird ausgeben:

```
1=1
3=3
```

#### Beispiel B
```python
# Das ist ein Beispiel mit elif-Anweisungen
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('falsch')
```
Beispiel B wird ausgeben:

```
1=1
```

In Beispiel A prüfen wir zunächst die erste `if`-Anweisung (`1==1`) und bewerten sie als `true`. Der Inhalt der ersten `if`-Anweisung wird dann ausgeführt. Danach prüfen wir die zweite `if`-Anweisung (`3==3`) und bewerten sie ebenfalls als `true`. Der Inhalt der zweiten `if`-Anweisung wird ebenfalls ausgeführt.

In Beispiel B prüfen wir zunächst die erste `if`-Anweisung (`1==1`) und bewerten sie als `true`. Danach werden die `elif`- und `else`-Teile nicht mehr geprüft, da die erste Bedingung bereits erfüllt ist.

#### Herausforderung
Kannst du das Wissen, das du in Python-Basics-booleans gelernt hast, nutzen, um dein eigenes Beispiel für `elif` zu erstellen?
Vielleicht möchtest du die Booleans überprüfen, um die Herausforderung abzuschließen.
- <a href="../../data-types/booleans/"> Booleans </a>
<br/><br/>

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/7e6i4vm8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```