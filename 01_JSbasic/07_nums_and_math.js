/******************Nums******************/

 const score=400
 console.log(score)

 const balance = new Number(100)
 console.log(balance)

 console.log(balance.toString())

 console.log(balance.toString().length)

 const otherNumber=23.8966
 console.log(otherNumber.toPrecision(3))
 const othersNumber=231.8966
 console.log(othersNumber.toPrecision(3))

 const hundreds = 1000000
 console.log(hundreds.toLocaleString())
 console.log(hundreds.toLocaleString('en-IN'))


/*************** MATH *****************************/

 console.log(Math);

 console.log(Math.abs(-4))


 console.log(Math.round(4.6))//5
 console.log(Math.ceil(4.2))//5
 console.log(Math.floor(4.9))//4
 console.log(Math.sqrt(4))//2
 console.log(Math.min(4,3,6,8))//3
 console.log(Math.max(4,3,6,8))//8


 console.log(Math.random())
 console.log((Math.random()*10))
 console.log((Math.random()*10)+1)

const min =10
const max=20

console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*(max-min+1)+min))


