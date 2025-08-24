//IIFE(Immediately Invoked function expression)

//Immediatelty execute ho jaye
//global scope ke pollution se problem hoti kai baar hai isliye global scope var ya declaration hai uske pollution ko hatane ke liye iife use karte hai

(function chai(){     
    //named IIFE
    console.log(`DB Connected`);    
})();    //use semicolone for use 2 IIFE 

( () => {     
    //unamed IIFE
    console.log(`DB Connected`);    
})();

( (name) => {     
    //parameter pass
    console.log(`DB Connected ${name}`);    
})('aryan')