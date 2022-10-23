function showTreasureMap(map){
    document.write('<br>');
    for (i=0; i<map[0].length; i++){
        for (j=0; j<map[0].length; j++){
            document.write(map[i][j] + "    |   ")
        }
        document.write('<br>');
    }
    document.write('<br>');
}
function createTreasureHunt(dimension){
    map = []
    for (i=0; i<dimension; i++){
        map.push([]);
        for (j=0; j<dimension; j++){
            map[i][j] = 0;
        }
    }
    solucion = [];
    x = Math.ceil(Math.random()*dimension);
    y = Math.ceil(Math.random()*dimension);
    document.write("Solucion: " + x,y);
    map[x-1][y-1] = x*10+y;
    for (i=0;i<8;i++){
        do {
        x2 = Math.ceil(Math.random()*dimension);
        y2 = Math.ceil(Math.random()*dimension);
        } while (map[x2-1][y2-1] != 0);
        solucion.push(x*10+y);
        map[x2-1][y2-1] = x*10+y;
        x = x2;
        y = y2;
    }
    for (i=0; i<dimension; i++){
        map.push([]);
        for (j=0; j<dimension; j++){
            if (map[i][j] == 0){
                map[i][j] = Math.ceil(Math.random()*dimension)*10 + Math.ceil(Math.random()*dimension);
            };
        }
    }
    document.write("<br>Camino: " + solucion.reverse());
    return map;
    
}

map = createTreasureHunt(5);
showTreasureMap(map);