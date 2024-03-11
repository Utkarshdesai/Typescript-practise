interface quiz
{
    name:string 
    subject : string
}

interface course 
{
    author:string 
    price:number
} 

// generic class handle common scanorio
class sellable <T>{
    public cart :T[]= []

    addtocart(product:T) {
       this.cart.push(product)
    }
}