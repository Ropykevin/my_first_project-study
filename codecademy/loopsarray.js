/*1.
Write a for loop that iterates through our vacationSpots array using i as the iterator variable.
Inside the block of the for loop, use console.log() to log each element in the vacationSpots 
array after the string 'I would love to visit '. For example, the first round of the loop should 
print 'I would love to visit Bali' to the console. */
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i =0;i<vacationSpots.length;i++){
  console.log("I would love to visit "+ vacationSpots[i])

}
//Nested Loops
/*When we have a loop running inside another loop, we call that a nested loop. 
One use for a nested for loop is to compare the elements in two arrays.
 For each round of the outer for loop, the inner for loop will run completely. */
 const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
// 1.
// Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
// Checkpoint 2 Passed
// 2.
// Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
// Checkpoint 3 Passed
// 3.
// Create a third variable named mutualFollowers and set it to an empty array.
// Checkpoint 4 Passed
// 4.
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
// Write your code below
// Step 1: Create Bob's friends list
let bobsFollowers = ["Alice", "Charlie", "David", "Eve"];

// Step 2: Create Tina's friends list
let tinasFollowers = ["Charlie", "Eve", "Grace"];

// Step 3: Create an empty array for mutual followers
let mutualFollowers = [];

// Step 4: Find mutual followers using nested loop
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      break; // Once a match is found, no need to continue inner loop
    }
  }
}

console.log(mutualFollowers); // Output: ["Charlie", "Eve"]

