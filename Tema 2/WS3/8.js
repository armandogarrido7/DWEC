function countWords(cad){
    cad_array = cad.split("");
    document.write(cad_array);
    return cad_array.length;
}

document.write(countWords("hola que tal a todos mis amigos"))