---
title: "Passo 1 - Encontrando o problema (Parte 1)"
difficulty: "Intermediário"
weight: 3
draft: false
---

## Erros do Compilador

Vamos começar olhando para um dos primeiros desafios que quem está aprendendo programação enfrenta: **ler** e **entender** os erros.

Existem dois tipos de erros: **erros de compilador** e **erros de execução**.

Um **erro de compilador** geralmente mostra que tem algo errado na sua escrita do código, ou seja, você não seguiu as regras da linguagem. Esses erros aparecem quando você tenta compilar o programa. Eles são legais porque normalmente são fáceis de resolver. Compiladores como o `gcc` costumam mostrar bastante informação sobre o que deu errado. Vamos ver alguns desses erros.

Abra a aba **Shell** no Replit abaixo e rode o seguinte comando:

```bash
make CompilerErrors
```

{{% notice note %}}
Neste exemplo, não vamos rodar o programa - ele serve só para mostrar alguns erros comuns de compilador que você pode encontrar.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

O primeiro erro deve aparecer assim (ou parecido):

![Erro 1: Ponto e vírgula faltando](../resources/w2-01.png "Uma captura de tela de um erro do compilador dizendo 'error: expected ';' after top level declarator'")

Você vai perceber que o erro mostra:

- o nome do arquivo que tentamos compilar (**`CompilerErrors.c`**).
- a linha onde o erro foi encontrado (**`12`**).
- a posição na linha onde está o erro (**`19`**).

Como você pode ver, o compilador mostra a linha do código e aponta onde o erro aconteceu! Ele também dá um nome para o erro - neste caso, o compilador esperava um ponto e vírgula (**`;`**) no final da linha. Para resolver, é só colocar o ponto e vírgula.

Outro erro fala que está faltando uma chave (**`}`**) onde não deveria. Para resolver, é só colocar a chave correspondente `{` ao lado do `func()`.

{{% notice warning %}}
Falta de chave é uma das causas mais comuns de erros estranhos. O compilador não é muito bom em descobrir onde deveria ter uma chave, então se você incluir um arquivo com uma chave faltando, pode dar vários erros. Quase sempre, quando o compilador mostra muitos erros em códigos que você nem escreveu, provavelmente está faltando uma chave em algum lugar do seu código (ou até de uma biblioteca)!
{{% /notice %}}

Depois de corrigir, você pode compilar o código de novo com o mesmo comando.

```bash
make CompilerErrors
```

Espere aí, apareceram mais erros! Como falamos no aviso acima, o compilador não é bom em encontrar erros se está faltando uma chave. Um erro pode "esconder" outros.

Vamos usar uma tabela para mostrar erros comuns de compilador e suas causas.

| Erro | Causa | Como resolver |
|---|---|---|
| Ponto e vírgula faltando | Faltou ponto e vírgula. | Coloque o ponto e vírgula `;`.|
| Esperado corpo de função depois do declarador | Faltou chave `{`, geralmente no começo do corpo da função. | Coloque a chave `{` onde precisa. |
| Esperado identificador ou '(' | No contexto de chave, normalmente quer dizer que tem uma chave `{` sobrando. | Remova a chave ou coloque uma `}` correspondente depois dela.|
| Redefinição de ... | Em algum lugar do código você declarou uma variável, e depois declarou de novo. | Renomeie as variáveis ou remova uma delas. |
| Uso de tipo não declarado... | O compilador não achou a declaração do tipo que você quer usar. | Normalmente isso acontece por causa de um `#include` errado (os tipos geralmente estão nos arquivos de cabeçalho). Veja se não tem erro de digitação. |
| Precisa usar `struct` (ou `enum`) | Em C, você precisa usar `struct NOME_DO_TIPO` ou `enum NOME_DO_ENUM` para se referir ao tipo. | Normalmente os desenvolvedores usam `typedef` para não precisar digitar `struct` ou `enum` toda hora. Você pode adicionar essas palavras se quiser. |
| Não existe membro chamado... | Na sua `struct`, não tem um campo com o nome que você pediu. | Provavelmente é erro de digitação, ou você ainda não criou esse campo na `struct`. |
| Tipos incompatíveis... | Você está misturando tipos, o que não é permitido em C sem conversão explícita. | Veja se a atribuição está certa, ou use conversão explícita para resolver o erro na compilação. Mas cuidado, isso pode causar erros na execução! |
| Tipo do argumento está incompleto | Se uma função retorna void, você não pode passar ela como argumento para outra função! | Corrija a declaração da função para não ser void, e veja se é isso mesmo que você quer fazer. |
| Parêntese extra '(' ou ')' antes do ';' | Parênteses `()` desbalanceados | Tem um parêntese sobrando em algum lugar. Confira se todos estão em pares! |

Se a solução geral não funcionar, *aí sim* vale a pena procurar na internet. Para erros comuns com soluções simples, saber ler o erro e entender o que precisa ser corrigido pode ser muito mais rápido do que pesquisar.

{{% notice warning %}}
Nem todo compilador dá informações úteis. Por exemplo, erros de compilador em C++ podem ser simples (como em `CompilerErrors.c`), ou enormes, principalmente quando você usa templates. O objetivo desta lição NÃO é fazer você parar de usar a internet, mas sim te deixar mais confortável para entender os erros e ter mais intuição para corrigir problemas simples.
{{% /notice %}}