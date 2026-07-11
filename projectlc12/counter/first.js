

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const h1 = document.querySelector('h1');

let count=0;
btn1.addEventListener('click',()=>{
    count++;
    h1.textContent=`counter is: ${count}`;
})
btn2.addEventListener('click',()=>{
    if(count==0) return;  //to handle edge cases on this okay
    count--;
    h1.textContent=`counter is: ${count}`;
    
})