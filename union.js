"use strict";
// The first way to combine types you might see is a union type. 
// A union type is a type formed from two or more other types, 
// representing values that may be any one of those types. 
// We refer to each of these types as the union’s members
Object.defineProperty(exports, "__esModule", { value: true });
//1 . union in number, strings , boolen 
var score = 7; // score could be string or number 
score = '100';
// let smith :  admin = {name :"smith" , id :45} 
//smith = {username: "max" , id: 45} --> Object literal may only specify known properties, and 'username' does not exist in type 'admin'
var smith = { name: "smith", id: 45 };
smith = { username: "max", id: 45 };
// union in functions 
function guess(id) {
    console.log(id);
}
guess(4);
guess("fine");
// both will work as id of number or string 
//4 ** --> union narrowing 
function guesswhat(is) {
    // is.length  -->  Property 'length' does not exist on type 'string | number'.
    if (typeof is === "number") // check for number or string 
     {
        return is.toExponential();
    }
    else {
        return is.length;
    }
}
// arrays 
//let ipl : number [] = [12, "yes"] ---> array of only numbers
//let names : string [] = ["no" , 6] ---> array of string type only 
var college = [12, "rit", true, 78];
// array contain number string and boolean 
var pi = 3.14;
