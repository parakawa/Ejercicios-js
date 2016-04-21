function pago(){
	var pagoMensual=10;
	var pagoTotal=0;
	for(i=1;i<=20;i++){
		document.write("El mes "+i+" pagó "+pagoMensual+'<br>');
		pagoTotal=pagoTotal+pagoMensual;
		pagoMensual=pagoMensual*2;
	}
	document.write("Después de 20 meses habrá pagado s/."+pagoTotal);
}

pago();