//singleton

//object literals 

const symbo=Symbol("@")

const jsUser={
    name:"aryan",
    [symbo]:"@++",
    email:"@aryan",
    "full-n":"asarathe",
    age:24
}

console.log(jsUser.email);//you can access but in case "eamil" like that you can't access
console.log(jsUser["email"]);//isko string ki tarah lo kyuki ye ek string ki tarh rakha hai
console.log(jsUser.fulln); //you can't access from this method

console.log(jsUser["full-n"]);
console.log(jsUser[symbo]);

// jsUser.email="@aryan sara"
// Object.freeze(jsUser)    // ab change nahi ho ga
// jsUser.email="@aryan sarathe"   
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello buddy");    
}
jsUser.greeting2=function(){
    console.log(`Hello buddy, ${this.name}`);    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());




