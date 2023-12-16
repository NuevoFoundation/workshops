---
title: "Activity 2 - Variables and Inputs"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Incrível! Agora vamos dar um passo adiante. Agora não apenas imprimiremos a mensagem, mas também inseriremos o nome do destinatário e faremos nosso programa dizer "Olá".

Para fazer isso precisaremos de **variáveis**.


{{% notice tip %}}

### Variáveis

Uma **variável** é um contêiner que armazena informações. Existem muitos tipos de variáveis, cada uma armazenando diferentes tipos de informações:

1. **string**: representa uma sequência de caracteres, letras, números e símbolos. **strings**s são sempre colocadas entre aspas duplas. Exemplos: `"olá"`, `"1,2,3"`.
2. **int**: representa números inteiros positivos ou negativos. Exemplos: `1`, `100`, `-250`.
3. **char**: representa um único caractere. Exemplos: `'A'`, `'e'`, `'I'`. **char**s são sempre colocados entre aspas simples.
4. **bool**: representa um valor `true` ou `false`.

Para criar uma variável, declare-a da seguinte forma:

```
número int = 10;
```
Vejamos esta linha de código com mais detalhes:

Primeiro precisamos especificar o tipo de informação que será armazenada dentro daquela variável. Neste caso, será do tipo `int`. Então precisamos declarar o nome do container; neste caso, nomearemos nossa variável como `number`. Finalmente especificamos o valor que o contêiner irá conter; neste caso `10`. Terminamos com ponto e vírgula para indicar que a linha está completa.

Agora podemos usar a variável `number` dentro do programa para referenciar o número armazenado. Se quisermos imprimir seu valor, usaremos a seguinte linha de código:

```
cout << "O número é: " << número << endl;
```
 
Executando esta linha de código, o console irá imprimir:

```
O número é: 10
```
{{% /notice %}}

{{< notice note >}}
Podemos usar `cout` para imprimir palavras, números ou variáveis. Se quiséssemos imprimir mais de uma coisa, teríamos que adicionar `<<` entre cada termo:
Exemplo:
```
int hour = 1;
cout << "É " << hora << " hora da tarde" << endl;
```
This will print:
```
É 1 hora da tarde.
```
{{< /notice >}}

A seguir, gostaríamos que o destinatário da mensagem pudesse escrever seu nome no console (que armazenaremos dentro de uma variável) e que o programa lhe dissesse "Olá".

Para inserir o nome, usaremos o seguinte código:
```
nome da string;
cin >> nome;
```
Vamos nos aprofundar nesta linha de código.

{{% notice tip %}}

### Entrada do console

Semelhante a como podemos imprimir no console usando `cout`, podemos inserir dados no console usando `cin` e especificando o nome da variável na qual a entrada será armazenada.

No exemplo anterior estamos afirmando que quaisquer dados que inserirmos, eles serão armazenados dentro da variável `name`.

Dito isto, se inserirmos:
```
Rainha
```
Então a variável `name` armazenará a string `"Rainha"`.

{{% /notice%}}

Agora é hora de começar nosso programa.

Estas são as etapas a seguir para esta atividade:

1. Declare uma variável de string chamada `nome`.
2. Use `cin` para solicitar entrada do usuário e armazene os dados inseridos na variável `nome`.
3. Imprima no console `"Olá (nome)"`, onde `(nome)` deve ser substituído pelo valor da variável `nome`.
4. Clique em Executar. Digite `"Rainha"` como o nome do destinatário na guia **console** e certifique-se de obter `"Olá Rainha"` como saída do console.


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-2-english" target="_blank">Iniciar Replit</a>

{{% notice warning %}}

### AJUDA!

Se após clicar no botão Executar aparecer uma mensagem de erro em vermelho, significa que há algo errado com seu código. Por favor, peça ajuda ao seu instrutor.

Você também deve verificar o seguinte
1. Certifique-se de que a ortografia, letras maiúsculas e símbolos utilizados correspondam ao exemplo dado.
2. Certifique-se de adicionar um ponto e vírgula no final de cada linha de código.
3. Lembre-se que todas as strings devem estar entre aspas.
4. Todo o código que você escreve precisa estar entre colchetes `{}` na função `int main`.

{{% /notice %}}


