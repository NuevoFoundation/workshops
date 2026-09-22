```markdown
---
title: "C++ Messages Secrets - Corrigé"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Les 5 lignes suivantes sont nécessaires pour toutes les activités.

```
#include <iostream>
using namespace std;

int main() {
  
  return 0;
}
```

### Activité 1

```
cout << "Bonjour programmeur !" << endl;
```

### Activité 2

```
  string name;
  cin >> name;
  cout << "Bonjour " << name << endl;
```

### Activité 3

```
string name;
cin >> name;
for(int i=0; i<name.size(); i++){
  cout << name[i] << endl;
}
```

### Activité 4

```
int number;
cin >> number;
if(number == 1){
  cout << "Crypter un message" << endl;
}else{
  cout << "Décrypter un message" << endl;
}
```

### Activité 5

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
  cout << "Message crypté : " << endl;
  cout << name << endl;
  return 0;
}
```


### Activité 6

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
      cout << "Message crypté : " << endl;
      encrypt(name, code);
      cout << name << endl;
  }else{
    cout << "Message décrypté : " << endl;
    decrypt(name, code);
    cout << name << endl;
  }
  return 0;
}
```



### Activité 7

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
      cout << "Message crypté : " << endl;
      encrypt(name, code);
      cout << name << endl;
  }else{
    cout << "Message décrypté : " << endl;
    decrypt(name, code);
    cout << name << endl;
  }
  return 0;
}
```
```