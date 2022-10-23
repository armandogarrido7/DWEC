function clock() {
    document.body.innerHTML = "";
    seconds--;
    document.write(seconds + "<br>");
    if (seconds == 0)
        document.write("FIN DEL TEMPORIZADOR");
    else setTimeout(clock, 1000);
}

seconds = 60;
document.write(seconds);
setTimeout(clock, 1000);