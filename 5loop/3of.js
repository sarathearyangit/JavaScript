//for of
//[{},{},{}]
//["","",""]

const arr=[1,5,7,3]
for (const i of arr) {
    console.log(i);    
}

const str="hello world"
for (const j of str) {
    console.log(j);    
}

const map =new Map()
map.set('name',"aryan")
map.set('lname',"sarathe")

for (const key of map) {
    console.log(map);
}

// const user={
//     'name':-"joy",
//     'lname':-"sara"  //object is not iterable
// }
// for (const [key,value] of user) {
//     console.log(key:-value);
// }

