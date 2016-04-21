function suma(){
	var x=null;
	var suma=0;
	for(i=0;i<10;i++){
		x[i]=parseFloat(prompt("Ingresa el número "+(i+1)+" :"));
		suma=suma+x[i];
	}
	alert("La suma de los números es "+suma);
}

suma();