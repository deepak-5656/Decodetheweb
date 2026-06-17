// primitive data types are immutable means we cannot change the value of a primitive data type once it is assigned.
// in primitive data type it will not update the addresss directly it will update by value not as reference 


let firstnumber = 10.5;
let secondnumber =20;

firstnumber = 15.5; // we cannot change the value of a primitive data type once it is assigned but we can reassign it to a new value into new location not on existing location 
console.log(firstnumber,secondnumber);


// non primitive data types are mutable means we can change the value of a non-primitive data type once it is assigned.
// copy by reference means it will update the address directly it will update by reference not as value

let obj1  = {
    name: "deep",
    age:21
}

let obj2 = obj1; // copy by reference
obj2.name = "john"; // this will also change obj1's name because they both point to the same memory location
console.log(obj1, obj2);



// example of copy by value and copy by reference
// let a = 10;
// let b = 10;
// console.log(a==b);  //it compares based on value no the address(reference) okay



let obj3 = {
    name: "deep",
    age:21
};




// let obj4 = {...obj3}; // copy by value (shallow copy)
let obj4 =  obj3;
obj4.name = "john"; // this will not change obj3's name
console.log(obj3, obj4,obj3==obj4);


// 
// const a =10;   //once const is initialised we cannot reassign or update the value of a constant variable 
// const b = a;
// b = 30;
// console.log(a==b);

//example of const datatype

const a = {
    name: "deep",
    age:21
}
a.name = "mohan"; // we can change the value of a property of an object even if the object is declared as const

// but we cannot create same name of object a above because it is used as const keyword

console.log(a);


// privitive datatype is used to store deirectly value in memeory
// non privitive datatype is used to store reference of the variable in memory
// a=10,b=14,  arr=1000,obj=432323;

