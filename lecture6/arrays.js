//Arrays--array is the collection of values into the single stored variable 


// let marks = [30,20,11,80,79];
// console.log(marks);
// // find the number of element in the array
// console.log(marks.length);


//to access the individual element in the array
// let marks = [30,20,11,80,79];
// // console.log(marks[2]);
// // to print all the elements of the array

// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }



// we can store any type of value in array like heterogeneous type of data--means different type and homogeneous-same type
// let user = [10,68,"Rohit",true,{name:"stane"}];
// console.log(user);


// // can i update the value inside the array?- yes we can do it
// user[1] = 907;
// console.log(user);


// we can push or pop(inserts at end and removes the element at last) the element in the array 
// let num = [30,20,11,80,79];
// num.push(44);
// console.log(num);
// num.pop();
// console.log(num);



// to delete or insert element at the start of an array(in js numbers take 8 byte storage not as 4 byte)
// let num = [30,20,11,80,79];
// num.unshift(11,22);
// console.log(num);
// // to delete the element at start
// num.shift();
// console.log(num);



//in js array is not contigious because it stores different type of values. like if string stores large sentence i will not stroes in contigous manner
//IN JS WE IMPLEMENT ARRAY AS AN OBJECT NOT AS ACTUAL ARRAY


// for of loop used more 

// let num = [30,20,11,80,79];
// for(let x of num){
//     console.log(x);
// }


//functions used in array
// slice--origincal array wont change if we apply this function
// let marks = [30,20,11,80,79];
// const a  = marks.slice(2,4);
// console.log(a);

// splice  ---original array will change the if we apply the splice functin okay 

// let marks = [30,20,11,80,79];
// const a  = marks.splice(2,3);
// console.log(a);
// console.log(marks);



//starting element using splice can i delete or insert the element at starting position or not will see now
// let marks = [10,20,30,40,50,60,70];
// marks.splice(2,1);   //it will delete the 2nd index by specifing 1 element
// console.log(marks);
// // for inserting 2 element from second index 41,91.
// marks.splice(2,0,41,91); //i dont want to delete so keep as 0 second position
// console.log(marks);