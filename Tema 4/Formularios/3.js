function checkLowerCase(e) {
    regex = new RegExp('[a-z]');
    if (regex.test(document.getElementsByName('username')[0].value) == true) {
        document.getElementById('lower').style.color = 'lime';
        return true;
    } else {
        document.getElementById('lower').style.color = '#F6A896';
        return false;
    }
}

function checkUpperCase(e) {
    regex = new RegExp('[A-Z]');
    if (regex.test(document.getElementsByName('username')[0].value) == true) {
        document.getElementById('upper').style.color = 'lime';
        return true;
    } else {
        document.getElementById('upper').style.color = '#F6A896';
        return false;
    }

}

function checkSize(e) {
    if (e.target.value.length >= 6) {
        document.getElementById('min').style.color = 'lime';
        return true;
    } else {
        document.getElementById('min').style.color = '#F6A896';
        return false;
    }
}

window.onload = () => {
    username = document.getElementsByName('username')[0];
    username.addEventListener('input', checkLowerCase);
    username.addEventListener('input', checkUpperCase);
    username.addEventListener('input', checkSize);
}