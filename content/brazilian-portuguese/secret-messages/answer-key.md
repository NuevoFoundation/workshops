---
title: "Mensagens secretas C++ - chave de resposta"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

As 5 linhas a seguir são necessárias para todas as atividades.

```
#include <iostream>
using namespace std;

int main() {
  
  return 0;
}
```

### Atividade 1

```
cout << "Olá desenvolvedor!" << endl;
```

### Atividade 2

```
  string nome;
  cin >> nome;
  cout << "Olá " << nome << endl;
```

### Atividade 3

```
string nome;
cin >> nome;
for(int i=0; i<nome.size(); i++){
  cout << nome[i] << endl;
}
```

### Atividade 4

```
int number;
cin >> number;
if(number == 1){
  cout << "Encrypt a message" << endl;
}else{
  cout << "Decrypt a message" << endl;
}
```

### Atividade 5

```
#include <iostream>
using namespace std;

int main() {
  string code;
  string name;
  cin >> code;
  cin >> name;
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    int sum = name[i]+code[counter]-'a';
    if(sum > 'z'){
     sum-=25;
    }
    name[i]=sum;
    counter+=1;
    if(counter >= code.size()){
      counter=0;
    }
  }
  cout << "Encrypted message: " << endl;
  cout << name << endl;
  return 0;
}
```


### Atividade 6

```
#include <iostream>
using namespace std;

void encrypt (string &name, string code){
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    int sum = name[i]+code[counter]-'a';
    if(sum > 'z'){
     sum-=25;
    }
    name[i]=sum;
    counter+=1;
    if(counter >= code.size()){
      counter=0;
    }
  }
}

void decrypt (string &name, string code){
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    int sum = name[i]-code[counter]+'a';
    if(sum < 'a'){
     sum+=25;
    }
    name[i]=sum;
    counter+=1;
    if(counter >= code.size()){
      counter=0;
    }
  }
}

int main() {
  string code;
  string name;
  int number;
  cin >> number;
  cin >> code;
  cin >> name;
  if(number == 1){
      cout << "Encrypted message: " << endl;
      encrypt(name, code);
      cout << name << endl;
  }else{
    cout << "Decrypted message: " << endl;
    decrypt(name, code);
    cout << name << endl;
  }
  return 0;
}
```



### Atividade 7

```
#include <iostream>
using namespace std;

void encrypt (string &name, string code){
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    if(name[i]!=' '){
      int sum = name[i]+code[counter]-'a';
      if(sum > 'z'){
      sum-=25;
      }
      name[i]=sum;
      counter+=1;
      if(counter >= code.size()){
        counter=0;
      }
    }
  }
}

void decrypt (string &name, string code){
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    if(name[i]!=' '){
      int sum = name[i]-code[counter]+'a';
      if(sum < 'a'){
      sum+=25;
      }
      name[i]=sum;
      counter+=1;
      if(counter >= code.size()){
        counter=0;
      }
    }
  }
}

int main() {
  string code;
  string name;
  int number;
  cin >> number;
  cin >> code;
  getline(cin, name);
  if(number == 1){
      cout << "Encrypted message: " << endl;
      encrypt(name, code);
      cout << name << endl;
  }else{
    cout << "Decrypted message: " << endl;
    decrypt(name, code);
    cout << name << endl;
  }
  return 0;
}
```
