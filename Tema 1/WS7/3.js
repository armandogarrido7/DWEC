/*
Write a function called countTheArgs that can take any number of arguments,
and returns the number of arguments that are passed in.
*/

function countTheArgs(...args) {
    return args.length
}

document.write(countTheArgs(1, 7, 8))