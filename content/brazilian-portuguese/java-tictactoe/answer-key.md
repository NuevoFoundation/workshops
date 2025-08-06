---
title: "Java: Jogo da Velha - Gabarito"
date: 2020-07-23T00:00:00Z
weight: 15
draft: false
hidden: true
---

# atividade-1: Preparando o Jogo
```java
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        // o tabuleiro que guarda as jogadas
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        // tabuleiro inicial com posições numeradas (impresso só uma vez)
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Jogo  da  Velha  ~>>>\n* Escolha um número de 1 a 9 para fazer sua jogada\n* Jogador: 'X' Computador: 'O'\n" );
        printBoard(startBoard); 
        System.out.print("Digite sua jogada (1-9): "); 
        }

    // método que imprime o tabuleiro com o conteúdo atual
    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
}
```

# atividade-2: Ler e Processar a Jogada
```java
import java.util.Scanner;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        /*String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Jogo  da  Velha  ~>>>\n* Escolha um número de 1 a 9 para fazer sua jogada\n* Jogador: 'X' Computador: 'O'\n");
        printBoard(startBoard);
        System.out.print("Digite sua jogada (1-9): "); */

        while(true){
            int move;
			if(sc.hasNextInt()) {
                // pega o número digitado
				move = sc.nextInt();
                // verifica se o número está entre 1 e 9 e se a posição está vazia
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posição inválida; digite novamente sua jogada (1-9): ");
					continue;
				}
			} else {
                // limpa o Scanner
                sc.next();
				System.out.print("Entrada inválida; digite novamente sua jogada (1-9): ");
				continue;
            }

            // mostra o tabuleiro novamente
            printBoard(board);
            System.out.print("Digite sua jogada (1-9): "); 
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

# atividade-3: Atualizar o Tabuleiro
```java
// import java.util.Scanner;
import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Jogo  da  Velha  ~>>>\n* Escolha um número de 1 a 9 para fazer sua jogada\n* Jogador: 'X' Computador: 'O'\n");
        printBoard(startBoard);
        System.out.print("Digite sua jogada (1-9): "); */

        while(true){
            /*int move;
            if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posição inválida; digite novamente sua jogada (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Entrada inválida; digite novamente sua jogada (1-9): ");
				continue;
            }
            */

            // atualiza o tabuleiro com a jogada do jogador
            board[move - 1] = "X";
            
            // atualiza o tabuleiro com uma jogada aleatória do computador
            board[getComputerMove(board) - 1] = "O";

            /*printBoard(board);
            System.out.print("Digite sua jogada (1-9): "); */s
        }
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }*/

    // método que gera uma jogada aleatória válida para o computador
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

# atividade-4: Verificar o Vencedor
```java
// import java.util.Scanner;
// import java.util.Random;
public class TicTacToe_Nuevo {
    public static void main(String args[]){
        /*Scanner sc = new Scanner(System.in);
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};

        System.out.println("<<<~  Jogo  da  Velha  ~>>>\n* Escolha um número de 1 a 9 para fazer sua jogada\n* Jogador: 'X' Computador: 'O'\n");
        printBoard(startBoard);
        System.out.print("Digite sua jogada (1-9): "); */

        while(true){
            /*int move;
			if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posição inválida; digite novamente sua jogada (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Entrada inválida; digite novamente sua jogada (1-9): ");
				continue;
            }*/

            // board[move - 1] = "X";
            String winner = getWinner(board);
            if(winner.length() > 0){      // se houver vencedor ou empate
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }
            
            // board[getComputerMove(board) - 1] = "O";
            winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            /*printBoard(board);
            System.out.print("Digite sua jogada (1-9): "); */s
        }
        sc.close();  
    }

    /*public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }*/
    
    // OBS: este é um jeito possível de escrever este método.
    public static String getWinner(String[] curBoard){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                // junta todas as posições possíveis de vitória
                case 0: checkWin = curBoard[0] + curBoard[1] + curBoard[2];
                        break;
                case 1: checkWin = curBoard[3] + curBoard[4] + curBoard[5];
                        break;
                case 2: checkWin = curBoard[6] + curBoard[7] + curBoard[8];
                        break;
                case 3: checkWin = curBoard[0] + curBoard[3] + curBoard[6];
                        break;
                case 4: checkWin = curBoard[1] + curBoard[4] + curBoard[7];
                        break;
                case 5: checkWin = curBoard[2] + curBoard[5] + curBoard[8];
                        break;
                case 6: checkWin = curBoard[0] + curBoard[4] + curBoard[8];
                        break;
                case 7: checkWin = curBoard[2] + curBoard[4] + curBoard[6];
                        break;
            }
            // verifica se algum jogador venceu
            if(checkWin.equals("XXX")){
                return "Parabéns! \nVocê ganhou o jogo :)";
            }else if(checkWin.equals("OOO")){
                return "Fim de jogo! \nVocê perdeu :(";
            }
        }
        for(String move: curBoard){
            if(move.equals(" ")){
                return "";
            }
        }
        return "Empatou! Tente novamente";
    }
}
```

