---
title: "T3: Agendamento e Logística do Evento"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Agendamento
{{< /alert >}}

*[PREREQ, 10 min] Obtenha acesso ao cluster e adicione-o ao ADX*

### Parte 1: Compreendendo o Ambiente [1 hora e meia]

[5 min] Introdução à ameaça Intel
      - Menção breve às ferramentas e técnicas de atribuição
      - Modelo Diamante
      - Cadeia de Matar

[20 min] Linguagem de consulta Kusto (KQL) 101
       - Introduzir tabelas, comandos e sintaxe para KQL no navegador ADX
       - onde (has, contains, has_any, ==, etc…) 
       - count
       - take
       - let

[10 min] Como agrupar atividades adversárias observadas
  - Como você decide se a próxima peça está associada ao seu ator?
  - Mapeamento do conhecimento do ator para o modelo diamante
  - Como você sabe quando terminou?
  - Dicas de clustering (atribuição incorreta)

[45 min] Cenário 1: Introdução à investigação cibernética
  - Investigar atividades maliciosas (ou seja, ameaças de e-mail)
  - Use o Azure Data Explorer (ADX) para análise de dados de log de segurança
  - Aplicar os fundamentos do KQL para responder a perguntas específicas usando dados
  - Dinamizar vários conjuntos de dados

[10 min] Resumo
  - Revise rapidamente como direcionar para as respostas

### Pausa [10 min]
 
### Parte 2: Pegue o Hacker [1 hora e meia incluindo uma atividade bônus]

[5 min] Introdução e visão geral de alto nível do workshop
  - Inteligência de Ameaças (TI); ferramentas e técnicas de caça a ameaças para transmitir antes de voltar ao assunto

[30 min] Cenário 2: pegue o hacker
  - Divulguação do placar e apresentação do cenário
  - Facilitar o tempo de caça livre
  - Monitoração do bate-papo

[10 min] Resumo
  - Selecione algumas perguntas para mostrar o caminho para a solução

*(Escolha uma atividade bônus para terminar a sessão se o tempo permitir)*

{{%showanswer "Opção 1: Atividade Phishy"%}}
**Opção 1**
[5 min] Bônus 1: Atividade Phishy

[30 min] Cenário 3: hackers enviando documentos sobre malware
  - Tempo livre para caçar

[10 min] Análise e encerramento da sessão {{%/showanswer%}}

{{%showanswer "Opção 2: Verdade ou Desinformação"%}}
**Opção 2**
[5 min] Apresente a análise do blog *(para públicos mais avançados)*

[30 min] Cenário 3: Verdade ou desinformação
  - Tempo livre para caçar e analisar o blog

[10 min] Análise e encerramento da sessão
{{%/showanswer%}}

{{%showanswer "Opção 3: Security Jeopardy"%}}
**Opção 3**
[5 min] Apresente o Security Jeopardy
[30 min] Jogar
  - Cabe ao instrutor decidir em que formato fazer isso. Pode pedir aos alunos que joguem com o placar em seus computadores e definir um tempo para ver quem tem a pontuação mais alta no final, este seria um teste de 'internet aberta'. Ou use um gerador de risco para alimentar perguntas para um público mais conhecedor. Lembre-se de que as outras partes deste workshop ainda não ensinam esses termos *(melhor jogar com um público que tenha conhecimento prévio dos termos de segurança cibernética em uma sessão ao vivo )*
.

[10 min] Análise e encerramento da sessão
{{%/showanswer%}}



{{< alert theme="success" >}}
## Logística
{{< /alert >}}

### Lista de controle

**Aqui estão todas as coisas que seus alunos precisarão:**
* Um computador ou notebook (não precisa ser potente)
* Uma conexão de internet razoável
* Uma conta da Microsoft
     * Uma conta pessoal do Hotmail ou do Outlook
     * Uma conta office365 fornecida pela escola
     * *Observação: se a escola ou organização não permitir o acesso aos dados do Azure do locatário da empresa, você precisará de uma solução alternativa, como fornecer uma conta específica do evento para eles usarem*

**Aqui estão algumas coisas que você também pode precisar:**
* Versões impressas do guia de treinamento (descobrimos que
* os participantes tendem a trabalhar melhor com um guia impresso)
* Um projetor ou smartboard para que você possa resolver os problemas em grupo
* Lanches ou guloseimas - todo mundo adora :)

### Configurando o placar

Para acessar o placar KC7, acesse este site: https://kc7.azurewebsites.net.
  Você precisará fazer login usando as credenciais enviadas a você por e-mail após preencher o formulário para hospedar uma sessão. Se não estiver hospedando uma sessão, você pode criar uma conta para fazer login.

Se você estiver gerenciando uma sessão, você já deve estar adicionado à sessão de jogo do seu grupo. Você o verá em seu painel ao fazer login. Para entrar na sessão, basta clicar no botão "entrar neste jogo".

Você também precisará adicionar perguntas ou desafios para os participantes do jogo responderem para marcar pontos. Para fazer isso:

* Certifique-se de estar conectado como administrador da sua sessão
* Encontre a lista de perguntas que correspondem ao guia de treinamento que você está usando
* Selecione o conjunto de perguntas no menu suspenso

### Recursos adicionais

Repositório KC7 Github: https://github.com/kkneomis/kc7
Site KC7: https://kc7cyber.com/#demos

