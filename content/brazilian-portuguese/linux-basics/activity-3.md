---
title: "Atividade 3 - Explorando o diretório atual"
description: "Aprendendo sobre os commandos do Linux para visualizar o conteúdo do diretório atual"
date: 2022-09-21
difficulty: "Intermediário"
weight: 6
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" alt="Um vídeo do YouTube sobre a atividade 3 - Explorando o diretório atual" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Agora que sabemos quem somos e onde estamos, vamos analisar outras provas em busca de mais evidências dos hackers!
    </div>
</div>

## Como podemos explorar um diretório?

Para listar os arquivos no diretório atual, usamos o comando `ls`. Esse comando significa "**Listar**". Vamos tentar?

```sh
ls
```

![comando ls](../images/03_ls-command.png?classes=border,shadow)

### Como podemos obter mais informações sobre os arquivos neste diretório?

Vamos começar digitando o comando `ls` seguido da flag `-l`:

```sh
ls -l
```

![comando ls -l](../images/03_ls-l.png?classes=border,shadow)

A flag `-l` que acabamos de testar, auxilia o comando `ls` a listar o conteúdo do diretório em formato longo apresentado detalhes sobre esses arquivos.

## Quais informações estão sendo exibidas?

Agora vamos examinar os detalhes do comando `ls -l` para o diretório `Videos`:

![comando ls -l explicado](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">verde</span>: exibe as permissões de acesso aos arquivos e diretórios. O primeiro caractere `d` denota que **Videos** é um diretório. Se fosse um `-` significaria que **Videos** era um arquivo.
2. <span style="color:red">vermelho</span>: exibe o número de _links_ para este arquivo. No nosso exemplo, o diretório **Videos** contem 2 _links_.
3. <span style="color:purple">roxo</span>: exibe o usuário dono do arquivo. Usuário `nuvi` é dono do diretório **Videos**.
4. <span style="color:white;background-color:#232b36">branco</span>: exibe o grupo dono do arquivo. No nosso exemplo, o arquivo pertence ao grupo `nuvi`.
5. <span style="color:#ffc000">amarelo</span>: exibe o tamanho do arquivo em **bytes**. O diretório **Videos** contém um tamanho de 4096 bytes.
6. <span style="color:#ed7d31">laranja</span>: exibe a data e a hora em que o arquivo foi criado.
7. <span style="color:#2e75b6">azul</span>: exibe o nome do arquivo ou diretório.
