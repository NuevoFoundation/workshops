---
title: "Números"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

O computador também pode fazer contas. Use `print()` para imprimir o resultado das expressões matemáticas. Não são necessárias aspas para números! Ao contrário das strings, você pode fazer contas com números.

```python
print(7-3)  #imprime 4
print(5 * -6 + 7)   #imprime -23
print(24 * (8-3) / 6)   #imprime 20.0
```

{{% notice note %}}
O computador faz a divisão de números inteiros de maneira diferente da calculadora normal. A divisão de números inteiros excluirá restos ou decimais.

Por exemplo,

`15/4` resulta em `3`
`15,0/4,0` resulta em `3,75`

{{% /notice %}}

Você também pode tentar usar os símbolos matemáticos para criar suas próprias expressões!

| Símbolo         | Operação      | Símbolo     | Operação    |
| --------------- | ------------- | ----------- | ----------- |
| `+`             | Adiciona      | `*`         | Multiplica  | 
| `-`             | Subtrai       | `/`         | Divide      | 

### Desafio 1

Vamos tentar descobrir as respostas para as perguntas a seguir usando Python. Tente imprimir o resultado abaixo (<b>certifique-se de não perder nenhum parênteses</b>):

- 2 - 19
- (3 + 5) * 6
- (13 + 5 * 8) / (6 - (3 + 7))

### Desafio 2

Você pode imprimir esta declaração? `"527 vezes 199 é: __"`

Você preencherá o espaço em branco com a resposta sobre o que é `(527 * 199)`. Se quiser imprimir uma string e um número juntos, primeiro você precisa converter o número em uma string.

Aqui está um exemplo: <font color="blue">print</font>(`"Olá, Mundo!"` + str(5))

{{% notice tip %}}

Usar `str(5)` transforma o número na string `"5"`. Converter um tipo de coisa em outro é chamado de "casting".

{{% /notice%}}

{{% notice info %}}

#### Curiosidade: números aleatórios

Veja como imprimir um número aleatório entre 1 (inclusive) e 10 (inclusive):

 ```python 
 # Esta linha importa a biblioteca necessária
 from random import 
 # Esta linha imprime um número aleatório entre 1 (inclusive) e 10 (inclusive)
 print(randint(1,10))
 ```

Quer saber mais? Peça ajuda ou dê uma olhada na internet! O melhor amigo de todo programador é um mecanismo de busca!

Em particular, tente entender o que significam as palavras <font color="blue">from</font> e <font color="blue">import</font>. Voltaremos a estas palavras mais tarde durante o projeto.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
