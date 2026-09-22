---
title: "Escrevendo um bot simples"
draft: false
weight: 2
---

Nuvi agora possui uma identidade de bot registrada. Próximo passo: fazê-lo realmente responder. Com sua pasta do projeto, ambiente virtual e arquivo inicial prontos, você construirá uma **fundação mínima de bot**. Esta primeira versão é apenas para provar que a conexão está funcionando. Também ativaremos uma permissão (`message_content`) agora, para que páginas futuras possam adicionar tradução automática sem precisar revisitar a configuração.

Nesta parte, você irá:

1. Adicionar `discord.py` ao `requirements.txt` e instalá-lo via interface do VS Code (sem necessidade de digitar no terminal).
1. Escrever um bot básico que responde ao comando de barra `/hello`.
1. Ativar a intenção de conteúdo de mensagem (necessária depois para tradução automática).
1. Executar e testar o bot.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>A Nuvi diz:</strong> Seu primeiro objetivo é apenas ver o bot online — a tradução vem depois. Pequenas conquistas mantêm o embalo!
{{< /alert >}}

---

## 1. Adicionar e Instalar a biblioteca discord.py (usando requirements.txt + interface do VS Code)
Primeiro, declararemos a dependência, depois deixaremos o VS Code instalá-la em seu ambiente virtual.

### 1.a Adicione ao requirements.txt
1. Abra o arquivo `requirements.txt` no seu projeto.
1. Adicione esta linha (o arquivo pode conter apenas isso por enquanto):
```text
discord.py
```
1. Salve o arquivo.

### 1.b Instale via interface de gerenciamento do ambiente
1. Abra a visualização da extensão Python (ícone do Python na Barra de Atividades) e confirme que o ambiente correto (por exemplo, `.venv`) está selecionado.
1. Selecione o ícone "Pacotes" (parece uma caixa), o que mostrará um menu suspenso. Agora selecione "Instalar dependências do projeto".
![Instalar dependências do projeto](../../media/dependencies.png)
1. Marque a caixa de seleção para "requirements.txt" e clique em "Ok".
![Selecionar requirements.txt](../../media/requirements.png)
1. Aguarde até que `discord.py` apareça na lista de pacotes instalados.
![discord.py instalado](../../media/discord-installed.png)

## 2. Escrevendo o Código do Bot
Abra `bot.py` e substitua qualquer código de exemplo pelo seguinte. (Você notará um dicionário `user_languages` já presente — este é um "notebook de espaço reservado" que realmente começaremos a usar quando adicionarmos registro e tradução automática em breve.)
```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

# Aqui é onde lembramos qual idioma cada usuário deseja
# É como um caderno: user_languages[user_id] = "en" ou "es"
user_languages = {}

# Informar ao Discord que nosso bot precisa ler mensagens (não apenas comandos)
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot está online como {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"{len(synced)} comandos sincronizados.")
    except Exception as e:
        print(f"Erro: {e}")

@bot.tree.command(name="hello", description="Diz olá!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Olá {interaction.user.display_name}! Tenha um ótimo dia de programação!")

if not TOKEN:
    raise RuntimeError("Token do bot está ausente. Adicione-o à variável TOKEN perto do início do arquivo.")

bot.run(TOKEN)
```

### O que isso faz:
- Importa a biblioteca Discord para evitar reinventar a roda de networking.
- Configura “intents” e ativa `message_content` antecipadamente (a tradução automática futura precisa ler mensagens).
- Cria e inicia uma conexão do bot.
- Registra um comando de barra `/hello` para provar que a sincronização do comando funciona.
- Usa `user_languages = {}` como um espaço de memória simples que preencheremos mais tarde.
- Responde com uma saudação personalizada quando `/hello` é executado.
- Verificação de segurança: interrompe-se se o token estiver ausente.

<details>
<summary><strong>-> Detalhes avançados (clique para expandir se quiser aprender sobre mais conceitos avançados usados aqui. Totalmente opcional!)</strong></summary>

**async / await**: Estas palavras-chave permitem que o Python execute outras tarefas enquanto espera (por exemplo, pelo Discord responder), para que seu bot não congele.

**Evento (@bot.event)**: Decoradores como `@bot.event` informam à biblioteca “execute esta função quando um evento específico ocorrer” (aqui: quando o bot estiver pronto).

**Comandos de barra (`@bot.tree.command`)**: Esses criam comandos modernos que aparecem quando os usuários digitam `/` no Discord. Eles são registrados nos servidores do Discord e podem levar algum tempo para sincronizar.

**Interação**: Representa um usuário usando um comando de barra. `interaction.user` mostra a pessoa, e `interaction.response.send_message(...)` envia uma resposta.

**Bot vs Cliente**: `commands.Bot` adiciona recursos úteis de comando (como árvores de comando) em cima do cliente de nível inferior do Discord.

**Intents**: Permissões que dizem ao Discord quais dados você deseja (mensagens, membros, etc.). Usar menos mantém seu bot mais simples e seguro.

**Exceções (try / except)**: O bloco `try:` executa o código que pode falhar; `except Exception as e:` captura erros para que seu bot possa registrá-los em vez de travar.

</details>

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Aviso:</strong> Para simplificar mostramos o token diretamente no código. Em projetos reais, armazene segredos em variáveis de ambiente ou um repositório seguro.
{{< /alert >}}

---

## 3. Executar o Bot
1. Abra `bot.py` no editor.
1. Abra a visualização de Execução e Depuração (ícone de “play” com um bug).
1. Se solicitado a selecionar uma configuração, escolha `Arquivo Python`.
1. Clique no botão verde de Executar/Depurar.
1. Observe o Console de Depuração/Terminal para:
```text
Logado como <nome do seu bot>
X comando(s) de aplicação sincronizado(s).
```
![Saída no terminal](../../media/running.png