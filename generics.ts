// being able to create a component that can work over a variety of types rather than a single one 
// This allows users to consume these components and use their own types.
// these generics are reusable 


const score : Array<string> = ['34' ,'90'] 
const catches : Array<number> = [34 ,90] 
const ismarried : Array<boolean> = [true , false] 

// what can do so that instead of making three different array one single array 
// that can used over all data types primitive and custome 

// understand with functions 

//1 - accepts string and return string only
function identity1 (arg : string) : string 
{
  return 'yes'
}

//1 - accepts number and return number only
function identity2 (arg : number) : number 
{
  return 3
}

//3 --> by using any its not a best practise 
function identity3 (arg :any) :any 
{
    return 4
}
identity3("4") 

//generics --> logs the type that you give to the arg 

function identity4<T>(arg: T): T {

     
    //console.log(arg.length) // Property 'length' does not exist on type 'T' as T is not an array
    return arg;
}
identity4('hey')

// generics in arrays
// method -->1 
function filtershirts<T>(product: T[]): T
{ 
    console.log(product.length)  // not throw any error as product is an array
    const index = 7 
    return product[index]           // return an array of some index
} 

// methods --> 2 
function filterpants<p>(product: Array<p>): Array<p>
{ 
    console.log(product.length)  // not throw any error as product is an array
    const index = 7 
    return product          // return an array of some index
} 



function filterid <T>(product: T[]): number
{   
    //get an array do some operation on it return a number 
    return 9
}

// generics with fat arrow function
const getpants = <Type>(product: Type[]):number => {
     return 4
}


//generic with objects
interface delhi 
{
    area:number 
    spaek :string
}

function definedelhi <T , U extends delhi>(val1 : T , val2: U)
{
   return {  //return the object
    val1 ,
    val2
   }
}

definedelhi('people' , {area:78 , spaek :"hindi"})


export{}