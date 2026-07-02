


const arr = [10,20,40,73,18];  //reduce is used to reduce the array into a single value based on the operation it gives only one value
// const sum = arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);  //0 is the initial value of accumulator(it gives the sum of all the number we can perform any operation using reduce function)
// console.log(sum);

// for multiplication of number  using reduce function

const product = arr.reduce((accumulator,currentValue)=>accumulator*currentValue,1);  //1 is the initial value of accumulator
console.log(product);



