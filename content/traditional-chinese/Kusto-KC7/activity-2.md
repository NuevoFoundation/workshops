---
title: "活動 2: 威脅情報遊戲"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" title="Activity 2: Threat Intel Game - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


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



{{< alert theme="success" >}}**完成本部分的最佳方式是播放影片，同時閱讀以下內容**{{< /alert >}}

### 什麼是歸因？

在網絡安全的世界中，您會遇到的一個關鍵主題被稱為**歸因**。在網絡安全中，歸因是指跟踪、識別並通常將責任歸咎於網絡攻擊的肇事者的過程。網絡攻擊，也常被稱為*駭客攻擊（hacking）*，即對手試圖進入系統，目的是更改、竊取、破壞或暴露信息。執行網絡攻擊的方法包括以下幾種例子：
- **惡意軟件 (Malware)** - 惡意軟件的縮寫，是任何意圖造成損害的代碼，例如病毒或蠕蟲。
- **網絡釣魚 (Phishing)** - 一種通過電子郵件、簡訊（SMS）或社交媒體誘騙受害者分享敏感信息或下載惡意文件的攻擊，類似於 "釣魚"。
- **勒索軟件 (Ransomware)** - 一種惡意代碼，目的是將受害者鎖在自己的系統之外，為贖回被鎖定的系統或數據而通常向受害者索取贖金（通常是金錢）。
- **密碼噴灑攻擊 (Password Spray)** - 攻擊者獲取一份用戶名列表，然後對所有用戶名用同一個密碼逐一嘗試登錄，並重複使用新密碼進行嘗試，直到成功進入系統。

### 歸因的挑戰

雖然歸因是網絡安全中的核心部分，但即使對於網絡安全專家而言，執行起來也具有挑戰性。專家們通常必須進行廣泛的法醫調查，並分析大量數據，以尋找證明誰可能對攻擊負責的方法。專家通常會研究以下方面來幫助歸因：
- **歷史數據** - 在多次網絡攻擊中是否有反復出現的模式，可能表明是哪個惡意行為者策劃了攻擊？
- **意圖或動機** - 例如，是否有針對教育機構的攻擊？網絡攻擊是否與國家間的公開政治衝突（無法以發射導彈、派遣軍隊或進行其他形式的**烽火戰爭**）同時發生？
- **地理攻擊模式** - 某一國家的組織是否主要成為攻擊目標？反之，是不是有一實體正在攻擊世界各地的組織，而完全避開了一個國家...可能是他們自己的國家？

網絡歸因的困難程度使得這種攻擊方式對知識、資源和動機充分的團體具有吸引力，因為他們可以嘗試隱藏參與的痕跡。考慮到這一點，我們的使命是幫助培養下一代網絡防禦者，以應對網絡攻擊。雖然這類工作非常艱難，但它對現實世界有著深遠的影響。看看下面的案例故事，展示了網絡防禦者可以產生的影響：
- 揭露 POLONIUM 活動與基礎設施，目標是以色列組織：https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C  

### 威脅者的分類

我們用三個主要類別來對威脅者進行分類：**黑客行動主義者、網絡犯罪分子以及國家支持的行動者**。

**黑客行動主義者**是一些並不隸屬於特定政府的人，他們的行為通常也不是為了錢。他們對某些理想有著強烈的信念，並用網絡攻擊來推動他們的使命。 主要特徵：
- 使用駭客行為來傳播理想
- 追求政治或社會變革
- 技術能力不一定高深
- 例子：死牛邪教 (Cult of the Dead Cow) / Anonymous 

**網絡犯罪分子**以財務利益為主要動