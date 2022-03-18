let operacion = "4-7+8+9/2*3";
let expresion = /[*/+-]/gi;
let signos = /[0123456789]/gi;

let ecuacionNumeros = (operacion).split(expresion, 20).map(Number);
let ecuacionSignos = (operacion).split(signos, 20).slice(1, -1);

console.log(ecuacionNumeros);
console.log(ecuacionSignos);

resultado = 0;
ciclo = 0;

while(ciclo<2){
    
    ciclo++;

    for (let index = 0; index < ecuacionSignos.length; index++) {
        if(ecuacionSignos[index] == "-"){
            resultado = ecuacionNumeros[index] - ecuacionNumeros[index+1];
            ecuacionNumeros.splice(index,2,resultado);
            ecuacionSignos.splice(index,1);
        }
        if(ecuacionSignos[index] == "+"){
            resultado = ecuacionNumeros[index] + ecuacionNumeros[index+1];
            ecuacionNumeros.splice(index,2,resultado);
            ecuacionSignos.splice(index,1);
        }
        if(ecuacionSignos[index] == "/"){
            resultado = ecuacionNumeros[index] / ecuacionNumeros[index+1];
            ecuacionNumeros.splice(index,2,resultado);
            ecuacionSignos.splice(index,1);
        }
        if(ecuacionSignos[index] == "*"){
            resultado = ecuacionNumeros[index] * ecuacionNumeros[index+1];
            ecuacionNumeros.splice(index,2,resultado);
            ecuacionSignos.splice(index,1);
        }   
    }
}

console.log(ecuacionNumeros);
console.log(ecuacionSignos);
console.log(resultado);