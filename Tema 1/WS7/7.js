/*
Write a function called combineAllArrays that takes in any number of 
arrays as arguments and combines all of them into one array.
*/

function combineAllArrays(...arrays) {
    combinedArrays = []
    for (array of arrays) {
        combinedArrays = [...combinedArrays, ...array]
    }
    return combinedArrays;
}

array1 = [1, 4, 8]
array2 = [5, 2, 7]
document.write(combineAllArrays(array1, array2));