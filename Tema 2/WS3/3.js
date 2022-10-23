function locateCad(cad_arg, subcad){
    positions = [];
    cad_array = cad_arg.split("");
    index = cad_array.indexOf(subcad);
    while (index != -1){
        positions.push(index);
        index = cad_array.indexOf(subcad, index + 1);
    }
    return positions;
}

document.write(locateCad("algunas veces hace frio", "a"));