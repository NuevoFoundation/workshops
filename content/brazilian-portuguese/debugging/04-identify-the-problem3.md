---
title: "Passo 1 - Encontrando o problema (Parte 3)"
difficulty: "Intermediário"
weight: 5
draft: false
---

## Depuradores

Depurar código é um problema tão comum que existem programas feitos especialmente para ajudar outros programadores a depurar com mais eficiência. Eles são chamados de **depuradores**, e existem muitos depuradores que funcionam com a linguagem C. Vamos dar uma olhada no `gdb`, um depurador comum usado no terminal.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Para nossos exemplos, vamos usar o algoritmo <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Quicksort</a>.

**Quicksort** é um algoritmo que ordena um array selecionando primeiro um elemento do array como `pivô`.

Em seguida, os elementos são organizados de acordo com uma das condições abaixo:
- Elementos menores que o pivô.
- Elementos maiores que o pivô.

Depois que a ordenação é feita, o mesmo processo é chamado recursivamente nas partes superior e inferior do array, usando o pivô como ponto de referência.

{{% notice note %}}
Nossa versão do quicksort assume que o elemento mais à esquerda é o "maior" elemento e o mais à direita é o pivô dentro da partição.
{{% /notice %}}

|![Quicksort usando o pivô como o elemento mais à direita.](../resources/debugging_process_quicksort.svg "Processo multi-etapas do quicksort usando o pivô como o elemento mais à direita.")|
|:--:|
|Figura 1: Quicksort usando o elemento mais à direita como pivô e assumindo que o elemento mais à esquerda é o "maior" elemento.|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) é um depurador poderoso que permite depurar programas a partir da linha de comando, o que é útil em casos onde você não tem acesso a uma interface gráfica (GUI).

É importante entender como o programa funciona para depurar de forma eficaz. Nossa implementação de 'quicksort' executa uma implementação recursiva de quicksort e realiza a ordenação se o elemento atual for menor que o pivô, assumindo que o primeiro elemento é o "maior" elemento. A ordenação em si ocorre na função `partition`.

### Passos para depurar com GDB
#### Compile o programa
1. Abra a aba **Shell** e compile o programa:

```bash
make Quicksort
```

{{% notice note %}}
Quando o programa é compilado, as flags: `-g` e `-Og` são usadas. A primeira indica ao compilador que adicione **informações de depuração**, o que significa que sem essa flag, o gdb não seria capaz de depurar o programa. A segunda diz ao compilador para otimizar o programa de uma forma que não afete a estrutura de execução. Sem `-Og`, o compilador poderia otimizar parte do seu código, tornando o depurador menos eficaz.

É importante lembrar da segunda flag. Para depuração, você deve **SEMPRE** garantir que o compilador faça otimizações mínimas no seu código, pois otimizações podem alterar drasticamente como o código é executado!
{{% /notice %}}

#### Execute o programa
1. Digite o comando `gdb examples/Quicksort`. Isso abrirá a interface de linha de comando do GDB. Para depurar um programa com `gdb` você pode usar `gdb <nome do programa>`.

2. Certifique-se de que o GDB exibe `Reading symbols from ./examples/Quicksort...`, caso contrário você não anexou o programa ao GDB.

3. Você pode sair do GDB digitando o comando `quit` (ou qualquer prefixo: `q` funciona) como se fosse um comando normal do shell.

Você deve ver algo como isto:

|![Executando GDB no arquivo 'Quicksort'.](../resources/w4-01.png "Captura de tela do console após rodar GBD no arquivo 'Quicksort'.")|
|:--:|
|Figura 2: Executando GDB no arquivo 'Quicksort'.|

#### Depurando o programa

Para depurar o programa, precisamos executá-lo a partir do GDB.

1. Digite o comando `run` (ou `r`). Isso executará o programa como se você o tivesse rodado pelo terminal normal.
```bash
(gdb) run
```

O programa primeiro imprime o conteúdo do array a ser ordenado: um array de números desordenados. Em seguida, ele executa o algoritmo de ordenação e, por fim, imprime o array ordenado. Você pode ver como os elementos mudam de posição durante a ordenação!

