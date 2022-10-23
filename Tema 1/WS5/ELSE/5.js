examen1 = Number(prompt("Introduce la nota del primer examen"));
examen2 = Number(prompt("Introduce la nota del segundo examen"));
trabajo1 = Number(prompt("Introduce la nota del primer trabajo"));
trabajo2= Number(prompt("Introduce la nota del segundo trabajo"));

media_examen = (examen1 + examen2) / 2;
media_trabajo = (trabajo1 + trabajo2) / 2;
media_ponderada = (media_examen * 0.75 + media_trabajo * 0.25) / 2;

if (examen1<4.5 || examen2 <4.5 || trabajo1 <4.5 || trabajo2 < 4.5){
if (media_ponderada >= 5) {
    window.alert("Has aprobado :)");
}}
else
window.alert("Has suspendido :(");