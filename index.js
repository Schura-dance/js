

// Задание 2

//Реализация_1
function evenNumbers() {
    const evenNumbersArray = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) {
            evenNumbersArray.push(arguments[i]);
        }
    }
    return evenNumbersArray;
}
console.log(evenNumbers(0, 1, 2, 3, 4, 5));

//Реализация_2
evenArr = (...numbers) => numbers.filter((num) => num % 2 === 0)
console.log(evenArr(1, 5 , 8, 23, 5, 7, 8, 0))