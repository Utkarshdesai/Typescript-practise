interface Userdata 
{   readonly id : number , // readonly
    name : string ,
    email : string , 
    address? : string   // optional

    //methods 
    starttrail () : string

}

// redefine interface and inject some values into it 
interface Userdata {
    githubid : string
}

// inherite some properties from interface
interface admin extends Userdata {
    role : "admin" | "user" | "ta"
}

let clientdata : admin = 
{  
    //properties
    name : "Tom" , 
    email : "gh@hc.com" , 
    id :90, 
    role: "admin" , 
    githubid : 'apk' ,
    

    // method
    starttrail: () =>  {
        return "hey there"
    },


} 






export{}

