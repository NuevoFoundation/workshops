---
title: "Atividade 4: Pegue o Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}Esta é uma seção muito mais curta, vamos apenas explicar o cenário e deixar você aproveitar o tempo de caça grátis. Você pode dedicar o tempo que desejar nesta parte, mas para sessões ao vivo geralmente damos aos participantes 30 a 40 minutos antes de prosseguir.

- **Certifique-se de usar o banco de dados SecurityLogs**
- **Envie suas respostas ao desafio "Apresentando os Hackers" no Placar**

#### **Boa Caçada!**{{< /notice >}}

### Apresentando os hackers


Agora que concluiu sua rodada inicial de treinamento, você está pronto para trabalhar seu primeiro caso no SOC!

Um pesquisador de segurança tuitou que o domínio *“immune[.]tech”* estava sendo usado por hackers. Aparentemente, os hackers estão enviando e-mails de phishing com credenciais (logins, senhas, etc.) de dentro deste domínio.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️OBSERVAÇÃO! É um protocolo de segurança comumente usado usar o formato immune[.]tech ou domínio[.]com ao mencionar links potencialmente maliciosos online. Adicionar esses colchetes ao redor do ponto evita a criação de um link clicável. Ao pesquisar logs, remova os colchetes do nome de domínio. {{< /alert >}}

De acordo com a pesquisa OSINT realizada por seus colegas, este domínio pode ser usado como parte de uma campanha de phishing com as seguintes etapas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**Ponto-chave – Inteligência de código aberto (OSINT)**: Pesquisadores e analistas de segurança costumam usar dados gratuitos e disponíveis publicamente, como o Twitter! Chamamos esses dados públicos de OSINT e podem ser uma ótima maneira de obter pistas investigativas. Como todas as fontes de dados públicas na Internet, você deve seguir qualquer dica OSINT com uma análise rigorosa, em vez de confiar cegamente na fonte.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Considere as seguintes questões relacionadas a esta dica para ajudá-lo a pensar durante a caçada. Algumas dicas estão incluídas nas perguntas abaixo:**

{{%showanswer "Pergunta 1"%}}
*Para quais usuários da nossa organização foram enviados e-mails contendo o domínio imune.tech?*

🤫 **Dica**: Tente o seguinte comando e insira o nome do domínio na Pergunta.
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "Pergunta 2"%}}	
*Bloqueamos algum dos e-mails contendo esse domínio? Quem realmente recebeu um desses e-mails?*

🤫 **Dica**: O campo “aceito” na tabela Email informa se o email foi bloqueado ou não. E-mails bloqueados serão exibidos como falsos. * {{%/showanswer%}}

{{%showanswer "Pergunta 3"%}}	
*Quais outros domínios compartilhavam os mesmos IPs que immune.tech? Você consegue encontrar a lista completa de domínios associados a este ator com base nos dados do PassiveDns?

🤫 **Dica**: você pode usar o operador in para verificar vários valores em um campo. Por exemplo. onde campo em (“x”, “y”, “z”)* {{%/showanswer%}}

{{%showanswer "Pergunta 4"%}}
*Quais endereços de e-mail os hackers usaram para enviar esses domínios?*

🤫 **Dica**: dê uma olhada em quem está listado na coluna "remetente" dos e-mails que você sabe que contêm assuntos e links suspeitos. {{%/showanswer%}}

{{%showanswer "Pergunta 5"%}}
*Os usuários clicaram em algum dos links dos e-mails de phishing?*

🤫 **Dica**: verifique os registros de arquivos, eventos de processo e/ou histórico de navegação dos dispositivos e contas associados aos usuários que você sabe que receberam o e-mail malicioso para ver se há evidências de atividades estranhas indicando que eles clicaram no link. {{%/showanswer%}}

{{%showanswer "Pergunta 6"%}}
*Algum usuário teve suas credenciais roubadas? Como você sabe?*

🤫 **Dica**: para ter suas credenciais roubadas, o usuário precisaria navegar até o site de coleta de credenciais e inserir seu nome de usuário e senha. Depois disso, o ator pode tentar fazer login na conta do usuário usando as credenciais roubadas. Você pode encontrar detalhes sobre a atividade de login na tabela **AuthenticationEvents**. {{%/showanswer%}}

{{%showanswer "Pergunta 7"%}}
*Pergunta 7.	Algum usuário teve conteúdo exfiltrado (roubado) de sua caixa de correio? Como você sabe? Que risco representa para a empresa o roubo deste conteúdo?* {{%/showanswer%}}
{{< /alert >}}


