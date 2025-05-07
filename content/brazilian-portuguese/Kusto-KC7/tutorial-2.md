---
title: "Tutorial 2: Orientação para novos funcionários"
draft: false
weight: 10
---
{{%showanswer "AVISO LEGAL: Todos os domínios, dados e nomes usados neste documento, site ou qualquer outro material são fictícios ... (cont.)"%}}
*AVISO LEGAL: Todos os domínios, dados e nomes utilizados neste documento, site ou qualquer outro material são fictícios e foram criados exclusivamente para fins ilustrativos e educacionais. Eles não representam indivíduos, empresas ou organizações reais.*

*Este documento, site ou qualquer outro material, incluindo, entre outros, textos, imagens, gráficos, logotipos e software, são fornecidos "como estão", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando, ao implícito garantias de comercialização e adequação a uma finalidade específica.*

*Em nenhum caso os criadores ou proprietários deste documento, site ou qualquer outro material serão responsáveis por quaisquer danos, incluindo, mas não se limitando a, danos diretos, indiretos, especiais, incidentais ou consequenciais, decorrentes de ou em conexão com o uso ou incapacidade de usar este documento, site ou qualquer outro material, mesmo se avisado da possibilidade de tais danos.*

*Os criadores ou proprietários deste documento, site ou qualquer outro material reservam-se o direito de fazer alterações no conteúdo a qualquer momento e sem aviso prévio.*

*Ao acessar ou usar este documento, site ou qualquer outro material, você concorda em obedecer aos termos e condições estabelecidos neste aviso legal. Se você não concordar com estes termos e condições, não deverá acessar ou usar este documento, site ou qualquer outro material.*
{{%/showanswer%}}

## Introdução: Bem-vindo ao EnvolveLabs

Bem-vindo à EnvolveLabs Corporation! 🥳 Hoje é seu primeiro dia como Analista Júnior de Centro de Operações de Segurança (SOC) em nossa empresa. Sua principal responsabilidade profissional é defender a EnvolveLabs e seus funcionários de ciberatores mal-intencionados.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs é uma startup de tecnologia médica com sede nos Estados Unidos e foi fundada em 2012. Nossa missão é desenvolver um novo tipo de tecnologia de vacina flexível que cubra muitas cepas virais diferentes e ofereça imunidade duradoura. O que eliminaria a necessidade de tomar doses de reforço em intervalos regulares e tornaria as vacinações mais acessíveis. Nossa pesquisa inicial provou que esta tecnologia é altamente eficaz – planejamos iniciar a produção no primeiro trimestre de 2024.

A EnvolveLabs conta com uma série de parceiros chave que contribuem para o sucesso do nosso negócio. Como tal, esperamos que os nossos funcionários tenham comunicação regular com estes parceiros principais:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

Até agora, estivemos focados na pesquisa médica e no cumprimento das metas de produção. Mas, à medida que o nosso trabalho se torna mais importante e bem-sucedido, percebemos a necessidade de investir mais em esforços de segurança cibernética. É por isso que contratamos você!

Como todas as boas empresas, a EnvolveLabs coleta dados de registro sobre as atividades que seus funcionários realizam na rede corporativa. Esses logs de auditoria de segurança são armazenados no Azure Data Explorer (ADX) – um serviço de armazenamento de dados no Azure (nuvem da Microsoft). Você usará a Kusto Query Language (KQL) para analisar vários tipos de logs de segurança. Ao analisar esses registros, você pode nos ajudar a determinar se estamos sendo alvo de agentes mal-intencionados.
  - Você pode encontrar a documentação completa sobre consultas KQL para ADX aqui:    
 https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### Banco de dados EnvolveLabs

O banco de dados EnvolveLabs_Analysis contém oito tabelas. As tabelas contêm muitas linhas de dados semelhantes. Para logs de segurança, uma única linha normalmente representa uma única ação feita por um funcionário ou dispositivo na rede em um determinado momento.

Atualmente temos oito tipos de dados de log. Como você verá no ADX, cada tipo de log corresponde a uma tabela que existe no banco de dados EnvolveLabs_Analysis:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">



{{< notice note >}}
🎯**Ponto-chave – Dados Over the Horizon (OTH):** Uma das tabelas listadas acima não é como as outras – **PassiveDns**. Em vez de ser um registro de segurança interno, **PassiveDns** é uma fonte de dados que compramos de um fornecedor terceirizado. Nem todas as atividades cibernéticas maliciosas acontecem na rede da nossa empresa, por isso, às vezes, dependemos de dados de outras fontes para concluir nossas investigações. {{< /notice >}}

Você aprenderá mais sobre como usar cada um desses conjuntos de dados em apenas um minuto. Primeiro, vamos executar algumas consultas para que você possa praticar o uso de KQL e ADX.