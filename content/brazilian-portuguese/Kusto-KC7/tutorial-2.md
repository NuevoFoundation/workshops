---
title: "Tutorial 2: Integração de Novo Funcionário"
draft: false
weight: 10
---
{{%showanswer "AVISO: Todos os domínios, dados e nomes usados neste documento, site ou quaisquer outros materiais são fictícios ... (cont.)"%}}
*AVISO: Todos os domínios, dados e nomes usados neste documento, site ou quaisquer outros materiais são fictícios e foram criados exclusivamente para fins ilustrativos e educacionais. Eles não representam indivíduos, empresas ou organizações reais.*

*Este documento, site ou quaisquer outros materiais, incluindo, mas não se limitando a textos, imagens, gráficos, logotipos e softwares, são fornecidos "como estão", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando às garantias implícitas de comercialização e adequação para um propósito específico.*

*Em nenhuma circunstância os criadores ou proprietários deste documento, site ou quaisquer outros materiais serão responsáveis por quaisquer danos, incluindo, mas não se limitando a danos diretos, indiretos, especiais, incidentais ou consequenciais, decorrentes do uso ou da incapacidade de usar este documento, site ou quaisquer outros materiais, mesmo que tenham sido avisados sobre a possibilidade de tais danos.*

*Os criadores ou proprietários deste documento, site ou quaisquer outros materiais reservam-se o direito de fazer alterações no conteúdo a qualquer momento e sem aviso prévio.*

*Ao acessar ou usar este documento, site ou quaisquer outros materiais, você concorda em estar vinculado aos termos e condições estabelecidos neste aviso. Se você não concorda com estes termos e condições, não deve acessar ou usar este documento, site ou quaisquer outros materiais.*
{{%/showanswer%}}

## Introdução: Bem-vindo à EnvolveLabs

Bem-vindo à EnvolveLabs Corporation! 🥳  
Hoje é o seu primeiro dia como Analista Júnior no Centro de Operações de Segurança (SOC) da nossa empresa.  
Sua principal responsabilidade é defender a EnvolveLabs e seus funcionários contra atores maliciosos no ciberespaço.  

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt="" width="50%" height="value">

A EnvolveLabs é uma *startup* da área de tecnologia médica sediada nos Estados Unidos, fundada em 2012.  
Nossa missão é desenvolver um novo tipo de tecnologia de vacina flexível, que cubra muitas cepas virais diferentes e ofereça imunidade duradoura. Isso eliminaria a necessidade de reforços periódicos e tornaria as vacinas mais acessíveis.  
Nossa pesquisa inicial mostrou que essa tecnologia é altamente eficaz – planejamos iniciar a produção no 1º trimestre de 2024.  

A EnvolveLabs tem uma série de parceiros-chave que contribuem para o sucesso do nosso negócio. Por isso, esperamos que nossos funcionários mantenham comunicação regular com esses parceiros:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt="" width="60%" height="value">

Até agora, estávamos totalmente focados em pesquisa médica e em cumprir metas de produção.  
Mas, à medida que nosso trabalho se torna mais importante e bem-sucedido, percebemos a necessidade de investir mais em esforços de cibersegurança.  
É por isso que contratamos você!  

Como todas as boas empresas, a EnvolveLabs coleta dados de logs sobre as atividades que seus funcionários realizam na rede corporativa.  
Esses registros de auditoria de segurança são armazenados no **Azure Data Explorer (ADX)** — um serviço de armazenamento de dados na nuvem da Microsoft.  
Você usará a **Kusto Query Language (KQL)** para analisar diferentes tipos de logs de segurança.  
Ao analisar esses registros, você nos ajudará a determinar se estamos sendo alvo de atores maliciosos.  

- Você pode encontrar a documentação completa sobre consultas KQL para ADX aqui:  
  https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer

### Banco de Dados EnvolveLabs

O banco de dados **EnvolveLabs_Analysis** contém oito tabelas.  
As tabelas armazenam várias linhas de dados semelhantes.  
Para logs de segurança, cada linha normalmente representa uma única ação executada por um funcionário ou dispositivo na rede, em um momento específico.

Atualmente, temos oito tipos de dados de log.  
Como você verá no ADX, cada tipo de log corresponde a uma tabela no banco de dados **EnvolveLabs_Analysis**:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt="" width="70%" height="value">

{{< notice note >}}
🎯 **Ponto-chave – Dados “Over the Horizon” (OTH):** Uma das tabelas listadas acima é diferente das outras – **PassiveDns**.  
Em vez de ser um log interno de segurança, **PassiveDns** é uma fonte de dados que compramos de um fornecedor externo.  
Nem toda atividade cibernética maliciosa acontece dentro da rede da empresa, por isso, às vezes, dependemos de dados externos para concluir nossas investigações.
{{< /notice >}}

Você aprenderá mais sobre como usar cada um desses conjuntos de dados em breve.  
Primeiro, vamos executar algumas consultas para que você possa praticar usando KQL e ADX.
