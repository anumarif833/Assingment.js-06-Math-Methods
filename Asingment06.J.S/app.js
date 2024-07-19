// Q 01 Write a program that takes a positive integer from user & display tha folloing in your browser.
// a. number 
// b .round off value of the Number
// c. floor value of the number
// debugger. cell value of the number.


// var userInput = +prompt("enter positive integer");
// document.write("number : ${userInput}<br>");
// document.write("round off value : ${(Math.floor(userInput))}<br>");
// document.write("cell value of the number");

// // Q .2 Write a program that takes a negative floating point number from user & display the following in your browser.
// a . number 
// b .round off value of the Number
// c. floor value of the number
// debugger. cell value of the number.


// var userInput = +prompt("enter neg floating integer");
// document.write("number : ${userInput}<br>");
// document.write("round off value : ${(Math.round(userInput))}<br>");
// document.write("floor value off the number : ${(Math.floor(userInput))}<br>");
// document.write("cell value of the number :${(Math.cell(userInput))}<br ");


// Q .3 Write a program that display the absolute value of the number.
// E.g. absulute value -4 is 4 & absolute value of 5 is 5.


// var userInput = +prompt("enter number");
// document.write("The absolute value of ${userInput} is ${(Math.absolute{userInput))}<br><br>");


// Q .4 Write a program that simulates a dice using random()
// method of js Math class. display the value of dice in your browser,:


// var dice = Math.random() * 7;
// var diceTwo = Math.random() * 7;
// document.write("random dice value : ",Math.floor(dice),"'<br>")
// document.write("random dice value : ",Math.floor(diceTwo),"'<br><br>");


// Q .5 Write a program that simulates a coin ising random() method of JS Math class.
// display the value of in your browser.

// var toss = Math.floor(Math.randum()*2);
// document.write(toss,"<br>");
// if(toss > 0){
//     document.write("random coin value : head <br><br>")
// }else{
//     document.write("random coin value : tails <br><br>")
// };


// // Q .6 Write aprogram tha shows a random number between 1 and 100 in your bwowser.

// var randomValue = Math.flaor(Math.random()*101);
// document.write("random number between 1 to 100 is : ",randomValue,"<br><br>");


// // Q .7 Write a program that asks the user about his weight.parse the user input and display
// his weight in your browser.possible user can be:

// a . 50
// b . 50kgs
// c . 50.2kgs
// d . 50.2kgilograms


// var userInput =prompt("enter your age");
// document.write("The weight of user is ",parseInt(userInput), " kilogram <br><br>");


// Q .8 Write a progeam that storea a random secret number from 1 to 10 in a varible. Ask the uder to input a numnber
// between 1 and 10. if the user input equals the secrat number ,congtatulate the user.


// var secretNumber = Math.floor(Math.random()*11);
// var userInput = +prompt("input a number between 1 and 10");
// if (userInput === secretNum){
//     alert("congratulsations your entered the correct number");

// }else{
//     alert("Tray Again")
// }