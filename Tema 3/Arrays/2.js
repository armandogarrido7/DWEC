function sort(numbers){
    numbers.sort((a,b) => a-b)
    return numbers;
}

document.write(sort([4,8,3,10,5]));