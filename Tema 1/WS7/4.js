/*
Write a function called combineTwoArrays that takes in two arrays 
as arguments, and returns a single array that combines both 
(using the spread operator).
*/

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2]
}

array1 = [1, false, 8]
array2 = ["a", 6, 3]
document.write(combineTwoArrays(array1, array2));