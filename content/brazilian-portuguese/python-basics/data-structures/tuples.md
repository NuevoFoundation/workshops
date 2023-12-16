---
title: "Tuplas"
draft: false
weight: 2
---

Uma tupla também é uma coleção ordenada de elementos, assim como as listas, mas as tuplas são imutáveis. Portanto, você não pode alterar os elementos de uma tupla depois que ela for atribuída (ao contrário das listas onde você tem permissão para fazer isso). Essa natureza imutável torna as tuplas muito úteis quando você não deseja que seus dados sofram mutação ao longo do programa. Junto com isso, as tuplas geralmente são usadas para armazenar elementos de diferentes tipos de dados. Onde você definiu uma lista usando colchetes (`[]`), uma tupla pode ser criada colocando todos os elementos entre parênteses `()`, separados por vírgulas.

```python
#criando uma tupla de dois elementos do tipo String
my_tuple = ('maçã', 'laranja')
```

{{% notice note %}}

Tuplas também podem ser criadas sem parênteses. No entanto, é uma boa prática usá-los.

{{% /notice %}}

A tupla também pode ter elementos de diferentes tipos.

```python
#Uma tupla contendo elementos de diferentes tipos de dados
my_tuple = ('maçã', 1, 4.5)
```

### Acessando os elementos de uma tupla

Podemos acessar os elementos de uma tupla usando índices entre colchetes `[]`, assim como a lista. Além disso, assim como as listas, o índice começa em `0`.

```python
#criando uma tupla de três elementos do tipo String
my_tuple = ('maçã', 'laranja', 'manga')

print(my_tuple[0]) ## imprime maçã
print(my_tuple[2]) ## imprime manga
```

### Combine duas tuplas

Podemos combinar duas tuplas usando o operador `+`.

```python
frutas = ('maçã', 'laranja', 'manga')
números = (1, 2, 3)

#Combine duas tuplas de frutas e números
combined_tuple = frutas + números

print(combined_tuple) ## imprime ('maçã', 'laranja', 'manga', 1, 2, 3)
```

### Comprimento de uma tupla

A função `len(tuple)` fornece o número de elementos presentes na tupla.

```python
frutas = ('maçã', 'laranja', 'manga')

print(len(frutas))  ## imprime 3
```

### Reatribuir uma tupla

Como as tuplas são imutáveis, não podemos alterar um elemento da tupla. Então `frutas[0] = 'limão'` dará um erro, pois aqui estamos tentando alterar o elemento no índice `0` de 'frutas'.
Mas podemos reatribuir uma tupla (substituir a tupla inteira).

```python
my_tuple = ('maçã', 'laranja', 'manga')

print(my_tuple)  ## imprime ('maçã', 'laranja', 'manga')

# renunciando my_tuple
my_tuple = (1, 2, 3) 

print(my_tuple)  ## imprime (1, 2, 3)
```

### Excluindo uma tupla

Podemos excluir totalmente uma tupla usando a palavra-chave `del`.


```python
frutas = ('maçã', 'laranja', 'manga')

print(frutas)  ## imprime ('maçã', 'laranja', 'manga')

# Excluindo frutas
del frutas 

print(frutas)  ## Dá ERRO porque a tupla de frutas não está mais presente
```

### Desafio
Vamos tentar o mesmo exercício que fizemos com Listas, mas usando Tuplas.

Comece com a lista de frutas abaixo. Imprima a lista de frutas e para cada fruta, conforme o usuário gosta. Se eles gostarem, fique com ele. Caso contrário, remova-o da lista. Em seguida, peça ao usuário para adicionar uma fruta que esteja faltando na lista. Adicione à lista e imprima a quantidade de frutas que o usuário gosta.

```python
frutas = ['laranja', 'kiwi', 'banana', 'maçã', 'manga', 'limão']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>