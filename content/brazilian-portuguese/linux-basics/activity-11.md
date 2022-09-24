---
title: "Atividade 11 - Guardando e protegendo arquivos"
description: "Aprendendo sobre os commandos do Linux para compactar e descompactar"
date: 2022-09-22
prereq: "Nenhum."
difficulty: "Intermediário"
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Muito obrigada por ajudar a recuperar a minha máquina! Agora vamos compactar tudo em um belo pacote.
    </div>
</div>

### Proteja os seus arquivos, para que eles não sejam adulterados novamente

O comando `tar` permite criar e extrair arquivos compactados.

{{% notice info %}}
Um arquivo compactado é uma coleção de arquivos que ocupam menos espaço de armazenamento no seu computador. Eles também podem ser transferidos para outros computadores mais rapidamente do que arquivos não compactados.

O comando `zip` permite compactar um conjunto de arquivos. O formato é: `zip [nome do arquivo compactado] [arquivos a serem compactados]`

{{% /notice %}}

O formato é: `tar [arquivos]`.

| Símbolos | Ação                             |
| :------- | :------------------------------- |
| -c       | Cria arquivo                     |
| -x       | Extrai arquivo                   |
| -f       | Cria arquivo com específico nome |

Use o comando `tar` para proteger seu diretório de arquivos! Você pode salvar um arquivo com o nome `files.tar.gz`.

![comando tar](../images/Act11.png?classes=border,shadow)
