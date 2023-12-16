---
title: "Atividade 4 – Condições"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

Muito bem!

Estamos cada vez mais perto de divulgar nossas mensagens secretas. Mas também não esqueçamos que temos que saber decifrar essas mensagens!

Para isso, vamos inserir no console um `1`, se quisermos criptografar uma mensagem, ou o número `2`, se quisermos descriptografá-la.

Para isso precisaremos de **condições**.

{{% notice tip %}}

### Condições if / else
Uma condição em programação é uma instrução ou um grupo de instruções, que pode ser executada ou não, dependendo se uma condição é verdadeira. Seria algo assim: **IF**(se) isso acontecer, execute estas instruções, **IF NOT** (else, senão), execute estas outras instruções.

Exemplo
```
if(3 > 1){
  cout << "3 é maior que 1" << endl;
}else{
  cout << "3 não é maior que 1" << endl;
}
```
O programa irá imprimir:
```
3 é maior que 1
```


1. `if(3 > 1)` verifica se o número 3 é maior que 1.
2. Se isso for verdade, então o bloco de código imediatamente após `if` será executado.
3. Caso contrário, o bloco de código após `else` será executado.
No exemplo, o bloco `else` não será executado porque a condição `if` é verdadeira - 3 é de fato maior que 1.

Para criar condições, geralmente usamos **operadores lógicos** entre parênteses `()` ao lado de `if`. Suponha `a = 5` e `b = 3`. Então, a seguir estão exemplos de operadores lógicos que podemos usar:

1. Menor que: `a <b` (5 é menor que 3?)
2. Menor ou igual a: `a <= b` (5 é menor ou igual a 3?)
3. Maior que: `a > b` (5 é maior que 3?)
4. Maior ou igual a: `a >= b` (5 é maior ou igual a 3?)
5. Igual a: `a == b` (5 é igual a 3?)
6. Não é igual: `a != b` (5 não é igual a 3?)

{{% /notice %}}

Para a atividade usaremos uma condição para saber se o que queremos é criar uma mensagem secreta (criptografá-la) ou descobrir uma mensagem (descriptografá-la).

Para isso, devemos seguir os seguintes passos:
1. Crie uma variável do tipo `int`.
2. Solicite a entrada do usuário e armazene os dados inseridos na variável do tipo `int`.
3. Crie uma condição if/else para verificar se o número inserido é igual a `1`. Se sim, então queremos criptografar a mensagem; caso contrário, queremos descriptografar a mensagem.
4. Imprima para consolar em cada caso o que desejamos fazer. Por exemplo, se `1` for inserido, imprima `"Criptografar uma mensagem"`. Caso contrário, imprima `"Descriptografar uma mensagem"`.

Se precisar de ajuda, lembre-se que você pode voltar às atividades anteriores e revisar.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-4-english" target="_blank">Iniciar Replit</a>