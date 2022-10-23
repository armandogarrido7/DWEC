/*
Write a function that can take in any number of arguments, 
and returns the sum of all of the arguments
*/

function sum(...numbers) {
    sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i])
    }
    return sum;
}

numbersArray = [1, 2, 5]
document.write(sum(...numbersArray))