
//  Exercise 1

var firstNumberToCompare = 14;
var secondNumberToCompare = 20;

if (firstNumberToCompare > secondNumberToCompare) {
    console.log(true);
} else {
    console.log(false);
}

// Exercise 2

var firstNumValue = 34;
var secondNumValue = 60;
var thirdNumValue = 28;

if (firstNumValue && thirdNumValue > secondNumValue) {
    console.log(true);
} else if (secondNumValue > firstNumValue && thirdNumValue) {
    console.log(true);
} else {
    console.log(false);
}


// Exercise 3

for (let i = 0; i < 10; i++) {
    console.log('I like JavaScript');
}


// Exercise 4

var result = 0;

for ( let i = 1; i <= 10; i++ ){
    result += i;
    console.log(result);
}


// Exercise 5

for (let n = 5; n < 50; n++ ){
    if (n === 0){
        console.log( n + " even ");
    }else if(n % 2 ===0){
        console.log(n + " even ");
    }else{
        console.log(n + " odd ")
    }
}

// Exercise 6

for(let i = 10; i < 30; i++) {
    for(let j = 10; j < 40; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

// Exercise 7

/*
 The outer loop with the counter ```i``` takes care of lines,
and the inner loop with the counter ```j``` takes care of columns.
We start with the top left star and move right in the first line.
When the inner loop reaches the last column, it terminates. Then,
the outer loop increases its counter by 1 (moves to the next line), and so on.
*/

// Variable that stores the size of our square
var size = 5;

// Variable that stores one line of asterisks (stars)
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // At every step you have to reset the variable because you start creating a new line
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        // Add a new asterisk (star) to the lineOfStars
        lineOfStars = lineOfStars + "*";
    }
    // Each line is separated by an empty line because if the browser sees 5 identical results,
    // it will collapse our square of stars into one line
    console.log(" ");

    // Writes the lineOfStars variable (its contents - therefore it is written here without quotation marks) in the console
    console.log(lineOfStars);
}

// Exercise 8

var size2 = 5;

var lineOfStars2 = "";

for(var i2 = 0; i2 <= size2; i2++) {

    lineOfStars2 = "";
    for(var j2 = i2; j2 > 0; j2--) {

        lineOfStars2 = lineOfStars2 + "*";
    }

    console.log(" ");

    console.log(lineOfStars2);
}
