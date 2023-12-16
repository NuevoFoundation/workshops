---
title: "Atividade 3: Linguagem de consulta Kusto 101"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} É aqui que queremos que você abra o placar e o visualizador ADX anteriores em janelas separadas para concluir os exercícios restantes. Se você não puder ou não quiser usar o Placar, todas as perguntas desta seção estão listadas abaixo.

*Lembre-se de que qualquer página com um vídeo duplica a lição tanto em vídeo quanto na forma escrita. Você pode seguir um ou outro dependendo do tipo de aluno que você é.* {{< /notice >}}

## KQL 101  

**[Certifique-se de usar o banco de dados SecurityLogs para este exercício.]**

Digite a consulta a seguir no espaço de trabalho para visualizar as primeiras linhas na tabela **Employees**. Pressione “run” ou “shift + enter” para executar a consulta. Todos os blocos de código KQL para este workshop serão destacados em cinza como o mostrado abaixo.

```KQL
Employees
|   take 10
```

Esta consulta tem algumas partes. Vamos reservar um momento para analisar cada um deles:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

O operador <span style="color:red">**take**</span> é uma ferramenta poderosa que você pode usar para explorar linhas em uma tabela e, portanto, entender melhor quais tipos de dados estão armazenados nela.

{{< notice note >}} 🎯**Ponto-chave – O que fazer quando você não sabe o que fazer**: Sempre que você se deparar com uma tabela de banco de dados desconhecida, a primeira coisa que você deve fazer é amostrar suas linhas usando o <span style="color:red"> operador **take**</span>. Dessa forma, você sabe quais campos estão disponíveis para consulta e pode adivinhar que tipo de informação pode extrair da fonte de dados. {{< /notice >}}

A tabela Employees contém informações sobre todos os funcionários da nossa organização. Neste caso, podemos ver que a organização se chama “Envolve Labs” e o domínio é “envolvelabs.com”.

{{< alert theme="success" >}}
*Pergunta 1. 🤔 Experimente você mesmo! Faça um <span style="color:red">**take**</span> 10 em todas as outras tabelas para ver que tipo de dados elas contêm.*{{< /alert >}}

Você pode escrever facilmente várias consultas na mesma guia do espaço de trabalho. Para fazer isso, certifique-se de separar cada consulta por uma linha vazia. Observe abaixo como separamos as consultas das tabelas Employees, Email e OutboundBrowsing por linhas vazias nas linhas 3 e 6.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

Quando você tem diversas consultas, é importante informar ao ADX qual consulta você deseja executar. Para escolher uma consulta, basta clicar em qualquer linha que faça parte dessa consulta. Depois de selecionar uma consulta, ela ficará destacada em azul, conforme visto nas linhas 4 e 5 acima.

#### **Descobrindo “Quantos”: O Operador 'count'**

Podemos usar <span style="color:red">**count**</span> para ver quantas linhas há em uma tabela. Isso nos diz quantos dados estão armazenados lá.  

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*Pergunta 2. 🤔Quantos funcionários há na empresa?*{{< /alert >}}

#### **Filtrando dados com o operador 'where'**

Até agora, executamos consultas que analisam todo o conteúdo da tabela. Muitas vezes, na análise de segurança cibernética, queremos apenas analisar dados que atendam a um conjunto de condições ou critérios. Para fazer isso, aplicamos filtros a colunas específicas.

Podemos usar o operador <span style="color:red">**where**</span> em KQL para aplicar filtros a um campo específico. Por exemplo, podemos encontrar todos os funcionários com o nome “Linda” filtrando a coluna de nome na tabela **Employees**.

As declarações <span style="color:red">**where**</span> são escritas usando uma estrutura específica. Use este gráfico abaixo para entender como estruturar uma declaração <span style="color:red">**where**</span>.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
O operador <span style="color:blue">**has**</span> é útil aqui porque estamos procurando apenas uma correspondência parcial. Se quiséssemos procurar um funcionário com nome e sobrenome específicos (uma correspondência exata), usaríamos o operador ==:

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Pergunta 3. 🤔Cada funcionário da Envolve Labs recebe um endereço IP. Qual funcionário tem o endereço IP: “192.168.0.191”?*{{< /alert >}}

Ao realizar suas tarefas diárias, os funcionários da Envolve Labs enviam e recebem e-mails. Um registro de cada um desses e-mails é armazenado na tabela **E-mail**.

{{< notice note >}}🎯**Ponto principal – Privacidade do usuário e metadados**: como você pode imaginar, alguns e-mails são altamente confidenciais. Em vez de armazenar todo o conteúdo de cada e-mail enviado e recebido dentro da empresa em um banco de dados que pode ser facilmente acessado pelos analistas de segurança, capturamos apenas metadados de e-mail.

