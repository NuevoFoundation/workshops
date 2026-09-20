```markdown
---
title: "Java: 基础 - 答案解析"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# 第1步：打印语句和注释
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
输出结果: 

    Hello World2020@

## 猫头鹰
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
输出结果:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   我是米娜瓦，帕特里克的朋友！  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# 第2步：数据类型和变量

## 数据类型
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

## 变量
输出结果:

```
x: 2.3 y: 2.3 z: 0
```

# 第3步：运算符

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
输出结果:

```
---------------------------
     音乐成绩报告    
---------------------------

学生成绩:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

班级平均分: 89.0
- 平均分高于60分: true
- 平均分高于70分: true
- 平均分高于80分: true
- 平均分高于90分: false
```

# 第4步：控制结构

## If语句
```java
int currentHour = ... ; // 变量存储当前小时，值为 0 - 23
if(currentHour < 12){
    System.out.println("早上好");
}else if(currentHour < 20){
    System.out.println("下午好");
}else{
    System.out.println("晚安");
}
```

## While循环
```java
    int myTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        myTotal += num2;
    }
```
输出结果:

```
在while循环中计算得出：5050
在for循环中计算得出：5050
```

# 第5步：方法

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

输出结果:

```
恭喜！挑战解决！
```

# 第6步：对象和类

## 鸟类定义
```java
public class Bird{
  // 实例变量
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // 构造函数
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
    info = info + "你好，我叫 " + getName() + 
           "。 我是一只 " + getAge() + "岁 的 " + getSpecies() + 
           "，我喜欢 " + getHobby() + "。 ";
    if(getLoveMusic()){
        info = info + "我也非常喜欢音乐！";
    }else{        
        info = info + "但是，我不喜欢音乐！";
    }
    return info;
  }

}
```

## main() 实现：无标准答案，仅供练习
```java
public static void main(String[] args) {
    Bird patrick = new Bird("duck", "Patrick", "和朋友一起玩", 15, true);
    System.out.print(patrick);
}
```

输出结果:

```
你好，我叫Patrick。我是一只15岁的小鸭子，我喜欢和朋友一起玩。我也非常喜欢音乐！
```

# 第7步：数据结构（数组与ArrayList）

## 数组
```java
  public static void printArr(String[] arr){
    for(int i = 0; i < arr.length - 1; i++){
      // 遍历数组中的每个元素（不是最后一个元素），每个元素后加上 ", "
      System.out.print(arr[i] + ", ");
    }
    // 打印最后一个元素并换行
    System.out.println(arr[arr.length -1]);
  }
```

输出结果:
```
猛禽小队，群鸟，愤怒的小鸟，鸟盒，宠物的秘密生活
```
## ArrayList
```java
  public static void printList(ArrayList<String> list){
    // 在这里输入
   