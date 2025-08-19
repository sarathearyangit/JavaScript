//JS Array are resizable and can mix of different dt
//JS copy operation create shallow copies change on the real array
//deep copy means no change in the array means only copy banti hai

const arr=[1,2,3,4]
const arr0=["aryan","sarathe"]
const arr1=new Array(7,6,5,8,9)

console.log(arr[2]);
console.log(arr0[0]);
console.log(arr1[0]);

//array method
// arr.push(5)
// arr.push(6)
// arr.pop()

// console.log(arr);

// arr.unshift(9)
// arr.shift()
// console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(4));

const brr=arr.join()
console.log(brr);
console.log(typeof brr);

const crr=arr.slice(1,3)
console.log(crr);
console.log("A",arr);

const drr=arr.splice(1,3)
console.log(drr);
console.log("B",arr);
