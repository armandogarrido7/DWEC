function genera_tabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i <= 100; i++) {
        var hilera = document.createElement("tr");
        for (var j = 0; j <= 100; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(' ');
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("cellspacing", 0)
}

function changeColour(e) {
    if (e.ctrlKey)
        e.target.style.backgroundColor = 'red';
    else if (e.shiftKey)
        e.target.style.backgroundColor = 'blue';
    else if (e.altKey)
        e.target.style.backgroundColor = 'white';
}

function eraseCanvas(e) {
    let tds = document.getElementsByTagName('td');
    for (i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = 'white';
    }
}

window.onload = ( ) => {
    boton = document.getElementsByTagName('button')[0];
    boton.addEventListener('click', eraseCanvas);
    genera_tabla();
    let tds = document.getElementsByTagName('td');
    for (i = 0; i < tds.length; i++) {
        tds[i].addEventListener("mouseover", changeColour)
    }
}
