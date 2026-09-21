---
title: "活动 2：威胁情报游戏"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" title="活动 2：威胁情报游戏 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Documentation:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

  // go through the "current choices"
  // to find the selected choice.
  // radio boxes pointing to choices
  // must be named "cc"
  // change if necessary
  //
  var i = 0;
  for(;i<quizForm.elements.length;i++)
  {
    if(("cc" ==
        quizForm.elements[i].name) &&
       (quizForm.elements[i].checked))
    {
      s = quizForm.elements[i].value;
    }
  }

  // no choice was selected
  //
  if("?" == s)
  {
    alert("Please make a selection.");
    return false;
  }

  // check if we have the correct
  // choice selected
  //
  if(s == theAnswer)
  {
    alert("'"+s+"' is correct!");
    if(urlRight)
    {
    document.location.href = urlRight;
    }
  }
  else
  {
    alert("'"+s+"' is incorrect.");
    if( urlWrong )
    {
    document.location.href = urlWrong;
    }
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}



{{< alert theme="success" >}}**完成本节内容的最佳方法是边播放视频边按照以下页面操作**{{< /alert >}}

### 什么是归因？

在网络安全领域，你会接触到一个关键主题，称为**归因**。网络安全中的归因是指跟踪、识别以及通常将责任归于网络攻击行为人的过程。网络攻击通常也被称为*黑客行为*，它是对手尝试通过访问系统以改变、窃取、破坏或暴露信息的一种行为。执行网络攻击的方法示例包括：
- **恶意软件** - 是恶意软件的缩写，指任何旨在造成破坏的代码，例如病毒或蠕虫。
- **网络钓鱼** - 利用电子邮件、短信（SMS）或社交媒体诱使受害者分享敏感信息或下载恶意文件的一种攻击，就像网络欺诈一样。
- **勒索软件** - 恶意代码旨在阻止受害者访问其自身系统，以此向受害者索要赎金，通常是金钱，以换取重新获得系统或数据的访问权限。
- **密码喷洒** - 攻击者获取一份用户名列表，然后使用同一个密码尝试登录所有用户名账户，之后不断使用新密码重复此过程，直到获得系统访问权限。

### 归因的挑战

尽管它是网络安全领域的一项核心工作，但归因的难度很高，即使对于网络安全专家也是如此。专家们通常需要开展广泛的取证调查和分析大量数据，以寻找证明谁可能是攻击背后责任人的方法。一些专家用来帮助工作的要素包括：
- **历史数据** - 是否在多个网络攻击中反复出现特定模式，这可能表明哪些恶意行为者可能是此次攻击幕后推手？
- **意图或动机** - 是否存在专门针对教育机构的攻击？是否有网络攻击与无法公开参与军事冲突（如导弹发射或派遣军队等的**动力战争**）的国家之间的冲突同时发生？
- **攻击的地理模式** - 是否主要针对某个国家的组织？或者是否某个实体在全球范围内攻击目标，但唯独某个国家没有受到攻击......可能是他们自己的国家？

网络归因的高难度使其成为那些拥有知识、资源和动机的团体很有吸引力的攻击方法，同时隐匿自身参与痕迹。考虑到这一点，我们的任务是帮助培养下一代网络捍卫者以应对网络攻击。尽管这种工作很困难，但它对现实世界有巨大的影响。下面的故事展示了网络捍卫者可以发挥的影响力：
- 揭露 POLONIUM 活动及其针对以色列组织的基础设施：https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C 

### 对手分类

我们用三个主要类别对对手进行分类：**黑客活动家、网络犯罪分子和国家支持的行为体**。

黑客活动家是不隶属于特定政府的人，他们通常不是为了钱而存在。他们对某种理念充满热情，并利用网络攻击来推动他们的使命。
关键特征：
- 通过黑客行为传播理念
- 追求政治或社会变革
- 不一定技术最先进
- 如：死牛崇拜团体 / Anonymous（匿名者）

网络犯罪分子的主要动机是获取经济利益。
关键特征：
- 为金钱驱动
- 无差别目标选择
- 勒索软件 / 商业骗局 / 黑客泄密
- 组织水平不一
- 独行者与有组织的黑手党

国家支持的行为体是代表政府行为的组织。许多政府会在财务上支持并指挥网络团体，以对齐国家目标开展黑客行为，这些目标可能是政治、经济、国防相关等。
- 政府支持或隶属
- 资金充足
- 动机强烈
- 精选攻击目标
- 具有长远的目标视野




-----------------------------------------------------


### 现在是玩“谁干的”游戏的时候了，游戏中我们会发布一些情景，然后让你尝试归因它们！

<br/>

#### 问题 1：
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “谁干的问题 1” width="80%" height="value">

#### 你认为是哪类型的对手实施了攻击？


<FORM method="POST"
      onSubmit