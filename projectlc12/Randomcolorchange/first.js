

const parent = document.getElementById('root');

// want to change body background oclor
const body = document.querySelector('body');


parent.addEventListener('click',(e)=>{
    // console.log(e.target);

    body.style.backgroundColor = e.target.id;  //this id is an string that returns from the each button id element okay
    console.log(e.target.id);
})