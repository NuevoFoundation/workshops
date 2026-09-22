```markdown
---
title: "Laços While"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Um loop `while` é exatamente isso, uma seção de código que continua executando algumas ações "enquanto" a condição for verdadeira. Começamos com a palavra `while` seguida pela condição que deve ser verdadeira, entre parênteses `()`, e depois colocamos a ação (ou ações) a ser realizada dentro de chaves `{}`. Aqui está a configuração:

```javascript
// Configuração do loop While
while (condição é verdadeira) {
  // ação a ser realizada
}
```

Agora vamos entrar em alguns exemplos!

## Exemplos
Suponha que queremos criar um loop que rode 8 vezes.

```javascript
// Exemplo de 8x
let i = 0; // define uma variável de contador
while (i < 8) {
  i++; // avança para a próxima iteração do loop (faz o loop rodar novamente por esta parte)
}
```

A condição também pode ser uma declaração, como um booleano (verdadeiro/falso). Por exemplo, suponha que queremos ler diferentes comentários em um vídeo até lermos todos eles. Para fazer isso em um loop while, precisaríamos de algumas variáveis diferentes (você pode ignorar as palavras avançadas sobre nodes).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // esta é uma forma de passar de um comentário para o próximo no vídeo
let currentComment; // este é um espaço reservado para o comentário atual


// este loop while continuará em execução enquanto houver um "nextNode", que é outra maneira de dizer que há outro comentário depois deste
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // isso imprime o comentário atual para que possamos lê-lo!
}
```
```