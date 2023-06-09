/*

# Unit Testing
    * (FROM GOOGLE) UNIT TESTING is a level of software testing where individual units/ components of a software are tested.  A unit is the smallest testable part of any software. It usually has one or a few inputs and usually a single output
    
        * Why Test?
            * Essential for programs being worked on by many developers at once as it allows a developer
            to add to the existing code and then run the tests to make sure what they have added to the
            program has not caused another part of the program to fail.
            
            * Approaching a program with testing in mind creates an stronger overall program as you are approaching each individual section with tests.  In practice this produces fewer bugs and better thought out code.
            
                * TDD (Test Driven Development, aka Red Green testing)
                    * Test Driven Development is a method in writing code that requires you to write your test before writing your function. 
                    * At first the test will fail producing a "red" failed test in the console.
                    * As you develop the function, you are shooting for all "green" in the console meaning all your tests have passed.
*/

function sum(num1, num2) {
  return num1 + num2;
}

// expected, actual
const actual = sum(10, 10);
const expected = 20;

if (actual !== expected) {
  throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`);
} else {
  console.log(`TEST PASSED: ${expected} === ${actual}`);
}
