---
title: "Atividade 2: Jogo de Inteligência de Ameaças"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

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



{{< alert theme="success" >}}**A melhor forma de completar esta seção é assistir ao vídeo enquanto acompanha a página abaixo**{{< /alert >}}

### O que é Atribuição?

Um tema importante no mundo da cibersegurança é chamado de **atribuição**. Atribuição em cibersegurança é o processo de rastrear, identificar e, geralmente, atribuir a culpa ao responsável por um ataque cibernético. Ataques cibernéticos, também conhecidos como *hacking*, são tentativas de um adversário de acessar sistemas para alterar, roubar, destruir ou expor informações. Exemplos de métodos para realizar um ataque cibernético incluem:
- **Malware** - Abreviação de software malicioso, é qualquer código criado com intenção de causar dano, como vírus ou worm.
- **Phishing** - Um ataque que usa e-mail, mensagem de texto (SMS) ou redes sociais para convencer a vítima a compartilhar informações sensíveis ou baixar um arquivo malicioso, parecido com "catfishing".
- **Ransomware** - Código malicioso feito para bloquear o acesso da vítima ao próprio sistema, exigindo um resgate (geralmente dinheiro) para liberar o acesso novamente.
- **Password Spray** - O atacante consegue uma lista de nomes de usuário e tenta fazer login em todos usando a mesma senha, repetindo o processo com novas senhas até conseguir acesso.

### Desafios da Atribuição

Apesar de ser uma parte importante da cibersegurança, atribuir ataques pode ser difícil, até para especialistas. Eles precisam fazer investigações forenses detalhadas e analisar muitos dados para tentar provar quem pode ser o responsável. Algumas coisas que os especialistas observam são:
- **Dados Históricos** - Existem padrões repetidos em vários ataques ao longo do tempo que podem indicar quem está por trás deles?
- **Intenção ou Motivo** - Existem ataques que focam em escolas, por exemplo? Um ataque pode acontecer junto com um conflito político entre países que não querem ser pegos em guerra aberta (**guerra cinética**)?
- **Padrão Geográfico de Ataque** - Organizações de um país específico estão sendo mais atacadas? Ou um grupo está atacando o mundo todo, menos um país... talvez o próprio?

A dificuldade de atribuir ataques faz com que grupos com conhecimento, recursos e motivação gostem de usar esse método para atacar e esconder seus rastros. Por isso, nossa missão é ajudar a formar a próxima geração de Defensores Cibernéticos para combater ataques. Mesmo sendo difícil, esse trabalho tem impacto real. Veja esta história abaixo que mostra o impacto dos Defensores Cibernéticos:
- Expondo atividades e infraestrutura do POLONIUM contra organizações israelenses: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C 

### Classificações de Adversários

Existem 3 principais categorias para classificar os adversários: **hacktivistas, cibercriminosos e agentes patrocinados por nações**.

Hacktivistas são pessoas que não têm ligação com governos e normalmente não buscam dinheiro. Eles acreditam muito em uma ideia e usam ataques cibernéticos para espalhar sua missão.
Principais características:
- Hackeiam para espalhar ideias
- Buscam mudança política ou social
- Nem sempre são os mais avançados tecnicamente
- Exemplo: Cult of the dead cow / Anonymous

Cibercriminosos hackeiam principalmente para ganhar dinheiro.
Principais características:
- Motivados por dinheiro
- Atacam qualquer alvo
- Ransomware / Golpes / Vazamento de dados
- O nível de organização varia
- Lobos solitários & Máfias organizadas

Agentes patrocinados por nações são pessoas que agem em nome do governo. Muitos governos financiam e orientam grupos para hackear conforme seus objetivos políticos, financeiros, de defesa, etc.
- Patrocinados ou ligados ao governo
- Muito financiados
- Muito motivados
- Escolhem bem os alvos
- Pensam no longo prazo




-----------------------------------------------------


### Hora de jogar "Quem fez isso?", onde vamos mostrar alguns cenários e você tenta adivinhar quem foi o responsável!

<br/>

#### Pergunta 1:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “WhodunitQ1” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminoso<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Enviar resposta">

</FORM>
<br/>

#### Pergunta 2:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ2.png?raw=true" alt= “WhodunitQ2” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'B');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminoso<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Enviar resposta">

</FORM>

<br/>

#### Pergunta 3:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ3.png?raw=true" alt= “WhodunitQ3” width="80%" height="value">

#### Que tipo de adversário você acha que fez isso?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminoso<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por nação<BR>

<INPUT TYPE="SUBMIT" VALUE="Enviar resposta">

</FORM>


____________________

{{< alert theme="info" >}} Assista ao vídeo desta página para entender melhor porque essas são as respostas certas e para conhecer detalhes interessantes sobre os exemplos reais usados neste jogo. Obrigado por jogar! Vamos para a próxima seção. {{< /alert >}}