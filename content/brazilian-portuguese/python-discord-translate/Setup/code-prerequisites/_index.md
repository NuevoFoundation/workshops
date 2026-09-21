---
title: "Pré-requisitos de Código"
draft: false
weight: 2
---

Nuvi ainda não pode convidar um bot tradutor—não há um ambiente de código configurado! Vamos preparar seu computador. Você instalará o Python, configurará um ambiente virtual (uma "bolha" segura para os pacotes do seu projeto), instalará o VS Code (seu editor de código) e criará os arquivos iniciais. Assim que esta base estiver pronta, você começará a escrever o bot que ajudará todos a se entender.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi diz:</strong> Escolha o Python 3.10 para que as partes do tradutor sejam instaladas sem problemas—atualizações futuras serão mais fáceis quando tudo funcionar agora!
{{< /alert >}}

## 1. Instale o Python
Instale o **Python 3.10** (uma versão 3.10.x, como 3.10.14) no site oficial:
- Windows & macOS: https://www.python.org/downloads/
- (Alguns Chromebooks podem precisar do modo Linux; peça ajuda para um adulto ou professor.)

Por que 3.10? Algumas bibliotecas que usaremos para o Discord e a tradução funcionam melhor (ou somente) com o Python 3.10 no momento. Usar uma versão mais nova (como 3.11 ou 3.12) pode causar erros de instalação.

Você deve ver algo como `Python 3.10.x`.

## 2. Instale o VS Code (e as ferramentas Python)

O VS Code é um editor de código gratuito e fácil para iniciantes, onde você escreverá e executará seu bot; ele oferece preenchimento automático inteligente, dicas de erros e uma maneira prática de gerenciar o Python.

{{<button href="https://code.visualstudio.com" theme="info">}}Baixar VS Code{{< /button >}}

Após instalar o VS Code, adicione as ferramentas de Python:
1. Abra o VS Code e vá para a visualização de Extensões (Clique no ícone de extensões na Barra de Atividades no lado ou pressione `Ctrl+Shift+X`).
![Ícone da visualização de extensões](../../media/extensions.png)
1. Procure por `Python` (Editor: Microsoft) e clique em Instalar. Isso instalará algumas ferramentas úteis que usaremos ao longo do workshop. ![Página da extensão Python no VSCode](../../media/python-extension.png)
1. Instale a experiência `Python Environment Manager`, se solicitado – ela está incluída nas versões recentes da extensão Python.
1. Reinicie o VS Code se solicitado.

Agora você deve ver o símbolo da extensão Python na barra lateral.
![Símbolo da extensão Python](../../media/python-symbol.png)

## 3. Crie uma Pasta de Projeto
Escolha um local fácil de encontrar, como seus Documentos ou sua Área de Trabalho.
Exemplo de nome de pasta: `discord-translator-bot`.
Abra a pasta no VS Code (Arquivo → Abrir Pasta).

## 4. Crie um Ambiente Virtual
Um ambiente virtual mantém seu projeto separado de outros projetos e facilita organizar todos os arquivos Python no seu computador. A extensão Python do VS Code pode criá-lo e selecioná-lo por você.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica do Nuvi:</strong> Se a criação do ambiente parecer travada, espere um minuto antes de tentar novamente—o Python está apenas configurando seu laboratório isolado.
{{< /alert >}}

1. Para criar o ambiente, procure o símbolo do Python na barra lateral e clique nele: ![Ícone da extensão Python do VSCode](../../media/sidebar.png)
1. Clique no menu suspenso "venv". Deve aparecer algo como "Nenhum ambiente encontrado, clique para criar". Clique nele.
1. Isso trará um menu suspenso próximo ao topo que diz "Selecionar modo de criação do ambiente". Escolha "Criação Rápida".  
![Menu suspenso para criar ambiente](../../media/create-env.png)
1. Agora você verá uma pequena janela de carregamento indicando que o ambiente virtual está sendo criado. Isso pode levar alguns minutos.  
![Carregando o ambiente virtual](../../media/loading-env.png)
1. Uma vez concluído, se você selecionar novamente o símbolo do Python na barra lateral e clicar no menu suspenso "venv", verá que o ambiente virtual foi criado e selecionado.  
![Ambiente virtual criado e selecionado](../../media/venv-created.png)

## 5. Crie os Arquivos Iniciais
Dentro da pasta do projeto, crie os seguintes arquivos:
```
bot.py
requirements.txt
```

### bot.py
Este será o local onde todo o código do seu bot será adicionado. Por enquanto, adicione apenas este código inicial:
```python
print("Projeto do bot pronto. Adicionaremos o código do Discord em breve!")
```

### requirements.txt 
Este pode permanecer vazio por enquanto. Mais tarde, você adicionará os nomes das bibliotecas Python que seu bot precisa neste arquivo, para que possam ser instaladas facilmente.

## 6. Execute o script do bot
1. Na barra lateral também deve haver um ícone chamado "Executar e Depurar" (um botão de play com um bug). Com bot.py aberto no editor principal, clique no ícone e depois no botão Executar e Depurar no topo da barra lateral.  
![Ícone Executar e Depurar](../../media/run-and-debug.png)

1. No menu suspenso que aparece, selecione "Depurador do Python".  
![Selecionar Depurador do Python](../../media/debugger.png)

1. Em configurações de depuração, selecione "Arquivo Python".  
![Selecionar Arquivo Python](../../media/select-python.png)

1. Clicar novamente em "Executar e Depurar" deve executar o script, e você verá o resultado no terminal na parte inferior!  
![Resultado no terminal](../../media/terminal.png)

---