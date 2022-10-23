
mes = prompt("Introduce un mes del año")

switch (mes){
    case "Enero":
    case  "Marzo":
    case "Mayo" :
    case  "Julio":
    case"Agosto":
    case "Octubre":
    case"Diciembre":
        window.alert("El mes " + mes + " tiene 31 dias");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        window.alert("El mes " + mes + " tiene 30 dias");
        break;
    case"Febrero":
        window.alert("El mes " + mes + " tiene 28 o 29 dias");
        break;
}