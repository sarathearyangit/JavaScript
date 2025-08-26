//for loop

for (let i = 0; i < 5; i++) {
    if(i==2){
        console.log(`${i} is even no.`);
    }
    console.log(i);
}

for (let i = 1; i <=1; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(i +'*'+ j +'='+ i*j);
    }   
}

for (let i = 1; i <=1; i++) {
    for (let j = 0; j <10; j++) {
        console.log(i+j);
    }   
}

const myarr=["shikhar","rohit","virat"]

for (let index = 0; index <= myarr.length; index++) {//no out of bound undefined hota hai
    const element = myarr[index];
    console.log(element); 
}

//break and continue

for (let index = 0; index < 7; index++) {
    if(index==5){
        console.log("Detected 4");
        break;
    }
    console.log(index);   
}

for (let index = 0; index < 7; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(index);   
}