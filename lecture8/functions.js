// what is function,why do we need it


// create function in js
// function greeting(){
//     console.log("Hello world");
// }
// greeting(); //function call


// function to addnumbers
// function addnumbers(num1,num2){  //no need to write data type in this like c++and java
//     // console.log(num1+num2);
//     return num1+num2;
// }
// const ans = addnumbers(2,3);
// console.log(ans);




// how to handle the functions in js

// function addNumber(num1,num2,num3=0,num4=0){
//     return num1+num2+num3+num4;
// }

// console.log(addNumber(3,11));
// console.log(addNumber(3,4,8));
// console.log(addNumber(3,5,9));
// console.log(addNumber(45,3));


// how to take or pass more values into the function using rest operator

// function addnumber(...arr){
//     let sum=0;
//     for(const num of arr){
//         sum+=num;
//     }
//     return sum;

// }

// console.log(addnumber(11,2,4,5,6,6,43,54,22,53,24,32,22));




// difference between spread and rest operator

// let arr = [10,20,30,40,50];

// //spread operator
// const arr2 = [...arr];  //it will copy the arr int arr2 thats it but it should exist the array otherwise wont work

// //console.log(arr2);
// // rest operator
// const[first,second,...third] = arr;   //this will put rest all the eleent into the third one
// console.log(first,second,third);


// second method to create function
// using variable also we can store the function 
// const greet = function(){
//     console.log("hello jji");   //in case of return value we need to store in variable in function call then we need to print that varaible of returned value

// }
// greet();


// third type to create the functions widely used in development as well
// arrow functtion---important***

// const greet = ()=>{       //instead of writing function keyword we use the arrow function
//     console.log("hello ji");  
// }
// greet();


// example --to add number

// const addnumber = (num1,num2)=>{  //this addnumber remember carefully it holds entire function not any return value of that function it means like we need to write (const ans = addnumer(parameter,parameter2));
//     return num1+num2;
// }

// console.log(addnumber(3,9));
// in shorter form also we can write above example
// const addnumber = (num1,num2)=>num1+num2; 



// this shorter function is used only on one parameter,no need to used bracket {}
// const square = (num)=>num*num;  //this function not used in backend because it is not more readable that is but somewhere it is used 




// arrow function --examples using objects inside function
// const user = ()=>{

//     const obj = {
//         name: "rohit",
//         age:20,
//     }
//     return obj;
// }
// console.log(user());
// in simpler to return single object we use less syntax see same above can also implemented like this
// const user = ()=>({name:"rohit",age:20}); 


