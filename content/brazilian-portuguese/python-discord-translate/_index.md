---
title: "Discord: Construindo um Bot Tradutor"
description: "Aprenda conceitos intermediários de Python, como bibliotecas e APIs, com integração ao Discord"
date: 2025-09-15T10:11:00-07:00
prereq: "Noções Básicas de Python"
difficulties: ["intermediário"]
language: "python"
topics: ["conceitos-basicos-programacao"]
icon: "fab fa-python"
draft: false
---

## Visão Geral
Bem-vindo ao curso **Python: Construindo um Bot Tradutor para o Discord**!

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi diz:</strong> Pronto para codificar algo incrível? Vamos criar um bot que quebra barreiras linguísticas—como um amigo superinteligente que traduz mensagens instantaneamente. Vamos tornar a internet mais amigável, uma tradução de cada vez.
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi acabou de criar um novo servidor Discord para que todos os seus amigos ao redor do mundo possam se reunir, compartilhar ideias e planejar projetos criativos. Há apenas um problema: nem todos falam o mesmo idioma. Alguns amigos escrevem em inglês, outros em espanhol, alguns em português e outros em coreano ou chinês. As conversas ficam fragmentadas, as pessoas se sentem excluídas e Nuvi quer que todos se sintam incluídos.

Então Nuvi teve uma ideia: construir um **bot tradutor** que vive diretamente no servidor Discord. Você começará com comandos simples de barra (slash), depois atualizará o bot para que os usuários possam registrar seu idioma preferido (inglês ou espanhol) e receber automaticamente traduções privadas (DMs) sempre que alguém conversar em outro idioma. Para tornar isso possível, Nuvi (e você!) aprenderá como:

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Atenção:</strong> Não se preocupe se alguns desses termos parecem novos. Vamos explicar tudo passo a passo. Até o final, você verá como as peças se encaixam como um quebra-cabeça.
{{< /alert >}}

- Conectar código Python ao Discord usando um usuário bot
- Monitorar mensagens de forma segura (com os intents certos)
- Executar um serviço de tradução local (LibreTranslate)
- Detectar se uma mensagem está em inglês ou espanhol
- Traduzir mensagens automaticamente para usuários registrados
- Enviar traduções de forma privada para que o canal permaneça organizado
- Ainda oferecer um comando manual `/translate` como alternativa

No final, você terá um bot funcional que ajuda pessoas que falam idiomas diferentes a conversarem entre si. Você não estará apenas escrevendo código—estará construindo uma ponte entre amigos.

### Roadmap
1. Configuração: pré-requisitos e noções básicas do Discord
2. Criando o Bot: registro + comando de barra mínima
3. Executando Tradução Localmente: iniciar o LibreTranslate + script de teste
4. Juntando Tudo: detectar, traduzir, registrar preferências de idioma
5. Objetivos Extras: persistência (salvar escolhas de idiomas dos usuários), mais comandos

### Glossário
- **Endpoint:** Um URL específico em um servidor que executa uma tarefa (ex.: `/translate`).
- **Intent:** Uma permissão que informa ao Discord quais eventos seu bot pode receber.
- **Comando de Barra:** Um comando estruturado que começa com `/`, e que o Discord valida e completa automaticamente.
- **Servidor de Tradução:** O processo local do LibreTranslate que detecta e traduz texto.
- **Persistência (Extra):** Salvar escolhas de idioma dos usuários para que permaneçam após uma reinicialização.

Pronto para ajudar o Nuvi? Vamos construir isso passo a passo.