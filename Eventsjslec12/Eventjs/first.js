

// 4 event listener 

// const child1 = document.getElementById("child1");
// const child2 = document.getElementById("child2");
// const child3 = document.getElementById("child3");
// const child4 = document.getElementById("child4");

// const parent = document.getElementById("parent");
// parent.addEventListener("click", (e)=>{  //this(e) is the event object tell asll the thing where i am clicking and what location exact position of clicked one will be shown
//     console.log("Parent clicked");
//     // console.log(e.target);  //based on this i can get the exact element which is clicked inside the div element
//     e.target.textContent = "I am clicked";
// });


// rather then doing individually see above one using parent id we can change its child value as well
// child1.addEventListener("click", ()=>{
//     child1.textContent = "Child 1 clicked";
// });

// child2.addEventListener("click", ()=>{
//     child2.textContent = "Child 2 clicked";
// });

// child3.addEventListener("click", ()=>{
//     child3.textContent = "Child 3 clicked";
// });

// child4.addEventListener("click", ()=>{
//     child4.textContent = "Child 4 clicked";
// });


// adding 3 event listener to the grandparent id

// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");


// // this is known as event bubbling now can i change the order 
// grandparent.addEventListener('click',()=>{
//     console.log("grandparend is clicked");
// },true);  //by default it is false only okay this shows how to execut when we click if it is true means 

// parent.addEventListener('click',()=>{
//     console.log("parend is clicked");
// },true);    //this false is an capture value; the capture phase if it is false if it is false then it willl execute in bubbling phase (if true means it will execut in capture pahase)


// child.addEventListener('click',()=>{
//     console.log("child  is clicked");
// },true);

// event bubling
// capture phase ---from top to target(child) we reach to capture phase(which means when it is true then it perfom in caputure phase)
// target--when we click that is an target 
// bubbling phase ---from child to parent will be execute this is what known as bubbling phase(this will work when it is in false )



// button element  
// console.log("JS Loaded");
const button = document.querySelector('button');

function handle(){
    button.textContent="clicked";
    //  button.removeEventListener('click',handle);    
}
button.addEventListener('click',handle);
// // in order to remove that eventlistener on the button element
// button.removeEventListener('click',handle);


