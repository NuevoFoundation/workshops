```markdown
---
title: "Clé de réponse - Python-Pixel"
draft: false
hidden: true
---

## Activité1
Ceci est un exemple de réponse pour créer une planche de couleur bleue avec une largeur de 100 et une hauteur de 100.
```python
from PIL import Image
width=100
height=100
color='blue'
img = Image.new('RGB', (width, height), color)
img.save('pixel-activity1.png')
```

## Activité2
Ceci est un exemple de réponse pour tracer une ligne du milieu de la planche de couleur de l'Activité1 jusqu'à son coin inférieur droit.
```python
#Créez votre planche de couleur
from PIL import Image

# configurez d'abord l'image
img = Image.new('RGB', (60, 30), 'red')

initial_position_x = 50
initial_position_y = 50
width = 100
height = 100
color = (0,0,0) #faire le changement ici
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

## Activité3
Ceci est un exemple de réponse pour créer un H coloré.
Référez-vous à cette image :
<img src="../media/ac3sample.png">

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'pink')
#Cela utilise des boucles while imbriquées pour changer la planche de couleur.
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

## Activité4
Ceci est un exemple de réponse pour créer un filtre vert.
```python
from PIL import Image
#Ouvrez l'image du chat
img = Image.open("cat.png");
#Filtres bleus
for i in range(img.size[0]):    # pour chaque colonne :
    for j in range(img.size[1]):    # pour chaque ligne
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, color[1], 0))# ajustez la couleur en conséquence
#Enregistrez le chat après l'application du filtre
img.save("Mycat.png")
```

## Activité5
Ceci est un exemple de réponse pour créer un filtre gris pour la moitié gauche du chat.
```python
from PIL import Image
#Ouvrez l'image du chat
img = Image.open("cat.png")
#Filtres gris
for i in range((img.size[0] // 2)):    #pour les colonnes de la première moitié :
    for j in range((img.size[1]):    
            color = img.getpixel( (i,j) )
            #Astuce : Obtenez une couleur : GRIS
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# ajustez la couleur en conséquence
#Enregistrez le chat après l'application du filtre
img.save("Mycat.png")
```

## Activité6
Ceci est un exemple de réponse pour découper la moitié droite du chat.
```python
from PIL import Image
#Ouvrez l'image du chat
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurez une nouvelle image avec la moitié de la largeur et de la hauteur
newimg=Image.new('RGB',(width//2, height) )
#Ajustez les pixels pour la nouvelle image
for i in range(width//2, width):    
    for j in range(height):    # pour chaque ligne
            color = img.getpixel( (i,j) ) #obtenir la couleur de l'image originale
            newimg.putpixel((i,j),color)# ajoutez la couleur dans la nouvelle image
newimg.save("Mycat.png")
```

## Activité7
Ceci est un exemple de réponse pour changer la couleur d'arrière-plan du jaune au noir.
```python
newcolor=(0,0,0)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #obtenir la couleur de l'image originale
            if color == coloryellow: #si c'est du jaune
                newimg.putpixel((i,j),newcolor)# changer la couleur en noir
            else:
                newimg.putpixel((i,j),color)# sinon, reste la même
newimg.save("newnuevo.png")
```

## Activité8
Ceci est un exemple de réponse pour inverser votre chat de gauche à droite.
```python
from PIL import Image
#Ouvrez l'image du chat
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurez une nouvelle image avec les mêmes dimensions
newimg=Image.new('RGB',(width,height) )
#Ajustez les pixels pour la nouvelle image
for i in range(width):    
    for j in range(height):    # pour chaque ligne
            widthNew = width - 1 - i#Quelle devrait être votre largeurNew si nous voulons inverser notre image de gauche à droite ?
            color = img.getpixel( (widthNew, j) ) #obtenir la couleur de l'image originale
            newimg.putpixel((i,j),color)# ajoutez la couleur dans la nouvelle image
newimg.save("Mycat.png")
```

## Activité9
Ceci est un exemple de réponse pour faire pivoter votre chat de 90 degrés dans le sens antihoraire.
```python
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurez une nouvelle image avec une largeur et hauteur inversées
newimg=Image.new('RGB',(height,width) )
#Ajustez les pixels pour la nouvelle image
for i in range(width):         # pour chaque colonne
    for j in range(height):    # pour chaque ligne
            color = img.getpixel( (i, j) ) #obtenir la couleur de l'image originale
            newimg.putpixel((j, i),color) # ajoutez la couleur dans la nouvelle image
newimg.save("My