# atividade-5: Jogada Inteligente do Computador
```java
        public static int getComputerMoveAI(String[] curBoard){
            int pos = 0;
            int bestScore = Integer.MIN_VALUE;
            for(int i = 0; i < 9; i++){
                if(curBoard[i].equals(" ")){ // percorre todos os espaços vazios
                    // coloca a jogada do computador ali
                    curBoard[i] = "O";
                    // calcula a pontuação
                    int score = minimax(curBoard, false);
                    // volta ao estado anterior
                    curBoard[i] = " ";
                    // guarda a posição que dá a melhor pontuação
                    if(score > bestScore){
                        bestScore = score;
                        pos = i;
                    }
                }
            }
            return pos;
        }
    
        public static int minimax(String[] curBoard, boolean isMaximizing){
            // verifica se já tem vencedor ou empate
            String result = getWinner(curBoard);
    
            // fator = número de espaços vazios + 1
            int factor = getFactor(curBoard);

            // estado final retorna pontuação
            if(result.contains("Empatou")) return 0;
            if(result.contains("ganhou")) return -1 * factor;
            if(result.contains("perdeu")) return 1 * factor;
                    
            // o código abaixo é parecido com getComputerMoveAI(), mas alterna conforme `isMaximizing`
            int bestScore = (isMaximizing)? Integer.MIN_VALUE : Integer.MAX_VALUE;
            String symbol = (isMaximizing)? "O" : "X";
            for(int i = 0; i <9; i++){
                if(curBoard[i].equals(" ")){
                    curBoard[i] = symbol;
                    int score = minimax(curBoard, !isMaximizing);
                    curBoard[i] = " ";
                    if(isMaximizing) {
                        bestScore = Math.max(score, bestScore);
                    }else{
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
    
            return bestScore;
        }

    // retorna número de espaços disponíveis + 1
    public static int getFactor(String[] curBoard){
        int counter = 1;
        for(int i = 0; i < 9; i++){
            if(curBoard[i].equals(" ")){
                counter++;
            }
        }
        return counter;
    }
```

