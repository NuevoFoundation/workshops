---
title: "Atividade 2 – Como Criar e Armazenar seu Menu"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Pre-reqs
- <a href="../../python-basics/lists" target="_blank">Listas</a>

## Como criar e armazenar seu menu
Agora que temos um banner para o seu restaurante, vamos começar a pensar em como organizar as informações dos seus pratos. Lembra-se de quando você decidiu quais alimentos e bebidas gostaria de vender em seu restaurante? Bem, agora precisamos descobrir como armazenar todas essas informações. Precisamos armazenar o nome, o preço e a descrição de cada item do seu menu.
Para fazer isso, podemos usar o que chamamos de dicionário Python para controlar essas informações.


Teremos um dicionário onde os valores são Listas!
Ao fazer isso, podemos ter o preço do item e a descrição do item à nossa disposição. Quando temos uma lista ou outro contêiner como valor para uma chave em um dicionário, terminamos com um **dicionário aninhado (nested)**. Como precisamos manter as informações de preço e descrição, precisamos armazená-las em nossas listas em uma ordem específica.

Esta é a estrutura que usaremos:
{item: [preço, descrição]}
Seguindo esta estrutura ao criar o **dicionário aninhado**, podemos garantir que o acesso ao preço e à descrição posteriormente será simples.

Aqui está um exemplo de dicionário aninhado, mas lembre-se de aplicar a estrutura acima ao criar seu menu!
```python
#estrutura
#{palavra:[significado, classeGramatical, pronúncia]}
smallDictionary = {'brinquedo':['um objeto com o qual as crianças brincam', 'substantivo', 'brin·ke·du'], 'caminhar':['uma maneira de se mover em um ritmo regular e lento, um pé levantado após o outro, em sequência', 'verbo', 'ka·mi·nhar']}
```

Volte ao link `Replit` anterior e adicione o código que armazenará seu menu em uma variável chamada `dictMenu`. Lembre-se de fazer do `dictMenu` uma variável global - não coloque-o na função `main()`, coloque-o no topo do seu código para que possa ser acessado por qualquer função.
Dica: seu preço é um `float` e sua descrição é uma `string`.

Escolha suas 5 comidas/bebidas favoritas para incluir no seu cardápio.
Por exemplo: Massa Cremosa com Pesto, Salada César, Limonada Rosa, Cerveja Root, Chá Gelado, Bolo de Cenoura, Rolinhos Primavera
