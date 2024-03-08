// type checking at parameter 

//1. ** this code is still working not throwing any error as we are not checking types 
function addfive (num)  // parameter num has implicit any type 
{ 
    console.log(num.toUpperCase()) // this should not be allowed 
    return num + 5;
}

addfive(3)  //type of num is any 



//2.** modified code for type checking  
function addtwo (num1 :number)  // type checking 
{  
    //num1.toUpperCase()   -- >  not acess on number 
    return num1+2 ;
}

addtwo(4)  
//addtwo('4')  --> // Argument of type 'string' is not assignable to parameter of type 'number'

//3.** best practice to define and call functions 
function signup (name:string , email:string , isloged:boolean) 
{
    console.log(name)
    console.log(email)
    console.log(isloged)
}

signup ('utk' , "av@gmail.com" ,true)

//4.** arrow functions --> defalut values 

const login = (name :string , email: string , islogin : boolean = true) =>  // give deflute values
{
   
}

login('hitesh' , 'abc@') 

//*****   BETTER WAY TO WRITE FUNCTIONS *****/

// return from function 

//5.
function getsum (num3 : number) : number // always return a number 
{
  return num3*4
  //return 'hii' - >  Type 'string' is not assignable to type 'number'
} 

getsum(3)

//6 . arrow function 
const greetmsg = (name : string):string =>  { //always return a string 
    return `welcome ${name}`
    //return 5 ->  Type 'number' is not assignable to type 'string'.
}

greetmsg('john') 

//7. function is not returing anything 

function showerr (error : string) : void {  // function return nothing 
    console.log(error)
}

showerr('404 not found')












export {} 
