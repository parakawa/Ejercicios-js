function mayorCero(){
	var cantidad=parseInt(prompt("Ingresa la cantidad de números a evaluar: "));
	var cont=0;
	for(i=1;i<=cantidad;i++){
		numero=parseInt(prompt("Ingresa el número "+i+" : "));
		if(numero>0)
			cont++;
	}
	document.write("Hay un total de "+cont+" números mayores a cero.");
}

mayorCero();