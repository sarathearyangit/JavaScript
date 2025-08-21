//const User=new Object    {}    //singleton object  
const newUser={}   //non singleton object

newUser.place="bhopal"
newUser.age=20
newUser.logged=false

console.log(newUser);

const rUser={
    email:"sarathe@123",
    fullname:{
        userfullname:{
            firstn:"aryan",
            lastn:"sarathe"
        }
    }
}
console.log(rUser.fullname.userfullname.lastn);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

let obj3={obj1,obj2}
console.log(obj3);

obj3=Object.assign({},obj1,obj2)
console.log(obj3);

obj3={...obj1,...obj2}
console.log(obj3);

const user=[
    {
        id:1,
        email:"@aryan"
    },
    {
        id:2,
        email:"@joy"
    },
    {
        id:3,
        email:"@roy"
    }
]
console.log(user[1].email)

console.log(newUser);
console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));

console.log(newUser.hasOwnProperty('place'));