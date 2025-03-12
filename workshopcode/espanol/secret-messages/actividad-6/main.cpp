#include <iostream>
using namespace std;

void encriptar (string &nombre, string clave){
  int contador = 0;
  for(int i=0; i<nombre.size(); i++){
    int suma = nombre[i]+clave[contador]-'a';
    if(suma > 'z'){
     suma-=25;
    }
    nombre[i]=suma;
    contador+=1;
    if(contador >= clave.size()){
      contador=0;
    }
  }
}

//1. Declarar una función void para desencriptar el nombre

//2. Copiar el contenido de la funcion encriptar() dentro de esta nueva función

//3. En la variable suma, en vez de sumar, realizar una resta del nombre[i] - clave[contador] y sumar un caracter 'a' en vez de restar.

//4. Cambiar la condición para que si la variable suma es menor a 'a' (no  mayor a 'z'), sumar 25 a la variable suma (no restar)

int main() {
  string clave;
  string nombre;
  int numero;
  cin >> nombre;
  cin >> numero;
  cin >> clave;
  if(numero == 1){
      cout << "Mensaje encriptado: " << endl;
      //5. Llamar a la funcion encriptar, y dentro de los parentesis poner las varibales nombre y clave

      cout << nombre << endl;
  }else{
    cout << "Mensaje desencriptado: " << endl;
    //6. Llamar a la funcion desencriptar, y dentro de los parentesis poner las varibales nombre y clave

    cout << nombre << endl;
  }
  return 0;
}