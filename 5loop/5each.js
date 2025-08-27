const arr=["asd","qwe","rty","fgh"]

//call back function
// arr.forEach( function (val) {
//     console.log(val);
// }) 

// arr.forEach( (idx) => {
//     console.log(idx);    
// })

// arr.forEach(myarr)
// function myarr(item){
//     console.log(item);    
// }

arr.forEach( (item,index,arr) => {
    console.log(item,index,arr);    
})

const user=[
    {
        lang:"java",
        fname:"js"
    },   //array ke andar object
    {
        lang:"pyhton",
        fname:"ps"
    }
]

user.forEach( (item) => {
    console.log(item.lang);    
})