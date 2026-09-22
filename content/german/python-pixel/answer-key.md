```markdown
---
title: "Antwortschlüssel - Python-Pixel"
draft: false
hidden: true
---

## Aktivität1
Dies ist die Musterantwort, um ein blaues Farbbrett mit einer Breite von 100 und einer Höhe von 100 zu erstellen.
```python
from PIL import Image
width=100
height=100
color='blue'
img = Image.new('RGB', (width, height), color)
img.save('pixel-activity1.png')
```

## Aktivität2
Dies ist die Musterantwort, um eine Linie von der Mitte des Farbbretts aus Aktivität1 bis zu seiner rechten unteren Ecke zu zeichnen.
```python
#Erstelle dein Farbbrett
from PIL import Image

# Richten Sie zuerst das Bild ein
img = Image.new('RGB', (60, 30), 'red')

initial_position_x = 50
initial_position_y = 50
width = 100
height = 100
color = (0,0,0) #Änderung hier vornehmen
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

## Aktivität3
Dies ist die Musterantwort, um ein buntes H zu erstellen.
Siehe Bild dazu:
<img src="../media/ac3sample.png">

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'pink')
#Dies verwendet eine verschachtelte While-Schleife, um das Farbbrett zu ändern.
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for y in range(12,17 ):
  for x in range(15, 30):
    img.putpixel( (x,y), (255, 230, 20))
img.save('pixel-activity3.png')
```

## Aktivität4
Dies ist die Musterantwort, um einen grünen Filter zu erstellen.
```python
from PIL import Image
#Öffne das Katzenbild
img = Image.open("cat.png");
#Blaue Filter
for i in range(img.size[0]):    # für jede Spalte:
    for j in range(img.size[1]):    # Für jede Zeile
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, color[1], 0))# Farbe entsprechend festlegen
#Speichere die Katze nach der Filterung
img.save("Mycat.png")
```

## Aktivität5
Dies ist die Musterantwort, um einen Graufilter für die linke Hälfte der Katze zu erstellen.
```python
from PIL import Image
#Öffne das Katzenbild
img = Image.open("cat.png")
#Graue Filter
for i in range((img.size[0] // 2)):    #für die erste Hälfte der Spalten:
    for j in range((img.size[1]):    
            color = img.getpixel( (i,j) )
            #Hervorhebung: Farbe abrufen: GRAU
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# Farbe entsprechend festlegen
#Speichere die Katze nach der Filterung
img.save("Mycat.png")
```

## Aktivität6
Dies ist die Musterantwort, um die rechte Hälfte der Katze zuzuschneiden.
```python
from PIL import Image
#Öffne das Katzenbild
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Erstellen Sie ein neues Bild mit der halben Breite und der vollen Höhe
newimg=Image.new('RGB',(width//2, height) )
#Setze die Pixel für das neue Bild
for i in range(width//2, width):    
    for j in range(height):    # Für jede Zeile
            color = img.getpixel( (i,j) ) #Farbe aus dem Originalbild abrufen
            newimg.putpixel((i,j),color)# Farbe in das neue Bild einfügen
newimg.save("Mycat.png")
```

## Aktivität7
Dies ist die Musterantwort, um die Hintergrundfarbe von Gelb zu Schwarz zu ändern.
```python
newcolor=(0,0,0)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #Farbe aus dem Originalbild abrufen
            if color == coloryellow: #wenn es gelb ist
                newimg.putpixel((i,j),newcolor)# Farbe zu Schwarz ändern
            else:
                newimg.putpixel((i,j),color)# bleibt ansonsten gleich
newimg.save("newnuevo.png")
```

## Aktivität8
Dies ist die Musterantwort, um deine Katze von links nach rechts zu spiegeln.
```python
from PIL import Image
#Öffne das Katzenbild
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Erstellen Sie ein neues Bild mit der gleichen Breite und Höhe
newimg=Image.new('RGB',(width,height) )
#Setze die Pixel für das neue Bild
for i in range(width):    
    for j in range(height):    # Für jede Zeile
            widthNew = width - 1 - i#Was sollte Ihr widthNew sein, wenn wir unser Bild von links nach rechts spiegeln möchten?
            color = img.getpixel( (widthNew, j) ) #Farbe aus dem Originalbild abrufen
            newimg.putpixel((i,j),color)# Farbe in das neue Bild einfügen
newimg.save("Mycat.png")
```

## Aktivität9
Dies ist die Musterantwort, um deine Katze um 90 Grad gegen den Uhrzeigersinn zu drehen.
```python
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Erstellen Sie ein neues Bild mit vertauschten Breite und Höhe
newimg=Image.new('RGB',(height,width) )
#Setze die Pixel für das neue Bild
for i in range(width):         # Für jede Spalte
    for j in range(height):    # Für jede Zeile
            color = img.getpixel( (i, j) ) #Farbe aus dem Originalbild abrufen
            newimg.putpixel((j, i),color) # Farbe in das neue Bild einfügen
newimg.save("Mycat.png")
```
```