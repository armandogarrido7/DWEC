function sortLetters(cad_arg){
    vocals = [];
    consonants = [];
    cad_arg = cad_arg.split(' ').join('');
    for (letter of cad_arg) {
        if (letter === "a" || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u"))
            vocals.push(letter)
        else consonants.push(letter)
    }
    return [...consonants, ...vocals].join('')
}

document.write(sortLetters("hola buenas tardes a todos"))