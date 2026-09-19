```markdown
---
title: "Java : Notions de Base - Corrigé"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activité-1 : Instructions d'affichage et commentaires
## Hello World
```java
class Main {
  public static void main(String[] args) {
    System.out.print("Hello World");
    System.out.print(2020);
    System.out.print('@'); 
  }
}
```
Sortie : 

    Hello World2020@

## Chouette
```java
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    System.out.println("    ​, ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \\");
    System.out.println("​`\\/{o,o}  <   Bonjour, je suis Minerva. L'ami de Patrick !  |");
    System.out.println("​ ​/ /)  )    \\ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /");
    System.out.println("​/,--\"-\"- ");
  }
}
```
Sortie :

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Bonjour, je suis Minerva. L'ami de Patrick !  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# activité-2 : Types et Variables

## TypeDeDonnées
```java
class Main {
  public static void main(String[] args) {
    String meilleurAmi = "Minerva";
    int nombreDAmis = 4;
    double GPA = 3.6;
    char sensDeLaVie = '$';
    boolean aimeLaMusique = true;
  }
}
```

## Variable
Sortie :

```
x : 2.3 y : 2.3 z : 0
```

# activité-3 : Opérateurs

```java
        int notePatrick = 88;
        int noteTom = 89;
        int noteMary = 95;
        int noteChris = 84;
        int noteJen = 92;

        moyenne = (notePatrick + noteTom + noteMary + noteChris + noteJen)/5;

        boolean plusDe60 = (moyenne > 60);
        boolean plusDe70 = (moyenne > 70);
        boolean plusDe80 = (moyenne > 80);
        boolean plusDe90 = (moyenne > 90);
```
Sortie :

```
---------------------------
     Rapport des Notes     
---------------------------

Notes des étudiants :         
- Patrick : 88
- Tom : 89
- Mary : 95
- Chris : 84
- Jen : 92

Moyenne de la classe : 89.0
- Moyenne au-dessus de 60 : true
- Moyenne au-dessus de 70 : true
- Moyenne au-dessus de 80 : true
- Moyenne au-dessus de 90 : false
```


# activité-4 : Structures de Contrôle

## Instruction If
```java
int heureActuelle = ... ; // variable qui stocke l'heure actuelle entre 0 - 23
if(heureActuelle < 12){
    System.out.println("Bonjour");
}else if(heureActuelle < 20){
    System.out.println("Bon Après-Midi");
}else{
    System.out.println("Bonne Nuit");
}
```

## Boucle While
```java
    int monTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        monTotal += num2;
    }
```
Sortie :

```
Réponse calculée dans une boucle while : 5050
Réponse calculée dans une boucle for : 5050
```

# activité-5 : Méthodes

## Pyramide
```java
  public static int calculPyramide(int niveau){
      int total = 0;
      for(int i = 1; i <= niveau; i++){
          total = total + i*i;
      }
      return total;
  }
```

Sortie :

```
Félicitations ! Défi Résolu !
```

# activité-6 : Objet et Classes

## Classe Oiseau
```java
public class Bird{
  // variables d'instance
  private String espece;
  private String nom;
  private String loisir;
  private int age;
  private boolean aimeLaMusique;

  // constructeur
  public Bird(String espece_input, String nom_input, String loisir_input, int age_input, boolean aimeLaMusique_input){
    espece = espece_input;
    nom = nom_input;
    loisir = loisir_input;
    age = age_input;
    aimeLaMusique = aimeLaMusique_input;
  }

  public String getEspece(){
    return espece;
  }

  public String getNom(){
    return nom;
  }

  public String getLoisir(){
    return loisir;
  }

  public int getAge(){
    return age;
  }

  public boolean getAimeLaMusique(){
    return aimeLaMusique;
  }

  public String toString(){
    String infos = "";
    infos = infos + "Bonjour, je m'appelle " + getNom() + 
           ". Je suis un(e) " + getAge() + " ans vieux/vieille " + getEspece() + 
           " qui aime " + getLoisir() + ". ";
    if(getAimeLaMusique()){
        infos = infos + "J'aime aussi beaucoup la musique !";
    }else{        
        infos = infos + "Cependant, je n'aime pas la musique !";
    }
    return infos;
  }

}
```

## Implémentation de main() : Pas de réponse correcte, juste un exercice
```java
public static void main(String[] args) {
    Bird patrick = new Bird("canard", "Patrick", "traîner avec des amis", 15, true);
    System.out.print(patrick);
}
```

Sortie :

```
Bonjour, je m'appelle Patrick. Je suis un(e) 15 ans vieux/vieille canard qui aime traîner avec des amis. J'aime aussi beaucoup la musique !
```

# activité-7 : Structure de Données (Tableau & ArrayList)

## Tableau
```java
  public static void imprimerTableau(String[] tableau){
    for(int i = 0; i < tableau.length - 1; i++){
      // itérer à travers chaque élément (sauf le dernier) dans le tableau et ajouter ", " après chaque élément
      System.out.print