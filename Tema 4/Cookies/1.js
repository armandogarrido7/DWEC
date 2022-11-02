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

window.onload = () => {
    if (getCookie("username")){
     
        document.write("Bienvenido " + getCookie("username") + "<br>");

        document.write("Color de Fondo: <input type='color' name='fondo' value="+ getCookie('colorFondo') + "><br>")
        colorFondoBtn = document.getElementsByName('fondo')[0];
        colorFondoBtn.onchange = () =>{
            setCookie('colorFondo', colorFondoBtn.value);
            document.body.style.backgroundColor = getCookie('colorFondo');
        }

        document.write("Color de Letra: <input type='color' name='cletra' value="+ getCookie('colorLetra') + "><br>")
        colorLetraBtn = document.getElementsByName('cletra')[0];
        colorLetraBtn.onchange = () =>{
            setCookie('colorLetra', colorLetraBtn.value);
            document.body.style.color = getCookie('colorLetra');
        }

        document.write("Tamaño de Letra: <input type='number' name='letra' min=10 max=20 value="+ getCookie('tamanoLetra') + "><br>")
        tamanoletraBtn = document.getElementsByName('letra')[0];
        tamanoletraBtn.onchange = () =>{
            setCookie('tamanoLetra', tamanoletraBtn.value);
            document.body.style.fontSize = getCookie('tamanoLetra');
        }
        
        document.write("<button id='cerrar'>Cerrar Sesión</button>");
        cerrarSesionBtn = document.getElementById('cerrar');
        cerrarSesionBtn.onclick = () => {
            setCookie("username", '', 0);
            location.reload();
        }
        if(getCookie('colorFondo')){
            console.log(getCookie('colorFondo'));
            document.body.style.backgroundColor = getCookie('colorFondo');
        }
        if(getCookie('colorLetra')){
            document.body.style.color = getCookie('colorLetra');
        }
        if(getCookie('tamanoLetra')){
            document.body.style.fontSize = getCookie('tamanoLetra');
        }
    } else {
        username = prompt("Introduce tu nombre de usuario");
        setCookie("username", username, 0.00347222222);
        location.reload();
    }
    
}