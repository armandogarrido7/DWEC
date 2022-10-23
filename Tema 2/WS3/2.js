function UpperLower(cad_arg){
    if (cad_arg.toUpperCase() === cad_arg)
        document.write("La cadena está formada solo por mayúsculas");
    else if (cad_arg.toLowerCase() === cad_arg)
        document.write("La cadena está formada solo por minúsculas");
    else document.write("La cadena está formada por mayúsculas y minúsculas");
}

UpperLower("AADA")