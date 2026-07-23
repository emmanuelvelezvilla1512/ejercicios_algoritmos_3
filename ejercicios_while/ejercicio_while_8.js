/*
Uso de Continue: Crea un programa que cuente del 1 al 5, pero que "salte" la impresión del número 3 y continúe con los demás números de la secuencia
*/
let numero = 1;
while(numero<=5){
    if(numero === 3){
    numero++;
        continue;


    } 

    console.log(numero);
    numero++;

}




    