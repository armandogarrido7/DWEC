function validate(string, pattern){
    return RegExp(pattern).test(string)
}