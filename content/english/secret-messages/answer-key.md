---
title: "C++ Secret Messages - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Las siguientes 5 líneas son necesarias para todas las actividades.

```
#include <iostream>
using namespace std;

int main() {
  
  return 0;
}
```

### Actividad 1

```
cout << "Hola programador!" << endl;
```

### Actividad 2

```
  string nombre;
  cin >> nombre;
  cout << "Hola " << nombre << endl;
```

### Actividad 3

```
string nombre;
cin >> nombre;
for(int i=0; i<nombre.size(); i++){
  cout << nombre[i] << endl;
}
```

### Actividad 4

```
int numero;
cin >> numero;
if(numero == 1){
  cout << "Encriptar un mensaje" << endl;
}else{
  cout << "Desencriptar un mensaje" << endl;
}
```

### Actividad 5

```
#include <iostream>
using namespace std;

int main() {
  string clave;
  string nombre;
  cin >> clave;
  cin >> nombre;
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
  cout << "Mensaje encriptado: " << endl;
  cout << nombre << endl;
  return 0;
}
```


### Actividad 6

```
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

void desencriptar (string &nombre, string clave){
  int contador = 0;
  for(int i=0; i<nombre.size(); i++){
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

int main() {
  string clave;
  string nombre;
  int numero;
  cin >> numero;
  cin >> clave;
  cin >> nombre;
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
```



### Actividad 7

```
#include <iostream>
using namespace std;

void encriptar (string &nombre, string clave){
  int contador = 0;
  for(int i=0; i<nombre.size(); i++){
    if(nombre[i]!=' '){
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
    if(nombre[i]!=' '){
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
  cin >> numero;
  cin >> clave;
  getline(cin, nombre);
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
```
