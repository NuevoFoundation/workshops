---
title: "Atividade 2 - Como Criar e Armazenar seu Cardápio"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Pré-requisitos
- <a href="../../python-basics/data-structures/lists/" target="_blank">Listas</a>

## Como Criar e Armazenar seu Cardápio
Agora que temos um banner para o seu restaurante, vamos começar a pensar em como organizar as informações sobre seus pratos. Lembra-se de como você decidiu anteriormente quais alimentos e bebidas desejava vender no seu restaurante? Bem, agora precisamos descobrir como armazenar todas essas informações. Precisamos manter o nome, preço e descrição de cada item no seu cardápio.  
Para isso, podemos usar o que é chamado de dicionário no Python para acompanhar essas informações.

Vamos criar um dicionário onde os valores são Listas!
Fazendo isso, podemos ter o preço do item e a descrição do item disponíveis para nós. Quando temos uma lista ou outro contêiner como valor para uma chave em um dicionário, acabamos criando um **dicionário aninhado**. Como precisamos manter informações tanto de preço quanto de descrição, precisamos armazená-las em nossas listas em uma ordem específica.

Aqui está a estrutura que usaremos:
{item : [preço, descrição]}  
Seguindo essa estrutura ao criar o **dicionário aninhado**, podemos garantir que acessar o preço e a descrição posteriormente será simples.

Aqui está um exemplo de um dicionário aninhado, mas lembre-se de aplicar a estrutura acima ao criar seu cardápio!
```python
#estrutura
#{palavra:[significado, classeGramatical, pronuncia]}
pequenoDicionario = {'brinquedo':['um objeto com que as crianças brincam', 'substantivo', 'brin-ke-du'], 'andar':['uma maneira de se mover em um ritmo regular e lento, um pé levantado após o outro, em sequência', 'verbo', 'an-dar']}
```

Volte ao link do `Replit` mencionado anteriormente e adicione o código para armazenar seu cardápio em uma variável chamada `dictMenu`. Lembre-se de fazer `dictMenu` uma variável global - não a coloque na função `main()`, coloque-a no topo do seu código para que possa ser acessada por qualquer função.  
Dica: Seu preço é um `float`, e sua descrição é uma `string`.

Escolha seus 5 alimentos/bebidas favoritos para incluir no seu cardápio.  
Por exemplo: Pasta com Pesto Cremoso, Salada Caesar, Limonada Rosa, Root Beer, Chá Gelado, Bolo de Cenoura, Rolos Primavera