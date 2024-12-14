//const tinderUser = new Object() -->singleton
/*const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedin =false

console.log(tinderUser)

const regularUser={
    email:"sourabh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sourabh",
            lastname:"Joshi"
        }
    }

}
console.log(regularUser) */


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//console.log(obj3)

const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj3)
console.log(obj4)


