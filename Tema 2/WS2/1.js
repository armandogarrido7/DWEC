function getRandomNumberBetween0and1(){
    return Math.random();
}
function getRandomNumberBetween100and200(){
    return Math.random()*100;
}
function getRandomNumberBetween(min, max){
    return parseInt(Math.random() * (max - min) + min);
}

document.write(getRandomNumberBetween(50,60));