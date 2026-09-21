---
title: "Executando Tradução no Seu Computador"
draft: false
weight: 3
---

O bot da Nuvi pode responder, mas ainda não consegue ajudar amigos a se entenderem. Nesta seção, você instalará um programa que pode executar tradução *localmente* no seu computador—sem necessidade de contas externas—para que o bot possa se tornar a ponte multilíngue que Nuvi imaginou.

Você usará isso para:
- Testes manuais do comando `/translate`
- Detectar se uma mensagem está em inglês ou espanhol (endpoint `/detect`)
- Traduzir mensagens automaticamente para usuários registrados (endpoint `/translate`)

Vamos configurar agora o mecanismo de tradução para que o bot possa utilizá-lo.

---

## 1. O que é o LibreTranslate?
LibreTranslate é um programa de tradução gratuito e de código aberto (criado pela comunidade) que você executa localmente. Sem conta. Sem assinatura em nuvem. Você fornece um texto em um idioma e ele retorna em outro.

Por que é útil para este workshop:
- Privacidade: seu texto permanece na sua máquina.
- Controle: você escolhe os idiomas e quando atualizar.
- Uso offline: após o primeiro download dos dados do idioma, pode funcionar sem internet.
- Código aberto: você pode ver como funciona ou até contribuir.

Pense nisso como um pequeno site local com uma **API** que seu bot chamará para duas coisas:
1. Detectar em qual idioma uma mensagem está (`/detect`)
2. Tradução da mensagem para outro idioma (`/translate`)

Isso permitirá o recurso de tradução automática mais tarde.

### O que é uma API?
Uma API é como um menu de um programa. Ela lista os “endpoints” (URLs) que você pode chamar e o que recebe de volta. Quando você visita `http://127.0.0.1:5000/translate` com os dados corretos, a API do LibreTranslate responde com um texto traduzido. Seu bot irá **enviar uma solicitação** (seu texto + escolhas de idiomas) e **receber uma resposta** (o texto traduzido) — é como pedir uma refeição e recebê-la.

---



<details open>
<summary>Tópicos</summary>
{{% children /%}}
</details>