function descuento(precio){
	if(precio>=2500)
		return precio*0.15;
	else 
		return precio*0.08;
}

function preciofinal(precio){
	return precio-descuento(precio);
}

console.log("El precio final es $"+preciofinal(4000)+"y el descuento aplicado fue de $"+descuento(4000));