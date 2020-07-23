---
title: "Java: Basics - Answer Key"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activity-1: Print Statements and Comments
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
Output: 

    Hello World2020@

## Owl
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
Output:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# activity-2: Types and Variables

## DataType
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
Output:

```
x: 2.3 y: 2.3 z: 0
```

# activity-3: Operators
TODO





```
int currentHour = ... ; // variable that stores current hour between 0 - 23
if(currentHour < 12){
    System.out.println("Good Morning");
}else if(currentHour < 20){
    System.out.println("Good Afternoon");
}else{
    System.out.println("Good Night");
}
```




# activity-4: Control Structures
# activity-5: Methods

## Pyramid
```java
  public static int pyramidCount(int level){
      int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;
  }
```


# activity-6: Object and Classes

## Bird Class
```java
public class Bird{
  // instance variables
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // constructor
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
    info = info + "Hi, my name is " + getName() + 
           ". I am a " + getAge() + "year old " + getSpecies() + 
           " who likes to " + getHobby() + ". ";
    if(getLoveMusic()){
        info = info + "I also like music very much!";
    }else{        
        info = info + "However, I do not like music!";
    }
    return info;
  }

}
```

## main() Implementation: No correct answe just an exercise
```java
public static void main(String[] args) {
    Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
    System.out.print(patrick);
}
```

Output:

```
Hi, my name is Patrick. I am a 15year old duck who likes to hangout with friends. I also like music very much!
```

# activity-7: Data Structure (Array & ArrayList)

## Array
```java
  public static void printArr(String[] arr){
    for(int i = 0; i < arr.length - 1; i++){
      // iterate through each element(not the last one) in the array and add ", " after each element
      System.out.print(arr[i] + ", ");
    }
    // print last element and newline character
    System.out.println(arr[arr.length -1]);
  }
```

## ArrayList
```java
  public static void printList(ArrayList<String> list){
    // type here
    for(int i = 0; i < list.size() - 1; i++){
      // iterate through each element(not the last one) in the array and add ", " after each element
      System.out.print(list.get(i) + ", ");
    }
    // print last element and newline character
    System.out.println(list.get(list.size() -1));
  }
```