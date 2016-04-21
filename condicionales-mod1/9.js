function hamburguesa(tipo){
	switch(tipo) {
    case 'sencilla':
        return 20;
        break;
    case 'doble':
        return 25;
        break;
    case 'triple':
        return 28;
        break;
    default:
        return "tipo de hamburguesa incorrecta"
	}
}

function pago(tipo){
	switch(tipo) {
    case 'efectivo':
        return 1;
        break;
    case 'credito':
        return 1.05;
        break;
    default:
        return "tipo de pago incorrect0"
	}
}

function costo(hamburguesa,pago,numero){
	return hamburguesa(hamburguesa)*pago(pago)*numero;
}

console.log("El costo total es $"+costo('sencilla','efectivo',2));