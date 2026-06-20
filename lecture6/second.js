


//array operations
// let arr1 = [10,20,30,40,50];

// const arr2 = arr1;
// arr2[2]=84;//it will change the value of arr1 also because array stores by reference not by value
// console.log(arr1); 



// two dimension array
// const arr = [[10,20,30],[40,50,60],[20,11,18],[43,52,63]];

// console.log(arr.length);
// // printing of 2d array
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);     //it will print each row not single element 
// }
// // this method is to print each element one by one we can use the for off loop as well

// for(let row=0; row<arr.length;row++){
//     for(let col=0; col<arr[row].length; col++){
//         console.log(arr[row][col]);
//     }
      
// }

// using the for each loop we can print the 2d array


// tasks
// const num1 = [10,20,30,40,50];
// const num2 = [42,12,54,11];

// // const num = num1.concat(num2);  //this function is used to add all the elements into single array not as array inside array
// // console.log(num);

// // shortcut approach for concat function we are now going to see which is spread operator
// const num = [...num1,...num2];    //widely used in the programing to add elements of different array into individual elements into the single array
// console.log(num);

 


// array operators(important)
// const num = [10,20,30,40,50];
// // using destructuring (...->this is rest operator)
// const [first,second,...remaining] = num;  //it returns the the first and second element of nums array(in this remaining will store the rest all elements of the array)
// console.log(first,second,remaining);

// left hand:rest operator
// right hand: spread operator


