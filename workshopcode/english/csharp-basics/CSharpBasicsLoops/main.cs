using System;

class Program {
  public static void Main (string[] args) {
    
	int total = 0;
    int num = 1;

	// here is a while loop
	while(num <= 100){
        total = total + num;
        num = num + 1;
    }
    Console.WriteLine("Answer calculated in a while loop: " + total);

    int myTotal = 0;
    // TODO: write it out in for loop, it is ok to reuse the total and num variables

    Console.WriteLine("Answer calculated in a for loop: " + myTotal);
  }
}