---
title: "Atividade 2 - Identificando a Localização do Usuário"
description: "Aprendendo sobre os commandos do Linux para determinar em qual diretório você está atualmente"
date: 2022-09-21
difficulty: "Intermediário"
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" alt="Um vídeo do YouTube sobre a atividade 2 - Identificando a Localização do Usuário" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Antes que possamos parar o ataque dos hackers, precisamos aprender a navegar no sistema de arquivos Linux!
    </div>
</div>

### O que é um sistema de arquivos?

Um sistema de arquivos é uma coleção estruturada de arquivos e dados em um disco ou unidade de computador. O nível mais alto de um sistema de arquivos é chamado de "**raiz**". Pense nisso como o início do sistema de arquivos.

{{% notice tip %}}
Curiosidade: os sistemas de arquivos são frequentemente descritos como uma "**árvore**". Isso ocorre porque o sistema de arquivos se parece com uma árvore de cabeça para baixo e cada pasta ou diretório seria como um ramo ou folha. Por exemplo, o seu sistema de arquivos pode se parecer com o abaixo.

![Imagem de uma árvore do sistema de arquivos](../images/filesystem-tree.png?classes=border,shadow)
{{% /notice %}}

Em um computador Windows, você pode navegar pelo sistema de arquivos da unidade "**C:\\**" deste computador usando o "**Explorador de Arquivos**". Observe a sua estrutura abaixo:

![Imagem de um explorador de arquivos do Windows](../images/filesystem-windows.png?classes=border,shadow)

Em um Mac, você pode navegar pelo sistema de arquivos do computador em "**Finder**" como podemos observar abaixo:

![Imagem do localizador de arquivos do Mac](../images/home-folder-mac.jpg?classes=border,shadow)

### Onde nós estamos no sistema de arquivos?

Queremos descobrir qual é o nosso "**diretório de trabalho atual**". Este é o local no sistema de arquivos em que você está atualmente.

O comando do Linux `pwd` exibirá o caminho completo do diretório de trabalho atual. Traduzindo do Inglês, significa "**Imprima o diretório Atual**". Vamos tentar?

```
pwd
```

A saída esperada para o seu comando pode ser parecida com a nossa abaixo:

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="comando pwd" style="width:700px;"/>

Ela mostra o caminho `/home/nuvi`. E o que isso significa? Tentaremos desvendar abaixo:

- `/`: Este é o símbolo para o diretório raiz do sistema de arquivos. É sempre o primeiro diretório no Linux.
- `/home`: Este é o caminho do diretório `home`, localizado no diretório raiz.
- `/home/nuvi`: Este é o caminho para o diretório `nuvi`, localizado no diretório `home`. A saída do terminal finaliza aqui, significando que `/home/nuvi` é o diretório de trabalho atual onde estamos localizados.
- O processo de entrar no sistema de arquivos através de cada diretório pode continuar por muitas outras etapas em alguns casos.
- O caminho exibido e descrito acima é chamado de **caminho absoluto**, porque é o caminho fornecido do diretório raiz até o diretório atual.

### Como podemos navegar pelo sistema de arquivos?

Para mover para um diretório diferente, use o comando `cd`. Isso significa "Alterar diretório". O formato deste comando é `cd [nome do diretório]`.

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="comando cd" style="width:700px;"/>

Na saída do terminal acima, podemos observar que quando digitamos `pwd` novamente, o diretório de trabalho em que estamos agora é Desktop. Agora vamos tentar o comando `cd ..`:

```
cd ..
```

<!-- ![comando cd](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="comando cd" style="width:700px;"/>

O `..` após o comando `cd` leva você um nível acima na árvore do sistema de arquivos. A saída de `pwd` agora mostra que estamos de volta ao diretório que começamos, ou seja, nós começamos no diretório `nuvi`, depois descemos a árvore para diretório `Desktop` com o comando `cd Desktop`, e então subimos na árvore com o comando `cd ..`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excelente! Na próxima atividade, exploraremos os mais sobre diretórios.
    </div>
</div>
