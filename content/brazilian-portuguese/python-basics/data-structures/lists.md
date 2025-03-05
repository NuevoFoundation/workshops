---
title: "Listas"
draft: false
weight: 1
---

As listas são a coleção ordenada de itens e podem ser escritas como valores separados por vírgula entre colchetes `[]`. Como vimos em nossa lição sobre loops, as listas podem ser de qualquer tipo de dados, por exemplo, strings ou inteiros.

```python
#Criando uma lista de 5 frutas
fruits = ['laranja', 'maçã', 'banana', 'maçã', 'manga']
```

Se quiser se referir a um elemento específico de uma lista, você pode fazer isso usando índices (posição) entre colchetes. O primeiro elemento é o índice (posição) `0` e a lista vai até `(número de elementos na lista - 1)`. Portanto, uma lista com 6 elementos terá índices de 0 a 5.

```python
#Criando uma lista de 5 frutas
fruits = ['laranja', 'maçã', 'banana', 'maçã', 'manga']

#Imprimir elemento no índice 2
print(fruits[2])     ##imprime banana
```

**índice** | **Item**
-------|-------
0 | laranja
1 | maçã
2 | banana
3 | maçã
4 | manga

{{% notice note %}}

Como você pode ver neste exemplo, as listas podem ter elementos duplicados.

{{% /notice %}}

Em python, as listas não precisam ser todas do mesmo tipo de dados, portanto, uma única lista pode conter uma combinação de strings e números.

```python
#listas também podem ter tipos de dados diferentes
my_list = ['doce', 10, 2.5]
```

### Comprimento da lista

Você pode obter o comprimento da lista usando a função `len(list)` e o nome da lista é passado como parâmetro.

```python
length = len(fruits)  ##comprimento = 5
```

### Anexar um elemento na lista

Você pode adicionar itens a uma lista usando a função `append`, função `list.append(x)` onde `list` é o nome da lista e `x` é o elemento que você deseja anexar. Adiciona o elemento no final da lista.

```python
#Antes a lista era ['laranja', 'maçã', 'banana', 'maçã', 'manga']
fruits.append('limão')
#Agora a lista é ['laranja', 'maçã', 'banana', 'maçã', 'manga', 'limão']
```

### Insira um elemento em um índice específico

Se quiser controlar onde colocar um novo elemento, você pode inserir um elemento em um índice específico de uma lista usando a função `list.insert(i, x)`. Aqui `list` é o nome da lista, `i` é o índice onde você deseja inserir e `x` é o elemento que você deseja inserir. Nota: isso mudará todos os elementos começando na posição `i` em um índice.


```python
fruits.insert(1, 'goiaba')
#Agora a lista é ['laranja', 'goiaba', 'maçã', 'banana', 'maçã', 'manga', 'limão']
```

### Remover um elemento da lista

A função `list.remove(x)` procura a primeira instância do elemento fornecido `x` e o remove da lista.

```python
fruits.remove('maçã')
#Agora a lista é ['laranja', 'goiaba', 'banana', 'maçã', 'manga', 'limão']
```

{{% notice note %}}

`list.remove(x)` apresenta um erro de valor se o elemento `x` não estiver presente na lista.

Além disso, observe que a segunda instância de `'maçã'` ainda está na lista.

{{% /notice %}}


### Remover um elemento em uma posição específica

A função `list.pop(i)` remove o elemento no índice `i`.

```python
fruits.pop(0)
#Agora a lista é ['goiaba', 'banana', 'maçã', 'manga', 'limão']
```

{{% notice note %}}

Se você não especificar o índice,`list.pop()` então ele remove o último elemento da lista.

{{% /notice %}}


### Inverta os elementos da lista

A função `list.reverse()` inverte os elementos da lista.

```python
fruits.reverse()
#Agora a lista é ['limão', 'manga', 'maçã', 'banana', 'goiaba']
```

### Obtenha o elemento mínimo e máximo da lista

A função `min(list)` retorna o elemento mínimo da lista e o elemento máximo pode ser encontrado usando a função `max(list)`. Se a sua lista for uma lista de números, ela retornará o número de valor mais baixo ou mais alto da lista. Se a sua lista for uma lista de strings, ela retornará o primeiro ou o último valor em ordem alfabética.

```python

my_list = [4, 1, 2, 5, 3]  ## Definindo uma nova lista de inteiros

print(min(my_list)) ## imprime 1, o elemento mínimo de my_list
print(max(my_list)) ## imprime 5, o elemento máximo de my_list

```
{{% notice note %}}

Se a sua lista for uma mistura de strings e números, as funções `min` e `max` retornarão um erro.

{{% /notice %}}

### Desafio

Agora vamos tentar você mesmo. Comece com a lista de frutas abaixo. Imprima a lista de frutas e para cada fruta, conforme o usuário gosta. Se eles gostarem, fique com ele. Caso contrário, remova-o da lista. Em seguida, peça ao usuário para adicionar uma fruta que esteja faltando na lista. Adicione à lista e imprima a quantidade de frutas que o usuário gosta.

```python
fruits = ['laranja', 'kiwi', 'banana', 'maçã', 'manga', 'limão']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Dica: Você precisará converter o inteiro `length` em uma string usando a função `str(int)`.