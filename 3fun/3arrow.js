const user={
    username:"asdf",
    price:56,

    msgfile: function(){
        console.log(`${this.username},hers is a website`);
        console.log(this);

        
    }
}
// user.msgfile()
// user.username="joy"
// user.msgfile()

// console.log(this);       //{}

//window ke andar global object h window obj

const chai=function(){
    console.log(this);     //only this big code
}
chai()

const coffee=function(){    
    const myname="aryan"
    console.log(this.myname);   //undefined     
}    
coffee()

const tea= () =>{
    const myname="aryan"
    console.log(this.myname);   //undefined     
}    
tea()


const addtwo=function(num1,num2){
    return num1+num2
}
console.log(addtwo(3,5));

const addtoo=(num1,num2) =>  ( num1+num2)
console.log(addtoo(3,5));

const addoob=(num1,num2) =>  ({use:"aryan"})
console.log(addoob());        //for object