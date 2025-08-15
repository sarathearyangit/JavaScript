const accId=123
let accEmail="aryan123"
var accPassword="1234"
accCity="Jaipur"
let age="5"

if(age<=5){
    let age=4//block scoped
    //if var=4  function scoped
    console.log(age)//age=4
}
console.log(age)//age=5
//if var=4  
//accId=2 not allowedn

accEmail="sarathe"
accPassword="01011001"
accCity="Bhopal"
let aryan;
/*not to use var
because of issue in block scope and funtional scope*/
console.log(accId);
console.log([accEmail,accPassword,accCity]);
console.table([accEmail,accPassword,accCity,aryan]);