/*
Write a function called addOnlyNums that can take in any number of arguments 
(including numbers or strings), and returns the sum of only the numbers.
*/

function addOnlyNums(...numbers) {
    onlyNumberSum = 0;
    for (n of numbers) {
        if (typeof n === "number") {
            onlyNumberSum += n;
        }
    }
    return onlyNumberSum;
}


document.write(addOnlyNums(2, 4, 8, "hola", 7, "adios"));