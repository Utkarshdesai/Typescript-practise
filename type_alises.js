function userlogin(User) {
    return ({ name: "", age: 3, islogged: true });
}
userlogin({ name: "", age: 3, islogged: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
