

// set gives unique value of array and it does not allow duplicate values in array

// const arr = [10,20,10,20,12,15,12,"Rohit","mohit",70,"Rohit",{name: "Rohit", age: 20},{name: "Rohit", age: 20}];  //but in case of object it will allow duplicate values because it is reference type and it will store the reference of object in memory so it will allow duplicate values in set


// const s1 = new Set(arr);
// console.log(s1);



// how to create set  to insert in this
// const s1 = new Set();
// s1.add(10);
// s1.add(20);
// s1.add(74);
// s1.add(20);

// console.log(s1); 


//where set is used in real world

const email = ['rohit@gmail.com','sonu@gmail.com','rohit@gmail.com'];
const uniqueEmail = new Set(email);

// if i want to add all the set values in array we can use spread operator to convert set into array 
// const arr = [...uniqueEmail]; 
console.log(uniqueEmail);


