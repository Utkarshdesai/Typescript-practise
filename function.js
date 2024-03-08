"use strict";
// type checking at parameter 
Object.defineProperty(exports, "__esModule", { value: true });

//1. ** this code is still working not throwing any error as we are not checking types 
function addfive(num) {
    console.log(num.toUpperCase()); // this should not be allowed 
    return num + 5;
}
addfive(3); //type of num is any 


//2.** modified code for type checking  
function addtwo(num1) {
    //num1.toUpperCase()   -- >  not acess on number 
    return num1 + 2;
}
addtwo(4);
