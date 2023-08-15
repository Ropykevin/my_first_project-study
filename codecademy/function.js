//without functions
const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 = width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 = width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 = width3 * height3;

//with functions
function calculateArea(width, height) {
    console.log(width * height)

}
calculateArea(10, 6)
calculateArea(4, 9)
calculateArea(10, 10)

/*The function keyword.
The name of the function, or its identifier, followed by parentheses.
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:*/
greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}
/*1.Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder(). 
2 In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
Let’s create another function that prints a useful Spanish travel phrase to the console.

Using a function declaration, create a function called greetInSpanish().
Let’s create another function that prints a useful Spanish travel phrase to the console.

Using a function declaration, create a function called greetInSpanish().*/
function getReminder() {
    console.log('water the plants')
}
function greetInSpanish() {
    console.log('Buenas tardes.'
    )
}
//Calling a Function
//To call a function in your code, you type the function name followed by parentheses.

/*1.
Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:

Define a function called sayThanks() as a function declaration.
In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.' */
//2.Call sayThanks() to view the thank you message in the console.
/*3.
Functions can be called as many times as you need them.
Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times. */
//Parameters and Arguments
/*--The sayThanks() function works well, but let’s add the customer’s name in the message.
Add a parameter called name to the function declaration for sayThanks().-
2:With name as a parameter, it can be used as a variable in the function body of sayThanks().
Using name and string concatenation, change the thank you message into the following:
'Thank you for your purchase '+ name + '! We appreciate your business.'
Copy and paste the above message into your code.
A customer named Cole just purchased something from your online store. 
Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.*/
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.'

    )
}
sayThanks()
sayThanks()
sayThanks()
sayThanks()
sayThanks('Cole')
//Default Parameters
//asigns a default value
function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
//Tasks
/*1.
The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.
Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, 
let’s assign default values to the parameters in makeShoppingList(). */
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
//Return
//functions result
/*When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. 
1.
Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!

Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
2.
Let’s compute the number of monitors by multiplying rows and columns and then returning the value.

In the function body of the function you just wrote, use the return keyword to return rows * columns.
3.
Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.

Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking moni
4.
To check that the function worked properly, log numOfMonitors to the console.*/
function monitorCount(rows, columns) {
    return rows * columns
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)
  //Helper Functions
//returning value of a function inside another function
/*1.
In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.
Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.
Checkpoint 2 Passed
Stuck? Get a hint
2.
Time to add some code to the function body of costOfMonitors to calculate the total cost.
Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.
Checkpoint 3 Passed
Stuck? Get a hint
3.
We should save the cost to a variable.
Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
Checkpoint 4 Passed
Stuck? Get a hint
4.
To check that the function worked properly, log totalCost to the console. */
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
    return monitorCount(rows,columns)*200
    
  }
  const totalCost =costOfMonitors(5,4)
  console.log (totalCost)
//Function Expressions
/**Function Expressions
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
Consider the following function expression:
defining a function expression
To declare a function expression:
Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.
Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.
To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.
variableName(argument1, argument2)
Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.
Let’s define a new function using a function expression.
 
1.
Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:
Create a variable named plantNeedsWater using the const variable keyword.
Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
Checkpoint 2 Passed
Stuck? Get a hint
2.
Now we need to add some code to the function body of plantNeedsWater():
In the function body add an if conditional that checks day === 'Wednesday'.
If the conditional is truthy, inside the if code block, use the return keyword to return true.
Checkpoint 3 Passed
Stuck? Get a hint
3.
On days that aren’t 'Wednesday', plantNeedsWater() should return false:
Add an else statement after the if statement.
Inside the else statement use the return keyword to return false.
Checkpoint 4 Passed
Stuck? Get a hint
4.
Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
Checkpoint 5 Passed
Stuck? Get a hint
5.
Let’s check that plantNeedsWater() returned the expected value.
Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.*/  
const plantNeedsWater= function(day){
    if(day==='Wednesday'){
    return true;
    } else {
      return false;
    }
    };
   plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'))
  //Arrow Functions
  /**ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.
Instructions
1.
Change plantNeedsWater() to use arrow function syntax. */
const plantNeedsWaters = (day) =>{
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  // declaration = ()=>{}
  /*Concise Body Arrow Functions
JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:
Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
showcasing how arrow functions parameters differ for different amounts of parameters
A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
comparing single line and multiline arrow functions
So if we have a function:
const squareNum = (num) => {
  return num * num;
};
We can refactor the function to:
const squareNum = num => num * num;
Notice the following changes:
The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.
Instructions
1.
Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line. */