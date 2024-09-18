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

//1. Declare a void function to decrypt the content of the 'name' variable

//2. Copy the content of the encrypt function into that new function

//3. In the variable sum, instead of adding, subtract code[counter] to name[i] and add 'a' instead of subtracting it

//4. Modify the condition to check if the sum is smaller than 'a' and if that's the case add 25 to the sum variable
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