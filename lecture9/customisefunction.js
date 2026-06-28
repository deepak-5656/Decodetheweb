

// 
const arr = [10,98,40,17,49,39];

// arr is used to store like object ineternally in js u can see in console as well
// const arr ={   like this is stored in js internally
//    '0':10,
//    '1':98
// }
// creating customised funciton  --for sorting

arr.sorting = function(){
    for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1] = temp;
        }

        
    }

    }
}

arr.sorting();
console.log(arr);







