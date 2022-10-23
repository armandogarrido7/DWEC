
nombres = ["armando", "andres", "jaime"]
for (let nombre of nombres)
{
    console.log(nombre);
}

function suma(a,b,c)
{
    let resultado = a + b + c
    document.write(resultado)
}

let numeros = [1,3,5];
suma(...numeros);