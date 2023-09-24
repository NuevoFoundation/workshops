---
title: "Atividade 1 - Identificando Usuários no Linux"
description: "Aprendendo sobre os commandos do Linux para identificar que usuário você é"
date: 2022-09-21
difficulty: "Intermediário"
weight: 4
output:
  html_document:
    css: "../content.css"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" frameborder="0" alt="Um vídeo do YouTube explicando como criar uma conta de usuário no Linux" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Agora que estamos na linha de comando. Vamos testar um comando simples para identificar a conta de usuário!
    </div>
</div>

### O que são contas de usuário?

Cada usuário no Linux tem uma conta de usuário. Eles são usados ​​para identificar exclusivamente cada usuário.

Por exemplo, digamos que você e seu amigo Nuvi compartilhem o mesmo computador. Você e o Nuvi podem criar contas de usuário separadas e acompanhar quais arquivos pertencem a cada um de vocês. Isso garante que nenhum de vocês altere acidentalmente algo importante um do outro.

### Como descubro qual conta estou usando?

O comando Linux `whoami`, que significa "**quem eu sou**", informará qual conta você está usando. Vamos tentar?

```
whoami
```

A saída esperada para o comando acima é o nome do nosso usuário, `nuvi`, como podemos observar abaixo:

<!---![home directory](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="home directory" style="width:600px;"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Agora que verificamos quem somos, na próxima atividade, iremos descobrir onde estamos!
    </div>
</div>
