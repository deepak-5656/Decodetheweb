

const arr = [2,54,18,11,20,2];

// const answer= arr.filter((num)=>num>20);  //in this array if any number greater then 20 will return that elements
// console.log(answer);


// if i want to create own filter method i can able to create the customized function same it will work with same as above one learned

Array.prototype.filtered = function(callback){
    const answer = [];
 
    for(let num of this){     //rather then writing arr it wil point to the only that array and if we write this means it can point to any other arrray if we pass okay
        if(callback(num)){
            answer.push(num);
        }
    }

    return answer;

}


let ans = arr.filtered((num)=>num>10);  //this filtered--is the name of customised function kept wby us only
console.log(ans);




// example

// const a = [-10,29,2,4,19,14];
// const answer  = a.