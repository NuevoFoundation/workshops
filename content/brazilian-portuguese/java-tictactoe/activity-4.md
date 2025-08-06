---
title: "4. Verificar o vencedor"
description: "escreva um método para verificar o vencedor com um tabuleiro de entrada"
date: 2021-10-14T00:00:00Z
prereq: "Configurar o Tabuleiro!, Ler e Processar Entrada, Atualizar o Tabuleiro do Jogo"
difficulty: "Intermediate"
weight: 5
---

## Mostrando um Vencedor

Escreva um método `getWinner(String[] curBoard)` que retorne o vencedor em uma `String` com um `array` de entrada do tabuleiro atual do jogo.

- Se o jogador ganhar, retorne `"Parabéns! \nVocê venceu o Jogo :)"`.
- Se o computador ganhar, retorne `"Fim de Jogo! \nVocê perdeu o Jogo :("`.
- Se houver empate, retorne `"Empatou! Tente novamente"`.
- Se ainda não houver vencedor, retorne `""`.

Existem várias formas de escrever esse método.

Tente primeiro no Replit a seguir; ele vai dizer se seu método está escrito corretamente!
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaTicTacToegetWinner" target="_blank">Abrir Replit</a>

{{% notice note %}}
#### Ideias/Dicas para escrever o método `getWinner()`

- Concatene as `Strings` nas 3 posições que formam uma linha horizontal, vertical ou diagonal.
- Use `equals()` para verificar se cada uma das Strings concatenadas é `"XXX"` ou `"OOO"` para definir um vencedor. (Você também pode criar outro método que verifique se uma `String` de entrada é `"XXX"` ou `"OOO"`).
- Se todos os espaços no array estiverem preenchidos (um `for loop` pode ajudar) e não houver vencedor, o jogo termina em empate.
{{% /notice %}}

## Chamando o Método do Vencedor

No `main()`, chame o método `getWinner()` depois da linha de código onde você coloca a jogada do jogador, `"X"`.

Verifique se o jogo deve continuar (quando não há vencedor nem empate).

Se houver um vencedor ou empate, imprima o tabuleiro final e o resultado do jogo! E adicione a linha de código `break;`, que faz o programa sair do `while` loop!

## Repetir o Passo Acima

No `main()`, repita o código do passo anterior (verificar vencedor e imprimir resultado se necessário) depois que você colocar a jogada do computador, `"O"`.

## Fechar o Objeto Scanner

Fora do laço while, adicione o código `sc.close()` para fechar o objeto `Scanner` e parar de ler novas entradas.

É uma boa prática fechar o objeto `Scanner` se não vamos mais receber entradas depois de dar `break` no `while` loop!

## Tudo Pronto :)!

Agora você deve ter um jogo da velha funcionando! Você deve estar muito orgulhoso(a) por terminar este workshop! Bom trabalho 👍!

##### Como resumo, essa deve ser a estrutura do seu código:
<img src="../images/code.png" height="500" alt="Jogo da Velha: Seu Projeto Java. void main(String args[]) que lê as entradas do jogador, processa entradas e apresenta cada rodada do jogo ou imprime o vencedor. void printBoard(String[] curBoard) é um método para imprimir o tabuleiro. int getComputerMove(String[] curBoard) retorna aleatoriamente uma jogada disponível para o computador. String getWinner(String[] curBoard) retorna o vencedor do jogo/EMPATE ou '' se o jogo deve continuar."/>
