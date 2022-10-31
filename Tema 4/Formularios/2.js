function checkPattern(e, pattern){
    regex = new RegExp(pattern);
    if (regex.test(e.target.value) == false){
        e.target.style.border = '3px solid red';
    } else e.target.style.border = '3px solid lime';
}
window.onload = () => {
    username_input = document.getElementsByName('name')[0];
    username_input.addEventListener('blur', (e) => {checkPattern(e, 'armando')});
    surnames_input = document.getElementsByName('surnames')[0];
    surnames_input.addEventListener('blur', (e) => {checkPattern(e, 'armando')});
    dni_input = document.getElementsByName('dni')[0];
    dni_input.addEventListener('blur', (e) => {checkPattern(e, '')});
    phone_input = document.getElementsByName('phone')[0];
    phone_input.addEventListener('blur', (e) => {checkPattern(e, '')});
    email_input = document.getElementsByName('email')[0];
    email_input.addEventListener('blur', (e) => {checkPattern(e, '')});
    username_input = document.getElementsByName('username')[0];
    username_input.addEventListener('blur', (e) => {checkPattern(e, '')})
}