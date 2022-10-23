n_col = parseInt(prompt("Introduce el número de columnas"))
n_fil = parseInt(prompt("Introduce el número de filas"))
alto = parseInt(prompt("Introduce el alto"))
ancho = parseInt(prompt("Introduce el ancho"))

document.write('<table border="0" cellspacing="2" bgcolor="black">')
for (i=0; i<n_fil; i++)
{
    document.write('<tr bgcolor="white" height="'+alto+'">')
    for(j=0; j<n_col; j++)
    {
        document.write('<td width="'+ ancho +'">&nbsp;</td>')
    }
    document.write('</tr>')
}
document.write('</table>')