function ahorro(){
var meses=prompt('Ingresa el número de meses ahorrados:');
suma=0;
for(i=1;i<=meses;i++){
	ahorro=prompt('Ingresa el ahorro en el mes '+i+' en soles: ');
	suma=suma+parseInt(ahorro);
	}
	
	alert('El total ahorrado en los '+meses+" meses es: "+"s/."+suma);
}

ahorro();