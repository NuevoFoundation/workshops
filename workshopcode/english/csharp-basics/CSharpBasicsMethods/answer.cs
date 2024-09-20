class answer {

	// here are two ways to solve this challenge
	public static int pyramidCount1(int height) {
	  int sum = 0;
	  int level = height;
	  
	  while (level > 0 ) {
		sum = sum + level * level;
		level = level - 1;
	  }
	  return sum;
	}
	
	public static int pyramidCount2(int height) {
		int sum = 0;
		int level = 1;
		
		while (level <= height ) {
			sum = sum + level * level;
			level = level + 1;
		}
		return sum;
	}
}
