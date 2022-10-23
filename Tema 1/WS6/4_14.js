n_col = parseInt(prompt("Introduce el numero de columnas"))
alto = parseInt(prompt("Introduce el alto"))
ancho = parseInt(prompt("Introduce el ancho"))

document.write('<table border="1">')
document.write('<tr height="'+alto+'">')
document.write(n_col);
i=0
while (i<n_col)
{
    document.write('<td width = "'+ancho+'" bgcolor="')
    if (i%2==0)
    {
        document.write('black">')
    } else
        document.write('white">')

    document.write('&nbsp;</td>')
    i++
}

document.write("</tr></table>")
