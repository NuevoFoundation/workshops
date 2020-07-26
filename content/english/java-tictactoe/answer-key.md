---
title: "Java: TicTacTow - Answer Key"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# actitity-1: Game SetUp
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choose number 1 - 9 to place your move\n* Player: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Enter your move (1-9): "); 
        }

    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# activity-2: Read + Process Input
```java
public class TicTacToe_Nuevo {
    /*static ArrayList<Integer> playerMoves = new ArrayList<Integer>();
    static ArrayList<Integer> computerMoves = new ArrayList<Integer>();

    static String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};*/

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*System.out.println("<<<TicTacToe>>>\n- Positions on the board is represented by number 1 - 9\n- player: 'X' computer: 'O'");
        printBoard();
        System.out.print("Enter your move (1-9): "); */
        while(true){
            int move;
			try {
				move = sc.nextInt();
				if (!(move > 0 && move <= 9) || playerMoves.contains(move) || computerMoves.contains(move)) {
					System.out.print("Invalid Position; re-enter your move (1-9): ");
					continue;
				}
			} catch (Exception e) {
                sc.next();
				System.out.print("Invalid Input; re-enter your move (1-9): ");
				continue;
            }

            printBoard();
            System.out.print("Enter your move (1-9): "); 
        }
        sc.close();  
    }
    /*public static void printBoard(){
        System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
    }*/
}
```

# activity-3: Update Board
```java
public class TicTacToe_Nuevo {
    /*static ArrayList<Integer> playerMoves = new ArrayList<Integer>();
    static ArrayList<Integer> computerMoves = new ArrayList<Integer>();

    static String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};*/

    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        System.out.println("<<<TicTacToe>>>\n- Positions on the board is represented by number 1 - 9\n- player: 'X' computer: 'O'");
        printBoard();
        System.out.print("Enter your move (1-9): "); */
        while(true){
            /*int move;
			try {
				move = sc.nextInt();
				if (!(move > 0 && move <= 9) || playerMoves.contains(move) || computerMoves.contains(move)) {
					System.out.print("Invalid Position; re-enter your move (1-9): ");
					continue;
				}
			} catch (Exception e) {
                sc.next();
				System.out.print("Invalid Input; re-enter your move (1-9): ");
				continue;
            }*/

            placeMove(move, true);
            
            placeMove(getComputerMove(), false);

            /* printBoard();
            System.out.print("Enter your move (1-9): "); */
        }
        // sc.close();  
    }
    /*public static void printBoard(){
        System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
    }*/
    public static int getComputerMove(){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(playerMoves.contains(pos) || computerMoves.contains(pos)){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }
    public static void placeMove(int move, boolean playerTurn){
        if(playerTurn){
            board[move - 1] = "X";
            playerMoves.add(move);
        }else{
            board[move - 1] = "O";
            computerMoves.add(move);
        }
    }
}
```

# activity-4: Check Winner
```java
public class TicTacToe_Nuevo {
    /*static ArrayList<Integer> playerMoves = new ArrayList<Integer>();
    static ArrayList<Integer> computerMoves = new ArrayList<Integer>();

    static String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};*/

    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        System.out.println("<<<TicTacToe>>>\n- Positions on the board is represented by number 1 - 9\n- player: 'X' computer: 'O'");
        printBoard();
        System.out.print("Enter your move (1-9): "); */
        while(true){
            /*int move;
			try {
				move = sc.nextInt();
				if (!(move > 0 && move <= 9) || playerMoves.contains(move) || computerMoves.contains(move)) {
					System.out.print("Invalid Position; re-enter your move (1-9): ");
					continue;
				}
			} catch (Exception e) {
                sc.next();
				System.out.print("Invalid Input; re-enter your move (1-9): ");
				continue;
            }

            placeMove(move, true);*/
            String winner = getWinner();
            if(winner.length() > 0){
                System.out.println("\n" + winner + "\n");
                break;
            }
            
            // placeMove(getComputerMove(), false);
            winner = getWinner();
            if(winner.length() > 0){
                System.out.println("\n" + winner + "\n");
                break;
            }
            System.err.print("");

            /* printBoard();
            System.out.print("Enter your move (1-9): "); */
        }
        // sc.close();  
    }
    /*public static void printBoard(){
        System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
    }
    public static int getComputerMove(){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(playerMoves.contains(pos) || computerMoves.contains(pos)){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }
    public static void placeMove(int move, boolean playerTurn){
        if(playerTurn){
            board[move - 1] = "X";
            playerMoves.add(move);
        }else{
            board[move - 1] = "O";
            computerMoves.add(move);
        }
    }*/
    public static String getWinner(){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                case 0: checkWin = board[0] + board[1] + board[2];
                        break;
                case 1: checkWin = board[3] + board[4] + board[5];
                        break;
                case 2: checkWin = board[6] + board[7] + board[8];
                        break;
                case 3: checkWin = board[0] + board[3] + board[6];
                        break;
                case 4: checkWin = board[1] + board[4] + board[7];
                        break;
                case 5: checkWin = board[2] + board[5] + board[8];
                        break;
                case 6: checkWin = board[0] + board[4] + board[8];
                        break;
                case 7: checkWin = board[2] + board[4] + board[6];
                        break;
            }
            if(checkWin.equals("XXX")){
                return "Congradulations! You won the Game :)";
            }else if(checkWin.equals("OOO")){
                return "Game Over! \nYou lost the Game :(";
            }
        }
        if(playerMoves.size() + computerMoves.size() == 9){
                return "It's a TIE! Try it again";
        }else{
            return "";
        }
    }
}
```

# activity-5: AI Computer Move
```java
// reimplement getComputerMove()
public static int getComputerMove(){
    Random rand = new Random();
    int pos = rand.nextInt(9) + 1;
    while(playerMoves.contains(pos) || computerMoves.contains(pos)){
        pos = rand.nextInt(9) + 1;
    }
    return pos;
}
```