

// real world example using callback--take zomato payment functions

// call back->used to call function inside the function is used that is what the call back function

function zomatoRestaurant(){
    console.log("Restaurant is preparing the order");
}

// same way blinkit also uses same payment function means
function blinkitwarehouse(){
    console.log("Packing order for usser");
}
function payment(amount,callback){
    console.log(amount,"payment is happening");
    console.log("payment is done");
    // zomatoRestaurant();
    callback();      

    // GST
    // commission payment calculate
}

// so it used in this case to improve efficiency that is why we are learning lld 
payment(500,zomatoRestaurant);//now  the function is flexible because using callback if zomoto means i t call that or if blinkit means it will call blinkit payment gateway
payment(1000,blinkitwarehouse);

