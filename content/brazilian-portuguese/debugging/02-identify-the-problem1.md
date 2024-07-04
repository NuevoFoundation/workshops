---
title: "Passo 1 – Encontrando o problema (Parte 1)"
difficulty: "Intermediário"
weight: 3
draft: false
---

## Erros do compilador

Vamos começar e dar uma olhada em um dos primeiros problemas assustadores que um programador novato enfrenta: erros de **leitura** e **compreensão**.

Existem dois tipos de erros: erros de **compilador** e de **tempo de execução**.

Um erro do **compilador** geralmente indica um problema com sua sintaxe. Talvez você quisesse expressar uma ideia no programa, mas não seguiu as regras da linguagem de programação. Eles são capturados quando você compila seu programa. Erros do compilador são relativamente fáceis de corrigir. Compiladores como `gcc` geralmente fornecem muitas informações sobre o que deu errado quando o código é compilado. Vamos explorar alguns desses erros.

Abra a guia **Shell** no programa Replit abaixo e execute o seguinte comando:

```bash
make CompilerErrors
```

{{% panel theme="info" header="Note"%}}
Neste exemplo, não executaremos o programa - este programa tem como objetivo mostrar alguns erros comuns do compilador que você pode encontrar.

{{% /panel %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Iniciar Replit</a>

O primeiro erro deve ser parecido com este (ou semelhante):

![Erro 1: ponto e vírgula ausente](../resources/w2-01.png)


Você notará que o erro contém:
    - o nome do arquivo que tentamos compilar (**`CompilerErrors.c`**).
    - a linha onde o erro foi encontrado (**`12`**).
    - a posição na linha onde o erro está localizado (**`19`**).

Como você pode ver, o compilador fornece a linha de código e aponta onde o erro realmente ocorreu! Em seguida, fornece um breve nome do erro - neste caso, o compilador esperava um ponto e vírgula (**`;`**) no final da linha. Você pode simplesmente adicionar um ponto e vírgula para corrigir esse erro.

{{% notice warning %}}
O outro erro menciona que há uma chave ausente (**`}`**) quando não era esperada. A correção para este também é relativamente simples: você pode adicionar a chave correspondente `{` ao lado de `func()`.
{{% /notice %}}

Depois de consertar, você pode compilar o código novamente usando o mesmo comando.

```bash
make CompilerErrors
```

Espere, há mais erros! Conforme mencionado na caixa de aviso, o compilador não é ótimo em detectar erros se houver uma chave ausente. Um erro do compilador pode “ocultar” outros.

Usaremos uma tabela para mostrar erros comuns do compilador e suas causas gerais.

| Erro | Causa | Correção Geral |
|---|---|---|
| Ponto e vírgula ausente | Faltando ponto e vírgula. | Adicione o ponto e vírgula `;`.|
| Corpo da função esperado após o declarador da função | Colchete `{` ausente, geralmente no início de uma declaração do corpo da função. | Adicione a chave `{` onde ela pertence. |
| Identificador esperado ou '('| No contexto de uma chave, geralmente significa que você tem uma chave extra pendurada `{`. | Remova a chave ou adicione um `}` correspondente depois dela.|
| Redefinição de... | Em algum lugar do seu código você declarou uma variável. Mais tarde você declarou isso novamente. | Renomeie as variáveis ou remova uma delas. |
| Uso de tipo não declarado... | O compilador não consegue encontrar a declaração do tipo que você deseja usar. | Geralmente isso vem de diretivas `#include` inadequadas (já que os tipos geralmente são declarados em arquivos de cabeçalho). Certifique-se de que não haja erros de digitação. |
| Deve usar a tag `struct` (ou `enum`) | C requer que você use `struct NAME_OF_TYPE` ou `enum NAME_OF_ENUM` sempre que quiser se referir ao tipo struct/enum. | Normalmente os desenvolvedores C usam uma instrução `typedef` para que não precisem digitar `struct` ou `enum` para se referir a esses tipos. No entanto, você mesmo pode adicionar essas palavras-chave. |
| Nenhum membro nomeado... | Na sua `struct`, não há campo com o nome que você solicitou. | Provavelmente um erro de digitação ou você ainda não definiu um campo em sua `struct`. |
| Tipos incompatíveis... | Você está misturando e combinando tipos, o que não é permitido em C sem conversão explícita. | Verifique se uma atribuição está precisa ou use conversão explícita para silenciar o erro durante o tempo de compilação. Isso pode levar a erros de tempo de execução. |
| O tipo de argumento está incompleto | Se uma função retornar nula, você não poderá passá-la como argumento para outra função! | Corrija a declaração da função como não nula e certifique-se de que deseja tal comportamento. |
| Estranho '(' ou ')' antes de ';' | Parênteses incompatíveis `()` | Você tem um conjunto extra de parênteses em algum lugar. Verifique novamente para ter certeza de que há um par correspondente para cada um deles! |

Se a aplicação de uma correção geral não funcionar, *então* você deve procurar ajuda na Internet. Porém, saber ler o erro e decifrar o que ele deve consertar é importante! Você não deveria precisar procurar erros comuns com soluções simples.

{{% notice warning %}}
Nem todos os compiladores fornecem informações úteis. Por exemplo, os erros do compilador C++ podem variar desde erros simples (como em `CompilerErrors.c`) até enormes blocos de texto, especialmente ao trabalhar com modelos. O objetivo desta lição NÃO é afastá-lo completamente das fontes da Internet, mas sim familiarizá-lo o suficiente com elas para lhe dar mais intuição sobre como corrigir erros simples.
{{% /notice %}}