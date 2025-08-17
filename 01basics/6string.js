const name="aryan"
const repoc=2

//console.log(name+repoc+"sarathe");  this is not a good way

console.log(`my name is ${name} and my repocount is ${repoc}`); //string interpolation

const str=new String('shivam-sara')

console.log(str);
console.log(str[0]);
console.log(str.__proto__);
console.log(str.toUpperCase());

console.log(str.length);
console.log(str.charAt(2));
console.log(str.indexOf('v'));

const stre=str.substring(0,3)
console.log(stre);

const atr=str.slice(-1,3)
console.log(atr);

const btr="  asdfg    "
console.log(btr);
console.log(btr.trim());

const url="https://aryan.com/sara%2bhopal"
console.log(url.replace('%2','-'))
console.log(url.includes('sundar'));

console.log(str.split('a'));
