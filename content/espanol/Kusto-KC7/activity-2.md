---
title: "Actividad 2: Juego de inteligencia sobre amenazas"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Documentación:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

  // Ir a las «Opciones escogidas»
  // para encontrar la opción seleccionada.
  // Las casillas que señalan opciones
  // debe llamarse «cc»
  // cambiar si es necesario
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

  // No se ha seleccionado ninguna opción
  //
  if("?" == s)
  {
    alert("Please make a selection.");
    return false;
  }

    // comprobar si tenemos la
  // opción correcta seleccionada
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

  //  Retornar «false» para indicar que no
  // se envie el formulario.
  // cámbialo a «true» si el formulario
  // «acción» es válido,
  // es decir, apunta a un script CGI válido
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}



{{< alert theme="success" >}}**La mejor manera de completar esta sección es reproducir el vídeo mientras sigues la página de abajo**.{{< /alert >}}

### ¿Qué es la atribución?

Un tema clave en el mundo de la ciberseguridad es la **atribución**. La atribución en ciberseguridad se refiere al proceso de rastrear, identificar y, en general, atribuir la culpa al autor de un ciberataque. Los ciberataques, también conocidos comúnmente como *hacking*, son un intento por parte de un adversario de acceder a sistemas con el fin de alterar, robar, destruir o exponer información. Algunos ejemplos de métodos para llevar a cabo un ciberataque son:
- **Malware** - Abreviatura de software malicioso, es cualquier código creado con la intención de hacer daño como un virus o un gusano.
- Phishing** - Ataque que utiliza el correo electrónico, los mensajes de texto (SMS) o las redes sociales para incitar a la víctima a compartir información confidencial o a descargar un archivo malicioso, muy parecido al catfishing.
- ransomware**: código malicioso que bloquea a las víctimas en sus propios sistemas para exigirles un rescate, normalmente dinero, a cambio de recuperar el acceso a sus sistemas o datos bloqueados.
- Un atacante adquiere una lista de nombres de usuario e intenta iniciar sesión con todos los nombres de usuario utilizando la misma contraseña, y luego repite el proceso con nuevas contraseñas hasta obtener acceso al sistema.

### Los retos de la atribución

Aunque es una parte clave de la ciberseguridad, la atribución puede ser difícil de realizar, incluso para los expertos en ciberseguridad. A menudo, los expertos deben llevar a cabo exhaustivas investigaciones forenses y analizar gran cantidad de datos en busca de formas de demostrar quién podría ser el responsable de los ataques. Algunas cosas que los expertos miran para ayudar con esto son:
- **Datos históricos** - ¿Existen patrones repetidos utilizados en múltiples ciberataques a lo largo del tiempo que puedan indicar qué actor(es) malicioso(s) podría(n) estar detrás de esto?
- Intención o motivos** - ¿Existen ataques dirigidos específicamente a instituciones educativas, por ejemplo? ¿Podría coincidir un ciberataque con un conflicto político públicamente observable entre países que no pueden permitirse ser sorprendidos disparando misiles, enviando tropas militares o participando de otro modo en lo que se denomina **guerra cinética** con otro país?
- Patrón geográfico del ataque** - ¿Las organizaciones de un país concreto son el objetivo predominante? Transversalmente, ¿se dirige una entidad contra organizaciones de todo el mundo EXCEPTO de un país....potencialmente el suyo?

El nivel de dificultad de la ciberatribución la convierte en un método de ataque atractivo para los grupos con los conocimientos, los recursos y la motivación necesarios para intentarlo y, al mismo tiempo, ocultar las huellas de su participación. Teniendo esto en cuenta, nuestra misión es ayudar a formar la próxima generación de ciberdefensores para combatir los ciberataques. Por difícil que pueda ser, este tipo de trabajo tiene un impacto en el mundo real. Vea esta historia a continuación que demuestra el nivel de impacto que pueden tener los Defensores Cibernéticos:
- Exposición de la actividad e infraestructura de POLONIUM dirigida a organizaciones israelíes: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C 

### Clasificaciones de los adversarios

Existen 3 categorías principales que utilizamos para clasificar a los adversarios: **hacktivistas, ciberdelincuentes y actores patrocinados por naciones**.

Los hacktivistas son personas que no están afiliadas a un gobierno específico y que normalmente no lo hacen por dinero. Creen apasionadamente en algún tipo de ideal y utilizan los ciberataques para promover su misión.
Rasgos clave
- Hackear para difundir el idealismo
- Buscan el cambio político o social
- No son necesariamente los más avanzados técnicamente
- P. ej. Cult of the dead cow  / Anonymous

Los ciberdelincuentes piratean con la motivación principal del beneficio económico.
Rasgos clave
- Motivados por el dinero
- Ataque indiscriminado
- Ransomware / Estafas empresariales / Hackeo y filtración
- El nivel de organización varía 
- Lobos solitarios y mafias organizadas 

Las naciones patrocinadoras son actores que operan en nombre de su gobierno. Muchos gobiernos apoyan financieramente y dirigen a grupos cibernéticos para que pirateen en línea con los objetivos del gobierno, que pueden ser políticos, financieros, relacionados con la defensa, etc.
- Patrocinado o afiliado al gobierno
- Muy financiados
- Muy motivados
- Objetivos selectivos
- Perspectiva a largo plazo




-----------------------------------------------------


### ¡Es hora de jugar a «Quién es el asesino», en el que planteamos algunos escenarios y usted intenta atribuirlos!

<br/>

#### Pregunta 1:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “WhodunitQ1” width="80%" height="value">

#### ¿Qué tipo de adversario cree que lo hizo?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por el país<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>
<br/>

#### Pregunta 2:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ2.png?raw=true" alt= “WhodunitQ2” width="80%" height="value">

#### ¿Qué tipo de adversario cree que lo hizo?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'B');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por el país<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>

<br/>

#### Pregunta 3:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ3.png?raw=true" alt= “WhodunitQ3” width="80%" height="value">

#### ¿Qué tipo de adversario cree que lo hizo?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivista<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cibercriminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Patrocinado por el país<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>


____________________

{{< alert theme="info" >}} Mira el vídeo de esta página para saber más sobre por qué las respuestas son las que son, y para conocer detalles interesantes sobre los ejemplos de adversarios de la vida real utilizados para este juego de Quién es Quién. Gracias por jugar. Pasemos a la siguiente sección. {{< /alert >}}