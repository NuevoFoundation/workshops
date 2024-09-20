using System;

class Tester {
  public static void test() {
    if(Program.pyramidCount(1) == 1 && 
        Program.pyramidCount(2) == 5 && 
        Program.pyramidCount(3) == 14 && 
        Program.pyramidCount(4) == 30 && 
        Program.pyramidCount(24) == 4900 && 
        Program.pyramidCount(88) == 231044) 
    {
          Console.WriteLine("Congradulations! Challenge Solved!");
    } 
    else 
    {
          Console.WriteLine("Challenge failed!");
    }
  }
}