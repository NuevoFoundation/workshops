---
title: "Bônus 1: Atividade de Phishing"
draft: false
weight: 20
---

## Hackers Enviando Documentos com Malware

Depois de investigar um pouco sobre a atividade de phishing, você encontra outro tweet de um fornecedor de inteligência contra ameaças, o **SolitaryStrike**:

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt="Bonus1" width="value" height="value">

{{< notice note >}}
🤔 Use o tweet para começar sua caçada. Deixe as perguntas ajudarem você a fazer pivot nos dados e descobrir o que está acontecendo.  
- Envie suas respostas para o desafio **"Hackers Sending Malware Docs"** no Scoreboard em https://kc7cyber.azurewebsites.net/ para receber feedback e ganhar pontos. As perguntas abaixo também estão refletidas no Scoreboard desta seção. **Não existe um gabarito oficial para esta seção além do próprio Scoreboard.**  
- **Certifique-se de usar o banco de dados SecurityLogs para este exercício.**
{{< /notice >}}

{{< alert theme="success" >}}
🤔 **Considere as seguintes perguntas relacionadas a esta dica para guiar sua investigação. Algumas pistas estão incluídas abaixo:**  

{{%showanswer "Pergunta 1"%}}  
*Quantos e-mails continham o domínio notice[.]io?*  

🤫 **Dica:** Em qual tabela do banco de dados SecurityLogs pode haver uma coluna com evidências desse domínio/site suspeito?  
{{%/showanswer%}}

{{%showanswer "Pergunta 2"%}}  
*Qual endereço de e-mail enviou o domínio notice[.]io*  
{{%/showanswer%}}

{{%showanswer "Pergunta 3"%}}  
*Qual era a linha de assunto dos e-mails que continham o domínio notice[.]io?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 4"%}}  
*Qual é o nome do usuário que clicou no link notice[.]io?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 5"%}}  
*Em qual horário o usuário acima fez o download do arquivo: "Critical_Security_Path.docx"?*  

🤫 **Dica:** Arquivos criados nos dispositivos dos funcionários são capturados no log **FileCreationEvents**. Tente procurar lá para ver quais funcionários baixaram esse arquivo.  
{{%/showanswer%}}

{{%showanswer "Pergunta 6"%}}  
*Quantos e-mails foram enviados para sua organização no dia 9 de janeiro por usuários do domínio wesellbeakers.com?*  

🤫 **Dica:** Se você não lembra o formato de data/hora para os logs de Email, execute outro comando `take 10` e observe. Isso vai ajudar a escrever a consulta para esta pergunta.  
{{%/showanswer%}}

{{%showanswer "Pergunta 7"%}}  
*Quais outros domínios estão hospedados nos mesmos IPs que notice[.]io?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 8"%}}  
*Qual endereço de e-mail foi visto enviando e-mails contendo um dos domínios identificados na pergunta 7?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 9"%}}  
*Quantos usuários baixaram os arquivos observados nos e-mails da pergunta 8?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 10"%}}  
*Um dos arquivos observados na pergunta 9 — **IMPORTANT_INSTRUCTIONS.pptx** — foi visto em dois e-mails diferentes. Quais eram as linhas de assunto desses e-mails?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 11"%}}  
*Qual endereço de e-mail comprometido do domínio pharmasupplies.org foi usado para enviar um link para scanverify.com?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 12"%}}  
*Quantos IPs o domínio scanverify.com já resolveu?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 13"%}}  
*Considerando o endereço de e-mail encontrado na pergunta 11, para qual outro domínio esse endereço enviou mensagens?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 14"%}}  
*Qual é o nome do arquivo hospedado em scanverify.com?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 15"%}}  
*Qual arquivo .pptx foi usado para atacar Gerald Kempinski e Kenny Salcido?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 16"%}}  
*Qual IP do ator foi usado para pesquisar no site da EnvolveLabs o termo "helpdesk ticket system"?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 17"%}}  
*Quantos e-mails no total foram enviados para sua organização por esse ator?*  
{{%/showanswer%}}

{{%showanswer "Pergunta 18"%}}  
*Qual arquivo .dll foi colocado em uma máquina vítima logo após o usuário baixar o arquivo zip malicioso: **EnvolveLabs_Research_Tool.7z***  

🤫 **Dica:** Arquivos criados nos dispositivos dos funcionários são capturados no log **FileCreationEvents**. Tente procurar lá para ver quais funcionários baixaram esse arquivo.  
{{%/showanswer%}}

{{%showanswer "Pergunta 19"%}}  
*Qual comando de reconhecimento com seis letras foi executado na máquina do usuário que carregou o *implant* acima?*  

🤫 **Dica:** Tente focar em um dispositivo específico que baixou o arquivo EnvolveLabs_Research_Tool.7z. Depois, olhe nos logs **FileCreationEvents** e **ProcessEvents** para encontrar novos arquivos e processos criados na mesma época em que o arquivo foi baixado.  
{{%/showanswer%}}

{{%showanswer "Pergunta 20"%}}  
*Um arquivo malicioso 'infector.exe' foi observado realizando ações suspeitas em vários dispositivos. Qual `process_commandline` associado a esse arquivo está sendo usado para persistência nos dispositivos?*  

🤫 **Dica:** Atores estabelecem persistência para poder voltar mais tarde e executar tarefas manuais (*hands-on-keyboard*) na rede da empresa. Tente procurar por sistemas criando conexões para domínios e IPs externos, ou comportamentos incomuns como criação de tarefas agendadas.  
{{%/showanswer%}}
{{< /alert >}}
