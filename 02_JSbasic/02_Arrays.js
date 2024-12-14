const marvelHeros=["ironman","thor","spiderman"];
const dcHeros=["Superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3])
// console.log(marvelHeros[3][1])


const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);
console.log(allHeros[3]);

//spread(...)

const all_new_heros = [...marvelHeros,...dcHeros]
console.log(all_new_heros)

//flat
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from({name:"Sourabh"}))//interesting case

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4))





