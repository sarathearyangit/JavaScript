//JS is a single threaded uske andar sab chig process hoti hai 
 
//browser > inspect > source >snippet
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()