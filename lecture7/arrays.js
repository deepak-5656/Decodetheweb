// sorting function --how does it works?

// const names = ["Rohit","Mohan","Sohan","Yash","Rajat","rohit"];
// // sort: ascending order 
// names.sort();        //(it compares based on ascii value in alphabetically order )
// // names.reverse();   //this is for discending order 
// console.log(names);


// in case of numbers how this sort function works --same it will convert number into string and sort alphabatically some cases it gives wrong result of sorting so we use comparitor in the sort function

// this method will give the wrong sorting becuase is sorts number using alphabetical order
// const num = [10,20,19,101,23,78,4];
// num.sort();
// console.log(num);

// correct way to use sort funciton in numbers are 
//  const num = [10,20,19,101,23,78,4];
// num.sort((a,b)=>a-b);    //this is for ascending order
// num.sort((a,b)=>b-a);   //this is for descending order
// console.log(num);



const num = [10,"rohit",19,true,23,78,null];
num.sort(); //why this function treat every number or all type as string becuase in js array can store any type(datatype) of value so that is why it converts all into string ans sorts
console.log(num);

