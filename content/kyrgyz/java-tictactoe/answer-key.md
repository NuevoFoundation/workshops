---
title: "Java: TicTacToe - Жооп Барагы"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activity-1: Оюндун Башталышы
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // ходдорду сактоочу такта
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // гана бир жолу басылып чыгаруучу орундарды белгилеген баштапкы такта
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Ход үчүн 1 - 9 номурду тандаңыз\n* Оюнчу: 'X' Компьютер: 'O'\n" );
        printBoard(startBoard); 
        System.out.print("Өз ходуңузду жазыңыз (1-9): "); 
        }

    // тактаны кирген маалыматка жараша басып чыгаруу ыкмасы
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# activity-2: Маалыматты Окуу + Иштетүү
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Ход үчүн 1 - 9 номурду тандаңыз\n* Оюнчу: 'X' Компьютер: 'O'\n");
        printBoard(startBoard);
        System.out.print("Өз ходуңузду жазыңыз (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // бүтүн сандарды кирүү
				move = sc.nextInt();
                // бүтүн сан 1 менен 9 ортосунда экенин жана орун бош экенин текшерүү
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Туура эмес орун; кайрадан өз ходуңузду жазыңыз (1-9): ");
					continue;
				}
			} else {
                // Scanner тазалоо
                sc.next();
				System.out.print("Туура эмес кирүү; кайрадан өз ходуңузду жазыңыз (1-9): ");
				continue;
            }

            // тактаны кайрадан көрсөтүү
            printBoard(board);
            System.out.print("Өз ходуңузду жазыңыз (1-9): "); 
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/
}
```

# activity-3: Тактаны Жаңыртуу
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Ход үчүн 1 - 9 номурду тандаңыз\n* Оюнчу: 'X' Компьютер: 'O'\n");
        printBoard(startBoard);
        System.out.print("Өз ходуңузду жазыңыз (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Туура эмес орун; кайрадан өз ходуңузду жазыңыз (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Туура эмес кирүү; кайрадан өз ходуңузду жазыңыз (1-9): ");
				continue;
            }
            */

            // колдонуучунун ходуна ылайык тактаны жаңыртуу
            board[move - 1] = "X";
            
            // компьютер үчүн кокустук ходду жаңыртуу
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Өз ходуңузду жазыңыз (1-9): "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // тактаны туура же туура эмес жүрүштөр