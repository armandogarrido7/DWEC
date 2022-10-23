n_col = parseInt(prompt("Introduce el numero de columnas"))
alto = parseInt(prompt("Introduce el alto"))
ancho = parseInt(prompt("Introduce el ancho"))

document.write('<table border="1">')
document.write('<tr height="'+alto+'">')
document.write(n_col);
for (let i=0; i<n_col; i++)
{
    document.write('<td width = "'+ancho+'" bgcolor="')
    if (i%2==0)
    {
        document.write('black">')
    } else
        document.write('white">')

    document.write('&nbsp;</td>')
}

document.write("</tr></table>")
