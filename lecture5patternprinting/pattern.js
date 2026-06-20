//understanding the loop through pattern printing

// 10- times i need to print hello world using loop but without loop increases the syntax and time 
// for(let i=1; i<=10; i++){
//     console.log("hello world");
// }


// print number from 10 to 1
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// print 10 even numbers from 1;
// for(let i=2; i<=20; i=i+2){
//     console.log(i);
// }



// 17 ke table ko print karna basic program
// method 1;
// for(let i=17; i<=170; i=i+17){
//     console.log(i);
// }
// method 2;
// for(let i=1; i<=10; i++){
//     console.log(i*17);
// }



// inside the loop the post and pre increment perform same  because it is not stored in any other variable so it will perform same 

//sum of first 50 numbers
//using formula also we can do this sum of n natural numbers n*(n+1)/2;
// let sum =0;
// for(let i=1; i<=50; i++){
//    sum = sum+i;
// }
// console.log(sum);



//pattern printing using *
// *****

// for(let i=1; i<=5; i++){
//     console.log('*');  //this is printing in next line not in single line
// }

// let str = "";
// for(let i=1; i<=5; i++){
//     str = str+'*';
// }
// console.log(str);


// pattern
// *****
// *****
// *****
// *****
// *****

// for(let i=1; i<=5; i++){
//     let str = "";
//     for(let i=1; i<=5; i++){
//     str = str+'*';
//     }
//     console.log(str);
// }



//patter
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//it will convert into string in the js okay to print  horizontally if we use console.log it will print in next line
// for(let i=1; i<=5; i++){
//     let str = "";
//     for(let i=1; i<=5; i++){
//     str = str+i+' ';
//     }
//     console.log(str);
// }



//pattern
//*
//**
//***
//****
// for(let i=1; i<=5; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//     str = str+'*';     
//     }
//     console.log(str);
// }
    
//pattern

//****
//***
//**
//*

// for(let i=5; i>=1; i--){
//     let str = "";
//     for(let j=1; j<=i; j++){
//     str = str+'*';     
//     }
//     console.log(str);
// }


// pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for(let i=1; i<=5; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//     str = str+i+' ';     
//     }
//     console.log(str);
// }

// printing the a to z number using ascii value

// for(let i=65; i<=90; i++){
//     console.log(String.fromCharCode(i));
// }


