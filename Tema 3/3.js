function lanzamiento(){
    return Math.ceil(Math.random()*6)
}

resultados = [0,0,0,0,0,0,0]
for (i=0;i<6000;i++){
    resultados[lanzamiento()]++
}

for (i=1; i<=6;i++){
    document.write("El numero " + i + " ha salido " + resultados[i] + "<br>");
}