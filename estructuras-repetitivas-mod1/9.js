function media(x){
	var suma=0;
	for( var i=0; i<40;i++)
		{suma=suma+x[i];}
	console.log("La calificación promedio es de "+suma/40);
}

function baja(x){
	var baja=x[0];
	for(var i=1;i<40;i++) {
		if(x[0]>x[i])
			baja=x[i];
		else baja=x[0];
	}
	console.log("La calificación más baja fue "+baja);
}

