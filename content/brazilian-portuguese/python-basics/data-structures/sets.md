---
title: "Conjunto"
draft: false
weight: 3
---

Assim como uma lista, um conjunto é uma coleção de itens. A diferença entre um conjunto e uma lista é que um conjunto não pode conter duplicatas. Então, se você tiver 5 chocolates e colocá-los em um conjunto, só sobrará 1 chocolate, pois as duplicatas serão removidas. 😢

<img src="../../img/sets_example.jpg" width="500" alt="Imagem de dois círculos com xadrez e tênis de mesa no círculo esquerdo, taco de futebol e críquete no círculo direito e basquete e badminton em ambos os círculos onde eles se sobrepõem" />
</a>

Na imagem acima, o lado esquerdo representa **<font color="#b00020">Jogos internos</font>** (xadrez e tênis de mesa), enquanto o lado direito representa **<font color="#2e6b2e">Jogos externos</font>** (Críquete e Futebol). O meio representa a parte comum de ambos os conjuntos. Estes são os jogos que podem ser jogados tanto em ambientes internos quanto externos (basquete e badminton). A parte do meio também é conhecida como interseção entre dois conjuntos.

{{% notice tip %}}
Um conjunto é criado usando a função `set()` ou colocando todos os elementos entre chaves.
{{% /notice %}}

```python
Jogos internos = set(["Xadrez", "Tênis de mesa", "Basquete", "Badminton"])
Jogos externos = {"Cricket", "Futebol", "Basquete", "Badminton"}
print('** Jogos internos **')
print(jogosInternos)
print('** Jogos externos **')
print(jogosExternos)
```

**Saída**
```
** Jogos Internos **
set(["Xadrez", "Tênis de mesa", "Basquete", "Badminton"])
** Jogos Externos **
set(["Cricket", "Futebol", "Basquete", "Badminton"])
```

### União de Conjuntos
Se tivermos 2 conjuntos como acima, a união destes dois conjuntos contém os jogos de ambos os conjuntos. A saída será um novo conjunto. As duplicatas serão removidas.

O símbolo usado para União é `|`.

```python
todosOsJogos = jogosInternos | jogosExternos
print('** Todos Os Jogos **')
print(todosOsJogos)
```

**Saída**
```
** Todos os Jogos **
set(["Xadrez", "Tênis de mesa", "Basquete", "Badminton", "Cricket", "Futebol"])
```


### Interseção de Conjuntos
A intersecção de 2 conjuntos será o conjunto contendo jogos internos e externos.

O símbolo usado para Intersecção é `&`.

```python
jogosComuns = jogosInternos & jogosExternos
print('** Jogos Comuns **')
print(jogosComuns)
```


**Saída**
```
** Jogos Comuns **
set(["Basquete", "Badminton"])
```

### Diferença de conjuntos
A diferença de 2 conjuntos será o conjunto que contém jogos de um conjunto que não estão presentes no outro conjunto.

O símbolo usado para Diferença é `-`.

```python
apenasJogosInternos = jogosInternos - jogosExternos
print('** Apenas Jogos Internos **')
print(apenasJogosInternos)
```

**Saída**
```
** Apenas Jogos Internos **
set(["Xadrez", "Tênis de mesa"])
```

### Imprimir os itens de um conjunto
Você não pode imprimir os itens de um conjunto usando o número do item como uma lista. Os elementos de um conjunto não estão em uma sequência fixa.

Portanto, você não pode fazer algo como `jogosInternos[0]` ou `jogosInternos[1]` como faria em uma lista. No entanto, você pode percorrer os elementos de um conjunto usando um loop `for`.

```python
for g in jogosInternos:
  print(g)
```

**Saída**
```
Xadrez
Tênis de mesa
Basquete
Badminton
```

### Adicionando itens a um conjunto
Podemos usar a função `.add` para adicionar um novo jogo a um conjunto.
```python
jogosInternos.add("Carrom")
print('** Jogos Internos **')
print(jogosInternos)
```


**Saída**
```
** Jogos Internos **
set(["Xadrez", "Tênis de mesa", "Basquete", "Badminton", "Carrom"])
```

### Removendo itens de um conjunto
Podemos usar a função `.discard` para remover um item do conjunto. 
```python
jogosInternos.discard("Xadrez")
print('** Jogos Iternos **')
print(jogosInternos)
```

**Saída**

```
** Jogos Internos **
set(["Tênis de mesa", "Basquete", "Badminton", "Carrom"])
```
{{% notice note %}}
Se você remover um item que não está presente no conjunto, você não receberá nenhum erro. Por outro lado, se você tentar remover um item que não está presente em uma lista, você receberá um `ValueError`!
{{% /notice %}}

### Desafio
Vamos tentar o mesmo exercício que fizemos com Listas e Tuplas, mas usando Conjuntos.

Comece com a lista de frutas abaixo. Imprima a lista de frutas e para cada fruta, conforme o usuário gosta. Se eles gostarem, fique com ele. Caso contrário, remova-o da lista. Em seguida, peça ao usuário para adicionar uma fruta que esteja faltando na lista. Adicione à lista e imprima a quantidade de frutas que o usuário gosta.

```python
fruits = ['laranja', 'kiwi', 'banana', 'maçã', 'manga', 'limão']
```

<iframe title="Desafio - Codebunga" src="https://codebunga.com/embed/i7wzei96" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
