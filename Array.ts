// syntax to define an array 

//1 ** 
const players : string[] = []    // array contain string data types only 

//players.push('david') --> Argument of type 'string' is not assignable to parameter of type 'never' 

players.push('tom') 
console.log(players)

//players.push(2) --> Argument of type 'number' is not assignable to parameter of type 'string'         

//2. number 
const evenNum : number[] = [2,4,6] //array contain number data types only 
evenNum.push(8)
console.log(evenNum) 

//evenNum.push('mike') --> Argument of type 'string' is not assignable to parameter of type 'number' 

//3. another syntax 

const superhero : Array<string> = ['spiderman' , 'ironman']
console.log(superhero) 

export {}