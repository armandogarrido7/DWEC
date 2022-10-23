/*
Write a function called squareAndSum that takes in any number of arguments,
squares them, then sums all of the squares.
*/

function squareAndSum(...numbers) {
    sum = 0;
    for (number of numbers) {
        sum += number ** 2
    }
    return sum;
}

document.write(squareAndSum(2, 4, 3));