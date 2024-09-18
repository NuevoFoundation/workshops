#include <iostream>
using namespace std;

int main() {
  string nombre;

 //1. Declarar una variable tipo string para guardar la palabra clave

  cin >> nombre;

  //2. Ingresar la variable de la clave por consola con la instrucción cin

  //3. Declarar una variable tipo int con el valor de 0, para luego recorrer la palabra clave.

  for(int i=0; i<nombre.size(); i++){
    //4. Crear una variable tipo int que sea igual a la suma del caracter nombre[i] y el caracter clave[contador]. A esta suma, restar una letra minúscula 'a'.
    
    //5. Crear una instrucción if, por si la variable de la suma de caracteres corresponde a un caracter mayor a 'z'. Si es así, restarle 25 a la variable de la suma.
    
    //6. Igualar el caracter nombre[i] a la variable de la suma

    //7. Sumarle 1 al contador que llevamos de la palabra clave.

    //8. Usar una condición if, si el contador de la palabra clave es mayor al largo del string clave, la variable int del contador igualarla a 0.

  }
  cout << "Mensaje encriptado: " << endl;
  //9. Imprimir por un consola la variable nombre.

  return 0;
}