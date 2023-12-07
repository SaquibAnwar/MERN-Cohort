console.log("Hello World. I just started learning JavaScript!");

//var let, const
 var a = 1;
 a = 2;
 let b = 3;
 const c = 4;
 console.log(a);
 console.log(b);
 console.log(c);


 //Data types - strings, numbers and booleans
let firstName = "John";
let age = 25;
let isMarried = false;
console.log("This is " + firstName + " and he is " + age + " years old. Is he married? " + isMarried);


 //If/else statements

if (isMarried) {
    console.log(firstName + " is married.");
} else {
    console.log(firstName + " is not married.");
}


//Loops - for
let answer = 0;
for (let i = 0; i < 10; i++) {
    answer += i;
}
console.log(answer)


//Complex data types - arrays and objects
let  personArray = ["John", "Jane", "Mark"];

for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i]);
}

const ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];

for (let i = 0; i < ages.length; i++) {
    if(ages[i]%2 == 0){
        console.log(ages[i]);
    }
}

const users = [{
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isMarried: false,
    gender: "male"
}, {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    isMarried: true,
    gender: "female"
}, {
    firstName: "Mark",
    lastName: "Smith",
    age: 35,
    isMarried: "false",
    gender: "male"
}];

for (let i = 0; i < users.length; i++) {
    if(users[i]["gender"] == "male"){
        console.log(users[i].firstName + " " + users[i].lastName);
    }
}

//Functions
function sum(a, b) {
    return a + b;
}

const result = sum(2, 3);
console.log(result);

//callback functions
function sum(num1, num2) {
    return num1 + num2;
}

function displayResult(data) {
    console.log("Result of the sum, is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's Result is: " + data);
}

function sumAndDisplay(num1, num2, displayResult) {
    const result = num1 + num2;
    displayResult(result);
}

sumAndDisplay(2, 3, displayResultPassive);