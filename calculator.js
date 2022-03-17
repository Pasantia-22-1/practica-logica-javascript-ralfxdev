let expresion = /[*/+-]/gi;

let ecuacion = ("4-7+8+9/2*3").split(expresion, 20).map(Number);

console.log(ecuacion);

/*let resultado = 0;

for (let i = 0; i < ecuacion.length; i++) {
    resultado += ecuacion[i];
}

console.log(resultado);*/