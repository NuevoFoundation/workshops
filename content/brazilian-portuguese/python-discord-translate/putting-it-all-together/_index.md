---
title: "Colocando Tudo Junto"
draft: false
weight: 4
---

Seu bot está online e o LibreTranslate está funcionando. Agora, vamos combiná-los para que os amigos da Nuvi possam conversar em diferentes idiomas!

## O Que Você Vai Construir

Seu bot se tornará um **assistente de tradução** que:
- Identifica em qual idioma as pessoas estão digitando
- Traduz automaticamente mensagens para quem precisar
- Envia traduções de forma privada (para não bagunçar o chat)
- Tem um comando de backup `/translate` para emergências

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Mascote da Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi diz:</strong> Não se preocupe se isso parecer muito! Dividimos tudo em pequenas etapas que são fáceis de acompanhar.
{{< /alert >}}

## Antes de Começar

Verifique se você tem:
- O LibreTranslate em execução (com suporte a Inglês e Espanhol)
- Seu bot online (o comando `/hello` funciona)
- O pacote `requests` instalado
- O Conteúdo de Mensagem ativado no Discord (para que seu bot possa ler mensagens)

## O Que Você Terá Quando Terminar

Seu bot terá os seguintes comandos:
- `/register_language` - Cadastre-se para receber traduções
- `/my_language` - Verifique suas configurações
- `/stop_translation` - Parar de receber traduções
- `/translate` - Traduzir algo manualmente

## Teste Seu Bot

Depois de construir tudo:

1. **Cadastre os usuários**: Peça para seus amigos escolherem diferentes idiomas.
2. **Envie mensagens**: Observe as traduções aparecerem nos DMs.
3. **Teste o modo manual**: Utilize o `/translate` com qualquer frase.
4. **Desative**: Verifique se o comando `/stop_translation` funciona.

## Precisa de Ajuda?

| Problema                     | Onde Procurar                       |
|------------------------------ |-------------------------------------|
| Não consegue detectar idiomas | [Função Detect Language](detect-language-function/) |
| Tradução não funciona         | [Função Translate Text](translate-text-function/) |
| Não consegue registrar        | [Comandos de Registro](registration-commands/) |
| Sem traduções automáticas     | [Manipulação de Mensagens](message-handling-and-translate/) |
| Quer o código completo        | [Código Completo do Bot](full-code/) |

---