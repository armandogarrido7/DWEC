function trataRespuesta() {
    if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status === 200) {
            return request.responseText;
        }
    }
}

window.onload = () => {
    check_btn = document.getElementById('check_btn');
    check_btn.onclick = () => {
        request = new XMLHttpRequest();
        console.log(document.getElementsByTagName('input')[0].value);
        request.open('GET', `user.php?user=${document.getElementsByTagName('input')[0].value}`);
        request.onreadystatechange = () => {
            console.log(trataRespuesta());
            div = document.getElementById('response');
            input = document.getElementsByTagName('input')[0];
            input.value = '';
            if (trataRespuesta() == true) {
                div.innerHTML = 'Username available';
                div.style.color = 'lime';
            } else {
                div.innerHTML = 'Username not available';
                div.style.color = 'red';
            }
        }
        request.send();
    }
}
