---
title: "Atividade 4: Pegue o Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Atividade 4: Pegue o Hacker - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}Esta é uma seção bem mais curta — vamos apenas explicar o cenário e deixar você livre para caçar hackers. Você pode gastar o tempo que quiser nesta parte, mas em sessões ao vivo geralmente damos aos participantes de 30 a 40 minutos antes de seguir em frente.

- **Certifique-se de usar o banco de dados SecurityLogs**
- **Envie suas respostas para o desafio "Apresentando os Hackers" no Scoreboard**

#### **Boa caçada!**{{< /notice >}}

### Apresentando os Hackers

Agora que você concluiu sua primeira rodada de treinamento, está pronto para trabalhar no seu primeiro caso no SOC!

Um pesquisador de segurança publicou no Twitter que o domínio *“immune[.]tech”* estava sendo usado por hackers. Ao que tudo indica, os hackers estão enviando e-mails de phishing para roubo de credenciais (logins, senhas etc.) a partir desse domínio.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt="CTF1" width="value" height="value">

{{< alert theme="warning" >}}
⚠️ NOTA! É um protocolo de segurança comum usar o formato immune[.]tech ou domain[.]com ao mencionar links possivelmente maliciosos online. Colocar colchetes ao redor do ponto evita a criação de um link clicável. Ao pesquisar nos logs, lembre-se de remover os colchetes do nome de domínio.
{{< /alert >}}

De acordo com pesquisas de OSINT realizadas por seus colegas, este domínio pode fazer parte de uma campanha de phishing com as seguintes etapas:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt="CTF2" width="value" height="value">

{{< notice note >}}🎯 **Ponto-chave – Inteligência de Código Aberto (OSINT)**: Pesquisadores e analistas de segurança frequentemente usam dados gratuitos e publicamente disponíveis, como o Twitter! Chamamos esses dados públicos de OSINT, e eles podem ser uma ótima forma de obter pistas investigativas. Como todas as fontes públicas na internet, qualquer dica de OSINT deve ser verificada com uma análise rigorosa, e não aceita cegamente.
{{< /notice >}}

{{< alert theme="success" >}}
🤔 **Considere as seguintes perguntas relacionadas a essa dica para ajudar a guiar sua investigação. Algumas pistas estão incluídas:**

{{%showanswer "Pergunta 1"%}}
*Quais usuários da nossa organização receberam e-mails contendo o domínio immune.tech?*

🤫 **Dica**: Tente o seguinte comando e insira o nome de domínio em questão.
```
Email
| where link contains '[insira o nome do domínio]'
``` 
{{%/showanswer%}}

{{%showanswer "Pergunta 2"%}}	
*Bloqueamos algum dos e-mails contendo esse domínio? Quem realmente recebeu um desses e-mails?*     

🤫 **Dica**: O campo “accepted” na tabela Email informa se o e-mail foi bloqueado ou não. E-mails bloqueados aparecerão como **false**.
{{%/showanswer%}}

{{%showanswer "Pergunta 3"%}}	
*Quais outros domínios compartilharam os mesmos IPs que immune.tech? Você consegue encontrar a lista completa de domínios associados a este ator com base nos dados de PassiveDns?* 

🤫 **Dica**: Você pode usar o operador **in** para verificar vários valores em um campo. Exemplo: `where field in ("x", "y", "z")`
{{%/showanswer%}}

{{%showanswer "Pergunta 4"%}}
*Quais endereços de e-mail os hackers usaram para enviar esses domínios?* 

🤫 **Dica**: Veja quem está listado na coluna "sender" para os e-mails que você já sabe conter assuntos e links suspeitos.
{{%/showanswer%}}

{{%showanswer "Pergunta 5"%}}
*Algum usuário clicou em algum dos links nos e-mails de phishing?* 

🤫 **Dica**: Verifique os logs de arquivos, eventos de processos e/ou histórico de navegação dos dispositivos e contas associadas aos usuários que receberam o e-mail malicioso para ver se há indícios de atividade estranha que indiquem que o link foi clicado.
{{%/showanswer%}}

{{%showanswer "Pergunta 6"%}}
*Algum usuário teve suas credenciais roubadas? Como você sabe?* 

🤫 **Dica**: Para que as credenciais sejam roubadas, o usuário precisaria acessar o site de coleta de credenciais e inserir seu nome de usuário e senha. Depois disso, o invasor pode tentar fazer login na conta usando as credenciais roubadas. Você pode encontrar detalhes sobre atividades de login na tabela **AuthenticationEvents**.
{{%/showanswer%}}

{{%showanswer "Pergunta 7"%}}
*Algum usuário teve conteúdo exfiltrado (roubado) da sua caixa de e-mails? Como você sabe? Qual é o risco para a empresa se esse conteúdo for roubado?*
{{%/showanswer%}}

{{< /alert >}}
