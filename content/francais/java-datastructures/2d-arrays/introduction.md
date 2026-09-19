---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" title="Introduction - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Qu'est-ce qu'un tableau 2D ?

Nous avons déjà appris beaucoup de choses sur les tableaux. Nous savons qu'un tableau peut contenir de nombreux types différents (entiers, chaînes, doubles, etc.), mais qu'en est-il d'un tableau qui contient des tableaux ?

![image](../img/2darray.png)

Un tableau 2D a un type tel que `int[][]` ou `String[][]`, avec deux paires de crochets. Les éléments d'un tableau 2D sont disposés en lignes et colonnes, et l'opérateur `new` des tableaux 2D spécifie à la fois le nombre de lignes et le nombre de colonnes. Par exemple,

```js javascript
int[][] A;
A = new int[3][4];
```

Cela crée un tableau 2D d'entiers (`int`) qui contient 12 éléments disposés en 3 lignes et 4 colonnes. Il existe également des initialisateurs pour les tableaux 2D. Par exemple, cette déclaration crée le tableau 3x4 illustré dans l'image ci-dessous :

```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

Un initialisateur de tableau pour un tableau 2D contient les lignes de `A`, séparées par des virgules et encadrées par des accolades. Chaque ligne, à son tour, est une liste de valeurs séparées par des virgules et encadrées par des accolades. Il existe également des littéraux de tableaux 2D avec une syntaxe similaire qui peuvent être utilisés partout, pas seulement dans les déclarations. Par exemple,

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
Tout cela s'étend naturellement aux tableaux tridimensionnels, quadridimensionnels, voire de dimensions supérieures.