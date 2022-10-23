function clock() {
    document.body.innerHTML = "";
    date = new Date();
    current_hour = date.getHours() + ":" + date.getMinutes() +":"+ date.getSeconds();
    document.write(current_hour + "<br>");
    setTimeout(clock,1000);
}

setTimeout(clock,1000);