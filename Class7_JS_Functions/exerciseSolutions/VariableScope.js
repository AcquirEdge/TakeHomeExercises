// VariableScope.js

// Exercise 1: Write a function that modifies a global variable by adding 10 to it. 
// Observe how this modification affects the global scope.

  let globalVar1 = 0;
  function modifyVariables() {
      globalVar1 += 10;
  }


// Sample invocations:
// console.log(globalVar1); // Expected output: 0
// modifyVariables(); 
// console.log(globalVar1); // Expected output: 10
// modifyVariables(); 
// console.log(globalVar1); // Expected output: 20

// Exercise 2: Write a function that tries to modify a global variable. 
// Declare another variable with the same name within the function and observe the output.

  let globalVar2 = 0;
  function changeGlobalVar() {
    let globalVar2 = globalVar2
    globalVar2 += 10;
  }

// Sample invocations:
// console.log(globalVar2); // Expected output: 0
// changeGlobalVar(); 
// console.log(globalVar2); // Expected output: 0

// Exercise 3: Write a function that declares a variable within its scope and attempts to log it after the function has been called.

  function createLocalVar() {
      let localVar = 10;
  }


// Sample invocations:
// createLocalVar();
// console.log(localVar); // Expected output: Error: localVar is not defined

/*
LET VS VAR
*/

// Exercise 1: Write a function that declares a variable using 'let' within a block scope (e.g. if statement, loop) and observe its visibility outside the block.
function blockScopeLet() {
    if (true) {
        let letVar = "Hello, I am let!";
    }
    return letVar;
}
/*
Sample invocations:
console.log(blockScopeLet()); // Expected output: Error: letVar is not defined
*/

// Exercise 2: Write a function that declares a variable using 'var' within a block scope (e.g. if statement, loop) and observe its visibility outside the block.
function hoistVar() {
    if (true) {
        var varVar = "Hello, I am var!";
    }
    return varVar;
}
/*
Sample invocations:
console.log(hoistVar()); // Expected output: "Hello, I am var!"
*/

