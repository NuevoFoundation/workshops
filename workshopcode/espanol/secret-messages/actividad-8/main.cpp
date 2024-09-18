#include <iostream>
using namespace std;

void encriptar (string &nombre, string clave){
  int contador = 0;
  for(int i=0; i<nombre.size(); i++){
    if(nombre[i]>='a' and nombre[i] <='z'){
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
}

void desencriptar (string &nombre, string clave){
  int contador = 0;
  for(int i=0; i<nombre.size(); i++){
    if(nombre[i]>='a' and nombre[i] <='z'){
      int suma = nombre[i]-clave[contador]+'a';
      if(suma < 'a'){
      suma+=25;
      }
      nombre[i]=suma;
      contador+=1;
      if(contador >= clave.size()){
        contador=0;
      }
    }
  }
}

int main() {
  string clave;
  string nombre;
  int numero;
  getline(cin, nombre);
  cin >> numero;
  cin >> clave;
  if(numero == 1){
      cout << "Mensaje encriptado: " << endl;
      encriptar(nombre, clave);
      cout << nombre << endl;
  }else{
    cout << "Mensaje desencriptado: " << endl;
    desencriptar(nombre, clave);
    cout << nombre << endl;
  }
  return 0;
}
