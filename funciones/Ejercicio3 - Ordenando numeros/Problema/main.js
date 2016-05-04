function ordenado(){
	var x;
	for(var i=0;i<3;i++)
		x[i]=parseInt(prompt("Ingrese el valor "+(i+1)+":"));
	for(var k=0;k<3;k++){ 
		may=x[0];
		men=x[0];
		med=x[0];
		if(may<=x[i])
			may=x[i];
		if(men>=x[i])
			men=x[i];
		if(may!=x[i] && men!=x[i])
			med=x[i];
	}
	document.write("el orden ascendente es: "+men+" "+med+" "+may);
}

ordenado();