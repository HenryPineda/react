// Part 12 Just introduction

//Understanding let and const Part 13 in javascript we normally use var




//Arrow functions in  Part 14

//Normal way of creating a function

function myFunction(){

    ......

}

//arrow functions

const myFunction2 = ()=> {

    .....
}

function printMyName(name){

    console.log(name);
}

printMyName('Deybin')

const printMyName2 = function(name){

    console.log(name);
}

printMyName2('Ligia')

const printMyName3 = (name) => {

    console.log(name)
}

printMyName3('Wendy')


const multiply = (number) => number * 2;

console.log(multiply(4))

const multiply2 = number => number * 3;

console.log(multiply2(4))




// Exports and Imports(Modules) in part 15

//person.js file

const person ={

    name: 'Max'
}

export default person


// utility.js file

export const clean =() => {.....}
export const baseData = 10;

//app.js file
import person from './person.js'
import prs from './person.js'

import {baseDta } from './utility.js'
import { clean } from './utility.js'

//if we use the default export we can use any name when we import the module from another file
//if we use named export we have to use the exact name used in the module using {} when import from another file


// Classes in part 16
class Humano {
  
  constructor(gender){
    
    this.gender = gender;
  }
  
  printGender(){
    
    console.log(this.gender)
  }
}


class Persona extends Humano {
  
  constructor(name, gender){
    
    super(gender)
    
    this.name = name
  }
  
  
  printName(){
    
    console.log(this.name)
  }
}


const Henry = new Persona('Henry', 'Male');

Henry.printGender();
Henry.printName();

// Classes, properties and methods in part 17

// class Humano {
  
//   gender = gender;
  
//   printGender = () =>{
    
//     console.log(this.gender)
//   }
// }


// class Persona extends Humano {
  
//     super(gender)
    
//     name = name
//   }
  
  
//   printName = () => {
    
//     console.log(this.name)
//   }
// }


// const Henry = new Persona('Henry', 'Male');

// Henry.printGender();
// Henry.printName();


//Spread and rest operators part 18

//The operator is ... (three dots) and is the same for spread and rest

//Spread, it is used to split up array elements or object properties


const person0 = {
  
    name: 'Max'
  };
  
  const newPerson0 = {
    
    ...person0,
    
    age: 32
  };
  
  
  console.log(newPerson0);
  
  
  // Rest, it is used to merge a list of function arguments into an array
  
  function filter(...args){
    
    return args.filter(el => el ===100);
     
  }
  
  console.log(filter(100, 200, 300, 100));
  
  
  
  
  //Destructuring in part 19. To easily extract array element or object properties and store them in variable
  
  //Array destructuring
  
  const arrayNumbers = [10, 20, 30];
  
  [num1, num2] = arrayNumbers;
  
  console.log(num1, num2);
  
  //Object destructuring
  
  //const objectToDestructure = { name: 'Henry', age: 32}
  
  // {age} = { name: 'Henry', age: 32}
  
  // console.log(age);
  
  
  
  // Reference and primitive types in part 20
  
  const number = 1;
  
  const newNumber = number;
  
  console.log(newNumber)
  
  const person = {
    
    name: 'Max'
  };
  
  const newPerson = person;
  
  person.name = 'Henry';
  
  console.log(newPerson);
  
  
  const person2 = {
    
    name: 'Taty'
  };
  
  
  const newPerson2 = {
    
    ...person2,
    
    age: 25
  };
  
  newPerson2.name = 'Stephanie';
  
  console.log(newPerson2)
  
  // Refreshing array functions Part 21
  
  const numbers = [1, 2, 3];
  
  const dobleNumArray = numbers.map((num) => {
    
    return num *2;
  });
  
  console.log(numbers);
  console.log(dobleNumArray);
  
  //Part 22 It was wrap up of the section 2

  //Part 23

  // Just a summary of all the videos


//Part 24 JS Array functions

//map()

//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  

const array1 = [2, 4, 6, 8];

const newArray = array1.map(function(x){

    return x *2;
})

console.log(newArray);


const newArray2 = array1.map(x => x *3);

console.log(newArray2);

const newArray3 = array1.map((x) =>{
  
  return x *4;
  
});

console.log(newArray3);


function map(array1){
  
    let newArray = [];

    array1.filter(function(x, index){
      
      console.log(index);
      newArray.push(x *5);
    });

    return newArray;
}

console.log(map(array1));


//find()

//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.


var array2 = [5, 12, 8, 130, 44];

var found = array2.find(function(element) {
  return element > 10;
});// return 12. Just the first element found

console.log(found)

var greaterThan10 = array2.filter(function(element){
  
  return element >10;
});// returns all the elements that are greater that 10

console.log(greaterThan10);


// findIndex()

var array3 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array3.findIndex(isLargeNumber));

var array4 = [130, 45, 10, 12, 44];

var lessThan44 = array4.find(function(element){
  
  return element < 44;
});

console.log(lessThan44);

console.log(array4.findIndex(function(element){
  
  return element < 44;
}));


// reduce()

//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;



// 1 + 2 + 3 + 4
console.log(array1.reduce(function(acumulador, current, index){
  
  console.log(index);
  
  return acumulador + current;
  
}, 0));// The zero here is the initial position of the index. If ommited by default the initial index is 1.
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
//expected output: 15

const array3 = [1, 2, 3, 4, 5, 6];

console.log(array1.reduce((acumulator, currentValue) => {
  
  return acumulator + currentValue;
}))

console.log(array3.reduce((acumulator, currentValue) => acumulator + currentValue));
  
  

// concat()

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//slice

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
  

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


//splice

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

var months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

console.log(months);

months.splice(4, 1, 'May');

console.log(months);

months.push('June');

console.log(months);

var replaced = months.splice(-2, 3, 'Somehting else', 'more', 'more');

console.log(months);

console.log(replaced);

// removes 1 element from index -2

var removed2 = myFish.splice(-2, 1);

console.log(myFish);
console.log(removed2);

//Removes 2 elements from index 0 and insert "parrot" "anemone" "blue"


var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]