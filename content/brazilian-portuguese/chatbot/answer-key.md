---
title: "Chatbot - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas são soluções de exemplo para as atividades do workshop de chatbot. Os padrões AIML devem ser escritos em MAIÚSCULAS. As respostas do template podem usar as maiúsculas e minúsculas que você quiser. As respostas do seu chatbot podem ser diferentes destes exemplos, desde que a correspondência de padrões funcione corretamente!
{{% /notice %}}

## Atividade 2: Olá Mundo

Esta é a categoria inicial apresentada no passo a passo:

```xml
<category>
    <pattern>OLÁ</pattern>
    <template>
        Olá, Mundo!
    </template>
</category>
```

Quando o usuário digita "Olá", o bot responde "Olá, Mundo!"

## Atividade 3: Adicione suas próprias categorias

### 1. Qual é o seu nome?

```xml
<category>
    <pattern>QUAL É O SEU NOME</pattern>
    <template>
        Meu nome é Chatbot.
    </template>
</category>
```

### 2. Qual é a sua cor favorita?

```xml
<category>
    <pattern>QUAL É A SUA COR FAVORITA</pattern>
    <template>
        Minha cor favorita é azul.
    </template>
</category>
```

### 3. Qual é a sua comida favorita?

```xml
<category>
    <pattern>QUAL É A SUA COMIDA FAVORITA</pattern>
    <template>
        Minha comida favorita é pizza.
    </template>
</category>
```

{{% notice tip %}}
**Regras principais para os padrões:**
- Escreva sempre os padrões em MAIÚSCULAS
- Não inclua pontuação nos padrões (o Pandorabots remove a pontuação da entrada do usuário antes de fazer a correspondência)
- A resposta do template pode usar as maiúsculas e minúsculas que você quiser
{{% /notice %}}

Neste ponto, seu bot deve responder a:

| O usuário diz | O bot responde |
|-----------|-------------|
| Olá | Olá, Mundo! |
| Qual é o seu nome? | Meu nome é Chatbot. |
| Qual é a sua cor favorita? | Minha cor favorita é azul. |
| Qual é a sua comida favorita? | Minha comida favorita é pizza. |

## Atividade 4: Coringas

O coringa `*` corresponde a uma ou mais palavras. Ao colocar `*` no início de um padrão, o bot responde a qualquer pergunta que **termine com** a palavra-chave.

### 1. Qualquer pergunta que termine com "comida"

```xml
<category>
    <pattern>* COMIDA</pattern>
    <template>
        Minha comida favorita é pizza.
    </template>
</category>
```

### 2. Qualquer pergunta que termine com "cor"

```xml
<category>
    <pattern>* COR</pattern>
    <template>
        Minha cor favorita é azul.
    </template>
</category>
```

### 3. Qualquer pergunta que termine com "nome"

```xml
<category>
    <pattern>* NOME</pattern>
    <template>
        Meu nome é Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**Pergunta comum dos alunos:** "Ainda preciso das categorias da Atividade 3?"

Você pode manter as duas! O Pandorabots faz a correspondência primeiro com o padrão mais específico. Assim, "QUAL É A SUA COMIDA FAVORITA" (correspondência exata) tem prioridade sobre "* COMIDA" (coringa). As categorias com coringa cuidam das perguntas para as quais você não escreveu uma categoria específica, como "Você gosta de comida?" ou "Me fale sobre comida".
{{% /notice %}}

Agora o bot responde a muito mais entradas:

| O usuário diz | Corresponde ao padrão | O bot responde |
|-----------|----------------|-------------|
| Qual é a sua comida favorita? | QUAL É A SUA COMIDA FAVORITA | Minha comida favorita é pizza. |
| Você gosta de comida? | * COMIDA | Minha comida favorita é pizza. |
| Me fale sobre comida | * COMIDA | Minha comida favorita é pizza. |
| Qual é o seu nome? | QUAL É O SEU NOME | Meu nome é Chatbot. |
| Você tem um nome? | * NOME | Meu nome é Chatbot. |

## Atividade 5: Ecoando Coringas

A tag `<star />` captura o que o coringa `*` correspondeu e inclui esse texto na resposta do bot.

### 1. "Meu nome é [nome]" responde "Prazer em conhecê-lo, [nome]!"

```xml
<category>
    <pattern>MEU NOME É *</pattern>
    <template>
        Prazer em conhecê-lo, <star />!
    </template>
</category>
```

### 2. "Minha cor favorita é [cor]" responde "Eu também gosto de [cor]!"

```xml
<category>
    <pattern>MINHA COR FAVORITA É *</pattern>
    <template>
        Eu também gosto de <star />!
    </template>
</category>
```

### 3. "Minha comida favorita é [comida]" responde "[comida]! Delícia!"

```xml
<category>
    <pattern>MINHA COMIDA FAVORITA É *</pattern>
    <template>
        <star />! Delícia!
    </template>
</category>
```

Como a tag `<star />` funciona:

| O usuário diz | O `*` captura | O bot responde |
|-----------|-------------|-------------|
| Meu nome é João | João | Prazer em conhecê-lo, João! |
| Meu nome é Maria | Maria | Prazer em conhecê-lo, Maria! |
| Minha cor favorita é azul | azul | Eu também gosto de azul! |
| Minha cor favorita é vermelha | vermelha | Eu também gosto de vermelha! |
| Minha comida favorita é pizza | pizza | pizza! Delícia! |
| Minha comida favorita é sushi | sushi | sushi! Delícia! |

## Arquivo AIML completo

Veja como o seu arquivo `greetings.aiml` completo deve ficar depois de todas as atividades:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- Atividade 2: Olá Mundo -->
<category>
    <pattern>OLÁ</pattern>
    <template>
        Olá, Mundo!
    </template>
</category>

<!-- Atividade 3: Categorias básicas -->
<category>
    <pattern>QUAL É O SEU NOME</pattern>
    <template>
        Meu nome é Chatbot.
    </template>
</category>

<category>
    <pattern>QUAL É A SUA COR FAVORITA</pattern>
    <template>
        Minha cor favorita é azul.
    </template>
</category>

<category>
    <pattern>QUAL É A SUA COMIDA FAVORITA</pattern>
    <template>
        Minha comida favorita é pizza.
    </template>
</category>

<!-- Atividade 4: Categorias com coringa -->
<category>
    <pattern>* NOME</pattern>
    <template>
        Meu nome é Chatbot.
    </template>
</category>

<category>
    <pattern>* COR</pattern>
    <template>
        Minha cor favorita é azul.
    </template>
</category>

<category>
    <pattern>* COMIDA</pattern>
    <template>
        Minha comida favorita é pizza.
    </template>
</category>

<!-- Atividade 5: Ecoando coringas -->
<category>
    <pattern>MEU NOME É *</pattern>
    <template>
        Prazer em conhecê-lo, <star />!
    </template>
</category>

<category>
    <pattern>MINHA COR FAVORITA É *</pattern>
    <template>
        Eu também gosto de <star />!
    </template>
</category>

<category>
    <pattern>MINHA COMIDA FAVORITA É *</pattern>
    <template>
        <star />! Delícia!
    </template>
</category>

</aiml>
```

{{% notice tip %}}
**Prioridade dos padrões em AIML:** Quando vários padrões podem corresponder à mesma entrada, o Pandorabots usa a correspondência mais específica. Por exemplo, "MINHA COMIDA FAVORITA É *" é mais específico do que "* COMIDA", então "Minha comida favorita é pizza" vai corresponder ao padrão do coringa ecoado e responder "pizza! Delícia!" em vez de "Minha comida favorita é pizza".
{{% /notice %}}
