---
title: "Comandos de Registro"
draft: false
weight: 3
---

Esses comandos permitem que os usuários se inscrevam para auto-tradução, verifiquem suas configurações e parem de receber traduções.

## Acompanhando os Usuários

O bot lembra quem quer qual idioma usando um dicionário simples:

```python
# Isso armazena: user_id -> idioma preferido ("en" ou "es")
user_languages = {}
```

Pense nisso como uma lista de inscrição onde cada pessoa escreve seu nome e o idioma preferido!

## Comando `/register_language`

Esse comando permite que os usuários escolham o idioma que falam (o idioma no qual desejam receber mensagens):

```python
@bot.tree.command(name="register_language", description="Escolha o idioma que você fala")
@app_commands.describe(language="Qual idioma você quer que as mensagens sejam traduzidas PARA?")
@app_commands.choices(language=[
    app_commands.Choice(name="Eu falo inglês", value="en"),
    app_commands.Choice(name="Eu falo espanhol", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Inglês" if language.value == "en" else "Espanhol"
    await interaction.response.send_message(
        f"Entendido! Você fala {lang_name}, então vou traduzir mensagens para {lang_name} para você!",
        ephemeral=True
    )
```

### O Que É Legal Sobre Esse Comando
- **Escolhas claras**: "Eu falo inglês" ou "Eu falo espanhol" - sem confusão!
- **Resposta privada**: Apenas o próprio usuário vê a mensagem de confirmação
- **Memoriza preferências**: Salva o idioma que o usuário entende

## Comando `/my_language`

Isso mostra para os usuários qual idioma eles escolheram:

```python
@bot.tree.command(name="my_language", description="Veja qual idioma você escolheu")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Inglês" if lang == "en" else "Espanhol"
        await interaction.response.send_message(f"Seu idioma: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Você ainda não escolheu um idioma! Use /register_language", ephemeral=True)
```

### O Que Esse Comando Faz
- **Mostra a configuração do usuário**: Informa o idioma escolhido
- **Lembrete útil**: Se o usuário não se cadastrou, informa como fazer isso

## Comando `/stop_translation`

Este comando permite que os usuários parem de receber traduções:

```python
@bot.tree.command(name="stop_translation", description="Pare de receber auto-traduções")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Você não receberá mais traduções.", ephemeral=True)
    else:
        await interaction.response.send_message("Você já não estava recebendo traduções!", ephemeral=True)
```

### O Que Acontece
- **Remove o usuário da lista**: Exclui sua entrada
- **Confirma que funcionou**: Mostra uma mensagem de confirmação
- **Resposta amigável**: Mesmo se o usuário não estava inscrito

## Como Tudo Funciona Junto

1. **Início**: Ninguém está inscrito
2. **Inscrição**: `/register_language` adiciona o usuário à lista
3. **Receber traduções**: O bot verifica a lista para ver quem precisa de qual idioma
4. **Verificar status**: `/my_language` mostra a escolha do usuário
5. **Parar**: `/stop_translation` remove o usuário

## Exemplo: Dois Amigos Se Inscrevem

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica da Nuvi:</strong> Aqui está como Maria e João usariam o sistema:
{{< /alert >}}

1. **Maria** (fala espanhol) digita: `/register_language` e escolhe "Eu falo espanhol"
   - Agora ela receberá mensagens em inglês traduzidas para espanhol

2. **João** (fala inglês) digita: `/register_language` e escolhe "Eu falo inglês"
   - Agora ele receberá mensagens em espanhol traduzidas para inglês

3. **Maria** verifica: `/my_language`
   - O bot diz: "Seu idioma: Espanhol"
   
4. **João** decide parar: `/stop_translation`
   - O bot diz: "✅ Você não receberá mais traduções."

## Bom Saber

- **Mensagens privadas**: Todas as respostas são privadas (somente o usuário vê)
- **Reinicia quando o bot reinicia**: A lista está apenas na memória, não é salva em um arquivo
- **Fácil de mudar**: Basta executar `/register_language` novamente com uma nova escolha
- **Sem spam**: Apenas pessoas que se inscrevem recebem traduções

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| Configurações desapareceram | O bot provavelmente reiniciou - inscreva-se novamente |
| Quer mudar o idioma | Basta executar `/register_language` novamente |
| Não está recebendo traduções | Verifique com `/my_language` para ver se está inscrito |
| Não consegue receber DMs | Verifique as configurações de privacidade do Discord |

---