//Array.prototype.forEach()
function myForEach(array, callback) {
  const copyArray = [...array]; // Create a copy of the array

  for (let i = 0; i < copyArray.length; i++) {
    callback(copyArray[i]);
  }
}

myForEach(["Hello, World!"], console.log);

//Array.prototype.map()
function myMap(array, callback) {
  const copyArray = [...array]; // Create a copy of the array
  let resultArray = [];
  
  for (let i = 0; i < copyArray.length; i++) {
    resultArray[i] = callback(copyArray[i]);
  }
  return resultArray;
}

function multiplyByTwo(num) {
  return num * 2;
}

const mapping = myMap([1, 2, 3, 4, 5],multiplyByTwo); 

console.log(mapping); //[2,4,6,8,10]

//Array.prototype.filter()
function myFilter(array, callback) {
  const copyArray = [...array]; // Create a copy of the array
  let resultArray = [];
  
  for (let i = 0; i < copyArray.length; i++) {
    if (callback(copyArray[i])){
      resultArray.push(copyArray[i]);
    }
  }
  return resultArray;
}

function setWordLength(word){
  return word.length > 6;
}

const myArray = ["hello","goodbye"];
console.log(myFilter(myArray, setWordLength)); //["goodbye"]

//Array.prototype.some()
function mySome(array,callback){
  let copyArray = [...array];
  for (let i = 0; i < copyArray.length;i++){
    if (callback(copyArray[i])){
      return true;
    }
  }
  return false;
}

function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log(mySome([2,7,11,1,4],isBiggerThan10));//true

// Array.prototype.every();
function myEvery(array,callback){
  let copyArray = [...array];
  for (let i = 0; i < copyArray.length;i++){
    if (!callback(copyArray[i])){
      return false
    }
  }
  return true;
}

function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log(myEvery([10,11,12],isBiggerThan10)); //false

// Array.prototype.reduce()
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let copyArray = [...array];
  
  for (let i = 0; i < copyArray.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  
  return accumulator;
}

function add(a, b) {
  return a + b;
}

const result = myReduce([1, 2, 3, 4, 5], add, 0);
console.log(result); //15

// Array.prototype.indexOf()
function myIndexOf(array, value) {
  
  let copyArray = [...array];
  
  //using "index" for readability :)
  for (let index = 0; index < copyArray.length; index++){
    if (copyArray[index] === value)
      return index;
      }
  
  return -1
}

const stringResult = myIndexOf(["Corey","Daniel","Jehovah"], "Daniel");
console.log(stringResult); //1

// Array.prototype.push() - mutates object
function myPush(array, value) {
  
  array[array.length] = value;
  
  return array;
}

const newResult = myPush(["Corey","Daniel","Jehovah"], "Daniel");
console.log(newResult); //['Corey','Daniel','Jehovah','Daniel'];

// Array.prototype.lastIndexOf()
function myLastIndexOf(array, value) {
  let copyArray = [...array];
  
  for (let index = copyArray.length - 1; index >= 0; index--) {
    if (copyArray[index] === value) {
      return index;
    }
  }
  
  return -1;
}

const lastIndexArray = myLastIndexOf(["Corey","Daniel","Jehovah","Daniel","Daniel","Adam"], "Daniel");
console.log(lastIndexArray);//4

// Object.keys()
function myObjectKeys(obj) {
  let objArray = [];

  for (let key in obj) {
      objArray = objArray.concat(key);
  }

  return objArray;
}

const obj = {
  a: 'somestring',
  b: 42,
  c: false
};

const keysArray = myObjectKeys(obj);
console.log(keysArray);
// Object.values()
function myObjectValues(obj) {
  let objArray = [];

  for (let key in obj) {
      objArray = objArray.concat(obj[key]);
  }

  return objArray;
}

const obj2 = {
  a: 'somestring',
  b: 42,
  c: false
};

const ValuesArray = myObjectValues(obj2);
console.log(keysArray);
