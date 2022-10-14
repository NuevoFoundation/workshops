---
title: "Atividade 5 - Protegendo as permissões de usuários"
description: "Aprendendo sobre os commandos do Linux para proteger os seus arquivos"
date: 2022-09-21
difficulty: "Intermediário"
weight: 8
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" alt="Um vídeo do YouTube sobre a atividade 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Essa não! Parece que alguns de nossos arquivos foram manipulados! Precisamos proteger as nossas anotações urgentemente. Não queremos que um hacker acesse nossos segredos!
    </div>
</div>

### Como podemos limitar o acesso aos nossos arquivos?

A resposta é, podemos dar "**permissões**" aos usuários nos próprios arquivos!

As permissões são uma maneira de determinar como o computador permite aos usuários o acesso aos arquivos e o que eles podem fazer com esses arquivos.

No Linux, existem três tipos comuns de acesso a um arquivo que um usuário pode solicitar: "**leitura**", "**escrita**" ou "**execução**".

{{% notice note %}}

A permissão de "**Leitura**" significa que um usuário pode abrir e ler o arquivo. O acesso do tipo "**leitura**" geralmente é indicado com um símbolo `r` que vem do Inglês _read_.

A permissão de "**Escrita**" significa que um usuário pode abrir e escrever no arquivo.
Isso inclui renomear e mover um arquivo para um local diferente no sistema de arquivos. O acesso do tipo "**escrita**" geralmente é indicado com um símbolo `w` que vem do Inglês _write_.

A permissão de "**Execução**" significa que um usuário pode tentar executar o arquivo como um programa. O acesso do tipo "**execução**" geralmente é indicado com um símbolo `x` que vem do Inglês _execute_.

{{% /notice %}}

### Mas como sabemos o quão protegidos estão nossos arquivos?

Nós já estudamos um comando em um das atividades passadas que pode nos mostrar o quão protegidos estão nossos arquivos.
Você lembra dele? Caso não lembre, fique à vontade para relembrá-lo acessando a atividade 3!

![comando ls -l](../images/Act5.1.png?classes=border,shadow)

Devemos continuar usando esse mesmo comando para verificar se as nossas futuras alterações ocorrerão conforme o esperado.

---

### Então como podemos proteger os nossos arquivos com essas permissões?

Vamos analisar o comando `chmod`:

```
chmod u=rwx g=rx o=x file1
```

Usamos o comando `chmod` para modificar as permissões dos nossos arquivos. Nós "**alteramos o modo**" que nossos arquivos são acessados modificando os três grupos de permissões:

- o grupo <b>u</b> que representa o usuário e dono do arquivo
- o grupo <b>g</b> que representa o grupo de usuários que têm acesso permitido naquele arquivo
- o grupo <b>o</b> que representa os outros usuários que não têm acesso

Esses grupos podem ser modificados com as seguintes permissões:

- <b>r</b> para leitura
- <b>w</b> para escrita
- <b>x</b> para execução.

---

### Hora de aplicar o que aprendemos até agora!

Agora, vamos tentar alterar as permissões dos nossos arquivos. Queremos que qualquer pessoa dentro e fora do nosso grupo não consiga acessar `file1`. Apenas o dono do arquivo deve ter acesso. Você sabe como faríamos isso?

![comando chmod](../images/Act5.2.png?classes=border,shadow)

#### Curiosidade!

`chmod` também pode ser usado com comandos numéricos simples. Esse método é chamado de modo octal pois possui oito tipos de permissões diferentes.
Para modificar um arquivo no modo octal nos usamos:

```
chmod 751 [digite o nome do arquivo]
```

Quando utilizamos o modo octal, podemos passar o modo de permissões de cada grupo de usuários.
A ordem é sempre: _usuário dono, grupo dono e outros usuários_. Abaixo podemos verificar os oito tipos de permissões diferentes para esse método:

| Número |         Permissão         |
| :----: | :-----------------------: |
|   7    | leitura + write + execute |
|   6    |     leitura + escrita     |
|   5    |    leitura + execução     |
|   4    |          leitura          |
|   3    |    execução + escrita     |
|   2    |          escrita          |
|   1    |         execução          |
|   0    |       sem permissão       |
