function locateCad(cad_arg, subcad){
    positions = [];
    cad_array = cad_arg.split("");
    index = cad_array.indexOf(subcad);
    while (index != -1){
        positions.push(index);
        index = cad_array.indexOf(subcad, index + 1);
    }
    // document.write(positions);
    return positions;
}

function removeRepeatedCharacters(cad_arg){
    array = [];
    for (character of cad_arg){
        if ((locateCad(cad_arg, character)).length <= 1)
            array.push(character);
    }
    return array.join('');
}

document.write(removeRepeatedCharacters("aami go"));

