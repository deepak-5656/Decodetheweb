// date scripting
// to get date and time using date
// const now  = new Date();    //new keyword is used it means it is an object so date() is an js object it retrives date and time from local system through code
// // console.log(now.toString());
// console.log(now.getDate());  //to retrive date only
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getMinutes());
// console.log(now.getSeconds());



// other way to create date in js
// const now = Date.now();    //it returns in the form of Timestamp: in Millisecond:1782143780833 
// console.log(now);
// why timestamp is used to check correct time in seconds which is universal so it will be easier to check according to that utc time convert where time is importatnt to compare in leetcode contest and all


// timestamp --gives output in millisecond which is in number
// const now = Date.now(); 
// console.log(now);


// other way to write date --new date(year,month,day,hours,minutes,seconds,ms);
const mydate= new Date(2021,8,4,6,20,11,123);
console.log(mydate);
 



