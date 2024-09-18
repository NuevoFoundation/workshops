#include <iostream>
using namespace std;

void encrypt (string &name, string code){
  int counter = 0;
  for(int i=0; i<name.size(); i++){
    if(name[i]>='a' && name[i] <='z'){
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
    if(name[i]>='a' && name[i] <='z'){
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
  getline(cin, name);
  cin >> number;
  cin >> code;
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