---
title: "Passo 2 - Resolvendo o problema"
difficulty: "Intermediário"
weight: 6
draft: false
---

Depois de descobrir o que está causando o bug, você pode começar a pensar em como corrigi-lo. Erros do compilador são bastante fáceis - na maioria das vezes, o compilador fornece muitas dicas sobre como corrigi-lo e, quando você não consegue descobrir isso apenas pela saída do compilador, pode recorrer à web. Provavelmente, alguém teve o mesmo problema que você anos atrás e já fez a pergunta em um fórum como o StackOverflow.

Quando se trata de corrigir erros de tempo de execução, tudo se resume ao aplicativo que você está depurando. Você vai querer pensar sobre o que seu programa está fazendo, o que você deseja que ele faça e como escrever código para instruí-lo a fazer o que você deseja.

Por exemplo, uma maneira geral de corrigir um bug de memória é entender que você precisará garantir que o programa acesse apenas a memória permitida. O lugar óbvio para procurar é ver onde acontecem os acessos à memória. Desreferenciar ponteiros e/ou usar indexação de array geralmente é onde esses problemas ocorrem. Como mostramos na última parte, uma ferramenta como `valgrind` também é valiosa para encontrar vazamentos de memória e onde seu programa pode apresentar bugs.

Para consertar um programa que apresenta comportamento estranho, o primeiro lugar a procurar é ver se o seu algoritmo ou estratégia parece apropriado. A próxima questão é se o seu programa realmente implementa o algoritmo corretamente. Na maioria das vezes, é difícil corrigir um algoritmo complexo. Existem muitas implementações de algoritmos seguros em segurança cibernética, mas muitos deles possuem implementações defeituosas que os tornam inseguros!

O mais importante é encontrar as perguntas corretas para se fazer durante a depuração. *Codificação de pato de borracha* envolve o programador falando em voz alta com um pato de borracha, e ser capaz de ouvir a si mesmo explicando o que está fazendo pode detectar erros errôneos.

Infelizmente, corrigir um erro muitas vezes é extremamente específico do programa. É difícil oferecer mais do que sugestões gerais.