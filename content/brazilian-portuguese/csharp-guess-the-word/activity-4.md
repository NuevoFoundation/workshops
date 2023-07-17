---
title: "Atividade 4 - Juntando tudo"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Atividade 4

Esta atividade tem quatro partes. Este é um ótimo momento para usar seu conhecimento de comentários, números, variáveis e leitura do console para concluir as 4 atividades. Algumas informações básicas para cada atividade são fornecidas abaixo, e dicas são fornecidas no código. Após cada parte, pressione **run** e verifique se não há erros presentes no console.

### Atividade 4.1

Primeiro, vamos introduzir mais algum código em nosso jogo. Encontre as duas linhas de código que começam com `TODO (ACTIVITY 4.1)` (um está aproximadamente na linha 60 e o outro aproximadamente na linha 130). Exclua totalmente as duas linhas de código. Isso desbloqueia o comportamento principal do jogo, como verificar se a letra adivinhada pelo jogador é encontrada na palavra para adivinhar.

Infelizmente, depois de pressionar **run**, parece que o jogo não espera pela entrada do usuário, e continuamente adivinha `'C'` em vez disso!! Isso não é bom, então vamos corrigir isso na próxima parte.

### Atividade 4.2

Quando o jogador faz um palpite, precisamos pegar a letra adivinhada e armazená-la em uma variável. A variável será usada para verificar se a letra aparece na palavra a adivinhar. Usar `Console.ReadLine` para aguardar a entrada do usuário e armazenar a entrada do usuário na variável de entrada. Nota: já declaramos a entrada da variável, então você não precisa usar o `var` palavra-chave.

Para verificar se você fez isso corretamente, pressione **run**, e agora você deve ser capaz de digitar uma letra no console.

### Atividade 4.3

Toda vez que uma letra é adivinhada corretamente, precisamos incrementar (adicionar uma) o número de letras adivinhadas corretamente. Use a variável `lettersRevealed` para alterar o número de letras adivinhadas corretamente.
Pressione **executar** para garantir que nenhum erro ocorra. Também fornecemos algum código para imprimir o valor da variável `lettersRevealed` para fins de teste. Certifique-se de excluir isso quando terminar de testar, pois isso é algo que não queremos revelar ao jogador!

### Atividade 4.4

Toda vez que uma letra é adivinhada incorretamente, o jogador perde uma vida. Decremento (subtrair um de) o número de vidas, usando a variável `lives`. Também diremos ao jogador quantas vidas restam, quando ele fizer um palpite incorreto, imprimindo o número de vidas no console.
Verifique se você fez isso corretamente pressionando **run**, adivinhando uma letra incorreta e vendo se o número correto de vidas é exibido no console.

{{% notice info %}}

### Fun Fact - Bugs

Relembre em **Activity 4.1** que depois de descomentar algum código, experimentamos algum comportamento inesperado. Quaisquer problemas ou comportamentos inesperados no programa são chamados de **"bugs"**. Corrigimos o bug introduzido na **Atividade 4.1** introduzindo a entrada do usuário na **Atividade 4.2**.

Mesmo que você tenha implementado tudo corretamente nas partes anteriores, se você continuar jogando por um tempo, outro problema ainda ocorre. O que é? Vamos corrigir esse bug em **Atividade 6**.

{{% /notice %}}
