//Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
// find largest number
function findLargestNumber(arr){
    largest = 0;
    for (num of arr){
        if (num >= largest){
            largest = num;
        }
    }
    return largest;
}
// find longest string
function findLargestNumber(arr){
    largest = 0;
    for (num of arr){
        if (num >= largest){
            largest = num;
        }
    }
    return largest;
}
// find even numbers
// find odd numbers
// find words that contain 'is'
// assert all numbers are divisible by three
// zip two arrays together
// sort joined array from smallest to largest
// remove the first word in the array
// place a new word at the start of the array
// replace some elements

arr=[9,8,-1,5,12,-9];

document.write("El numero más grande es " + findLargestNumber(arr));