console.log("Hello World!");

// program 01

// var Name=prompt("Ente your name");
// console.log("user name is ",Name);

//  var age=prompt("Enter your age");
// console.log("user age is " ,age);

//  program 02

for (var i = 0; i <= 99; i++) {
    console.log("the number from 0 to 100 in for loop is ");
}

// program 03
var i = 0;
while (i <= 49) {
    console.log("the number from 0 to 50 in while loop is ")
    i++
}





// program 04

var num1 = parseFloat(prompt("enter a number number one between 1 to 50"));
var num2 = parseFloat(prompt("enter a number number two between 1 to 50"));
var operater = prompt("enter a operater b/w +,-,*,/,%,")
switch (operater) {
    case "+":
        result = num1 + num2;
        console.log("The addition of both number is ", result);

        break;
    case "-":
        result = num1 - num2;
        console.log("The subtraction of both number is ", result);
        break;
    case "*":
        result = num1 * num2;
        console.log("The multiplication of both number is ", result);
        break;
    case "/":
        result = num1 / num2;
        console.log("The   division  of both number is ", result);
        break;
    case "%":
        result = num1 % num2;
        console.log("The  modulus  of both   number is ", result);
        break;


}

// program 05
var num1 = parseFloat(prompt("enter a number number one between 1 to 50"));
var num2 = parseFloat(prompt("enter a number number two between 1 to 50"));


let sum = 0;

for (let i = 0; i <= 50; i++) {
    console.log("The addition of  number from 1 to 50 is", sum);
    sum = num1 + num2;
}

console.log("The sum of numbers from 1 to 50 is: " + sum);
// program 06

var ans = "0";
do {
    var ans = "0";
    ans = prompt("do you u want to continue? if yes then press 0");
} while (ans != "0")
if (ans != "0")
    console.log("user dont want to continue ");


// program 07

var i = 10;
while (i > 1) {
    console.log("the number from 10 to 1 in while loop is ",);
    i--
}


// program 08

var password = prompt("enter your password");
password = "123";
while (password != "123") {
    console.log(" correct password");

}
console.log("wrong password please enter correct password");

// program 09

var days = prompt("enter a day number between 1 to 7");
switch (days) {
    case "1":

        console.log("today is monday");

        break;
    case "2":
        console.log("Today is tuesday ",);
        break;
    case "3":
        console.log("Today is wednesday ",);
        break;
    case "4":
        console.log("Today is thursday",);
        break;
    case "5":
        console.log("Today is friday ",);
        break;
    case "6":
        console.log("Today is saturday ",);
        break;
    case "7":
        console.log("Today is sunday ",);
        break;



}
// program 10

var marks = prompt("enter ur marks");
switch (marks) {
    case "marks=>90":

        console.log("your grade is A+");

        break;
    case "marks=>89":
        console.log("your grade is B");

        break;
    case "marks=>79":
        console.log("your grade is c");

        break;
    case "marks=>69":
        console.log("your grade is D you are fail");

        break;



}


// program 11


for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log("the multiplication of 5 0 to 100")
    }
}

// pdrgram 12

var vowel = promt = ("enter a alphabet");
switch (vowel) {
    case "a":
        console.log("it is a vowel");
        break;
    case "e":
        console.log("it is a vowel");
        break;
    case "i":
        console.log("it is a vowel");
        break;
    case "o":
        console.log("it is a vowel");
        break;
    case "u":
        console.log("it is a vowel");
        break;

}
console.log("its not a vowel");

// program 13

var ans = "n";
while (ans == "n") {
    ans = prompt("do you want to exit? y/n");
    console.log("user  not wants to exit");
    if (ans == "y") {
        console.log("user wants to exit");
        break;
    }
}

// program 14

var num1 = parseFloat(prompt("enter a  number   one between 1 to 10"));
var num2 = parseFloat(prompt("enter a  number   two between 1 to 10"));
var num3 = parseFloat(prompt("enter a  number  three between 1 to 10"));
var num4 = parseFloat(prompt("enter a  number four between 1 to 10"));
var num5 = parseFloat(prompt("enter a  number five between 1 to 10"));
var greater = num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ? num1 :
    num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 ? num2 :
        num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 ? num3 :
            num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 ? num4 :
                num5;
console.log("the greatest number is ", greater);

//  program 15
var factorial= prompt("enter a number to find factorial between 1 to 10");
switch(factorial){
    case"0":
    console.log("the factorial of   0 is " , 1);
    break;
        case"1":
    console.log("dont know the factorial of 1" );
    break;
        case"2":
    console.log("the factorial of 2 is " , 2);
    break;
    case"3":
    console.log("the factorial of 3 is " , 6);
    break;
     case"4":
    console.log("the factorial of 4 is " ,24 );
    break;
     case"5":
    console.log("the factorial of  is " , 120 );
    break;
        case"6":
    console.log("the factorial of  is " ,  720);
    break;
        case"7":
    console.log("the factorial of  is " ,  5040);
    break;
        case"8":
    console.log("the factorial of  is " , 40320 );
    break;
        case"9":
    console.log("the factorial of  is " , 362880 );
    break;
        case"10":
    console.log("the factorial of  is " ,3628800 );
    break;

}

// The End !
// yeahhhhhhhhhhhhhhh

//  😊 





