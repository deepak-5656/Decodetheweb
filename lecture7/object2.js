

// const user = {
//     name: "rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:90
// }

// // how to aceess the oobject information using 
// // console.log(user.name,user.amount);
// // or
// console.log(user["name"]);
// // i can add new key into the object because it stores in form of key:value
// user.adhar=23232;
// console.log(user);
// // update the value inside the object
// user.age = 29;
// console.log(user);
// // if i want to delete any info in object
// delete user.amount;
// console.log(user);



//if i want to delete the whole object how it is done learn by your self


// object with methods 
// const user = {
//     name: "deepak",
//     age:20,
//     email:"negi@gmail.com",
//     amount:90,
//     // creating methods inside the object 

//     greet: function(){
//         console.log("hello ji");
//     },
//     // we can put object also inside the object
//     addresss:{
//         city:"chennai",
//         pincode: 23232
//     }
// }
// user.greet();
// console.log(user.addresss.city);




// other methods used in objects

// const customer ={
//     name:"deep",
//     age:20,
//     accountNumber: 1232422,
//     balance:40,
//     city: "chennai"
// }
// i  want to print only the keys of that customer object not the values
// console.log(Object.keys(customer));         //it returns keys in the form of arrays
// console.log(Object.values(customer));        //returns only values

// if i want keys:values at same time
// console.log(Object.entries(customer));

// if i want to only access keys in objects
// const customerkeys = Object.keys(customer);   //this returns all in the form of array so we can put for loop and access see below
// for(const key of customerkeys){
//     console.log(key);
// }

// // or we can iterate like this also 
// for(const ans of Object.entries(customer)){
//     console.log(ans);
// } //or we can write like below as well both are same 
// for(const [key,value] of Object.entries(customer)){
//     console.log(key,value);
// }



// object reference type
const obj1 = {name:"deep"};
const obj2 = obj1;

obj2.name = "mohit";  //this is will change the original object as well because it stores reference not by value

console.log(obj1);