Os metadados do email incluem informações como: a hora em que o email foi enviado, o remetente, o destinatário, a linha de assunto e quaisquer links que o email possa conter. Armazenar apenas metadados de e-mail, em vez de todo o conteúdo, ajuda a proteger a privacidade de nossos funcionários, ao mesmo tempo que garante que nossos analistas de segurança possam nos manter seguros. Às vezes, até mesmo os metadados podem revelar informações confidenciais, por isso é importante que você não fale sobre dados de registro com outros funcionários fora do SOC.{{< /notice >}}

Podemos encontrar informações sobre os e-mails enviados ou recebidos por um usuário procurando seu endereço de e-mail nos campos remetente e destinatário da tabela **E-mail**. Por exemplo, podemos usar a seguinte consulta para ver todos os emails enviados por “Michael Montello”:

```KQL
Email
|   where sender == "michael_montello@envolvelabs.com"
```
{{< alert theme="success" >}}
*Pergunta 4. 🤔Quantos e-mails Betty Parrish recebeu?*{{< /alert >}}

#### **Fácil como 1, 2, 3… Consultas compostas e o operador distinto**

Podemos usar o operador distinto para encontrar valores únicos em uma coluna específica. Podemos usar a consulta a seguir para determinar quantos usuários da organização enviaram emails.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL5.png?raw=true" alt= “KQL5” width="50%" height="value">

Esta é a primeira vez que usamos uma consulta multilinha com vários operadores, então vamos detalhar:


Na **linha 2**, pegamos a tabela Email e filtramos os dados para encontrar apenas as linhas com “envolvelabs” na coluna do remetente.

Na **linha 3**, adicionamos outra barra vertical ( | ) e usamos o operador distinto para encontrar todos os remetentes exclusivos. Aqui, não encontramos os remetentes únicos para todos os remetentes de e-mail, mas apenas os remetentes únicos que sobraram após aplicarmos o filtro procurando linhas com “envolvelabs” na coluna do remetente.

Finalmente, na **linha 4**, adicionamos outra barra vertical ( | ) e, em seguida, usamos o operador count para contar os resultados das linhas 1-3 da consulta.

{{< alert theme="success" >}}
*Pergunta 5. 🤔Quantos usuários receberam e-mails com o termo “vaccine” no assunto?*{{< /alert >}}

#### **Rastreando um clique: dados de navegação de saída**

Quando os funcionários da Envolve Labs acessam um site da rede corporativa, essa atividade de navegação é registrada. Isso é armazenado na tabela **OutboundBrowsing**, que contém registros dos sites navegados por cada usuário da empresa. Sempre que alguém visita um site, um registro dele é armazenado na tabela. Porém, o nome do usuário não é armazenado na tabela, apenas seu endereço IP é registrado. Há uma relação 1:1 entre os usuários e seus endereços IP atribuídos, portanto, podemos consultar a tabela **Employees** para descobrir quem navegou em um site específico.

Se quisermos descobrir quais sites Annie Jackson visitou, podemos encontrar seu endereço IP na tabela **Employees**.

```KQL
Employees
|   where name == "Annie Jackson"
```
A consulta acima nos diz que o endereço IP dela é “192.168.3.168”. Podemos pegar o endereço IP dela e consultar a tabela **OutboundBrowsing** para determinar quais sites ela visitou.

```KQL
OutboundBrowsing
| where src_ip == "192.168.3.168"
```

{{< alert theme="success" >}}
*Pergunta 6. 🤔Quantos sites exclusivos “Keith Mitchell” visitou?*{{< /alert >}}

#### **O que há em um nome? Tudo sobre dados DNS passivos**

Embora nomes de domínio como “google.com” sejam fáceis de lembrar pelos humanos, os computadores não sabem como lidar com eles. Então, eles os convertem em endereços IP legíveis por máquina. Assim como o seu endereço residencial informa aos seus amigos como encontrar sua casa ou apartamento, um endereço IP informa ao seu computador onde encontrar uma página ou serviço hospedado na Internet.


{{< notice note >}} 🎯**Ponto-chave – Boa prática OPSEC**: Se quisermos descobrir para qual endereço IP um domínio específico é resolvido, podemos simplesmente navegar até ele. Mas, se o domínio for malicioso, você poderá baixar arquivos maliciosos para o seu sistema de análise corporativo ou avisar os invasores sobre sua infraestrutura. Como analistas de segurança cibernética, devemos seguir procedimentos e safeguards (guardas de segurança) que protejam a nossa capacidade de rastrear ameaças. Essas práticas são geralmente chamadas de segurança operacional ou OPSEC. {{< /notice >}}

