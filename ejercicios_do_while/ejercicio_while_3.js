/**
 * Acumulador de suma: Escribe un ciclo que sume los números del 1 al 10 y muestre el total acumulado al finalizar
 */
 let suma = 0;
 let numero = 1;
 do{
     suma=suma+numero
     numero++;
 }while(numero<=10);
 console.log("total:" + suma)