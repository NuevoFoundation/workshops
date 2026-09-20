```yaml
---
title: "Java: Basics - 答案解答"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# 活動-1: 印出語句與註解
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
輸出:

    Hello World2020@

## 貓頭鷹
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
輸出:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# 活動-2: 類型與變數

## 資料類型
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

## 變數
輸出:

```
x: 2.3 y: 2.3 z: 0
```

# 活動-3: 運算符

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
輸出:

```
---------------------------
     音樂成績報告    
---------------------------

學生成績:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

班級平均分: 89.0
- 平均分超過60: true
- 平均分超過70: true
- 平均分超過80: true
- 平均分超過90: false
```


# 活動-4: 控制結構

## If 語句
```java
int currentHour = ... ; // 儲存當前小時的變數，介於0到23之間
if(currentHour < 12){
    System.out.println("早安");
}else if(currentHour < 20){
    System.out.println("午安");
}else{
    System.out.println("晚安");
}
```

## While 迴圈
```java
    int myTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        myTotal += num2;
    }
```
輸出:

```
使用 while 迴圈計算的答案: 5050
使用 for 迴圈計算的答案: 5050
```

# 活動-5: 方法

## 金字塔
```java
  public static int pyramidCount(int level){
      int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;
  }
```

輸出:

```
恭喜！挑戰解決了！
```

# 活動-6: 物件與類別

## 鳥類 Class
```java
public class Bird{
  // 屬性變數
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // 建構子
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
    info = info + "嗨，我的名字是" + getName() + 
           "，我是一隻" + getAge() + "歲的" + getSpecies() + 
           "，我喜歡" + getHobby() + "。";
    if(getLoveMusic()){
        info = info + "我也非常喜歡音樂！";
    }else{        
        info = info + "然而，我不喜歡音樂！";
    }
    return info;
  }

}
```

## main() 實作: 並不是正確答案，只是一個練習
```java
public static void main(String[] args) {
    Bird patrick = new Bird("duck", "Patrick", "hangout with friends", 15, true);
    System.out.print(patrick);
}
```

輸出:

```
嗨，我的名字是Patrick，我是一隻15歲的duck，我喜歡hangout with friends。我也非常喜歡音樂！
```

# 活動-7: 資料結構 (陣列與 ArrayList)

## 陣列
```java
  public static void printArr(String[] arr){
    for(int i = 0; i < arr.length - 1; i++){
      // 迭代陣列中的每個元素（不是最後一個元素），並在每個元素後加上 ", "
      System.out.print(arr[i] + ", ");
    }
    // 印出最後一個元素並加