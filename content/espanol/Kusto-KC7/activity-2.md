---
title: "Actividad 2: Juego de Inteligencia de Amenazas"
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



{{< alert theme="success" >}}**La mejor manera de completar esta sección es ver el video mientras sigues la página a continuación**{{< /alert >}}

### ¿Qué es la atribución?

Un tema clave en el mundo de la ciberseguridad que encontrarás se llama **atribución**. La atribución en ciberseguridad se refiere al proceso de rastrear, identificar y, en general, de atribuir la culpa al perpetrador de un ataque cibernético. Los ataques cibernéticos, también conocidos comúnmente como *hacking*, son intentos de un adversario para acceder a sistemas con el propósito de alterar, robar, destruir o exponer información. Ejemplos de métodos para llevar a cabo un ataque cibernético incluyen:
- **Malware** - Abreviatura de software malicioso, es cualquier código creado con la intención de causar daño, como un virus o un gusano.
- **Phishing** - Un ataque que utiliza correos electrónicos, mensajes de texto (SMS) o redes sociales para atraer a una víctima a compartir información sensible o descargar un archivo malicioso. Esto es similar al "catfishing".
- **Ransomware** - Código malicioso diseñado para bloquear a las víctimas fuera de sus propios sistemas con el fin de exigir un rescate, generalmente dinero, a cambio de recuperar acceso a sus sistemas o datos bloqueados.
- **Password Spray** - Un atacante adquiere una lista de nombres de usuarios y luego intenta iniciar sesión en todos ellos utilizando la misma contraseña, repitiendo el proceso con nuevas contraseñas hasta que logra acceder al sistema.

### Desafíos de la atribución

Aunque es una parte clave de la ciberseguridad, la atribución puede ser un desafío incluso para los expertos en ciberseguridad. Los expertos a menudo deben realizar investigaciones forenses extensas y analizar grandes cantidades de datos en busca de formas de demostrar quién podría ser responsable de los ataques. Algunas cosas que los expertos analizan para ayudar en esto son:
- **Datos Históricos** - ¿Existen patrones repetidos utilizados en múltiples ataques cibernéticos a lo largo del tiempo que puedan indicar qué actor(es) malicioso(s) podrían estar detrás de esto?
- **Intenciones o Motivos** - ¿Existen ataques que apuntan específicamente a instituciones educativas, por ejemplo? ¿Podría un ataque cibernético coincidir con un conflicto político observable públicamente entre países que no pueden permitirse ser descubiertos disparando misiles, enviando tropas militares u otro tipo de acciones que se denominan **guerra cinética** con otro país?
- **Patrón Geográfico del Ataque** - ¿Hay organizaciones en un país específico que están siendo predominantemente atacadas? Por otro lado, ¿una entidad está atacando organizaciones en todo el mundo EXCEPTO en un país... posiblemente el suyo propio?

El nivel de dificultad de la atribución cibernética la convierte en un método de ataque atractivo para grupos con el conocimiento, recursos y motivación necesarios para intentarlo mientras ocultan rastros de su participación. Con eso en mente, nuestra misión es ayudar a formar a la próxima generación de Defensores Cibernéticos para combatir los ataques cibernéticos. Por difícil que sea, este tipo de trabajo tiene un impacto en el mundo real. Echa un vistazo a esta historia a continuación que demuestra el nivel de impacto que los Defensores Cibernéticos pueden tener:
- Exposición de la actividad e infraestructura de POLONIUM dirigida a organizaciones israelíes: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C 

### Clasificación de los Adversarios

Hay 3 categorías principales que utilizamos para clasificar a los adversarios: **hacktivistas, ciberdelincuentes y actores patrocinados por naciones**.

Los hacktivistas son personas que no están afiliadas a un gobierno específico y, por lo general, no están motivadas por dinero. Creen apasionadamente en algún ideal y utilizan ciberataques para avanzar en su misión.
Características Clave
- Hacen hacking para difundir idealismo
- Buscan cambio político o social
- No necesariamente los más avanzados técnicamente
- Ej. Cult of the Dead Cow / Anonymous

Los ciberdelincuentes hackean con la principal motivación de obtener ganancias financieras.
Características Clave
- Motivados por dinero
- Objetivos indiscriminados
- Ransomware / Estafas empresariales / Hackeo y filtración
- El nivel de organización varía
- Lobos solitarios y mafias organizadas 

Los actores patrocinados por naciones son aquellos que operan en nombre de su gobierno. Muchos gobiernos apoyan financieramente y dirigen grupos cibernéticos para hackear en línea con los objetivos del gobierno, que podrían ser políticos, financieros, relacionados con la defensa, etc.
- Patrocinados o afiliados al gobierno
- Altamente financiados
- Altamente motivados
- Selectivos en sus objetivos
- Perspect