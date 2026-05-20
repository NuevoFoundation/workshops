---
title: "Atividade 4 - Juntando tudo"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Atividade 4

Esta atividade tem quatro partes. Este é um ótimo momento para usar seu conhecimento sobre comentários, números, variáveis e leitura do console para completar as 4 atividades. Algumas informações de fundo para cada atividade estão abaixo, e dicas estão no código. Após cada parte, aperte **run** e veja se não há erros no console.

### Atividade 4.1

Primeiro, vamos adicionar mais código ao nosso jogo. Encontre as duas linhas que começam com `TODO (ACTIVITY 4.1)` (uma por volta da linha 60 e outra por volta da linha 130). Apague essas duas linhas completamente. Isso libera o comportamento principal do jogo, como verificar se a letra adivinhada pelo jogador está na palavra a ser descoberta.

Infelizmente, depois de apertar **run**, o jogo não espera a entrada do jogador e continua adivinhando `'C'` sozinho! Isso não é legal, então vamos corrigir isso na próxima parte.

### Atividade 4.2

Quando o jogador fizer uma tentativa, precisamos pegar a letra digitada e guardá-la em uma variável. Essa variável será usada para verificar se a letra está na palavra a ser adivinhada. Use `Console.ReadLine` para esperar a entrada do jogador e salvar na variável input. Nota: a variável input já foi declarada, então não use a palavra `var`.

Para testar se fez tudo certo, aperte **run**, e agora você deve conseguir digitar uma letra no console.

### Atividade 4.3

Toda vez que uma letra for adivinhada corretamente, precisamos somar 1 ao número de letras certas. Use a variável `lettersRevealed` para atualizar o número de letras adivinhadas. Aperte **run** para garantir que não há erros. Também adicionamos um código para mostrar o valor da `lettersRevealed` para testes. Lembre-se de apagar isso quando terminar, pois não queremos revelar isso ao jogador!

### Atividade 4.4

Toda vez que uma letra for adivinhada errada, o jogador perde uma vida. Subtraia 1 do número de vidas usando a variável `lives`. Também vamos mostrar para o jogador quantas vidas restam, imprimindo o número de vidas no console. Confira se fez tudo certo apertando **run**, errando uma letra, e vendo se o número correto de vidas aparece no console.

{{% notice info %}}

### Curiosidade - Bugs

Lembre da **Atividade 4.1** que, depois de remover os comentários do código, tivemos um comportamento estranho. Qualquer problema ou comportamento inesperado em um programa é chamado de **"bug"**. Nós corrigimos o bug da **Atividade 4.1** ao adicionar a entrada do jogador na **Atividade 4.2**.

Mesmo se você fez tudo certo nas partes anteriores, se continuar jogando por um tempo, outro problema vai aparecer. O que será? Vamos corrigir esse bug na **Atividade 6**.

{{% /notice %}}
