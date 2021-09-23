//Lesson 1: An introduction to functions

// 1.1) A void function.
    void function1() {
    }

// 1.2) A function returning int
    int function2() 
    {
    }

// 1.3) A function declared but NOT defined immediately.
    char function3();

    char function3()
    {}

// 1.4) The main function: Calling a function
//      The functions will be executed in the order: function1, function2, function3
    int main() {
        function1();
        function2();
        function3();
    }

