function squareCode(text){
    len = text.replace(/ /g,'').length;
    rows = Math.round(Math.sqrt(len));
    columns = Math.round(len/rows);
    text_array = (text.replace(/ /g,'')).split("");
    square_text_array=[];
    coded_array=[];
    cont = 0;
    for (i=0; i<rows; i++){
        square_text_array.push([])
        for (j=0; j<columns;j++){
            square_text_array[i][j] = text_array[cont] ? text_array[cont]: '';
            cont++;
        }
    }
    for (i=0; i<columns; i++){
        for (j=0; j<rows;j++){
            coded_array.push(square_text_array[j][i] != '' ? square_text_array[j][i] : '');
        }
        coded_array.push(' ')
    }
    return coded_array.join('');
}

document.write(squareCode("Tengo mucho sueño "),"<br>");
document.write(squareCode("If man was meant to stay on the ground god would have given us roots") + "<br>");
document.write(squareCode("have a nice day"),"<br>");
