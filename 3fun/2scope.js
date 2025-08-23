let a=300
var b=500
const c=600
d=10

if(true){
    let a=3
    var b=5
    const c=6
    d=1
    console.log("inner:"+d);
    console.log("inner:"+a);
    console.log("inner:"+b);
    console.log("inner:"+c);
}
console.log(d);
console.log(a);
console.log(b);
console.log(c);


function parent(){
    const drink="juice"

    function child(){
        const icecream="banila"
        console.log(drink); 
    }
    child()
   // console.log(icecream);   //out of scope
}
parent()


if(true){
    const user="joy"
    if(user=="joy"){
        const name="jitendra"
        console.log(user+name);        
    }
    // console.log(name);  //out of scope
}
// console.log(user);  //out of scope


console.log(one(5))
function one(num){  //function
    return num+1             
}

//mini hoisting
console.log(two(8));   //cannot because two before initalization
const two=function(num){   //function expression
    return num+1
}