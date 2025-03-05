---
title: "Lendo do console"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Fundamentos de Python: variáveis"
difficulty: Intermediário
--- 

Agora que sabemos o básico sobre variáveis, podemos pedir informações ao usuário. Use a linha a seguir para dizer ao nosso programa para esperar até que o usuário digite algo no console. Então, o computador pega tudo o que é digitado no console e armazena na variável chamada **value**.

```python
value = input()
```

Aqui estão alguns exemplos de como usar `input()` para aceitar a entrada do usuário:

```python
print("Qual o seu nome?")
value = input()
print("Olá " + value + "!")
```

Experimente! Ao clicar em executar, você notará que a imagem abaixo ainda não aparece no console.

![Captura de tela do símbolo final do console](../../img/end_symbol.png "imagem do símbolo final do console")

![Captura de tela do console aguardando a entrada do usuário](../../img/console_read_waiting.png "imagem de como o console fica aguardando a entrada do usuário")

Isso ocorre porque o programa está esperando que você digite alguma coisa! Digite seu nome ou 'Nuvi' no console à direita, pressione Enter e verifique se foi impresso corretamente.

![Captura de tela do console depois que o usuário deu a entrada e o programa foi concluído](../../img/console_read_input.png "imagem de como fica o console depois de ler a entrada do usuário")

{{% notice note %}}

Mesmo se digitarmos um número, como `8`, o valor da variável conterá a string `"8"`. Tenha cuidado ao tentar fazer contas com variáveis ​​de entrada!

{{% /notice %}}

## Desafio

Vamos ver se conseguimos escrever um programa que primeiro imprima as duas linhas a seguir no console:

    Bem-vindo!
    Como posso ajudá-lo hoje?

Depois, o console aguarda a entrada do usuário. Depois que o usuário digita algo no console e pressiona _Enter_, o computador imprime:

    Você perguntou: [input]?
    Não sei a resposta para [input]. Adeus!

`[input]` deve ser substituído por tudo o que o usuário digitou no console. Por exemplo, se você quiser perguntar “Quantos anos eu tenho?”, o computador irá imprimir que não sabe a resposta.

{{% notice tip %}}

Isso é muito semelhante ao exemplo que passamos juntos acima. Tente fazer algumas pequenas alterações no que já fornecemos.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
