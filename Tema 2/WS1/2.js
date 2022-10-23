date = new Date();
fechaHoy = date.getDate();
document.write(fechaHoy + "<br>");

fecha85 = new Date();
fecha85.setDate(date.getDate() + 85);
document.write(fecha85 + "<br>");

fecha187 = new Date();
fecha187.setDate(date.getDate() - 187);
document.write(fecha187 + "<br>");

fecha2anos = new Date();
fecha2anos.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha2anos + "<br>");