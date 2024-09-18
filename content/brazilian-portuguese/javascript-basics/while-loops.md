---
title: "Laços While"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Um laço `while` é exatamente isso: é uma seção de código que continua executando algumas ações "enquanto" a condição for verdadeira. Começamos com a palavra `while` seguida pela condição que é verdadeira entre parênteses `()`, e então colocamos a ação (ou ações) a serem realizadas dentro de chaves `{}`. Aqui está a configuração:

```javascript
// Configuração do laço While
while (condição é verdadeira) {
  // ação a ser realizada
}
```

Agora vamos ver alguns exemplos!

## Exemplos
Digamos que queremos criar um laço que execute 8 vezes.

```javascript
// Exemplo 8x
let i = 0; // definir uma variável de contador
while (i < 8) {
  i++; // avança para a próxima iteração do laço (faz o laço executar esta parte novamente)
}
```

A condição também pode ser uma declaração, como um booleano (verdadeiro/falso). Por exemplo, digamos que queremos ler diferentes comentários em um vídeo até lermos todos eles. Para fazer isso em um laço while, precisaríamos de algumas variáveis diferentes (você pode ignorar as palavras sofisticadas de nó).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // esta é uma maneira de passar de um comentário para o próximo no vídeo
let currentComment; // este é um espaço reservado para o comentário atual


// este laço while continuará em execução enquanto houver um "nextNode", que é outra maneira de dizer que há outro comentário após este
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // isso exibe o comentário atual para que possamos lê-lo!
}
```