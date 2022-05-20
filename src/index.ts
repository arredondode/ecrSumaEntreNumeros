let numero1: number = Number(prompt("Indique el primer número:"));
let numero2: number = Number(prompt("indique el segundo número:"));
let resultado: number = 0;

if (numero1 < numero2) {
  for (let incremento = numero1; incremento <= numero2; incremento++) {
    resultado = resultado + incremento;
  }
} else {
  for (let incremento = numero2; incremento <= numero1; incremento++) {
    resultado = resultado + incremento;
  }
}
console.log("el resultado es: " + resultado);
