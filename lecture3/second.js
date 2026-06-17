

// let and const is modern method
// var : is a old method
// console.log(a);
// var a = 10; // var is function scoped and it is hoisted means we can access the variable before it is declared but it will return undefined because it is not initialized yet 



// //why this var is not recommended to use because it can lead to bugs and unexpected behavior in our code because of its function scope and hoisting behavior. 
// if(true){
//     var a =10;
// }
// console.log(a); //see the var keyword is function we can access outside function also so that is why not recommended to use



// operator in javascript
// arithmetic
// console.log(3+4);
// console.log(3-4);
// console.log(3*4);
// console.log(3/4);
// console.log(3%4);
// console.log(3**4); // exponentiation operator


// assaignment operator 
// let a =10;
// let b =20;
// a+=b; // a = a + b
// console.log(a);
// // postincrement
// // a++;
// // console.log(a);
// // pre increment
// ++a;
// console.log(a); 


// comparison operator
// console.log(10>5);
// console.log(10<5);
// console.log(10==5);
// console.log(10!=5);
// console.log(10>=5);
// console.log(10<=5);


// 
// console.log("10"==10); // it compares based on value and type in this the javascript typeconversion its both vvalue into the same range and type

// // type conversion in javascript

// console.log(Number("10")+Number("10")); // it converts the string into number



// In js null is loosely equal to undefined but not strictly equal to undefined because they are different data types.
// console.log(null==undefined); // true
// console.log(null==0);
// console.log(null==1);
// console.log(null==false);


//comparison of null with other comparison operator
// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);



// console.log("10"===10); // it checks strictly the type compares based on value and type in this the javascript will now convert in this automatically



//operator important and operator
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// or operator
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

