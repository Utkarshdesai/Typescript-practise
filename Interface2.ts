interface capturephoto 
{
   size : string ,
   format : string ,
   date : string 
}

interface story {
    createstory () : string
}

class youtube implements capturephoto , story 
{
    constructor (
        public size : "300k" ,
        public format : 'jpg' ,
        public date : '45 march' ,
        private price : 908  // add extra properties
    ) 
    {}

    createstory () :  string {
        return 'story is created'
    }
}