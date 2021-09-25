//Lesson 2: An introduction to variables
//Variables store data and allow you to manipulate it.
/*
 *   2.1) Declaring a variable (within a function) and initialization
 *        Variables can be declared within a scope.
 *        Scopes limit where you can use the variable.
 *        The char data type holds a single byte of data.
 */
    void run() 
    {
        char variable; //declare a single char
        char a, b, c; //declare multiple chars on the same line
    }

/*
    //This code doesn't run! variable is not in the scope
    void cantRun() 
    {
        variable = 0;
    }
*/

    //Initializing a variable
    void initVariable() 
    {
        char c = 0; //Initializes c to 0
        char x = 0, y = 1, z = 2; //declares and initializes x, y, z on 1 line
    }

    //Note: uninitialized variables have undefined values! Your program might
    //      not function properly if you use an uninitialized variable.

    //You can set variables to values using the '=' sign:
    void setVariable() {
        char a, b;
    }

/*
 * 2.2) Declaring a global variable
 *      Global variables can be accessed in any scope after it is declared
 *      (in the same file).
 *      Using a global variable can "clog" up the names available.
 */
    char global;

    void useGlobalVariable() {
        global = 0;
    }

/*
 * 2.3) Using variables
 *      You can use variables to work with data. Functions can use variables passed
 *      in via arguments.
 */
    char useArgs(char a) {

    }
