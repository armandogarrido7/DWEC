function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


window.onload = () =>{
    if (getCookie("colorFondo")){
        document.body.style.backgroundColor = getCookie("colorFondo")
    }
    btnRojo = document.getElementById('rojo');
    btnAzul = document.getElementById('azul');
    btnRojo.onclick = () => {
        document.body.style.backgroundColor = 'red';
        setCookie("colorFondo", "red", 15);
    }
    btnAzul.onclick = () => {
        document.body.style.backgroundColor = 'blue';
        setCookie("colorFondo", "blue", 15);
    }
}