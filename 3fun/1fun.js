function myname(){
    console.log("a")
    console.log("r")
    console.log("y")
    console.log("a")
    console.log("n")
}
myname()

function addno(n1,n2){  //fun ke andar param
    let sum=n1+n2
    return sum
}
const result=addno(2,3)//fun call mtlb argu
console.log(result);

function loginumsg(username){
       return `${username} is logged` 
}
console.log(loginumsg("sarathe"));
console.log(loginumsg(""));  //is logged
console.log(loginumsg());   //undefined

function msg(username="asd"){
       return `${username} is logged` 
}
console.log(msg());   //or kuch pass kiya toh overwrite ho jayega


// function asdf(...num1){
//     return num1
// }
// console.log(asdf(100,200,500,700));

function asdf(val1, val2, ...num1){
    return num1
}
console.log(asdf(100,200,500,700));

//OBJECT

// const user={
//     user1:"joy",
//     price:234
// }
function udetails(anyobj){  //any obj comes here
    console.log(`username is ${anyobj.user1} and price is ${anyobj.price}`);
}
// (udetails(user));  //we call obj

udetails({        //another type
    user1:"joy",
    price:234
})

//ARRAY

const arr=[100,200,300,400]

function myarrr(anyarr){
    return anyarr[1]
}
// console.log(myarrr(arr));
console.log(myarrr([100,200,300,400]));