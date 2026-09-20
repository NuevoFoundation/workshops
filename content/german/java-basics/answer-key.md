---
title: "Java: Grundlagen - Antwortschlüssel"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# Aktivität-1: Ausgabebefehle und Kommentare
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
Ausgabe: 

    Hello World2020@

## Eule
```java
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    System.out.println("    ​, ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \\");
    System.out.println("​`\\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |");
    System.out.println("​ ​/ /)  )    \\ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /");
    System.out.println("​/,--\"-\"- ");
  }
}
```
Ausgabe:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# Aktivität-2: Typen und Variablen

## Datentyp
```java
class Main {
  public static void main(String[] args) {
    String bestFriend = "Minerva";
    int numOfFriends = 4;
    double GPA = 3.6;
    char meaningOfLife = '$';
    boolean loveMusic = true;
  }
}
```

## Variable
Ausgabe:

```
x: 2.3 y: 2.3 z: 0
```

# Aktivität-3: Operatoren

```java
        int patrickGrade = 88;
        int tomGrade = 89;
        int maryGrade = 95;
        int chrisGrade = 84;
        int jenGrade = 92;

        average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade)/5;

        boolean over60 = (average > 60);
        boolean over70 = (average > 70);
        boolean over80 = (average > 80);
        boolean over90 = (average > 90);
```
Ausgabe:

```
---------------------------
     Musiknotenbericht    
---------------------------

Noten der Schüler:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Klassendurchschnitt: 89.0
- Durchschnitt über 60: true
- Durchschnitt über 70: true
- Durchschnitt über 80: true
- Durchschnitt über 90: false
```


# Aktivität-4: Kontrollstrukturen

## if-Anweisung
```java
int currentHour = ... ; // Variable, die die aktuelle Stunde zwischen 0 - 23 speichert
if(currentHour < 12){
    System.out.println("Guten Morgen");
}else if(currentHour < 20){
    System.out.println("Guten Tag");
}else{
    System.out.println("Gute Nacht");
}
```

## While-Schleife
```java
    int myTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        myTotal += num2;
    }
```
Ausgabe:

```
Antwort berechnet in einer while-Schleife: 5050
Antwort berechnet in einer for-Schleife: 5050
```

# Aktivität-5: Methoden

## Pyramide
```java
  public static int pyramidCount(int level){
      int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;
  }
```

Ausgabe:

```
Herzlichen Glückwunsch! Herausforderung gelöst!
```

# Aktivität-6: Objekte und Klassen

## Vogel-Klasse
```java
public class Bird{
  // Instanzvariablen
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // Konstruktor
  public Bird(String species_input, String name_input, String hobby_input, int age_input, boolean loveMusic_input){
    species = species_input;
    name = name_input;
    hobby = hobby_input;
    age = age_input;
    loveMusic = loveMusic_input;
  }

  public String getSpecies(){
    return species;
  }

  public String getName(){
    return name;
  }

  public String getHobby(){
    return hobby;
  }

  public int getAge(){
    return age;
  }

  public boolean getLoveMusic(){
    return loveMusic;
  }

  public String toString(){
    String info = "";
    info = info + "Hallo, mein Name ist " + getName() + 
           ". Ich bin ein " + getAge() + " Jahre alter " + getSpecies() + 
           ", der gerne " + getHobby() + ". ";
    if(getLoveMusic()){
        info = info + "Ich mag auch sehr gerne Musik!";
    }else{        
        info = info + "Ich mag jedoch keine Musik!";
    }
    return info;
  }

}
```

## main()-Implementierung: Keine richtige Antwort, nur eine Übung
```java
public static void main(String[] args) {
    Bird patrick = new Bird("Ente", "Patrick", "mit Freunden abhängen", 15, true);
    System.out.print(patrick);
}
```

Ausgabe:

```
Hallo, mein Name ist Patrick. Ich bin ein 15 Jahre alter Ente, der gerne mit Freunden abhängt. Ich mag auch sehr gerne Musik!
```

# Aktivität-7: Datenstrukturen (Array & ArrayList)

## Array
```java
  public static void printArr(String[] arr){
    for(int i = 0; i < arr.length - 1; i++){
      // durch jede Komponente (außer die letzte) des Arrays iterieren und ", " nach jedem Element hinzufügen
      System.out.print(arr[i] + ", ");
    }
    // letztes Element und neue Zeile ausgeben
    System.out.println(arr[arr.length -1]);
  }
```

Ausgabe:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```

## ArrayList
```java
  public static void printList(ArrayList<String