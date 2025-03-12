using System;

class Program {
  public static void Main (string[] args) {
    // TODO: Run once and note the output.  Then change each line and run again.
    bool equals = (333 == 333); //change the numbers
    bool notEquals = (333 != 333); //change the numbers
    bool greater = (333 > 444); //change numbers
    bool lessthan = (333 < 444); //change numbers
    bool greaterEqual = (333 >= 444); //change numbers
    bool lessEqual = (333 <= 444); //change numbers

    Console.WriteLine("Equals: " + equals);
    Console.WriteLine("Not Equals: " + notEquals);
    Console.WriteLine("Greater Than: " + greater);
    Console.WriteLine("Less Than: " + lessthan);
    Console.WriteLine("Great Than or Equal to: " + greaterEqual);
    Console.WriteLine("Less Than or Equal to: " + lessEqual);
  }
}