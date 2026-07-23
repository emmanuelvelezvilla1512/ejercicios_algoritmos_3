/**
 * Múltiplos de 5: Crea un bucle que muestre únicamente los múltiplos de 5 que se encuentran entre el 0 y el 50
 */
let numero = 0;
while(numero<=50){
    if(numero % 5 === 0){
        console.log(numero);
    }
    numero++;
}