/*1.
At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
Checkpoint 2 Passed
2.
Below the city variable, write a function named logCitySkyline.
Checkpoint 3 Passed
Stuck? Get a hint
3.
Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
Checkpoint 4 Passed
Stuck? Get a hint
4.
Inside the function, include a return statement like this:
return 'The stars over the ' + skyscraper + ' in ' + city;
Checkpoint 5 Passed
Stuck? Get a hint
5.
Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.
You’ll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block. */
const city = 'New York City'
function logCitySkyline() {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
} console.log(logCitySkyline())
//Global Scope
// variables are declared outside of blocks.
const color = 'blue';
const returnSkyColor = () => {
    return color; // blue 
};
console.log(returnSkyColor()); // blue
/*1.
At the top of main.js, write three global variables:
Name the first variable satellite and set it equal to 'The Moon'.
Name the second variable galaxy and set it equal to 'The Milky Way'.
Name the third variable stars and set it equal to 'North Star'.
2.
Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:
return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
3.
Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.
You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file. */
let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())
//Block Scope (local variables)
//variables inside a block
//only function inside a block
/*1.
In main.js, define a function logVisibleLightWaves().
Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
3.
Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
4.
Call the logVisibleLightWaves() function from outside the function.
5.
Beneath the function call, log the value of lightWaves to the console from outside the function.
You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function! */
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}
logVisibleLightWaves()
console.log(lightWaves)//error
//Scope Pollution
//Scope pollution is when we have too many global variables that exist in the global namespace
// globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code
let num = 50;
const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100
/*You’ll notice:
We have a variable num.
Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
The reassignment inside logNum() affects the global variable num.
Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num. 
1.
Let’s see what happens if we create a variable that overwrites a global variable.
Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:
stars = 'Sirius';
2.
Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.
You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.*/
const Satellite = 'The Moon';
const Galaxy = 'The Milky Way';
let Stars = 'North Star';

const callMyNightSky = () => {
    Stars = 'Sirius';
    return 'Night Sky: ' + Satellite + ', ' + Stars + ', ' + Galaxy;
};
console.log(callMyNightSky());
console.log(Stars)
//Good Scoping//Tightly scoping your variables will greatly improve your code in several ways:
/*It will make your code more legible since the blocks will organize your code into discrete sections.
It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
It’s easier to maintain your code, since your code will be modular.
It will save memory in your code because it will cease to exist after the block finishes running. */
// Here’s another example of how block scope works, as defined within an if block:
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError reason its inside the block
/*1.
Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
2.
Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
3.
Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.
Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console. */
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }

    console.log(lightWaves);
};
logVisibleLightWaves();