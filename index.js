
/* create a function and give the input
 cheak the condition "num" is true or false
 and then function call  */

function evenNumber(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const even = evenNumber(42)
console.log(even)