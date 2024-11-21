// Начало проекта

//Первая реализация 
function evenNumbers(){
    const evenNumbersArray = []
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] % 2 === 0){
            evenNumbersArray.push(arguments[i])
        }
    }
    return evenNumbersArray;
}

console.log(evenNumbers(0,10,22,3,4,5))



//Вторая реализация 
evenArr = (...numbers) => numbers.filter((num) => num % 2 ==0);
console.log(evenArr(3,7,1,9,6,5,4,0))