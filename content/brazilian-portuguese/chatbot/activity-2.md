---
title: "Atividade 2: Configurar PandoraBots"
draft: false
weight: 5
---

## AIML
Vamos usar AIML para criar nosso chatbot. AIML significa **Artificial Intelligence Markup Language** (Linguagem de Marcação de Inteligência Artificial). Se você já usou HTML para fazer um site, verá que o AIML é muito semelhante. Antes de começarmos a escrever AIML, precisamos nos inscrever em uma conta no PandoraBots.

## Pandorabots
Vá para [https://www.pandorabots.com/](https://www.pandorabots.com/) e clique em **Sign Up** (Inscrever-se). Insira um e-mail e uma senha para criar uma conta. Alternativamente, você pode se inscrever usando uma conta do Google, Facebook, Twitter ou Github. Se solicitado, escolha a opção de teste gratuito.

## Criar um novo bot
Depois de se inscrever, você verá uma página que se parece com esta:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="página inicial de nova conta no pandorabots" width="40%"/></p>

Para criar um novo bot, use o botão “+” ao lado de My Bots no painel de navegação. Dê um nome e clique em “Create Bot” (Criar Bot).

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="criando um novo bot no pandorabots" width="40%"/></p>

## Edição do Bot
Depois de criar um novo bot, o nome do bot aparecerá no painel de navegação. Clique em **Edit** (Editar) abaixo do nome do seu bot e depois escolha **Code Editor** (Editor de Código) para navegar até o Editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editando um bot no pandorabots" width="40%"/></p>

O Editor é onde você escreverá arquivos e categorias AIML que permitirão que você e outras pessoas conversem com seu bot.

Use o Menu de Arquivos para criar um novo arquivo AIML chamado greetings (saudações).

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="adicionando um novo arquivo no pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="adicionando um novo arquivo no pandorabots" width="40%"/></p>

## Olá Mundo

Copie o código para a seguinte categoria no editor de texto entre as tags de início ```<aiml>``` e fim ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Olá, Mundo!
    </template>
</category>
```

Depois de concluir, salve seu arquivo através do menu suspenso “File” (Arquivo).

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="adicionando um novo arquivo no pandorabots" width="40%"/></p>

## Testando seu bot
O Widget de Chat permite que você converse com seu bot. Clique no ícone de "balões de chat" no canto inferior direito para começar a conversar com seu bot. Digite `Hello` e você deverá receber a resposta que acabou de codificar, `“Olá, Mundo!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="adicionando um novo arquivo no pandorabots" width="40%"/></p>