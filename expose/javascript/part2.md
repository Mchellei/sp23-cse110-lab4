## Part 2. A Little More of a Challenge...

1. Line 12 will print out the current value of `i`, which in this case is "3". 
2. Line 13 will print out the current value of `discountedPrice` or the value it stores after the last iteration of the loop, which in this case is "150".
3. Line 14 will print out the current value of `finalPrice`, after the last iteration of the loop. In this case, is "150". 
4. This function will return the array `discounted` which contains the values of `prices` after `discount` is applied. 
5. This function will return an error at line 12 because, the keyword for `i` is `let`, so the variable `i` will only be accessible within the for loop. Therefore line 12, outside the scope of the foor loop causes an error. 
6. Line 13 will produce a similar error as line 12 from question 5. Since `let` is the keyword for `discountedPrice`, this variable won't be accessible outside the scope of the for loop. The program will recognize `discountedPrice` as a variable never defined, causing an error at line 13. 
7. Line 14 will print vale of `finalPrice` after the last iteration, "150". 
8. This function should return `discounted`. But the program won't actually be able to utilize whatever it has returned since, the `discounted` keyword is `let`, making it only accessible within the function `discountPrices`. 
9. Line 11 will cause an error since `i` keyword is `let` it wont be accessible outside the scope of the for loop. 
10. Line 12 will print the value of `length`, "3". 
11. This function should return array `discounted`, but again won't be accessible outside the loop since `const` limits the array within the function. 
12.  
    * A. We can access the name by using notation `student.name`. 
    * B. We can use square brackets to access the Grad Year property : `student['Grad Year']`
    * C. We can call the function for the greeting with: `student.greeting.call(); `
    * D. We can access the name of the the Favorite Teacher property with `student['Favorite Teacher'].name`
    * E. We can access index zero in the array with `student.courseLoad[0]`

13. 
    * A. Output: '35'. Since integers map to exact string representation. Plus sign also indicate string concatenation. 
    * B. Output: 1. Since Javacript converts '3' to integer when performing subtraction, which is not possible with 2 strings. 
    * C. Output: 3. Since both 3 and null are integers (null is equal to 0), 3+0 = 3.
    * D. Output: '3null', null is converted to string, with the plus sign. 
    * E. Output: 4, true maps to 1 and 3 is an integer, therefore 3 + 1 = 4. 
    * F. Output: 0, false maps to 0 and null maps to 0, therefore 0 + 0 = 0.
    * G. Output: '3undefined', integers map to their exact string representation, javascript performs concatenation.
    * H. Output: NaN, since it is the subtraction operator, Javascript will try to convert both input to numbers, which undefined is NaN, therefor the result is NaN.

14. 
    * A. Output: true. Javascript maps the string to its integer representation, evaluates true since 2 > 1. 
    * B. Output: false. Javascript maps the string to its integer representation, rvaluates false since 2 > 12. 
    * C. Output: true. Javascript maps the string to its integer representation, evaluates true since 2 = 2. 
    * D. Output: false, because of strict equality, Javascript checks both the value and type of the operands. In this case '2' does not have same type as 2, so false.
    * E. Output: false, true maps to 1, therefore it's not equal to 2, false. 
    * F. Output: true, since `Boolean(2)` is true, for 2 is not a falsy value. Then true is stricty equivalent to Boolean(2), type and value is equal. 

15. The == operator, or the loose equality checks if the values of the input are equal, ignoring their types. So different types of input with same value will be evaluated to true. Which the ====, or the strict equality checks if both the values and the types are the same. Therefore, there is no type conversion. 
17. The result of the modifyArray function will be the original array but each entry is double its original value. In this case, "[2, 4, 6]". When the modifyArray is called, the original array and function doSomething is passed as parameters. A new array, `newArr` is created. The for loop goes through each entry of passed in array, and push value returned by doSomething, which doubles the passed in value. After all array index is visited, the new array is returned by modifyArray. 
19. This code prints out 1 4 3 2. The prints without the delay are printed first followed by, 0 delay and 1 second delay by `setTimeOut`. 