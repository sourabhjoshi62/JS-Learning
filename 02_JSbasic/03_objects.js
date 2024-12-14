const JsUser={name:"Sourabh",
    age:21,
    location:"Pune",
    email:"sj@gmail.com"
}
console.log(JsUser.email)
console.log(JsUser["email"])///90% used in projects

JsUser.email="sourabh@gmail.com";
console.log(JsUser["email"])

Object.freeze(JsUser)
JsUser.email="sourabhJ@gmail.com"
console.log(JsUser)

//How??

 JsUser.greeting = function(){
     console.log("Hello JS user");
 };
 console.log(typeof JsUser.greeting());

 JsUser.greetingTwo = function(){
     console.log(`Hello JS user , ${this.name}`);
 };
console.log(typeof JsUser.greetingTwo());

