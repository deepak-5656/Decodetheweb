

// understanding or building customized funcitons for sortiing so we can unerstand how functions work

const arr = [10,98,40,17,49,39];

Array.prototype.sorting = function(callback){   //why we are writing array.prototype is to remove that function error type message in compiler will learn later this concept
    for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(callback(arr[j],arr[j+1])){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1] = temp;
        }


    }

    }
}

arr.sorting((a,b)=>a>b);  //this is custom logic if a>b then swap a and b otherwies dont swap them
arr.sorting((a,b)=>b>a);  //this for printing descending order using customize funciton  built by  developer/ Now it get to know  how function works

console.log(arr);



