---
title: "Booleans"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Les booleans sont des déclarations <font color="#005a9c">True</font> (Vrai) ou <font color="#005a9c">False</font> (Faux). Contrairement aux chaînes de caractères ou aux nombres, les <b>booleans</b> stockent des affirmations de vérité : ce que je dis est-il vrai ou faux ?

Par exemple, si je dis : "Tu es un robot", un boolean peut stocker si cette déclaration est vraie. Dans ce cas, comme tu n'es pas un robot (espérons-le !), <font color="#005a9c">False</font> sera stocké.

Quelles sont les réponses booléennes à ces questions te concernant ?

1. Je suis un humain. _______
2. J'ai 25 doigts. _______
3. J'aime les cookies. _______
4. Ma couleur préférée est le bleu. ______

Les formes les plus courantes d'opérateurs booléens sont des comparaisons comme "moins que" ou "plus grand que". Voici comment elles sont écrites en python dans le tableau ci-dessous.

| Opérateur | Description           | Opérateur | Description                  |
| --------- | --------------------- | --------- | ---------------------------- |
| `<`       | Moins que             | `>`       | Plus grand que               |
| `<=`      | Inférieur ou égal à   | `>=`      | Supérieur ou égal à          |
| `==`      | Égal à                | `!=`      | Différent de                 |

### Challenge 1
Comme d'habitude, utilisez `print` pour afficher les résultats des éléments suivants :

```python
print(5 + 8 < 10)
print(((3 + 5) * 6) == (65 - 17))
```

La première déclaration devrait retourner <font color="#005a9c">False</font>. Et la seconde devrait retourner <font color="#005a9c">True</font>.

![alt text](../../img/booleans.png "image de l'exemple ci-dessus montrant que la première est fausse et que la seconde est vraie") 

### Challenge 2
Essayez d'afficher les réponses aux expressions suivantes en utilisant `print`. Si les résultats de l'une de ces déclarations ne sont pas clairs, demandez de l'aide ! 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="#005a9c">False</font> == <font color="#005a9c">False</font>

### Challenge 3 
Essayez de créer vos propres expressions !

### Fait amusant : Connecter des booleans avec les opérateurs AND et OR 

Vous pouvez également connecter des expressions booléennes à l'aide des opérateurs AND et OR. Voici un tableau qui décrit ce qui se passe lorsque l'on connecte des booleans ensemble :

Expression  | Résultat  
------------|-----------
<font color="#005a9c">True</font> and <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">True</font> and <font color="#005a9c">False</font> | <font color="#005a9c">False</font>
<font color="#005a9c">False</font> and <font color="#005a9c">True</font> | <font color="#005a9c">False</font>
<font color="#005a9c">False</font> and <font color="#005a9c">False</font> | <font color="#005a9c">False</font>
<font color="#005a9c">True</font> or <font color="#005a9c">True</font>   | <font color="#005a9c">True</font>
<font color="#005a9c">True</font> or <font color="#005a9c">False</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">False</font> or <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>
<font color="#005a9c">False</font> or <font color="#005a9c">False</font> | <font color="#005a9c">False</font>

Pour résumer, AND nécessite que les deux expressions booléennes soient vraies, tandis qu'OR nécessite qu'au moins une des deux expressions booléennes soit vraie. Voici d'autres exemples :

- (5 < 8) and (9 != 10) produit <font color="#005a9c">True</font>, car 5 est bien inférieur à 8, et 9 est différent de 10.
- (8 <= 2) or ("h" + "e" == "he") produit <font color="#005a9c">True</font>, car "h" + "e" donne "he", même si 8 n'est pas inférieur ou égal à 2.
- (6 != 2 * 3) or (8 < 2 * 4) produit <font color="#005a9c">False</font>, car ni 6 différent de 2 * 3, ni 8 inférieur à 2 * 4, ne sont vrais.

#### Que pensez-vous que ces expressions devraient produire ?

- (11-2 < 10) and (7+3 > 10)
- (<font color="#005a9c">True</font> or 3 < 1) and (<font color="#005a9c">False</font> or 3 > 1)

<iframe title="Que pensez-vous que ces expressions devraient produire ? - Codebunga" src="https://codebunga.com/embed/c2vqd36f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>