// best practice - try to avoid any to bug free code 
 
let hero ;

// noimplicitAny - when you don't define type like here is hero ts will infer as any 
// try to avoid as any is not type checked 

function greeet ()
{
    return 'welcome'
}

hero = greeet() // type of hero is any 


// ****  when to use any ***
// when you dont want to check type checking you can use Any

