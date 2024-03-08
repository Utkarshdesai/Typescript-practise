//syntax to write types
//1. string 
var user = "alex";
console.log(user);
// it will throw error which number is assigned to string  
//user = 9 
console.log(user.length);  // able to acess methods with string only not number like length,charat and many more 


//2.number - there is no int and float these are number 
var userid = 4.3; // it is still a number  
console.log(userid);
// it will throw error which number is assigned to string  
//user = 9 
console.log(user.length);

//3. boolen 
var isloggedin = true;
// isloggedin = 4  not do this  


// type inferance 
// this is best way to define variable as ts is smart enough to know you can access method on it as well 
var id = 34;
id.toExponential();
