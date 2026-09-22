```markdown
---
title: "Java: TicTacToe - Lösungsschlüssel"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# Aktivität-1: Spielaufbau
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // Das Spielfeld, das die Züge speichert
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // Startspielfeld mit Nummern zur Positionsanzeige (wird nur einmal gedruckt)
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Wähle eine Zahl zwischen 1 und 9, um deinen Zug zu platzieren\n* Spieler: 'X' Computer: 'O'\n" );
        printBoard(startBoard); 
        System.out.print("Gib deinen Zug ein (1-9): "); 
        }

    // Methode, um das Spielfeld mit den aktuellen Zügen auszugeben
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# Aktivität-2: Eingabe lesen + verarbeiten
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Wähle eine Zahl zwischen 1 und 9, um deinen Zug zu platzieren\n* Spieler: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Gib deinen Zug ein (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // Ganzzahl eingeben
				move = sc.nextInt();
                // Überprüfen, ob die Zahl zwischen 1 und 9 liegt und ob die Position frei ist
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Ungültige Position; gib deinen Zug erneut ein (1-9): ");
					continue;
				}
			} else {
                // Scanner zurücksetzen
                sc.next();
				System.out.print("Ungültige Eingabe; gib deinen Zug erneut ein (1-9): ");
				continue;
            }

            // Spielfeld erneut ausgeben
            printBoard(board);
            System.out.print("Gib deinen Zug ein (1-9): "); 
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

# Aktivität-3: Spielfeld aktualisieren
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Wähle eine Zahl zwischen 1 und 9, um deinen Zug zu platzieren\n* Spieler: 'X' Computer: 'O'\n");
        printBoard(startBoard);
        System.out.print("Gib deinen Zug ein (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Ungültige Position; gib deinen Zug erneut ein (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Ungültige Eingabe; gib deinen Zug erneut ein (1-9): ");
				continue;
            }
            */

            // Spielfeld mit dem Zug des Benutzers aktualisieren
            board[move - 1] = "X";
            
            // Spielfeld mit einem zufälligen Zug für den Computer aktualisieren
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Gib deinen Zug ein (1-9): "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // Methode, um einen gültigen zufälligen Zug zu generieren
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 