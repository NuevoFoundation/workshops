```yaml
---
title: "Java: TicTacToe -答案文件"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activity-1: 游戏设置
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // 存储棋子的棋盘
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // 标记位置的起始棋盘（只打印一次）
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字棋游戏  ~>>>\n* 选择数字 1 - 9 来下棋\n* 玩家：'X' 电脑：'O'\n");
        printBoard(startBoard); 
        System.out.print("输入您的棋子位置 (1-9): "); 
        }

    // 打印当前棋盘的方法
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# activity-2: 读取并处理输入
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字棋游戏  ~>>>\n* 选择数字 1 - 9 来下棋\n* 玩家：'X' 电脑：'O'\n");
        printBoard(startBoard);
        System.out.print("输入您的棋子位置 (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // 获取输入的整数
				move = sc.nextInt();
                // 检查输入是否为1到9之间，并且对应位置是否为空
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("无效位置；请重新输入您的棋子位置 (1-9): ");
					continue;
				}
			} else {
                // 清空 Scanner
                sc.next();
				System.out.print("无效输入；请重新输入您的棋子位置 (1-9): ");
				continue;
            }

            // 重新显示棋盘
            printBoard(board);
            System.out.print("输入您的棋子位置 (1-9): "); 
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

# activity-3: 更新棋盘
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  井字棋游戏  ~>>>\n* 选择数字 1 - 9 来下棋\n* 玩家：'X' 电脑：'O'\n");
        printBoard(startBoard);
        System.out.print("输入您的棋子位置 (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("无效位置；请重新输入您的棋子位置 (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("无效输入；请重新输入您的棋子位置 (1-9): ");
				continue;
            }
            */

            // 更新玩家的棋子
            board[move - 1] = "X";
            
            // 更新电脑随机位置的棋子
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("输入您的棋子位置 (1-9): */ 
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // 生成一个有效的随机棋子位置的方法
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }
}
```

# activity-4: 检查胜利者
```java
// import java.util.Scanner;
// import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new