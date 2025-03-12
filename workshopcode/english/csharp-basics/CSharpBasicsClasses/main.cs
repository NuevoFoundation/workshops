using System;

class Program {
  public static void Main (string[] args) {
	  
    Bird test = new Bird("duck", "Patrick", "swimming", 12, true);

    if (test.getSpecies() == "duck" && 
      test.getName() == "Patrick" && 
      test.getHobby() == "swimming" && 
      test.getAge() == 12 && 
      test.getLoveMusic()) {
        Console.WriteLine("Congradulations! You correctly implemented the Bird Class :)");
    } else {
        Console.WriteLine("Something is still not quite right!");
    }
  }
}