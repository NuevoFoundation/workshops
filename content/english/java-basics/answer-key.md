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


      /*int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;*/