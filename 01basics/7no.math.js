const score=200
console.log(score);

const value=new Number(300)
console.log(value);

console.log(value.toString());

const qwer=500.769
console.log(qwer.toFixed(2));
console.log(qwer.toPrecision(4));

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));

//========MATH========================

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.max(9,5,3,4));
console.log(Math.min(9,5,3,4));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min);