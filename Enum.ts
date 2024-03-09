//Enums in TypeScript allow you to create a set of named constants, 
//which can represent a predefined set of options or categories. 
// it is useful when you want to deal with options categories 

enum seats {    //could generate more code
    window  ,
    middle = 8, 
    cabin
    
}
// by default value of window is 0 and increases down the order 

let myuser = seats.cabin 

const enum car {  //could generate one line code
    
    size ,
    color ,
    price    
    
}
// by default value of window is 0 and increases down the order 

let userchoice = car.price