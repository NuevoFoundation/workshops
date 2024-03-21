---
title: "Chave de resposta do workshop SQL"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 300
---
{{% notice tip %}}
Nota: Não use o navegador Firefox para este workshop!

Para atividades de arrastar e soltar: os blocos escolhidos corretamente terão um destaque verde ao seu redor, enquanto os blocos incorretos serão destacados em vermelho até que o jogador mova o bloco.

Para atividades de digitação: palavras/comandos corretos serão destacados em verde na caixa de comando anterior, palavras colocadas incorretamente ou mal utilizadas serão destacadas em vermelho. Se o comando que os jogadores escrevem corresponder à chave de resposta e ainda estiver destacado em vermelho, certifique-se de que não haja espaços extras no final ou no início do comando! Certifique-se de que os jogadores tenham ponto e vírgula no final do comando (a última palavra no comando SQL será destacada em vermelho se não houver ponto e vírgula)! Observe que algumas crianças copiam um exemplo de comando do workshop e colam-no no terminal para executar - isso não funcionará! Peça-lhes para atualizar a página e digitar manualmente o comando.

Palavras-chave SQL (palavras reservadas) nos comandos não diferenciam maiúsculas de minúsculas (SELECT, FROM, WHERE, COUNT, MAX, IN, etc.), mas geralmente são escritas em maiúsculas para diferenciar de não-palavras-chave. "select * from planet" é o mesmo que "SELECT * FROM planet".
{{% /notice%}}

### Aprenda noções básicas de cadetes
**Nenhuma atividade, apenas uma leitura da terminologia.**

### Atividade 1: Aprenda o comando SELECT (arrastar e soltar)
Resposta: `SELECT * FROM galáxia;`

### Atividade 2: Aprenda o comando WHERE (arrastar e soltar)
Resposta: `SELECT * FROM galaxy WHERE name = ‘Planet of Fun’;`

### Explicar a sintaxe
**Nenhuma atividade, apenas uma explicação do formato do comando SQL.**

### Atividade 3:
Duas respostas válidas:
`SELECT COUNT(*) FROM planet;` OU `SELECT COUNT(city_number) FROM planet;`

### Atividade 4: Selecionar múltiplas informações (digitar)
Duas respostas válidas: `SELECT planet, leader FROM galaxy;` OU `SELECT leader, planet FROM galaxy;`

A única diferença entre as duas respostas é a ordem das colunas exibidas, portanto ambas as respostas são válidas.

### Atividade 5: Aprenda o comando MAX/MIN (digitar + arrastar e soltar)
Respostas válidas:
* `SELECT MAX(height) FROM items WHERE object IN (‘ladder’);` 
* `SELECT MAX(height) FROM items WHERE object = 'ladder';`
* `SELECT * FROM items WHERE object IN (‘ladder’);`
* `SELECT * FROM items WHERE object = 'ladder';`
Embora a terceira e quarta respostas não utilizem o comando MAX, ele exibe todas as escadas e suas cores, tornando esta uma resposta válida para a atividade.

Respostas para bônus:
* `SELECT MAX(height) FROM items WHERE object NOT IN('totem', 'key');`
* `SELECT MAX(height) FROM items WHERE object NOT IN('totem');`
* `SELECT MAX(height) FROM items WHERE object NOT IN('key');`
Se os jogadores usarem `NOT IN` corretamente, isso ainda produzirá a resposta correta.

Arrastar e Soltar: A escada correta para arrastar e soltar é a escada VERMELHA (escada mais à direita). A escada correta será destacada em verde.

### Atividade 6: Usar Comparadores (digitar)
Responder: `SELECT * FROM items WHERE date_created = ‘1738-09-12’;`

Resposta bônus: `SELECT * FROM items WHERE date_created >= ‘1738-09-12’;`

### Atividade 7: Use o comando MIN (digitar + arrastar e soltar)
Respostas válidas: 
* `SELECT MIN(height) FROM items WHERE object IN (‘key’);` 
* `SELECT * FROM items WHERE object IN('key');`
* `SELECT MIN(height) FROM items WHERE object = 'key';`
* `SELECT * FROM items WHERE object = 'key';`
* `SELECT MIN(height) FROM items WHERE object NOT IN('totem', 'ladder');`
* `SELECT MIN(height) FROM items WHERE object NOT IN('totem');`
* `SELECT MIN(height) FROM items WHERE object NOT IN('ladder');`

Arrastar e Soltar: A height (altura) corresponde ao número de loops na base da chave. A menor tecla (height 1) é a tecla correta para arrastar e soltar (tecla mais à direita).

### Atividade 8: Aprenda o comando LIKE (digitar)
Duas respostas válidas: `SELECT * FROM items WHERE date_created LIKE ‘%-10-%’;` OR `select * from items where date_created like '1738-10-%';`

### Atividade 9: Aprenda o comando AVG (digitar)
Responder: `SELECT AVG(population) FROM planet;`

A combinação do cofre é "40".

### Atividade 10: Aprenda o comando SUM (digitar)
Responder: `SELECT SUM(population) FROM planet;`

### Atividade 11: Aprenda o comando GROUP BY (digitar)
Responder: `SELECT * FROM planet GROUP BY favorite_food;`

Resposta bônus: `SELECT COUNT(*), favorite_food FROM planet GROUP BY favorite_food;`

Os botões corretos para selecionar (em qualquer ordem) são: pizza, cachorro-quente, hambúrguer e taco.

### Atividade 12: Encontre o Inventor! (Digitar)
Responder: `SELECT * FROM people;`

O inventor: "Dr. Phi"

