---
title: "Atividade 7 - O que há de errado com o arquivo?"
description: "Aprendendo sobre os commandos do Linux para ler um arquivo sem abri-lo"
date: 2022-09-21
difficulty: "Intermediário"
weight: 10
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" alt="Um vídeo do YouTube sobre a atividade 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Arquivos com vírus podem ser perigosos! Não o abra imediatamente! Em vez disso, vamos usar a linha de comando ao nosso favor para analisar o seu conteúdo.
    </div>
</div>

{{% notice warning %}}
Para arquivos sobre os quais não temos certeza, precisamos primeiro verificar o seu conteúdo para não abrirmos um vírus acidentalmente.
{{% /notice %}}

### Mas e como podemos olhar para as primeiras linhas de um arquivo?

Às vezes precisamos verificar apenas o início de um arquivo. O comando `head` mostra a primeira linha de um arquivo.  
O formato é: `head [filename]`

{{% notice tip %}}
Se você adicionar o argumento -n, poderá sinalizar para o comando `head` quantas linhas do arquivo deseja visualizar a partir do início do arquivo.
O formato é: `head -n [# de linhas] [nome do arquivo]`
{{% /notice %}}

Analise as primeiras 5 linhas do arquivo `malware.sh`!

![comando head](../images/Act7.1.png?classes=border,shadow)

### E se quisermos visualizar as últimas linhas do arquivo?

Às vezes precisamos verificar apenas o final de um arquivo. O comando `tail` mostra a última linha de um arquivo.  
O formato é: `tail [nome do arquivo]`

{{% notice tip %}}
Se você adicionar o argumento -n, poderá sinalizar para o comando `tail` quantas linhas do arquivo deseja visualizar a partir do final do arquivo.
O formato é: `tail -n [# de linhas] [nome do arquivo]`
{{% /notice %}}

Analise as últimas 5 linhas do arquivo `malware.sh`!

![comando tail](../images/Act7.2.png?classes=border,shadow)

### E como podemos ver o arquivo inteiro?

Às vezes, precisamos ver o arquivo inteiro para entender o que ele está fazendo e o que devemos fazer a respeito.
Agora, precisamos verificar todo o conteúdo do arquivo `malware.sh`!

O comando `cat` mostra o conteúdo de um arquivo.
O formato é: `cat [nome do arquivo]`

{{% notice tip %}}
`less` e `more` são commandos similares ao `cat`.

#### O comando more

O comando `more` é indicado para arquivos grandes. Ele mostra o maior número de linhas possível. Podemos navegar entre as linhas pressionando a tecla `enter` até chegar ao final do arquivo.

O formato é: `more [nome do arquivo]`

![comando more](../images/Act7.3.png?classes=border,shadow)

#### O comando less

O comando `less` é útil quando precisamos navegar pelas linhas de um arquivo. Funciona de forma semelhante ao comando `more`, mas com uma diferença do uso das teclas de `seta para cima` e `seta para baixo` para movermos entre as linhas de um arquivo. A maneira para sair desse comando é pressionando a letra `q`.

O formato é: `less [nome do arquivo]`

![comando less](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        O que você acha que o arquivo malware.sh faz? Anote suas observações no relatório!
    </div>
</div>
