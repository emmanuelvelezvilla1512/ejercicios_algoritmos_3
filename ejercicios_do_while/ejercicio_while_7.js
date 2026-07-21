/**
 * Salto con continue: Escribe un ciclo del 1 al 10 que imprima los números, pero que "salte" la impresión del número 5 usando la sentencia continue
 */
let n = 1;
do{
    if(n===5){
        n++;
        
        continue;
    }
console.log("conteo: " + n);
n++;
}while(n<=10);
