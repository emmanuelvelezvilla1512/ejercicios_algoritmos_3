/**
 * Lista con Espacios: Genera una secuencia de números del 1 al 10 que aparezcan en una sola línea, concatenando cada número con un espacio en blanco
 */
let numero = 1;
let espacio = " ";
while(numero<=10){
    espacio=espacio+numero
    numero++;
    if(numero<=10){
        espacio=espacio+" "
    }

}
console.log(espacio);