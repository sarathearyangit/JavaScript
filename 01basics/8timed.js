//date

let mydate=new Date()

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);


let newdate=new Date(2023,0,23)  //0 means jan
console.log(newdate.toDateString());

let zdate=new Date(2023,0,22,9,23) 
console.log(zdate.toLocaleString());

let mdate=new Date("08-18-2024")
console.log(mdate.toLocaleDateString());
console.log(mdate.toLocaleString());

let youtimestamp=Date.now()

console.log(youtimestamp);//millisecond from 1 jan 1970 
console.log(mdate.getTime());
console.log(Math.floor(Date.now()/1000));//for converting millisec to sec

let adate=new Date()
console.log(adate)
console.log(adate.getDay());
console.log(adate.getMonth());

//most important
adate.toLocaleString('default',{
    weekday:"long",
})
console.log(adate.toLocaleString());

