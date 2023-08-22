---
title: "Começando"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---
## Pré-requisitos
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/downloads). Learn more about Git and GitHub in their [Quickstart](https://docs.github.com/en/get-started/quickstart) guide.

## Links de referência
- [Github repo](https://github.com/NuevoFoundation/workshops)
- [Workshops website](https://workshops.nuevofoundation.org/)

## Vídeos a passo a passo
- [Workshops Github repository development cycle](https://youtu.be/LpjucoAVviI)
- [Workshops Github repository structure](https://youtu.be/cygmE6LGcOw)

## Código
A contribuição para este repositório é feita por meio do [modelo fork](https://help.github.com/articles/fork-a-repo/). Os contribuidores enviam alterações para sua própria versão "bifurcada" de workshops e, em seguida, enviam uma solicitação de recebimento solicitando que essas alterações sejam mescladas.

Para começar:

1. Bifurque <a target="_blank" href="https://github.com/nuevoFoundation/workshops">o repositório</a> clicando em Bifurcar no canto superior direito:

![imagem](../media/fork.png)

2. No git bash, execute (substituindo _[user-name]_ pelo seu nome de usuário do GitHub):
```
\> git clone https://github.com/[user-name]/workshops.git
\> cd workshops
\workshops> git remote add upstream https://github.com/NuevoFoundation/workshops.git
\workshops> git remote set-url --push upstream no_push
```

O último comando evita um push acidental para este repositório sem passar por uma solicitação pull.

Depois de executar acima, `git remote -v` deve mostrar algo semelhante ao seguinte:
```
\workshops> git remote -v 
origin  https://github.com/dmonroym/workshops.git (fetch)
origin  https://github.com/dmonroym/workshops.git (push)
upstream        https://github.com/NuevoFoundation/workshops.git (fetch)
upstream        no_push (push)
```

## Construir e testar

Para construir e testar suas mudanças, você vai querer usar hugo. Se você seguiu as instruções de instalação corretas, então hugo deve estar no seu PATH (se não dar a sua máquina uma reinicialização).

```
\> cd workshops
\workshops> hugo -D server
```

Isso produzirá algumas informações de compilação, mas a linha mais importante será na linha de: `Web Server is available at //localhost:1313/ (bind address 127.0.0.1)`

Agora você pode iniciar seu navegador favorito e abrir //localhost:1313/ e deve ver o site.

## Atualizando seu fork

Para manter-se atualizado, você vai querer manter seu garfo atualizado o máximo possível.
Antes de criar uma nova ramificação, você deve buscar as alterações e empurrá-las para o garfo. Veja como fazer isso (se você precisar de outro ramo, use isso em vez de mestre).

```
\workshops> git fetch --all --prune
\workshops> git checkout master
\workshops> git merge upstream/master
\workshops> git push origin master
```

## Exemplo de passo a passo

**Cenário**: Vamos fazer uma alteração simples na página Introdução e enviar uma solicitação pull.

### Siga as instruções acima

Depois de seguir as instruções do Código acima, você terá uma cópia local do repositório de oficinas.

### Criar uma ramificação de tópico

Certifique-se de que seu garfo esteja atualizado antes de fazer isso:

```
\workshops> git checkout master
\workshops> git checkout -b [branch-name]
\workshops> git push --set-upstream origin [branch-name]
```

### Abra o repo usando o VS Code

Ao iniciar o VS Code, você pode abrir a pasta ... Navegue até a pasta do workshop e selecione Abrir.

### Navegue até o arquivo e modifique-o

Dependendo do que você está modificando, você vai querer entender melhor [como o site é criado](site-architecture)

No nosso caso, você deseja modificar este arquivo, então vá para content\english\guidelines\getting-started.md
Eu simplesmente quero que você adicione dois pontos de exclamação à palavra "Bem-vindo!"

**Antes**: `Bem-vindo!`

**Depois**: `Bem-vindo!!!`

### Confirme a alteração

A execução do `git status` deve fornecer todas as alterações feitas e todos os nomes de arquivo. Você vai querer testá-los usando git add e, em seguida, confirmá-los e enviá-los. Aqui estão os comandos para fazer isso.

```
\workshops> git status
\workshops> git add content/english/guidelines/getting-started.md
\workshops> git commit -m "Added exclamations"
\workshops> git push
```

Algumas dicas do git: Se você quiser adicionar tudo e confirmar ao mesmo tempo, pode pular todos esses comandos e apenas usar `git commit -am "mensagem aqui" ` e depois fazer o `git push`

### Crie uma solicitação pull
Parabéns, agora você fez todas as alterações necessárias e a última etapa é revisá-lo e colocá-lo em produção.

Se você navegar até sua bifurcação no github.com, provavelmente verá uma sugestão para criar uma solicitação pull com base em seu push mais recente.

![imagem](../media/compare-and-pull.png)

Caso contrário, navegue até Pull Requests -> New pull request

![imagem](../media/create-new-pr.png)

O aspecto mais importante aqui é ter certeza de que você está escolhendo seus galhos corretamente (sua base e sua cabeça).

Agora você pode clicar no botão Criar pull request, fornecer uma descrição e um bom título e aguardar a aprovação de um revisor para que possa ser mesclado.
