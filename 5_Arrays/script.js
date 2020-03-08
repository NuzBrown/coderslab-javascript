// Exercise 1

var fistArray = [24, 67, 89];

console.log(fistArray);

// Exercise 2

myFavoriteFruits = ['apples', 'oranges', 'strawberries', 'peaches'];

console.log(myFavoriteFruits[0]);

let lastFruit = myFavoriteFruits.length - 1;
    console.log(myFavoriteFruits[lastFruit]);

var myFavoriteFruits = ['apples', 'oranges', 'strawberries', 'peaches'];
for (var i=0; i < myFavoriteFruits.length; i++) {
    console.log( myFavoriteFruits[i] );
}


// Exercise 3

var myThirdArray = [1, 5, 56, 43, 200, 60, 29, 86, 1003, 453];

var sum = 0;

for (i = 0; i < myThirdArray.length; i++){
    sum += myThirdArray[i];
    console.log(myThirdArray[i]);

}
console.log(" Total sum = " + sum );


// Exercise 4

var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var sumEven = 0

for ( i= 0; i<myArray.length; i++){
    if(myArray[i] % 2 == 0 ){
        console.log(myArray[i]);
        sumEven += myArray[i];
    }

}

console.log("sum = " + sumEven);

// Exercise 5
var maxArray = [10, 20, 30, 40, 200, 60, 70, 80, 90, 100];
var max = 0;

for (i = 0; i < maxArray.length; i++) {
    for (j = 0; j < maxArray.length; j++) {
        if (maxArray[i] < maxArray[j]) {
            max = maxArray[j];
        }
    }
}
console.log(" The biggest number in this array is " + max);

// Exercise 6
var arrWithNumbers = [1,5,2,3,5,1,2,4];
var firstIndex = null;

for (i = 0; i < arrWithNumbers.length; i++) {
    for (j = 0; j < arrWithNumbers.length; j++) {
        if (i !== j && arrWithNumbers[i] === arrWithNumbers[j]) {
            firstIndex = i;
        }
    }

    if (typeof firstIndex != null) {
        break;
    }
}
console.log("Number that repeats is on position:" + firstIndex);


// Exercise 7
var reverseArray = [10, 20, 30, 40, 200, 60, 70, 80, 90, 100];
var reversedResults = "";
for (i = reverseArray.length-1; i >= 0; i--) {
    reversedResults += reverseArray[i] + ", ";
}

console.log(reversedResults);

