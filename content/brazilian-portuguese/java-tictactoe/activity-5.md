---
title: "5. (Opcional) Jogada da IA"
description: "Use o algoritmo Minimax para escolher a jogada do computador"
date: 2021-10-14T00:00:00Z
weight: 6
prereq: "Prepare o Tabuleiro!, Leia e Processe a Jogada, Atualize o Tabuleiro, Verifique o vencedor"
difficulties: ["advanced"]
---

### Vamos fazer o computador pensar

Antes, usamos um objeto `Random` para gerar uma jogada aleatória para o computador. Por isso, o computador não era muito difícil de vencer.

Neste exercício, queremos aumentar a dificuldade do jogo fazendo o computador tomar decisões melhores.

Vamos fazer isso adicionando inteligência artificial ao nosso programa usando o algoritmo **Minimax** (um procedimento bem definido que permite aos computadores resolver problemas).

### Algoritmo Minimax

Minimax é um algoritmo usado em jogos de dois jogadores para tomar decisões ótimas para um jogador.

- Os dois jogadores são chamados de <b>maximizador</b> e <b>minimizador</b>. Enquanto o maximizador tenta ganhar, o minimizador tenta evitar perder.
- O algoritmo examina todos os possíveis estados futuros do jogo, assumindo que ambos vão escolher a jogada que mais os beneficia.
- No nosso caso, o computador será o maximizador e o jogador será o minimizador. Vamos tentar fazer o computador tomar a melhor decisão para vencer!

### Como o Minimax funciona no Jogo da Velha?

- Examinamos todas as jogadas possíveis de `"X"` e `"O"` e damos uma pontuação para o tabuleiro se houver um vencedor ou empate.
- Como queremos que o computador vença com o menor número de jogadas, criamos a pontuação assim:

- Se o computador vencer, calcule a pontuação com a fórmula `1 * (número de espaços livres no tabuleiro + 1) `.
- Se o jogador vencer, calcule a pontuação com a fórmula `-1 * (número de espaços livres no tabuleiro + 1)`.
- Se empatar, a pontuação é `0`.
- Ao dar pontuações maiores para estados onde o computador pode vencer com menos jogadas, ensinamos o código a escolher a jogada ótima para o computador.

Veja o exemplo abaixo:

<img src="../images/minimax.png" height="500" alt="exemplo de opções para vencer o jogo da velha como descrito no texto acima." /> 

1. Na primeira linha, consideramos as 3 jogadas possíveis para o computador `"O"`, que é o maximizador.
2. Examinamos todos os estados do jogo até que todas as jogadas terminem com vitória do computador, vitória do jogador ou empate. Depois damos a pontuação correspondente.

    Por exemplo, no segundo tabuleiro da linha 1, o computador vence colocando `"O"` na posição 8. Esse estado recebe a pontuação `1 * (número de espaços livres no tabuleiro + 1)` = `1 * (2+1)` = `3`.

3. Nos estados que não têm vencedor ou empate, escolhemos a menor pontuação nas rodadas de minimização (quando `"X"` joga) e a maior pontuação nas rodadas de maximização (quando `"O"` joga).
4. Se você seguir as rodadas de maximização/minimização na imagem acima, verá que a jogada ótima para o computador é colocar `"O"` na posição 8, permitindo que ele vença com 1 jogada a partir do tabuleiro inicial.

### Estrutura do Código

Na atividade-3, você escreveu o método `int getComputerMove(String[] curBoard)` para gerar uma jogada aleatória para o computador. Agora, vamos escrever outro método chamado `getComputerMoveAI(String[] curBoard)` que retorna a jogada ótima para o computador chamando o método `int minimax(String[] curBoard, boolean isMaximizing)`.

