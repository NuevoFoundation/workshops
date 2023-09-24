---
title: "Atividade 4 - Praticando anotações"
description: "Aprendendo sobre os commandos do Linux para criar um novo arquivo"
date: 2022-09-21
difficulty: "Intermediário"
weight: 7
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" alt="Um vídeo do YouTube sobre a atividade 4 - Praticando anotações" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Como engenheiro de segurança cibernética, é importante fazer muitas anotações. Elas são úteis para referências futuras e entender como a invasão aconteceu. Vamos registrar nosso trabalho!
    </div>
</div>

### E se nós quisermos criar um novo diretório?

Para criar um novo diretório, use o comando `mkdir` (que significa "**Crie um Diretório**") no seguinte formato: `mkdir minha_pasta`

Vamos criar um diretório chamado `files` digitando o comando abaixo:

```
mkdir files
```

<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="commando mkdir" style="width:600px;"/>

Como podemos observar, quando executamos o comando `ls -l`, um diretório adicional chamado `files` aparece na lista de diretórios.

### O que podemos fazer com esses arquivos?

Um exemplo de como podemos manipular um arquivo ou diretório é movendo-o para outro local. Isso é feito pelo comando de movimento, `mv`.
Agora, vamos mover o diretório `Music` para o diretório `Documents`.

Digite o seguinte comando abaixo no seu terminal:

```
mv Music/ Documents/
```

Agora vamos listar os diretórios mais um vez. Digite o comando `ls -l` e observe a saída do terminal.

![comando ls-l](../images/04_mv_music_dir.png?classes=border,shadow)

Você pode perceber que o diretório `Music` não aparece mais na sua lista de diretórios. O motivo disso acontecer é porque ele foi movido para o diretório `Documents`.

{{% notice tip %}}
Podemos ver que ele foi movido para `Documents` usando o comando `ls` + o local do diretório ao qual o arquivo foi movido. Como por exemplo:

```
ls -l Documents/
```

{{% /notice %}}

Agora, vamos praticar o comando `mv` mais uma vez, movendo o arquivo `Music` para o nosso diretório atual.

Vamos praticar?

```
mv Documents/Music/ .
```

No comando acima, nós movemos o diretório `Music` do diretório `Documents`, para o nosso diretório atual, denotado por `.`. O ponto representa o diretório atual do usuário. Nesta etapa, se digitarmos `ls -l` mais uma vez, perceberemos que o diretório `Music` aparece novamente na lista de diretórios.

![comando ls-l](../images/03_ls-l.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ótimo trabalho! Agora você sabe como mover arquivos. Usaremos esse conhecimento em breve para recuperarmos nossos documentos do ataque.
    </div>
</div>

### E se quisermos criar um novo arquivo?

Para criarmos um arquivo, usamos o comando `touch`. O comando `touch` cria um arquivo vazio e sem dados.

Vamos treinar esse comando, criando um arquivo chamado `file1`:

```
touch file1
```

<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="commando touch" style="width:600px;"/>

Agora, quando digitamos `ls -l` podemos ver que o arquivo `file1` foi criado.

### Como podemos adicionar dados ao nosso arquivo?

Um arquivo vazio não tem muita utilidade, então vamos adicionar alguns dados no nosso arquivo, como nosso nome.
Para abrir o nosso arquivo para edição, usaremos o comando `vim`. O Vim é um editor que permite adicionar, remover e alterar os dados de um arquivo.

Digite o comando abaixo para editar o arquivo `file1`:

```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/04_vim.PNG" alt="vim command" style="width:600px;"/>

Agora que abrimos o nosso arquivo, pressione `i` para informarmos ao Vim que queremos inserir dados no nosso arquivo.
Depois digite `nuvi` e pressione a tecla `esc` para sair do modo de inserção. Por fim, digite `:wq` e pressione _enter_.
Os dois pontos informam ao Vim que estaremos digitando um comando. O `w` e o `q` dizem ao vim que desejamos salvar as alterações feitas e fechar o arquivo.

{{% notice warning %}}
Para sair do editor `vim`, pressione `esc` e então digite `:wq`. Salve essas informações pois você as usará toda vez que precisar usar o comando `vim`!
{{% /notice %}}

![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

<!---![ls-l command](../images/04_vim_after.PNG?classes=border,shadow) --->
<img src="../images/04_vim_after.PNG" alt="vim after" style="width:600px;"/>

Digitaremos o comando `ls -l` mais uma vez. Agora podemos notar que o arquivo `file1` tem 5 bytes de conteúdo, em vez de 0 bytes, quando este estava em branco.

{{% notice note %}}

Definição: Um **byte** é uma unidade de medida para dados. No nível mais baixo, os computadores usam o que é conhecido como "**bit**", que é uma única unidade de dados cujo valor só pode ser "**0**" ou "**1**", para representar informações. Um byte é uma coleção de 8 bits.

{{% /notice %}}

Agora vamos a última etapa da nossa atividade. Vamos mover o nosso novo arquivo `file1` para o nosso novo diretório `files`.

Digite o seguinte comando:

```
mv file1 files
```

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Parabéns, você criou, editou e moveu o seu primeiro arquivo! Agora vamos proteger o nosso sistema!
    </div>
</div>
