---
title: "Registrando Seu Bot do Discord"
draft: false
weight: 1
---

Nuvi não pode implantar um tradutor sem uma “identidade” oficial. Antes de você escrever o comportamento real, é necessário criar um usuário bot no Portal de Desenvolvedores do Discord. Isso irá fornecer a você um **token** (uma senha secreta) que seu código usará para fazer login.

### 1. Abra o Portal de Desenvolvedores
Acesse o [Portal de Desenvolvedores do Discord](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) e faça login com sua conta no Discord (ou crie uma, caso ainda não tenha).

### 2. Crie um Novo Aplicativo
Clique em **New Application**.
- Dê a ele um nome curto e claro (exemplo: `Nuevo Translator Bot`).
- Clique na caixa de termos de serviço e em seguida em **Create**.

![Criar novo aplicativo](../../media/discord-bot-name.png)

### 3. Adicione um Usuário Bot
Dentro da página do seu aplicativo:
- Clique em **Bot** no menu à esquerda.
- Clique **Add Bot** → **Yes, do it!**
- (Opcional) Dê a ele um ícone e apelido.

### 4. Copie o Token do Bot (Mas Mantenha-o Secreto!)
Ainda na página do Bot:
- Clique em **Reset Token** ou **Copy Token**.
- Esta longa sequência é como uma senha para seu bot.
- Nunca a publique em lugares públicos.

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Aviso:</strong> Se alguém obtiver seu token, poderá controlar seu bot. Caso ele vaze, redefina-o imediatamente.
{{< /alert >}}

### 5. Habilite Message Content Intent (Importante para Tradução!)
Ainda na página **Bot**:
- Role para baixo até **Privileged Gateway Intents**.
- Ative a opção **Message Content Intent**.
- Isso permite que seu bot leia mensagens (necessário para tradução automática).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Aviso:</strong> Sem o Message Content Intent habilitado, seu bot não pode ler mensagens, então a tradução automática não funcionará.
{{< /alert >}}

### 6. Convide Seu Bot para um Servidor
- Clique em **OAuth2 → URL Generator**.
- Em **Scopes**, marque: `bot` e `applications.commands`.
- Em **Bot Permissions**, selecione apenas o necessário no momento (comece com: `Read Messages/View Channels`, `Send Messages`).
- Copie a URL gerada, cole-a em seu navegador, escolha um servidor que você possui ou administra e autorize.

Seu bot agora está registrado e adicionado ao seu servidor! Ele não ficará online até que você execute seu código em Python com o token. Assim que estiver online, você começará a transformá-lo no ajudante de tradução que Nuvi precisa.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica do Nuvi:</strong> Se a URL de convite falhar, verifique novamente se as opções `bot` e `applications.commands` estão selecionadas.
{{< /alert >}}