```java
int getComputerMove(String[] curBoard){
    // 1. este método chama minimax() para todas as jogadas possíveis do computador
    // 2. pega o maior valor entre todas elas
    // 3. retorna a jogada ótima
}
int minimax(String[] curBoard, boolean isMaximizing){
    // 1. Na rodada de maximização, chama minimax() para todas as jogadas possíveis do computador, "O", retorna a maior pontuação
    // 2. Na rodada de minimização, chama minimax() para todas as jogadas possíveis do jogador, "X", retorna a menor pontuação
}
```

{{% notice note %}}

- O método `minimax()` é uma <b>função recursiva</b>, ou seja, ela chama a si mesma dentro da sua própria implementação.
- No nosso método, `minimax()` chama a si mesma com diferentes tabuleiros colocando `"X"` ou `"O"` em cada espaço livre. E, o método escolhe o maior ou menor valor dependendo se é uma rodada de maximização ou minimização.

{{% /notice %}}

### Escreva o Método `getComputerMoveAI()`

1. Para cada espaço livre no tabuleiro, coloque `"O"` naquele espaço e obtenha a pontuação desse tabuleiro chamando `minimax()`.

{{% notice hint %}}

- Lembre-se de passar `false` como segundo argumento, pois será a vez do minimizador.
- Você deve voltar o espaço para `" "` depois de obter a pontuação, assim mantém o estado original do tabuleiro para a próxima rodada.
{{% /notice %}}

2. Guarde a maior pontuação e a posição correspondente do tabuleiro em cada rodada. Retorne a posição com a maior pontuação.

{{% notice hint %}}

- Tenha uma variável chamada `bestScore` que guarda a melhor pontuação atual e comece com o valor `Integer.MIN_VALUE` (menor valor possível de um inteiro).
- Isso é útil para encontrar o maior valor em uma estrutura de dados.
Por exemplo:

```java
public int getLargestNum() {
    // o código abaixo encontra o maior valor no array "nums"
    int[] nums = {3, 5, -2, 10};
    int largestNum = Integer.MIN_VALUE;
    for(int i = 0; i < nums.length; i++){
        if(nums[i] > largestNum){
            largestNum = nums[i];
        }
    }
    return largestNum;
}
```

{{% /notice %}}

### Escreva o Método `minimax()`

Como discutimos acima, o método `minimax()` tem o cabeçalho `int minimax(String[] curBoard, boolean isMaximizing)`.

1. Chame `getWinner()` no tabuleiro para verificar se há um vencedor. Se sim, retorne a pontuação correspondente.

    (Pontuação: computador vence (`1 * número de espaços livres no tabuleiro + 1`), jogador vence (`-1 * número de espaços livres no tabuleiro + 1`), empate (`0`)).

2. Obtenha a Pontuação Minimax

- Se for a vez do maximizador (`"O"`), para cada espaço livre no tabuleiro, coloque `"O"` naquele espaço e obtenha a pontuação desse tabuleiro chamando `minimax()`.

- Se for a vez do minimizador (`"X"`), para cada espaço livre no tabuleiro, coloque `"X"` naquele espaço e obtenha a pontuação desse tabuleiro chamando `minimax()`.

3. Retorne a Maior Pontuação

- Se for a vez do maximizador (`"O"`), guarde a maior pontuação e a posição correspondente em cada rodada, e retorne essa pontuação.
- Se for a vez do minimizador (`"X"`), guarde a menor pontuação e a posição correspondente em cada rodada, e retorne essa pontuação.

### Teste seus métodos

Copie e cole seus dois métodos abaixo do `main()`.

Clique em `Executar` para testar seus métodos. Nós fornecemos um teste do exemplo da imagem acima.

Você pode testar diferentes tabuleiros para ver se o resultado está correto.
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToeminimax" target="_blank">Abrir no Replit</a>

{{% notice tip %}}
Lembre-se de testar seus métodos!
{{% /notice %}}

### Atualize o Programa

Depois de testar os métodos, troque todas as chamadas do método `getComputerMove()` por `getComputerMoveAI()` no seu programa de Jogo da Velha.

Vai ficar muito mais difícil vencer o computador agora😀!
