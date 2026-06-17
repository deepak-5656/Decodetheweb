// console.log("Hello World");



// data types in javascript

let a = 10;   //let is  a keyword in js it can store any value like example string, number, boolean, array, object etc. it decide itself what type of datatype
let name = "deepak";

a =30; // we can change the value of a because we have declared it with let keyword

const pi = 3.14; // const is also a keyword in js but we cannot change the value of pi because we have declared it with const keyword


console.log(a,pi);


// data types in js---primitives and non-primitives
// primitives data types are number, string, boolean, null, undefined, symbol
// prmitive data types are immutable means we cannot change the value of a primitive data type once it is assigned. 

//string 
let firstnumber = 10.5;
let firststring = `the value of firstnumber is ${firstnumber}`; // we can use template literals to embed expressions in a string
console.log(firststring);

//boolean
let istrue = true;
let isfalse = false;


// underfined
// let m;
// console.log(m); // undefined means a variable that has been declared but has not been assigned a value

// null
// let b = null; // null means a variable that has been declared and assigned a value of null
// console.log(b);

// bigint

let m = 122333343545343n;
console.log(m);

// symbol
let sym1 = Symbol("hello");
console.log(sym1);


// non-primitives data types are array, object, function 
// this are mutable



let arr = [10,40,"deep",5.3,true];
console.log(arr[2]);

// object

let person = {
    name:"deepak",
    age : 45,
    city:"chennai"
}
console.log(person);

//function

// function is also a datatype like similar to that 
let a = function greet(){
    console.log("hello rohit");
}

console.log(a);





