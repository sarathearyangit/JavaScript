// primitive  
// all are call by value hote hai changes copy mai hote hai

// 7types:String,null,Boolean,No.,undefined,Symbol,BigInt

const ab=100//dynamic type b/c do not need type specify
const vari="aryan"

const outside=null//null
let userEmail;//undef


const id=Symbol('123')
const userid=Symbol('123')

console.log(id===userid)

const bigNo=344553411515552n

//Reference (non primitive)

//Array,Objects,Functions

const heros=["aryan","sara","bhopal"]//Arrays
let myObj={
    name:"joy",
    age: 22,      //object
    gender: "male"
}

const myFunction=function(){
    console.log("hello chat");
}

console.log(typeof null);
console.log(typeof myFunction);

console.log(typeof heros);


//===================
//Stack(primitive)==>ki copy m change hota hai original chamge nahi hota

//that stored in STACK
let myName="aryan22"
 
let myname2=myName

myname2="sarathe"

console.log(myName);
console.log(myname2);

//Heap (non-primitive)==>reference m original change hota hai  

//that stored in HEAP

let user={
    email:"sarathe",
    age:23,
}

let user2=user
user.email="aryan"

console.log(user);
console.log(user2);