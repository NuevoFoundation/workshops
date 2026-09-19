```markdown
---
title: "Java: TicTacToe - Clave de Respuestas"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# actividad-1: Configuración del Juego
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // el tablero que almacena los movimientos
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // tablero inicial que etiqueta posiciones (solo se imprime una vez)
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tik Tak Toe  ~>>>\n* Elige un número del 1 al 9 para colocar tu movimiento\n* Jugador: 'X' Computadora: 'O'\n" );
        printBoard(startBoard); 
        System.out.print("Ingresa tu movimiento (1-9): "); 
        }

    // método que imprime el tablero con los elementos del tablero
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# actividad-2: Leer + Procesar Entrada
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tik Tak Toe  ~>>>\n* Elige un número del 1 al 9 para colocar tu movimiento\n* Jugador: 'X' Computadora: 'O'\n");
        printBoard(startBoard);
        System.out.print("Ingresa tu movimiento (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // obtener entrada de número entero
				move = sc.nextInt();
                // verificar si el número entero está entre 1 y 9. Verificar si la posición está vacía
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posición inválida; ingresa nuevamente tu movimiento (1-9): ");
					continue;
				}
			} else {
                // limpiar el objeto Scanner
                sc.next();
				System.out.print("Entrada inválida; ingresa nuevamente tu movimiento (1-9): ");
				continue;
            }

            // vuelver a pedir el tablero
            printBoard(board);
            System.out.print("Ingresa tu movimiento (1-9): "); 
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

# actividad-3: Actualizar Tablero
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Tik Tak Toe  ~>>>\n* Elige un número del 1 al 9 para colocar tu movimiento\n* Jugador: 'X' Computadora: 'O'\n");
        printBoard(startBoard);
        System.out.print("Ingresa tu movimiento (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posición inválida; ingresa nuevamente tu movimiento (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Entrada inválida; ingresa nuevamente tu movimiento (1-9): ");
				continue;
            }
            */

            // actualizar el tablero con el movimiento del jugador
            board[move - 1] = "X";
            
            // actualizar el tablero con un movimiento aleatorio para la computadora
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Ingresa tu movimiento (1-9): */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // método que genera un movimiento válido aleatorio
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

# actividad-4: Comprobar Ganador
```java
// import java.util.Scanner;
// import java.util.Random;
public class TicTac