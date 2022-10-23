function invierteCadena(cad_arg){
    return cad_arg.split("").reverse().join("");
}

function inviertePalabras(cad_arg){
    inv_cad = cad_arg.split(" ")
    for (i in inv_cad){
        inv_cad[i] = invierteCadena(inv_cad[i]);    }
    inv_cad = inv_cad.join(" ")
    return inv_cad;
}

function encuentraPalabraMasLarga(cad_arg){
    longest_word = "";
    for (word of cad_arg.split(" "))
    {
        if (word.length > longest_word.length)
            longest_word = word;
    }
    return longest_word;
}

function filtraPalabraMasLarga(cad_arg, i){
    cont = 0;
    for (word of cad_arg.split(" ")){
        if (word.length > i)
            cont++;
    }
    return cont;
}

function cadenaBienFormada(cad_arg){
    new_cad = cad_arg.toLowerCase();
    new_cad= cad_arg.charAt(0).toUpperCase() + new_cad.substr(1);
    return new_cad;
}

document.write(invierteCadena('obol') + "<br>")
document.write(inviertePalabras("Los duros y frios dias de invierno") + "<br>");
document.write(encuentraPalabraMasLarga("Los duros y frios dias de invierno"), "<br>")
document.write(filtraPalabraMasLarga("Los duros y frios dias de invierno", 4) + "<br>");
document.write(cadenaBienFormada("AguAcaTe"));