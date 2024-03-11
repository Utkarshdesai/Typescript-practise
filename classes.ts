class Mumbai {

    name :string
    area :string 
    rent :number 
    constructor (name :string , area :string   ) 
    {
       this.name = name,
       this.area = area
       this.rent = 9888
    }
}

const people = new Mumbai ( "IT park" , 'vasai' )

people.rent = 9000 

// public and private 

class home {

    constructor (
        public rooms :string ,
        private cost : number ,
        public area : string 
    ) 
    {
          this.area = area ,
          this.cost = cost ,
          this.rooms = rooms
    }
} 

let mom = new home ('four' , 67 , "red")
//mom.cost --> Property 'cost' is private and only accessible within class 'home' 

// public are acces but not private
