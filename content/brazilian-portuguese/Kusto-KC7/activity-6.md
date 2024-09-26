---
title: "Bônus 2: Verdade ou Desinformação?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Análise de blogs cibernéticos

Para esse cenário, gostaríamos que você desse uma olhada na postagem do blog abaixo e veja se consegue encontrar evidências em **SecurityLogs2** que apoiem ou refutem as informações postadas.

-------------------------------------------------- ----
*[Início da postagem no blog]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">


**O que é UnhelpfulDesk?**
 
Os implantes de malware UnhelpfulDesk são descartados por arquivos com nomes que lembram funções legítimas de TI, como atualizações de software ou redefinições de senha, ou tópicos de pesquisa médica, como pesquisa de vacinas. Esses arquivos são entregues às vítimas por meio de e-mails maliciosos contendo links para baixar os arquivos.
 
 
 
**UnhelpfulDesk Droppers** 
 
| Filename 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**Implantes Dropped** 
 
|Filename 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
Nota: *Amostras dos arquivos de implante UnhelpfulDesk detectados pelos pesquisadores do VulnerableArray estão disponíveis no VirusTotal.*
 
Depois de implantado com sucesso, o implante UnhelpfulDesk executa o reconhecimento por meio dos seguintes comandos:
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Depois disso, o malware criptografará os arquivos na máquina e exigirá um resgate para descriptografá-los. A nota de resgate é retirada do Pastebin conforme mostrado abaixo:
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Outros Indicadores de Comprometimento(IOCs)**
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[Fim da postagem do blog]*

-----------------------------------------------------

## Agora cabe a você…
 
Nosso Diretor de Segurança da Informação (CISO) pediu que você avaliasse este relatório do VulnerableArray e determinasse se ele é preciso usando os logs do banco de dados **SecurityLogs2**.

🤔 Ao fazer sua avaliação, considere as seguintes perguntas:

{{< alert theme="success" >}} 
*Pergunta 1.	Todos os indicadores reportados pertencem ao mesmo cluster de atividade? Como você sabe?*
 {{< notice note >}}
  **Dica:** Use o Modelo Diamante (Adversário, Vítima, Infraestrutura, Capacidades) para ajudá-lo a pensar em agrupar grupos distintos de atividades. Procure semelhanças e diferenças em cada um dos quatro vértices do Modelo Diamante.  {{< /notice >}}
 
*Pergunta 2.	O relatório afirma que o malware UnhelpfulDesk tem como objetivo implantar ransomware e criptografar arquivos em um sistema infectado. Você concorda com essa avaliação? Ou você vê evidências de ações alternativas em relação aos objetivos?*
 {{< notice note >}}
  **Dica:** Tente procurar atividades relacionadas aos indicadores baseados em malware compartilhados no blog e, em seguida, identifique alguns sistemas comprometidos. Você vê atividade pós-comprometimento em algum desses sistemas que seja diferente do ransomware descrito no blog?? {{< /notice >}}
 
*Pergunta 3.	Que erros analíticos, se houver, foram cometidos pelos atores do blog?*
  {{< notice note >}}
   **Dica:** alguns processos são executados automaticamente pelo malware após a execução. Outros processos são executados manualmente (hand-on-keyboard) pelo operador após o estabelecimento do canal de comando e controle. {{< /notice >}}
 
 
*Pergunta 4.	O malware UnhelpfulDesk é exclusivo do ator ITINIUM? Como você sabe?*
 {{< notice note >}}
  **Dica:** Os implantes updater.dll parecem ter sido retirados de arquivos com dois temas separados (TI e pesquisa). Pense por que isso pode ser o caso.  {{< /notice >}}
 
*Pergunta 5.	Existem vários atores visando o Envolve Labs? Se sim, você pode descrever as Táticas, Técnicas e Procedimentos (TTPs) de cada um deles? Como eles são semelhantes? Como eles são diferentes?* 
{{< notice note >}}
  **Dica:** Compare e contraste o modelo diamante para cada um dos grupos de atividade observados. {{< /notice >}}
 
*Pergunta 6. Como as lacunas na visibilidade podem ter contribuído para as conclusões do(s) ator(es) do blog? Como eles podem contribuir para suas próprias avaliações analíticas?*
{{< /alert >}}