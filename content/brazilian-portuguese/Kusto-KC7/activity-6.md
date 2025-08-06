---
title: "Bônus 2: Verdade ou Desinformação?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Análise de Blog de Cibersegurança

Neste cenário, queremos que você dê uma olhada no post do blog abaixo e veja se consegue encontrar evidências nos **SecurityLogs2** que confirmam ou desmentem as informações publicadas.

------------------------------------------------------
*[Início do Post do Blog]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">

**O que é UnhelpfulDesk?** 

Implantes de malware UnhelpfulDesk são instalados por arquivos com nomes que parecem funções legítimas de TI, como atualizações de software ou redefinição de senha, ou temas de pesquisa médica, como pesquisa de vacinas. Esses arquivos são enviados para as vítimas por e-mails maliciosos contendo links para baixar os arquivos.  

**Arquivos que instalam UnhelpfulDesk** 

| Nome do arquivo 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |

**Implantes Instalados** 

|Nome do arquivo 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 

Nota: *Amostras dos arquivos de implante UnhelpfulDesk detectados por pesquisadores da VulnerableArray estão disponíveis no VirusTotal.*

Depois de instalado com sucesso, o implante UnhelpfulDesk executa reconhecimento usando os seguintes comandos: 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Depois disso, o malware criptografa arquivos na máquina e exige um resgate para descriptografar os arquivos. O bilhete de resgate é baixado do Pastebin, como mostrado abaixo: 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Outros Indicadores de Comprometimento (IOCs)**
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[Fim do Post do Blog]*

-----------------------------------------------------

## Agora é com você...

Nosso Diretor de Segurança da Informação (CISO) pediu para você avaliar este relatório da VulnerableArray e determinar se ele é preciso usando os logs do banco de dados **SecurityLogs2**.

🤔  Ao fazer sua análise, considere as seguintes perguntas: 

{{< alert theme="success" >}} 
*Pergunta 1.	Todos os indicadores relatados pertencem ao mesmo grupo de atividade? Como você sabe?*
 {{< notice note >}}
  **Dica:** Use o Modelo Diamante (Adversário, Vítima, Infraestrutura, Capacidades) para ajudar a pensar em agrupamentos de atividades diferentes. Procure por semelhanças e diferenças em cada um dos quatro pontos do Modelo Diamante.  {{< /notice >}}
 
*Pergunta 2.	O relatório afirma que o malware UnhelpfulDesk serve para instalar ransomware e criptografar arquivos em sistemas infectados. Você concorda com essa avaliação? Ou vê evidências de outras ações ou objetivos?*
 {{< notice note >}}
  **Dica:** Tente procurar por atividades relacionadas aos indicadores de malware compartilhados no blog, depois identifique alguns sistemas comprometidos. Você vê atividades pós-comprometimento nesses sistemas que são diferentes do ransomware descrito no blog? {{< /notice >}}
 
*Pergunta 3.	Que erros analíticos, se houver, foram cometidos pelos autores do blog?* 
 {{< notice note >}}
  **Dica:** Alguns processos são executados automaticamente pelo malware ao rodar. Outros processos são feitos manualmente (com o operador digitando) depois que o canal de comando e controle é estabelecido. {{< /notice >}}
 
 
*Pergunta 4.	O malware UnhelpfulDesk é exclusivo do ator ITINIUM? Como você sabe?* 
 {{< notice note >}}
  **Dica:** Os implantes updater.dll parecem ser instalados por arquivos com dois temas diferentes (TI e pesquisa). Pense por que isso pode acontecer.  {{< /notice >}}
 
*Pergunta 5.	Há vários atores atacando a Envolve Labs? Se sim, você consegue descrever as Táticas, Técnicas e Procedimentos (TTPs) de cada um? Como eles são parecidos? Como são diferentes?* 
{{< notice note >}}
  **Dica:** Compare e contraste o modelo diamante para cada grupo de atividade observado. {{< /notice >}}
 
*Pergunta 6. Como lacunas de visibilidade podem ter contribuído para as conclusões dos autores do blog? Como elas podem influenciar suas próprias análises?*
{{< /alert >}}