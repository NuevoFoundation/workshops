---
title: "Java: Fundamentos - Chaves de respostas"
date: 2020-07-09T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activity-1: Imprimir declarações e comentários
## Olá Mundo
```java
class Main {
  public static void main(String[] args) {
    System.out.print("Olá Mundo");
    System.out.print(2020);
    System.out.print('@'); 
  }
}
```
Saída: 

    Olá Mundo2020@

## Coruja
```java
class Main {
  public static void main(String[] args) {
    System.out.println("Olá Mundo!");
    System.out.println("    ​, ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \\");
    System.out.println("​`\\/{o,o}  <   Oi, Eu sou Minerva. Amiga do Patrick!  |");
    System.out.println("​ ​/ /)  )    \\ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /");
    System.out.println("​/,--\"-\"- ");
  }
}
```
Saída:

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Oi, Eu sou Minerva. Amiga do Patrick!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 

# activity-2: Tipos e Variáveis

## Tipos de Dados
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

## Variável
Saída:

```
x: 2.3 y: 2.3 z: 0
```

# activity-3: Operadores

```java
        int patrickGrade = 88;
        int tomGrade = 89;
        int maryGrade = 95;
        int chrisGrade = 84;
        int jenGrade = 92;

        média = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade)/5;

        boolean over60 = (average > 60);
        boolean over70 = (average > 70);
        boolean over80 = (average > 80);
        boolean over90 = (average > 90);
```
Saída:

```
---------------------------
    Relatório de notas    
---------------------------

Notas dos alunos:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Média da turma: 89.0
- Média acima de 60: true
- Média acima de 70: true
- Média acima de 80: true
- Média acima de 90: false
```


# activity-4: Estruturas de Controle

## Declaração If
```java
int currentHour = ... ; // variável que armazena a hora atual entre 0 - 23
if(currentHour < 12){
    System.out.println("Good Morning");
}else if(currentHour < 20){
    System.out.println("Good Afternoon");
}else{
    System.out.println("Good Night");
}
```

## Laço While (Loop While)
```java
    int myTotal = 0;
    for(int num2 = 1; num2 <= 100; num2++){
        myTotal += num2;
    }
```
Saída:

```
Resposta calculada em um loop while: 5050
Resposta calculada em um lopp for: 5050
```

# activity-5: Métodos

## Pirâmide
```java
  public static int pyramidCount(int level){
      int total = 0;
      for(int i = 1; i <= level; i++){
          total = total + i*i;
      }
      return total;
  }
```

Saída:

```
Parabéns! Desafio solucionado!
```

# activity-6: Objeto e Classes

## Categoria de Pássaros
```java
public class Bird{
  // variáveis ​​de instância
  private String species;
  private String name;
  private String hobby;
  private int age;
  private boolean loveMusic;

  // construtor
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
    info = info + "Oi, meu nome é " + getName() + 
           ". Eu tenho " + getAge() + " anos de idade, sou um " + getSpecies() + 
           " que gosta de " + getHobby() + ". ";
    if(getLoveMusic()){
        info = info + "Eu gosto muito de música!";
    }else{        
        info = info + "Entretanto, eu não gosto de música!";
    }
    return info;
  }

}
```

## main() Implementação: Nenhuma resposta correta, apenas um exercício
```java
public static void main(String[] args) {
    Bird patrick = new Bird("pato", "Patrick", "sair com amigos", 15, true);
    System.out.print(patrick);
}
```

Saída:

```
Oi, meu nome é Patrick. Eu tenho 15 anos de idade, sou um pato que gosta de sair com amigos. Eu gosto muito de música!
```

# activity-7: Estruturas de dados (Array & ArrayList)

## Vetor (Array)
```java
  public static void printArr(String[] arr){
    for(int i = 0; i < arr.length - 1; i++){
      // repete através de cada elemento (não o último) no vetor (array) e adicione "," após cada elemento
      System.out.print(arr[i] + ", ");
    }
    // imprime o último elemento e o caractere de nova linha
    System.out.println(arr[arr.length -1]);
  }
```

Saída:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
## Lista de Vetores (ArrayList)
```java
  public static void printList(ArrayList<String> list){
    // digite aqui
    for(int i = 0; i < list.size() - 1; i++){
      // repete através de cada elemento (não o último) na matriz e adicione "," após cada elemento
      System.out.print(list.get(i) + ", ");
    }
    // imprimir o último elemento e o caractere de nova linha
    System.out.println(list.get(list.size() -1));
  }
```

Saída:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
