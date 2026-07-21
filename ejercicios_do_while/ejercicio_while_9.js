/**
 * Formato de lista: Genera una secuencia de números del 1 al 20 que se impriman en una sola línea, concatenados con un guion ("-") entre ellos
 */
let numero = 1;
let guion = "";
do{
    guion = guion + numero;

    if (numero < 20) {
        guion = guion + "-";
    }
numero++;
}while(numero<=20);
console.log(guion);



