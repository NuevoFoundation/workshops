using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// TODO: Delete the #pragma line of code when the activity is done.
#pragma warning disable 162, 168, 219
namespace NuevoFoundation
{
  class GuessTheWordGame
  {
    static void Main(string[] args)
    {
      // TODO (ACTIVITY 1): Print the sentence "Welcome to C# GuessTheWord!" to the console.
      Console.WriteLine("Welcome to C# GuessTheWord!");

      // TODO (ACTIVITY 2): Add at least 3 more words to the word bank for guessing.
      // HINT: Add the strings between the { } symbols. Separate each string with a comma.
      string[] wordBank = { "Hello", "World", "Nuevo", "Foundation", "Hola" };

      // Set up a random number generator. Do not worry too much about what this means.
      var random = new Random((int)DateTime.Now.Ticks);

      // Picks a random word from the word bank above, using the random number generator.
      var wordToGuess = wordBank[random.Next(0, wordBank.Length)];
      var wordToGuessUppercase = wordToGuess.ToUpper();

      // HINT (ACTIVITY 3):
      // Declare a variable called 'lives', which stores how many incorrect guesses the player can make before the game is over.
      // Then, print out how many lives the player has at the start of the game.
      var lives = 5;
      Console.WriteLine("You have " + lives + " lives left.");

      // Gets the number of letters the word to guess has.
      var numberOfLetters = wordToGuess.Length;

      // TODO (ACTIVITY 3.1): Tell the player how many letters the word to guess has. For example, if the word has 5 letters, print to console: 'The word has 5 letters'.
      // HINT: Use Console.WriteLine(), and use + to insert the numberOfLetters variable into a string.
      Console.WriteLine("The word has " + numberOfLetters + " letters.");

      // Start off the GuessTheWord game with blanks _____. As the player guesses letters correctly, each _ will be replaced with the correctly guessed letter.
      var displayToPlayer = new StringBuilder(numberOfLetters);
      for (var i = 0; i < numberOfLetters; i++)
      {
        displayToPlayer.Append('_');
      }

      // Set up lists to store the guessed letters that were correct and incorrect. We can cover lists in a future discussion.
      var correctGuesses = new List<char>();
      var incorrectGuesses = new List<char>();

      // TODO (ACTIVITY 3.2): Declare two variables:
      // - lettersRevealed: an integer that stores the number of letters that have been revealed to the player. Initialize to 0.
      // - won: a boolean that stores whether the player has won the game or not. Initialize to false.
      var lettersRevealed = 0;
      var won = false;

      // These variables store the guess that the player makes.
      string input;
      char guess;

      // Continue the game as long as the player has not yet won the game, and they have at least one life remaining.
      // TODO (ACTIVITY 6): replace the for-loop with a while-loop, with the condition that:
      // - the variable won must be false, AND (&&)
      // - the variable lives must be strictly larger than 0.
      while (won == false && lives > 0)
      {
        Console.WriteLine("Guess a letter:");

        // TODO (ACTIVITY 4.2): Replace the string "Change me!" with code to read input from the user.
        input = Console.ReadLine();

        // Optional detail: if the player types in more than one letter, we only consider the first one.
        guess = input.ToUpper()[0];

        // If the player repeats a previously correct guess, remind the player that they have already guessed the letter correctly.
        if (correctGuesses.Contains(guess)) 
        {
          Console.WriteLine($"You've already tried '{guess}', and it was correct!");
          continue;
        }
        
        // If the player repeats a previously incorrect guess, remind the player that they have already guessed the letter incorrectly.
        if (incorrectGuesses.Contains(guess)) 
        {
          Console.WriteLine($"You've already tried '{guess}', and it was wrong!");
          continue;
        }

        // Check if the guessed letter is in the word to guess.
        if (wordToGuessUppercase.Contains(guess)) 
        {
          // If the player guessed a letter that is in the word to guess, update the appropriate blanks _ with the correctly guessed letter.
          correctGuesses.Add(guess);

          for (int i = 0; i < numberOfLetters; i++)
          {
            if (wordToGuessUppercase[i] == guess)
            {
              displayToPlayer[i] = wordToGuess[i];

              // TODO (ACTIVITY 4.3): Increase the number of letters revealed by 1.
              // HINT: use the lettersRevealed variable.
              lettersRevealed = lettersRevealed + 1;

              // (ACTIVITY 4.3) Optional: uncomment the line below to check if the lettersRevealed variable stores the correct value. You should delete this once you have checked the lettersRevealed variable is used correctly.
              // Console.WriteLine("lettersRevealed = " + lettersRevealed);
            }
          }

          // TODO (ACTIVITY 5.1): Set the variable won to true if the number of letters revealed is equal to the length of the word to guess.
          // HINT: Use an if-statement, using the variables lettersRevealed and numberOfLetters, and also use the == symbol.
          if (lettersRevealed == numberOfLetters)
          {
            won = true;
          }

        }
        else 
        {
          // The guess was incorrect, so add the letter to the list of incorrect guesses, and tell the player that they guessed incorrectly.
          incorrectGuesses.Add(guess);

          Console.WriteLine($"Nope, there's no '{guess}' in the word!");

          // TODO (ACTIVITY 4.4) reduce the number of lives by 1. Then, tell the player how many lives they have left. For example, "You have 4 lives left."
          // HINT: use the variable lives. Don't forget to use Console.WriteLine and the + operator.
          lives = lives - 1;
        }

        // Print the word and all the guesses made so far.
        Console.WriteLine(displayToPlayer.ToString());
      }


      // TODO (ACTIVITY 5.2): If the player has won the game, use Console.WriteLine to print "You won!". Otherwise, print out the correct answer. For example, if the player could not guess the correct answer "Hello", print out "You lost! The answer was 'Hello'.", 
      // HINT: Use an if-else statement, and use the variable won. The correct answer is stored in the wordToGuess variable, so make sure you use it.
      if (won)
      {
        Console.WriteLine("You won!");
      }
      else
      {
        Console.WriteLine("You lost! The answer was '" + wordToGuess + "'.");
      }

      Console.WriteLine("Press 'run' on the top of the screen to play again.");
    }
  }
}

// TODO: Delete the #pragma line of code when the activity is done.
#pragma warning restore 162, 168, 219