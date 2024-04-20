---
title: "Atividade 7 – Linha de entrada (Input line)"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

Parabéns!

Você está muito perto de salvar completamente a nação. Resta apenas poder inserir uma frase completa! Para isso só precisamos fazer algumas pequenas alterações. Primeiro, você precisa usar a instrução para inserir o `string:getline()`.
```
string phrase;
getline(cin, phrase);
```
Fazendo desta forma, o console poderá aceitar uma mensagem completa, não apenas uma única palavra.

Siga estas etapas e complete o programa para salvar o reino:

1. Na função `main`, altere a instrução `cin >> name;` para `getline(cin, name);`.
2. Em ambas as funções, adicione uma condição `if` no loop `for` e execute o conteúdo do loop `for` somente se o caractere atual for maior ou igual '>=' ao caractere 'a' e menor ou igual a '<=' ao caractere 'z'. Ao fazer isso, podemos ignorar a criptografia e descriptografia de pontos de exclamação, vírgulas, espaços e outros caracteres especiais.

Não se esqueça de como este programa funciona:
1. Primeiro, o programa pede o nome do usuário.
2. Em seguida, devemos decidir se a mensagem deve ser criptografada ou descriptografada digitando `1` (para criptografia) ou `2` (para descriptografia).
2. Por fim, digitamos a mensagem para criptografar ou descriptografar.

Crie suas próprias mensagens secretas ou descriptografe as de seus colegas!

{{< alert theme="warning" >}} **Atenção:** neste programa devemos sempre escrever as strings e caracteres em **letras minúsculas**. {{< /alert >}}

Lembre-se que você sempre pode voltar às atividades anteriores para revisar qualquer coisa!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-7-english" target="_blank">Iniciar Replit</a>
