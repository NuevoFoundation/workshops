---
title: "Bônus 1: Atividade Phishy"
draft: false
weight: 20
---


## Hackers enviando malware

Depois de pesquisar um pouco sobre a atividade de phishing, você se depara com outro tweet de um fornecedor de inteligência de ameaças SolitaryStrike:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">


{{< notice note >}}
🤔 Use o tweet para começar sua busca. Deixe que as perguntas o ajudem a analisar os dados para descobrir o que está acontecendo.
- Envie suas respostas ao desafio "Hackers Sending0 Malware Docs" no Placar em https://kc7cyber.azurewebsites.net/ para obter feedback e ganhar pontos. As perguntas abaixo estão refletidas no Placar desta seção. **Não existe uma resposta mestra para esta seção além do Placar.**
- **Certifique-se de usar o banco de dados SecurityLogs para este exercício.**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considere as seguintes questões relacionadas a esta dica para ajudá-lo a pensar durante a caçada. Algumas dicas estão incluídas nas perguntas abaixo:**

{{%showanswer "Pergunta 1"%}}	
*Quantos e-mails continham o domínio notice[.]io?*

🤫**Dica:** Em qual tabela do banco de dados SecurityLogs uma coluna pode conter evidências desse site/nome de domínio suspeito? {{%/showanswer%}}

{{%showanswer "Pergunta 2"%}}	
*Qual endereço de e-mail enviou o domínio notice[.]io* {{%/showanswer%}}

{{%showanswer "Pergunta 3"%}}	
*Qual era o assunto dos e-mails contendo o domínio notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pergunta 4"%}}	
*Qual é o nome do usuário que clicou no link notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pergunta 5"%}}	
*Em que data e hora o usuário acima baixou o arquivo: "Critical_Security_Path.docx"?*    

🤫**Dica:** Os arquivos criados nos dispositivos dos funcionários são capturados no log FileCreationEvents. Tente olhar lá para ver quais funcionários baixaram este arquivo. {{%/showanswer%}}

{{%showanswer "Pergunta 6"%}}	
*Quantos e-mails foram enviados para sua organização em 9 de janeiro por usuários do wesellbeakers.com?* 

🤫**Dica:** Se você não se lembra do formato de data/hora dos registros de e-mail, faça outra consulta 'take 10' e observe. Irá ajudá-lo a escrever sua consulta para esta pergunta. {{%/showanswer%}}

{{%showanswer "Pergunta 7"%}}	
*Quais outros domínios estão hospedados nos mesmos IPs que notice[.]io?* {{%/showanswer%}}

{{%showanswer "Pergunta 8"%}}	
*Pergunta 8.	Qual endereço de email é visto enviando emails contendo um dos domínios identificados na Pergunta 7?* {{%/showanswer%}}

{{%showanswer "Pergunta 9"%}}	
*Pergunta 9.	Quantos usuários baixaram os arquivos observados nos e-mails da Pergunta 8?* {{%/showanswer%}}

{{%showanswer "Pergunta 10"%}}	
*Pergunta 10.	Um dos arquivos observados na Pergunta 9 - **IMPORTANT_INSTRUCTIONS.pptx** - foi visto em dois emails separados. Quais são os assuntos desses e-mails?* {{%/showanswer%}}

{{%showanswer "Pergunta 11"%}}	
*Pergunta 11.	Qual endereço de e-mail comprometido de pharmasupplies.org foi usado para enviar um link para scanverify.com?* {{%/showanswer%}}

{{%showanswer "Pergunta 12"%}}	
*Pergunta 12.	Com quantos IPs o scanverify.com se envolveu?* {{%/showanswer%}}

{{%showanswer "Pergunta 13"%}}	
*Pergunta 13.	Considere o endereço de e-mail que você encontrou na Pergunta 11. Que outro domínio esse endereço de e-mail enviou?* {{%/showanswer%}}

{{%showanswer "Pergunta 14"%}}	
*Pergunta 14.	Qual é o nome do arquivo hospedado em scanverify.com?* {{%/showanswer%}}

{{%showanswer "Pergunta 15"%}}	
*Pergunta 15.	Qual arquivo .pptx foi usado para atingir Gerald Kempinski e Kenny Salcido?* {{%/showanswer%}}

{{%showanswer "Pergunta 16"%}}	
*Pergunta 16.	Qual IP do ator foi usado para pesquisar no site da EnvolveLabs o termo “helpdesk ticket system”?* {{%/showanswer%}}

{{%showanswer "Pergunta 17"%}}	
*Pergunta 17.	Quantos e-mails no total foram enviados para sua organização por este ator?* {{%/showanswer%}}

{{%showanswer "Pergunta 18"%}}	
*Pergunta 18.	Qual arquivo .dll foi colocado na máquina da vítima logo depois que o usuário baixou o zip malicioso : **EnvolveLabs_Research_Tool.7z***

🤫**Dica:** Os arquivos criados nos dispositivos dos funcionários são capturados no log FileCreationEvents. Tente procurar lá para ver quais funcionários baixaram este arquivo. {{%/showanswer%}}

{{%showanswer "Pergunta 19"%}}	
*Pergunta 19.	Qual comando de reconhecimento de seis letras foi executado na Máquina do usuário que carregou o implante acima?*

🤫**Dica:** Tente restringir um dispositivo específico que baixou o arquivo EnvolveLabs_Research_Tool.7z. Em seguida, procure nos logs FileCreationEvents e ProcessEvents para encontrar novos arquivos e processos criados na época em que o arquivo foi baixado.{{%/showanswer%}}

{{%showanswer "Pergunta 20"%}}	
*Pergunta 20.	Um arquivo malicioso 'infector.exe' é observado realizando ações suspeitas em vários dispositivos. Qual process_commandline associado a este arquivo está sendo usado para persistência nos dispositivos?*

🤫**Dica:** Os atores estabelecem persistência para que possam voltar mais tarde e realizar tarefas manuais (chamadas de atividades hands-on-keyboard) dentro da rede da sua empresa. Tente procurar sistemas que criem conexões com domínios e IPs externos ou comportamentos incomuns, como criação de tarefas agendadas. {{%/showanswer%}}
{{< /alert >}}