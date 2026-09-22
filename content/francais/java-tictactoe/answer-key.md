```yaml
---
title: "Java : TicTacToe - Corrigé"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# activité-1 : Configuration du Jeu
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // le plateau qui stocke les mouvements
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // plateau de départ qui affiche les positions (imprimé une seule fois)
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choisissez un numéro entre 1 et 9 pour placer votre mouvement\n* Joueur : 'X' Ordinateur : 'O'\n" );
        printBoard(startBoard); 
        System.out.print("Entrez votre mouvement (1-9) : "); 
    }

    // méthode qui imprime le plateau à partir du contenu donné
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# activité-2 : Lecture + Traitement des Entrées
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choisissez un numéro entre 1 et 9 pour placer votre mouvement\n* Joueur : 'X' Ordinateur : 'O'\n");
        printBoard(startBoard);
        System.out.print("Entrez votre mouvement (1-9) : "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // obtenir une entrée entière
				move = sc.nextInt();
                // vérifier si l'entier est entre 1 et 9. vérifier si la position est vide
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Position invalide ; réessayez votre mouvement (1-9) : ");
					continue;
				}
			} else {
                // vider le Scanner
                sc.next();
				System.out.print("Entrée invalide ; réessayez votre mouvement (1-9) : ");
				continue;
            }

            // réafficher le plateau
            printBoard(board);
            System.out.print("Entrez votre mouvement (1-9) : "); 
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

# activité-3 : Mettre à jour le plateau
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tic  Tac  Toe  ~>>>\n* Choisissez un numéro entre 1 et 9 pour placer votre mouvement\n* Joueur : 'X' Ordinateur : 'O'\n");
        printBoard(startBoard);
        System.out.print("Entrez votre mouvement (1-9) : "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Position invalide ; réessayez votre mouvement (1-9) : ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Entrée invalide ; réessayez votre mouvement (1-9) : ");
				continue;
            }
            */

            // mettre à jour le plateau avec le mouvement de l'utilisateur
            board[move - 1] = "X";
            
            // mettre à jour le plateau avec un mouvement aléatoire pour l'ordinateur
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Entrez votre mouvement (1-9) : "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // méthode qui génère un mouvement aléatoire valide
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

# activité