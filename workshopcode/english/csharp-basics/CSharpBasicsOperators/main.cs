using System;

class Program {
  public static void Main (string[] args) {
	// TODO: Run once and note the resulting output.  Then change each line and run again.
	int add = 9876 + 5432;        //change the numbers
	int subtract = 9876 - 5432;   //change the numbers
	int multiply = 9876 * 5432;   //change the numbers
	int divide1 = 9876/5431;      //change the numbers
	double divide2 = 9876/5431.0; //change the numbers
	int modulus = 9876 % 5432;    //change the numbers
	String concat = "Hello" + " " + "World"; //change the phrase
	
	Console.WriteLine("adding: " + add);
	Console.WriteLine("subtracting: " + subtract);
	Console.WriteLine("multiplying: " + multiply);
	Console.WriteLine("dividing integers: " + divide1);
	Console.WriteLine("dividing doubles: " + divide2);
	Console.WriteLine("modulus:  " + modulus);
	Console.WriteLine("concatting Strings: " + concat);
  }
}