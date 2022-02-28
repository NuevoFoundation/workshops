---
title: "C++ Secret Messages - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: true
hidden: true
---

The following 5 lines are needed for all the activities.

```
#include <iostream>
using namespace std;

int main() {
  
  return 0;
}
```

### Activity 1

```
cout << "Hello programmer!" << endl;
```

### Activity 2

```
  string name;
  cin >> name;
  cout << "Hello :)" << name << endl;
```

### Activity 3

```
string name;
cin >> name;
for(int i=0; i<name.size(); i++){
  cout << name[i] << endl;
}
```

### Activity 4

```
int number;
cin >> number;
if(number == 1){
  cout << "Encrypt a message" << endl;
}else{
  cout << "Decrypt a message" << endl;
}
```

### Activity 5

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


### Activity 6

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



### Activity 7

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
