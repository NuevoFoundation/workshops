---
title: "Atividade 2: Jogo da Intel sobre Ameaças"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Documentação:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

// percorre as "escolhas atuais"
  // para encontrar a escolha selecionada.
  // caixas de rádio apontando para escolhas
  // deve ser nomeado "cc"
  // alterar se necessário
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

  // nenhuma opção foi selecionada
  //
  if("?" == s)
  {
    alert("Please make a selection.");
    return false;
  }

  // verifique se temos o correto
  // escolha selecionada
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

  // retorne "false" para indicar que não
  // envia o formulário.
  // mude para "true" se o formulário
  // "ação" é válida,
  // ou seja, aponta para um script CGI válido
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}



{{< alert theme="success" >}}**Best way to complete this section is to play the video while following along with the page below**{{< /alert >}}

### O que é atribuição?

Um tópico importante no mundo da segurança cibernética que você encontrará é chamado de **atribuição**. A atribuição em segurança cibernética refere-se ao processo de rastreamento, identificação e geralmente atribuição de culpa ao ator de um ataque cibernético. Os ataques cibernéticos, também conhecidos como *hacking*, são uma tentativa de um adversário de obter acesso a sistemas com a finalidade de alterar, roubar, destruir ou expor informações. Exemplos de métodos para realizar um ataque cibernético incluem:
- **Malware** - Abreviação de software malicioso, é qualquer código criado com a intenção de causar danos, como um vírus ou worm.
- **Phishing** - Um ataque que usa e-mail, mensagens de texto (SMS) ou mídias sociais para induzir a vítima a compartilhar informações confidenciais ou baixar um arquivo malicioso. Isso é muito parecido com catfishing.
- **Ransomware** - Código malicioso destinado a bloquear o acesso das vítimas aos seus próprios sistemas, a fim de exigir um resgate, geralmente dinheiro, da vítima em troca de recuperar o acesso aos seus sistemas ou dados bloqueados.
- **Password Spray** - Um invasor obtém uma lista de nomes de usuário e, em seguida, tenta fazer login em todos os nomes de usuário usando a mesma senha e, em seguida, repete o processo com novas senhas até obter acesso ao sistema.

### Desafios à atribuição

Embora seja uma parte fundamental da segurança cibernética, a atribuição pode ser um desafio, mesmo para especialistas em segurança cibernética. Os especialistas muitas vezes precisam realizar extensas investigações forenses e analisar muitos dados em busca de maneiras de provar quem pode ser o responsável pelos ataques. Algumas coisas que os especialistas analisam para ajudar com isso são:
- **Dados históricos** - Existem padrões repetidos usados ​​em vários ataques cibernéticos ao longo do tempo que possam indicar quais atores mal-intencionados podem estar por trás disso?
- **Intenção ou Motivos** - Existem ataques direcionados especificamente a instituições educacionais, por exemplo? Poderá um ataque cibernético coincidir com um conflito político publicamente observável entre países que não podem dar-se ao luxo de serem apanhados a disparar mísseis, a enviar tropas militares ou a envolver-se de outra forma na chamada **guerra cinética** com outro país?
- **Padrão geográfico de ataque** - As organizações de um determinado país estão sendo predominantemente visadas? Transversalmente, uma entidade tem como alvo organizações em todo o mundo, EXCETO um país....potencialmente o seu próprio?

O nível de dificuldade da atribuição cibernética torna-a um método de ataque atraente para grupos com conhecimento, recursos e motivação para tentar, ao mesmo tempo que esconde vestígios do seu envolvimento. Com isso em mente, a nossa missão é ajudar a formar a próxima geração de Defensores Cibernéticos para combater ataques cibernéticos. Por mais difícil que seja, este tipo de trabalho tem impacto no mundo real. Confira abaixo esta história que demonstra o nível de impacto que os Defensores Cibernéticos podem ter:
- Expondo a atividade e infraestrutura do POLONIUM visando organizações israelenses: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C

### Classificações de adversários

Existem três categorias principais que usamos para classificar adversários: **hacktivistas, criminosos cibernéticos e atores patrocinados pela nação**.

Hacktivistas são pessoas que não são afiliadas a um governo específico e normalmente não estão nisso por dinheiro. Eles acreditam apaixonadamente em algum tipo de ideal e usam ataques cibernéticos para promover sua missão.
Características principais
- Hackear para espalhar o idealismo
- Buscar mudanças políticas ou sociais
- Não necessariamente o mais avançado tecnicamente
- Por exemplo. Culto da vaca morta / Anônimo

Os cibercriminosos estão hackeando com a principal motivação de ganho financeiro.
Características principais
- Motivado por dinheiro
- Segmentação indiscriminada
- Ransomware / Golpes comerciais / Hack e vazamento
- O nível de organização varia
- Lobos solitários e máfias organizadas

Patrocinados pela Nação são atores que operam em nome de seu governo. Muitos governos apoiam financeiramente e orientam grupos cibernéticos para hackear de acordo com os objetivos do governo, que podem ser políticos, financeiros, relacionados com a defesa, etc.
- Patrocinado ou afiliado do governo
- Altamente financiado
- Muito motivado
- Seletivo na segmentação
- Perspectivas de longo prazo




-----------------------------------------------------


### É hora de jogar um jogo de Whodunit, onde apresentamos alguns cenários e você tenta fazer a atribuição!

<br/>

#### Questão 1:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “WhodunitQ1” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Criminoso cibernético<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinados pela nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Enviar resposta">

</FORM>
<br/>

#### Questão 2:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ2.png?raw=true" alt= “WhodunitQ2” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'B');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Criminoso cibernético<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinados pela nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>

<br/>

#### Questão 3:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ3.png?raw=true" alt= “WhodunitQ3” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Criminoso cibernético<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinados pela nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>


____________________

{{< alert theme="info" >}} Assista ao vídeo nesta página para saber mais sobre por que as respostas são o que são e para aprender detalhes interessantes sobre os exemplos de adversários da vida real usados ​​neste jogo Whodunit. Obrigado por jogar! Vamos para a próxima seção. {{< /alert >}}