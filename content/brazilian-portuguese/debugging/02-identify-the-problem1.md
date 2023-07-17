---
title: "Passo 1 - Encontrando o problema (Parte 1)"
difficulty: "Intermediário"
weight: 3
draft: false
---

## Erros do compilador

Vamos começar e dar uma olhada em um dos primeiros problemas assustadores que um programador novato enfrenta: erros de **leitura** e **compreensão**.

Há dois tipos de erros: **compilador** e **runtime** erros. 

Um erro **compilador** geralmente indica um problema com sua sintaxe. Talvez você quisesse expressar uma ideia no programa, mas não aderiu às regras da linguagem de programação. Eles são capturados quando você compila seu programa. Os erros do compilador são bons porque são relativamente fáceis de corrigir. Compiladores como 'gcc', geralmente dão muitas informações sobre o que deu errado quando o código é compilado. Vamos explorar alguns desses erros. 

Abra a guia **Shell** no programa Replit abaixo e execute o seguinte comando: 

```bash
make CompilerErrors
```

{{% panel theme="info" header="Note"%}}
Para este exemplo, não estaremos executando o programa - este programa destina-se a mostrar alguns erros comuns do compilador que você pode encontrar.

{{% /panel %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Executar Replit</a>

O primeiro erro deve ser semelhante a este (ou similar):

![Erro 1: Ponto e vírgula ausente](../resources/w2-01.png)


Você notará que o erro contém:
    - o nome do arquivo que tentamos compilar (**'CompilerErrors.c'**).
    - a linha onde o erro foi encontrado (**'12'**).
    - a posição na linha onde o erro está localizado (**'19'**). 

Como você pode ver, o compilador fornece a linha de código e aponta para onde o erro realmente ocorreu! Em seguida, ele dá um breve nome do erro - neste caso, o compilador esperava um ponto-e-vírgula (**';'**) no final da linha. Você pode simplesmente adicionar um ponto-e-vírgula para corrigir esse erro.

O outro erro menciona que há uma cinta ondulada ausente (**'}'**) quando não esperava uma. A correção para este também é relativamente simples: você pode adicionar a chave correspondente `{` ao lado de `func()`.

{{% notice warning %}}
Uma cinta encaracolado ausente é muitas vezes a razão para erros aparentemente extraordinários. O compilador não é ótimo para escolher onde uma chave deve estar, então se você estiver incluindo um arquivo de cabeçalho com uma chave ausente, ele explodirá em seu rosto. Em quase todos os casos, quando o compilador emite uma série de erros no código que você não escreveu, é provável que seja uma chave que esteja faltando em algum lugar no seu código (ou talvez até mesmo na biblioteca)!
{{% /notice %}}

Depois de corrigi-lo, você pode compilar o código novamente usando o mesmo comando.

```bash
make CompilerErrors
```

Espere, há mais erros! Como mencionado na caixa de aviso, o compilador não é ótimo para pegar erros se houver uma chave ausente. Um erro do compilador pode "esconder" outros.

Usaremos uma tabela para mostrar erros comuns do compilador e sua causa geral.

| Erro | Causa | Correção Geral |
|---|---|---|
| Ponto e vírgula ausente | Ponto e vírgula ausente. | Adicione o ponto-e-vírgula `;`.|
| Corpo de função esperado após declarador de função | Falta colchete cacheado `{`, geralmente no início de uma declaração de corpo de função. | Adicione a chave `{` onde pertence. |
| Identificador ou '(' esperado | No contexto de uma chave cacheada, geralmente significa que você tem uma chave cacheada extra `{`. | Remova a chave ou adicione um `}` correspondente depois dela.|
| Redefinição de ... | Em algum lugar do seu código, você declarou uma variável. Mais tarde, você a declarou novamente. | Renomeie as variáveis ou remova uma delas. |
| Uso de tipo não declarado... | O compilador não consegue encontrar a declaração de um tipo que você deseja usar. | Geralmente isso vem de diretivas `#include` incorretas (já que os tipos geralmente são declarados em arquivos de cabeçalho). Verifique se não há erros de digitação. |
| Deve usar a tag `struct` (ou `enum`) | C exige que você use `struct NAME_OF_TYPE` ou `enum NAME_OF_ENUM` sempre que quiser se referir ao tipo struct/enum. | Geralmente os desenvolvedores C usam uma instrução `typedef` para não terem que digitar `struct` ou `enum` para se referir a esses tipos. Você pode adicionar essas palavras-chave você mesmo, no entanto. |
| Nenhum membro chamado... | No seu `struct`, não há campo com o nome que você solicitou. | Provavelmente um erro de digitação, ou você ainda não definiu um campo no seu `struct`. |
| Tipos incompatíveis... | Você está misturando e combinando tipos, o que não é permitido em C sem casting explícito. | Verifique se uma atribuição é precisa ou use casting explícito para silenciar o erro durante o tempo de compilação. Isso pode levar a erros em tempo de execução, no entanto. |
| Tipo de argumento é incompleto | Se uma função retorna void, você não pode passá-la como argumento para outra função! | Corrija a declaração da função para nonvoid e tenha certeza de que deseja tal comportamento. |
| Parênteses extras '(' ou ')' antes de ';' | Parênteses desiguais `()` | Você tem um conjunto extra de parênteses em algum lugar. Verifique duas vezes para ter certeza de que há um par correspondente para cada um deles! |

Se a aplicação de uma correção geral não funcionar, *então* você deve recorrer à internet para obter ajuda. Saber ler o erro e decifrar o que ele quer consertar é importante, porém! Você não precisa procurar erros comuns com correções simples.

{{% notice warning %}}
Nem todos os compiladores fornecem informações úteis. Por exemplo, os erros do compilador C++ podem variar de simples (como em `CompilerErrors.c`), a enormes blocos de texto, especialmente ao trabalhar com modelos. O objetivo desta lição NÃO é afastá-lo completamente das fontes da internet, mas sim familiarizá-lo o suficiente com elas para lhe dar um pouco mais de intuição sobre como corrigir erros simples.
{{% /notice %}}