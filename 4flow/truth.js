const arr=[]

if(arr.length===0){
    console.log("arr is empty");   
}

const brr=[1,2,3]

if(brr.length===0){
    console.log("arr is empty");
}else{
    console.log(`arr's length ${brr.length}`);
}

//falsi value  
// null, undefined, 0, -0, Nan, false, "" ,BigInt 0n

//truth value
//"0", " ", [] ,{} ,'false' ,function(){}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("empty object");    
}

//nullish coalescing operaror (??): null undefined

let val1;
// val1=5??10     //5
// val1=null??10  //10
// val1=undefined??15//15
val1=null??10??20 //10

console.log(val1);

//terniary operator

const iceTea=100
iceTea<=80?console.log(true):console.log(false);


