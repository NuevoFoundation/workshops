---
title: "Java: Негиздер - Жооптор Тизмеси"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# иш-чара-1: Басып чыгаруу буйругу жана Комментарийлер
## Салам Дүйнө
```java
class Main {
  public static void main(String[] args) {
    System.out.print("Hello World");
    System.out.print(2020);
    System.out.print('@'); 
  }
}
```
Натыйжа: 

    Hello World2020@

## Бүчүр
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
Натыйжа:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# иш-чара-2: Түрлөр жана Өзгөрмөлөр

## Маалымат Түрү
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

## Өзгөрмө
Натыйжа:

```
x: 2.3 y: 2.3 z: 0
```

# иш-чара-3: Операторлор

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
Натыйжа:

```
---------------------------
     Музыка Окуу Баалоо    
---------------------------

Окуучулардын Баалары:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Орточо Баа: 89.0
- Орточо 60тан жогору: true
- Орточо 70тен жогору: true
- Орточо 80ден жогору: true
- Орточо 90дон жогору: false
```

# иш-чара-4: Башкаруу Түзүмдөрү

## Эгерде буйругу
```java
int currentHour = ... ; // учурдагы саатты сактаган өзгөрмө (0 - 23 аралыгы)
if(currentHour < 12){
    System.out.println("Кутман таң");
}else if(currentHour < 20){
    System.out.println("Кутман күн");
}else{
    System.out.println("Кутман түн");
}
```

## Цикл while
```java
    int myTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        myTotal += num2;
    }
```
Натыйжа:

```
Жооп цикл while аркылуу эсептелди: 5050
Жооп цикл for аркылуу эсептелди: 5050
```

# иш-чара-5: Методдор

## Пирамида
```java
  public static int pyramidCount(int level){
      int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;
  }
```

Натыйжа:

```
Куттуктайм! Чечилди!
```

# иш-чара-6: Объект жана Класстар

## Канаттуу Классы
```java
public class Bird{
  // түзүүчү өзгөрмөлөр
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // куруучу
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
    info = info + "Салам, мени " + getName() + " деп атап коюшат. " + 
           "Мен " + getAge() + " жаштагы " + getSpecies() + "мун, менин хоббим " + getHobby() + ". ";
    if(getLoveMusic()){
        info = info + "Ошондой эле мен музыка угууну абдан жакшы көрөм!";
    }else{        
        info = info + "Бирок, мен музыка угууну анча жактырбайм!";
    }
    return info;
  }

}
```

## main() Ишке ашыруу: туура жообу жок, жөн эле машыгуу
```java
public static void main(String[] args) {
    Bird patrick = new Bird("казак", "Патрик", "достор менен убакыт өткөрүү", 15, true);
    System.out.print(patrick);
}
```

Натыйжа:

```
Салам, мени Патрик деп атап коюшат. Мен 15 жаштагы казакмын, достор менен убакыт өткөрүүнү жактырам. Ошондой эле мен музыка угууну абдан жакшы көрөм!
```