# Código Completo
```java
import java.util.Random;
import java.util.Scanner;

public class TicTacToe_Nuevo {
    public static void main(String args[]){
        String[] board = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
        String[] startBoard = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
        Scanner sc = new Scanner(System.in);

        System.out.println("<<<~  Jogo  da  Velha  ~>>>\n* Escolha um número de 1 a 9 para fazer sua jogada\n* Jogador: 'X' Computador: 'O'\n");
        printBoard(startBoard);
        System.out.print("Digite sua jogada (1-9): "); 

        while(true){
            int move;
			if (sc.hasNextInt()) {
                move = sc.nextInt();
				if (!(move > 0 && move <= 9) || ! board[move -1].equals(" ")) {
					System.out.print("Posição inválida; digite novamente sua jogada (1-9): ");
					continue;
				}
            } else {
                sc.next();
				System.out.print("Entrada inválida; digite novamente sua jogada (1-9): ");
				continue;
            }

            board[move - 1] = "X";
            String winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            double ran = Math.random();
            /*if(ran < 0.2){
                board[getComputerMove(board) - 1] = "O";
            }else{*/
                board[getComputerMoveAI(board) - 1] = "O";
            //}
            winner = getWinner(board);
            if(winner.length() > 0){
                printBoard(board);
                System.out.println("\n" + winner + "\n");
                break;
            }

            printBoard(board);
            System.out.print("Digite sua jogada (1-9): "); 
        }
        sc.close();  
    }

    public static void printBoard(String[] curBoard){
        System.out.println(" " + curBoard[0] + " | " + curBoard[1] + " | " + curBoard[2] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[3] + " | " + curBoard[4] + " | " + curBoard[5] + " ");
        System.out.println("---+---+---");
        System.out.println(" " + curBoard[6] + " | " + curBoard[7] + " | " + curBoard[8] + " ");
    }
    public static String getWinner(String[] curBoard){
        for(int i = 0; i < 8; i++){
            String checkWin = "";
            switch(i){
                case 0: checkWin = curBoard[0] + curBoard[1] + curBoard[2];
                        break;
                case 1: checkWin = curBoard[3] + curBoard[4] + curBoard[5];
                        break;
                case 2: checkWin = curBoard[6] + curBoard[7] + curBoard[8];
                        break;
                case 3: checkWin = curBoard[0] + curBoard[3] + curBoard[6];
                        break;
                case 4: checkWin = curBoard[1] + curBoard[4] + curBoard[7];
                        break;
                case 5: checkWin = curBoard[2] + curBoard[5] + curBoard[8];
                        break;
                case 6: checkWin = curBoard[0] + curBoard[4] + curBoard[8];
                        break;
                case 7: checkWin = curBoard[2] + curBoard[4] + curBoard[6];
                        break;
            }
            if(checkWin.equals("XXX")){
                return "Parabéns! \nVocê ganhou o jogo :)";
            }else if(checkWin.equals("OOO")){
                return "Fim de jogo! \nVocê perdeu :(";
            }
        }
        for(String move: curBoard){
            if(move.equals(" ")){
                return "";
            }
        }
        return "Empatou! Tente novamente";
    }

    public static int getComputerMove(String[] curBoard){
        Random rand = new Random();
        int pos = rand.nextInt(9) + 1;
        while(! curBoard[pos - 1].equals(" ")){
            pos = rand.nextInt(9) + 1;
        }
        return pos;
    }

    // IA: jogada do computador
    public static int getComputerMoveAI(String[] curBoard){
        int pos = 0;
        int bestScore = Integer.MIN_VALUE;
        for(int i = 0; i < 9; i++){
            if(curBoard[i].equals(" ")){
                curBoard[i] = "O";
                int score = minimax(curBoard, false);
                curBoard[i] = " ";
                if(score > bestScore){
                    bestScore = score;
                    pos = i;
                }
            }
        }
        return pos;
    }

    public static int minimax(String[] curBoard, boolean isMaximizing){
        String result = getWinner(curBoard);

        int factor = getFactor(curBoard);

        // estado final retorna pontuação
        if(result.contains("Empatou")) return 0;
        if(result.contains("ganhou")) return -1 * factor;
        if(result.contains("perdeu")) return 1 * factor;
                
        // caso recursivo
        int bestScore = (isMaximizing)? Integer.MIN_VALUE : Integer.MAX_VALUE;
        String symbol = (isMaximizing)? "O" : "X";
        for(int i = 0; i <9; i++){
            if(curBoard[i].equals(" ")){
                curBoard[i] = symbol;
                int score = minimax(curBoard, !isMaximizing);
                curBoard[i] = " ";
                if(isMaximizing) {
                    bestScore = Math.max(score, bestScore);
                }else{
                    bestScore = Math.min(score, bestScore);
                }
            }
        }

        return bestScore;
    }

    // retorna número de espaços disponíveis + 1
    public static int getFactor(String[] curBoard){
        int counter = 1;
        for(int i = 0; i < 9; i++){
            if(curBoard[i].equals(" ")){
                counter++;
            }
        }
        return counter;
    }
}
```
