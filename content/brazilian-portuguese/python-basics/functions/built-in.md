---
title: "Funções integradas"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Existem muitas funções integradas em python que podem ser usadas para aumentar a facilidade de escrita de código. Vamos discutir alguns deles aqui.

# sort()
Esta função é usada para classificar os valores em estruturas de dados, como arrays e listas.
```python
arr = [8,5,1,4,6]
arr.sort()
print('O arr ordenado é :',arr)
#imprime O arr ordenado é :[1,4,5,6,8]
```

# find()
Retorna a primeira ocorrência do input(pattern) para find() fornecido na string fornecida.
```python
str1 = "Hello World"
index = str1.find("World")
print(index) #imprime 6
```

# len()
`len()` ajuda a descobrir o tamanho de uma determinada estrutura de dados.
```python
arr = [10,5,4,2,3]
print(len(arr)) #imprime 5
```

# isdigit()
Esta função retorna `true` se a string passada como argumento consistir apenas em dígitos; caso contrário, retorna `falso`
```python
s = "123";  
print s.isdigit() #imprime true

s = "Olá Mundo";
print s.isdigit() #imprime false

s = "123Olá"
print s.isdigit() #imprime false pois tem letras junto com dígitos
```

# reverse()
Esta função é usada para reverter o conteúdo de um array ou lista.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #imprime [9,8,7,6,5]
```

# replace()
Esta função substitui o primeiro argumento passado para a função pelo segundo argumento em uma determinada string.

```python
initial_str = "Meu nome é Harry. Harry é um bom garoto."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #imprime Meu nome é Potter. Potter é um bom garoto.
```

# append()
Esta função é usada para adicionar um número, caractere ou elemento de qualquer tipo de dados ao final de uma lista ou array.
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #imprime [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #imprime [Harry,Ram,1,2,Jenifer]
```

# remove()
Remove a primeira ocorrência se o argumento for passado para o objeto fornecido. Se você tentar remover um elemento que não está na lista, ocorrerá uma exceção informando que o elemento não está na lista.
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #imprime 1,2,3,3

arr.remove(4) #dá uma exceção informando que o elemento não está na lista
```

### Desafio 1
 Crie um array de nome`arr`

- Inicialize-o para `[1,2,3,4,5]`

- Anexe o número `6` a ele e imprima.

- Inverta `arr` e imprima-o.

- Faça sort em `arr` e imprima-o.

- Imprima o comprimento de `arr`

- Remova o elemento 6 de `arr` e imprima-o.

- Imprima o comprimento de `arr`,

#### Saída esperada
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### Desafio 2
-Inicialize uma string `s` para "Hello all.Hello people".

-Encontre a ocorrência da palavra `Hello` na string `s` e imprima.

-Substitua a palavra `Hello` por `Hi` em `s`.

-Descubra se a string `s` contém apenas dígitos e imprima o veredicto.

#### Resultado Esperado
```Output
    0
    Hi all.Hi people.
    False
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
