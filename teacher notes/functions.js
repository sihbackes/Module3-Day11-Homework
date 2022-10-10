// let hello = "Hello People";

// if (true) {
//   let hello = "Hey Guys!";
// }

// console.log(hello);

// function definition moment

//VOID
function greet() {
  console.log("Hi, Epicoders!");
  console.log("What a nice morning this is");
}

// function execution moment
//VOID
greet();

const sayHi = function (name) {
  if (name === undefined) {
    console.log("please provide a name");
  } else {
    console.log("HI! " + name);
  }
};

sayHi();
sayHi("Akbar");
sayHi("Aygen");

const sum = function (n1, n2) {
  const result = n1 + n2;

  return result;
};

console.log(sum(2, 3));

// every time a function returns a value, you can treat the function call as the value it returns
const sumAndDisplay = function (n1, n2, str) {
  const number = sum(n1, n2);

  const message = str + number;
  return message;
};

let message = sumAndDisplay(5, 7, "The result is: ");
let message2 = sumAndDisplay(1, 4, "Here's another result: ");

console.log("OUTER MESSAGE", message);
console.log("OUTER MESSAGE", message2);

const arrOfAnimals = [
  "Cat",
  "Dog",
  "Mouse",
  "Parrot",
  "Horse",
  "Goat",
  "Hen",
  "Monkey",
  "Lion",
];

let message3 = "My favourite animal is: " + arrOfAnimals[7];
console.log(message3);

// for (let i = 0; i < arrOfAnimals.length; i++) {
//   const animal = arrOfAnimals[i];

//   console.log("Here's a bunch of animals: " + animal);
// }

const arrOfNums = [1, 5, 7, 8, 3, 1, 0, 4, 3];

// for (let i = 0; i < arrOfNums.length; i++) {
//   const num = arrOfNums[i];

//   console.log("Here's a bunch of numbers: " + num);
// }
// for (let num of arrOfNums) {
//   console.log("Here's a bunch of numbers: " + num);
// }

// DRY - do not repeat yourself!
const cycleAndDisplay = function (str, arr) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    console.log(str + elem);
  }
};

const customMessage1 = "Here's a bunch of animals: ";
const customMessage2 = "Here's a bunch of numbers: ";

cycleAndDisplay(customMessage1, arrOfAnimals);
cycleAndDisplay(customMessage2, arrOfNums);

const dice = function () {
  return Math.ceil(Math.random() * 6);
};

// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());

// Write a function called rollTheDices which receives the number of throws as parameter
// It should invoke the previously created dice() function a specified amount of times
// and return an OBJECT containing containing a sum property holding the sum of all the values extracted
// and another property containing all the individual values that came out of the dices

// rollTheDices(3) ==> returns something like:

// {
//     sum: 10,
//     values: [3, 3, 4]
// }

const rollTheDices = function (numberOfThrows) {
  const result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numberOfThrows; i++) {
    const diceRoll = dice();
    result.sum = result.sum + diceRoll;
    result.values.push(diceRoll);
  }

  return result;
};

console.log(rollTheDices(3));
