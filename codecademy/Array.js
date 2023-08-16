/*1.
Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
2
Use console.log() to print hobbies to the console. */
const hobbies = ['', '', '']
console.log(hobbies)
//Accessing Elements
// We can access individual items using their index
/*1.
Individual elements in arrays can also be stored to variables.
Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).
Then use console.log() to print the listItem variable to the console.
2
Now, console.log() the third element in the famousSayings array using bracket notation to access the element.
Do not save the element to a new variable before you log it.
Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element?
Try to log the item at index [3] of famousSayings to the console. What is logged to the console? */
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])
//Update Elements
//Once you have access to an element in an array, you can update its value
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
/*In the example above, the seasons array contained the names of the four seasons.
However, we decided that we preferred to say 'Autumn' instead of 'Fall'.
The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there. */
//Arrays with let and const
/*You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
Variables declared with the const keyword cannot be reassigned.
1.
Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
Log the updated array, condiments, to the console.
2.
Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']
Log the result to the console.
Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
3.
Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.
Log the updated array to the console.*/
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
condiments[0] = "Mayo";
console.log(condiments)//[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo']
console.log(condiments)//[ 'Mayo' ]
utensils[3] = 'Spoon'
console.log(utensils)//[ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
//The .length property
/*One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings. Check the example below: */
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
//1.
//Find the length of the objectives array and log it to the console.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)
//The .push() Method
//.push(), allows us to add items to the end of an array.
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
//Add two elements to the chores array using .push().
//2.
// Use console.log to print your chores array to make sure your items were added.
const chores = ['wash dishes', 'do laundry', 'take out trash'];
console.log(chores.push('cook', 'eat'))//5
console.log(chores)//[ 'wash dishes', 'do laundry', 'take out trash', 'cook', 'eat' ]
//The .pop() Method
//.pop(), removes the last item of an array.
//use of index
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
/*1.Use the .pop() method to remove the last element from chores. 
 2.In a line after you called chores.pop(), log chores to the console to make sure it worked.
 */
const Chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop(5)
console.log(chores)//[ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]
//More Array Methods
// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()
/*1.
Use the .shift() method to remove the first item from the array groceryList.
Log the new groceryList to the console.
Read about .shift() in Docs.
2.
Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
After calling .unshift() on groceryList, log groceryList to the console.
You may wish to delete the console.log() statement from the previous step.
Read about .unshift() in Docs.
3.
You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.
Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
4.
After calling .slice() on groceryList, log the grocery list to the console one more time.
Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.
Checkpoint 5 Passed
5.
Let’s find the index of a particular element in groceryList using .indexOf().
Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)
Read about .indexOf() in Docs. */
const groceryList = [
    "orange juice",
    "bananas",
    "coffee beans",
    "brown rice",
    "pasta",
    "coconut oil",
    "plantains",
];
groceryList.shift();
console.log(groceryList); //[ 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]
groceryList.unshift("popcorn");
console.log(
    groceryList
); /*[ 'popcorn','bananas''coffee beans','brown rice','pasta','coconut oil',
    'plantains */
groceryList.slice(1, 5);
console.log(groceryList.slice(1, 4))//[ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList)/*[ 'popcorn',
    'bananas',
    'coffee beans',
    'brown rice',
    'pasta',
    'coconut oil',
    'plantains' ] */
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)//4
//Arrays and Functions
/*Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?
Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array: */
const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
    arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
/*Let’s go over what happened in the example:
The flowers array that has 3 elements.
The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
We call addFlower() with an argument of flowers which will execute the code inside addFlower.
We check the value of flowers and it now includes the 'lily' element! The array was mutated! */
//
/*1.
In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.
Underneath the function call, log concept to the console to check if this reassignment mutated the array.
2.
Let’s double check what happens if we mutate an array using a built-in method inside a function.
Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.
3.
Call removeElement() with an argument of concept.
4.
After calling removeElement(concept), check the value of concept by logging it to console.
Notice that in both cases, the change to the array was maintained outside of the function! */
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)
function removeElement(newArr) {
    newArr.pop()
}
removeElement(concept)//[ 'arrays', 'can', 'be', 'MUTATED' ]
console.log(concept)//[ 'arrays', 'can', 'be' ]
//Nested Arrays
//When an array contains another array it is known as a nested array
const nestedArr = [[1], [2, 3]];
//To access the nested arrays we can use bracket notation with the index value
const NestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
 /*1.
Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.
The first array element should hold the elements 1 and 2 in that order.
The second array element should hold the elements 3 and 4 in that order.
The third array element should hold the elements 5 and 6 in that order.
2.
Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters. */
const numberClusters = [[1,2],[3,4],[5,6]]
const target = numberClusters[2][1]
//Review Arrays
/*
Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
=>Each item inside of an array is at a numbered position, or index, starting at 0.
=>We can access one item in an array using its index, with syntax like: myArray[0].
=>We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
=>Arrays have a length property, which allows you to see how many items are in an array.
=>Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
=>Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
=>Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
=>Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
=>Arrays mutated inside of a function will keep that change even outside the function.
=>Arrays can be nested inside other arrays.
=>To access elements in nested arrays chain indices using bracket notation.
*/