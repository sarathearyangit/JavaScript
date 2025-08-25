const month="2"  //string

switch(month){
    case "1":
        console.log("January");
        break;
    case "2":
        console.log("Febrary");
        break;                 //agar match ho gaya hai uske bad bhi execute hoga except dafault
    case "3":
        console.log("March");
        break;                    
    default:
        console.log("doesn't match");        
        break;

}