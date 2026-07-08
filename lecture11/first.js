


// selection html elements by id 

// const element = document.getElementById('first');
// element.textContent="Deepak"; 

//if when i will click that time the element of text content should change okay
// const element = document.getElementById('first');
// //see this element is an object contains more property in that object to directly change the html page using javascript document object
// element.onclick = function handleclick(){
//     element.textContent="Deepak";
//     element.style.backgroundColor = "pink";    
// }

// handleclick();


// modern way of writing the above same as onclick funciton
// element.onclick = ()=>{   //this will override above one because it will overrid above one the above one wont work only this will work
//     element.textContent="How are you";    
// }



// movdern way of using onclick is old way so -- is now starting --eventlistener is used instead of above onclick function
// const element = document.getElementById('first');

// element.addEventListener('dblclick',()=>{
//     element.textContent="I am best";
//     element.style.backgroundColor = "yellow";
// })




// creating the own event listener function
// addEventListener: function(str,callback){

//     if(str === 'dblclick'){
//         callback();
//     }
//     else if(str === 'click'){
//         callback();   
//     }
// }



