## Part 1. A Quick Introduction 
1. Line 9 prints `result` from adding `num1` and `num2` passed in by parameter. In this case "values added: 20". 
2. Line 13 prints the final number resulted from adding `num1` and `num2` passed into the function. In this case "final result: 20". 
3. Line 9 will print the value of `result`, "values added: 20". 
4. Line 13 will return an error, because the keyword of result is `let` therefore `result` will only be availble or readable by the program within the scope of the if statement when `add` is true. Since line 13 is out of this scope an error occurs. 
5. Line 9 will return an error, because `const` creates `result` as a variable that cannot be reassigned. Therefore when we try to run line 7, an error occurs, and line 9 will therefore return an error. 
6. Line 13 wouldn't run because line 9 will terminate the program with an error. It would either way return an error since `const` makes `result` accessabile within the block of the if true statment, outside of that it won't be accessible to be printed out.  
