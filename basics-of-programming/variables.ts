// Simple data type examples 
let numberExample = 1; 
let stringExample = 'rox';
let booleanExample = true; // false
const numberExample2 = 2;

const maxTemp = 1000; 
let currentTemp = 0; 

// console.log('this is my current temp: ', currentTemp);
// currentTemp = currentTemp + 1;
// console.log('this is my current temp: ', currentTemp);

// console.log('this is my max temp: ', maxTemp);
// maxTemp = maxTemp + 1; -- This will throw an error as we're trying to add to a constant variable
// console.log('this is my maxTemp temp: ', maxTemp);

// typeof tells you the type of the variable
// console.log('Hi I am rox');
// console.log(typeof numberExample)
// console.log(typeof stringExample)
// console.log(typeof booleanExample)
// console.log(numberExample)
// console.log(numberExample2)

// Simple data structures
// Array
// Initialise an array with 10 consecqutive numbers starting from 0
let numberArray = [];
let numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
let stringArray = ['rox', 'ash', 'sam', 'sim', 'vik']

stringArray[2] = 'some new girl rox found'
let showStringArray = stringArray[2]
// let showStringArray = 'ashish testing'

// console.log('my wifes name is: ', showStringArray) 
let booleanArray = [true, false, true, false]

// fill this array with 0s
// let newArray = [];
// at the 0th index insert 0 
// at the 1st index insert 0 
// at the 2nd index insert 0 
// at the 3rd index insert 0 

// for (let i = 0; i <5; i++) {
//   newArray[i] = 'i';
// }
// console.log(newArray)

// 1) initialise a blank array
// 2) fill that array with consecutive even numbers starting from 0 to 10 (includes 10)
// 3) [0,2,4,6,8,10]

// [0, blank, 2, blank, 4, blank, 6, blank, 8, blank, 10]

// myArray[0] = 0    i = 0
// myArray[1] = 2    i = 2
// myArray[2] = 4    i = 4
// myArray[3] = 6    i = 6
// myArray[4] = 8    i = 8
// myArray[5] = 10   i = 10


// let myArray = []

// for (let i = 0; i <= 10; i = i + 2) {
//   console.log('this is the value of i: ', i);
//   console.log('this is the value of i/2: ', i/2);
// console.log(`myArray[${i/2}] = ${i}`);  
// myArray[i/2] = i;
    
// }
// console.log(myArray)





let evenArray = []; 
for (let i = 0; i <= 5; i++) { 
  // console.log('this is the value of i: ', i)
  evenArray[i] = i * 2;
}

// console.log(evenArray)


// myArray[0] = 1    i = 0
// myArray[1] = 3    i = 1
// myArray[2] = 5    i = 2
// myArray[3] = 7    i = 3
// myArray[4] = 9    i = 4
// myArray[5] = 11   i = 5

// (i * 2) + 1

let oddArray = []; 
for (let i = 0; i <= 5; i++) { 
  // console.log('this is the value of i: ', i)
  oddArray[i] = (i * 2) + 1;
}

// console.log(oddArray)

//  [0,3,6,9,12,15]
let multiplyBy3Array = []; 
for (let i = 0; i <= 5; i++) { 
  // console.log('this is the value of i: ', i)
  multiplyBy3Array[i] = i * 3
}

// console.log(multiplyBy3Array)

// if (variable === 0) { 
//   console.log('rox');
// }

let arrayOfRandomNumbers = [12, 14, 16, 18, 0, 0, 2, 0, 56, 78, 80, 0, 2];
// let newArray = [1];

// let myVariable =  someArray[1]  ---> the value at the 1st index of someArray

console.log(arrayOfRandomNumbers.length)


// rox rox rox rox 
for (let i=0; i <arrayOfRandomNumbers.length; i++) {
      
let arrayValue= arrayOfRandomNumbers[i]
console.log(arrayValue)
if (arrayValue === 0){
    console.log('rox')
} else {
 console.log('sam')
}
}