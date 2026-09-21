---
title: "额外内容 2：真相还是误导？"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" title="额外内容 2：真相还是误导？ - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 网络博客分析

在此场景中，我们希望您查看以下博客文章，并检查您是否可以在 **SecurityLogs2** 中找到支持或否定文中信息的证据。

------------------------------------------------------
*[博客文章开始]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “博客图片1” width="value" height="value">


**什么是 UnhelpfulDesk？** 
 
UnhelpfulDesk 恶意软件通过名称与合法 IT 功能（如软件更新或密码重置）或医学研究主题（如疫苗研究）相似的文件植入系统。这些文件通过包含下载链接的恶意电子邮件发送给受害者。
 
 
 
**UnhelpfulDesk 投放程序** 
 
| 文件名         	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**植入文件** 
 
| 文件名         	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
注意：*VulnerableArray 研究人员检测到的 UnhelpfulDesk 恶意植入文件样本可在 VirusTotal 上找到。*
 
一旦成功部署，UnhelpfulDesk 植入程序会通过以下命令执行侦察： 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
接下来，恶意软件会加密机器上的文件，并要求支付赎金以解密文件。赎金通知从 Pastebin 获取，如下所示： 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**其他入侵指标 (IOCs)** 
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[博客文章结束]*

-----------------------------------------------------

## 现在由您决定… 
 
我们的首席信息安全官 (CISO) 要求您评估 VulnerableArray 的这份报告，并使用 **SecurityLogs2** 数据库中的日志评估其准确性。     

🤔 在进行评估时，请考虑以下问题：

{{< alert theme="success" >}} 
*问题 1：报告中列出的所有入侵指标是否属于同一活动集群？您如何确定？*
 {{< notice note >}}
  **提示：** 使用钻石模型（攻击者、受害者、基础设施、能力）来帮助您思考如何将不同的活动集群进行分类。寻找在钻石模型四个顶点中的相似性和差异性。  {{< /notice >}}
 
*问题 2：报告称 UnhelpfulDesk 恶意软件的最终目标是部署勒索软件并加密受感染系统上的文件。您是否同意这一评估？或者，您是否发现有替代的目标行为证据？*
 {{< notice note >}}
  **提示：** 尝试查找与博客中共享的恶意软件指标相关的活动，接着识别一些被攻陷的系统。您是否看到这些系统中的任何后续妥协行为与博客中描述的勒索软件不同？ {{< /notice >}}
 
*问题 3：博客作者在分析过程中是否存在错误？如果有，是哪些？* 
 {{< notice note >}}
  **提示：** 有些进程会在恶意软件执行时自动运行，而另一些进程则需要操作员通过命令和控制通道手动（键盘操作）执行。 {{< /notice >}}
 
 
*问题 4：UnhelpfulDesk 恶意软件是否仅属于 ITINIUM 行动者？您如何知道？* 
 {{< notice note >}}
  **提示：** updater.dll 植入程序似乎从两个不同主题的文件中被投放（IT 和研究）。考虑为什么会出现这种情况。 {{< /notice >}}
 
*问题 5：是否有多个行动者针对 Envolve Labs 发动攻击？如果是，您能描述它们的策略、技术和程序 (TTPs) 吗？它们有哪些相似性和差异性？* 
{{< notice note >}}
  **提示：** 比较和对比每个观察到的活动集群的钻石模型。 {{< /notice >}}
 
*问题 6：可见