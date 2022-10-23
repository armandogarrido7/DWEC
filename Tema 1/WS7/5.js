/*
Write a function called sumEveryOther that takes in any amount 
of arguments, and returns the sum of every other argument.
*/

function sumEveryOther(...numbers) {
    sum = 0
    for (i in numbers) {
        if (i % 2 == 0) {
            sum += parseInt(numbers[i])
        }
    }
    return sum;
}

document.write(sumEveryOther(10, 2, 11))