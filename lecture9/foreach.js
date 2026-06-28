

const arr = [10,20,8,19,14,23];

// this is one of looping method to traverse the array it is a method in array
// arr.forEach((num,index)=>{
//     console.log(num);
// })

// now understanding how foreach method works using customised similare to foreach method
const printer = (num)=>{
    console.log(num);
}
Array.prototype.forloop = function(callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}
arr.forloop(printer);  //this is what callback is passed in this function


//funtions
// function aditya(num1){
//     console.log(num1);

// }
// aditya(10,39);  //it will catch 10 only ignore rest all element

