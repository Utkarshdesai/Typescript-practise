// The first way to combine types you might see is a union type. 
// A union type is a type formed from two or more other types, 
// representing values that may be any one of those types. 
// We refer to each of these types as the union’s members


//1 . union in number, strings , boolen 
let score : number | string  = 7  // score could be string or number 

score = '100' 

//score = true -->  Type 'boolean' is not assignable to type 'string | number'
 
type user  = {
    username : string ,
    id: number
} 

type admin = {
    name : string ,
    id: number
}

 // let smith :  admin = {name :"smith" , id :45} 

 //smith = {username: "max" , id: 45} --> Object literal may only specify known properties, and 'username' does not exist in type 'admin'

 let smith :  user | admin = {name :"smith" , id :45} 

 smith = {username: "max" , id: 45}

 
 // union in functions 

 function guess ( id : number|string) 
 {
   console.log(id)
 }
 guess (4)
 guess("fine") 
 // both will work as id of number or string 


//4 ** --> union narrowing 

function guesswhat (is : number | string)  // this paramter could be string or number 
{ 
     // is.length  -->  Property 'length' does not exist on type 'string | number'.
     
    if (typeof is ==="number")  // check for number or string 
    {
      return is.toExponential()
    }
   else 
    {
      return is.length
    }
}

// arrays 

//let ipl : number [] = [12, "yes"] ---> array of only numbers

//let names : string [] = ["no" , 6] ---> array of string type only 

let college : (string | number | boolean ) [] = [12 , "rit" , true , 78] 
// array contain number string and boolean 

let pi :3.14 =3.14
//pi= 54 --> Type '54' is not assignable to type '3.14


export{}