---
title: "Atividade 3 - Loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Ótimo!

O Rei solicitou agora que introduzamos a nossa mensagem letra por letra para que possamos alterá-la posteriormente.

Para fazer isso, precisamos de algo chamado **loops**. Os loops nos permitem executar um bloco de código várias vezes. Vamos ver o exemplo abaixo que usa um loop para imprimir alguns números.

```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Vamos tentar entender o que essa linha de código faz.

{{% notice tip %}}


### Loops

 `for(int i=0; i<3; i++) { }`. 
Isso informa ao programa que as instruções contidas entre colchetes `{}` devem ser executadas em um loop.
Podemos identificar três partes diferentes dentro deste comando:
1. `int i=0;` declara uma variável int chamada `i` que será inicializada como `0`. Esta variável funcionará como um contador de quantas vezes estivemos no loop.
2. `i<3;` é a condição que precisa ser atendida para que o loop continue funcionando. Se o valor da variável `i` for menor que `3`, o loop continuará em execução.
3. `i++` adicionará 1 à variável `i` no final de cada loop.
A parte mais importante a retirar disto é que esta é a forma geral de repetir as instruções um certo número de vezes (neste caso, 3 vezes).

{{% /notice %}}

Uma propriedade das variáveis ​​**string** é que podemos contar a quantidade de caracteres na string. 

{{% notice tip %}}

### Acessando cada caractere de uma string

Cada caractere de uma variável de string é chamado de **char**. Podemos acessar esse `char` pela posição que ele contém dentro da string. Vamos imaginar isso como uma lista de caracteres. O primeiro caractere estará na posição `0`, o segundo na posição `1`, e o próximo na posição `2`, e assim por diante.

Dito isto, precisaríamos do seguinte código para acessar cada caractere:

```
palavra da string = "olá";
letra char = palavra[0];
cout << "A primeira letra é: " << letra << endl;
```
Isso imprimiria:
```
A primeira letra é: o
```

### Tamanho da string

Além de acessar cada caractere individual em uma string, também podemos saber o quão longa ela é usando as seguintes linhas de código:

```
string palavra = "olá";
int tamanhoPalavra = palavra.size();
cout << "O tamanho é: " << tamanhoPalavra << endl;
```
Isso imprimiria:
```
O tamanho é: 3
```
{{% /notice %}}

Agora modificamos o código que tínhamos para imprimir cada letra do nome em vez de um olá.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-3-english" target="_blank">Iniciar Replit</a>

