num1 = parseInt(prompt("Jugador 1, introduce un numero"))
num2 = undefined
while (num1 != num2)
{
    num2 = parseInt(prompt("Jugador 2, introduce un numero"))
    if (num2>num1)
        alert("El numero introducido es mayor")
    else if (num2<num1)
        alert("El numero es menor")
    else alert("Has acertado :D")
}