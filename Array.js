// syntax to define an array 
//1 ** 
var players = []; // array contain string data types only 
//players.push('david') --> Argument of type 'string' is not assignable to parameter of type 'never' 
players.push('tom');
players.push(4) // as this js we can do this but not in ts 
console.log(players);
//players.push(2) --> Argument of type 'number' is not assignable to parameter of type 'string'    

//2. number 
var evenNum = [2, 4, 6]; //array contain number data types only 
evenNum.push(8);
console.log(evenNum);
//evenNum.push('mike') --> Argument of type 'string' is not assignable to parameter of type 'number' 

//3. another syntax 
var superhero = ['spiderman', 'ironman'];
console.log(superhero);
