//Búsqueda de índice: Dado un arreglo de elementos, utiliza un ciclo para encontrar en qué posición (índice) se encuentra un valor específico y detén la búsqueda una vez hallado.


let valor = 6;
let numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56];

for(let i = 0; i < numeros.length; i = i + 1){
if(numeros[i] === valor){
   console.log(i);
break;
 }
}



