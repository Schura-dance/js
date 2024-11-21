// Начало проекта

//Реализация_1
function sum(){

    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}

console.log(sum(1,2,3,4,5))
console.log(sum())

//Реализация_2 
const sumNew = (...numbers) => numbers.reduce((sum, total) => sum + total, 0)
console.log(sumNew(1,2,3))
console.log(sumNew())