/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 19;
if (votingAge > 18) {
    console.log('true');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let firstName = 'Joey';
let lastName = 'Cristina';

if (lastName === 'Cristina') {
    firstName = 'Joseph';
}

console.log(firstName, lastName);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number('1999');

//note: do not understand the usecase. i also cannot get '1999' to act as a number. if I go '1999' + 10, the result is 199910.

//Task d: Write a function to multiply a*b

function times(a, b) {
    return a * b;
}

console.log(times(4, 5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(humanYears) {
    return humanYears * 7;
}

console.log(dogYears(33));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw
//food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your
//result should be 0.44999999999999996

// function dogFoodLbs(dogYears, dogWeight) {
//     if (dogYears >= 1 && dogWeight < 6) {
//         return dogWeight * .05;
//     } else if (dogYears >= 1 && dogWeight <= 11){
//         return dogWeight * .03;
//     } else if (dogYears >= 1 && dogWeight >= 15){
//         return dogWeight * .02;
//     } else if (dogYears >= ((1 / 12) * 2) && dogYears < ((1 / 12) * 4)){
//         return dogWeight * .1;
//     } else if (dogYears >= ((1 / 12) * 4) && dogYears < ((1 / 12) * 7)){
//         return dogWeight * .05;
//     } else if (dogYears >= ((1 / 12) * 7) && dogYears < 1){
//     return dogWeight * .05;
// }}

function dogFoodLbs(dogYears, dogWeight) {
    if (dogYears >= 1) {
        if (dogWeight > 15) {
            return dogWeight * .02;
        } else if (dogWeight >= 11) {
            return dogWeight * .03;
        } else if (dogWeight >= 6) {
            return dogWeight * .04;
        } else if (dogWeight > 0) {
            return dogWeight * .05;
        }
    } else if (dogYears < 1) {
        if (dogYears > ((1 / 12) * 7)) {
            return dogWeight * .04;
        } else if (dogYears > ((1 / 12) * 4)) {
            return dogWeight * .05;
        } else if (dogYears > ((1 / 12) * 2)) {
            return dogWeight * .1;
        }
    }
}

console.log(dogFoodLbs(1, 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
const random = Math.random();

function game(choice) {
    if (choice === rock) {
        if (random <= .999 && random > .666) {
            return rock = true;
        } else {
            return rock = false;
        }
    } else if (choice === paper) {
        if (random <= .666 && random > .333) {
            return paper = true;
        } else {
            return paper = false;
        }
    } else if (choice === scissors) {
        if (random <= .333 && random > 0) {
            return scissors = true;
        } else {
            return scissors = false;
        }
    }
}

console.log(game('rock'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function distance(kilometers) {
    let miles = 1.609344;
    return kilometers / miles;
}

console.log(distance(1.609344));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function measure(feet) {
    let centimeters = 30.48;
    return feet * centimeters;
}

console.log(measure(1));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda
//on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// function annoyingSong(bottlesOfSoda) {
//     for (; bottlesOfSoda >= 1; bottlesOfSoda--) {
//         console.log(bottlesOfSoda + ' bottles of soda on the wall, ' + bottlesOfSoda + ' bottles of soda! take one down, pass it around, ' + bottlesOfSoda + ' bottles of soda on the wall');
//     }
// }

// console.log(annoyingSong(10));

// template string? hmm

function annoyingSong(bottlesOfSoda) {

    for (; bottlesOfSoda >= 1; bottlesOfSoda--) {
        console.log(`${bottlesOfSoda} bottles of soda on the wall, ${bottlesOfSoda} bottles of soda! take one down, pass it around, ${bottlesOfSoda} bottles of soda on the wall`);
    }
}

annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
// Grade Calculator
// write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
// 90s should be A
// 80s should be B
// 70s should be C
// 60s should be D
// and anything below 60 should be F

function grade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(grade(90));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// just a placeholder for tomorrow

// let rock = 'rock';
// let paper = 'paper';
// let scissors = 'scissors';
// const random = Math.random();

// function game(choice) {
//     if (choice === rock) {
//         if (random <= .999 && random > .666) {
//             return rock = true;
//         } else {
//             return rock = false;
//         }
//     } else if (choice === paper) {
//         if (random <= .666 && random > .333) {
//             return paper = true;
//         } else {
//             return paper = false;
//         }
//     } else if (choice === scissors) {
//         if (random <= .333 && random > 0) {
//             return scissors = true;
//         } else {
//             return scissors = false;
//         }
//     }
// }

// console.log(game('rock'));