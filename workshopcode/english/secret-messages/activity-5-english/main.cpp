#include <iostream>
using namespace std;

int main() {
  string name;

 //1. Declare a string variable to store the keyword. Named it code

  cin >> name;

  //2. Receive that keyword from the console using cin

  //3. Declare an integer variable with the initial value 0, to iterate through the keyword 

  for(int i=0; i<name.size(); i++){
    //4. Create another integer variable name sum, whose value will be the value of name at position i (name[i]) plus the character value at position counter code[counter]. To that sum value we will substract the lower letter 'a'.
    
    //5. Using an if statement, check if the sum is greater than 'z'.  If it is greater, subtract 25 to the sum
    
    //6. Assign name[i] the value of sum

    //7. Increase counter in 1.  Counter is used to know where we are currently within the code variable

    //8. Check with another if condition if counter is greater or equals to code.size(). If that turns out true reset counter to zero

  }
  cout << "Encrypted message: " << endl;
  //9. Print to the console the value of the 'name' variable.

  return 0;
}