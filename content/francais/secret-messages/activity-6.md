```markdown
---
title: "Activité 6 - Fonctions"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/hSsqsvhyYAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Très bien !

Vous avez déjà réalisé une grande partie du programme !

Dans cette activité, nous allons utiliser **des fonctions** pour regrouper des parties du code.

{{% notice tip %}}

### Fonctions
Les fonctions nous permettent de diviser le travail d'un programme en tâches plus petites, séparées de la section principale, c'est-à-dire de la fonction `main`.

On peut considérer les fonctions comme une machine qui, une fois activée, exécute des instructions pour produire un résultat final. Vous pouvez avoir plusieurs machines qui réalisent différents processus, et nous identifions chacune d'elles par un nom et par le type de résultat qu'elle renvoie.

Dans cette activité, nous utiliserons des fonctions avec un type de retour **void** (vide). Ces fonctions exécutent simplement des instructions et ne renvoient rien.

Pour déclarer (créer) une fonction, nous devons utiliser la structure suivante **en dehors de la fonction principale** :
```
void nom_fonction(){
    //Code ici
}
```
Analysons ce code plus en détail :
1. Le **type de retour** de la fonction indique le type d'objet que la fonction va renvoyer. Dans ce cas, nous utilisons `void` pour spécifier que cette fonction ne renvoie rien.
2. Le **nom** de la fonction est `nom_fonction`.
3. Les parenthèses `()` sont ajoutées après le nom pour identifier qu'il s'agit d'une fonction.
4. Les accolades `{}` déterminent le bloc de code qui sera exécuté lorsque nous utilisons la fonction.

### Appeler une fonction

Étant donné que les fonctions que nous déclarons se trouvent en dehors de la fonction `main()`, lorsque nous appuyons sur **Run**, le bloc de code que nous écrivons dans les fonctions ne sera pas exécuté. Par conséquent, dans la fonction `main()`, nous devons **appeler** la fonction. Nous devons indiquer au programme à quel moment nous voulons exécuter ce bloc de code. Pour appeler une fonction, nous devons utiliser l'instruction suivante :
```
nom_fonction();
```
Il suffit d'écrire le nom que nous avons attribué à la fonction, suivi des parenthèses, et de terminer par un point-virgule `;`.
Cela provoquera l'exécution des instructions contenues dans la fonction `nom_fonction()`.

### Paramètres d'une fonction
Lorsqu'on déclare une fonction, nous pouvons lui passer des **paramètres**. Ce sont des objets supplémentaires que la fonction peut utiliser pour exécuter ses instructions.
Les paramètres se placent à l'intérieur des parenthèses de la fonction. Par exemple :
```
void nom_fonction(int somme, int &nombre){
    nombre += somme;
}
```
Et dans la fonction `main()`, nous pouvons appeler `nom_fonction` avec des paramètres :
```
int main(){
    int x = 25;
    int y = 5;
    nom_fonction(y, x);
}
```
Voyons en détail ce que nous avons fait :
1. Lors de la déclaration de `nom_fonction`, nous avons écrit dans les parenthèses les variables que nous allons passer à la fonction. Ensuite, dans le corps de la fonction, nous pouvons utiliser ces variables.
2. Dans `main`, nous avions déjà deux variables déclarées, que nous avons ensuite passées comme paramètres à la fonction créée `nom_fonction`. Ce faisant, la variable `somme` devient égale à la variable `y`. 
3. La variable `nombre` contient ce symbole `&` devant elle. Cela signifie que si nous modifions la variable dans la fonction, la variable que nous passons à celle-ci dans la fonction principale sera également modifiée. Autrement dit, la variable `x` sera modifiée par la fonction car nous la passons **par référence** grâce à ce symbole en début de déclaration. Si nous ne mettons pas ce symbole, même si nous modifions sa valeur dans la fonction, nous ne verrons pas de changement dans `main`.
{{% /notice %}}

C'est génial !
Maintenant, créons 2 fonctions - une pour crypter le message, et une autre pour le décrypter. Pour cela, nous allons utiliser du code que nous avions déjà et programmer quelque chose de nouveau.

1. Tout d'abord, déclarez une fonction de type de retour `void`, comme pour crypter, mais pour décrypter cette fois-ci. Nommez cette fonction `decrypt()`.

2. Copiez le contenu de la fonction `encrypt()` dans la nouvelle fonction `decrypt`.

3. Dans la variable `somme`, au lieu d'ajouter, soustrayez le caractère du nom et le caractère du mot-clé, et ajoutez une lettre `a` (au lieu de soustraire) afin que le caractère final soit une lettre de l'alphabet et non un caractère aléatoire.

4. Modifiez la condition pour boucler dans l'alphabet. Au lieu de vérifier si la `somme` est supérieure au caractère `z`, vérifiez si la `somme` est inférieure à `a` ; si c'est le cas, ajoutez `25` à la variable, au lieu de soustraire.

5. Dans la fonction `main`, appelez la fonction correspondante dans la condition `if` selon si nous souhaitons crypter ou décrypter un message.

Lorsque vous avez terminé, vous pouvez appuyer sur **Run** et tester les exemples suivants :
```
programmer
1
reina
```
```
witvczxipigrmg
2
reina
```
Vous devriez également essayer d'utiliser vos propres mots secrets !

{{< alert theme="warning" >}} **Attention :** dans ce programme, nous devons toujours écrire les chaînes et caractères en **lettres minuscules**. {{< /alert >}}

Souvenez-vous que vous pouvez toujours revenir aux activités précédentes pour revoir quoi que ce soit !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-6-english" target="_blank">Lancer Replit</a>

{{< alert theme="danger" >}}**Important :** Pour coller dans la console, faites un clic droit sur la console et cliquez sur "Coller". Sinon, l'opération de collage peut ne pas fonctionner correctement. {{< /alert >}}
```