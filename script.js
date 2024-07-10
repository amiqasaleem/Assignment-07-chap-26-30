//Task 01:
/* Write a program that takes a positive integer from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/

let userNum = prompt("Enter a number");

//a. 
let convert = Number(userNum);
document.write("Number: " + convert + "<br>");

//b. 
document.write("Round off Value: " + Math.round(convert) + "<br>");

//c.
document.write("Floor Value: " + Math.floor(convert)+ "<br>");

//d.
document.write("Ceil Value: " + Math.ceil(convert)+ "<br>");

//Task 02:
/* Write a program that takes a negative floating point number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/

let userNum_02 = prompt("Enter a negative floating number");

//a. 
let convert2 = Number(userNum_02);
document.write("Number: " + convert2 + "<br>");

//b. 
document.write("Round off Value: " + Math.round(convert2) + "<br>");

//c.
document.write("Floor Value: " + Math.floor(convert2)+ "<br>");

//d.
document.write("Ceil Value: " + Math.ceil(convert2)+ "<br>");

//Task 03:
/* Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5*/

let numm = -6;
let absValue = Math.abs(numm);
document.write("The absolute value of "+ numm + " is " + absValue);

//Task 04:
/*Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your
browser.:*/

let value = Math.random();
let change = (value * 6) + 1;
let final = Math.floor(change)
document.write("Random dice value: " + final);


//Task 05:
/* Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser*/

let coinValue = Math.random();
let convertValue = (coinValue * 2) + 1;
let final_val = Math.floor(convertValue);

if(final_val === 1) {
    document.write("Random Coin Value: Heads");
} else {
    document.write("Random Coin Value: Tails");
}

//Task 06:
/*Write a program that shows a random number between 1 and 100 in your browser.*/

let randomNum = Math.random();
let converted = (randomNum * 100) + 1;
let doneVal = Math.floor(converted);

document.write("Random number between 1 and 100: " + doneVal);

//Task 07:
/* Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms*/

let userInput_01 = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

let weight = parseFloat(userInput_01.replace(/[^\d.]/g, ''));
if (!isNaN(weight)) {
    document.write(`<h2>Your weight is ${weight} kilograms.</h2>`);
} else {
    document.write("<h2>Invalid input format. Please enter your weight in a valid format.</h2>");
}

//Task 08:
/*Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret number, congratulate the user.*/


let secretNumber = Math.floor(Math.random() * 10) + 1;
let userInput = prompt("Guess the secret number (between 1 and 10):");
let userNumber = parseInt(userInput);
if (userNumber === secretNumber) {
    document.write("Congratulations! You guessed the secret number " + secretNumber + " correctly!");
} else { 
    document.write("Sorry, Try again!");
}

