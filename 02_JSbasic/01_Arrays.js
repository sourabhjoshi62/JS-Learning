//arrays

const myArr=[0,1,2,3,4]
const myHeros=["ironman","nagraj"]
console.log(myArr)
console.log(myArr[0])
console.log(myHeros)

console.log(myArr.push(6))
console.log(myArr)

console.log(myArr.pop())
console.log(myArr)

console.log(myArr.unshift(9))
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))

console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

//Slice and splice

console.log("A",myArr)
const mynl = myArr.slice(1,3) //for arr 0,1,2,3,4 slice(1,3) will give 1,2 as index 3 is not included,,also slice manuplate original array
console.log(mynl)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
