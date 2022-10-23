function decodeSquareCode(text){
    decoded_message = [];
    text_without_spaces = text.trim(' ');
    text_array = text_without_spaces.split('');
    len = text_without_spaces.length;
    rows = Math.round(Math.sqrt(len));
    columns = Math.round(len/rows);
    for(i=0;i<rows;i++){
        for(j=i;j<len;j+=rows){
            decoded_message.push(text_array[j]);
            if (decoded_message.length >= len){
                console.log('hola');
                decoded_message.pop();
            }
        }
    }
    decoded_message = decoded_message.join('');
    
    return decoded_message; 
}

document.write(decodeSquareCode('imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau'));
document.write(decodeSquareCode('hae and via ecy'));