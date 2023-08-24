// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
    // #A while loop 
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }
  /*Let’s break down what’s happening with our while loop syntax:
The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo. */


// 1.Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.
// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
// Inside the block of your while loop, add the following line of code:
// currentCard = cards[Math.floor(Math.random() * 4)];
// Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.
// If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop.
// Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console.
// For fun you can run your code a few times and see how the output changes!
const cards = ['diamond', 'spade', 'heart', 'club'];
// Write your code below
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


