function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}
//sayMyName()

function addtwonumbers(num1,num2){
    console.log(num1+num2)
}
//addtwonumbers(3,4)

function addtwonumbers1(num1,num2){
    let result=num1+num2
    return result
}
//console.log(addtwonumbers1(4,6))

function addtwonumbers2(num1,num2){
    return num1+num2
}
console.log(addtwonumbers2(7,8))


function message(username){
    if(username===undefined){
        console.log("Please Enter Something!!")
        return
    }
    return`${username} just logged in`
}
console.log(message())


