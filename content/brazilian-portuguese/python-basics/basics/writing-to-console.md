---
title: "Gravando no console (imprimir instrução)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

## Faça seu programa falar com você!

As instruções **Print** são usadas para escrever algo no console. Use `print("Olá, Mundo!")` para imprimir *Olá, Mundo!* na tela de saída. Mais tarde aprenderemos que print é uma função e a utilizamos para realizar um trabalho de impressão. Tudo o que você passa para a função `print` é impresso na tela.
Vamos começar fazendo uma instrução `print`.

Usaremos muito a impressão nas lições posteriores, portanto, certifique-se de entender isso antes de passar para o próximo conceito!

### Desafio 1
Para começar, escreva o seguinte texto em seu Trinket main.py e clique em Run (Executar).

```python
print("Olá, Mundo!")
```

Observe seu console dizer “Olá, mundo!” na tela à direita! `print` diz ao computador para imprimir a frase entre parênteses `()` na janela do console ou na tela à direita.

![texto alternativo](../../img/print.png "hello world em python!")

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Usando " com impressão

Você notou que Olá, Mundo! estava cercado por `"`? Você tentou sem as marcas `"` para ver que produziu um erro? Mas, se você tentou `print(123)`, você viu que funciona. Isso ocorre porque o texto (Strings em linguagens de programação) exige que você especifique que se trata de texto, colocando-o entre aspas. Mas os números não os exigem.

Volte e tente imprimir coisas diferentes!
{{% /notice %}}

### Desafio 2

1. Sem remover as aspas, tente alterar `"Olá, Mundo"` para outra frase. (Por exemplo – `"Meu nome é Nuvi!"`) Pressione **Run** para ver se alguma coisa muda.
2. Adicione outro print abaixo da linha atual para imprimir uma segunda frase abaixo da primeira frase.
3. Pressione **Run** para ver se duas frases são impressas.

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Usaremos muito a impressão nas lições posteriores, portanto, certifique-se de entender isso antes de continuar!

{{% notice warning %}}

## AJUDA! Recebi muito texto em vermelho!

Se você vir algum texto em vermelho, você encontrou alguns erros! Por favor, peça ajuda. Em particular, tome cuidado com o seguinte ao codificar em Python:

1. Certifique-se de que a frase que deseja imprimir esteja **entre aspas** e que a frase esteja **dentro dos parênteses**.

![Exemplo mostrando a instrução print feita de forma errada (sem aspas - print(Hello, World!)) e corretamente (com aspas - print('Hello, World!'))](../../img/redLine.png)

2. O espaçamento em Python é muito importante. Certifique-se de não ter espaços ou tabulações desnecessárias no início ou no final de cada linha, pois de outra forma o Python não será capaz de ler o código. Por exemplo, não coloque nenhum espaço antes de `print` ou nenhum espaço após o último parêntese em `print("Olá, Mundo!)`.

{{% /notice %}}
