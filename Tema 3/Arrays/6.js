days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
document.write(days.some(day => day.split('')[0] == 'S'));
document.write(days.some(day => day.split('')[days.length - 1] == 's'));