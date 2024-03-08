// but it’s common to want to use the same type more than once and refer to it by a single name.
// A type alias is exactly that - a name for any type. The syntax for a type alias is:
// here user type can be several times for functions  
type user = {
    name : string ,
    age : number ,
    islogged : boolean
}

function userLogin (User : user) : user
{
   return ({name : "" , age : 3 , islogged:true})
}

userLogin({name : "" , age : 3 , islogged:true}) 



// 2 ** 
 type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCord({ x: 100, y: 100 });