const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('aync task completed')
        resolve();
    },1000);

})
promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('asyn task 2 completed')
        resolve();
    },1000);
}).then(function(){
    console.log('task2 consumed')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('aync task completed')
        resolve({username:"Sourabh",email:"sourabhjoshi6046@gmail.com"});
    },1000);

})
promiseThree.then(function(e){
    console.log(e);
})
