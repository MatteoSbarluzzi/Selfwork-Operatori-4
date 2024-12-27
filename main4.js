let totaleGatti = 23;
let gattiInFila = 5;
console.log(totaleGatti);
console.log(gattiInFila);

let fileComplete = Math.floor(totaleGatti / gattiInFila);
console.log(fileComplete);

let gattiRimanenti = totaleGatti % gattiInFila;
console.log(gattiRimanenti);

let gattiFuori = gattiInFila - gattiRimanenti;
console.log(gattiFuori);


console.log(`Numero di file complete: ${fileComplete}`);
console.log(`Numero di gatti mancanti per completare una nuova fila: ${gattiRimanenti}`);
console.log(`Numero di gatti rimasti fuori: ${gattiFuori}`);