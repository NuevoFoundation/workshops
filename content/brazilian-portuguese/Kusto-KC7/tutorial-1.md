---
title: "Tutorial 1: introdução à inteligência de ameaças"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} Ao avançar neste workshop, você notará que cada página com um vídeo duplica a lição tanto em vídeo quanto em formato escrito. Você pode seguir um ou outro dependendo do tipo de conteúdo que você prefere.{{< /notice >}}
## O que é inteligência de ameaças (TI)?

**Analistas de inteligência de ameaças**:

{{<icon name="user" size="large">}} Aprenda sobre os adversários... e compartilhe conhecimento com parceiros do setor público/privado

{{<icon name="time" size="large">}} Acompanhe os adversários ao longo do tempo... para entender o cenário de ameaças em constante mudança

{{<icon name="lock" size="large">}} Implemente defesas... e trabalhe com equipes de desenvolvimento de produtos para proteger os clientes

Dados por si só não são iguais a inteligência. Os logs de segurança por si só não informam nada de impactante até que você os processe. Depois que um analista de inteligência de ameaças processa os dados e as informações, com o contexto dos adversários que rastreia e o contexto da mudança no cenário de ameaças, ele pode começar a criar uma história e um cronograma do que aconteceu. Entender o que essas ameaças significam, por que ocorreram e como afetaram sua empresa... isso é a verdadeira inteligência sobre ameaças.

## O que é a Cadeia de Morte Cibernética?

O Cyber Kill Chain, Cadeia de Morte Cibernética, originalmente desenvolvido pela Lockheed Martin, é uma estrutura para identificar e prevenir ataques cibernéticos. Esta estrutura identifica 7 etapas que os adversários devem completar para atingir seu objetivo [^1] .
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">


## Compreendendo o modelo diamante

O Modelo Diamante de Análise de Intrusão fornece um método para analisar as características dos ataques cibernéticos. Este modelo enfatiza as relações entre quatro componentes: **o adversário, as capacidades, a infraestrutura e as vítimas**. A teoria na qual isso se baseia é que, para cada ataque cibernético, existe "um **adversário** dando um passo em direção a um objetivo pretendido usando uma **capacidade** sobre **infraestrutura** contra uma **vítima** para produzir um resultado" [^2] .
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## O que é KC7?

Isso nos leva ao motivo pelo qual escolhemos chamar este jogo de KC7; porque ajuda a orientar as pessoas através dos 7 estágios da Cadeia de Morte Cibernética (Kill Chain) descrita acima.

**KC7 é um jogo projetado para ensinar as pessoas a aplicar conhecimentos de segurança cibernética e desenvolver habilidades de análise usando dados realistas.** É uma simulação de análise de segurança cibernética exclusiva e imersiva que foi desenvolvida por especialistas em segurança do Threat Intelligence Center (MSTIC) da Microsoft, uma equipe que se concentra em rastrear os atores cibernéticos mais sofisticados do mundo. A melhor parte desses dados é que eles são fictícios e gerados por um script python, o que significa que os participantes aprendem técnicas reais sem os perigos de lidar com dados privados. Este treinamento dá aos participantes a oportunidade de aprender e aplicar habilidades de análise de ameaças cibernéticas enquanto defendem uma empresa simulada contra hackers.

{{< alert theme="info" >}} Agora que cobrimos alguns tópicos de informações sobre ameaças, vamos prosseguir. Não se preocupe se você não entender isso imediatamente, pois esses tópicos serão mais fáceis de entender posteriormente no treinamento. {{< /alert >}}
