function isPalindrome(cad){
    splitted_cad = cad.split('');
    reversed_cad = (cad.split('')).reverse();
    console.log(splitted_cad, reversed_cad)
    return  splitted_cad.join() == reversed_cad.join();
}

document.write(isPalindrome('ababa'))