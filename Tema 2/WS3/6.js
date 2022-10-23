function isSubCad(cad, subcad){
    index = cad.toLowerCase().indexOf(subcad.toLowerCase());
    if (index != -1)
        document.write('La cadena "' + subcad + '" es una subcadena de "' + cad + '" y empieza en la posicion ' + index);
    else document.write("La cadena " + subcad + " no es una subcadena de " + cad);

}

isSubCad("que agua mas fresquita", "AgUa");