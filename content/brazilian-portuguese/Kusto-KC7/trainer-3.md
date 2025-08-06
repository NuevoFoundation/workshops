---
title: "T3: Agenda do Evento & Logística"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Agenda
{{< /alert >}}

*[PRÉ-REQUISITO, 10 min] Obter acesso ao cluster e adicioná-lo ao ADX*

### Parte 1: Entendendo o Ambiente [1,5 hrs]

[5 min] Introdução à Inteligência contra Ameaças  
     - Mencionar brevemente ferramentas e técnicas de atribuição  
     - Modelo do Diamante  
     - Kill Chain  

[20 min] Kusto Query Language (KQL) 101  
     - Apresentar tabelas, comandos e sintaxe do KQL no navegador do ADX  
      - where (has, contains, has_any, ==, etc…)  
      - count  
      - take  
      - let  

[10 min] Como Agrupar Atividade Observada de Adversários  
 - Como decidir se a próxima evidência está associada ao seu ator?  
 - Mapeando o conhecimento do ator para o Modelo do Diamante  
 - Como saber quando terminou?  
 - Pegadinhas do agrupamento (atribuição incorreta)  

[45 min] Cenário 1: Introdução à Investigação Cibernética  
 - Investigando atividade maliciosa (ex.: ameaça por e-mail)  
 - Usar Azure Data Explorer (ADX) para análise de logs de segurança  
 - Aplicar fundamentos de KQL para responder perguntas específicas usando dados  
 - Fazer pivot entre múltiplos conjuntos de dados  

[10 min] Debrief  
 - Revisar rapidamente como fazer pivot até chegar às respostas

### Intervalo [10 min]
 
### Parte 2: Pegue o Hacker [1,5 hrs incluindo uma Atividade Bônus]

[5 min] Introdução e Visão Geral do Workshop  
 - Ferramentas e técnicas adicionais de *Threat Intelligence* para caça a ameaças antes de mergulhar no próximo módulo

[30 min] Cenário 2: Pegue o Hacker  
 - Liberar o Scoreboard e apresentar o cenário  
 - Facilitar o tempo livre de caça  
 - Monitorar o chat  

[10 min] Debrief  
 - Selecionar algumas questões para mostrar o caminho da solução

*(Escolha uma atividade bônus para encerrar a sessão, se houver tempo)*    

{{%showanswer "Opção 1: Atividade Phishy"%}}	
**Opção 1**  
[5 min] Bônus 1: Atividade Phishy  

[30 min] Cenário 3: Hackers Enviando Documentos com Malware  
 - Tempo livre para caçar  

[10 min] Debrief & Encerramento da Sessão  
{{%/showanswer%}}

{{%showanswer "Opção 2: Verdade ou Desinformação"%}}	
**Opção 2**  
[5 min] Introduzir Análise de Blog *(para públicos mais avançados)*  

[30 min] Cenário 3: Verdade ou Desinformação  
 - Tempo livre para caçar e analisar o blog  

[10 min] Debrief & Encerramento da Sessão  
{{%/showanswer%}}

{{%showanswer "Opção 3: Security Jeopardy"%}}	
**Opção 3**  
[5 min] Introduzir Security Jeopardy  
[30 min] Jogar  
 - A critério do instrutor quanto ao formato. Pode-se pedir que os alunos joguem no Scoreboard em seus computadores e definir um cronômetro para ver quem tem mais pontos no final (quiz “internet aberta”).  
   Ou usar um gerador de Jeopardy para inserir perguntas para um público mais experiente; lembre-se que as outras partes do workshop não ensinam esses termos, portanto é melhor jogar com um público que já tenha conhecimento prévio de termos de cibersegurança em uma sessão ao vivo.  

[10 min] Debrief & Encerramento da Sessão  
{{%/showanswer%}}

{{< alert theme="success" >}}
## Logística
{{< /alert >}}

### Checklist

**O que seus alunos precisarão:**  
* Um computador ou laptop (não precisa ser muito potente)  
* Uma conexão de internet decente  
* Uma Conta Microsoft  
    * Pode ser uma conta pessoal Hotmail ou Outlook  
    * Uma conta Office 365 fornecida pela escola  
    * *Observação: Se a escola ou organização não permitir acesso ao Azure Data a partir do locatário corporativo, será necessário um plano alternativo, como fornecer uma conta específica para o evento*  

**O que também pode ser necessário:**  
* Versões impressas do guia de treinamento (percebemos que  
* os participantes costumam trabalhar melhor com uma cópia física)  
* Um projetor ou quadro inteligente para resolver problemas em grupo  
* Lanches ou guloseimas — todo mundo adora :)  

### Configurando o Scoreboard

Para acessar o **KC7 Scoreboard**, acesse: https://kc7.azurewebsites.net  
Você precisará fazer login com as credenciais enviadas por e-mail após preencher o formulário para hospedar uma sessão.  
Se você não estiver hospedando uma sessão, pode criar uma conta para acessar.

Se estiver gerenciando uma sessão, você já deve estar adicionado à sessão do jogo do seu grupo. Isso aparecerá no seu painel ao fazer login. Para entrar na sessão, basta clicar no botão **"join this game"**.

Você também precisará adicionar perguntas ou desafios para os participantes responderem e pontuarem. Para isso:  

* Certifique-se de estar logado como administrador da sessão  
* Encontre a lista de perguntas que correspondem ao guia de treinamento que você está usando  
* Selecione o conjunto de perguntas no menu suspenso

### Recursos Adicionais

KC7 Github Repo: https://github.com/kkneomis/kc7  
KC7 Website: https://kc7cyber.com/#demos  
