using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// HACER: borra la #pragma linea cuando termines la actividad.
#pragma warning disable 162, 168, 219
namespace NuevoFoundation
{
  class AdivinaLaPalabra
  {
    static void Main(string[] args)
    {
      // HACER (ACTIVIDAD 1): Imprime la frase "Bienvenidos a C# Adivina la palabra" a la consola.
      Console.WriteLine("Bienvenidos a C# Adivina la palabra");

      // HACER (ACTIVIDAD 2): Agregue por lo menos 3 palabras mas al banco de palabras.
      // CONSEJO: Agregue los strings entre los { } simbolos. Separe cada string con una coma. 
      string[] bancoDePalabras = { "Hola", "Mundo", "Nuevo" };

      // Crea un generador de numeros aleatorios. No te preocupas sobre como funciona esta parte.
      var aleatorio = new Random((int)DateTime.Now.Ticks);

      // Escoga una palabra del banco de palabras al azar, usando el generador de numeros aleatorios.
      var palabra = bancoDePalabras[aleatorio.Next(0, bancoDePalabras.Length)];
      var palabraMayuscula = palabra.ToUpper();

      // CONSEJO (ACTIVIDAD 3):
      // Declara un variable llamado 'vidas' que archiva cuantas adivinaciones incorrectas el jugador puede hacer antes de que termine el juego. Puedes cambiar este numero. 
      // Duespues, imprime cuantas vidas tiene el jugador al inicio del juego.
      var vidas = 5;
      Console.WriteLine("Te quedan " + vidas + ".");


      // Saca el numero de letras de la palabra clave.
      var numeroDeLetras = palabra.Length;

      // HACER (ACTIVIDAD 3.1): Dile al jugador cuantas letras hay en la palabra clave. Por ejemplo, si la palabra tiene 5 letras, imprime "La palabra tiene 5 letras" a la consola. 
      // CONSEJO: Usa Console.WriteLine(), y usa + para meter el variable numeroDeLetras en el string.
      Console.WriteLine("La palabra tiene " + numeroDeLetras + " letras");



      // Empieza el juego de Adivina la Palabra con espacios vacios _____. Como el jugador va avanzando, cada espacio vacio sera reemplazado con la letra correcta.
      var mostrarAJugador = new StringBuilder(numeroDeLetras);
      for (var i = 0; i < numeroDeLetras; i++)
      {
        mostrarAJugador.Append('_');
      }

      // Inicia listas para archivar las letras que el jugador ya adivino, correctamente e incorrectamente. Podemos aprender sobre los Lists (las listas) en el futuro.
      var adivsCorrectas = new List<char>();
      var adivsIncorrectas = new List<char>();

      // HACER (ACTIVIDAD 3.2): Declare dos variables:
      // - letrasReveladas: un numero entero que archiva el numero de letras que ya se han reveladas al jugador. Inicialo a 0.
      // - gano: un boolean que archiva si el jugador ha ganado el juego o no. Inicialo a false (falso). 
      var letrasReveladas = 0;
      var gano = false;



      // Estos variables archivan las adivinaciones del jugador. 
      string entrada;
      char adiv;

      // Continue el juego mientras que el jugador todavia no ha ganado, y tiene por lo menos una vida.
      // HACER (ACTIVIDAD 6): reemplace el for-loop con un while-loop, con la condicion que: 
      // - el variable gano debe ser falso, Y (&&) 
      // - el variable vidas debe ser mas que 0.
      while (gano == false && vidas > 0)
      {
        Console.WriteLine("Adivina una letra:");

        // HACER (ACTIVIDAD 4.2): Reemplace el string "!Cambiame!" con codigo que lee entradas del usuario.
        entrada = Console.ReadLine();

        // Detalle opcional: si el jugador entre mas que una letra a la vez, solo consideramos la primera.
        adiv = entrada.ToUpper()[0];

        // Si el jugador repite una adivinacion correcta, recuerdale que esa adivinacion ya fue correcta. 
        if (adivsCorrectas.Contains(adiv)) 
        {
          Console.WriteLine($"Ya has intentado '{adiv}', y fue correcto!");
          continue;
        }
        
        // Si el jugador repite una adivinacion incorrecta, recuerdale que esa adivinacion ya fue incorrecta. 
        if (adivsIncorrectas.Contains(adiv)) 
        {
          Console.WriteLine($"Ya has intentado '{adiv}', y fue incorrecto!");
          continue;
        }

        // Fijate si la adivinacion esta en la palabra clave.
        if (palabraMayuscula.Contains(adiv)) 
        {
          // Si el jugador adivino una letra que si esta en la palabra clave, actualiza los espacios vacios con la nueva letra correcta. 
          adivsCorrectas.Add(adiv);

          for (int i = 0; i < numeroDeLetras; i++)
          {
            if (palabraMayuscula[i] == adiv)
            {
              mostrarAJugador[i] = palabra[i];

              // HACER (ACTIVIDAD 4.3): Incrementa el numero de letras reveladas por 1.
              // CONSEJO: Usa el variable letrasReveladas.
              letrasReveladas = letrasReveladas + 1;

              // (ACTIVIDAD 4.3) Opcional: Cambia la linea abajo de un comentario a codigo funcional a ver si el variable letrasReveladas contiene el numero correcto. Debes borrar esta linea despues de usarla.
              // Console.WriteLine("letrasReveladas = " + letrasReveladas);
            }
          }

          // HACER (ACTIVIDAD 5.1): Cambia el variable gano a true si el numero de letras reveladas es equivalente al numero de letras en la palabra clave.
          // CONSEJO: Usa una declaracion de if usando los variables letrasReveladas y numeroDeLetras, y tambien usando y simbolo ==.
          if (letrasReveladas == numeroDeLetras)
          {
            gano = true;
          }
        }
        else 
        {
          // La adivinacion fue incorrecta, entonces agregue la letra a la lista de adivinaciones incorrectas, y dile al jugador que adivino incorrectamente. 
          adivsIncorrectas.Add(adiv);

          Console.WriteLine($"No, '{adiv}' no esta en la palabra!");

          // HACER (ACTIVIDAD 4.4) Reduce el numero de vidas por 1. Despues, dile al jugador cuantas vidas le quedan. Por ejemplo, "Te quedan 4 vidas".
          // CONSEJO: usa el variable vias. No se te olvide usar Console.WriteLine y el + operador.
          vidas = vidas - 1;

          Console.WriteLine("Te quedan " + vidas + " vidas.");


        }

        // Imprime la palabra y todas la adivinaciones.
        Console.WriteLine(mostrarAJugador.ToString());
      }


      // HACER (ACTIVIDAD 5.2): Si el jugador ha ganado el juego, usa Console.WriteLine para imprimir "!Ganaste!" Si no ha ganado, imprime la respuesta correcta. Por ejemplo, si el jugador no adivino "Hola" correctamenta, imprime "!Perdiste! La respuesta fue 'Hola"."
      // CONSEJO: Usa una declaracion de if-else, y usa el variable gano. La respuesta correcta esta archivada en el variable palabra, entonces asegurate que lo usas.
      if (gano == true)
      {
        Console.WriteLine("!Ganaste!");
      }
      else
      {
        Console.WriteLine("!Perdiste! La respuesta fue '" + palabra + "'.");
      }



      Console.WriteLine("Presiona 'run' en la parte suprior de la pantalla para jugar otra vez.");
    }
  }
}

// HACER: Borra la linea de #pragma cuando termines la actividad.
#pragma warning restore 162, 168, 219using System;