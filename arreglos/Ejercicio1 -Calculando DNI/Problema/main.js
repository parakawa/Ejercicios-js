function dni(){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var dni=parseInt(prompt("Hola, ingresa tu DNI: "));
	var letra=prompt("Hey, dime cuál es la letra de tu DNI: ");
	if(dni>0 && dni<=99999999){
		var resto=dni%23;
		var letter=letras[resto];
		if(letra==letter)
			alert("El número y la letra del DNI han sido correctos. Eres un éxito");
		else 
			alert("La letra o el número de DNI ingresaste, no es correcto. Según el algoritmo, tu letra es "+letter+" y tu DNI es "+dni );
	}
	else alert("Número de DNI no es válido");
}

dni();

