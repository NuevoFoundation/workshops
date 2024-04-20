---
title: "Atividade 5 - Código ASCII"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Isso é ótimo!

Nesta atividade iremos criptografar (tornar secreto) o nome do destinatário.

Vamos usar o **Código ASCII**

{{% notice tip %}}

### Código ASCII

O código ASCII mostra que cada caractere possui um valor numérico. Por exemplo, o caractere `A` é o número 65, `B` é 66, `C` é 67, etc.

A lista a seguir mostra o valor dos caracteres mais comumente usados:

![Lista de códigos ASCII](../media/ascii-english.png)

Como cada caractere possui um valor numérico, podemos usar isso para adicionar ou subtrair valores a essas letras, e assim alterar a ordem delas de uma determinada maneira. Permite-nos converter caracteres (`char`) em números (`int`) e vice-versa.

Exemplo
```
char letra = 'A';
int letra_valor = letra;

cout << letra << " = " << letra_valor << endl;
```
Isso imprimirá:
```
A = 65
```

Neste exemplo, salvamos o caractere em uma variável do tipo **char**. Então, em uma variável do tipo **int** salvamos a variável do tipo char, mas como a segunda variável salva números, ela irá converter o caractere em seu valor numérico de acordo com o código ASCII.

Poderíamos fazer o oposto, por exemplo:
```
int letra_valor = 67;
char letra = letra_valor;
cout << letra_valor << " = " << letra << endl;
```
Isso imprimirá:
```
67 = C
```
{{% /notice %}}

Para criar a mensagem secreta utilizaremos uma palavra-chave, a partir da qual codificaremos o nome. A ideia é percorrer cada caractere do nome com uma instrução **for** e, ao mesmo tempo, percorrer cada caractere da palavra-chave. Em seguida adicionaremos o valor do caractere do nome e da palavra-chave, e o resultado será um novo caractere, que tornará a mensagem criptografada.

Por exemplo, se minha palavra-chave for `'queen` e o nome que desejo criptografar for `programmer`, o programa terá que adicionar o `'r'` e o `'p'`, e salvar o resultado no lugar de 'p 'na string "programmer". Então eu adicionaria o `'r'` e o `'e'`, o `'o'` e o `'i'` , etc. Quando estamos no caractere 5 da string do programador (contado o primeiro como 0 ), teremos que virar na string da rainha e iniciar no caracter retornado 0, ou seja, a letra `'r'`, já que a string da rainha não possui mais caracteres.

Para isso vamos reunir parte do que já fizemos, e devemos seguir os seguintes passos:

1. Primeiro, crie uma variável do tipo `string` para ser a palavra-chave.
2. Armazene a entrada recebida do console nesta variável. Este será o nome.
3. Repita as duas primeiras etapas, mas isso armazenará a palavra-chave.
3. Declare um loop `for` e use uma variável do tipo `int` inicializada em 0. Adicione `1` a esta variável para cada ciclo do loop e continue o loop enquanto a variável for menor que a `string` `tamanho` da variável.
4. No corpo do loop `for`, crie uma variável `int` que seja igual à soma do caractere do nome (`nome[i]`) e do caractere da palavra-chave na posição do contador (`chave[contador] `). Desta soma devemos subtrair uma letra minúscula `'a'` para que a soma corresponda a uma letra e não a algum outro caracter aleatório do código ASCII.
5. Use uma instrução `if` para determinar se a soma dos caracteres corresponde a um caractere maior que `'z'`. Nesse caso, subtraia `25` (o número de letras do alfabeto) para garantir que obteremos uma letra verdadeira no alfabeto.
6. Defina o caracter `nome[i]` como o valor contido na variável `sum`. Isso mudará a letra original para o novo caractere.
7. Adicione `1` ao contador que carregamos da palavra-chave.
8. Verifique se o contador de palavras-chave é maior ou igual ao comprimento da string `chave`; em caso afirmativo, redefina o contador para `0`.
9. Finalmente, após a instrução `for`, imprima a mensagem criptografada no console.

Lembre-se que você sempre pode voltar às atividades anteriores para revisar qualquer coisa!

Assim que as etapas forem concluídas, comece a jogar e criptografar suas palavras! Pressione **Executar** e digite no console a palavra-chave seguida da tecla Enter e, a seguir, o nome ou palavra a ser criptografada, seguida também de Enter. Por exemplo, você pode copiar e colar o seguinte em seu console:
```
programador
rainha
```
{{< alert theme="warning" >}} **Atenção:** neste programa devemos sempre escrever as strings e caracteres em **letras minúsculas**. {{< /alert >}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-5-english" target="_blank">Iniciar Replit</a>

{{< alert theme="danger" >}}**Importante:** Para colar no console, clique com o botão direito no console e clique em "Colar". Caso contrário, a operação de colagem poderá não funcionar corretamente. {{< /alert >}}
© 2022 GitHub, Inc.
