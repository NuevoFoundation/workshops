---
title: "Lendo do Console"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## Lendo do Console

Agora que sabemos o básico sobre variáveis, agora podemos aceitar a entrada do usuário. Use a linha a seguir para dizer ao console para aguardar até que o usuário digite algo no console. Em seguida, o computador pega o que é digitado no console e o armazena na variável chamada `input`.

```csharp
var input = Console.ReadLine();
```

Aqui está um exemplo de como usar `Console.ReadLine` para aceitar a entrada do usuário:

```csharp
Console.WriteLine("Digite algo:");
var input = Console.ReadLine();
Console.WriteLine("Você digitou: " + input);
```

Quando o usuário pressiona **run**, o usuário é recebido com o seguinte programa:

![alt text height="600px" width="70%"](../media/reading-input-1.png "Lendo a partir da entrada antes de digitar na entrada")

Nesse caso, depois que o usuário digita `Hello World!` no console, o programa termina de enviar para o console:

![alt text height="600px" width="70%"](../media/reading-input-2.png "Leitura da entrada após a digitação na entrada")

{{% notice tip %}}

## Trabalhando juntos

Escreva um programa que primeiro imprima as duas linhas a seguir no console:

```
Bem-vindo!
Em que posso ajudar você?
```

Depois, o console aguarda a entrada do usuário. Depois que o usuário digita algo e pressiona Enter, o computador imprime:

```
Você perguntou: [entrada]?
Não sei a resposta para isso! Até logo!
```

`[input]` deve ser substituído pelo que o usuário digitou no console.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Executar Replit</a>

{{% /notice %}}
