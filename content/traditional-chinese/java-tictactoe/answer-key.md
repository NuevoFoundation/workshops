```markdown
---
title: "Java: 井字遊戲 - 解答"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# 活動-1: 設置遊戲
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // 儲存玩家移動位置的棋盤
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // 初始棋盤顯示位置（僅顯示一次）
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字遊戲  ~>>>\n* 選擇數字 1 - 9 來放置你的移動位置\n* 玩家: 'X' 電腦: 'O'\n" );
        printBoard(startBoard); 
        System.out.print("輸入你的移動位置 (1-9): "); 
        }

    // 用於顯示棋盤的一個方法
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# 活動-2: 讀取與處理輸入
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字遊戲  ~>>>\n* 選擇數字 1 - 9 來放置你的移動位置\n* 玩家: 'X' 電腦: 'O'\n");
        printBoard(startBoard);
        System.out.print("輸入你的移動位置 (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // 獲取整數輸入
				move = sc.nextInt();
                // 檢查整數是否在1到9之間，並檢查位置是否為空
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("位置無效；重新輸入你的移動位置 (1-9): ");
					continue;
				}
			} else {
                // 清空Scanner緩衝區
                sc.next();
				System.out.print("輸入無效；重新輸入你的移動位置 (1-9): ");
				continue;
            }

            // 重新顯示棋盤
            printBoard(board);
            System.out.print("輸入你的移動位置 (1-9): "); 
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

# 活動-3: 更新棋盤
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字遊戲  ~>>>\n* 選擇數字 1 - 9 來放置你的移動位置\n* 玩家: 'X' 電腦: 'O'\n");
        printBoard(startBoard);
        System.out.print("輸入你的移動位置 (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("位置無效；重新輸入你的移動位置 (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("輸入無效；重新輸入你的移動位置 (1-9): ");
				continue;
            }
            */

            // 玩家移動以後更新棋盤
            board[move - 1] = "X";
            
            // 電腦使用隨機移動的位置更新棋盤
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("輸入你的移動位置 (1-9): "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // 生成一個有效的隨機移動位置
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
