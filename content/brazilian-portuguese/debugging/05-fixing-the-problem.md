---
title: "Etapa 2 - Corrigindo o problema"
difficulty: "Intermediário"
weight: 6
draft: false
---

Depois de descobrir o que está causando o bug, você pode começar a pensar em como corrigir o bug. Erros do compilador são fáceis o suficiente - na maioria das vezes, o compilador lhe dá muitas dicas sobre como corrigi-lo, e durante os momentos em que você não pode descobrir isso apenas pela saída do compilador, você pode recorrer à web. É provável que alguém tenha encontrado o mesmo problema que você anos atrás e tenha feito a pergunta já em um fórum como o StackOverflow. 

Quando se trata de corrigir erros de tempo de execução, tudo se resume ao aplicativo que você está depurando. Você vai querer pensar sobre o que seu programa está fazendo, o que você quer que ele faça, e como escrever código para dizer a ele para fazer o que você quer que ele faça.

Por exemplo, uma maneira geral de corrigir um bug de memória é entender que você precisará garantir que o programa acesse apenas a memória permitida. O lugar óbvio para olhar é ver onde os acessos à memória acontecem. Desreferenciar ponteiros e/ou usar indexação de matriz é geralmente onde esses problemas ocorrem. Como mostramos na última parte, uma ferramenta como 'valgrind' também é valiosa para encontrar vazamentos de memória e onde seu programa pode ser bugado.

Para corrigir um programa que exibe um comportamento estranho, o primeiro lugar para olhar é ver se seu algoritmo ou estratégia parece apropriado. O próximo lugar é se o seu programa realmente implementa o algoritmo corretamente. Na maioria das vezes, um algoritmo complexo é difícil de ser corrigido. Existem muitas implementações de algoritmos seguros em cibersegurança, mas muitos deles têm implementações defeituosas que os tornam inseguros!

O mais importante é encontrar as perguntas corretas para se fazer enquanto você depura. *Rubber duck coding* envolve o programador falando em voz alta com um pato de borracha, e ser capaz de ouvir a si mesmo explicar o que você está fazendo pode pegar erros errôneos.

Sem querer, corrigir um erro é muitas vezes extremamente específico para o programa. É difícil oferecer mais do que sugestões gerais.