public class Bird {
  // your code goes here
  private string name;
  private string species;
  private string hobby;
  private int age;
  private bool loveMusic;
  
  public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput) {
    species = speciesInput;
    name = nameInput;
    hobby = hobbyInput;
    age = ageInput;
    loveMusic = loveMusicInput;    
  }

  public string getName() {return name;}
  public string getSpecies() {return species;}
  public string getHobby() {return hobby;}
  public int getAge() {return age;}
  public bool getLoveMusic() {return loveMusic;}
}