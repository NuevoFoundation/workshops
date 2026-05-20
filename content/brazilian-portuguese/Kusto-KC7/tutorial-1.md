---
title: "Tutorial 1: Introdução à Inteligência contra Ameaças"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} Conforme você avança neste workshop, vai perceber que cada página com vídeo repete a lição tanto em vídeo quanto em texto. Você pode seguir um ou outro, dependendo do seu estilo de aprendizado. {{< /notice >}}

## O que é Inteligência contra Ameaças?

**Analistas de Inteligência contra Ameaças**:

{{<icon name="user" size="large">}} Aprendem sobre os adversários ... e compartilham conhecimento com parceiros do setor público e privado  

{{<icon name="time" size="large">}} Monitoram os adversários ao longo do tempo ... para entender a evolução do cenário de ameaças  

{{<icon name="lock" size="large">}} Implementam defesas ... e trabalham com equipes de desenvolvimento de produtos para proteger os clientes  

Somente dados não significam inteligência. Logs de segurança, por si só, não dizem nada de impactante até serem processados.  
Quando um analista de inteligência contra ameaças processa os dados e informações, considerando o contexto dos adversários que acompanha e as mudanças no cenário de ameaças, ele pode começar a criar uma narrativa e uma linha do tempo do que pode ter acontecido.  
Entender o que essas ameaças significam, por que ocorreram e como afetaram sua empresa... isso é verdadeira inteligência contra ameaças.

## O que é o *Cyber Kill Chain*?

O *Cyber Kill Chain*, desenvolvido originalmente pela Lockheed Martin, é um framework para identificar e prevenir ataques cibernéticos.  
Esse framework identifica **7 etapas** que os adversários precisam completar para atingir seus objetivos [^1].  
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt="CyberKillChain" width="60%" height="value">

## Entendendo o Modelo do Diamante

O **Modelo do Diamante de Análise de Intrusão** oferece um método para analisar as características de ataques cibernéticos.  
Esse modelo enfatiza a relação entre 4 componentes: **o adversário, as capacidades, a infraestrutura e as vítimas**.  

A teoria por trás disso é que, para todo ataque cibernético, existe **“um adversário dando um passo em direção a um objetivo usando uma capacidade sobre uma infraestrutura contra uma vítima para produzir um resultado”** [^2].  
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt="DiamondModel" width="40%" height="value">

## O que é KC7?

Isso nos leva ao motivo pelo qual chamamos este jogo de **KC7**: porque ele ajuda as pessoas a percorrer as 7 etapas do *Cyber Kill Chain* descritas acima.

**KC7 é um jogo criado para ensinar como aplicar conhecimentos de cibersegurança e desenvolver habilidades de análise usando dados realistas.**  
É uma simulação única e imersiva de análise de cibersegurança, desenvolvida por especialistas do **Microsoft Threat Intelligence Center (MSTIC)**, uma equipe focada em rastrear alguns dos atores cibernéticos mais sofisticados do mundo.  

A melhor parte é que esses dados são fictícios e gerados por um script em Python, o que permite que os participantes aprendam técnicas reais sem os riscos de lidar com dados privados.  
Este treinamento dá aos participantes a oportunidade de aprender e aplicar habilidades de análise de ameaças cibernéticas enquanto defendem uma empresa simulada de ataques de hackers.

{{< alert theme="info" >}} Agora que já cobrimos alguns tópicos de inteligência contra ameaças, vamos seguir adiante. Não se preocupe se você não entender tudo de primeira — esses conceitos vão ficando mais claros ao longo do treinamento. {{< /alert >}}
