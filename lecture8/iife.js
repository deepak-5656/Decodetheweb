// IIFE function --this function is used to call automatically after function is created  it is wrapper in brackets

// (function hello(){
//     console.log("hello");

// })();  //this bracket is used to callthe function after the funciton is written now if we execute the file it will call automatically call this function and it is get printed as ouput



// javascript functions in one function we can call or pass the other function that is possible in js
//using callback funciton --means passing the function inside function
// function greet(){
//     console.log("hello man");
// }

// function meet(callback){
//     console.log("hello meet");
//     callback();
// }
// // greet();
// // meet();

// meet(greet);



// callback--example2

// function greet(){
//     console.log("hello man");
// }

// function morning(){
//     console.log("Good moring");
// }
// function meet(callback){
//     console.log("hello meet");
//     callback();
//     console.log("i am done");
// }


// meet(greet); 
// we can use multiple functions in this
// meet(morning);