const obj={
    rb:"ruby",
    js:"javascript",
    c:"c plus plus"
}
 
for (const key in obj) {
    console.log(key+":"+obj[key]);    
}

const arr=["asd","qwe","rty"]
for (const key in arr) {
    console.log(key+":"+arr[key]);    
}

// const map =new Map()
// map.set('name',"aryan")
// map.set('lname',"sarathe")  //map is not iterable
// for (const key in map) {
//     console.log(key);
// }
