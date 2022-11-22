window.onload = () => {
    contador = [];
    imgs = document.getElementsByTagName('img');
    for (img of imgs){
        img.onclick = (e) => {
            if (!(contador[e.target.alt])){
                contador[e.target.alt] = 0;
            }
        contador_div = document.getElementById('contador');
        contador[e.target.alt]++;
        contador_div.innerHTML = e.target.alt + ":" + contador[e.target.alt] + " clicks";
        console.log(contador[e.target.alt]);
    }
    }
    
}