No entanto, parece que a ordenação não está acontecendo como esperado.

Vamos usar uma das ferramentas mais importantes que os depuradores oferecem: **breakpoints**. Um breakpoint informa ao depurador para pausar o programa sempre que atingir aquela linha de código. Isso permite que você veja o que está acontecendo no programa em tempo real. Note que o depurador não executa a linha onde o breakpoint está até você continuar a execução.

Primeiro vamos identificar onde a ordenação dos elementos acontece. Você sabe onde isso está acontecendo?
{{% expand "***Resposta***" %}}
A ordenação ocorre dentro do loop `for` e ao final do processo, quando o pivô é trocado com o elemento "maior".
{{% /expand %}}
<br/>

2. Coloque um breakpoint onde a ordenação acontece usando a sintaxe `break <arquivo:linha>`.
{{% expand "***Resposta***" %}}
```bash
(gdb) break quicksort.c:27
``` 
{{% /expand %}}
<br/>

3. Rode o programa com `run` e observe como ele para ao chegar no breakpoint.

4. Enquanto o programa está pausado, você pode ver os valores das variáveis. Teste alguns comandos `print` para avaliar expressões. Aqui está um exemplo de como usar `print`:
```bash
# você pode imprimir o valor de uma variável
print minhaVariavel

# você pode criar expressões mais elaboradas
print minhaVariavel + 2 
```

5. Você pode avançar manualmente no código usando `next` (ou `n`), que fará o depurador avançar para a próxima linha de código **sem entrar em uma função**.

6. O comando `step` move o depurador para a primeira linha de código dentro de uma chamada de função.

Você precisa encontrar as variáveis com problema que estão fazendo o programa não funcionar como esperado. Tente ver se você consegue identificar o problema!

{{% expand "***Dica: Observe como as variáveis no loop mudam.***" %}}
Como colocamos o breakpoint dentro do loop, a cada iteração devemos ver os valores `p1` e `p2` mudarem.

Tente imprimir essas variáveis cada vez que o depurador parar.
```bash
(gdb) disp p1
(gdb) disp p2
```
{{% /expand %}}
{{% expand "***Resposta***" %}}
A variável `p1` não está sendo incrementada quando um número menor que o pivô é encontrado. Lembre-se que nossa versão assume que cada vez que um elemento menor é encontrado, o ponteiro do elemento maior deve ser atualizado.

Adicione `p1++;` após a instrução `swap` na linha 27.

|![Corrigindo nosso algoritmo quicksort.](../resources/debugging_process_fixing_quicksort.svg "Trecho do código onde 'p1++;' é adicionado após a linha 27")|
|:--:|
|Figura 3: Corrigindo nosso algoritmo quicksort.|
{{% /expand %}}
<br/>

Note que todos os depuradores compartilham os mesmos conceitos básicos: eles permitem que você avance pelo seu código em tempo real. Você deve quase sempre usar depuradores em vez de apenas `print`. Você não vai se arrepender!

### Comandos do GDB
Existem muitos comandos que o GDB oferece. Esta tabela resume alguns úteis, mas também recomendamos usar esta [GDB Reference Sheet](https://cs.brown.edu/courses/cs033/docs/guides/gdb.pdf) para ver mais comandos.

| Comando | O que faz |
|---|---|
| `gdb <nome do programa>` | Executa/carrega o programa com o GDB |
| `run` ou `r` | Executa o programa carregado |
| `quit` ou `q` | Sai do GDB |
| `break <arquivo:linha>` | Cria um breakpoint na linha especificada do arquivo |
| `print <nome da variável>` ou `print <expressão>` | Exibe o valor de uma expressão que pode conter variáveis e constantes |
| `next` ou `n` | Avança para a próxima linha de código sem entrar em uma função |
| `step` | Avança para a primeira linha de código dentro de uma função | 
| `continue` ou `c` | Continua executando o código até o próximo breakpoint | 
| `delete <nº do breakpoint>` ou `d <nº do breakpoint>` | Deleta o breakpoint na linha especificada |
| `backtrace` ou `bt` | Exibe a pilha de chamadas (stack trace) mostrando quais funções foram chamadas até a linha atual |
