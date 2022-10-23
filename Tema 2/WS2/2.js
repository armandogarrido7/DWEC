function trigonometry(angle){
    document.write("El seno de " + angle + " es " + Math.round(Math.sin(angle)) + "<br>");
    document.write("El coseno de " + angle + " es " + Math.round(Math.cos(angle)) + "<br>");
    document.write("La tangente de " + angle + " es " + Math.round(Math.tan(angle)));
}

trigonometry(Math.PI);