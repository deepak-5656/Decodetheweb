
//to copy the object 

// const customer = {
//     name: "rohit",
//     age:10,
//     value:70,
//     city: "chennai"
// }

// // if i want to access two values from customer age and value i want to destructure that object to get value
// const {age,value} = customer;
// console.log(age,value);


// spread operatores-to create the copy 
// const customer = {
//     name: "rohit",
//     age:10,
//     value:70,
//     city: "chennai",
//     arr: [10,230,43],
//     address:{
//         pincode:342333
//     }
// }

// const customer2 = {...customer};  //this is what spread operator used to create separate copy of cutomer1 same as in customer2 but it wil not change the customer1 both points to different 
// customer2.name = "mani";   //this will change only customer2 not customer1
// customer2.address.pincode=2;  //this nested object will change i think so in customer1
// console.log(customer);


// using structuredclone to create full copy of objects but wont change the customer one anymore it creates different object directly
// const customer2 = structuredClone(customer);
// customer2.arr.push(3);
// console.log(customer);


// for-in loop 
const customer = {
    name: "rohit",
    age:10,
    value:70,
    city: "chennai",
    arr: [10,230,43],
    address:{
        pincode:342333
    }
}
// but this is not recomended so not used directly
for(let key in customer){
    console.log(key);
}