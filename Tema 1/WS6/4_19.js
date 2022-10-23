ancho = parseInt(prompt("Introduce el ancho"))

document.write('<table border="0" cellspacing="2" bgcolor="black">')
for (let i = 0; i < 8; i++) {
    document.write('<tr bgcolor="white" height="' + ancho + '">')
    for (let j = 0; j < 8; j++) {
        document.write('<td width="' + ancho + '" bgcolor="')
        if (i % 2 != 0 && j % 2 == 0)
            document.write('white"')
        else if (i % 2 != 0 || j % 2 == 0)
            document.write('black"')
        else document.write('white"')
        document.write('>&nbsp;</td>')
    }
    document.write('</tr>')
}
document.write('</table>')