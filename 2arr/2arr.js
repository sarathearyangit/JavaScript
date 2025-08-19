const arr=["anshi","aakrati","sarathe"]
const brr=["aadi","dev","manvik"]

// arr.push(brr);
// console.log(arr);
// console.log(arr[3][2]);

const newarr=arr.concat(brr)
console.log(newarr);

const newa=[...arr,...brr]
console.log(newa);

const zarr=[1,2,3,[4,5,],6,[8,[3,4,5]]]
const newzarr=zarr.flat(Infinity);
console.log(newzarr);

console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name:"aryan"}));//[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));