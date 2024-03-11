// It looks at these special checks (called type guards) and assignments, 
// and the process of refining types to more specific types than declared is called narrowing.

//type guard 
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"

function detecttype (value:(string| number) ) 
{
    if(typeof value == 'string') // handle a case for a string 
    {
        return value.toLocaleLowerCase()
    }
    return value + 5 // handle for number 
} 

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


// real exmaple to is which type of account admin or student 
// ** in narrowing **
interface student
{
  name:string
  email :string
} 

interface admin 
{
    name:string 
    email:string 
    isadmin:boolean
}

function accounttpe (user: student | admin) 
{  
   // check account type for admin 
   if("isadmin" in user)
   {
    return user.isadmin
   }
    return false
}

//** instanof basically used for new */ 

// let x = new date --> x instance of date  

function logValue(x: Date | string) {
    //check instance of date if it x 
    if (x instanceof Date) {
      console.log(x.toUTCString());
                   
    } else {
      console.log(x.toUpperCase());
                 
    }
  }

//*** type predicates */

type Fish = { swim: () => void };
type Bird = { fly: () => void }; 

function isswim (pet : Fish | Bird) : pet is Fish
{
   return (pet as Fish).swim !== undefined;
}

function getfood (pet : Fish | Bird)
{
   if(isswim(pet))
   {
      pet
      return 'fish'
   }
   else{
     pet
     return 'bird'
   }
}


//** descrimated union  */ 
interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
  type Shape = Circle | Square; 

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
                        
    }
  }

  
 
function getArea1(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}