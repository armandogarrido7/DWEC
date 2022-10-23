function printWord(word){
    document.write('<table>');
    for (j = 0; j < word.length; j++){
        document.write('<tr>');
        for (i = 0; i < word.length; i++){

       
        if (j== 0){
            document.write('<td>'+ word[i] + "</td> ");
        } else if (j == word.length-1)
            document.write(word.reverse[i])
        else {
            
        }
    }
    document.write('</tr>');
    }
    document.write('</table>');
}


printWord("HOLA")