---
title: "Comentários"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Desenvolvedores frequentemente precisam colaborar com outros desenvolvedores. Comentários são uma maneira fácil para os desenvolvedores escreverem notas no código e se comunicarem com os outros. Comentários são ignorados pelo computador; assim, eles também são uma maneira fácil de dizer ao computador para não executar certas linhas de código. Existem duas maneiras de criar comentários:

1. Para comentar uma linha, coloque `//` na frente de uma linha de código. Por exemplo:

```kotlin
// Este é um comentário de uma única linha.
```

2. Para comentar várias linhas de uma vez, indique o início do comentário com `/*`  e o final do comentário com `*/`. Por exemplo:

```kotlin
/* Este é um comentário de várias linhas.
Esta linha também faz parte do comentário. */
```

Para remover um comentário (ou descomentar uma linha), basta excluir o `//` para um comentário de uma única linha ou os caracteres `/*` e `*/` para o comentário de várias linhas.

{{% notice tip %}}
## Trabalhando Juntos

1. Digite `//` na frente de `Toast.makeText(this, "Bem-vindo ao Jogo da Velha”, Toast.LENGTH_LONG).show()`. Depois de pressionar o botão de reprodução (►), verifique se `Bem-vindo ao Jogo da Velha` não aparece na tela.
2. Exclua o `//` e, em vez disso, envolva `Toast.makeText(this, "Bem-vindo ao Jogo da Velha”, Toast.LENGTH_LONG).show()` com `/*` e `*/`. Verifique se `Bem-vindo ao Jogo da Velha` ainda não é impresso no console depois de pressionar o botão de reprodução (►).
3. Exclua ambos `/*` e `*/`, e pressione o botão de reprodução (►). Bem-vindo ao Jogo da Velha agora deve ser impresso no console.
 Ao longo dos quebra-cabeças de hoje, você verá vários comentários de várias linhas e comentários `// PUZZLE` (como o do Quebra-cabeça 2). Esses comentários nos guiarão para completar o jogo da velha, então tenha certeza de entender como comentar e descomentar o código.

{{% /notice %}}