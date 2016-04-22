function primo(){
	var n=parseInt(prompt("Ingrese el número a testear:"));
	var i=2;
	while(i<n){
		if(n%i==0){
			document.write("El número "+n+" no es primo");
			break;}
		else 
			i++;
	}
	if(i==n)
		document.write("El número "+n+" es primo");
}

primo();