---
title: "Imprimindo no console"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
Às vezes, o jogo ou aplicativo pode não funcionar da maneira esperada ou você deseja gravar algo no console para fins de registro. Fora da depuração do aplicativo, você pode usar `System.out.println()` para escrever sua mensagem. Procure suas mensagens na janela "logcat" na parte inferior do Android Studio:
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Janela Logcat no Android Studio mostrando mensagens criadas usando a função de registro System.out.printLn"/>

{{% notice tip %}}

## Trabalhando juntos

1. Sem remover as aspas, tente alterar `"Reiniciando o jogo da velha!"` para `"Reiniciando o jogo Tic-Tac-Toe!"` ou qualquer outra frase que desejar. Pressione executar para ver se alguma coisa muda.
2. Adicione outro `System.out.println` abaixo da linha atual para imprimir uma segunda frase abaixo da primeira frase.
3. Pressione executar para ver se duas frases foram impressas. Se você vir algum texto em vermelho, peça ajuda.

{{% /notice %}}

{{% notice warning %}}
## AJUDA! Recebi muito texto em vermelho!

Se você vir algum texto em vermelho, você encontrou alguns erros! Por favor, peça ajuda. Cuidado com o seguinte ao codificar no Android:

1. `out` e `println` começam com uma letra minúscula.
2. `System` começa com uma letra maiúscula.
2. Certifique-se de que a frase que deseja imprimir esteja entre aspas e que a frase esteja entre parênteses.
3. Não exclua chaves `{` ou `}`.

{{% /notice %}}

`System.out.println` é útil quando você deseja corrigir bugs no código, mas seu usuário (a pessoa que usa o aplicativo) não consegue ver o texto impresso com esta função. Mas podemos fazer isso com brindes! Um brinde é um texto pequeno e rápido que tornamos visível para o usuário. Veja como fazer um brinde:

```kotlin
Toast.makeText(this, "Texto que queremos mostrar", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Toast Example" alt="exemplo de torrada. Você pode usar a função brinde.makeText com o contexto dos argumentos, a string da mensagem e Toast.LENGTH_LONG ou Toast.LENGTH_SHORT para exibir uma mensagem de boas-vindas, como Bem-vindo ao Tic-Tac-Toe"/>
