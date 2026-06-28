// previously studied call back function ..it is used to assaign a function as argument inside other function 


// best example using call back funciton as calculator deveopment
function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function calculator(num1,num2,callback){
    console.log("Doing the calculations");
    const result = callback(num1,num2);

    console.log(`your result: ${result}`);

}

calculator(10,23,add);
calculator(10,23,mul);

// we can pass the funciton directly for division also 

calculator(10,23,function(a,b){  //like this also we can create function using callback
    return a/b;
});


//