Para eliminar a necessidade de resolver ativamente (ou seja, navegar diretamente ou interagir com um domínio para encontrar seu endereço IP relacionado) todos os domínios nos quais estamos interessados, podemos contar com dados DNS passivos. Os dados de DNS passivo nos permitem explorar com segurança as relações domínio-IP, para que possamos responder a perguntas como:

- Para qual endereço IP este domínio é resolvido?
- Quais domínios estão hospedados neste endereço IP?
- Para quantos outros IPs este domínio foi resolvido?

Esses relacionamentos domínio-IP são armazenados em nossa tabela **PassiveDns**.
{{< alert theme="success" >}}
*Pergunta 7. 🤔 Quantos domínios nos registros **PassiveDns** contêm a palavra “vaccine”? (dica: use o operador <span style="color:blue">**contains**</span> em vez de <span style="color:blue">**has**</span>. Se você estiver preso, faça um <span style="color:red">**take**</span> 10 na tabela para ver quais campos estão disponíveis.)*

*Pergunta 8. 🤔 Para quais IPs o domínio “biotechenvolv.science” foi resolvido?*{{< /alert >}}

🤯**Declarações Let – tornando sua vida um pouco mais fácil:**

Às vezes precisamos usar a saída de uma consulta como entrada para uma segunda consulta. A primeira maneira de fazer isso é digitando manualmente os resultados na próxima consulta.

- Por exemplo, e se quisermos ver todas as atividades de navegação na web de funcionários chamados “Linda”?
- Primeiro, você precisaria acessar a tabela **Employees** e encontrar os endereços IP usados por esses funcionários.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL6.png?raw=true" alt= “KQL6” width="80%" height="value">

Em seguida, você pode copiar e colar manualmente esses IPs em uma consulta na tabela **OutboundBrowsing**. Observe que podemos usar o operador in para escolher todas as linhas que possuem um valor correspondente a qualquer valor de uma lista de valores possíveis. Em outras palavras, o operador == (comparação) procura uma correspondência exata, enquanto o operador in verifica quaisquer valores da lista.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL7.png?raw=true" alt= “KQL7” width="90%" height="value">

Embora esta seja uma forma válida de obter as informações de que você precisa, pode não ser tão elegante (ou oportuna) se você tiver 100 ou mesmo 1.000 funcionários chamados “Linda”.

Podemos fazer isso de uma maneira mais elegante usando uma [declaração let](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/letstatement), que nos permite atribuir um nome para uma expressão ou função. Podemos usar uma declaração <span style="color:blue">**let**</span> aqui para salvar e dar um nome aos resultados da primeira consulta para que os valores possam ser reutilizados posteriormente. Isso significa que não precisamos digitar manualmente ou copiar e colar os resultados repetidamente.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL8.png?raw=true" alt= “KQL8” width="value" height="value">

À esquerda da declaração <span style="color:blue">**let**</span> está o nome da variável (“linda_ips” neste caso). O nome da variável pode ser o que quisermos, mas é útil torná-lo algo significativo que possa nos ajudar a lembrar quais valores ela está armazenando. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL9.png?raw=true" alt= “KQL9” width="value" height="value">

No lado direito da declaração <span style="color:blue">**let**</span> na expressão que você está armazenando. Neste caso, usamos o operador <span style="color:red">**distinct**</span> para selecionar valores de apenas uma coluna – para que sejam armazenados em um array – ou lista de valores.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL10.png?raw=true" alt= “KQL10” width="value" height="value">

A declaração <span style="color:blue">**let**</span> é concluída por ponto e vírgula.

Depois de armazenarmos o valor de uma consulta em uma variável usando a declaração <span style="color:blue">**let**</span>, podemos consultá-la quantas vezes quisermos no resto do consulta. A consulta armazenada não mostra nenhuma saída. Lembre-se, no entanto, que sua consulta KQL deve ter uma declaração tabular – o que significa que você deve ter outra consulta após sua declaração <span style="color:blue">**let**</span>.
{{< alert theme="success" >}}
*Pergunta 9. 🤔 Quantos URLs exclusivos foram navegados por funcionários chamados “Karen”?*{{< /alert >}}


{{< notice note >}}🎯**Ponto-chave – Pivoting**: Parte de ser um grande analista cibernético é aprender como usar múltiplas fontes de dados para contar uma história mais completa sobre o que um invasor fez. Chamamos isso de “pivô”. Nós dinamizamos pegando um dado conhecido em um conjunto de dados e olhando em um conjunto de dados diferente para aprender algo que ainda não sabíamos. Você praticou isso aqui quando começamos em um conjunto de dados – a tabela Funcionários – e usamos o conhecimento daí para encontrar dados relacionados em outra fonte – **OutboundBrowsing**. {{< /notice >}}


