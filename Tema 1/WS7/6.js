/*
Write a function called onlyUniques that can take in any number 
of arguments, and returns an array of only the unique arguments.
*/

function onlyUniques(...args) {
    result = []
    for (arg of args) {
        if (!(result.includes(arg))) {
            result.push(arg)
        }
    }
    return result;
}

document.write(onlyUniques('cat', 'cat', 'dog', 'pig') + "<br>");
document.write(onlyUniques(1, 4, 7, 1, 2, 7, 4));